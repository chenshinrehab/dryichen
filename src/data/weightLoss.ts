// src/data/weightbone.ts

// 1. 定義資料結構 (比照 treatments 的高規格)
export interface WeightLossProgram {
  slug: string;
  title: string;
  subtitle?: string;        // 副標題
  description: string;      // 列表頁用的簡短描述
  contentHtml?: string;     // 詳細頁用的 HTML 內容 (支援價格表等)
  features?: string[];      // 列表頁用的特色標籤
  
  // 詳細頁專用欄位
  whyChooseUs?: string[];   // 我們的特色 / 為什麼選擇我們
  programBenefits?: string[];// 療程優點 / 治療重點
  images?: { src: string; alt: string }[]; // 圖片陣列
  
  qrCode?: string;          // 雖然頁面自動生成，但保留欄位定義
}

export const weightLossPrograms: WeightLossProgram[] = [
  // =======================================================
  // 1. 猛健樂 (Mounjaro) - 完整版
  // =======================================================
  {
    slug: 'mounjaro',
    title: '猛健樂 (Mounjaro)',
    subtitle: '新一代雙重腸泌素受體促效劑',
    description: '新一代雙重腸泌素(GIP/GLP-1)受體促效劑，提供更卓越的體重控制效果。',
    features: ['一週一次', '抑制食慾', '延緩胃排空'],
    contentHtml: `
      新竹猛健樂推薦，提供完整服務。<br>
      新一代的雙重腸泌素(GIP/GLP-1)受體促效劑，能同時活化GIP與GLP-1受體，提供比傳統單一機轉藥物更卓越的體重控制與血糖管理效果。<br><br>
      <span class="text-cyan-400 font-bold">✨ 2.5mg：$10,500</span><br>
      <span class="text-cyan-400 font-bold">✨ 5mg ：$11,500</span><br>
      <span class="text-cyan-400 font-bold">✨ 7.5mg：$13,000</span><br>
      <span class="text-cyan-400 font-bold">✨ 10mg : $15,000</span>
    `,
    whyChooseUs: [
      '詳細問診及衛教施打',
      '甲狀腺超音波檢查及抽血檢查',
      '療程含高階 InBody 及運動課程'
    ],
    programBenefits: [
      '一週一次好簡單',
      '體重下降可達 20%',
      '有效控制三高及脂肪肝'
    ],
    images: [
      { src: 'https://duk.tw/fpLNS2.jpg', alt: '猛健樂流程' },
      { src: 'https://duk.tw/ePVYcP.jpg', alt: '猛健樂特點' },
      { src: 'https://duk.tw/WKNuxz.jpg', alt: '猛健樂適合對象' },
      { src: 'https://duk.tw/6KTpQI.jpg', alt: '猛健樂懶人包' }
    ]
  },

  // =======================================================
  // 2. 週纖達 (Ozempic) - 預留欄位
  // =======================================================
  {
    slug: 'ozempic',
    title: '週纖達',
    subtitle: 'GLP-1 受體促效劑',
    description: '協助控制體重的注射藥物，幫助您減少飢餓感，輕鬆達成減重目標。',
    features: ['穩定血糖', '減少體脂肪堆積'],
    contentHtml: '週纖達是一種 GLP-1 受體促效劑，原本用於糖尿病治療，後來發現具有顯著的減重效果。透過穩定血糖、減少飢餓感，幫助患者減少體脂肪堆積，達到健康減重的目標。',
    whyChooseUs: ['專業醫師評估', '定期追蹤成效', '營養諮詢服務'], // 範例資料
    programBenefits: ['抑制食慾', '減少內臟脂肪', '改善代謝'],      // 範例資料
    images: [] // 圖片待補
  },

  // =======================================================
  // 3. 兒童骨齡評估 - 預留欄位
  // =======================================================
  {
    slug: 'bone-age',
    title: '兒童骨齡評估',
    subtitle: '掌握黃金生長發育期',
    description: '透過左手X光片判讀骨骼成熟度，預測成年身高，掌握黃金生長發育期。',
    features: ['性早熟', '生長遲緩', '想了解身高潛力的兒童'],
    contentHtml: '透過拍攝左手X光片，專業醫師可以判讀骨骼的成熟度，評估兒童的生長發育狀況，預測成年後的身高潛力。特別適用於性早熟、生長遲緩，或想了解身高潛力的兒童。',
    whyChooseUs: ['低輻射劑量', 'AI輔助判讀', '生長曲線分析'],    // 範例資料
    programBenefits: ['及早發現生長問題', '預測成年身高', '給予適當介入建議'], // 範例資料
    images: [] // 圖片待補
  }
];

// 取得單一資料的函式
export function getWeightLossProgramBySlug(slug: string) {
  return weightLossPrograms.find((program) => program.slug === slug);
}

// 取得所有 slug
export function getAllWeightLossProgramSlugs() {
  return weightLossPrograms.map((program) => ({
    slug: program.slug,
  }));
}