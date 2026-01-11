// src/data/news.ts
export interface NewsItem {
  id: string
  title: string
  date: string
  category: string
  summary: string // 列表顯示的摘要
  contentHtml: string // 詳細內容 (HTML)
  coverImage: string
  keywords?: string[]
}

export const newsData: NewsItem[] = [
  {
    id: 'outpatient-adjustment',
    title: '【門診異動】本週六早診正常看診公告',
    date: '2025-06-20',
    category: '門診公告',
    summary: '因應連續假期調整，本週六上午林羿辰醫師正常看診，歡迎多加利用預約系統。',
    keywords: ['新竹復健科', '門診時間', '林羿辰醫師', '看診公告'], // ✨ 填寫關鍵字
    contentHtml: `
      <p>親愛的病患朋友大家好：</p>
      <p>本診所配合人事行政局行事曆調整，本週六 (6/22) 上午 <strong>09:00 - 12:00</strong> 正常看診。</p>
      <p>林羿辰醫師將提供完整的復健門診與增生治療評估，若有需要的民眾請提早預約。</p>
      <p>祝大家假期愉快，身體健康！</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'prp-knowledge',
    title: '【醫學新知】PRP 增生治療真的有效嗎？',
    date: '2025-06-15',
    category: '衛教文章',
    summary: '深入淺出解析 PRP 原理，為什麼許多運動員受傷都選擇打 PRP？一篇文看懂治療關鍵。',
    keywords: ['PRP', '增生療法', '膝蓋痛', '網球肘', '運動傷害'], // ✨ 填寫關鍵字
    contentHtml: `
      <p>許多人聽到 PRP (高濃度血小板血漿) 都會好奇：它真的有這麼神奇嗎？</p>
      <p>其實 PRP 的原理很簡單，就是利用我們自己血液中富含的生長因子，濃縮後注射回受傷的部位，就像是給身體的修復工班打了強心針，加速組織修復的過程。</p>
      <h3>PRP 適合哪些人？</h3>
      <ul>
        <li>長期肌腱炎久治不癒</li>
        <li>退化性關節炎初期</li>
        <li>韌帶撕裂傷希望加速癒合</li>
      </ul>
    `,
    coverImage: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800'
  }
];

export function getNewsById(id: string) {
  return newsData.find(item => item.id === id);
}