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
  youtubeVideoId?: string;
  qaList?: { question: string; answer: string }[];
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
        // 注意：不需要寫 public，直接寫 /images 開頭
      { src: '/images/treatments/prp/principle.jpg', alt: 'PRP高濃度血小板原理' },
      { src: '/images/treatments/prp/a.jpg', alt: 'PRP高濃度血小板注射流程圖' },
      { src: '/images/treatments/prp/b.jpg', alt: 'PRP高濃度血小板注射後注意事項' },
      { src: '/images/treatments/prp/c.jpg', alt: 'PRP高濃度血小板適應症' },
      { src: '/images/treatments/prp/d.jpg', alt: 'PRP高濃度血小板超音波導引' },
      { src: '/images/treatments/prp/e.jpg', alt: 'PRP高濃度血小板與高濃度葡萄糖比較' },
      { src: '/images/treatments/prp/f.jpg', alt: '增生注射與類固醇' }
    ],
    applicableConditions: ['旋轉肌撕裂', '網球肘', '軟骨損傷', '退化性關節炎'],
    features: ['啟動修復', '免開刀', '精準導引']

    qaList: [
      {
        question: 'PRP 注射需要打幾次？',
        answer: '一般建議的完整療程為 3 次，每次間隔約 2-4 週。但因每個人受傷程度與身體修復能力不同，醫師會在第一次治療後，根據超音波追蹤修復狀況來調整後續次數。'
      },
      {
        question: '打完 PRP 會很痛嗎？可以走路嗎？',
        answer: '注射後 2-3 天患部會有腫脹痠痛感（因為正在啟動修復發炎反應），這是正常的。一般行走與日常生活皆不受影響，但建議一週內避免劇烈運動，並多休息。'
      },
      {
        question: 'PRP 和打類固醇有什麼不同？',
        answer: '類固醇是強力的「消炎藥」，能迅速止痛但長期使用可能導致肌腱脆化；PRP 則是提供「生長因子」，目的是「修復」受損組織。簡單來說，類固醇是滅火，PRP 是重建房子。'
      }
    ]

  },

  // =======================================================
  // 2. 聚焦式震波治療 (已補上新內容)
  // =======================================================
  {
    slug: 'shockwave',
    title: '聚焦式 / 發散式體外震波',
    subtitle: '瑞士頂級設備、超音波定位複合式治療',
    description: '瑞士進口頂級設備，針對慢性肌腱炎、鈣化性肌腱炎效果顯著。',
    youtubeVideoId: '3OK5zeUBeGc',
    contentHtml: `
     ✨新竹宸新復健科，聚焦式及發散式複合式治療<br>
      體外震波治療 (ESWT) 是一種先進的非侵入性復健技術，廣泛應用於骨科與運動醫學。其原理是利用高能量聲波穿透皮膚，精準聚焦於受損的深層軟組織。
      <br><br>
      這股能量能造成組織微創，進而刺激微血管新生、加速新陳代謝並<strong>啟動自癒修復機制</strong>，甚至能擊碎鈣化組織。臨床上對於足底筋膜炎、網球肘、鈣化性肌腱炎及各類慢性沾黏特別有效。
      <br><br>
      一般療程約需 3 至 6 次，具備免開刀、免麻醉、無恢復期的優勢。雖治療時患處會有痠脹感，但能從根源改善傳統物理治療難以緩解的頑固疼痛。
    `,
    whyChooseUs: [
      '聚焦式及發散式複合式治療',
      '治療前搭配超音波定位 精準打擊',
      '<strong>免打針、免吃藥、非侵入性</strong>，無恢復期'
    ],
    treatmentFocus: [
      '每週一次，約需 3-5 次療程。',
      '治療後局部可能有輕微腫脹感。',
      '對於慢性軟組織疼痛效果顯著。'
    ],
    // ⚠️ 圖片欄位：我先留空，您之後有圖片網址再填入即可
    images: [
      { src: '/images/treatments/prp/a.jpg', alt: 'ESWT體外震波原理' },
      { src: '/images/treatments/prp/b.jpg', alt: 'ESWT體外震波適應症' },
      { src: '/images/treatments/prp/c.jpg', alt: 'ESWT體外震波聚焦式及發散式比較' },
    ], 
    applicableConditions: ['足底筋膜炎', '鈣化性肌腱炎', '網球肘', '長期肌肉緊繃'],
    features: ['非侵入性', '免打針', '恢復期短']

    qaList: [
      {
        question: '震波治療過程會痛嗎？',
        answer: '治療過程中會有痠痛感，這是因為震波正在尋找並治療受傷的組織（阿是穴）。這種痠痛感通常是可以忍受的，醫師會隨時依照您的感受調整能量強度。'
      },
      {
        question: '需要做幾次震波治療？',
        answer: '一個療程通常建議為 3-5 次，每週一次。對於鈣化性肌腱炎等較頑固的病灶，可能需要更多次數的治療才能完全瓦解鈣化點。'
      },
      {
        question: '震波治療後需要休息嗎？',
        answer: '治療後建議多喝水以促進代謝。當天患部可能會有些許紅腫或痠痛，這是組織修復的正常反應，通常 1-2 天內會緩解。這段期間請避免劇烈運動，讓組織好好修復。'
      }
    ]
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
    qaList: [
      {
        question: '徒手治療跟一般的按摩有什麼不一樣？',
        answer: '一般按摩主要針對淺層肌肉放鬆，效果較短暫。徒手治療則是由物理治療師進行，會先進行詳細評估（如骨盆是否歪斜、關節是否卡住），再透過專業手法處理深層筋膜、關節與神經問題，是具有醫療目的的治療。'
      },
      {
        question: '一次治療需要多久？',
        answer: '每次徒手治療時間約為 30-50 分鐘，包含評估、治療以及居家運動指導。'
      },
      {
        question: '健保可以做徒手治療嗎？',
        answer: '健保給付的物理治療主要為儀器治療（如電療、熱敷、牽引）。一對一的徒手治療因需治療師全程操作，屬於自費項目，能提供更精緻且針對性的療效。'
      }
    ]

  }
];

// 3. 輔助函式 (不變)
export function getTreatmentBySlug(slug: string) {
  return treatments.find((t) => t.slug === slug);
}

export function getAllTreatmentSlugs() {
  return treatments.map((t) => ({ slug: t.slug }));
}