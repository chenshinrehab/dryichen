import { TreatmentItem } from '@/types/content'

export interface Treatment extends Omit<TreatmentItem, 'id'> {
  slug: string;  // 使用 slug 而不是 id
}

export const treatments: Treatment[] = [
  {
    slug: 'prp',
    title: '增生療法 / PRP',
    description: '透過注射高濃度血小板血漿 (PRP) 或高濃度葡萄糖，啟動身體修復機制，修復受傷的肌腱、韌帶或軟骨。',
    applicableConditions: [
      '旋轉肌撕裂',
      '網球肘',
      '軟骨損傷',
      '退化性關節炎',
      '運動傷害'
    ],
    content: 'PRP (Platelet-Rich Plasma) 增生療法是一種利用自身血液中的高濃度血小板，透過離心技術分離出富含生長因子的血漿，再注射回受傷部位，促進組織修復與再生的治療方式。',
    imageUrl: '/images/treatments/prp/prp-treatment.jpg',
    seoKeywords: ['PRP', '增生療法', '血小板血漿', '復健治療'],
    seoDescription: 'PRP 增生療法利用高濃度血小板血漿促進組織修復與再生，適用於旋轉肌撕裂、網球肘、軟骨損傷等症狀。',
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

export function getTreatmentBySlug(slug: string): Treatment | undefined {
  return treatments.find(t => t.slug === slug);
}
