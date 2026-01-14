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
    id: 'clinic-schedule',
    title: '宸新復健科門診公告',
    category: '門診公告',
    date: '2026-01-15',
    summary: '宸新復健科1/12~1/17門診時間公告',
    coverImage: '/images/about/c.jpg',
    contentHtml: `
<p><strong>01/12-01/17 門診表</strong></p>
 <img src="/images/news/a.jpg" alt="門診時間表" />
<p><strong>✦貼心小叮嚀✦</strong><br>
(江家維醫師、黃彥傑醫師不看兒童早療，請要掛號的家長注意)</p>

<ul>
  <li>本診所無電話掛號，請下載 APP 預約，造成不便，敬請見諒。</li>
  <li>門診表每週五更新，實際門診表會依狀況修訂。</li>
  <li>網路預約者<strong>『最慢需於門診結束前一小時』</strong>至櫃檯報到，若門診結束前十分鐘人未在現場即無法看診。</li>
  <li>現場最晚掛號時間為門診結束前 10 分鐘，為維護醫療品質，門診人數太多可能停止現場掛號。</li>
</ul>

<p>
  線上掛號: <a href="https://reurl.cc/5dr7YG" target="_blank">https://reurl.cc/5dr7YG</a><br>
  Line 線上預約: <a href="https://lin.ee/FHj3mIs" target="_blank">https://lin.ee/FHj3mIs</a>
</p>

<p><strong>診所多功能 App：</strong><br>
預約掛號、徒手治療、看診進度、X光影像、最新消息<br>
【安卓】<a href="http://bit.ly/2Q8FdeK" target="_blank">http://bit.ly/2Q8FdeK</a><br>
【iOS】<a href="https://apple.co/2vZfRsH" target="_blank">https://apple.co/2vZfRsH</a>
</p>

<p><strong>✦宸新好友招募中✦</strong><br>
有問題通通來這裡問吧！</p>

<ul>
  <li>新竹宸新復健科診所: <a href="https://lin.ee/FHj3mIs" target="_blank">https://lin.ee/FHj3mIs</a></li>
  <li>新竹宸新兒童天地: <a href="https://lin.ee/j4Qc7u5" target="_blank">https://lin.ee/j4Qc7u5</a></li>
  <li>恆新復健聯盟 (可預約門診、徒手治療): <a href="https://lin.ee/U7WJTZB" target="_blank">https://lin.ee/U7WJTZB</a></li>
</ul>
<img src="/images/news/b.jpg" alt="林羿辰醫師" />
<img src="/images/news/c.jpg" alt="徐維農醫師" />
<img src="/images/news/d.jpg" alt="吳皓偉醫師" />
    `,
    seoTitle: '2026門診公告 - 新竹宸新復健科',
    keywords: ['門診公告', '林羿辰醫師', '新竹宸新復健科']
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