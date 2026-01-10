import { TreatmentItem } from '@/types/content'

export interface Treatment extends Omit<TreatmentItem, 'id'> {
  slug: string;  // 使用 slug 而不是 id
}

export const treatments: Treatment[] = [
  {
    slug: 'prp',
    title: '增生療法 / PRP',
    subtitle: '超音波導引、高濃度血小板注射',
    description: '透過注射高濃度血小板血漿 (PRP) 或高濃度葡萄糖，啟動身體修復機制。',
    qrCode: 'images/qr-code.png', // 請確認您的 public 資料夾有此圖片，或換成網址
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
    images: [
      { src: 'https://duk.tw/BFGxk6.jpg', alt: 'PRP高濃度血小板原理' },
      { src: 'https://duk.tw/MHjcjG.jpg', alt: 'PRP高濃度血小板注射流程圖' },
      { src: 'https://duk.tw/MWdlee.jpg', alt: 'PRP高濃度血小板注射後注意事項' },
      { src: 'https://duk.tw/mAcbCS.jpg', alt: 'PRP高濃度血小板適應症' },
      { src: 'https://duk.tw/sjGf4w.jpg', alt: 'PRP高濃度血小板超音波導引' },
      { src: 'https://duk.tw/sYHtfN.jpg', alt: 'PRP高濃度血小板與高濃度葡萄糖比較' },
      { src: 'https://duk.tw/zU7oHa.jpg', alt: '增生注射與類固醇' }
    ],
    applicableConditions: ['旋轉肌撕裂', '網球肘', '軟骨損傷', '退化性關節炎'], // 舊資料保留以免列表頁壞掉
    features: ['啟動修復', '免開刀', '精準導引']
  },

  {
    slug: 'shockwave',
    title: '聚焦式/擴散式震波',
    description: '非侵入性的治療方式，利用高能量聲波震動，促進微血管新生與組織再生。',
    applicableConditions: [
      '鈣化性肌腱炎',
      '足底筋膜炎',
      '長期肌肉緊繃'
    ],
    content: '體外震波治療利用高能量聲波穿透皮膚，直達深層組織，刺激微血管新生，促進血液循環，加速組織修復。分為聚焦式與擴散式兩種，可針對不同深度的病灶進行治療。',
    imageUrl: '/images/treatments/shockwave/shockwave-treatment.jpg',
    seoKeywords: ['震波治療', '體外震波', '聚焦式震波', '擴散式震波'],
    seoDescription: '聚焦式與擴散式震波治療，非侵入性促進微血管新生與組織再生，適用於鈣化性肌腱炎、足底筋膜炎等症狀。',
  },
  {
    slug: 'exercise-therapy',
    title: '一對一運動治療',
    description: '結合醫學與運動科學，由醫師與治療師規劃專屬訓練，矯正錯誤姿勢。',
    features: [
      '動作控制訓練',
      '肌力強化',
      '術後功能回復'
    ],
    content: '由專業醫師與治療師共同評估，設計個人化的運動處方，透過動作控制訓練、肌力強化等方式，改善姿勢問題，預防傷害復發，並協助術後功能恢復。',
    imageUrl: '/images/treatments/exercise-therapy/exercise-session.jpg',
    seoKeywords: ['運動治療', '一對一運動', '動作控制訓練', '復健運動'],
    seoDescription: '一對一運動治療結合醫學與運動科學，由醫師與治療師規劃專屬訓練，矯正錯誤姿勢，改善姿勢問題。',
  }
];


export function getTreatmentBySlug(slug: string) {
  return treatments.find((t) => t.slug === slug);
}

// 取得所有 Slug (SEO generateStaticParams 用)
export function getAllTreatmentSlugs() {
  return treatments.map((t) => ({ slug: t.slug }));
}