// src/data/treatments.ts

// 1. 定義統一的資料結構 (移除舊欄位，強制使用新格式)
export interface Treatment {
  slug: string;
  title: string;
  subtitle?: string;        // 副標題
  description: string;      // 列表頁用的簡短描述
  contentHtml: string;      // 詳細頁用的 HTML 內容
  whyChooseUs: string[];    // 為什麼選擇我們
  treatmentFocus: string[]; // 治療重點
  images: { src: string; alt: string }[]; // 圖片陣列 (必填，但可以是空陣列)
  applicableConditions: string[]; // 適用症狀
  features: string[];      // 特色
}

export const treatments: Treatment[] = [
  // =======================================================
  // 1. 增生療法 / PRP (完整版)
  // =======================================================
  {
    slug: 'prp',
    title: '增生療法 / PRP',
    subtitle: '超音波導引、高濃度血小板注射',
    description: '透過注射高濃度血小板血漿 (PRP) 或高濃度葡萄糖，啟動身體修復機制。',
    contentHtml: `
      增生療法是一種藉由<strong>超音波精準導引注射</strong>來啟動身體自我修復機制的<strong>免開刀</strong>治療。<br><br>
      原理是將<strong>高濃度葡萄糖</strong>或<strong>自體血小板 (PRP)</strong> 注射至受損的肌腱、韌帶或關節周圍，誘發輕微的發炎反應，進而刺激組織增生與修復。此療法能強化軟組織結構、提升關節穩定性，從根本解決慢性疼痛、關節退化與運動傷害問題。<br><br>
      <span class="text-cyan-400 font-bold">✨ 高濃度葡萄糖 ：1200元</span><br>
      <span class="text-cyan-400 font-bold">✨ 自體血小板 (PRP) ：15000元</span>
    `,
    whyChooseUs: [
      '<strong>骨科復健科</strong>專業團隊，台大訓練醫師學經歷豐富',
      '<strong>超音波導引注射</strong>經驗豐富，有多項認證',
      '病患滿意度好，口碑佳'
    ],
    treatmentFocus: [
      '慢性肌腱炎久治不癒。',
      '關節韌帶鬆弛不穩定。',
      '運動傷害後持續疼痛。'
    ],
    // 您的 PRP 圖片
    images: [
      { src: 'https://duk.tw/BFGxk6.jpg', alt: 'PRP高濃度血小板原理' },
      { src: 'https://duk.tw/MHjcjG.jpg', alt: 'PRP高濃度血小板注射流程圖' },
      { src: 'https://duk.tw/MWdlee.jpg', alt: 'PRP高濃度血小板注射後注意事項' },
      { src: 'https://duk.tw/mAcbCS.jpg', alt: 'PRP高濃度血小板適應症' },
      { src: 'https://duk.tw/sjGf4w.jpg', alt: 'PRP高濃度血小板超音波導引' },
      { src: 'https://duk.tw/sYHtfN.jpg', alt: 'PRP高濃度血小板與高濃度葡萄糖比較' },
      { src: 'https://duk.tw/zU7oHa.jpg', alt: '增生注射與類固醇' }
    ],
    applicableConditions: ['旋轉肌撕裂', '網球肘', '軟骨損傷', '退化性關節炎'],
    features: ['啟動修復', '免開刀', '精準導引']
  },

  // =======================================================
  // 2. 聚焦式震波治療 (已補上新內容)
  // =======================================================
  {
    slug: 'shockwave',
    title: '聚焦式震波治療',
    subtitle: '瑞士頂級設備、深層組織修復',
    description: '瑞士進口頂級設備，針對慢性肌腱炎、鈣化性肌腱炎效果顯著。',
    contentHtml: `
      體外震波治療 (ESWT) 是一種<strong>非侵入性</strong>的治療方式，利用高能量聲波穿透皮膚，直達深層受損組織。<br><br>
      震波能刺激微血管新生，促進血液循環與新陳代謝，並啟動組織的<strong>再生修復機制</strong>。對於長期的肌腱鈣化、筋膜沾黏以及藥物治療無效的慢性疼痛，具有顯著的療效。本診所引進<strong>瑞士 EMS 聚焦式震波</strong>，能量輸出穩定且穿透力深，能精準打擊病灶。
    `,
    whyChooseUs: [
      '採用頂級<strong>瑞士 EMS 聚焦式震波</strong>設備，效果有保障',
      '醫師精準定位病灶，不打盲靶',
      '<strong>免打針、免吃藥、非侵入性</strong>，無恢復期'
    ],
    treatmentFocus: [
      '足底筋膜炎 (早晨踩地痛)。',
      '鈣化性肌腱炎 (肩膀活動受限)。',
      '網球肘、高爾夫球肘。'
    ],
    // ⚠️ 圖片欄位：我先留空，您之後有圖片網址再填入即可
    images: [], 
    applicableConditions: ['足底筋膜炎', '鈣化性肌腱炎', '網球肘', '長期肌肉緊繃'],
    features: ['非侵入性', '免打針', '恢復期短']
  },

  // =======================================================
  // 3. 徒手治療 (已補上新內容)
  // =======================================================
  {
    slug: 'manual',
    title: '徒手治療',
    subtitle: '物理治療師一對一、骨骼筋膜調整',
    description: '由專業物理治療師一對一評估與治療，調整骨骼排列與筋膜張力。',
    contentHtml: `
      徒手治療 (Manual Therapy) 並非單純的按摩放鬆，而是由<strong>專業物理治療師</strong>經過詳細的動作評估與觸診後，找出疼痛的<strong>根本原因</strong>。<br><br>
      透過針對性的手法，包括<strong>關節鬆動術 (Mobilization)</strong>、<strong>筋膜放鬆 (Myofascial Release)</strong> 與神經鬆動術，來恢復關節正常的活動度，平衡肌肉張力，並矯正錯誤的骨骼排列。適合長期姿勢不良、術後沾黏或不明原因的慢性疼痛患者。
    `,
    whyChooseUs: [
      '<strong>一對一</strong>詳細評估，找出疼痛根源而非頭痛醫頭',
      '針對個人體態與生活習慣，客製化治療計畫',
      '結合居家運動指導，預防復發'
    ],
    treatmentFocus: [
      '頸椎神經壓迫、長期肩頸痠痛。',
      '脊椎側彎、骨盆歪斜矯正。',
      '手術後關節沾黏、活動角度受限。'
    ],
    // ⚠️ 圖片欄位：我先留空，您之後有圖片網址再填入即可
    images: [], 
    applicableConditions: ['肩頸痠痛', '脊椎側彎', '骨盆歪斜', '術後沾黏'],
    features: ['一對一治療', '筋膜放鬆', '骨骼調整']
  }
];

// 3. 輔助函式 (不變)
export function getTreatmentBySlug(slug: string) {
  return treatments.find((t) => t.slug === slug);
}

export function getAllTreatmentSlugs() {
  return treatments.map((t) => ({ slug: t.slug }));
}