// src/data/weightbone.ts

// 1. 定義資料結構
export interface WeightLossProgram {
  slug: string;
  title: string;
  description: string;
  content?: string;
  features?: string[];
}

// 2. 定義完整資料陣列
export const weightLossPrograms: WeightLossProgram[] = [
  {
    slug: 'mounjaro',
    title: '猛健樂 (Mounjaro)',
    description: '新一代雙重腸泌素(GIP/GLP-1)受體促效劑，提供更卓越的體重控制效果。',
    features: ['一週一次', '抑制食慾', '延緩胃排空'],
    content: '猛健樂 (Mounjaro) 是新一代的雙重腸泌素受體促效劑，同時作用於 GIP 和 GLP-1 受體，提供更強效的體重控制效果。透過抑制食慾和延緩胃排空，幫助患者更有效地達成減重目標。'
  },
  {
    slug: 'ozempic',
    title: '週纖達',
    description: '協助控制體重的注射藥物，幫助您減少飢餓感，輕鬆達成減重目標。',
    features: ['穩定血糖', '減少體脂肪堆積'],
    content: '週纖達是一種 GLP-1 受體促效劑，原本用於糖尿病治療，後來發現具有顯著的減重效果。透過穩定血糖、減少飢餓感，幫助患者減少體脂肪堆積，達到健康減重的目標。'
  },
  {
    slug: 'bone-age',
    title: '兒童骨齡評估',
    description: '透過左手X光片判讀骨骼成熟度，預測成年身高，掌握黃金生長發育期。',
    features: ['性早熟', '生長遲緩', '想了解身高潛力的兒童'],
    content: '透過拍攝左手X光片，專業醫師可以判讀骨骼的成熟度，評估兒童的生長發育狀況，預測成年後的身高潛力。特別適用於性早熟、生長遲緩，或想了解身高潛力的兒童。'
  }
];

// 3. 取得單一資料的函式
export function getWeightLossProgramBySlug(slug: string) {
  return weightLossPrograms.find((program) => program.slug === slug);
}

// 4. 取得所有網址 Slug 的函式 (SEO 用)
export function getAllWeightLossProgramSlugs() {
  return weightLossPrograms.map((program) => ({
    slug: program.slug,
  }));
}