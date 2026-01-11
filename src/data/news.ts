// src/data/news.ts

export interface NewsPost {
  id: string;
  title: string;
  category: '門診公告' | '衛教文章' | '醫學新知' | '診所活動';
  date: string;
  summary: string;      // 列表頁顯示的短摘要
  coverImage: string;   // 封面圖
  contentHtml: string;  // 內文 (支援 HTML)
  
  // ✨ SEO 專用欄位 (預留給未來發文用)
  seoTitle?: string;
  seoDescription?: string;
  keywords?: string[];
}

export const newsData: NewsPost[] = [
  {
    id: '2024-opening-notice',
    title: '【公告】宸新復健科 2024 春節門診時間異動',
    category: '門診公告',
    date: '2024-01-10',
    summary: '農曆春節期間門診時間調整公告，請有復健需求的民眾提早安排預約。',
    coverImage: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800',
    contentHtml: `
      <p>親愛的鄉親朋友們，農曆春節將至，宸新復健科預祝大家龍年行大運，身體健康！</p>
      <p>本院春節期間門診異動如下：...</p>
      <ul>
        <li>2/8 (小年夜)：正常看診</li>
        <li>2/9 - 2/13 (除夕至初四)：全面休診</li>
        <li>2/14 (初五)：恢復正常門診</li>
      </ul>
    `,
    seoTitle: '2024春節門診公告 - 新竹宸新復健科',
    keywords: ['門診公告', '春節休診', '新竹復健科']
  },
  {
    id: 'prp-knowledge',
    title: '膝蓋痛一定要開刀嗎？PRP 增生療法新選擇',
    category: '衛教文章',
    date: '2024-01-05',
    summary: '退化性關節炎不一定要換人工關節。透過 PRP 自體血小板注射，啟動關節修復力。',
    coverImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    contentHtml: `
      <p>許多長輩聽到膝蓋退化，就很擔心要開刀換人工關節。其實在退化初期或中期，<strong>PRP 增生療法</strong>是一個非常有效的保守治療選擇。</p>
      <h3>什麼是 PRP？</h3>
      <p>PRP 是利用自己的血液，分離出高濃度的血小板...</p>
    `,
    seoTitle: '膝蓋退化免開刀？新竹PRP治療推薦 - 宸新復健科',
    seoDescription: '新竹PRP注射推薦。膝蓋退化性關節炎不一定要開刀，透過超音波導引PRP增生療法，精準修復軟骨與韌帶。',
    keywords: ['新竹PRP', '膝蓋痛', '退化性關節炎', '免開刀']
  }
];

export function getNewsById(id: string) {
  return newsData.find((post) => post.id === id);
}