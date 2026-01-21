// src/data/news.ts

// ==========================================
// 1. 定義資料介面
// ==========================================

export interface NewsPost {
  id: string;
  title: string;
  category: '門診公告' | '衛教文章' | '醫學新知' | '診所活動';
  date: string;         // 純日期格式 YYYY-MM-DD
  displayTag?: string;  // 顯示 "置頂貼文" 等特殊標籤
  summary: string;      // 列表頁顯示的短摘要
  coverImage: string;   // 封面圖
  contentHtml: string;  // ✨ 內文直接寫在這裡，統一管理
  lastModified?: string;
  
  // SEO 專用欄位
  seoTitle?: string;
  seoDescription?: string;
  keywords?: string[];
}

// ==========================================
// 2. 完整資料內容 (Source of Truth)
// ⚠️ 以後發文只要改這個陣列就好！
// ==========================================
const fullNewsData: NewsPost[] = [
  {
    id: 'clinic-schedule',
    title: '宸新復健科門診公告',
    lastModified: '2026-01-21',
    category: '門診公告',
    date: '2026-01-15',
    displayTag: '置頂貼文',
    summary: '宸新復健科2026年門診時間公告',
    coverImage: '/images/about/c.jpg',
    seoTitle: '2026門診公告 - 新竹宸新復健科',
    keywords: ['門診公告', '林羿辰醫師', '新竹宸新復健科'],
    contentHtml: `
<p><strong>01/12-01/17 門診表</strong></p>
<img src="/images/news/a.jpg" alt="門診時間表" />
<p><strong>✦貼心小叮嚀✦</strong><br></p>

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
    `
  },

  {
    id: 'hyaluronic-diff',
    title: '打膝蓋剩下的玻尿酸，可以順便補臉嗎？',
    lastModified: '2026-01-21',
    category: '衛教文章',
    date: '2026-01-17',
    summary: '門診一位大姊突發奇想：「醫美打臉好貴，膝蓋打剩的玻尿酸可以補法令紋嗎？」修但幾勒！雖然都叫玻尿酸，但機油跟水泥可是不能混用的喔！',
    coverImage: '/images/news/article/ha.jpg',
    seoTitle: '打膝蓋剩下的玻尿酸，可以順便補臉嗎？醫美與關節玻尿酸差異',
    seoDescription: '門診常被問：打膝蓋剩下的玻尿酸，可以順便補臉嗎？醫師解釋：雖然都叫玻尿酸，但關節用的像機油，醫美用的像水泥，用途大不同！醫師詳解三種玻尿酸差異。',
    keywords: ['玻尿酸', '膝蓋退化', '醫美', '增生療法', '韌帶修復', '醫學知識'],
    contentHtml: `
  <p>門診一位可愛的大姊突發奇想問我：「醫美打臉好貴喔，阿打膝蓋的玻尿酸，剩一點幫我補一下法令紋？」</p>
  <p><strong>😂 修但幾勒！當然不行！</strong></p>
  <p>雖然都叫「玻尿酸」，但不會拿機油去補牆壁一樣啊！這兩者的濃度、分子大小與交聯程度完全不同。</p>
  
  <h3>1. 🚗 膝蓋退化用的：關節的「機油」</h3>
  <p>膝蓋退化就像引擎機油乾掉，骨頭磨骨頭當然痛！這類玻尿酸主要功能是<strong>「潤滑」</strong>。</p>
  <ul>
    <li><strong>短效型（傳統機油）：</strong> 像水一樣稀，要每週打，比較便宜。</li>
    <li><strong>長效型（合成機油）：</strong> 比較濃稠，半年到一年打一次就好，省時但較貴。</li>
  </ul>
  <p><strong>❌ 為什麼不能打臉？</strong><br>因為它太稀了！打進臉部無法支撐，幾天就被流失代謝掉了。</p>
  
  <h3>2. 🧱 醫美用的：臉部的「水泥/填充材」</h3>
  <p>醫美的玻尿酸經過特殊處理（交聯），質地像果凍甚至黏土一樣硬挺。它的功能是<strong>「填充與塑形」</strong>，這樣才能撐起臉型、填補皺紋。</p>
  <p><strong>❌ 為什麼不能打膝蓋？</strong><br>就像把乾掉硬硬的水泥灌進引擎，無法達到潤滑效果，反而會讓膝蓋卡住、更加疼痛！</p>
  
  <h3>3. 🏗️ 韌帶修補用的：組織的「鷹架」</h3>
  <p>這是新研發的玻尿酸應用。它的目的是像<strong>「鷹架」</strong>一樣，讓修復細胞可以爬上鷹架去修補破洞，幫助受傷的組織長回來。</p>
  
  <h3>👨‍⚕️ 醫師小總結</h3>
  <p>雖然名稱一樣，但用途大不同，請記住這三個概念：</p>
  <ul>
    <li>想<strong>潤滑關節</strong> 👉 用<strong>機油</strong>（關節玻尿酸）</li>
    <li>想<strong>變美填補</strong> 👉 用<strong>水泥</strong>（醫美玻尿酸）</li>
    <li>想<strong>修復韌帶</strong> 👉 用<strong>鷹架</strong>（軟組織玻尿酸）</li>
  </ul>
  <img src="/images/news/article/ha.jpg" alt="玻尿酸種類差異" />
    `
  },

  {
    id: 'kneeclick',
    title: '膝蓋為何會喀喀響，是膝蓋退化了嗎?',
    lastModified: '2026-01-21',
    category: '衛教文章',
    date: '2026-01-14',
    summary: '門診很常碰到病患來看診，詢問膝蓋為何會喀喀響，擔心膝蓋是不是退化了!',
    coverImage: '/images/news/article/knee.jpg',
    seoTitle: '膝蓋為何會喀喀響，是膝蓋退化了嗎?',
    seoDescription: '膝蓋為何會喀喀響，是膝蓋退化了嗎?，膝蓋有聲音，膝關節退化。',
    keywords: ['醫學知識', '膝蓋痛', '退化性關節炎', '喀喀響'],
    contentHtml: `
<p>門診很常碰到病患來看診，詢問膝蓋為何會喀喀響，擔心膝蓋是不是退化了！</p>

<h3>✅ 這種聲音免驚！(生理性聲響)</h3>
<p>如果膝蓋有聲音，但是 <strong>「完全不痛、不腫、有力氣」</strong>，通常是正常的生理現象：</p>
<ul>
  <li><strong>氣泡聲：</strong> 像折手指一樣，關節內的氣泡破掉（啵一聲）。</li>
  <li><strong>筋骨滑動：</strong> 就像撥吉他弦，筋稍微掃過骨頭的聲音。</li>
</ul>
<p><strong>👉 醫師說：</strong> 只要不痛，通常不需要治療，也不是關節炎的前兆喔！</p>

<h3>🚨 出現這 4 種狀況，請看醫生！</h3>
<p>如果聲音伴隨著不舒服，這才是膝蓋在求救：</p>
<ul>
  <li><strong>會痛：</strong> 最直接的警訊，內部組織受傷。</li>
  <li><strong>會腫：</strong> 膝蓋看起來腫腫的，摸起來熱熱的。</li>
  <li><strong>會卡：</strong> 膝蓋彎到一半突然「卡死」動不了。</li>
  <li><strong>會軟：</strong> 走路突然沒力氣，稍微軟腳。</li>
</ul>
<p><strong>👉 醫師說：</strong> 這可能代表半月板、軟骨或是韌帶受傷了，請盡快檢查。</p>

<h3>💪 膝蓋有聲音，該怎麼保養？</h3>
<ul>
  <li><strong>練壯股四頭肌：</strong> 大腿肌肉有力，就能抓穩膝蓋骨，減少磨損。<br>(方法：坐在椅子上，把腳伸直抬高停留 5-10 秒，或背靠牆壁半蹲)</li>
  <li><strong>運動後放鬆大腿前外側</strong></li>
  <li><strong>避開危險動作：</strong> 少做蹲跪、盤腿坐，避免深蹲超過 90 度。</li>
</ul>

<h3>💡 最後記住這句口訣：</h3>
<p><strong>「有聲無痛」多觀察，「有聲有痛」快就醫！</strong></p>
<img src="/images/news/article/knee.jpg" alt="膝蓋為何會喀喀響" />
    `
  }
];

// ==========================================
// 3. 自動化瘦身區 (Sitemap 與列表頁專用)
// ==========================================
// 自動過濾掉 contentHtml，產生輕量列表
// 這樣 Sitemap 和新聞列表頁載入時就不會卡住

export const newsList = fullNewsData.map((post) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { contentHtml, ...lightweightData } = post;
  return lightweightData;
});

// ==========================================
// 4. Helper Functions
// ==========================================

export function getNewsById(id: string): NewsPost | undefined {
  // 直接從完整資料庫找
  return fullNewsData.find((post) => post.id === id);
}

export function getAllNews() {
  // 回傳輕量列表 (如果你有其他地方需要全部新聞，用這個)
  return newsList;
}