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
    const { action, id, date, timeSlot, name, phone, email, part, reason, treatment, lineUserId } = body;

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
    const bookingId = generateShortId();
    const cleanPhone = phone ? phone.toString().trim() : '';

    await sql`
      INSERT INTO appointments (id, date, time_slot, name, phone, email, part, reason, treatment, line_user_id)
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
        ${lineUserId || '未關聯'}
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
      const { rows } = await sql`
        SELECT * FROM appointments 
        WHERE line_user_id = ${value.trim()} 
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