// src/data/treatments.ts

export interface Treatment {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string
  contentHtml: string;
  whyChooseUs: string[];
  treatmentFocus: string[];
  images: { src: string; alt: string }[];
  applicableConditions: string[];
  features: string[];
  youtubeVideoId?: string;
  qaList?: { question: string; answer: string }[];
  
  // SEO 專用欄位
  seoTitle?: string;
  seoDescription?: string;
  keywords?: string[];
}

export const treatments: Treatment[] = [
  // =======================================================
  // 1. 增生療法 / PRP (完整保留 7 張圖 + 3 題 QA)
  // =======================================================
  {
    slug: 'prp',
    title: '增生療法 / PRP',
    subtitle: '超音波導引、高濃度血小板注射',
    description: '透過注射高濃度血小板血漿 (PRP) 或高濃度葡萄糖，精準修復受損關節與韌帶。',
    // 圖片：注射/實驗室示意
    image: '/images/treatments/a.jpg',
    // SEO 設定
    seoTitle: '新竹PRP注射推薦 - 膝蓋退化/旋轉肌破裂/網球肘 | 宸新復健科',
    seoDescription: '新竹PRP增生療法首選。林羿辰醫師親自執行高解析超音波導引注射，將高濃度血小板精準送達病灶。免開刀治療退化性關節炎、半月軟骨受損與韌帶撕裂，啟動身體修復力。',
    keywords: ['新竹PRP', '新竹增生療法', '超音波導引注射', '膝蓋退化免開刀', '旋轉肌破裂', '足底筋膜炎', '高濃度葡萄糖', '新竹骨科推薦'],

    contentHtml: `
      <p>宸新復健科提供最先進的<strong>新竹PRP增生療法</strong>，這是一種藉由<strong>超音波精準導引注射</strong>來啟動身體自我修復機制的<strong>免開刀</strong>治療技術。</p>
      
      <p>原理是將<strong>高濃度葡萄糖</strong>或萃取自患者自身的<strong>高濃度血小板血漿 (PRP)</strong>，精準注射至受損的肌腱、韌帶或關節周圍。這能誘發身體自然的修復反應，強化軟組織結構並提升關節穩定性。</p>

      <p>臨床上，對於<strong>退化性膝關節炎</strong>、<strong>旋轉肌袖撕裂</strong>、<strong>網球肘</strong>以及<strong>足底筋膜炎</strong>等頑固性疼痛，傳統藥物只能止痛，而增生療法則能真正促進組織再生，從根本解決問題。</p>

      <div class="my-6 p-4 bg-slate-800/50 border-l-4 border-cyan-500 rounded-r-lg">
        <h4 class="text-white font-bold mb-2">宸新復健科注射方案：</h4>
        <ul class="space-y-2">
           <li class="flex items-center"><i class="fa-solid fa-check text-cyan-400 mr-2"></i> <span class="text-slate-300">高濃度葡萄糖增生注射：<strong class="text-cyan-400">1,200 元</strong></span></li>
           <li class="flex items-center"><i class="fa-solid fa-check text-cyan-400 mr-2"></i> <span class="text-slate-300">自體高濃度血小板 (PRP)：<strong class="text-cyan-400">15,000 元</strong> (含超音波導引)</span></li>
        </ul>
      </div>
    `,
    whyChooseUs: [
      '<strong>台大醫師</strong>親自執行，骨科與復健科雙專長',
      '堅持使用<strong>高解析度超音波導引</strong>，確保針劑精準到達病灶',
      '無塵無菌操作環境，安全安心'
    ],
    treatmentFocus: [
      '慢性肌腱炎久治不癒 (如：網球肘、媽媽手)。',
      '關節韌帶鬆弛與不穩定 (如：腳踝扭傷後遺症)。',
      '退化性關節炎與半月軟骨損傷。'
    ],
    // 完整保留原始 7 張圖片
    images: [
      { src: '/images/treatments/prp/principle.jpg', alt: 'PRP高濃度血小板治療原理說明' },
      { src: '/images/treatments/prp/a.jpg', alt: 'PRP高濃度血小板注射標準流程圖' },
      { src: '/images/treatments/prp/b.jpg', alt: 'PRP高濃度血小板注射後注意事項與衛教' },
      { src: '/images/treatments/prp/c.jpg', alt: 'PRP高濃度血小板治療適應症列表' },
      { src: '/images/treatments/prp/d.jpg', alt: 'PRP高濃度血小板超音波導引注射示意圖' },
      { src: '/images/treatments/prp/e.jpg', alt: 'PRP高濃度血小板與高濃度葡萄糖比較表' },
      { src: '/images/treatments/prp/f.jpg', alt: '增生注射與類固醇治療差異比較' }
    ],
    applicableConditions: ['退化性關節炎', '旋轉肌撕裂', '網球肘', '足底筋膜炎', '半月軟骨受損'],
    features: ['啟動修復', '免開刀', '精準導引'],
    
    // 完整保留原始 3 題 QA
    qaList: [
      {
        question: 'PRP 注射需要打幾次？',
        answer: '一般建議的完整療程為 3 次，每次間隔約 2-4 週。但因每個人受傷程度與身體修復能力不同，醫師會在第一次治療後，根據超音波影像追蹤修復狀況來調整後續次數。'
      },
      {
        question: '打完 PRP 會很痛嗎？可以走路嗎？',
        answer: '注射後 2-3 天患部會有腫脹痠痛感（因為正在啟動修復發炎反應），這是正常的。一般行走與日常生活皆不受影響，但建議一週內避免劇烈運動，並多休息。'
      },
      {
        question: 'PRP 和打類固醇有什麼不同？',
        answer: '類固醇是強力的「消炎藥」，能迅速止痛但長期使用可能導致肌腱脆化與斷裂；PRP 則是提供「生長因子」，目的是「修復」與「再生」受損組織。簡單來說，類固醇是滅火，PRP 是重建房子。'
      }
    ]
  },

  // =======================================================
  // 2. 聚焦式震波治療 (完整保留 3 張圖 + 3 題 QA)
  // =======================================================
  {
    slug: 'shockwave',
    title: '聚焦式 / 發散式體外震波',
    subtitle: '瑞士頂級設備、擊碎鈣化與骨刺',
    description: '引進瑞士頂級震波設備，免開刀擊碎鈣化點，專治足底筋膜炎與頑固疼痛。',
    // 圖片：醫療儀器/物理治療
    image: '/images/treatments/b.jpg',
    youtubeVideoId: '3OK5zeUBeGc',
    
    // SEO 設定
    seoTitle: '新竹體外震波治療 - 專治足底筋膜炎/骨刺/鈣化性肌腱炎 | 宸新復健科',
    seoDescription: '新竹震波治療推薦。宸新復健科採用瑞士頂級聚焦式震波儀，針對足底筋膜炎、鈣化性肌腱炎與網球肘效果顯著。免打針、免吃藥、非侵入性，有效擊碎鈣化組織並刺激血管新生。',
    keywords: ['新竹震波', '體外震波推薦', '足底筋膜炎', '鈣化性肌腱炎', '骨刺治療', '網球肘', '新竹物理治療'],

    contentHtml: `
      <p>宸新復健科引進<strong>聚焦式</strong>及<strong>發散式</strong>複合式體外震波 (ESWT)，這是一種源自擊碎腎結石概念的高階骨科治療技術。</p>

      <p>震波治療能產生高能量聲波，穿透皮膚直達深層軟組織。這股能量能造成組織微創，進而：</p>
      <ul class="list-disc list-inside ml-4 mb-4 text-slate-400">
        <li><strong>擊碎鈣化組織：</strong>針對<strong>鈣化性肌腱炎</strong>或<strong>骨刺</strong>特別有效。</li>
        <li><strong>刺激血管新生：</strong>改善局部血液循環，加速代謝發炎物質。</li>
        <li><strong>啟動自癒機制：</strong>喚醒沉睡的細胞進行修復。</li>
      </ul>

      <p>臨床證實，震波對於<strong>足底筋膜炎</strong>(下床踩地痛)、<strong>網球肘</strong>、<strong>肩頸板機點</strong>及各類慢性沾黏有卓越療效，是傳統物理治療與藥物無效後的最佳選擇。</p>
    `,
    whyChooseUs: [
      '擁有<strong>聚焦式(深層)</strong>與<strong>發散式(淺層)</strong>雙探頭，複合式治療',
      '治療前搭配<strong>超音波定位</strong>，精準打擊病灶',
      '免打針、免吃藥、非侵入性，無恢復期'
    ],
    treatmentFocus: [
      '足底筋膜炎 (早晨下床第一步劇痛)。',
      '鈣化性肌腱炎 (肩膀劇烈疼痛)。',
      '長期肌肉緊繃與慢性筋膜炎。'
    ],
    // 完整保留原始 3 張圖片
    images: [
       { src: '/images/treatments/shockwave/a.jpg', alt: 'ESWT體外震波治療原理圖解' },
       { src: '/images/treatments/shockwave/b.jpg', alt: 'ESWT體外震波治療適應症範圍' },
       { src: '/images/treatments/shockwave/c.jpg', alt: 'ESWT聚焦式與發散式震波比較圖' },
    ], 
    applicableConditions: ['足底筋膜炎', '鈣化性肌腱炎', '骨刺', '網球肘', '阿基里斯腱炎'],
    features: ['非侵入性', '擊碎鈣化', '恢復期短'],
    
    // 完整保留原始 3 題 QA
    qaList: [
      {
        question: '震波治療過程會痛嗎？',
        answer: '治療過程中會有明顯的痠痛與脹感，這是因為震波正在衝擊受傷與沾黏的組織（尋找阿是穴）。這種痠痛感是治療有效的證明，醫師會隨時依照您的耐受度調整能量強度。'
      },
      {
        question: '需要做幾次震波治療？',
        answer: '一個標準療程通常建議為 3-5 次，每週一次。對於鈣化性肌腱炎或多年的慢性疼痛，可能需要 6 次以上的治療才能完全瓦解鈣化點並完成組織修復。'
      },
      {
        question: '震波治療後需要休息嗎？',
        answer: '治療後建議多喝水以促進代謝。當天患部可能會有些許紅腫或痠痛，這是組織修復的正常反應，通常 1-2 天內會緩解。這段期間請避免劇烈運動，讓組織好好修復。'
      }
    ]
  },

  // =======================================================
  // 3. 徒手治療 (完整保留 3 題 QA)
  // =======================================================
  {
    slug: 'manual',
    title: '徒手治療',
    subtitle: '物理治療師一對一、骨骼筋膜調整',
    description: '專業物理治療師一對一評估，調整骨盆歪斜、脊椎側彎與筋膜放鬆。',
    // 圖片：兒童積木/學習
    image: '/images/treatments/c.jpg',
    // SEO 設定
    seoTitle: '新竹徒手治療推薦 - 脊椎側彎矯正/骨盆歪斜/筋膜放鬆 | 宸新復健科',
    seoDescription: '新竹專業物理治療師一對一徒手治療。針對脊椎側彎、骨盆前傾/歪斜、產後喬骨盆、長短腳及術後關節沾黏，提供客製化的骨骼調整與筋膜放鬆療程，從根本改善體態與疼痛。',
    keywords: ['新竹徒手治療', '新竹整骨', '脊椎側彎矯正', '骨盆歪斜', '產後喬骨盆', '筋膜放鬆', '新竹物理治療推薦', '五十肩治療'],

    contentHtml: `
      <p><strong>徒手治療 (Manual Therapy)</strong> 並非一般的按摩放鬆，而是由國家考試合格的<strong>物理治療師</strong>，經過詳細的動作評估與觸診後，所執行的醫療級治療。</p>

      <p>我們的治療重點在於找出疼痛的<strong>根本原因</strong>（例如：膝蓋痛可能是骨盆歪斜造成的）。透過專業手法，包括：</p>
      <ul class="list-disc list-inside ml-4 mb-4 text-slate-400">
        <li><strong>關節鬆動術 (Mobilization)：</strong>恢復關節正常的活動角度，治療五十肩與術後沾黏。</li>
        <li><strong>骨骼矯正：</strong>針對<strong>脊椎側彎</strong>、<strong>骨盆前傾</strong>或<strong>長短腳</strong>進行調整。</li>
        <li><strong>筋膜放鬆 (MFR)：</strong>處理深層肌肉緊繃與肌筋膜疼痛症候群。</li>
      </ul>
      <p>適合長期低頭族、姿勢不良、產後婦女以及運動愛好者，協助您找回身體的平衡。</p>
    `,
    whyChooseUs: [
      '<strong>一對一</strong> 50分鐘深度治療，絕非儀器電療',
      '詳細評估骨骼排列，找出疼痛根源而非頭痛醫頭',
      '結合<strong>居家運動指導 (卫教)</strong>，預防復發'
    ],
    treatmentFocus: [
      '頸椎神經壓迫、長期肩頸痠痛。',
      '脊椎側彎、骨盆歪斜、產後骨盆調整。',
      '手術後關節沾黏 (如骨折術後、韌帶重建)。'
    ],
    images: [], 
    applicableConditions: ['肩頸痠痛', '脊椎側彎', '骨盆歪斜', '五十肩', '術後復健'],
    features: ['一對一治療', '筋膜放鬆', '骨骼調整'],
    
    // 完整保留原始 3 題 QA
    qaList: [
      {
        question: '徒手治療跟坊間的整骨、推拿有什麼不一樣？',
        answer: '坊間整骨多依賴師傅經驗；徒手治療則是由「物理治療師」執行，必須具備解剖學與生物力學知識。我們會先進行理學檢查（評估關節角度、肌肉力量、神經張力），確保安全後再進行調整，安全性與科學性更高，且包含運動指導以維持療效。'
      },
      {
        question: '一次治療需要多久？',
        answer: '每次徒手治療時間約為 30-50 分鐘，包含評估、治療以及居家運動指導。'
      },
      {
        question: '健保可以做徒手治療嗎？',
        answer: '健保給付的物理治療主要為儀器治療（如電療、熱敷、牽引）。一對一的徒手治療因需治療師全程專注操作，屬於自費醫療項目，能提供更精緻、深層且針對性的療效。'
      }
    ]
  }
];

// Helper functions (保持不變)
export function getTreatmentBySlug(slug: string) {
  return treatments.find((t) => t.slug === slug);
}

export function getAllTreatmentSlugs() {
  return treatments.map((t) => ({ slug: t.slug }));
}