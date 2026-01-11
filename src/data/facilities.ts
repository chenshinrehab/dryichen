// src/data/facilities.ts
export interface FacilityItem {
  id: string
  title: string
  description: string     // 列表頁與 SEO Description
  contentHtml: string     // 詳細介紹
  imageUrl: string
  keywords: string[]      // ✨ SEO 關鍵字
}

export const facilitiesData: FacilityItem[] = [
  {
    id: 'x-ray',
    title: '數位 X 光檢查',
    description: '低輻射、高解析度，快速診斷骨折與退化性關節炎，提供即時影像分析。',
    keywords: ['數位X光', '骨折檢查', '骨刺', '脊椎側彎', '新竹X光檢查'],
    contentHtml: `
      <p>本院採用最新型數位 X 光機 (Digital Radiography)，具備<strong>低輻射、高解析度</strong>的特點。</p>
      <p>成像時間極短，能讓醫師即時判讀骨骼結構，精準診斷骨折、骨刺增生、脊椎側彎與關節退化情形，是骨科與復健科診斷的第一線利器。</p>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a092dd14?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ultrasound',
    title: '高解析度超音波',
    description: '軟組織檢查利器，精準導引注射不可或缺的「醫師第三隻眼」。',
    keywords: ['肌骨超音波', '超音波導引注射', '肌腱炎檢查', '韌帶撕裂', '新竹超音波檢查'],
    contentHtml: `
      <p>相較於 X 光看骨頭，高解析度超音波能清楚看到<strong>肌腱、韌帶、神經與肌肉</strong>的狀況。</p>
      <p>搭配高階都卜勒血流偵測 (Doppler)，能精準判斷發炎程度。最重要的是，我們堅持進行<strong>超音波導引注射</strong>，看著螢幕下針，將藥物準確送達病灶，避免誤傷神經血管。</p>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-217358c7e618?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'shockwave',
    title: '聚焦式震波治療',
    description: '非侵入性治療首選，針對鈣化性肌腱炎與足底筋膜炎效果顯著。',
    keywords: ['震波治療', '聚焦式震波', '足底筋膜炎', '鈣化性肌腱炎', '網球肘治療'],
    contentHtml: `
      <p>引進瑞士頂級 EMS 聚焦式震波，利用高能量聲波穿透組織，直達深層病灶，刺激微血管新生與組織修復。</p>
      <p><strong>免打針、免吃藥、無恢復期</strong>，對於長期沾黏、鈣化性肌腱炎以及藥物治療無效的慢性疼痛，具有顯著的療效。</p>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1618939304347-97594924d852?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'laser',
    title: '高能量雷射',
    description: '深層消炎止痛，加速細胞修復，急性扭傷消腫神器。',
    keywords: ['高能量雷射', '消腫止痛', '腳踝扭傷', '肌肉拉傷', '光生物調節'],
    contentHtml: `
      <p>高能量雷射能穿透至深層組織，透過光生物調節作用 (Photobiomodulation) 抑制發炎反應，並加速粒線體產生能量 (ATP)。</p>
      <p>對於<strong>急性腳踝扭傷消腫、肌肉拉傷修復</strong>效果極佳，能大幅縮短受傷後的恢復時間。</p>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'prp',
    title: 'PRP 製備系統',
    description: '高濃度血小板分離技術，確保生長因子濃度，提升治療效果。',
    keywords: ['PRP設備', '離心機', '生長因子', '高濃度血小板', '無菌操作'],
    contentHtml: `
      <p>工欲善其事，必先利其器。PRP 的效果取決於血小板的濃度與純度。</p>
      <p>本院採用衛福部核准之高階 PRP 套管與專用離心設備，在無菌環境下操作，能有效分離紅血球，萃取高濃度且純淨的血小板血漿，最大化增生治療的效果。</p>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800'
  }
];

export function getFacilityById(id: string) {
  return facilitiesData.find(item => item.id === id);
}