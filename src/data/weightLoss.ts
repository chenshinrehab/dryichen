// src/data/weightLoss.ts

// =======================================================
// 1. 定義資料介面
// =======================================================

// 輕量級 Metadata (給 Sitemap 和 列表頁用)
export interface WeightLossMetadata {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  features?: string[];
  lastModified?: string;
  
  // SEO 欄位 (列表頁可能需要)
  seoTitle?: string;
  seoDescription?: string;
  keywords?: string[];
}

// 完整資料介面 (包含內文 HTML 與詳細列表)
export interface WeightLossProgram extends WeightLossMetadata {
  contentHtml?: string;
  whyChooseUs?: string[];
  programBenefits?: string[];
  images?: { src: string; alt: string }[];
  qrCode?: string;
  benefitsTitle?: string;
  benefitsIconClass?: string;
  qaList?: { question: string; answer: string }[];
}

// =======================================================
// 2. 完整資料來源 (Source of Truth)
// ⚠️ 所有資料都在這裡維護，程式會自動產生 Sitemap 用的列表
// =======================================================
const fullWeightLossData: WeightLossProgram[] = [
  // -----------------------------------------------------
  // 1. 猛健樂 (Mounjaro)
  // -----------------------------------------------------
  {
    slug: 'mounjaro',
    title: '猛健樂 (Mounjaro)',
    lastModified: '2026-01-21',
    subtitle: '新一代雙重腸泌素受體促效劑',
    description: '新一代雙重腸泌素(GIP/GLP-1)受體促效劑，提供更卓越的體重控制效果。',
    image: '/images/weight-loss/a.webp',
    features: ['一週一次', '抑制食慾', '延緩胃排空'],
    seoTitle: '新竹猛健樂推薦(Mounjaro) | 宸新復健科診所 - 專業減重門診',
    seoDescription: '新竹猛健樂(Mounjaro)瘦瘦針推薦。位於鄰近新竹科學園區，靠近竹北，宸新復健科提供新一代雙重腸泌素(GIP/GLP-1)，減重效果優於傳統善纖達。醫師親自規劃療程，含InBody檢測與飲食指導，有效改善肥胖、脂肪肝與三高問題。',
    keywords: ['新竹猛健樂', '竹北猛健樂', 'Mounjaro價格', '新竹瘦瘦針', '新竹減重門診', '竹科減重', '雙重腸泌素', '減肥針推薦', '胰島素阻抗'],
    contentHtml: `
    <style>
  .responsive-img-enlarge { width: 110% !important; max-width: none !important; display: block !important; margin: 1rem auto !important; position: relative !important; left: 50% !important; transform: translateX(-50%) !important; height: auto; }
  @media (min-width: 768px) { .responsive-img-enlarge { width: 100% !important; left: 0 !important; transform: none !important; } }
</style>
        <img src="/images/news/article/mounjaro/1.webp" alt="猛健樂全攻略懶人包1" class="responsive-img-enlarge">
        <img src="/images/news/article/mounjaro/2.webp" alt="猛健樂全攻略懶人包2" class="responsive-img-enlarge">
        <img src="/images/news/article/mounjaro/3.webp" alt="猛健樂全攻略懶人包3" class="responsive-img-enlarge">
        <img src="/images/news/article/mounjaro/4.webp" alt="猛健樂全攻略懶人包4" class="responsive-img-enlarge">
        <img src="/images/news/article/mounjaro/5.webp" alt="猛健樂全攻略懶人包5" class="responsive-img-enlarge">
        <img src="/images/news/article/mounjaro/6.webp" alt="猛健樂全攻略懶人包6" class="responsive-img-enlarge">

<p><strong>位於新竹的宸新復健科</strong>，專為<strong>新竹科學園區</strong>與在地民眾提供完整的<strong>猛健樂 (Mounjaro)</strong> 減重療程。這是目前最新的雙重腸泌素受體促效劑，能同時活化 GIP 與 GLP-1 兩種受體。</p>
<br>
<p>隨著醫學科技的進步，減重已不再單純依靠意志力。繼第一代 GLP-1 藥物（俗稱瘦瘦針）之後，全球醫學界迎來了更具突破性的「雙重腸泌素」——Tirzepatide（商品名：Mounjaro 猛健樂）。</p><br><p>它不僅延續了抑制食慾的效果，更加入了 GIP 機制來提升代謝與燃脂效率。本院特別整理了本月專屬優惠與完整的衛教資訊，幫助您安全、有效地找回健康的體態。</p>
<br>
<div style="background-color: #fffbeb; border: 2px solid #fbbf24; border-radius: 1rem; padding: 1.5rem; margin: 2rem 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
    <h2 style="color: #b45309; margin-top: 0; font-weight: bold; border-bottom: 2px solid #fcd34d; padding-bottom: 0.5rem; display: flex; align-items: center;">
        📢 猛健樂 (Mounjaro) 本月前 100 名限定優惠
    </h2>
    
    <p style="font-size: 1.1rem; color: #78350f;">宸新復健科<strong>猛健樂</strong>價格。猛健樂依據劑量濃度不同，分為四種規格，醫師將依據您的減重進程調整劑量：</p>
    <br>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 0.75rem; margin-bottom: 1.5rem;">
    <div style="background: white; padding: 0.75rem; border-radius: 0.5rem; border: 1px solid #e5e7eb; text-align: center;">
        <strong style="font-size: 1.1rem; color: #0891b2;">2.5 mg</strong>
        <p style="margin: 0.25rem 0 0; color: #dc2626; font-weight: bold; font-size: 1.25rem;">$10,500</p>
    </div>
    <div style="background: white; padding: 0.75rem; border-radius: 0.5rem; border: 1px solid #e5e7eb; text-align: center;">
        <strong style="font-size: 1.1rem; color: #0891b2;">5 mg</strong>
        <p style="margin: 0.25rem 0 0; color: #dc2626; font-weight: bold; font-size: 1.25rem;">$11,500</p>
    </div>
    <div style="background: white; padding: 0.75rem; border-radius: 0.5rem; border: 1px solid #e5e7eb; text-align: center;">
        <strong style="font-size: 1.1rem; color: #0891b2;">7.5 mg</strong>
        <p style="margin: 0.25rem 0 0; color: #dc2626; font-weight: bold; font-size: 1.25rem;">$13,000</p>
    </div>
    <div style="background: white; padding: 0.75rem; border-radius: 0.5rem; border: 1px solid #e5e7eb; text-align: center;">
        <strong style="font-size: 1.1rem; color: #0891b2;">10 mg</strong>
        <p style="margin: 0.25rem 0 0; color: #dc2626; font-weight: bold; font-size: 1.25rem;">$15,000</p>
    </div>
</div>

    <h3 style="color: #92400e; margin-bottom: 1rem;">⚠️ 就診注意事項與流程</h3>
<ul style="list-style: none; padding: 0; margin: 0; color: #92400e;">
    <li style="margin-bottom: 1rem; display: flex; align-items: start;">
        <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">1</span>
        <div><strong>主動告知需求：</strong>掛號時請直接跟櫃台人員說明「要諮詢猛健樂」，我們會為您安排提前進診間評估，節省您的寶貴時間。</div>
    </li>
    <li style="margin-bottom: 1rem; display: flex; align-items: start;">
        <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">2</span>
        <div><strong>攜帶健保卡：</strong>當天請務必攜帶健保卡及掛號費。若經醫師評估後確定進行療程並現場購買藥品，原本收取的掛號費將<strong>全額退還</strong>。</div>
    </li>
    <li style="margin-bottom: 1rem; display: flex; align-items: start;">
        <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">3</span>
        <div><strong>缺貨處理機制：</strong>由於猛健樂相當熱門，現場偶爾會有缺貨狀況。若當日無藥，我們會協助預約藥品到貨時間，屆時您再來領藥，並由專業護理人員進行施打教學。</div>
    </li>
    <li style="margin-bottom: 0; display: flex; align-items: start;">
        <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">4</span>
        <div><strong>全球供貨不穩對策：</strong>若付款後因全球性缺貨導致等待過久，本院提供<strong>全額退款</strong>服務，或者經醫師評估後，可協助您更換為成效類似的週纖達，確保減重計畫不中斷。</div>
    </li>
</ul>
</div>

<p><img src="/images/weight-loss/mounjaro/a.webp" alt="猛健樂本月優惠與注意事項"></p>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h3>🏆 為什麼選擇猛健樂？解析 5 大核心特點</h3>
<p>猛健樂 (Mounjaro) 之所以被稱為減重界的「遊戲規則改變者」，是因為它突破了傳統單一機制的限制。根據最新的臨床研究數據，它擁有以下五大不可忽視的優勢：</p>

<h3>1. 雙效腸泌素的代謝調節 (GIP/GLP-1)</h3>
<p>傳統的減重針（如週纖達、胰妥讚）僅含有 GLP-1。而猛健樂是首款<strong>同時活化 GIP 與 GLP-1</strong> 的藥物。這種雙效機制能協同運作：</p>
<ul>
    <li><strong>調節血糖：</strong> 依據體內葡萄糖濃度，智慧調節胰島素分泌。</li>
    <li><strong>延緩胃排空：</strong> 讓食物停留在胃裡久一點，延長飽足感。</li>
    <li><strong>增加大腦飽足感：</strong> 直接作用於中樞神經，降低食慾。</li>
    <li><strong>減少脂肪堆積：</strong> GIP 能直接作用於脂肪細胞，改善能量代謝。</li>
</ul>

<h3>2. 改善糖化血色素 (HbA1c)</h3>
<p>對於血糖控制不佳的族群，猛健樂效果顯著。臨床試驗顯示，在使用 40 週後，糖化血色素平均可<strong>降低 2% ~ 2.3%</strong>。這不僅能穩定血糖，更能輔助治療第二型糖尿病，甚至改善糖尿病前期的血糖異常。</p>

<h3>3. 體重下降幅度驚人 (可達 20.9%)</h3>
<p>這是猛健樂最受矚目的數據。透過調節食慾與降低熱量攝取，臨床受試者平均體重下降幅度介於 <strong>15% ~ 20.9%</strong>。這意味著一個 100 公斤的人，有可能在療程中減去約 20 公斤，其效果已逼近外科縮胃手術，但卻是非侵入性的治療。</p>

<h3>4. 有助降低心血管疾病風險</h3>
<p>減重不只是為了外觀，更是為了健康。猛健樂能全方位改善代謝症候群指標：</p>
<ul>
    <li>降低血壓</li>
    <li>降低總膽固醇與三酸甘油脂</li>
    <li>縮小腰圍</li>
    <li><strong>肝臟脂肪含量下降達 52%：</strong> 這對於有脂肪肝困擾的現代人來說，是一大福音，能大幅減少心血管風險。</li>
</ul>

<h3>5. 多國權威認證核准</h3>
<p>安全性是我們最重視的。猛健樂已獲得<strong>美國 FDA</strong>、<strong>歐洲 EMA</strong> 以及<strong>台灣 TFDA</strong> 的核准，用於第二型糖尿病的血糖控制以及體重控制。該藥物已在全球 55 國進行過臨床試驗，累積了大量的安全性數據。</p>

<p><img src="/images/weight-loss/mounjaro/b.webp" alt="猛健樂雙重腸泌素特點說明"></p>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h3>🎯 誰適合施打猛健樂？四大族群自我檢測</h3>
<p>雖然猛健樂效果強大，但經由專業醫師評估仍然是必須的。在宸新復健科，我們建議以下四類族群可以考慮諮詢此療程：</p>

<h3>✅ 1. 糖尿病前期與第二型糖尿病患者</h3>
<p>如果您已經出現血糖偏高、胰島素阻抗的現象，猛健樂能同時幫助控糖與減重，阻斷疾病惡化。</p>

<h3>✅ 2. 「三高」族群</h3>
<p>同時深受<strong>高血壓</strong>、<strong>高血糖</strong>、<strong>高血脂</strong>困擾的朋友。透過減重與藥物的代謝調節作用，能顯著改善三高指數，減少長期服用慢性病藥物的負擔。</p>

<h3>✅ 3. 追求體態雕塑與增肌減脂</h3>
<p>這不僅限於肥胖者。對於<strong>維持好身材</strong>有高標準要求，或是正在進行健身、希望<strong>增肌減脂</strong>效率更好的人，猛健樂能幫助精準控制飲食，減少體脂堆積，讓肌肉線條更明顯。</p>

<h3>✅ 4. 體重過重者 (BMI 超標)</h3>
<p>符合醫學定義的肥胖族群：</p>
<ul>
    <li><strong>中度肥胖：</strong> BMI 27 以上</li>
    <li><strong>成人肥胖：</strong> BMI 30 以上</li>
</ul>

<p><img src="/images/weight-loss/mounjaro/c.webp" alt="猛健樂適合施打對象"></p>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h3>📝 猛健樂使用中的懶人包：醫師教你怎麼瘦得健康</h3>
<p>開始施打猛健樂後，為了達到最佳效果並避免副作用，我特別整理了這份「使用中懶人包」，請務必配合以下五點執行：</p>

<h3>1. 飲食要吃到 BMR (基礎代謝率)</h3>
<p><strong>千萬不要絕食！</strong> 猛健樂會讓你食慾變小，但如果你吃得太少（低於基礎代謝率），身體會啟動保護機制，反而讓代謝下降，未來更容易復胖。請維持基本熱量攝取，選擇高品質的原型食物，<strong>不挨餓</strong>才是長久之計。</p>

<h3>2. 運動防掉肌，重訓比有氧更好</h3>
<p>在體重快速下降的過程中，肌肉很容易跟著流失。為了避免變成「泡芙人」或代謝下降，<strong>運動增肌減脂</strong>至關重要。建議多做重量訓練（阻力訓練），並配合<strong>充足睡眠</strong>，讓身體有修復的時間。</p>

<h3>3. 蛋白質與水分要充足</h3>
<p>這是飲食的兩大重點：</p>
<ul>
    <li><strong>蛋白質：</strong> 建議吃到體重的 <strong>1.2 ~ 1.5 倍</strong>（例如 60 公斤的人，每天吃 72~90 克蛋白質）。雞蛋、魚肉、豆漿都是好選擇。</li>
    <li><strong>水分：</strong> 幫助代謝廢物與脂肪分解，每日飲水至少 <strong>2000cc</strong>。</li>
</ul>

<h3>4. 劑量調整原則：不用盲目升級</h3>
<p>很多人以為劑量越高瘦越快，其實不然。醫師的黃金準則是：<strong>「只要每週體重有穩定下降 0.5 ~ 1 公斤，就不需要提升劑量」</strong>。穩穩地瘦（每週 0.5~1kg）對身體負擔最小，皮膚也比較不會鬆弛。健康第一，不要急於求成。</p>

<h3>5. 建立黃金三角習慣</h3>
<p>藥物是輔助，習慣才是根本。透過猛健樂的幫助，養成<strong>規律運動</strong>、<strong>健康飲食</strong>、<strong>睡飽覺</strong>的好習慣。當療程結束後，這些習慣將幫助您維持成果，達成<strong>不復胖</strong>的終極目標！</p>

<p><img src="/images/weight-loss/mounjaro/d.webp" alt="猛健樂懶人包"></p>
<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h3>💉 猛健樂 (Mounjaro) 施打教學與補打原則</h3>
<p>為了確保藥物發揮最大療效並減少不適，正確的施打方式與劑量調整非常重要。以下是為您整理的操作重點：</p>

<h3>1. 施打部位選擇：輪替是關鍵</h3>
<p>猛健樂屬於皮下注射，建議施打在皮下脂肪較豐富的部位。請每週<strong>輪替注射部位</strong>，以避免皮膚產生硬塊或紅腫。</p>
<ul>
  <li><strong>腹部：</strong> 以肚臍為中心，距離肚臍約 5 公分（約兩指寬）以外的區域，避開肚臍周圍。</li>
  <li><strong>大腿前側：</strong> 大腿正面偏外側的中段區域。</li>
  <li><strong>上臂外側：</strong> 手臂外側中段，通常建議由他人協助施打較為順手。</li>
</ul>

<h3>2. 如何提升劑量：循序漸進</h3>
<p>猛健樂的劑量設計為每 4 週調整一次，切勿急於求成。標準的劑量遞增流程如下：</p>
<ul>
  <li><strong>起始期 (第 1-4 週)：</strong> 使用 <strong>2.5 mg</strong>。此階段目標是讓身體適應藥物，而非快速減重。</li>
  <li><strong>爬升期 (第 5-8 週)：</strong> 若無明顯副作用，可經醫師評估後調升至 <strong>5 mg</strong>。</li>
  <li><strong>穩定期與調整：</strong> 之後每 4 週視減重效果與副作用評估是否維持或調升至 7.5 mg、10 mg 等（最大劑量為 15 mg）。</li>
  <li><strong>黃金準則：</strong> 只要目前的劑量能讓體重每週穩定下降 <strong>0.5~1 公斤</strong>，且食慾控制良好，就<strong>不需要</strong>急著往上加劑量。</li>
</ul>

<h3>3. 忘記打藥怎麼辦？補打黃金期</h3>
<p>生活忙碌難免忘記用藥，請依照「4 天 (96 小時) 原則」來判斷是否補打：</p>
<ul>
  <li><strong>距離原定施打日「未滿」4 天：</strong> 請盡快補打這一劑，之後維持原本的每週施打日程。</li>
  <li><strong>距離原定施打日「超過」4 天：</strong> 請<strong>跳過</strong>這一劑，等到下一次預定的施打日再使用。<strong>千萬不要</strong>為了補進度而在同一週打兩劑，這會導致藥物濃度過高，引發嚴重副作用。</li>
</ul>
<p><strong>舉例說明：</strong> 您固定每週日施打。若週三想起來（未滿 4 天），請立即補打；若週四才想起來（已超過 4 天），請等到這週日再打下一劑。</p>

<div style="background-color: #f0f9ff; padding: 2rem; border-radius: 1rem; margin-top: 3rem; text-align: center;">
    <h3 style="color: #0369a1; margin-top: 0;">👨‍⚕️ 想了解您是否適合猛健樂療程？</h3>
    <p style="color: #334155; margin-bottom: 1.5rem;">歡迎來到新竹宸新復健科，由醫師親自為您評估。我們提供一對一的諮詢，結合 InBody 檢測，甲狀腺超音波檢查或抽血為您量身打造最安全、有效的減重計畫。</p>
    <p style="font-weight: bold; color: #0891b2;">如有任何疑問，都可以在門診時直接跟醫師聊聊喔！</p>
</div>
    `,
    whyChooseUs: [
      '詳細問診及衛教施打，確保用藥安全',
      '包含<strong>甲狀腺超音波</strong>及完整<strong>抽血檢查</strong>',
      '療程含高階 <strong>InBody 身體組成分析</strong>及運動課程'
    ],
    programBenefits: [
      '一週一次皮下注射，簡單方便',
      '臨床顯示體重下降幅度可達 20%',
      '有效控制三高、改善脂肪肝與心血管健康'
    ],
    qaList: [
      {
        question: '猛健樂會有什麼副作用嗎？',
        answer: '常見的副作用多為腸胃道症狀，如噁心、腹脹或便秘。這些反應通常是輕微且暫時的，透過調整飲食（少量多餐、避開油膩）及醫師調整劑量，大多能順利適應。'
      },
      {
        question: '停藥後會復胖嗎？',
        answer: '減重藥物是輔助工具，幫助您建立良好的飲食與生活習慣。若停藥後能維持健康的飲食與運動習慣，就能有效維持體重。我們提供專業的衛教與追蹤，協助您長期維持成果。'
      },
      {
        question: '一支猛健樂注射筆可以打幾次？可以使用多久？',
        answer: '台灣目前的猛健樂筆針設計為一支筆含有 4 次（4 週）的劑量。您只需要每週固定同一天施打一次，一支筆剛好可以完成一個月的療程。這種設計不僅攜帶方便，也能大幅減少醫療廢棄物。'
      },
      {
        question: '施打猛健樂會痛嗎？',
        answer: '猛健樂使用的是極細的專利針頭，施打於皮下脂肪層（如腹部或大腿），大部分患者僅感覺像被蚊子叮一下，幾乎沒有疼痛感，非常方便操作。'
      }
    ]
  },
 // -----------------------------------------------------
  // 3. 兒童骨齡評估
  // -----------------------------------------------------
  {
    slug: 'bone-age',
    title: '兒童骨齡評估',
    lastModified: '2026-01-31',
    subtitle: '掌握黃金生長發育期',
    description: '透過左手X光片判讀骨骼成熟度，預測成年身高，掌握黃金生長發育期。',
    image: '/images/weight-loss/c.webp',
    features: ['性早熟', '生長遲緩', '想了解身高潛力的兒童'],
    seoTitle: '新竹兒童骨齡推薦 | 宸新復健科診所 - 關節退化與運動傷害治療',
    seoDescription: '新竹照骨齡推薦。鄰近新竹科學園區，靠近竹北，宸新復健科提供免掛號免預約，隨到隨照服務。結合TW3法與AI大數據精準判讀，準確預測兒童成年身高。針對性早熟、生長遲緩提供專業評估與治療建議。',
    keywords: ['新竹照骨齡', '竹北照骨齡', '兒童長高門診', '性早熟檢查', '生長遲緩', '預測身高', '骨齡X光', '新竹小兒內分泌'],
    contentHtml: `
    <style>
  .responsive-img-enlarge { width: 110% !important; max-width: none !important; display: block !important; margin: 1rem auto !important; position: relative !important; left: 50% !important; transform: translateX(-50%) !important; height: auto; }
  @media (min-width: 768px) { .responsive-img-enlarge { width: 100% !important; left: 0 !important; transform: none !important; } }
</style>
       <img src="/images/news/article/boneage/1.webp" alt="兒童長高全攻略懶人包1" class="responsive-img-enlarge">
        <img src="/images/news/article/boneage/2.webp" alt="兒童長高全攻略懶人包2" class="responsive-img-enlarge">
        <img src="/images/news/article/boneage/3.webp" alt="兒童長高全攻略懶人包3" class="responsive-img-enlarge">
        <img src="/images/news/article/boneage/4.webp" alt="兒童長高全攻略懶人包4" class="responsive-img-enlarge">
        <img src="/images/news/article/boneage/5.webp" alt="兒童長高全攻略懶人包5" class="responsive-img-enlarge">
    <p>擔心孩子長不高嗎？想知道是否有<strong>性早熟</strong>或<strong>生長遲緩</strong>的問題？孩子的成長只有一次，錯過了黃金期，可能就再也追不回來了。</p>
    <br>
<p><strong>位於新竹的宸新復健科</strong>，提供<strong>新竹科學園區</strong>與在地民眾專業的<strong>兒童骨齡檢查</strong>服務。我們深知<strong>新竹市區與竹北</strong>家長對於孩子身高的焦慮，因此特別引進了醫學中心等級的評估系統。我們最大的特色是：<strong>不需要漫長等待、流程快速便捷</strong>，且輻射劑量極低，安全無虞。</p>
    <br>
<p>我們結合專業醫師經驗親自判讀與<strong>二代 AI 大數據</strong>，採用最符合亞洲兒童生長曲線的 <strong>TW3 法</strong>進行判讀。經由骨齡及父母身高，能精準預測孩子的成年身高潛力！目前已有破百名兒童參與，並獲得家長高度好評肯定。</p>


<p><img src="/images/weight-loss/boneage/a.webp" alt="兒童照骨齡檢查流程圖"></p>

<div style="background-color: #fffbeb; border: 2px solid #fbbf24; border-radius: 1rem; padding: 1.5rem; margin: 2rem 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
    <h2 style="color: #b45309; margin-top: 0; font-weight: bold; border-bottom: 2px solid #fcd34d; padding-bottom: 0.5rem; display: flex; align-items: center;">
        📢 宸新復健科「骨齡專業評估」服務流程
    </h2>
    
    <p style="font-size: 1.1rem; color: #78350f;">為了節省家長與孩子的寶貴時間，我們優化了看診流程。只需簡單三步驟，就能掌握孩子的生長密碼：</p>
    
    <br>
    
    <ul style="list-style: none; padding: 0; margin: 0; color: #92400e;">
        <li style="margin-bottom: 1.5rem; display: flex; align-items: start;">
            <span style="background: #f59e0b; color: white; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px; flex-shrink: 0; font-weight: bold;">1</span>
            <div>
                <strong style="font-size: 1.2rem; color: #0891b2;">步驟 1：純照骨齡 (費用 $500)</strong>
                <p style="margin-top: 0.5rem;">無需預先掛號，請於門診時間直接至櫃檯告知「要照骨齡」。我們將安排放射師為孩子拍攝左手掌 X 光片，過程僅需數秒鐘，無痛且輻射量極低。拍完即可離院，無需等待。</p>
            </div>
        </li>
        <li style="margin-bottom: 1.5rem; display: flex; align-items: start;">
            <span style="background: #f59e0b; color: white; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px; flex-shrink: 0; font-weight: bold;">2</span>
            <div>
                <strong style="font-size: 1.2rem; color: #0891b2;">步驟 2：獲取判讀報告 (費用 +$500，共$1000)</strong>
                <p style="margin-top: 0.5rem;">醫師將親自判讀 X 光片，結合 AI 大數據分析，產出一份完整的書面報告。報告內容包含：</p>
                <ul style="list-style-type: disc; margin-left: 1.5rem; margin-top: 0.5rem; color: #78350f;">
                    <li><strong>精確骨齡數據：</strong> 採用 TW3 法計分。</li>
                    <li><strong>生長板閉合程度：</strong> 評估剩餘生長空間。</li>
                    <li><strong>未來身高預測：</strong> 依據遺傳與骨齡推算。</li>
                    <li><strong>醫師專業建議：</strong> 飲食、運動與睡眠指導。</li>
                </ul>
                <p style="margin-top: 0.5rem; color: #dc2626; font-weight: bold;">※ 此步驟不需看診，報告完成後將以 Email 寄送給家長。</p>
            </div>
        </li>
        <li style="margin-bottom: 0; display: flex; align-items: start;">
            <span style="background: #f59e0b; color: white; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px; flex-shrink: 0; font-weight: bold;">3</span>
            <div>
                <strong style="font-size: 1.2rem; color: #0891b2;">步驟 3：醫師解說 (費用 +$500，共$1500)</strong>
                <p style="margin-top: 0.5rem;">若您收到報告後有疑問，或是發現孩子有生長遲緩/性早熟的疑慮，可加選此項目。需先持有本院完整報告，於門診時間掛號，由醫師面對面詳細解說報告內容，並擬定後續追蹤或轉診計畫。</p>
            </div>
        </li>
    </ul>
</div>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h3>🦴 為什麼要照骨齡？它能告訴我們什麼？</h3>
<p>骨齡 (Bone Age) 是反映孩子生理發育成熟度最客觀的指標。雖然每個孩子的身分證年齡（日曆年齡）一樣在增加，但骨骼的成熟速度卻可能天差地遠。</p>

<h3>1. 判斷生長潛力 (還有多少長高空間？)</h3>
<p>骨齡與實際年齡的落差是關鍵。如果骨齡比實際年齡<strong>大（超前）</strong>，代表孩子發育較快，雖然現在可能比同學高，但生長板會提早閉合，反而導致成年身高不理想（小時了了，大未必佳）。反之，若骨齡較<strong>小（落後）</strong>，雖然現在矮小，但可能只是「大器晚成」，未來還有追趕的空間。</p>

<h3>2. 檢測性早熟 (Precocious Puberty)</h3>
<p>近年來受環境荷爾蒙與飲食西化影響，性早熟案例激增。如果<strong>女童在 8 歲前乳房發育、男童在 9 歲前睪丸變大</strong>，且骨齡明顯<strong>超前實際年齡 2 歲以上</strong>，就必須高度懷疑是性早熟，需積極介入治療。</p>

<h3>3. 預測成年身高 (Adult Height Prediction)</h3>
<p>這是家長最關心的。透過骨齡，我們可以利用公式推算出孩子未來「大概」能長多高。雖然這只是預測值，但能作為是否需要施打生長激素或調整生活作息的重要參考依據。</p>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h3>🔍 骨齡判讀大解密：GP 法 vs. TW3 法</h3>
<p>在醫學上，判讀骨齡主要有兩大流派。這也是為什麼有些家長會疑惑：「為什麼我在 A 醫院照出來是 10 歲，去 B 診所照卻變成 11 歲？」原因就在於使用的判讀標準不同。</p>

<p><img src="/images/weight-loss/boneage/b.webp" alt="GP法及TW3法骨齡判讀比較"></p>

<h4>1. GP 法 (Greulich-Pyle method)：圖譜比對法</h4>
<ul>
    <li><strong>原理：</strong> 就像「看圖說故事」。醫師拿著一本標準圖譜（類似相簿），將孩子的 X 光片與圖譜上的標準範例進行視覺比對，看哪一張最像，就判定為幾歲。</li>
    <li><strong>優點：</strong> 速度極快（約 1 分鐘），全球通用，適合做大規模的初步快速篩檢。</li>
    <li><strong>缺點：</strong>
        <ul>
            <li><strong>主觀性強：</strong> 非常依賴醫師個人的經驗與主觀判斷，誤差範圍較大。</li>
            <li><strong>種族差異：</strong> GP 法是建立在 1930 年代美國白人兒童的數據上，直接套用在現代亞洲兒童身上，容易有高估或低估的情況。</li>
        </ul>
    </li>
</ul>

<h4>2. TW3 法 (Tanner-Whitehouse 3 method)：計分評估法</h4>
<ul>
    <li><strong>原理：</strong> 這是更為精細的「精準打分制」。醫師需仔細觀察手掌中 13 塊特定骨頭（如橈骨、尺骨、掌骨等）的發育形狀與等級，每一塊骨頭都有獨立的分數，最後將總分加總，對照表格換算出骨齡。</li>
    <li><strong>優點：</strong>
        <ul>
            <li><strong>精準度高：</strong> 減少人為主觀誤差，是目前學術界公認的<strong>黃金標準 (Gold Standard)</strong>。</li>
            <li><strong>適合亞洲人：</strong> 對於亞洲兒童的生長曲線有較好的預測力。</li>
        </ul>
    </li>
    <li><strong>缺點：</strong> 判讀非常耗時（人工判讀需 15-20 分鐘以上），因此一般健保門診較難全面採用。</li>
</ul>

<div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
    <h4 style="margin-top: 0; color: #0e7490;">💡 宸新復健科的選擇：TW3 法 + AI 輔助</h4>
    <p style="margin-bottom: 0; color: #334155;">為了給家長最準確的答案，宸新堅持採用 <strong>TW3 標準</strong>。同時，我們引進了先進的 <strong>AI 骨齡判讀輔助系統</strong>，能快速精準地識別 13 塊骨頭的特徵並評分。這不僅保留了 TW3 法的高精確度，更大幅縮短了等待時間，讓您能快速拿到專業且可信賴的報告。</p>
</div>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h3>📝 家長必看！醫師的兒童長高懶人包</h3>
<p>照完骨齡只是第一步，重點是回家後該怎麼做？林羿辰醫師特別整理了「長高三大法寶」，幫助孩子突破遺傳限制：</p>

<h3>1. 睡眠：生長激素的黃金期</h3>
<p>生長激素的分泌高峰在<strong>夜間 10 點到凌晨 2 點</strong>的深層睡眠期。
<br><strong>✅ 醫師建議：</strong> 孩子最好在晚上 9:30 前上床準備，10 點前熟睡。睡前一小時避免使用手機、平板，藍光會抑制褪黑激素，影響睡眠品質。</p>

<h3>2. 運動：刺激生長板分裂</h3>
<p>垂直律動性的運動最能刺激生長板。
<br><strong>✅ 醫師建議：</strong>
<ul>
    <li><strong>跳繩：</strong> 最簡單有效，建議每天分次跳「年齡 × 100 下」。</li>
    <li><strong>籃球/排球：</strong> 跳躍動作多，有助於拉伸骨骼。</li>
    <li><strong>戶外活動：</strong> 曬太陽能合成維生素 D，幫助鈣質吸收，強化骨骼。</li>
</ul>
</p>

<h3>3. 飲食：遠離甜食炸物</h3>
<p>這點最重要！<strong>「糖分」是生長激素的殺手。</strong> 當血糖升高時，生長激素的分泌就會被抑制長達 2-4 小時。
<br><strong>✅ 醫師建議：</strong>
<ul>
    <li><strong>戒含糖飲料：</strong> 這是長不高的最大元兇。</li>
    <li><strong>少吃油炸：</strong> 炸雞、薯條易導致肥胖與性早熟。</li>
    <li><strong>多吃蛋白質：</strong> 蛋、豆、魚、肉、奶是生長的原料。</li>
    <li><strong>補充鈣質：</strong> 每天兩杯牛奶（或無糖優格、起司）。</li>
</ul>
</p>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<div style="background-color: #ecfdf5; padding: 2rem; border-radius: 1rem; margin-top: 3rem; text-align: center;">
    <h3 style="color: #047857; margin-top: 0;">👨‍⚕️ 把握黃金成長期，現在就來檢測！</h3>
    <p style="color: #334155; margin-bottom: 1.5rem;">孩子的成長不能等，早一點發現問題，就多一分長高的機會。歡迎隨時至新竹宸新復健科櫃檯，告知要進行「骨齡評估」，我們將竭誠為您服務。</p>
    <p style="font-weight: bold; color: #059669;">不需預約，隨到隨照，給孩子一個長高的機會！</p>
</div>
    `,
    whyChooseUs: [
      '<strong>免預約、免掛號</strong>：門診時間來馬上照，省去醫院排隊時間',
      '<strong>精準判讀</strong>：醫師親自使用 TW3 法判讀及二代 AI 輔助，比傳統 GP 法更準確',
      '<strong>彈性收費</strong>：依照需求階段性選擇付費，不強迫推銷'
    ],
    programBenefits: [
      '準確度高，適合早期發現生長遲緩問題',
      '更能反映真實的身高潛力，避免錯過治療黃金期',
      'AI 模板更符合現代亞洲兒童生長曲線'
    ],
    benefitsTitle: '為什麼選擇 TW3 法？',
    benefitsIconClass: 'fa-solid fa-check-circle text-green-500',
    qaList: [
      {
        question: '照骨齡會有輻射影響嗎？',
        answer: '請家長放心。拍攝左手掌骨的X光輻射劑量極低（約 0.001 毫西弗），相當於搭飛機飛行 10 分鐘所接收的背景輻射量，對兒童身體幾乎沒有影響。'
      },
      {
        question: '幾歲適合做骨齡檢查？',
        answer: '一般建議 5 歲以上即可進行評估。若發現孩子身高百分位低於 3%、一年長高不到 4 公分，或是出現性早熟徵兆（如女生胸部發育、男生睪丸變大），應儘早檢查。'
      },
      {
        question: '如果骨齡超前或落後怎麼辦？',
        answer: '骨齡超前可能代表性早熟，雖然現在長得高，但生長板可能提早閉合導致成人身高矮小；骨齡落後則可能與營養或內分泌有關。醫師會根據個別狀況，提供飲食、運動、睡眠或轉介藥物治療的建議。'
      }
    ]
  },
  // -----------------------------------------------------
  // 2. 週纖達 (Ozempic/Wegovy)
  // -----------------------------------------------------
  {
    slug: 'Wegovy',
    title: '週纖達 (Wegovy)',
    lastModified: '2026-01-21',
    subtitle: 'GLP-1 受體促效劑',
    description: '協助控制體重的注射藥物，幫助您減少飢餓感，輕鬆達成減重目標。',
    image: '/images/weight-loss/b.webp',
    features: ['穩定血糖', '減少體脂肪堆積'],
    seoTitle: '新竹週纖達(Wegovy)減重 - 價格/副作用/與善纖達比較 | 宸新復健科',
    seoDescription: '新竹週纖達(Wegovy)瘦瘦針推薦。高CP值的一週一次減重藥物，有效抑制食慾、增加飽足感。適合忙碌上班族、想改善體態與血糖控制者。提供完整衛教與劑量規劃。',
    keywords: ['新竹週纖達', 'Wegovy價格', '新竹瘦瘦針推薦', '善纖達比較', 'GLP-1', '減肥筆', '胰妥讚'],
    contentHtml: `
<p>宸新復健科提供高 CP 值的<strong>週纖達</strong> 減重療程。這是一種長效型 GLP-1 受體促效劑，透過模擬腸道荷爾蒙的作用，能有效<strong>增加飽足感</strong>、<strong>延緩胃部排空</strong>，進而減少熱量攝取。</p>
<br>
<p>週纖達 (Semaglutide) 原本是糖尿病治療的明星藥物，但在臨床應用中發現其卓越的減重效果，迅速風靡全球，成為許多名人與醫師推薦的減重首選。對於預算有限、或追求高性價比的減重族群來說，週纖達是一個非常理想且相對經濟的選擇。</p>

<div style="background-color: #fffbeb; border: 2px solid #fbbf24; border-radius: 1rem; padding: 1.5rem; margin: 2rem 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
    <h2 style="color: #b45309; margin-top: 0; font-weight: bold; border-bottom: 2px solid #fcd34d; padding-bottom: 0.5rem; display: flex; align-items: center;">
        📢 週纖達 (Wegovy) 本月專屬優惠方案
    </h2>
    
    <p style="font-size: 1.1rem; color: #78350f;">宸新復健科提供最透明實惠的價格。週纖達依據劑量與筆型不同，分為兩種主要規格。醫師將依據您的目標體重與身體耐受度，建議最適合您的方案：</p>
    
    <br>
    
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 1.5rem;">
        <div style="background: white; padding: 1rem; border-radius: 0.5rem; border: 1px solid #e5e7eb; text-align: center;">
            <strong style="font-size: 1.25rem; color: #0891b2;">1 mg / 支</strong>
            <p style="margin: 0.5rem 0 0; color: #dc2626; font-weight: bold; font-size: 1.5rem;">$9,000</p>
            <p style="font-size: 0.9rem; color: #6b7280; margin-top: 0.5rem;">(效力約等於猛健樂 5mg)</p>
        </div>
        <div style="background: white; padding: 1rem; border-radius: 0.5rem; border: 1px solid #e5e7eb; text-align: center;">
            <strong style="font-size: 1.25rem; color: #0891b2;">1.7 mg / 支</strong>
            <p style="margin: 0.5rem 0 0; color: #dc2626; font-weight: bold; font-size: 1.5rem;">$12,000</p>
            <p style="font-size: 0.9rem; color: #6b7280; margin-top: 0.5rem;">(效力約等於猛健樂 10mg)</p>
        </div>
    </div>

    <h3 style="color: #92400e; margin-bottom: 1rem;">⚠️ 就診與領藥流程</h3>
    <ul style="list-style: none; padding: 0; margin: 0; color: #92400e;">
        <li style="margin-bottom: 1rem; display: flex; align-items: start;">
            <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">1</span>
            <div><strong>諮詢評估：</strong> 掛號後由醫師一對一諮詢，評估身體狀況是否適合使用週纖達。</div>
        </li>
        <li style="margin-bottom: 1rem; display: flex; align-items: start;">
            <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">2</span>
            <div><strong>費用折抵：</strong> 若當天確認進行療程並購買藥品，原本收取的掛號費將<strong>全額退還</strong>。</div>
        </li>
        <li style="margin-bottom: 0; display: flex; align-items: start;">
            <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">3</span>
            <div><strong>缺貨配套：</strong> 由於全球缺貨狀況頻繁，若遇缺貨，我們會協助預約到貨時間，或建議替代方案（如更換為猛健樂），確保治療不中斷。</div>
        </li>
    </ul>
</div>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
<h3>⚖️ 該選誰？週纖達 ( vs. 猛健樂 (Mounjaro) 超級比一比</h3>
<p>這兩款都是目前市面上最強大的減重針劑，但機轉與定位略有不同。透過下方的比較圖，您可以更清楚了解它們的優缺點，從而做出最適合自己的選擇。</p>

<p><img src="/images/weight-loss/ozempic/a.webp" alt="週纖達與猛健樂、善纖達比較圖"></p>

<h3>1. 具備心血管保護功能 (適合銀髮族)</h3>
<p><strong>週纖達</strong> 在大型臨床試驗中證實具有<strong>心血管保護效果</strong>，並已獲得美國 FDA 核准用於降低第二型糖尿病患者的心血管重大事件風險（如中風、心肌梗塞）。對於<strong>年長者</strong>或本身有<strong>心血管病史</strong>的減重族群來說，選擇週纖達能提供額外的健康保障，安全性數據也較為長期完整。</p>

<h3>2. 核准用於青少年減重 (12歲以上)</h3>
<p>週纖達的成份 已通過美國 FDA 核准，可用於治療 <strong>12 歲以上</strong> 且 BMI 超標的青少年肥胖患者。這意味著它在發育中族群的安全性已獲得權威認證，能有效協助青少年控制體重，是目前未成年病患進行醫療減重的首選藥物。</p>

<h3>3. 機制原理不同</h3>
<ul>
    <li><strong>週纖達：</strong> 單效 GLP-1 受體促效劑。專注於<strong>抑制食慾</strong>與<strong>延緩胃排空</strong>，讓您不想吃、吃不多。</li>
    <li><strong>猛健樂：</strong> 雙效 GIP/GLP-1 受體促效劑。除了抑制食慾，還多了 GIP 機制來<strong>提升脂肪代謝</strong>與燃脂效率。</li>
</ul>

<h3>4. 減重效果比較</h3>
<p>根據臨床研究數據，猛健樂的減重幅度（約 20.9%）確實略高於週纖達（約 15%~17%）。但對於大多數只需要減去 5~10 公斤的人來說，<strong>週纖達的效果已經非常足夠且顯著</strong>。</p>

<h3>5. 價格與 CP 值</h3>
<p>這是週纖達最大的優勢。相較於猛健樂較高昂的費用，週纖達提供了相對親民的價格，讓更多人能夠負擔得起長期療程，是目前公認<strong>性價比 (CP值) 最高</strong>的選擇。</p>
<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h3>📊 獨家收錄！猛健樂與週纖達「劑量對照表」</h3>
<p>許多患者會在兩者之間轉換，或是想了解藥效強度的差異。醫師根據臨床經驗與藥物動力學，整理了這份簡單的對照表供您參考：</p>

<div style="overflow-x: auto;">
  <table style="width: 100%; border-collapse: collapse; margin: 1.5rem 0; font-size: 1rem;">
    <thead>
      <tr style="background-color: #0e7490; color: white;">
        <th style="padding: 12px; border: 1px solid #cbd5e1; text-align: center;">週纖達 (Wegovy) 劑量</th>
        <th style="padding: 12px; border: 1px solid #cbd5e1; text-align: center;">約等於</th>
        <th style="padding: 12px; border: 1px solid #cbd5e1; text-align: center;">猛健樂 (Mounjaro) 劑量</th>
        <th style="padding: 12px; border: 1px solid #cbd5e1; text-align: left;">備註說明</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background-color: #f0f9ff;">
        <td style="padding: 12px; border: 1px solid #cbd5e1; text-align: center; font-weight: bold; color: #0369a1;">0.25 mg / 0.5 mg</td>
        <td style="padding: 12px; border: 1px solid #cbd5e1; text-align: center; font-weight: bold; color: #0369a1;">≈</td>
        <td style="padding: 12px; border: 1px solid #cbd5e1; text-align: center; font-weight: bold; color: #b45309;">2.5 mg</td>
        <td style="padding: 12px; border: 1px solid #cbd5e1; font-weight: bold; color: #b45309">起始適應期，主要讓身體習慣藥物，副作用較低。</td>
      </tr>
      <tr>
      <tr style="background-color: #f0f9ff;">
        <td style="padding: 12px; border: 1px solid #cbd5e1; text-align: center; font-weight: bold; color: #0369a1;">1.0 mg</td>
        <td style="padding: 12px; border: 1px solid #cbd5e1; text-align: center; font-weight: bold; color: #0369a1;">≈</td>
        <td style="padding: 12px; border: 1px solid #cbd5e1; text-align: center; font-weight: bold; color: #b45309;">5.0 mg</td>
        <td style="padding: 12px; border: 1px solid #cbd5e1; font-weight: bold; color: #b45309">標準治療劑量，減重效果開始顯著。</td>
      </tr>
      <tr style="background-color: #f0f9ff;">
        <td style="padding: 12px; border: 1px solid #cbd5e1; text-align: center; font-weight: bold; color: #0369a1;">1.7 mg / 2.0 mg</td>
        <td style="padding: 12px; border: 1px solid #cbd5e1; text-align: center; font-weight: bold; color: #0369a1; ">≈</td>
        <td style="padding: 12px; border: 1px solid #cbd5e1; text-align: center; font-weight: bold; color: #b45309;">7.5 mg ~ 10 mg</td>
        <td style="padding: 12px; border: 1px solid #cbd5e1; font-weight: bold; color: #b45309">高劑量期，針對體重停滯或需要加強效果者。</td>
      </tr>
    </tbody>
  </table>
</div>
<p style="font-size: 0.9rem; color: #64748b;">*註：此對照表僅供參考，實際轉換劑量需由醫師依據個體耐受度與副作用反應進行調整。</p>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h3>📝 週纖達使用中的懶人包：副作用與應對</h3>
<p>週纖達的使用方式與猛健樂非常相似，同樣是每週施打一次。為了讓您的減重旅程更順暢，以下幾點請務必留意：</p>

<h3>1. 施打部位與頻率</h3>
<ul>
    <li><strong>頻率：</strong> 每週固定一天施打（例如每週一早上），這週打完，下週同一時間再打。</li>
    <li><strong>部位：</strong> 建議施打在皮下脂肪豐富處，如腹部（避開肚臍周圍）、大腿前外側或上臂外側。每週請<strong>輪替部位</strong>，不要一直打同一個點。</li>
</ul>

<h3>2. 劑量調整原則 (Titration)</h3>
<p>週纖達的筆針設計非常人性化，可以精準旋轉刻度調整劑量。我們通常遵循以下原則：</p>
<ul>
    <li><strong>第 1-4 週：</strong> 使用 0.25 mg。這是為了讓腸胃道適應，減少噁心感。</li>
    <li><strong>第 5-8 週：</strong> 若適應良好，調整至 0.5 mg。</li>
    <li><strong>穩定期：</strong> 視減重效果，可維持在 0.5 mg 或調整至 1.0 mg。</li>
    <li><strong>重要提醒：</strong> 只要目前的劑量能讓您感到不餓且體重有下降，就<strong>不需要</strong>急著往上加劑量。用最少的藥量達到效果，才是最聰明的做法。</li>
</ul>

<h3>3. 常見副作用與緩解</h3>
<p>最常見的副作用是噁心、嘔吐、腹脹或便秘。這些通常發生在剛開始施打或剛增加劑量時，幾週後身體適應了就會改善。緩解小撇步：</p>
<ul>
    <li><strong>少量多餐：</strong> 不要一次吃太飽。</li>
    <li><strong>細嚼慢嚥：</strong> 給大腦時間接收飽足訊號。</li>
    <li><strong>避免油膩：</strong> 炸物、肥肉容易加重噁心感。</li>
    <li><strong>多喝水：</strong> 每天至少 2000cc，預防便秘。</li>
</ul>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h3>💡 醫師的真心話：為什麼週纖達值得一試？</h3>
<p>在門診中，我常遇到病患問：「醫師，我是不是一定要打最新的猛健樂才有效？」其實不然。<strong>藥物沒有最好的，只有最適合您的。</strong></p>
<p>週纖達上市時間較久，擁有更長期的安全性數據，且價格相對親民。對於第一次嘗試醫學減重、或是體重超標幅度沒有那麼巨大（例如 BMI 27~32）的朋友來說，週纖達往往就能帶來令人非常滿意的改變。它就像一位穩定可靠的夥伴，默默地幫助您控制食慾，找回輕盈的自己。</p>

<div style="background-color: #f0f9ff; padding: 2rem; border-radius: 1rem; margin-top: 3rem; text-align: center;">
    <h3 style="color: #0369a1; margin-top: 0;">👨‍⚕️ 還在猶豫該選哪一種？</h3>
    <p style="color: #334155; margin-bottom: 1.5rem;">別擔心，選擇困難症交給專業醫師來解決！歡迎來到新竹宸新復健科，醫師會根據您的預算、身體狀況與減重目標，為您分析最適合的藥物方案。</p>
    <p style="font-weight: bold; color: #0891b2;">現在就預約諮詢，開啟您的健康減重之旅！</p>
</div>
    `,
    whyChooseUs: [
      '詳細問診及衛教施打，確保劑量正確',
      '甲狀腺超音波檢查及抽血檢查',
      '療程含高階 InBody 及運動課程'
    ],
    programBenefits: [
      '一週一次好簡單，不用每天挨針',
      'CP值高，小資族也能負擔',
      '有效控制三高及脂肪肝，提供心臟保護'
    ],
    qaList: [
      {
        question: '週纖達跟猛健樂有什麼不一樣？',
        answer: '兩者都是腸泌素藥物。週纖達是單重機轉 (GLP-1)，上市時間較久，安全性資料多且CP值高；猛健樂是雙重機轉 (GIP/GLP-1)，減重效果通常更顯著，適合體重基數較大者。醫師會依您的狀況建議適合的藥物。'
      },
      {
        question: '我有糖尿病可以使用嗎？',
        answer: '可以的。週纖達本身即為治療第二型糖尿病的藥物，能有效穩定血糖。但若您已在使用其他降血糖藥物，請務必告知醫師，以免發生低血糖風險。'
      },
      {
        question: '一支週纖達注射筆可以打幾次？可以使用多久？',
        answer: '台灣目前的週纖達筆針設計為一支筆含有 4 次（4 週）的劑量。您只需要每週固定同一天施打一次，一支筆剛好可以完成一個月的療程。這種設計不僅攜帶方便，也能大幅減少醫療廢棄物。'
      },
      {
        question: '需要每天打針嗎？',
        answer: '不需要。週纖達是長效型藥物，一週只需要皮下注射一次，非常方便，不用擔心每天忘記吃藥的問題。'
      }
    ]
  }

 
];

// =======================================================
// 3. 自動化瘦身區 (Sitemap 與列表頁專用)
// =======================================================
// 自動過濾掉 contentHtml 與詳細內容，產生輕量列表
// 這樣 sitemap.ts 導入 weightLossPrograms 時就不會載入過重的資料

export const weightLossPrograms: WeightLossMetadata[] = fullWeightLossData.map((item) => {
  // 使用解構賦值，把詳細資料分離出來，只回傳 metadata
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    contentHtml,
    whyChooseUs,
    programBenefits,
    images,
    qrCode,
    benefitsTitle,
    benefitsIconClass,
    qaList,
    ...metadata
  } = item;
  return metadata;
});

// =======================================================
// 4. Helper Functions
// =======================================================

// 取得單一減重項目 (內頁用，從完整資料庫找)
export function getWeightLossProgramBySlug(slug: string): WeightLossProgram | undefined {
  return fullWeightLossData.find((program) => program.slug === slug);
}

// 取得所有減重項目 (列表頁或 Sitemap 用，只回傳輕量資料)
export function getAllWeightLossPrograms() {
  return weightLossPrograms;
}

// 取得所有 Slug (Sitemap 專用)
export function getAllWeightLossProgramSlugs() {
  return weightLossPrograms.map((program) => ({
    slug: program.slug,
  }));
}