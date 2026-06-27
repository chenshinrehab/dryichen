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
    // 💡 確實接收前端傳過來的參數
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
    if (!date || !timeSlot || !phone) {
      return NextResponse.json({ success: false, error: '缺少預約必要參數 (日期、時段或手機號碼)' }, { status: 400 });
    }

    const cleanPhone = phone.toString().trim();

    // ----------------------------------------------------------------
    // 🚀 新增規則 1：檢查該手機號碼未來「已預約」的總時段上限
    // ----------------------------------------------------------------
    const todayISO = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split('T')[0];
    const { rows: userFutureApts } = await sql`
      SELECT date, time_slot FROM appointments 
      WHERE phone = ${cleanPhone} AND date >= ${todayISO};
    `;

    if (userFutureApts && userFutureApts.length >= 3) {
      return NextResponse.json({ success: false, error: '只開放預約三個時段' });
    }

    // ----------------------------------------------------------------
    // 🚀 新增規則 2：防密集預約，新預約與現有所有預約日期需間隔滿三天 (72 小時)
    // ----------------------------------------------------------------
    const newTargetDateTime = new Date(`${date} ${timeSlot.split(' ')[0]}`);

    for (const apt of userFutureApts) {
      const existingDateTime = new Date(`${apt.date} ${apt.time_slot.split(' ')[0]}`);
      const timeDiffInMs = Math.abs(newTargetDateTime.getTime() - existingDateTime.getTime());
      const hoursDiff = timeDiffInMs / (1000 * 60 * 60);

      if (hoursDiff < 72) {
        return NextResponse.json({ 
          success: false, 
          error: '請勿短時間內重複預約，有問題請致電診所詢問' 
        });
      }
    }

    // ----------------------------------------------------------------
    // 🚀 原有機制：精準比對 time_slot 欄位，避免同一個特定時段被重複強刷
    // ----------------------------------------------------------------
    const { rows: existingApt } = await sql`
      SELECT id FROM appointments 
      WHERE date = ${date} AND time_slot = ${timeSlot};
    `;

    if (existingApt && existingApt.length > 0) {
      return NextResponse.json({ success: false, error: '該時段剛剛已被其他病患優先預約，請重新選取其他空缺時段！' });
    }

    const bookingId = generateShortId();
    const finalLineUserId = lineUserId ? lineUserId.toString().trim() : '未關聯';
    const finalDisplayName = lineDisplayName ? lineDisplayName.toString().trim() : '';

    // 🚀 寫入資料庫：回歸獨立欄位結構，其餘完全不變
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