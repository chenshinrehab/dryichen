import { NextRequest, NextResponse } from 'next/server';

const LINE_CLIENT_ID = "2010496335";

// ⚠️ 必填：請到 LINE Developer 後台 (Basic settings) 複製您的 Channel secret 貼在這裡！
const LINE_CLIENT_SECRET = "請將此處替換為您的Channel_Secret";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const code = searchParams.get('code');
    const redirectUri = searchParams.get('redirectUri');

    if (!code || !redirectUri) {
      return NextResponse.json({ success: false, error: '缺少驗證碼' }, { status: 400 });
    }

    // 1. 去跟 LINE 主機交換專屬授權 Token
    const tokenParams = new URLSearchParams();
    tokenParams.append('grant_type', 'authorization_code');
    tokenParams.append('code', code);
    tokenParams.append('redirect_uri', redirectUri);
    tokenParams.append('client_id', LINE_CLIENT_ID);
    tokenParams.append('client_secret', LINE_CLIENT_SECRET);

    const tokenRes = await fetch('https://api.line.me/oauth2/v2.1/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: tokenParams.toString()
    });
    
    const tokenData = await tokenRes.json();
    if (!tokenData.access_token) {
      return NextResponse.json({ success: false, error: 'Token 交換失敗', details: tokenData }, { status: 400 });
    }

    // 2. 拿著換到的 Token，去把病患的「大頭貼、姓名、LINE ID」提領出來
    const profileRes = await fetch('https://api.line.me/v2/profile', {
      headers: { Authorization: `Bearer ${tokenData.access_token}` }
    });
    
    const profileData = await profileRes.json();
    if (!profileData.userId) {
      return NextResponse.json({ success: false, error: '無法獲取使用者資料' }, { status: 400 });
    }

    // 3. 把解碼成功的資料打包送回給前端畫面
    return NextResponse.json({
      success: true,
      lineUserId: profileData.userId,
      displayName: profileData.displayName,
      pictureUrl: profileData.pictureUrl
    });

  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}