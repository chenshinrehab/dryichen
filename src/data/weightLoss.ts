// src/data/weightLoss.ts

// 1. 定義資料結構
export interface WeightLossProgram {
  slug: string;
  title: string;
  description: string;
  content?: string;
  features?: string[]; // [修復] 新增這個欄位，解決 'features' does not exist 錯誤
}

// 2. 定義完整資料陣列
export const weightLossPrograms: WeightLossProgram[] = [
  {
    slug: 'medication',
    title: '科學減重藥物',
    description: '提供合法的醫師處方藥物（如口服藥、瘦瘦筆），協助控制食慾與代謝。',
    content: '我們提供多種合法的減重輔助藥物，需經由醫師評估身體狀況後開立。包含抑制食慾、減少油脂吸收等不同機轉的藥物。',
    features: [
      '衛福部核可適應症藥物',
      '專業醫師評估用藥安全',
      '個人化劑量調整'
    ]
  },
  {
    slug: 'inbody',
    title: 'InBody 身體組成分析',
    description: '使用醫療級儀器精準測量肌肉量、體脂肪率與內臟脂肪，科學化追蹤成效。',
    content: '透過 InBody 測量，我們不再只看體重機上的數字，而是精準掌握您的肌肉與脂肪比例，確保減掉的是油不是肉。',
    features: [
      '精準測量體脂肪與骨骼肌',
      '分析內臟脂肪等級',
      '追蹤身體評分變化'
    ]
  },
  {
    slug: 'exercise',
    title: '運動處方規劃',
    description: '結合醫師與物理治療師專業，針對個人體能狀況規劃減脂增肌運動。',
    content: '由專業治療師一對一指導，針對您的身體弱點與體態目標，設計專屬的運動菜單，避免運動傷害並提升代謝效率。',
    features: [
      '物理治療師一對一指導',
      '客製化增肌減脂菜單',
      '預防運動傷害'
    ]
  },
  {
    slug: 'bone-age',
    title: '兒童骨齡評估',
    description: '透過左手掌 X 光片判讀骨骺閉合程度，預測成年身高並掌握黃金發育期。',
    content: '生長發育只有一次。透過骨齡檢查，我們可以了解孩子目前的發育進度，並提供營養、運動與睡眠的專業建議。',
    features: [
      '精準判讀骨骺閉合程度',
      '預測成年身高落點',
      '提供轉骨發育建議'
    ]
  }
];

// 3. 為了相容之前的變數名稱
export const weightLossItems = weightLossPrograms.map(item => ({
    id: item.slug,
    title: item.title,
    description: item.description
}));

// 4. 根據 slug 取得對應的療程資料
export function getWeightLossProgramBySlug(slug: string) {
  return weightLossPrograms.find((program) => program.slug === slug);
}

// 5. 取得所有 slug
export function getAllWeightLossProgramSlugs() {
  return weightLossPrograms.map((program) => ({
    slug: program.slug,
  }));
}