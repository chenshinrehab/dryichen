import { NextRequest, NextResponse } from 'next/server';

// 🚀 核心修正 1：強制命令 Vercel 絕對不要快取這支 API，徹底解決部署後程式碼沒更新的靈異現象
export const dynamic = 'force-dynamic';

const LINE_CLIENT_ID = "2010496335";

// ⚠️ 林醫師，請務必把下面這長串替換成您 LINE 後台 Basic settings 裡面的 Channel secret 密鑰！
const LINE_CLIENT_SECRET = "3f5bf378485325b52664c9d2c72d4344"; 

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const code = searchParams.get('code');
    const redirectUri = searchParams.get('redirectUri');

    if (!code || !redirectUri) {
      return NextResponse.json({ success: false, error: '缺少必要參數 code 或 redirectUri' });
    }

    // 🚀 核心修正 2：改用最具相容性的標準物件打包，確保 LINE 伺服器能完美解析
    const bodyData = new URLSearchParams({
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: redirectUri,
      client_id: LINE_CLIENT_ID,
      client_secret: LINE_CLIENT_SECRET,
    });

    // 呼叫 LINE 伺服器換取 Token
    const tokenRes = await fetch('https://api.line.me/oauth2/v2.1/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: bodyData.toString(),
      cache: 'no-store' // 再次強制封鎖快取
    });
    
    const tokenData = await tokenRes.json();
    
    // 💡 除錯防呆：如果 LINE 報錯，直接把 LINE 的原始錯誤訊息傳回前端，這樣我們就能一眼看出是 Secret 錯了還是網址錯了
    if (!tokenRes.ok || !tokenData.access_token) {
      console.error("LINE Token 交換失敗原因:", tokenData);
      return NextResponse.json({ 
        success: false, 
        error: 'LINE伺服器拒絕交換Token', 
        line_error: tokenData.error_description || tokenData.error || '未知錯誤'
      });
    }

    // 2. 拿著存取憑證，去提領病患的個人公開 Profile
    const profileRes = await fetch('https://api.line.me/v2/profile', {
      method: 'GET',
      headers: { 'Authorization': `Bearer ${tokenData.access_token}` },
      cache: 'no-store'
    });
    
    const profileData = await profileRes.json();
    if (!profileRes.ok || !profileData.userId) {
      return NextResponse.json({ success: false, error: '提領 LINE 用戶資料失敗' });
    }

    // 3. 通訊全部成功！將大頭貼、名稱、ID 傳回前端
    return NextResponse.json({
      success: true,
      lineUserId: profileData.userId,
      displayName: profileData.displayName,
      pictureUrl: profileData.pictureUrl
    });

  } catch (err: any) {
    console.error("API 捕獲嚴重崩潰:", err);
    return NextResponse.json({ success: false, error: '伺服器內部通訊崩潰', details: err.message });
  }
}