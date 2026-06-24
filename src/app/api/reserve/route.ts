import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { date, timeSlot, name, phone, lineUserId, service } = body;

    // 初始化認證
    const auth = new google.auth.JWT(
      process.env.GOOGLE_CLIENT_EMAIL,
      undefined,
      process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'), // 修正換行字元
      ['https://www.googleapis.com/auth/spreadsheets']
    );

    const sheets = google.sheets({ version: 'v4', auth });

    // 寫入試算表
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: '預約總表!A:H', // 對應剛建立的工作表名稱
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[
          new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }), // 填單時間
          date,        // 預約日期
          timeSlot,    // 預約時段
          name,        // 姓名
          phone,       // 電話
          lineUserId || '未關聯', // LINE 身分 UID
          service || '減重門診',  // 預約項目
          '已預約'      // 狀態
        ]],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Google Sheets 連線錯誤:', error);
    return NextResponse.json({ success: false, error: '寫入失敗' }, { status: 500 });
  }
}