import { NextResponse } from 'next/server';
import { getAllDiseases } from '@/data/diseases';

// ============================================================
// 🛠️ 呼叫 AI 的工具函式
// ============================================================
async function fetchGemini(model: string, apiKey: string, systemPrompt: string, symptom: string) {
    // 設定 8 秒超時
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    try {
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
        console.log(`🚀 呼叫模型: ${model}...`);

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{
                    role: "user",
                    parts: [{ text: `${systemPrompt}\n\n【使用者症狀】：${symptom}` }]
                }],
                safetySettings: [
                    { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" },
                    { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" },
                    { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_NONE" },
                    { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_NONE" }
                ],
                generationConfig: { response_mime_type: "application/json", temperature: 0.6 }
            }),
            signal: controller.signal
        });
        clearTimeout(timeoutId);

        if (!response.ok) {
            // 這裡抓到 429 (流量滿) 或 503 (Google 當機)
            throw new Error(`Status ${response.status}`);
        }
        
        const data = await response.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!text) throw new Error('Empty text');
        
        // 解析並回傳
        return JSON.parse(text.replace(/```json/g, '').replace(/```/g, '').trim());

    } catch (error) {
        clearTimeout(timeoutId);
        throw error; // 把錯誤往上丟，讓主程式處理
    }
}

// ============================================================
// 🚀 主程式
// ============================================================
export async function POST(request: Request) {
  try {
    const apiKey = process.env.GOOGLE_API_KEY;
    const { symptom } = await request.json();

    // 如果連 API Key 都沒有，直接顯示忙線 (避免程式崩潰)
    if (!apiKey) {
        return NextResponse.json({ 
            recommendedIds: [], 
            externalSuggestions: ["伺服器忙線中 (Key Error)"] 
        });
    }

    if (!symptom) return NextResponse.json({ error: '無症狀' }, { status: 400 });

    const diseases = getAllDiseases().map(d => ({ id: d.id, title: d.title }));

    const systemPrompt = `
      你是一位專業的復健科診所 AI 助理。
      【本院疾病列表】: ${JSON.stringify(diseases)}
      
      請嚴格遵守：
      1. 優先從列表中找 id 放入 recommendedIds。
      2. 若列表沒有，請將你診斷的「醫學病名」放入 externalSuggestions。
      3. 回傳 JSON: { "recommendedIds": [], "externalSuggestions": [] }
    `;

    // ============================================================
    // ⚡ 雙引擎嘗試 (2.5 -> 2.0 -> 忙線中)
    // ============================================================
    try {
        // 第一順位：Gemini 2.5 Flash
        const result = await fetchGemini('gemini-2.5-flash', apiKey, systemPrompt, symptom);
        return NextResponse.json(result);

    } catch (error) {
        console.warn("⚠️ 2.5 忙碌，切換 2.0 Flash...");
        try {
            // 第二順位：Gemini 2.0 Flash
            const result = await fetchGemini('gemini-2.0-flash', apiKey, systemPrompt, symptom);
            return NextResponse.json(result);

        } catch (e) {
            console.error("💥 AI 全面忙線 (流量限制/當機)");
            
            // ★★★ 關鍵修改在這裡 ★★★
            // 當所有 AI 都掛掉時，直接回傳「伺服器忙線中」
            // 狀態碼回傳 200 (OK)，這樣前端就不會跳出錯誤畫面，而是顯示這張卡片
            return NextResponse.json({ 
                recommendedIds: [], 
                externalSuggestions: ["伺服器忙線中，請稍後再試"] 
            });
        }
    }

  } catch (error) {
    console.error('Critical Error:', error);
    // 最後一道防線：如果有其他未知的程式錯誤，也統一顯示忙線中
    return NextResponse.json({ 
        recommendedIds: [], 
        externalSuggestions: ["伺服器忙線中，請稍後再試"] 
    });
  }
}