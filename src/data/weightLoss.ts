// src/data/weightLoss.ts

// 1. 定義資料結構
export interface WeightLossProgram {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string
  contentHtml?: string;
  features?: string[];
  whyChooseUs?: string[];
  programBenefits?: string[];
  images?: { src: string; alt: string }[];
  qrCode?: string;
  benefitsTitle?: string;
  benefitsIconClass?: string;
  qaList?: { question: string; answer: string }[];

  // ✨ 新增 SEO 專用欄位
  seoTitle?: string;        // 瀏覽器標題
  seoDescription?: string;  // 搜尋結果摘要
  keywords?: string[];      // 關鍵字標籤
}

export const weightLossPrograms: WeightLossProgram[] = [
  // =======================================================
  // 1. 猛健樂 (Mounjaro) - 關鍵字：新竹減重、瘦瘦針價格、雙重腸泌素
  // =======================================================
  {
    slug: 'mounjaro',
    title: '猛健樂 (Mounjaro)',
    subtitle: '新一代雙重腸泌素受體促效劑',
    description: '新一代雙重腸泌素(GIP/GLP-1)受體促效劑，提供更卓越的體重控制效果。',
    // ✨ 新增圖片：醫師諮詢/藥物示意
    image: '/images/weight-loss/a.jpg',
    features: ['一週一次', '抑制食慾', '延緩胃排空'],
    
    // ✨ SEO 強力優化
    seoTitle: '新竹猛健樂(Mounjaro)減重門診 - 價格/效果/副作用 | 宸新復健科',
    seoDescription: '新竹猛健樂(Mounjaro)瘦瘦針推薦。新一代雙重腸泌素(GIP/GLP-1)，減重效果優於傳統善纖達。林羿辰醫師親自規劃療程，含InBody檢測與飲食指導，有效改善肥胖、脂肪肝與三高問題。',
    keywords: ['新竹猛健樂', 'Mounjaro價格', '新竹瘦瘦針', '新竹減重門診', '雙重腸泌素', '減肥針推薦', '胰島素阻抗'],

    contentHtml: `
<p>宸新復健科提供完整的新竹<strong>猛健樂 (Mounjaro)</strong> 減重療程。這是目前最新的雙重腸泌素 (GIP/GLP-1) 受體促效劑，能同時活化 GIP 與 GLP-1 兩種受體。</p>

<p>隨著醫學科技的進步，減重已不再單純依靠意志力。繼第一代 GLP-1 藥物（俗稱瘦瘦針）之後，全球醫學界迎來了更具突破性的「雙重腸泌素」——Tirzepatide（商品名：Mounjaro 猛健樂/芒杰羅）。它不僅延續了抑制食慾的效果，更加入了 GIP 機制來提升代謝與燃脂效率。本院特別整理了本月專屬優惠與完整的衛教資訊，幫助您安全、有效地找回健康的體態。</p>

<div style="background-color: #fffbeb; border: 2px solid #fbbf24; border-radius: 1rem; padding: 1.5rem; margin: 2rem 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
    <h2 style="color: #b45309; margin-top: 0; font-weight: bold; border-bottom: 2px solid #fcd34d; padding-bottom: 0.5rem; display: flex; align-items: center;">
        📢 猛健樂 (Mounjaro) 本月前 100 名限定優惠
    </h2>
    
    <p style="font-size: 1.1rem; color: #78350f;">宸新復健科為回饋鄉親，本月特別推出<strong>前 100 名</strong>專屬優惠方案。猛健樂依據劑量濃度不同，分為四種規格，醫師將依據您的減重進程調整劑量：</p>
    
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 1.5rem;">
        <div style="background: white; padding: 1rem; border-radius: 0.5rem; border: 1px solid #e5e7eb; text-align: center;">
            <strong style="font-size: 1.25rem; color: #0891b2;">2.5 mg</strong>
            <p style="margin: 0.5rem 0 0; color: #dc2626; font-weight: bold; font-size: 1.5rem;">$10,500</p>
        </div>
        <div style="background: white; padding: 1rem; border-radius: 0.5rem; border: 1px solid #e5e7eb; text-align: center;">
            <strong style="font-size: 1.25rem; color: #0891b2;">5 mg</strong>
            <p style="margin: 0.5rem 0 0; color: #dc2626; font-weight: bold; font-size: 1.5rem;">$11,500</p>
        </div>
        <div style="background: white; padding: 1rem; border-radius: 0.5rem; border: 1px solid #e5e7eb; text-align: center;">
            <strong style="font-size: 1.25rem; color: #0891b2;">7.5 mg</strong>
            <p style="margin: 0.5rem 0 0; color: #dc2626; font-weight: bold; font-size: 1.5rem;">$13,000</p>
        </div>
        <div style="background: white; padding: 1rem; border-radius: 0.5rem; border: 1px solid #e5e7eb; text-align: center;">
            <strong style="font-size: 1.25rem; color: #0891b2;">10 mg</strong>
            <p style="margin: 0.5rem 0 0; color: #dc2626; font-weight: bold; font-size: 1.5rem;">$15,000</p>
        </div>
    </div>

    <h3 style="color: #92400e; margin-bottom: 1rem;">⚠️ 就診注意事項與流程</h3>
    <ul style="list-style: none; padding: 0; margin: 0;">
        <li style="margin-bottom: 1rem; display: flex; align-items: start;">
            <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">1</span>
            <div><strong>主動告知需求：</strong>掛號時請直接跟櫃台人員說明「要諮詢猛健樂」，我們會為您安排提前進診間評估，節省您的寶貴時間。</div>
        </li>
        <li style="margin-bottom: 1rem; display: flex; align-items: start;">
            <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">2</span>
            <div><strong>攜帶健保卡：</strong>當天請務必攜帶健保卡及掛號費。若經醫師評估後確定進行療程並現場購買藥品，原本收取的<strong>掛號費將全額退還</strong>。</div>
        </li>
        <li style="margin-bottom: 1rem; display: flex; align-items: start;">
            <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">3</span>
            <div><strong>缺貨處理機制：</strong>由於猛健樂相當熱門，現場偶爾會有缺貨狀況。若當日無藥，我們會協助預約藥品到貨時間，屆時您再來領藥，並由專業護理人員進行施打教學。</div>
        </li>
        <li style="margin-bottom: 0; display: flex; align-items: start;">
            <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">4</span>
            <div><strong>全球供貨不穩對策：</strong>若付款後因全球性缺貨導致等待過久，本院提供<strong>全額退款</strong>服務，或者經醫師評估後，可協助您更換為成效類似的週達 (Weekly) 劑型藥物，確保減重計畫不中斷。</div>
        </li>
    </ul>
</div>

<p><img src="/images/weight-loss/mounjaro/a.jpg" alt="猛健樂本月優惠與注意事項"></p>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h2>🏆 為什麼選擇猛健樂？解析 5 大核心特點</h2>
<p>猛健樂 (Mounjaro) 之所以被稱為減重界的「遊戲規則改變者」，是因為它突破了傳統單一機制的限制。根據最新的臨床研究數據，它擁有以下五大不可忽視的優勢：</p>

<h3>1. 雙效腸泌素的代謝調節 (GIP/GLP-1)</h3>
<p>傳統的減重針（如善纖達、胰妥讚）僅含有 GLP-1。而猛健樂是首款<strong>同時活化 GIP 與 GLP-1</strong> 的藥物。這種雙效機制能協同運作：</p>
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

<p><img src="/images/weight-loss/mounjaro/b.jpg" alt="猛健樂雙重腸泌素特點說明"></p>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h2>🎯 誰適合施打猛健樂？四大族群自我檢測</h2>
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

<p><img src="/images/weight-loss/mounjaro/c.jpg" alt="猛健樂適合施打對象"></p>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h2>📝 猛健樂使用中的懶人包：醫師教你怎麼瘦得健康</h2>
<p>開始施打猛健樂後，為了達到最佳效果並避免副作用，林羿辰醫師特別整理了這份「使用中懶人包」，請務必配合以下五點執行：</p>

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

<p><img src="/images/weight-loss/mounjaro/d.jpg" alt="新竹猛健樂懶人包"></p>

<div style="background-color: #f0f9ff; padding: 2rem; border-radius: 1rem; margin-top: 3rem; text-align: center;">
    <h3 style="color: #0369a1; margin-top: 0;">👨‍⚕️ 想了解您是否適合猛健樂療程？</h3>
    <p style="color: #334155; margin-bottom: 1.5rem;">歡迎來到新竹宸新復健科，由林羿辰院長親自為您評估。我們提供一對一的諮詢，結合 InBody 檢測，為您量身打造最安全、有效的減重計畫。</p>
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
    images: [
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
        question: '施打猛健樂會痛嗎？',
        answer: '猛健樂使用的是極細的專利針頭，施打於皮下脂肪層（如腹部或大腿），大部分患者僅感覺像被蚊子叮一下，幾乎沒有疼痛感，非常方便操作。'
      }
    ]
  },

  // =======================================================
  // 2. 週纖達 (Ozempic) - 關鍵字：Ozempic價格、善纖達比較、一週一次
  // =======================================================
  {
    slug: 'ozempic',
    title: '週纖達 (Ozempic)',
    subtitle: 'GLP-1 受體促效劑',
    description: '協助控制體重的注射藥物，幫助您減少飢餓感，輕鬆達成減重目標。',
    image: '/images/weight-loss/b.jpg',
    features: ['穩定血糖', '減少體脂肪堆積'],
    
    // ✨ SEO 強力優化
    seoTitle: '新竹週纖達(Ozempic)減重 - 價格/副作用/與善纖達比較 | 宸新復健科',
    seoDescription: '新竹週纖達(Ozempic)瘦瘦針推薦。高CP值的一週一次減重藥物，有效抑制食慾、增加飽足感。適合忙碌上班族、想改善體態與血糖控制者。提供完整衛教與劑量規劃。',
    keywords: ['新竹週纖達', 'Ozempic價格', '新竹瘦瘦針推薦', '善纖達比較', 'GLP-1', '減肥筆', '胰妥讚'],

    contentHtml: `
      <p>宸新復健科提供高CP值的<strong>週纖達 (Ozempic)</strong> 減重療程。這是一種長效型 GLP-1 受體促效劑，透過模擬腸道荷爾蒙的作用，能有效<strong>增加飽足感</strong>、<strong>延緩胃部排空</strong>，進而減少熱量攝取。</p>
      
      <p>週纖達原本用於糖尿病治療，後來發現具有顯著的減重效果。對於預算有限、或追求高性價比的減重族群來說，是一個非常理想的選擇。</p>

      <div class="my-6 p-4 bg-slate-800/50 border-l-4 border-cyan-500 rounded-r-lg">
        <h4 class="text-white font-bold mb-2">宸新復健科週纖達價格方案：</h4>
        <ul class="space-y-2 text-slate-300">
           <li><span class="text-cyan-400 font-bold">✨ 1mg：</span>$9,000 <span class="text-sm text-slate-500">(約等於猛健樂 5mg 效力)</span></li>
           <li><span class="text-cyan-400 font-bold">✨ 1.7mg：</span>$12,000 <span class="text-sm text-slate-500">(約等於猛健樂 10mg 效力)</span></li>
        </ul>
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
    images: [
      { src: '/images/weight-loss/ozempic/a.jpg', alt: '週纖達與猛健樂、善纖達比較圖' }
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
        question: '需要每天打針嗎？',
        answer: '不需要。週纖達是長效型藥物，一週只需要皮下注射一次，非常方便，不用擔心每天忘記吃藥的問題。'
      }
    ]
  },

  // =======================================================
  // 3. 兒童骨齡評估 - 關鍵字：新竹照骨齡、性早熟檢查、長高門診
  // =======================================================
  {
    slug: 'bone-age',
    title: '兒童骨齡評估',
    subtitle: '掌握黃金生長發育期',
    description: '透過左手X光片判讀骨骼成熟度，預測成年身高，掌握黃金生長發育期。',
    // ✨ 新增圖片：兒童測量身高
    image: '/images/weight-loss/c.jpg',
    features: ['性早熟', '生長遲緩', '想了解身高潛力的兒童'],
    
    // ✨ SEO 強力優化
    seoTitle: '新竹兒童骨齡檢查 - 性早熟/長高門診/身高預測 | 宸新復健科',
    seoDescription: '新竹照骨齡推薦。免掛號免預約，隨到隨照。結合TW3法與AI大數據精準判讀，準確預測兒童成年身高。針對性早熟、生長遲緩提供專業評估與治療建議，把握孩子黃金轉骨期。',
    keywords: ['新竹照骨齡', '兒童長高門診', '性早熟檢查', '生長遲緩', '預測身高', '骨齡X光', '新竹小兒內分泌'],

    contentHtml: `
      <p>擔心孩子長不高嗎？想知道是否有<strong>性早熟</strong>或<strong>生長遲緩</strong>的問題？</p>
      
      <p>新竹宸新復健科提供專業的<strong>兒童骨齡檢查</strong>服務。我們最大的特色是：<strong>不需要預約、不需要掛號、不需要漫長等待</strong>，僅需一秒鐘拍攝左手 X 光片，且輻射劑量極低，安全無虞。</p>

      <p>我們結合專業醫師經驗與<strong>二代 AI 大數據</strong>，採用最符合亞洲兒童生長曲線的 <strong>TW3 法</strong>進行判讀。經由骨齡及父母身高，能精準預測孩子的成年身高潛力！目前已有破百名兒童參與，並獲得家長高度好評肯定。</p>
      
      <p class="font-bold text-cyan-400 mt-4">立即行動，掌握孩子的黃金成長期！</p>
    `,
    whyChooseUs: [
      '<strong>免預約、免掛號</strong>：門診時間來馬上照，省去醫院排隊時間',
      '<strong>精準判讀</strong>：使用 TW3 法判讀及二代 AI 輔助，比傳統 GP 法更準確',
      '<strong>彈性收費</strong>：依照需求階段性選擇付費，不強迫推銷'
    ],
    programBenefits: [
      '準確度高，適合早期發現生長遲緩問題',
      '更能反映真實的身高潛力，避免錯過治療黃金期',
      'AI 模板更符合現代亞洲兒童生長曲線'
    ],
    benefitsTitle: '為什麼選擇 TW3 法？',
    benefitsIconClass: 'fa-solid fa-check-circle text-green-500',
    images: [
      { src: '/images/weight-loss/boneage/a.jpg', alt: '兒童照骨齡檢查流程圖' },
      { src: '/images/weight-loss/boneage/b.jpg', alt: 'GP法及TW3法骨齡判讀比較' }
    ],
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
  }
];

export function getWeightLossProgramBySlug(slug: string) {
  return weightLossPrograms.find((program) => program.slug === slug);
}

export function getAllWeightLossProgramSlugs() {
  return weightLossPrograms.map((program) => ({
    slug: program.slug,
  }));
}