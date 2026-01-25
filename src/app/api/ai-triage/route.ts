import { NextResponse } from 'next/server';
import { getAllDiseases } from '@/data/diseases';

// ============================================================
// 🚑 第三層防線：本地急救系統 (Local Emergency Mode)
// 當 AI 全掛 (429/404/500) 時，由這裡接手，保證不報錯
// ============================================================
function performLocalAnalysis(symptom: string) {
    console.log("🚑 啟動本地急救系統...");
    const allDiseases = getAllDiseases();
    const recommendedIds: string[] = [];
    const externalSuggestions: string[] = [];

    // 1. 常見關鍵字規則 (處理 AI 掛掉時的常見症狀)
    const rules = [
        { keys: ["大拇指", "拇指", "腳趾", "尿酸"], title: "疑似痛風 (Gout)" },
        { keys: ["紅腫", "熱痛"], title: "疑似蜂窩性組織炎或痛風" },
        { keys: ["骨折", "斷", "撞擊", "車禍"], title: "疑似骨折 (建議照X光)" },
        { keys: ["發燒", "感染", "化膿"], title: "疑似感染" },
        { keys: ["手指", "變形", "晨僵"], title: "疑似類風濕性關節炎" },
    ];

    // 2. 檢查規則
    rules.forEach(rule => {
        if (rule.keys.some(k => symptom.includes(k))) {
            if (rule.title.includes("痛風") && (symptom.includes("腫") || symptom.includes("痛"))) {
                externalSuggestions.push(rule.title);
            } else {
                externalSuggestions.push(rule.title);
            }
        }
    });

    // 3. 檢查站內文章標題
    allDiseases.forEach(d => {
        if (symptom.includes(d.title) || d.title.includes(symptom)) {
            recommendedIds.push(d.slug || d.id);
        }
    });

    // 4. 兜底：如果沒對到任何東西，回傳使用者輸入
    if (recommendedIds.length === 0 && externalSuggestions.length === 0) {
        externalSuggestions.push(symptom);
    }

    return {
        recommendedIds: Array.from(new Set(recommendedIds)).slice(0, 3),
        externalSuggestions: Array.from(new Set(externalSuggestions)).slice(0, 2)
    };
}

// ============================================================
// 🛠️ 呼叫 AI 的工具函式
// ============================================================
async function fetchGemini(model: string, apiKey: string, systemPrompt: string, symptom: string) {
    // 設定 8 秒超時 (您之前的 Log 顯示跑了 6 秒，所以設 8 秒比較保險)
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
                // 2.5 Flash 比較聰明，可以稍微調高溫度增加聯想力
                generationConfig: { response_mime_type: "application/json", temperature: 0.6 }
            }),
            signal: controller.signal
        });
        clearTimeout(timeoutId);

        if (!response.ok) throw new Error(`Status ${response.status}`);
        const data = await response.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!text) throw new Error('Empty text');
        
        return JSON.parse(text.replace(/```json/g, '').replace(/```/g, '').trim());
    } catch (error) {
        clearTimeout(timeoutId);
        throw error;
    }
}

// ============================================================
// 🚀 主程式
// ============================================================
export async function POST(request: Request) {
  try {
    const apiKey = process.env.GOOGLE_API_KEY;
    const { symptom } = await request.json();

    // 無 Key 則切換急救模式
    if (!apiKey) return NextResponse.json(performLocalAnalysis(symptom));
    if (!symptom) return NextResponse.json({ error: '無症狀' }, { status: 400 });

    const diseases = getAllDiseases().map(d => ({ id: d.id, title: d.title }));

    // 維持您最喜歡的 2.0 Prompt (這個Prompt結構對 2.5 同樣有效)
    const systemPrompt = `
      你是一位專業的復健科診所 AI 助理。
      【本院疾病列表】: ${JSON.stringify(diseases)}
      
      請嚴格遵守：
      1. 請先進行醫學診斷 (例如：大拇指紅腫 -> 痛風)。
      2. 優先從列表中找 id 放入 recommendedIds。
      3. 若列表沒有，請將你診斷的「醫學病名」放入 externalSuggestions。
      4. 回傳 JSON: { "recommendedIds": [], "externalSuggestions": [] }
    `;

    // ============================================================
    // ⚡ 雙引擎切換 (2.5 -> 2.0 -> Local)
    // ============================================================
    try {
        // 第一順位：Gemini 2.5 Flash (您的清單中有，且 Log 顯示成功)
        const result = await fetchGemini('gemini-2.5-flash', apiKey, systemPrompt, symptom);
        return NextResponse.json(result);

    } catch (error) {
        console.warn("⚠️ 2.5 忙碌或超時，切換 2.0 Flash...");
        try {
            // 第二順位：Gemini 2.0 Flash (您的清單中也有這個)
            const result = await fetchGemini('gemini-2.0-flash', apiKey, systemPrompt, symptom);
            return NextResponse.json(result);

        } catch (e) {
            console.error("💥 AI 全面癱瘓，切換本地急救模式");
            // 第三順位：本地急救 (保證不報錯)
            const localResult = performLocalAnalysis(symptom);
            return NextResponse.json(localResult);
        }
    }

  } catch (error) {
    console.error('Critical Error:', error);
    // 萬一連主程式都掛掉，回傳空結果，不顯示錯誤訊息
    return NextResponse.json({ 
        recommendedIds: [], 
        externalSuggestions: [] 
    });
  }
}