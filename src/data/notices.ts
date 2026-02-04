import { NewsPost } from './news';

export const noticesData: NewsPost[] = [
  // 範例 1: 連假公告
  {
    id: 'clinic-schedule',
    title: '【2026門診公告】宸新復健科門診公告',
    category: '門診公告',
    date: '2026-02-04',
    summary: '宸新復健科2026年門診時間公告',
    coverImage: '/images/about/c.webp', // 建議製作一張通用的公告底圖
    
    // 公告也要做 SEO
    seoTitle: '2026門診公告 - 新竹宸新復健科',
    seoDescription: '新竹宸新復健科門診時段公告。',
    keywords: ['門診公告', '林羿辰醫師', '新竹宸新復健科'],
    
    contentHtml: `
<p><strong>2026年 門診表</strong></p>
<img src="/images/notice/a.webp" alt="門診時間表" />
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
<img src="/images/notice/b.webp" alt="林羿辰醫師" />
<img src="/images/notice/c.webp" alt="徐維農醫師" />
<img src="/images/notice/d.webp" alt="吳皓偉醫師" />
    `
  }
];
