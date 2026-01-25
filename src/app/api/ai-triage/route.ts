import { NextResponse } from 'next/server';
import { getAllDiseases } from '@/data/diseases';

export async function POST(request: Request) {
  try {
    const apiKey = process.env.GOOGLE_API_KEY;
    const { symptom } = await request.json();

    if (!apiKey) return NextResponse.json({ error: '系統設定錯誤' }, { status: 500 });
    if (!symptom) return NextResponse.json({ error: '無症狀' }, { status: 400 });

    // 設定模型
    const modelName = 'gemini-2.5-flash';
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`;

    // 1. 準備診所的疾病資料
    const diseases = getAllDiseases().map(d => ({
      id: d.id,
      title: d.title
    }));

    // 2. 設定 AI 的指令 (Prompt)
    // ★★★ 修改重點：增加 externalSuggestions 規則 ★★★
    const systemPrompt = `
      你是一位專業的復健科診所 AI 助理。
      使用者輸入了症狀描述，請進行初步鑑別診斷。

      【本院疾病列表】:
      ${JSON.stringify(diseases)}

      請嚴格遵守以下規則：
      1. 優先從【本院疾病列表】中找出符合的項目，將其 id 放入 recommendedIds。
      2. ★重要：如果經過你的專業判斷，高度懷疑的疾病「不在」上述列表中，請將該「疾病名稱」放入 externalSuggestions 陣列中。
      3. 回傳格式必須是純 JSON 物件：
         { 
           "recommendedIds": ["id1", "id2"], 
           "externalSuggestions": ["痛風", "類風濕性關節炎"] 
         }
    `;

    // 3. 發送請求
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          role: "user",
          parts: [{ text: `${systemPrompt}\n\n【使用者症狀】：${symptom}` }]
        }],
        generationConfig: { 
          response_mime_type: "application/json",
          temperature: 0.5 // 稍微降低隨機性，讓診斷更精確
        }
      }),
    });

    if (!response.ok) throw new Error(`API Error: ${response.status}`);

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) throw new Error('No response text');

    const cleanedText = text.replace(/```json/g, '').replace(/```/g, '').trim();
    return NextResponse.json(JSON.parse(cleanedText));

  } catch (error) {
    console.error('AI Triage Error:', error);
    return NextResponse.json({ error: 'AI 分析暫時無法使用' }, { status: 500 });
  }
}