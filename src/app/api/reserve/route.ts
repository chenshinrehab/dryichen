import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

// 自動為每筆網頁預約產生一組隨機不重複的預約 ID
function generateShortId(): string {
  return 'BK' + Math.random().toString(36).substring(2, 7).toUpperCase();
}

// 🚀 一、POST: 處理「病患送出掛號問卷」與「線上釋出取消名額」雙分流
export async function POST(request: Request) {
  try {
    const body = await request.json();
    // 💡 確實接收前端傳過來的 lineDisplayName
    const { action, id, date, timeSlot, name, phone, email, part, reason, treatment, lineUserId, lineDisplayName } = body;

    // 💡 分流處理 1：病患端/醫師端「自主取消預約」
    if (action === "cancelAppointment") {
      if (!id) {
        return NextResponse.json({ success: false, error: '缺少預約 ID' }, { status: 400 });
      }
      
      await sql`
        DELETE FROM appointments 
        WHERE id = ${id};
      `;
      
      return NextResponse.json({ success: true });
    }

    // 💡 分流處理 2：標準「填寫送出預約掛號問卷」
    if (!date || !timeSlot) {
      return NextResponse.json({ success: false, error: '缺少預約日期或時段' }, { status: 400 });
    }

    // 🚀 核心防爆機制優化：在正式 INSERT 寫入之前，先去資料庫檢查該日期與時段是否剛剛已被他人搶先預約
    const { rows: existingApt } = await sql`
      SELECT id FROM appointments 
      WHERE date = ${date} AND (time_slot = ${timeSlot} OR time = ${timeSlot});
    `;

    if (existingApt && existingApt.length > 0) {
      // 如果已被預約，立刻安全攔截並回傳錯誤，防範 Race Condition (多人同時送出) 造成的重複掛號
      return NextResponse.json({ success: false, error: '該時段剛剛已被其他病患優先預約，請重新選取其他空缺時段！' });
    }

    const bookingId = generateShortId();
    const cleanPhone = phone ? phone.toString().trim() : '';

    // 🚀 正統乾淨作法：各自回歸獨立欄位，保持原有變數處理與最純淨結構
    const finalLineUserId = lineUserId ? lineUserId.toString().trim() : '未關聯';
    const finalDisplayName = lineDisplayName ? lineDisplayName.toString().trim() : '';

    // 🚀 寫入資料庫：將 line_display_name 獨立塞入新欄位，其餘不變
    await sql`
      INSERT INTO appointments (id, date, time_slot, name, phone, email, part, reason, treatment, line_user_id, line_display_name)
      VALUES (
        ${bookingId}, 
        ${date}, 
        ${timeSlot}, 
        ${name}, 
        ${cleanPhone}, 
        ${email || '未填寫'}, 
        ${part || '未填寫'}, 
        ${reason || '未填寫'}, 
        ${treatment || '未填寫'}, 
        ${finalLineUserId},
        ${finalDisplayName}
      );
    `;

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Vercel Postgres 處理預約/取消失敗:', error.message);
    return NextResponse.json({ success: false, error: error.message || '操作失敗' }, { status: 500 });
  }
}

// 🚀 二、GET: 處理「醫師端拉取整張名冊」與「病患端輸入手機/LINE自主查詢」
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const action = searchParams.get('action');
    const type = searchParams.get('type');
    const value = searchParams.get('value');

    // 1. 醫師端後台：撈取所有資料庫中的特約報表
    if (action === 'getAllAppointments') {
      const { rows } = await sql`
        SELECT * FROM appointments 
        ORDER BY date ASC, time_slot ASC;
      `;
      return NextResponse.json({ success: true, list: rows || [] });
    }

    // 2. 病患端前台：依據條件進行精準自主檢索
    if (type === 'phone' && value) {
      const { rows } = await sql`
        SELECT * FROM appointments 
        WHERE phone = ${value.trim()} 
        ORDER BY date ASC;
      `;
      return NextResponse.json({ success: true, list: rows || [] });
    } else if (type === 'line' && value) {
      // 💡 保持最乾淨的精準比對，回歸原本比對原 Uxx 代碼的邏輯
      const targetValue = value.trim();
      const { rows } = await sql`
        SELECT * FROM appointments 
        WHERE line_user_id = ${targetValue}
        ORDER BY date ASC;
      `;
      return NextResponse.json({ success: true, list: rows || [] });
    }

    // 若無帶入任何符合的規格參數，預設直接安全回傳空陣列
    return NextResponse.json({ success: true, list: [] });
  } catch (error: any) {
    console.error('Vercel Postgres 讀取預約明細失敗:', error.message);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}