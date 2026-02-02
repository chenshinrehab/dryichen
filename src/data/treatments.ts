// src/data/treatments.ts

// =======================================================
// 1. 定義介面
// =======================================================

// 輕量級 Metadata (給 Sitemap 和 治療項目列表頁用)
export interface TreatmentMetadata {
  slug: string;
  title: string;
  subtitle?: string;    
  description: string;  
  image: string;        
  features: string[];   
  applicableConditions: string[];
  lastModified?: string;
  tags?: string[];
  // SEO 欄位
  seoTitle?: string;
  seoDescription?: string;
  keywords?: string[];
}

// 完整資料介面 (包含內文 HTML 與詳細列表)
export interface Treatment extends TreatmentMetadata {
  contentHtml: string;
  whyChooseUs: string[];
  treatmentFocus: string[];
  images: { src: string; alt: string }[];
  applicableConditions: string[];
  youtubeVideoId?: string;
  qaList?: { question: string; answer: string }[];
}

interface YoutubeEmbedProps {
  videoId: string;
  title: string;
}
// =======================================================
// 2. 完整資料來源 (Source of Truth)
// ⚠️ 所有資料都在這裡維護，程式會自動產生 Sitemap 用的列表
// =======================================================
const fullTreatmentsData: Treatment[] = [
  // -----------------------------------------------------
  // 1. 增生療法 / PRP
  // -----------------------------------------------------
  {
    slug: 'prp',
    title: '增生療法 / PRP',
    lastModified: '2026-01-31',
    tags: ['PRP'],
    subtitle: '超音波導引高濃度血小板注射',
    description: '透過注射高濃度血小板血漿 (PRP) 或高濃度葡萄糖，精準修復受損關節與韌帶。',
    image: '/images/treatments/a.webp',
    features: ['啟動修復', '免開刀', '精準導引'],
    seoTitle: '新竹 PRP 增生療法推薦 | 宸新復健科診所 - 關節退化與運動傷害治療',
    seoDescription: '新竹PRP增生療法首選。位於鄰近新竹科學園區近竹北，醫師親自執行高解析超音波導引注射，將高濃度血小板精準送達病灶。免開刀治療退化性關節炎、半月軟骨受損與韌帶撕裂。',
    keywords: ['新竹PRP', '新竹增生療法', '竹北PRP', '超音波導引注射', '膝蓋退化免開刀', '旋轉肌破裂', '足底筋膜炎', '高濃度葡萄糖', '新竹骨科推薦'],
    
    contentHtml: `
<p>疼痛總是如影隨形，讓你無法享受生活？傳統的消炎藥或類固醇雖然能暫時止痛，卻無法修復受損的組織。<strong>位於新竹的宸新復健科</strong>，專為<strong>新竹科學園區</strong>與在地民眾提供<strong>高濃度血小板血漿 (PRP) 增生療法</strong>及<strong>高濃度葡萄糖水</strong>，這是一種啟動人體自我修復機制的先進治療。</p>
<br>
<p>透過抽取自身血液，離心萃取出富含生長因子的血小板，再經由<strong>高解析超音波精準導引</strong>注射至受傷部位。就像是為受損的肌腱、韌帶或關節打入一劑強效的「修復工程隊」，從根本解決疼痛問題，讓您重習活動力。</p>

<div style="background-color: #fffbeb; border: 2px solid #fbbf24; border-radius: 1rem; padding: 1.5rem; margin: 2rem 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
    <h2 style="color: #b45309; margin-top: 0; font-weight: bold; border-bottom: 2px solid #fcd34d; padding-bottom: 0.5rem; display: flex; align-items: center;">
        📢 為什麼選擇宸新 PRP 增生療法？
    </h2>
    <p style="font-size: 1.1rem; color: #78350f;">許多人打過 PRP 覺得沒效，很大的原因是「沒打對位置」或「濃度不夠」。宸新復健科提供<strong>竹北與新竹市區民眾</strong>最高規格的治療標準：</p>
    
    <ul style="list-style: none; padding: 0; margin-top: 1rem; color: #92400e;">
        <li style="margin-bottom: 1rem; display: flex; align-items: start;">
            <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">1</span>
            <div><strong>醫學中心級超音波導引：</strong> 我們不靠「手感」盲打。每一針都透過高解析度超音波即時顯像，避開神經血管，精準將 PRP 送達受損組織深處。</div>
        </li>
        <li style="margin-bottom: 1rem; display: flex; align-items: start;">
            <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">2</span>
            <div><strong>高濃度萃取技術：</strong> 採用專利離心管與標準化流程，確保萃取出的血小板濃度達到修復所需的黃金標準（約血液濃度的 5 倍以上）。</div>
        </li>
        <li style="margin-bottom: 1rem; display: flex; align-items: start;">
            <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">3</span>
            <div><strong>複合式治療策略：</strong> 醫師會視情況搭配葡萄糖水增生療法、<a href="/treatments/nerve-hydrodissection" style="color: #d97706; text-decoration: underline;">神經解套注射</a>或 <a href="/treatments/shockwave" style="color: #d97706; text-decoration: underline;">聚焦式震波治療</a>，特別針對<strong>長期使用電腦的竹科工程師</strong>或運動愛好者，達到 1+1>2 的修復效果。</div>
        </li>
        <li style="margin-bottom: 0; display: flex; align-items: start;">
            <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">4</span>
            <div><strong>收費標準：</strong>高濃度葡萄糖：<strong>1200元</strong>。高濃度血小板(PRP)：<strong>15000元</strong>。</div>
        </li>
    </ul>
</div>

<div class="my-8 flex justify-center">
    <iframe 
      width="315" 
      height="560" 
      src="https://www.youtube.com/embed/A-keqKDu7bQ" 
      srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}img{height:100%;object-fit:cover}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/A-keqKDu7bQ?autoplay=1><img src=https://i.ytimg.com/vi/A-keqKDu7bQ/frame0.jpg alt='宸新復健科 PRP 治療說明'><span>▶</span></a>" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen
      class="max-w-full rounded-xl shadow-lg border border-slate-700"
      loading="lazy"
    ></iframe>
</div>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h3>🔬 什麼是 PRP？治療原理大解密</h3>
<p>PRP 全名為 <strong>Platelet-Rich Plasma</strong>，意指「富含血小板的血漿」。大家熟知的血小板功能是止血，但其實它還富含多種<strong>生長因子</strong>，如 PDGF、TGF-β、VEGF 等。</p>
<br>
<p>當組織受傷時，身體會啟動修復機制，但隨著年齡增長或反覆受傷，這個機制會變慢甚至停滯。PRP 治療就像是按下「快轉鍵」，直接將高濃度的生長因子注入受傷部位。</p>

<p><img src="/images/treatments/prp/principle.webp" alt="PRP高濃度血小板治療原理說明" width="602" height="806" loading="lazy" decoding="async" style="width:100%; height:auto; border-radius:1rem;"></p>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h3>🎯 誰適合打 PRP？適應症列表</h3>
<ul>
    <li><strong>退化性關節炎：</strong> 膝蓋、髖部、肩膀退化。</li>
    <li><strong>肌腱與韌帶撕裂傷：</strong> 旋轉肌袖撕裂、十字韌帶損傷。</li>
    <li><strong>慢性肌腱炎：</strong> 網球肘、高爾夫球肘、足底筋膜炎。</li>
</ul>

<p><img src="/images/treatments/prp/c.webp" alt="PRP高濃度血小板治療適應症列表" width="602" height="806" loading="lazy" decoding="async" style="width:100%; height:auto; border-radius:1rem;"></p>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h3>💉 超音波導引：精準醫療的靈魂</h3>
<p>在宸新復健科，我們堅持<strong>「眼見為憑」</strong>。醫師能將針頭精準引導至病灶核心，大幅提升治療成功率並減少疼痛。</p>

<p><img src="/images/treatments/prp/d.webp" alt="PRP高濃度血小板超音波導引注射示意圖" width="602" height="806" loading="lazy" decoding="async" style="width:100%; height:auto; border-radius:1rem;"></p>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h3>🏥 治療流程：四步驟重啟修復力</h3>
<ol>
    <li><strong>血液抽取：</strong> 抽取約 10~20cc 的血液。</li>
    <li><strong>離心濃縮：</strong> 透過物理離心力萃取出高濃度的血小板。</li>
    <li><strong>精準注射：</strong> 在超音波導引下注入 PRP。</li>
    <li><strong>衛教與修復：</strong> 聆聽衛教後即可返家。</li>
</ol>

<p><img src="/images/treatments/prp/a.webp" alt="PRP高濃度血小板注射標準流程圖" width="602" height="806" loading="lazy" decoding="async" style="width:100%; height:auto; border-radius:1rem;"></p>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h3>⚖️ 治療比較：PRP vs. 葡萄糖水 vs. 類固醇</h3>
<h4>1. PRP vs. 高濃度葡萄糖水</h4>
<p><img src="/images/treatments/prp/e.webp" alt="PRP高濃度血小板與高濃度葡萄糖比較表" width="602" height="328" loading="lazy" decoding="async" style="width:100%; height:auto; border-radius:1rem;"></p>

<h4>2. 增生療法 vs. 類固醇 (消炎針)</h4>
<p><img src="/images/treatments/prp/f.webp" alt="增生注射與類固醇治療差異比較" width="602" height="328" loading="lazy" decoding="async" style="width:100%; height:auto; border-radius:1rem;"></p>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h3>📝 術後照顧懶人包</h3>
<p><img src="/images/treatments/prp/b.webp" alt="PRP高濃度血小板注射後注意事項與衛教" width="602" height="806" loading="lazy" decoding="async" style="width:100%; height:auto; border-radius:1rem;"></p>

<div style="background-color: #f0f9ff; padding: 2rem; border-radius: 1rem; margin-top: 3rem; text-align: center;">
    <h3 style="color: #0369a1; margin-top: 0;">👨‍⚕️ 還在忍受慢性疼痛嗎？</h3>
    <p style="color: #334155; margin-bottom: 1.5rem;">疼痛不該是常態。歡迎來到<strong>新竹竹北</strong>宸新復健科，找回無痛的自在生活！</p>
    <p style="font-weight: bold; color: #0891b2;">現在就預約諮詢，告別疼痛！</p>
</div>
    `,
    whyChooseUs: [
      '瑞士原裝進口專利高濃縮分離技術',
      '堅持使用<strong>高解析度超音波導引</strong>，確保針劑精準到達病灶',
      '醫師施打技術多項認證'
    ],
    treatmentFocus: [
      '慢性肌腱炎久治不癒。',
      '關節韌帶鬆弛與不穩定。',
      '退化性關節炎與半月軟骨損傷。'
    ],
    images: [],
    applicableConditions: ['退化性關節炎', '旋轉肌撕裂', '網球肘', '足底筋膜炎', '半月軟骨受損'],
    qaList: [
      {
        question: 'PRP 注射需要打幾次？',
        answer: '一般建議的完整療程為 3 次，每次間隔約 4 週。但因每個人受傷程度與身體修復能力不同，醫師會在第一次治療後，根據超音波影像追蹤修復狀況來調整後續次數。'
      },
      {
        question: '打完 PRP 會很痛嗎？可以走路嗎？',
        answer: '注射後 2-3 天患部會有腫脹痠痛感（因為正在啟動修復發炎反應），這是正常的。一般行走與日常生活皆不受影響，但建議一週內避免劇烈運動，並多休息。'
      },
      {
        question: '打 PRP 有副作用嗎？',
        answer: 'PRP 是非常安全的治療，因為用的完全是自己的血液，幾乎不會有過敏反應。'
      },
      {
        question: 'PRP 治療保險有給付嗎？',
        answer: 'PRP 屬於自費項目，健保尚未給付。但若您持有「實支實付」型的醫療險，通常有機會申請理賠。'
      }
    ]
},
  // -----------------------------------------------------
  // 2. 聚焦式震波治療
  // -----------------------------------------------------
  {
    slug: 'shockwave',
    title: '聚焦式 / 發散式體外震波',
    lastModified: '2026-01-21',
    tags: ['ESWT'],
    subtitle: '瑞士頂級設備擊碎鈣化與骨刺',
    description: '引進瑞士頂級震波設備，免開刀擊碎鈣化點，專治足底筋膜炎與頑固疼痛。',
    image: '/images/treatments/b.webp',
    features: ['非侵入性', '擊碎鈣化', '恢復期短'],
    seoTitle: '新竹體外震波推薦 | 宸新復健科診所 - 關節退化與運動傷害治療',
    seoDescription: '新竹體外震波治療首選。位於鄰近新竹科學園區近竹北，宸新復健科採用瑞士頂級聚焦式震波儀，針對足底筋膜炎、鈣化性肌腱炎與網球肘效果顯著。免打針、免吃藥、非侵入性，有效擊碎鈣化組織並刺激血管新生。',
    keywords: ['新竹震波', '體外震波推薦', '竹北震波', '足底筋膜炎', '鈣化性肌腱炎', '骨刺治療', '網球肘', '新竹物理治療'],
    youtubeVideoId: '3OK5zeUBeGc',
    contentHtml: `
      <p>您是否長期受慢性疼痛所苦？足底筋膜炎反覆發作、網球肘痛到拿不起杯子、或是旋轉肌鈣化讓您徹夜難眠？當復健、吃藥、打針都無法解決您的疼痛時，<strong>體外震波治療 (ESWT)</strong> 可能是您免於開刀的最佳選擇。</p>
<br>
<p><strong>位於新竹的宸新復健科</strong>，特別針對<strong>新竹科學園區</strong>高壓工作的族群，引進頂級雙機型震波設備，提供<strong>「聚焦式 + 發散式」複合式治療</strong>。我們堅持在治療前使用<strong>高解析超音波精準定位</strong>，如同導彈鎖定目標，將高能量聲波精準傳遞至深層受損組織，啟動身體的自我修復機制，從根本解決頑固疼痛。</p>


<div style="background-color: #fffbeb; border: 2px solid #fbbf24; border-radius: 1rem; padding: 1.5rem; margin: 2rem 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
    <h2 style="color: #b45309; margin-top: 0; font-weight: bold; border-bottom: 2px solid #fcd34d; padding-bottom: 0.5rem; display: flex; align-items: center;">
        📢 為什麼選擇宸新 ESWT 震波治療？
    </h2>
    
    <p style="font-size: 1.1rem; color: #78350f;">許多患者在其他地方打過震波覺得沒效，往往是因為「打太淺」或「沒對準」。宸新復健科為<strong>竹北與新竹市區民眾</strong>堅持三大黃金治療標準，確保每一發震波都發揮最大效益：</p>
    
    <ul style="list-style: none; padding: 0; margin-top: 1rem; color: #92400e;">
        <li style="margin-bottom: 1rem; display: flex; align-items: start;">
            <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">1</span>
            <div><strong>超音波導引定位：</strong> 疼痛點不等於病灶點。我們在施打前，會先用超音波掃描，精確找出鈣化點、沾黏處或肌腱撕裂位置，並用記號筆標記，確保治療精準度。</div>
        </li>
        <li style="margin-bottom: 1rem; display: flex; align-items: start;">
            <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">2</span>
            <div><strong>複合式雙機治療：</strong> 同時擁有「聚焦式 (Focus)」與「發散式 (Radial)」兩種探頭。針對深層鈣化點用聚焦式擊碎，淺層筋膜緊繃則用發散式放鬆，由內而外全面處理。</div>
        </li>
        <li style="margin-bottom: 0; display: flex; align-items: start;">
            <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">3</span>
            <div><strong>治療師親自操作：</strong> 震波能量的強弱、頻率與角度調整是治療成功的關鍵。本院全程由物理治療師親自評估與操作，隨時根據您的感受調整參數，安全又有效。</div>
        </li>
                                <li style="margin-bottom: 0; display: flex; align-items: start;">
            <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">4</span>
            <div><strong>收費標準(每次3000發)：</strong>第一次體驗價：<strong>1500元</strong>。單次施打：<strong>2800元</strong>。購買療程(3次共9000發)：<strong>6800元</strong>。</div>
        </li>
    </ul>
</div>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h3>🔬 什麼是體外震波？治療原理大解密</h3>
<p>體外震波 (Extracorporeal Shock Wave Therapy, ESWT) 原本是用來擊碎腎結石的技術，後來發現調控適當能量後，對於骨骼肌肉系統有驚人的修復效果。</p>
<br>
<p>它是一種攜帶高能量的聲波，能穿透皮膚與軟組織，直達深層病灶。其治療機轉主要有三：</p>
<ol>
    <li><strong>促進血管新生：</strong> 震波能刺激組織產生生長因子 (如 VEGF)，促進微血管增生，改善血液循環，為受損組織帶來修復所需的氧氣與養分。</li>
    <li><strong>啟動修復機制：</strong> 利用微破壞原理，重新啟動停滯的修復反應，讓慢性發炎的組織有機會「打掉重練」，生成健康的膠原蛋白。</li>
    <li><strong>阻斷疼痛訊號：</strong> 高強度震波能過度刺激神經末梢，降低物質 P (Substance P) 的濃度，達到立即止痛與放鬆肌肉的效果。</li>
</ol>

<p><img src="/images/treatments/shockwave/a.webp" alt="ESWT體外震波治療原理圖解"></p>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h3>🎯 誰適合打震波？適應症範圍</h3>
<p>震波治療是目前國際公認對於<strong>慢性肌腱炎</strong>與<strong>鈣化性肌腱炎</strong>最有效的非侵入性療法。若您的疼痛持續超過 3 個月，且對復健、藥物反應不佳，震波將是您的首選。</p>

<h4>常見適應症包括：</h4>
<ul>
    <li><strong>足部問題：</strong> 足底筋膜炎、阿基里斯腱炎、跟骨骨刺。</li>
    <li><strong>肘部問題：</strong> 網球肘（外上髁炎）、高爾夫球肘（內上髁炎）。</li>
    <li><strong>肩部問題：</strong> 鈣化性肌腱炎、五十肩（沾黏性肩關節囊炎）、旋轉肌袖肌腱病變。</li>
    <li><strong>膝部問題：</strong> 髕骨肌腱炎（跳躍膝）、髂脛束摩擦症候群（跑者膝）。</li>
    <li><strong>髖部問題：</strong> 大轉子疼痛症候群。</li>
    <li><strong>其他：</strong> 慢性肌筋膜疼痛症候群、骨折癒合不良。</li>
</ul>

<p><img src="/images/treatments/shockwave/b.webp" alt="ESWT體外震波治療適應症範圍"></p>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h3>⚖️ 聚焦式 vs. 發散式：複合式治療的優勢</h3>
<p>市面上的震波機器主要分為兩種，各有優缺點。宸新復健科採用<strong>複合式治療策略</strong>，結合兩者優勢，達到 1+1>2 的效果。</p>

<p><img src="/images/treatments/shockwave/c.webp" alt="ESWT聚焦式與發散式震波比較圖"></p>

<h4>1. 聚焦式震波 (Focused Shockwave)</h4>
<ul>
    <li><strong>特點：</strong> 能量像放大鏡一樣聚焦在單一點，穿透力強，可達深層組織。</li>
    <li><strong>優點：</strong> 能精準擊碎深層鈣化點、修復深層肌腱附著點（如足底筋膜接點）。</li>
    <li><strong>適用：</strong> 鈣化性肌腱炎、骨折癒合不良、深層肌腱炎。</li>
</ul>

<h4>2. 發散式震波 (Radial Shockwave)</h4>
<ul>
    <li><strong>特點：</strong> 能量呈扇形擴散，作用範圍廣但較淺。</li>
    <li><strong>優點：</strong> 能大面積放鬆緊繃的淺層筋膜與肌肉，改善淋巴循環。</li>
    <li><strong>適用：</strong> 網球肘、肌筋膜疼痛症候群、淺層肌肉放鬆。</li>
</ul>

<div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
    <h4 style="margin-top: 0; color: #0e7490;">💡 宸新的獨家打法：先聚焦，後發散</h4>
    <p style="margin-bottom: 0; color: #334155;">我們會先用<strong>聚焦式震波</strong>針對深層病灶（如鈣化點）進行精準打擊，破壞沾黏組織；接著依病患狀況使用<strong>發散式震波</strong>掃描周邊緊繃的肌肉群，進行大範圍放鬆。這種「點面結合」的打法，能大幅提升治療後的舒適度與活動度。</p>
</div>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h3>📝 震波治療懶人包：療程與注意事項</h3>
<p>為了讓治療效果最大化，以下是醫師整理的常見問題與術後保養重點：</p>

<h4>Q1：治療過程會痛嗎？</h4>
<p><strong>會有一點痠痛感。</strong> 震波必須打在受傷的組織上才有效果，因此治療過程中會出現類似按壓痛點的痠痛感（好痛但又有點爽的感覺）。施打時會從低能量開始，依據您的耐受度隨時調整，不用擔心。</p>

<h4>Q2：需要打幾次？</h4>
<p>一般建議的完整療程為 <strong>3~6 次</strong>，每週施打一次。通常在治療 1~2 次後，疼痛感會有顯著改善，但為了組織完整修復，建議完成整個療程。</p>

<h4>Q3：術後該注意什麼？</h4>
<ul>
    <li><strong>休息：</strong> 治療後 48 小時內請避免劇烈運動，讓組織修復。</li>
    <li><strong>多喝水：</strong> 幫助代謝震波擊碎的廢物。</li>
    <li><strong>避免消炎藥：</strong> 震波是利用身體的發炎反應來修復，因此治療期間<strong>盡量不要服用消炎止痛藥</strong>或冰敷，以免抵消治療效果。</li>
    <li><strong>正常反應：</strong> 治療部位可能會有些微紅腫或瘀青，約 3~5 天會自然消退。</li>
</ul>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<div style="background-color: #ecfdf5; padding: 2rem; border-radius: 1rem; margin-top: 3rem; text-align: center;">
    <h3 style="color: #047857; margin-top: 0;">👨‍⚕️ 別讓疼痛限制了您的生活！</h3>
    <p style="color: #334155; margin-bottom: 1.5rem;">無論是想重回球場的運動員，還是深受肩膀痛困擾的長輩，<strong>位於新竹竹北</strong>的宸新復健科都能為您提供最專業的協助。透過超音波導引與複合式震波治療，讓我們一起擊退疼痛，找回活動自如的快樂！</p>
    <p style="font-weight: bold; color: #059669;">歡迎預約諮詢，體驗精準醫療的魅力！</p>
</div>
    `,
    whyChooseUs: [
      '擁有<strong>聚焦式(深層)</strong>與<strong>發散式(淺層)</strong>雙探頭，複合式治療',
      '治療前搭配<strong>超音波定位</strong>，精準打擊病灶',
      '免打針、免吃藥、非侵入性，無恢復期'
    ],
    treatmentFocus: [
      '足底筋膜炎 (早晨下床第一步劇痛)。',
      '鈣化性肌腱炎 (肩膀劇烈疼痛)。',
      '長期肌肉緊繃與慢性筋膜炎。'
    ],
    images: [],
    applicableConditions: ['足底筋膜炎', '鈣化性肌腱炎', '骨刺', '網球肘', '阿基里斯腱炎'],
    qaList: [
      {
        question: '震波治療過程會痛嗎？',
        answer: '治療過程中會有明顯的痠痛與脹感，這是因為震波正在衝擊受傷與沾黏的組織（尋找阿是穴）。這種痠痛感是治療有效的證明，醫師會隨時依照您的耐受度調整能量強度。'
      },
      {
        question: '需要做幾次震波治療？',
        answer: '一個標準療程通常建議為 3-6 次，每週一次。對於鈣化性肌腱炎或多年的慢性疼痛，可能需要 6 次以上的治療才能完全瓦解鈣化點並完成組織修復。'
      },
      {
        question: '震波治療後需要休息嗎？',
        answer: '治療後建議多喝水以促進代謝。當天患部可能會有些許紅腫或痠痛，這是組織修復的正常反應，通常 1-2 天內會緩解。這段期間請避免劇烈運動，讓組織好好修復。'
      }
    ]
  },
  // -----------------------------------------------------
  // 3. 徒手治療
  // -----------------------------------------------------
  {
    slug: 'manual',
    title: '徒手治療',
    lastModified: '2026-01-21',
    tags: ['manual'],
    subtitle: '物理治療師一對一評估治療',
    description: '專業物理治療師一對一評估，調整骨盆歪斜、脊椎側彎與筋膜放鬆。',
    image: '/images/treatments/c.webp',
    features: ['一對一治療', '筋膜放鬆', '骨骼調整'],
    seoTitle: '新竹徒手治療推薦 - 脊椎側彎矯正/骨盆歪斜/筋膜放鬆 | 宸新復健科',
    seoDescription: '新竹專業物理治療師一對一徒手治療。針對脊椎側彎、骨盆前傾/歪斜、產後喬骨盆、長短腳及術後關節沾黏，提供客製化的骨骼調整與筋膜放鬆療程，從根本改善體態與疼痛。',
    keywords: ['新竹徒手治療', '新竹整骨', '脊椎側彎矯正', '骨盆歪斜', '產後喬骨盆', '筋膜放鬆', '新竹物理治療推薦', '五十肩治療'],
    contentHtml: `
<p>您是否長期被慢性疼痛困擾？肩頸僵硬、下背痠痛、或是運動傷害後總是好不完全？當儀器治療（電療、熱敷）只能提供暫時的緩解時，<strong>徒手運動治療 (Manual & Exercise Therapy)</strong> 將是您重拾無痛生活的關鍵。</p>
<br>
<p>宸新復健科打造了新竹首屈一指的<strong>獨立治療空間</strong>，結合專業物理治療師的雙手與頂尖運動訓練設備。我們不只「治標」，更要「治本」。透過精準的徒手調整與客制化運動訓練，找出疼痛的根源，重建身體的平衡與力量。</p>


<div style="background-color: #fffbeb; border: 2px solid #fbbf24; border-radius: 1rem; padding: 1.5rem; margin: 2rem 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
    <h2 style="color: #b45309; margin-top: 0; font-weight: bold; border-bottom: 2px solid #fcd34d; padding-bottom: 0.5rem; display: flex; align-items: center;">
        📢 宸新復健科 5 大頂級治療特色
    </h2>
    
    <p style="font-size: 1.1rem; color: #78350f;">工欲善其事，必先利其器。為了提供醫學中心等級的治療品質，我們引進了全方位的專業設備，讓治療與訓練無縫接軌：</p>
    
    <ul style="list-style: none; padding: 0; margin-top: 1rem; color: #92400e;">
        <li style="margin-bottom: 1rem; display: flex; align-items: start;">
            <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">1</span>
            <div><strong>隱私尊榮的獨立空間：</strong> 告別擁擠吵雜。我們擁有寬敞的獨立治療室，保護您的隱私，讓您在放鬆的環境下專注於身體的對話。</div>
        </li>
        <li style="margin-bottom: 1rem; display: flex; align-items: start;">
            <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">2</span>
            <div><strong>氣壓式多功能訓練機 (Keiser)：</strong> 職業運動員首選。利用氣壓阻力取代傳統鐵片，能以任何速度進行爆發力訓練，且對關節零負擔，適合術後復健與高齡者。</div>
        </li>
        <li style="margin-bottom: 1rem; display: flex; align-items: start;">
            <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">3</span>
            <div><strong>脊椎側彎專用訓練架：</strong> 針對脊椎側彎患者，提供 3D 空間的矯正訓練，搭配施羅斯 (Schroth) 療法，有效改善體態與減少側彎角度。</div>
        </li>
        <li style="margin-bottom: 1rem; display: flex; align-items: start;">
            <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">4</span>
            <div><strong>挪威紅繩懸吊系統 (Redcord)：</strong> 透過不穩定的懸吊繩索，能快速喚醒深層核心肌群，重啟神經肌肉控制，是改善慢性下背痛的神器。</div>
        </li>
        <li style="margin-bottom: 0; display: flex; align-items: start;">
            <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">5</span>
            <div><strong>器械皮拉提斯 (Pilates Reformer)：</strong> 結合核心穩定與肢體伸展，能精準鍛鍊核心肌群，改善姿勢不良，塑造修長緊實的體態。</div>
        </li>
    </ul>
</div>

<p><img src="/images/treatments/therapy/a.webp" alt="獨立的徒手治療空間"></p>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h3>👋 什麼是徒手治療？跟按摩一樣嗎？</h3>
<p>這是一個常見的誤解。按摩主要是放鬆表層肌肉，讓您當下覺得舒服；而<strong>徒手治療 (Manual Therapy)</strong> 則是由受過專業訓練的物理治療師，利用雙手進行的醫療行為。</p>
<br>
<p>治療師會先進行詳細的理學檢查，找出造成疼痛的「元兇」——可能是關節錯位、筋膜沾黏、或是肌肉失衡。接著運用關節鬆動術 (Mobilization)、神經鬆動術、肌筋膜放鬆術 (MFR) 等手法，恢復關節活動度與軟組織彈性。簡單來說，徒手治療是<strong>「有診斷、有目標、有療效」</strong>的專業治療。</p>

<h3>🏋️‍♀️ 為什麼需要結合運動治療？</h3>
<p>徒手治療能把身體「歸零」到正確位置，但要維持這個效果，就必須靠<strong>運動治療 (Exercise Therapy)</strong>。透過訓練深層核心與特定肌群，讓肌肉學會正確的用力方式，形成天然的護具保護關節，這才是預防復發的長久之計。</p>
<p>在宸新，我們強調<strong>「徒手＋運動」</strong>的黃金組合。這也是為什麼我們不惜重本，引進以下四大訓練神器的原因：</p>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h3>1. 氣壓式多功能訓練機 (Keiser)</h3>
<p>傳統重量訓練機使用鐵片，會有慣性問題，容易受傷且無法模擬快速動作。<strong>Keiser 氣壓式訓練機</strong>利用空氣阻力，能讓您在任何速度下都能保持恆定的阻力。這意味著我們可以安全地進行<strong>爆發力訓練 (Power Training)</strong>，對於運動員重返賽場，或是長輩想要增加肌力預防跌倒，都是最安全高效的選擇。</p>

<p><img src="/images/treatments/therapy/b.webp" alt="氣壓式多功能訓練機"></p>

<h3>2. 脊椎側彎專用訓練架</h3>
<p>脊椎側彎不只是外觀問題，更會影響呼吸與造成背痛。我們設有專用的訓練架（類似施羅斯牆），讓治療師能引導患者進行<strong>3D 空間的呼吸與矯正運動</strong>。透過特定的擺位與施力，將凹陷的胸廓撐開、旋轉的椎體轉正，從而改善體態並控制側彎角度。</p>

<p><img src="/images/treatments/therapy/c.webp" alt="脊椎側彎訓練架"></p>

<h3>3. 挪威紅繩懸吊系統 (Redcord)</h3>
<p>源自挪威的醫療級懸吊系統。它的核心概念是「弱連結測試 (Weak Link Testing)」。治療師會利用繩索的不穩定性，找出您身體力量傳遞最弱的環節，然後透過高強度的神經肌肉控制訓練 (Neurac)，<strong>瞬間喚醒沉睡的深層核心肌群</strong>。對於長期下背痛、骨盆歪斜或產後核心無力的族群，紅繩往往能帶來立竿見影的改善。</p>

<p><img src="/images/treatments/therapy/d.webp" alt="挪威紅繩懸吊訓練"></p>

<h3>4. 器械皮拉提斯 (Pilates Reformer)</h3>
<p>皮拉提斯不只是運動，更是復健的延伸。Reformer (核心床) 利用彈簧阻力與滑動平臺，能提供脊椎極佳的支撐與延伸感。在治療師的一對一指導下，您能精準地鍛鍊核心、改善圓肩駝背、骨盆前傾等不良姿勢，同時雕塑出修長緊實的肌肉線條。</p>

<p><img src="/images/treatments/therapy/e.webp" alt="器械皮拉提斯"></p>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h3>🎯 誰適合徒手運動治療？</h3>
<p>如果您有以下困擾，且健保的電療熱敷已經無法滿足您的需求，建議您可以預約徒手治療評估：</p>
<ul>
    <li><strong>脊椎問題：</strong> 頸椎病變、椎間盤突出、坐骨神經痛、脊椎側彎。</li>
    <li><strong>肩頸問題：</strong> 五十肩、夾擠症候群、長期肩頸痠痛。</li>
    <li><strong>下肢問題：</strong> 退化性關節炎、前十字韌帶術後復健、腳踝扭傷。</li>
    <li><strong>特殊族群：</strong> 產後骨盆復位、運動員專項體能訓練、高齡防跌肌力訓練。</li>
</ul>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<div style="background-color: #f0f9ff; padding: 2rem; border-radius: 1rem; margin-top: 3rem; text-align: center;">
    <h3 style="color: #0369a1; margin-top: 0;">👨‍⚕️ 找回身體的主導權！</h3>
    <p style="color: #334155; margin-bottom: 1.5rem;">疼痛不是老化的必然，而是身體發出的求救訊號。來到宸新復健科，我們不只幫您止痛，更要教您如何正確使用身體。</p>
    <p style="font-weight: bold; color: #0891b2;">現在就預約一對一評估，開啟您的無痛人生！</p>
</div>
    `,
    whyChooseUs: [
      '醫師診斷把關、X光及超音波馬上檢查',
      '十多位資深治療師及先進設備儀器',
      '結合<strong>居家運動指導</strong>，改善體態預防復發'
    ],
    treatmentFocus: [
      '頸椎神經壓迫、長期肩頸痠痛下背痛。',
      '脊椎側彎、骨盆歪斜、產後骨盆調整。',
      '手術後關節沾黏 (如骨折術後)、五十肩。'
    ],
    images: [],
    applicableConditions: ['肩頸痠痛', '脊椎側彎', '骨盆歪斜', '五十肩', '術後復健'],
    qaList: [
      {
        question: '徒手治療跟坊間的整骨、推拿有什麼不一樣？',
        answer: '坊間整骨多依賴師傅經驗；徒手治療則是由「物理治療師」執行，必須具備解剖學與生物力學知識。我們會先進行理學檢查（評估關節角度、肌肉力量、神經張力），確保安全後再進行調整，安全性與科學性更高，且包含運動指導以維持療效。'
      },
      {
        question: '一次治療需要多久？',
        answer: '每次徒手治療時間約為 30-60 分鐘，包含評估、治療以及居家運動指導。'
      },
      {
        question: '健保可以做徒手治療嗎？',
        answer: '健保給付的物理治療主要為儀器治療（如電療、熱敷、牽引）。一對一的徒手治療因需治療師全程專注操作，屬於自費醫療項目，能提供更精緻、深層且針對性的療效。'
      }
    ]
  },

  // -----------------------------------------------------
  // 4. 高能量雷射治療 (HILT)
  // -----------------------------------------------------
  {
    slug: 'high-intensity-laser',
    title: '高能量雷射治療',
    lastModified: '2026-01-21',
    tags: ['laser'],
    subtitle: '光速修復、深層止痛的黑科技',
    description: '引進美國頂級Summus高能量雷射，能穿透深層組織，提供立即性的止痛與消腫。專治急性運動傷害、兒童運動傷害與頑固性疼痛。',
    image: '/images/treatments/d.webp',
    features: ['無痛舒適', '立即消腫', '深層穿透'],
    seoTitle: '新竹高能量雷射治療 - 急性扭傷/術後修復/神經痛推薦 | 宸新復健科',
    seoDescription: '新竹高能量雷射推薦。宸新復健科採用美國頂級Summus高能量雷射，穿透深度達 10 公分。針對急性運動傷害、兒童運動傷害與頑固性疼痛效果顯著。無痛、溫熱感、立即消腫止痛，隔天可以馬上上場。',
    keywords: ['新竹高能量雷射', 'HILT', '雷射治療', '運動傷害', '急性扭傷', '坐骨神經痛', '術後復健'],
    youtubeVideoId: '6vQDqF7Xk9E',
    contentHtml: `
      <p>您是否剛經歷了急性腳踝扭傷，腫得像麵龜一樣無法走路？或是深受坐骨神經痛折磨，卻又不敢開刀？當傳統的熱敷電療效果緩慢，而震波治療對急性發炎又太過刺激時，<strong>高能量雷射 (High Intensity Laser Therapy, HILT)</strong> 將是您最溫柔且強大的選擇。</p>
<br>
<p>且可施打於敏感部位，如肋骨、尾椎或手指頭等部位，或是對於不適合打針的族群(如凝血功能障礙或馬上要上場的球員)或不敢打針的族群(小朋友)，都可提供有效的止痛及治療</p>
<br>
<p>不同於傳統復健科常見的「低能量雷射」，宸新復健科引進的<strong>美國頂級Summus高能量雷射</strong>，功率是傳統雷射的 50 倍以上。它能像光速列車一般，攜帶巨大的修復能量穿透皮膚，直達皮下 10-12 公分的深層組織，在<strong>「無痛、溫熱、非侵入」</strong>的狀態下，實現快速止痛與組織再生。</p>

<div style="background-color: #fffbeb; border: 2px solid #fbbf24; border-radius: 1rem; padding: 1.5rem; margin: 2rem 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
    <h2 style="color: #b45309; margin-top: 0; font-weight: bold; border-bottom: 2px solid #fcd34d; padding-bottom: 0.5rem; display: flex; align-items: center;">
        📢 為什麼選擇宸新 HILT 高能量雷射？
    </h2>
    
    <p style="font-size: 1.1rem; color: #78350f;">雷射治療不是只要「有光」就好。能量夠不夠強、波長能不能穿透、醫師的診斷是否精準，決定了治療的成敗：</p>
    
    <ul style="list-style: none; padding: 0; margin-top: 1rem; color: #92400e;">
        <li style="margin-bottom: 1rem; display: flex; align-items: start;">
            <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">1</span>
            <div><strong>深層穿透力：</strong> 我們採用多波長複合雷射，能突破皮膚與脂肪層的阻擋，將能量傳遞至深層的肌腱、神經、血管和骨頭等，這是傳統儀器無法觸及的深度。</div>
        </li>
        <li style="margin-bottom: 1rem; display: flex; align-items: start;">
            <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">2</span>
            <div><strong>治療師施打：</strong> 由專精於身體結構的物理之療師施打，可準確施打於激痛點或是沾黏處，搭配徒手手法，讓效果加倍。</div>
        </li>
        <li style="margin-bottom: 0; display: flex; align-items: start;">
            <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">3</span>
            <div><strong>客製化治療參數：</strong> 針對急性水腫期與慢性沾黏期，我們會調整不同的波長與脈衝模式。急性期著重「消腫排毒」，慢性期著重「溫熱修復」。</div>
        </li>
    </ul>
</div>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h3>🔬 光的魔法：三大治療原理</h3>
<p>高能量雷射並非單純的熱療，它是利用<strong>「光生物調節作用 (Photobiomodulation, PBM)」</strong>，從細胞層級啟動修復：</p>

<h3>1. 光化學效應 (Photochemical Effect) - 細胞的充電器</h3>
<p>雷射光能刺激細胞內的發電廠——<strong>線粒體 (Mitochondria)</strong>，大幅增加 ATP（細胞能量）的合成。這就像幫沒電的手機進行快充，讓受傷的細胞獲得足夠能量，加速修復受損的韌帶與肌腱。</p>

<h3>2. 光機械效應 (Photomechanical Effect) - 排出水腫</h3>
<p>透過脈衝波產生的微震動，能促進淋巴引流與微循環，將堆積在患部的發炎物質與水腫快速帶走。這也是為什麼高能量雷射對於<strong>急性扭傷的消腫</strong>效果特別驚人。</p>

<h3>3. 光熱效應 (Photothermal Effect) - 舒緩溫熱</h3>
<p>在控制的範圍內產生深層溫熱感，能擴張血管、放鬆緊繃痙攣的肌肉，並阻斷痛覺神經的傳導，達到立即的止痛效果。</p>


<p><img src="/images/treatments/laser/a.webp" alt="高能量雷射治療原理示意圖"></p>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h3>🎯 震波不能打的，雷射可以！(適應症)</h3>
<p>體外震波雖然效果好，但對於「急性紅腫熱痛」或「神經發炎」的部位通常不建議施打，以免更痛。這時，<strong>高能量雷射</strong>就是最佳救援投手。</p>

<h4>✅ 急性運動傷害 (黃金期)</h4>
<p>腳踝翻船扭傷、肌肉拉傷、十字韌帶撕裂術後。在受傷 24 小時內即可介入，能顯著減少腫脹與瘀血，縮短恢復期，甚至可以讓球員隔天馬上下場打球。</p>
<br>
<h4>✅ 神經壓迫與病變</h4>
<p><strong>腕隧道症候群</strong>、<strong>坐骨神經痛</strong>、頸椎神經根病變。雷射能促進神經髓鞘修復，且治療過程無痛，非常適合怕痛的神經痛患者。</p>
<br>
<h4>✅ 脊椎與深層關節</h4>
<p>退化性膝關節炎、五十肩、下背痛。雷射的深層穿透力能到達脊椎深層的小面關節，緩解長年腰痠背痛。</p>

<p><img src="/images/treatments/laser/b.webp" alt="高能量雷射治療適應症"></p>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h3>⚖️ 超級比一比：高能量雷射 vs. 傳統低能量雷射</h3>
<p>很多患者會問：「健保也有雷射啊，為什麼要打自費的？」這兩者雖然原理相似，但<strong>功率與效果</strong>卻是天壤之別。</p>

<div style="overflow-x: auto;">
  <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
    <thead>
      <tr style="background-color: #f3f4f6;">
        <th style="padding: 1rem; text-align: left; border-bottom: 2px solid #e5e7eb; color: #0891b2;">比較項目</th>
        <th style="padding: 1rem; text-align: left; border-bottom: 2px solid #e5e7eb; color: #0891b2;">高能量雷射 (HILT)</th>
        <th style="padding: 1rem; text-align: left; border-bottom: 2px solid #e5e7eb; color: #0891b2;">低能量雷射 (LLLT)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 1rem; border-bottom: 1px solid #e5e7eb;"><strong>功率 (Power)</strong></td>
        <td style="padding: 1rem; border-bottom: 1px solid #e5e7eb;"><strong>10W ~ 30W (極高)</strong></td>
        <td style="padding: 1rem; border-bottom: 1px solid #e5e7eb;">&lt; 0.5W (低)</td>
      </tr>
      <tr>
        <td style="padding: 1rem; border-bottom: 1px solid #e5e7eb;"><strong>穿透深度</strong></td>
        <td style="padding: 1rem; border-bottom: 1px solid #e5e7eb;"><strong>10 ~ 12 公分 (深層)</strong></td>
        <td style="padding: 1rem; border-bottom: 1px solid #e5e7eb;">0.5 ~ 1 公分 (表淺)</td>
      </tr>
      <tr>
        <td style="padding: 1rem; border-bottom: 1px solid #e5e7eb;"><strong>治療感覺</strong></td>
        <td style="padding: 1rem; border-bottom: 1px solid #e5e7eb;"><strong>舒適深層溫熱感</strong></td>
        <td style="padding: 1rem; border-bottom: 1px solid #e5e7eb;">無感覺</td>
      </tr>
      <tr>
        <td style="padding: 1rem; border-bottom: 1px solid #e5e7eb;"><strong>治療時間</strong></td>
        <td style="padding: 1rem; border-bottom: 1px solid #e5e7eb;"><strong>短 (約 10-15 分鐘)</strong></td>
        <td style="padding: 1rem; border-bottom: 1px solid #e5e7eb;">較長</td>
      </tr>
      <tr>
        <td style="padding: 1rem; border-bottom: 1px solid #e5e7eb;"><strong>主要效果</strong></td>
        <td style="padding: 1rem; border-bottom: 1px solid #e5e7eb;"><strong>立即止痛、深層修復</strong></td>
        <td style="padding: 1rem; border-bottom: 1px solid #e5e7eb;">表淺傷口癒合</td>
      </tr>
    </tbody>
  </table>
</div>


<h3>📝 治療懶人包：醫師常見問答</h3>

<h4>Q1：治療過程會痛嗎？會不會燙傷？</h4>
<p><strong>完全不會痛！</strong> 高能量雷射治療時，您會感覺到一股舒服的暖流在肌肉深層流動，就像在做深層熱按摩一樣，非常放鬆。我們的設備具備高階溫控偵測，治療師也會隨時移動探頭，不會造成皮膚燙傷。</p>
<br>
<h4>Q2：誰不適合打雷射？（禁忌症）</h4>
<p>雖然雷射很安全，但以下族群不建議施打：</p>
<ul>
    <li>治療部位有<strong>惡性腫瘤</strong>或未確診的腫塊。</li>
    <li><strong>懷孕婦女</strong>的腹部與背部。</li>
    <li>治療部位有刺青（深色會過度吸熱）。</li>
    <li>眼球及甲狀腺周圍（嚴禁直射眼睛）。</li>
</ul>
<h4>Q3：需要打幾次？</h4>
<p><strong>急性期：</strong> 建議密集治療，每週 2-3 次，通常 3-5 次即可消腫。<br>
<strong>慢性期：</strong> 建議每週 1-2 次，完整療程約 6-10 次，以達到組織再生修復的目標。</p>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<div style="background-color: #ecfdf5; padding: 2rem; border-radius: 1rem; margin-top: 3rem; text-align: center;">
    <h3 style="color: #047857; margin-top: 0;">👨‍⚕️ 怕痛？怕針？那就用「光」來治療吧！</h3>
    <p style="color: #334155; margin-bottom: 1.5rem;">高能量雷射是現代復健醫學的黑科技，它填補了藥物與手術之間的空白，特別適合害怕打針震波、或急性受傷需要快速恢復的您。宸新復健科邀請您體驗這道溫暖的修復之光！</p>
    <p style="font-weight: bold; color: #059669;">腳踝扭傷、腰痛難癒？立即預約雷射評估！</p>
</div>
    `,
    whyChooseUs: [
      '引進美國頂級<strong>Summus </strong> 高能量雷射，功率強大',
      '具備多波長技術，同時兼顧<strong>淺層止痛</strong>與<strong>深層修復</strong>',
      '治療過程<strong>溫熱舒適無痛</strong>，適合怕痛體質'
    ],
    treatmentFocus: [
      '急性運動傷害(腳踝扭傷或吃蘿蔔)。',
      '不適合打針的部位(肋骨或指頭)。',
      '怕打診的病患或兒童。'
    ],
    images: [],
    applicableConditions: ['急性扭傷', '坐骨神經痛', '退化性關節炎', '腕隧道症候群', '術後水腫'],
    qaList: [
      {
        question: '高能量雷射跟一般復健科的雷射有什麼不同？',
        answer: '一般健保復健使用的是低能量雷射(LLLT)，功率低，僅能作用於皮膚表層。高能量雷射(HILT)功率是其 50 倍以上，能穿透至皮下 10 公分，產生光熱效應與光機械效應，對於深層肌肉、關節與神經的修復效果遠優於傳統雷射。'
      },
      {
        question: '治療當下會有什麼感覺？',
        answer: '治療過程中，患部會感覺到明顯且舒適的溫熱感，這是雷射能量轉化為熱能並促進血液循環的現象。大多數患者會覺得肌肉放鬆，甚至舒服到想睡覺，完全沒有震波治療的疼痛感。'
      },
      {
        question: '打完雷射就可以馬上運動嗎？',
        answer: '雖然雷射能立即止痛，但受傷的組織仍需要時間修復。建議治療後 24 小時內避免劇烈運動或提重物，但可以進行日常的輕度活動與伸展。'
      }
    ]
  },


{
  slug: 'hyaluronic-acid',
  title: '超音波導引玻尿酸注射',
  lastModified: '2026-01-24',
  tags: ['HA'],
  subtitle: '精準導引潤滑關節、延緩退化',
  description: '新竹玻尿酸注射推薦。堅持採用高解析超音波導引，將玻尿酸精準注入關節腔，有效緩解退化性關節炎與五十肩疼痛，比傳統盲打更安全有效。',
  image: '/images/treatments/e.webp',
  features: ['超音波導引', '潤滑關節', '延緩置換'],
  seoTitle: '新竹玻尿酸注射 - 退化性關節炎/膝蓋痛/五十肩治療 | 宸新復健科',
  seoDescription: '新竹玻尿酸治療推薦。宸新復健科採用高階超音波導引注射技術，針對退化性膝關節炎、五十肩沾黏與運動傷害，提供精準的關節潤滑治療。免開刀、低疼痛，有效延緩關節置換時間。',
  keywords: ['新竹玻尿酸', '膝蓋打玻尿酸', '退化性關節炎', '超音波導引注射', '五十肩治療', '關節潤滑', '新竹復健科', '髖關節疼痛'],
  youtubeVideoId: '', // 若有相關衛教影片可填入 ID
  contentHtml: `
    <p>您是否發現上下樓梯時膝蓋開始無力、發出喀喀聲？或是早上起床時關節僵硬，活動一下才緩解？這些都是<strong>退化性關節炎</strong> 的早期警訊。當口服葡萄糖胺、止痛藥效果有限，又不希望走到置換人工關節這一步時，<strong>玻尿酸注射</strong> 是醫學界公認能有效延緩退化的「關節保養液」。</p>
    <br>
    <p>然而，玻尿酸不是「打了就有效」，重點在於<strong>「打在哪裡」</strong>。宸新復健科堅持拒絕傳統的「盲打」方式，全療程採用<strong>高解析骨骼肌肉超音波導引</strong>，讓醫師擁有一雙透視眼，避開神經血管，確保每一滴珍貴的玻尿酸都準確進入關節腔與受損軟骨表面。</p>

    <div style="background-color: #fffbeb; border: 2px solid #fbbf24; border-radius: 1rem; padding: 1.5rem; margin: 2rem 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        <h2 style="color: #b45309; margin-top: 0; font-weight: bold; border-bottom: 2px solid #fcd34d; padding-bottom: 0.5rem; display: flex; align-items: center;">
            📢 為什麼選擇宸新「超音波導引」注射？
        </h2>
        
        <p style="font-size: 1.1rem; color: #78350f;">傳統的關節注射憑藉的是醫師的手感與解剖經驗（盲打），但在關節變形或腫脹的情況下，盲打的準確率可能大幅下降，甚至誤傷周邊組織。宸新復健科採用精準醫療標準：</p>
        
        <ul style="list-style: none; padding: 0; margin-top: 1rem; color: #92400e;">
            <li style="margin-bottom: 1rem; display: flex; align-items: start;">
                <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">1</span>
                <div><strong>100% 準確度：</strong> 透過螢幕即時顯像，醫師能清楚看見針頭路徑，確認針尖進入關節腔空隙後才推藥，確保藥物直達病灶，不浪費任何一滴藥劑。</div>
            </li>
            <li style="margin-bottom: 1rem; display: flex; align-items: start;">
                <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">2</span>
                <div><strong>大幅降低疼痛：</strong> 因為看得到，所以能避開神經與血管，並選擇最短、阻力最小的路徑進針，大幅減少注射過程的痠痛感與出血風險。</div>
            </li>
            <li style="margin-bottom: 0; display: flex; align-items: start;">
                <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">3</span>
                <div><strong>動態評估病況：</strong> 注射同時，醫師會利用超音波檢查關節積水狀況。若有積水，可先在超音波導引下精準抽出積液，再注入玻尿酸，效果加倍。</div>
            </li>
      
             <li style="margin-bottom: 0; display: flex; align-items: start;">
            <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">4</span>
            <div><strong>收費標準：</strong>短效型玻尿酸(建議每周連續三次，半年一輪)：<strong>1600元</strong>。長效型玻尿酸(半年一次)：<strong>8000元</strong>。</div>
        </li>
        </ul>
    </div>
          <div class="my-8 flex justify-center">
    <iframe 
      width="315" 
      height="560" 
      src="https://www.youtube.com/embed/A-keqKDu7bQ" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen
      class="max-w-full rounded-xl shadow-lg border border-slate-700"
    ></iframe>
     </div>

    <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

    <h3>🔬 玻尿酸如何保護關節？三大作用機制</h3>
    <p>人體的關節液中原本就含有高濃度的玻尿酸，負責潤滑與緩衝。但隨著年齡增長或過度使用，人體自行製造玻尿酸的速度跟不上消耗，導致關節液變稀，軟骨開始磨損。</p>
    <br>
    <p>注射醫用級玻尿酸就像是幫汽車引擎「換機油」，主要功能如下：</p>
    <ol>
        <li><strong>物理性潤滑：</strong> 高黏稠度的玻尿酸能覆蓋在粗糙的軟骨表面，減少骨頭間的摩擦，消除活動時的卡卡聲與不適感。</li>
        <li><strong>吸震緩衝：</strong> 玻尿酸具有極佳的黏彈性，能像氣墊一樣吸收行走或運動時的衝擊力，保護軟骨不再繼續磨損。</li>
        <li><strong>抗發炎與止痛：</strong> 研究顯示，高分子量玻尿酸能抑制發炎介質，減少關節滑膜的發炎反應，從而減輕疼痛。</li>
    </ol>

    <p>

</p>

    <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

    <h3>🎯 誰適合打玻尿酸？適應症範圍</h3>
    <p>玻尿酸注射主要針對<strong>輕度至中度</strong>的退化性關節炎患者效果最佳。若軟骨已經完全磨損（重度退化），效果則較有限。</p>

    <h4>常見適應症包括：</h4>
    <ul>
        <li><strong>膝關節退化：</strong> 上下樓梯痛、蹲下站不起來、天氣變化時痠痛。</li>
        <li><strong>五十肩 (沾黏性肩關節囊炎)：</strong> 手舉不起來、無法扣內衣、夜間痛醒。搭配<strong>關節擴張術</strong>注射玻尿酸，能撐開沾黏的關節囊，大幅改善活動度。</li>
        <li><strong>髖關節磨損：</strong> 走路鼠蹊部疼痛、穿襪子困難。</li>
        <li><strong>踝關節炎：</strong> 舊傷導致的長期腳踝腫脹疼痛。</li>
        <li><strong>運動傷害保養：</strong> 馬拉松跑者、籃球愛好者等高衝擊運動族群的軟骨保養。</li>
    </ul>

    <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

    <h3>⚖️ 玻尿酸 vs. PRP vs. 類固醇：我該選哪種？</h3>
<p>這是門診病患最常問的問題。簡單來說，這三種針劑的「任務」不同，醫師會根據您的嚴重程度建議適合的療程，甚至採用<strong>複合式治療</strong>。</p>

<div style="overflow-x: auto; padding-bottom: 10px;">
    <table style="width: 100%; min-width: 600px; border-collapse: collapse; margin-top: 1rem;">
        <thead>
            <tr style="background-color: #0369a1; color: white;">
                <th style="padding: 0.75rem; border: 1px solid #e5e7eb; text-align: left; white-space: nowrap;">治療項目</th>
                <th style="padding: 0.75rem; border: 1px solid #e5e7eb; text-align: left; white-space: nowrap;">主要作用</th>
                <th style="padding: 0.75rem; border: 1px solid #e5e7eb; text-align: left; white-space: nowrap;">適合對象</th>
                <th style="padding: 0.75rem; border: 1px solid #e5e7eb; text-align: left; white-space: nowrap;">特點</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 0.75rem; border: 1px solid #e5e7eb; font-weight: bold; color:rgb(116, 233, 239); white-space: nowrap;">玻尿酸</td>
                <td style="padding: 0.75rem; border: 1px solid #e5e7eb;">潤滑、緩衝、保護軟骨</td>
                <td style="padding: 0.75rem; border: 1px solid #e5e7eb;">輕中度退化、關節卡卡</td>
                <td style="padding: 0.75rem; border: 1px solid #e5e7eb;">像是幫關節「上油」，立即改善活動度，副作用極低。</td>
            </tr>
            <tr>
                <td style="padding: 0.75rem; border: 1px solid #e5e7eb; font-weight: bold; color: #b91c1c; white-space: nowrap;">
                    <a href="/treatments/prp" class="text-cyan-400 hover:underline" style="color: #0891b2; text-decoration: none;">PRP 增生療法</a> 🔍️
                </td>
                <td style="padding: 0.75rem; border: 1px solid #e5e7eb;">修復組織、再生</td>
                <td style="padding: 0.75rem; border: 1px solid #e5e7eb;">肌腱撕裂、軟骨磨損較明顯者</td>
                <td style="padding: 0.75rem; border: 1px solid #e5e7eb;">利用自身生長因子修復，效果較持久，針對「受傷」修復。</td>
            </tr>
            <tr>
                <td style="padding: 0.75rem; border: 1px solid #e5e7eb; font-weight: bold; color:rgb(181, 209, 247); white-space: nowrap;">類固醇</td>
                <td style="padding: 0.75rem; border: 1px solid #e5e7eb;">強力消炎、止痛</td>
                <td style="padding: 0.75rem; border: 1px solid #e5e7eb;">急性發炎期、積水腫脹嚴重</td>
                <td style="padding: 0.75rem; border: 1px solid #e5e7eb;">治標不治本，短期急救用，不建議長期頻繁施打。</td>
            </tr>
        </tbody>
    </table>
    <div style="text-align: center; font-size: 0.8rem; color: #6b7280; margin-top: 5px; display: block; md:hidden;">
        (可左右滑動查看表格 👉)
    </div>
</div>

    <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
        <h4 style="margin-top: 0; color: #0e7490;">💡 醫師的小叮嚀：長效 vs. 短效玻尿酸</h4>
        <p style="margin-bottom: 0; color: #334155;">市面上的玻尿酸劑型眾多，從「每週打一次（療程 3 次）」到「半年打一次」都有。長效型分子量大、黏稠度高，維持時間久；短效型則適合初次嘗試或怕痛的患者。請與宸新的醫師討論，依據您的生活型態選擇最適合的劑型。</p>
    </div>

    <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

    <h3>📝 治療流程與術後保養</h3>
    
    <h4>治療流程：</h4>
    <ol>
        <li><strong>醫師評估：</strong> 進行理學檢查與 X 光/超音波判讀，確認退化程度。</li>
        <li><strong>超音波定位：</strong> 患者採坐姿或臥姿，醫師利用超音波掃描找出最佳進針點。</li>
        <li><strong>消毒注射：</strong> 嚴格無菌消毒後，在動態顯影下完成注射。全程約 5 分鐘。</li>
    </ol>

    <h4>術後注意事項：</h4>
    <ul>
        <li><strong>注射後 24 小時：</strong> 針孔處請勿碰水，可淋浴但避免泡澡，以免感染。</li>
        <li><strong>注射後 48 小時：</strong> 避免劇烈運動（如跑步、爬山），讓玻尿酸均勻分布於關節腔。</li>
        <li><strong>正常反應：</strong> 極少數人注射後會有短暫的痠脹感，冰敷 10-15 分鐘即可緩解。</li>
        <li><strong>規律運動：</strong> 玻尿酸是輔助，施打後仍需搭配<strong>股四頭肌肌力訓練</strong>，才能真正減輕膝蓋負擔。</li>
    </ul>
            <p><img src="/images/treatments/ha/b.webp" alt="玻尿酸注射後注意事項"></p>

    <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

    <div style="background-color: #ecfdf5; padding: 2rem; border-radius: 1rem; margin-top: 3rem; text-align: center;">
        <h3 style="color: #047857; margin-top: 0;">👨‍⚕️ 找回膝蓋的「潤滑油」，重拾行動力！</h3>
        <p style="color: #334155; margin-bottom: 1.5rem;">膝蓋是要用一輩子的，千萬別等到寸步難行才求醫。宸新復健科透過精準的超音波導引玻尿酸注射，為您的關節提供最完善的保護，讓您陪著家人走得更遠、更久。</p>
        <p style="font-weight: bold; color: #059669;">立即預約評估，守護您的關節健康！</p>
    </div>
  `,
  whyChooseUs: [
    '全程使用<strong><a href="/about/clinic/ultrasound" class="text-cyan-400 hover:underline">高解析超音波導引</a></strong>，精準注射。',
    '針對五十肩提供<strong>關節擴張術</strong>，解決沾黏與疼痛。',
    '提供多種分子量劑型（長效/短效）選擇，客製化您的治療計畫。'
  ],
  treatmentFocus: [
    '退化性膝關節炎 (上下樓梯無力)。',
    '五十肩 (肩膀卡住舉不起來)。',
    '髖關節與踝關節慢性疼痛。'
  ],
  images: [],
  applicableConditions: ['退化性關節炎', '膝蓋軟骨磨損', '五十肩', '肩夾擠症候群', '髖關節炎'],
  qaList: [
    {
      question: '打玻尿酸會有依賴性嗎？需要一直打下去嗎？',
      answer: '玻尿酸沒有依賴性。它是一種保養補充品，就像車子需要定期換機油一樣。因為人體會代謝掉外來的玻尿酸，所以當藥效減退時，就會又開始磨損，關節退化狀況仍存在，就需要再次補充以維持保護效果，並非「上癮」。'
    },
    {
      question: '健保可以給付玻尿酸嗎？',
      answer: '健保針對玻尿酸有嚴格規範：只能在醫院健保施打，需年滿 60 歲，經 X 光檢查確診為退化性膝關節炎，且藥物與在醫院持續復健治療 6 個月無效者，方可申請給付。若未符資格或希望使用長效型劑型，則需自費治療。'
    },
    {
      question: '打完玻尿酸可以馬上走路嗎？',
      answer: '可以。注射完後可正常行走、上下班，不影響日常生活。但建議 2 天內避免負重運動（如深蹲、爬山、長時間跑步），讓藥液在關節內均勻擴散與吸收。'
    }
  ]
},

{
  slug: 'shoulder-dilation',
  title: '肩關節擴張術',
  lastModified: '2026-01-25',
  tags: ['dilation'],
  subtitle: '五十肩救星，精準撐開沾黏、重拾活動力',
  description: '新竹五十肩治療推薦。針對頑固性沾黏與手舉不高，採用高解析超音波導引「肩關節擴張術」，將擴張液精準注入關節囊，有效撐開沾黏組織，大幅改善疼痛與活動角度。',
  image: '/images/treatments/f.webp',
  features: ['超音波導引', '撐開沾黏', '立即改善'],
  seoTitle: '新竹肩關節擴張術 - 五十肩/肩膀沾黏/手舉不高治療 | 宸新復健科',
  seoDescription: '新竹五十肩進階治療推薦。宸新復健科採用「肩關節擴張術」，利用高階超音波導引，精準將擴張液注入沾黏的肩關節囊中。針對手舉不高、夜間疼痛、長期復健卡關的患者，提供快速且顯著的改善效果。',
  keywords: ['新竹肩關節擴張術', '五十肩治療', '肩膀沾黏', '超音波導引注射', '手舉不高', '夜間肩膀痛', '新竹復健科', '肌骨超音波'],
  youtubeVideoId: '', // 若有相關衛教影片可填入 ID
  contentHtml: `
    <p>您是否深受<strong>五十肩</strong>困擾，手舉不高、無法扣內衣，甚至晚上睡覺壓到肩膀就痛醒？當一般的熱敷電療效果停滯，或是復健了很久角度卻卡住無法突破時，<strong>肩關節擴張術（Hydrodilatation）</strong>是復健科骨科醫師公認治療沾黏性肩關節囊炎（五十肩）的強效解方。</p>
    <br>
    <p>肩關節擴張術的原理，是利用液體的壓力將<strong>緊繃沾黏的肩關節囊「撐開」</strong>。然而，肩關節囊深且空間狹小，宸新復健科堅持拒絕憑手感的盲打，全療程採用<strong>高解析骨骼肌肉超音波導引</strong>，邊掃描邊打針，確保擴張液精準注入關節腔內，大幅提升治療成功率。</p>

    <div style="background-color: #fffbeb; border: 2px solid #fbbf24; border-radius: 1rem; padding: 1.5rem; margin: 2rem 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        <h2 style="color: #b45309; margin-top: 0; font-weight: bold; border-bottom: 2px solid #fcd34d; padding-bottom: 0.5rem; display: flex; align-items: center;">
            📢 為什麼五十肩需要「超音波導引」擴張術？
        </h2>
        
        <p style="font-size: 1.1rem; color: #78350f;">五十肩的病理核心是「關節囊沾黏縮小」。我們堅持使用醫學中心等級的頂級規格超音波，畫質解析度更佳，這對精準治療至關重要：</p>
        
        <ul style="list-style: none; padding: 0; margin-top: 1rem; color: #92400e;">
            <li style="margin-bottom: 1rem; display: flex; align-items: start;">
                <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">1</span>
                <div><strong>精準撐開沾黏：</strong> 醫師透過「第三隻眼」監控，確認針尖進入關節腔後，注入大量擴張液（食鹽水、葡萄糖或消炎藥）。在螢幕上可直接看到關節囊被液體撐開的瞬間，確保沾黏組織被有效分離。</div>
            </li>
            <li style="margin-bottom: 1rem; display: flex; align-items: start;">
                <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">2</span>
                <div><strong>避開神經血管：</strong> 肩膀周圍神經密布，透過超音波導引能清楚避開危險區域，並選擇阻力最小的路徑進針，大幅降低注射過程的疼痛與風險。</div>
            </li>
            <li style="margin-bottom: 0; display: flex; align-items: start;">
                <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">3</span>
                <div><strong>同步消炎止痛：</strong> 除了物理性撐開，醫師會視情況加入適量消炎藥劑，直接作用於發炎的關節囊內部，通常在治療後幾天內即可顯著<strong>改善疼痛跟活動度</strong>。</div>
            </li>
        </ul>
              <p><img src="/images/treatments/dilation/a.webp" alt="肩關節擴張超音波導引注射"></p>
    </div>
              <div class="my-8 flex justify-center">
    <iframe 
      width="315" 
      height="560" 
      src="https://www.youtube.com/embed/A-keqKDu7bQ" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen
      class="max-w-full rounded-xl shadow-lg border border-slate-700"
    ></iframe>
     </div>
    

    <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

    <h3>🔬 什麼是肩關節擴張術？作用機制</h3>
    <p>五十肩的正式名稱為「沾黏性肩關節囊炎」，想像原本<strong>寬鬆的碗（關節囊）</strong> ，肩膀骨頭是裡面的<strong>球</strong> ，因為碗變小還有發炎而黏在一起、縮水變緊，導致手臂卡住動彈不得。</p>
    <br>
    <p>肩關節擴張術（Hydrodilatation）是利用液體壓力進行的一種「微創鬆動術」，主要功能如下：</p>
    <ol>
        <li><strong>液壓擴張（撐開）：</strong> 注入約 20-40cc 的液體（通常為生理食鹽水混合麻醉藥），利用液體的體積強行將沾黏縮小的關節囊「撐大」，恢復關節內的活動空間。</li>
        <li><strong>消炎與潤滑：</strong> 藥液中含有抗發炎成分與潤滑劑，能快速緩解滑膜發炎，並潤滑乾澀的關節表面，減少活動時的摩擦痛。</li>
        <li><strong>打破沾黏循環：</strong> 疼痛減少後，患者敢於活動肩膀，進一步防止沾黏再次發生，打破「疼痛→不動→更沾黏」的惡性循環。</li>
    </ol>

    <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

    <h3>🎯 誰適合做肩關節擴張術？</h3>
    <p>此療程主要針對<strong>五十肩</strong>的患者。若您的肩膀問題屬於肌腱撕裂或鈣化，醫師會建議其他治療方式（如 PRP 或震波）。</p>

    <h4>常見適應症包括：</h4>
    <ul>
        <li><strong>頑固型五十肩：</strong> 復健治療超過 1-2 個月，關節活動角度（如手舉高、向後扣內衣）仍無明顯進步者。</li>
        <li><strong>夜間疼痛嚴重：</strong> 晚上睡覺時肩膀隱隱作痛，無法側睡，嚴重影響睡眠品質。</li>
        <li><strong>活動角度極度受限：</strong> 手臂無法抬高超過 90 度，日常生活（如洗頭、梳頭、穿衣）受到嚴重影響。</li>
        <li><strong>希望能快速改善：</strong> 工作或生活需求，無法等待漫長（通常需半年至一年）的自然恢復期者。</li>
    </ul>

    <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

    <h3>⚖️ 五十肩治療比一比：復健 vs. 擴張術 vs. 手術</h3>
    <p>面對沾黏的肩膀，不同的治療手段有不同的效率與介入程度。宸新復健科提供完整的階梯式治療。</p>

    <div style="overflow-x: auto; padding-bottom: 10px;">
        <table style="width: 100%; min-width: 600px; border-collapse: collapse; margin-top: 1rem;">
            <thead>
                <tr style="background-color: #0369a1; color: white;">
                    <th style="padding: 0.75rem; border: 1px solid #e5e7eb; text-align: left; white-space: nowrap;">治療項目</th>
                    <th style="padding: 0.75rem; border: 1px solid #e5e7eb; text-align: left; white-space: nowrap;">主要原理</th>
                    <th style="padding: 0.75rem; border: 1px solid #e5e7eb; text-align: left; white-space: nowrap;">恢復速度</th>
                    <th style="padding: 0.75rem; border: 1px solid #e5e7eb; text-align: left; white-space: nowrap;">特點</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 0.75rem; border: 1px solid #e5e7eb; font-weight: bold; color:rgb(116, 233, 239); white-space: nowrap;">純物理治療</td>
                    <td style="padding: 0.75rem; border: 1px solid #e5e7eb;">熱敷、電療、徒手治療</td>
                    <td style="padding: 0.75rem; border: 1px solid #e5e7eb;">慢 (需數月至半年)</td>
                    <td style="padding: 0.75rem; border: 1px solid #e5e7eb;">適合初期或症狀輕微者，需極大耐心與頻繁回診。</td>
                </tr>
                <tr>
                    <td style="padding: 0.75rem; border: 1px solid #e5e7eb; font-weight: bold; color: #b91c1c; white-space: nowrap;">
                         肩關節擴張術 🔥
                    </td>
                    <td style="padding: 0.75rem; border: 1px solid #e5e7eb;">液壓撐開、超音波導引</td>
                    <td style="padding: 0.75rem; border: 1px solid #e5e7eb;">快 (數週內顯著改善)</td>
                    <td style="padding: 0.75rem; border: 1px solid #e5e7eb;"><strong>CP值最高。</strong>免住院、免麻醉，精準撐開沾黏，立即改善角度。</td>
                </tr>
                <tr>
                    <td style="padding: 0.75rem; border: 1px solid #e5e7eb; font-weight: bold; color:rgb(181, 209, 247); white-space: nowrap;">關節授動手術</td>
                    <td style="padding: 0.75rem; border: 1px solid #e5e7eb;">全麻下強力拉開、微創開刀</td>
                    <td style="padding: 0.75rem; border: 1px solid #e5e7eb;">快 (術後需立即復健)</td>
                    <td style="padding: 0.75rem; border: 1px solid #e5e7eb;">需全身麻醉與住院，風險較高，通常為最後一線治療。</td>
                </tr>
            </tbody>
        </table>
        <div style="text-align: center; font-size: 0.8rem; color: #6b7280; margin-top: 5px; display: block; md:hidden;">
            (可左右滑動查看表格 👉)
        </div>
    </div>

    <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
        <h4 style="margin-top: 0; color: #0e7490;">💡 醫師的小叮嚀：治療後的黃金期</h4>
        <p style="margin-bottom: 0; color: #334155;">擴張術能幫您「打開」卡住的關節，但要維持這個角度，治療後兩週內的<a href="/treatments/manual" class="text-cyan-400 hover:underline">肩關節鬆動</a>與<strong>居家伸展運動</strong>至關重要。趁著關節鬆開、疼痛感降低時，積極進行爬牆運動與毛巾操，才能將治療效果最大化，避免沾黏復發。</p>
    </div>

    <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

    <h3>📝 治療流程與術後保養</h3>
    
    <h4>治療流程：</h4>
    <ol>
        <li><strong>醫師評估：</strong> 確認沾黏程度與排除旋轉肌袖斷裂等其他問題。</li>
        <li><strong>超音波定位：</strong> 側臥或坐姿，醫師掃描肩關節囊位置與周邊神經血管。</li>
        <li><strong>擴張注射：</strong> 局部麻醉後，在動態顯影下注入擴張液。過程中會感到肩膀內部有腫脹痠痛感，代表沾黏正在被撐開，此為正常現象。</li>
    </ol>

    <h4>術後注意事項：</h4>
    <ul>
        <li><strong>注射後反應：</strong> 擴張後的腫脹感通常會持續半天至一天，隨液體吸收後消失。</li>
        <li><strong>把握黃金期：</strong> 治療兩天後，即可開始溫和的肩關節活動度運動（如鐘擺運動即爬牆運動）。</li>
        <li><strong>規律復健：</strong> 建議搭配診所的徒手治療，針對被撐開後的關節囊進行軟組織放鬆與動作控制訓練。</li>
    </ul>

    <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

    <div style="background-color: #ecfdf5; padding: 2rem; border-radius: 1rem; margin-top: 3rem; text-align: center;">
        <h3 style="color: #047857; margin-top: 0;">👨‍⚕️ 別讓五十肩限制了您的生活！</h3>
        <p style="color: #334155; margin-bottom: 1.5rem;">五十肩雖然會自然痊癒，但過程長達一兩年且可能殘留後遺症。宸新復健科透過精準的超音波導引擴張術，幫您縮短痛苦的病程。幾天內有效改善疼痛與活動度，讓您重拾穿衣洗澡的輕鬆自在。</p>
        <p style="font-weight: bold; color: #059669;">立即預約評估，找回肩膀的自由！</p>
    </div>
  `,
  whyChooseUs: [
    '全程使用<strong>醫學中心等級超音波</strong>，畫質清晰。',
    '堅持<strong>超音波導引注射</strong>，邊掃邊注射，精準定位。',
    '複合式治療方案，結合擴張術與徒手復健，全方位解決五十肩沾黏。'
  ],
  treatmentFocus: [
    '<a href="/diseases/shoulder/frozen-shoulder" class="text-cyan-400 hover:underline">頑固型五十肩</a>🔍️',
    '夜間肩膀劇痛 (影響睡眠)。',
    '肩膀活動角度受限 (手舉不高/無法後扣)。'
  ],
  images: [],
  applicableConditions: ['五十肩', '沾黏性肩關節囊炎', '肩關節活動受限', '冷凍肩'],
  qaList: [
    {
      question: '做肩關節擴張術會很痛嗎？',
      answer: '注射前我們會進行局部麻醉。治療過程中，因為液體將沾黏的組織撐開，會有一種深層的「痠脹感」或「緊繃感」，大多數患者描述是可以忍受的範圍，且這代表沾黏正在被鬆解。'
    },
    {
      question: '擴張術要做幾次才有效？',
      answer: '這取決於沾黏的嚴重程度。輕中度患者通常 1-2 次治療即可感到顯著改善；重度沾黏者可能需要 3 次以上的療程，並需密切搭配徒手物理治療以維持效果。'
    },
    {
      question: '打完擴張術，五十肩就完全好了嗎？',
      answer: '擴張術是幫您「打開門」，後續還需要您「走出去」。手術能快速改善角度與疼痛，但後續必須靠積極的伸展運動與肌力訓練，才能維持角度並恢復肩膀的正常功能，防止沾黏復發。'
    }
  ]
},

{
  slug: 'ultrasound-guided-aspiration',
  title: '超音波導引關節抽積液/血腫',
  lastModified: '2026-01-31',
  subtitle: '精準導引解除「壓力鍋」，膝蓋積水、肌肉血腫的救星',
  description: '膝蓋腫得像麵龜？腳踝扭傷腫脹不退？肌肉撕裂瘀血散不掉？宸新復健科運用高解析超音波導引，精準抽吸關節積水與血腫。解決退化性關節炎腫脹、加速運動傷害復原，並有效預防肌肉鈣化，是安全、可視化的精準醫療。',
  image: '/images/treatments/i.webp',
  features: ['精準可視化', '立即減壓', '加速修復'],
  seoTitle: '新竹關節抽水/抽血腫 - 膝蓋積水/腳踝扭傷/肌肉撕裂 | 宸新復健科',
  seoDescription: '新竹超音波導引抽吸推薦。膝蓋積水、腳踝嚴重扭傷血腫、肌肉撕裂傷必看。宸新復健科透過影像導引，將發炎積液或瘀血抽出，解除組織壓力，避免沾黏與鈣化，並提供關節積水顏色分析，精準診斷病因。',
  keywords: ['膝蓋積水', '關節抽水', '超音波導引', '腳踝扭傷', '肌肉撕裂', '血腫抽吸', '貝克氏囊腫', '滑囊炎', '新竹復健科'],
  youtubeVideoId: '', // 若有相關抽吸影片可填入
  contentHtml: `
    <p>當膝蓋腫得像「麵龜」無法彎曲，或是腳踝扭傷後腫脹處像一顆水球，甚至肌肉拉傷後出現巨大的瘀青硬塊，這些都是<strong>「積液」</strong>或<strong>「血腫」</strong>在作怪。這時候，組織內部就像一個壓力鍋，不僅造成劇烈脹痛，更會阻礙血液循環與修復。</p>
    <br>
    <p>傳統觀念常認為「積水不能抽，會越抽越多」，這其實是錯誤的迷思。在現代醫學中，透過<strong>高解析超音波導引抽吸</strong>，我們能將這些有害的發炎物質或陳舊瘀血「精準移除」。這不僅能立即緩解疼痛，更是加速組織修復、預防沾黏與鈣化的關鍵步驟。</p>

    <div style="background-color: #fffbeb; border: 2px solid #fbbf24; border-radius: 1rem; padding: 1.5rem; margin: 2rem 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        <h2 style="color: #b45309; margin-top: 0; font-weight: bold; border-bottom: 2px solid #fcd34d; padding-bottom: 0.5rem; display: flex; align-items: center;">
            👁️ 為什麼「超音波導引」抽吸是黃金標準？
        </h2>
        
        <p style="font-size: 1.1rem; color: #78350f;">過去醫師靠手感「盲抽」，容易因為針頭沒對準積水處而抽不到，或是誤傷神經血管。宸新復健科全面採用超音波導引，將治療過程「視覺化」，帶來三大優勢：</p>
        
        <ul style="list-style: none; padding: 0; margin-top: 1rem; color: #92400e;">
            <li style="margin-bottom: 1rem; display: flex; align-items: start;">
                <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">1</span>
                <div><strong>精準定位，抽得乾淨：</strong> 超音波能清楚顯示積水或血腫的深度與範圍。醫師能看著螢幕，將針尖引導至積液最深處，將髒水抽吸乾淨，避免殘留。</div>
            </li>
            <li style="margin-bottom: 1rem; display: flex; align-items: start;">
                <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">2</span>
                <div><strong>安全性高，避開地雷：</strong> 關節周圍常佈滿血管與神經。透過影像導引，我們能規劃安全路徑，避開重要組織，大幅降低出血或神經損傷風險。</div>
            </li>
            <li style="margin-bottom: 0; display: flex; align-items: start;">
                <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">3</span>
                <div><strong>診斷病因 (看顏色)：</strong> 抽出來的液體是診斷的重要依據。透過觀察液體的顏色、黏稠度，醫師能判斷是單純退化、痛風結晶、細菌感染還是韌帶斷裂造成的出血。</div>
            </li>
        </ul>
    </div>
  <div style="text-align: center;">
  門診實際超音波導引抽肩膀積水，看在螢幕清楚<strong>看到針尖</strong>，安全的將水<strong>抽乾淨</strong>。
</div>
        <div class="my-8 flex justify-center">
    <iframe 
      width="315" 
      height="560" 
      src="https://www.youtube.com/embed/E-xuUAarxbA" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen
      class="max-w-full rounded-xl shadow-lg border border-slate-700"
    ></iframe>
     </div>

    <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

    <h3>🩺 三大常見適應症：什麼時候需要抽？</h3>
    <p>並非所有的腫脹都需要抽吸，但在以下三種情況，超音波導引抽吸是極為重要的治療手段：</p>

    <h4> <strong>1. 急性膝關節積水 (退化性關節炎/痛風)</strong></h4>
    <p>當退化性關節炎急性發作時，滑膜會過度分泌發炎性的關節液（俗稱積水）。</p>
    <ul>
        <li><strong>為什麼要抽？</strong> 這些積水充滿了發炎物質，會像酸液一樣<strong>侵蝕軟骨</strong>。且大量積水會撐開關節囊，造成劇痛並導致大腿肌肉萎縮（關節源性肌肉抑制）。</li>
        <li><strong>治療效益：</strong> 抽出發炎積液後，關節內壓力瞬間釋放，疼痛通常能改善 <strong>50% 以上</strong>，並為後續注射（如玻尿酸或 PRP）騰出空間，避免被積水稀釋。</li>
    </ul>

    <h4><strong>2. 嚴重腳踝扭傷 (積血)</strong></h4>
    <p>嚴重的腳踝翻船往往伴隨著韌帶撕裂，導致微血管破裂，血液流進關節腔內形成「關節積血」。</p>
    <ul>
        <li><strong>為什麼要抽？</strong> 血液在關節腔內是非常強的發炎刺激物，且容易造成關節沾黏，導致日後腳踝僵硬、活動度受限。</li>
        <li><strong>治療效益：</strong> 在受傷後黃金期內（通常是24-72小時內液化期），透過超音波導引將關節內的瘀血抽出，能大幅縮短消腫時間，讓患者更快開始復健運動，過太久血液凝固就抽不出來了。</li>
    </ul>

    <h4> <strong>3. 肌肉撕裂傷 (巨大的血腫 </strong>)</h4>
    <p>運動員或意外撞擊常造成肌肉斷裂（如小腿腓腸肌、大腿股四頭肌），形成巨大的血塊包在肌肉筋膜內。</p>
    <ul>
        <li><strong>為什麼要抽？</strong> 這是最關鍵的適應症！如果肌肉內的大血塊沒有排出，身體吸收速度極慢，最後容易發生<strong>「骨化性肌炎」</strong>，也就是血塊變成了骨頭（鈣化），導致肌肉永久性纖維化與僵硬。</li>
        <li><strong>治療效益：</strong> 透過粗針頭將濃稠的血腫抽出，能直接預防肌肉鈣化，是保存肌肉功能的重要處置。</li>
    </ul>

    <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

    <h3>🔍 抽出來的液體告訴我們什麼？(液體顏色分析)</h3>
    <p>在宸新復健科，我們不僅是執行「抽」的動作，更重視「看」的診斷。醫師會向您解說抽出來的液體代表什麼意義：</p>

    <div style="overflow-x: auto; padding-bottom: 10px;">
        <table style="width: 100%; min-width: 600px; border-collapse: collapse; margin-top: 1rem;">
            <thead>
                <tr style="background-color: #0369a1; color: white;">
                    <th style="padding: 0.75rem; border: 1px solid #e5e7eb; text-align: left;">液體顏色</th>
                    <th style="padding: 0.75rem; border: 1px solid #e5e7eb; text-align: left;">常見原因</th>
                    <th style="padding: 0.75rem; border: 1px solid #e5e7eb; text-align: left;">臨床意義</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 0.75rem; border: 1px solid #e5e7eb; font-weight: bold; color: #ca8a04;">淡黃色/透明 (清澈)</td>
                    <td style="padding: 0.75rem; border: 1px solid #e5e7eb;">退化性關節炎、過度使用</td>
                    <td style="padding: 0.75rem; border: 1px solid #e5e7eb;">典型的滑膜發炎。抽出後通常注射類固醇或玻尿酸即可改善。</td>
                </tr>
                <tr>
                    <td style="padding: 0.75rem; border: 1px solid #e5e7eb; font-weight: bold; color: #dc2626;">鮮紅色/暗紅色 (血水)</td>
                    <td style="padding: 0.75rem; border: 1px solid #e5e7eb;">韌帶斷裂、骨折、肌肉撕裂</td>
                    <td style="padding: 0.75rem; border: 1px solid #e5e7eb;">代表有組織創傷。若在腳扭傷抽到血，暗示韌帶傷勢較重，需更積極保護。</td>
                </tr>
                <tr>
                    <td style="padding: 0.75rem; border: 1px solid #e5e7eb; font-weight: bold; color: #facc15;">混濁黃色/乳白色</td>
                    <td style="padding: 0.75rem; border: 1px solid #e5e7eb;">痛風、假性痛風</td>
                    <td style="padding: 0.75rem; border: 1px solid #e5e7eb;">液體內含有尿酸結晶。通常痛感極其劇烈。</td>
                </tr>
                <tr>
                    <td style="padding: 0.75rem; border: 1px solid #e5e7eb; font-weight: bold; color: #e5e7eb;">乳白色/黃綠色</td>
                    <td style="padding: 0.75rem; border: 1px solid #e5e7eb;">化膿性關節炎 (細菌感染)</td>
                    <td style="padding: 0.75rem; border: 1px solid #e5e7eb;"><strong>緊急狀況！</strong> 需立即轉診進行細菌培養與抗生素治療，不可隨意注射藥物。</td>
                </tr>
            </tbody>
        </table>
    </div>
            <p><img src="/images/treatments/aspiration/a.webp" alt="超音波導引抽積液比較"></p>
    <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

    <h3>🛠️ 治療流程與術後照護</h3>
    
<div style="margin-top: 2rem; color: #1e293b;">
        <div style="margin-bottom: 2rem; background-color: #f8fafc; padding: 1.5rem; border-radius: 0.75rem;">
            <h4 style="color: #0891b2; margin-top: 0; display: flex; align-items: center;">
                <span style="background: #0891b2; color: white; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; font-size: 0.9rem;">1</span>
                治療過程
            </h4>
            <ol style="line-height: 1.8;">
                <li><strong>超音波評估：</strong> 確認積液位置、總量與性質。</li>
                <li><strong>無菌操作：</strong> 嚴格消毒皮膚，確保無感染風險。</li>
                <li><strong>動態導引抽吸：</strong> 在超音波螢幕監控下，針頭精準進入積液腔，您會親眼看到積水/血腫逐漸消失。</li>
                <li><strong>必要時注射：</strong> 抽吸完畢後，視情況原針頭直接注射消炎藥物或增生療法，不需挨第二針。</li>
            </ol>
        </div>

        <div style="background-color: #f8fafc; padding: 1.5rem; border-radius: 0.75rem;">
            <h4 style="color: #0891b2; margin-top: 0; display: flex; align-items: center;">
                <span style="background: #0891b2; color: white; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; font-size: 0.9rem;">2</span>
                術後照護
            </h4>
            <ul style="line-height: 1.8;color: #1e293b;">
                <li><strong>加壓止血：</strong> 抽吸處需按壓 5-10 分鐘。</li>
                <li><strong>適度冰敷：</strong> 術後 24 小時內可冰敷減輕針孔不適。</li>
                <li><strong>避免碰水：</strong> 針孔處建議當天保持乾燥，貼上防水貼布。</li>
                <li><strong>休息與觀察：</strong> 避免劇烈運動。若抽吸處再次快速腫脹，可能是內部仍有出血，請回診評估。</li>
            </ul>
        </div>
    </div>

    <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 2rem 0;">
        <h4 style="margin-top: 0; color: #0e7490;">💡 醫師的小叮嚀：抽水只是第一步</h4>
        <p style="margin-bottom: 0; color: #334155;">「抽積水」是為了緩解症狀與避免併發症，但<strong>並非治療疾病的根本</strong>。如果退化性關節炎沒有保養、韌帶受傷沒有修復，積水確實可能再產生。因此，抽吸後配合<a href="/treatments/prp" class="text-cyan-400 hover:underline">PRP 增生療法</a>修復組織，或是<a href="/treatments/manual" class="text-cyan-400 hover:underline">徒手運動治療</a>矯正力學結構，才是根治之道。</p>
    </div>

    <div style="background-color: #ecfdf5; padding: 2rem; border-radius: 1rem; margin-top: 3rem; text-align: center;">
        <h3 style="color: #047857; margin-top: 0;">👨‍⚕️ 別讓積水/血腫阻礙您的復原之路！</h3>
        <p style="color: #334155; margin-bottom: 1.5rem;">面對腫脹，您不需要忍耐。宸新復健科運用先進的超音波導引技術，為您精準「減壓」，看見積水消失的瞬間，疼痛也隨之離去。</p>
        <p style="font-weight: bold; color: #059669;">立即預約超音波檢查，讓專業團隊為您精準診斷！</p>
    </div>
  `,
  whyChooseUs: [
    '全療程<strong>高解析超音波導引</strong>，拒絕盲目穿刺。',
    '精準鑑別診斷：透過積液性質分析病因（痛風/感染/創傷）。',
    '一站式治療：抽吸後可立即結合注射治療，減少進針次數。'
  ],
  treatmentFocus: [
    '膝蓋積水 (退化性關節炎/半月板損傷)。',
    '巨大血腫 (肌肉撕裂傷/嚴重挫傷)。',
    '貝克氏囊腫與滑囊炎。'
  ],
  images: [],
  applicableConditions: ['退化性關節炎', '腳踝扭傷', '肌肉撕裂傷', '痛風', '貝克氏囊腫', '滑囊炎'],
  qaList: [
    {
      question: '膝蓋積水抽了會不會「越抽越多」？',
      answer: '這是一個常見的誤解。積水是因為關節內在「發炎」才產生，並不是因為「抽」才變多。相反地，不將發炎的積水抽出，發炎物質會持續刺激滑膜，反而造成更多積水與軟骨破壞。抽水後若又腫起來，代表內部的發炎問題（如磨損、撕裂）尚未解決，需針對病因進一步治療。'
    },
    {
      question: '抽血腫或積水會很痛嗎？',
      answer: '其實抽吸的過程通常比「腫脹本身」還不痛。因為積水造成的內部高壓是疼痛主因。宸新復健科使用超音波導引，能避開神經並快狠準地進入囊腔，當積液被抽出、壓力釋放的那一刻，大部分患者感到的反而是「舒緩」與「輕鬆」。'
    },
    {
      question: '肌肉拉傷瘀血如果不抽會怎樣？',
      answer: '小的瘀青身體會自行吸收，但若是肌肉層內的大型血腫，身體吸收非常慢。若血液長期滯留，容易導致纖維化沾黏，甚至發生「骨化性肌炎」（肌肉內長骨頭），造成永久性的活動角度受限與疼痛。因此，大血腫建議盡早由醫師評估抽吸。'
    },
    {
      question: '積水如果不抽會怎樣？它會自己好嗎？',
      answer: '如果是極少量的積水，身體確實有機會自行吸收。但若是明顯腫脹或積血，不抽出來主要有三大危害：1.加速軟骨破壞：發炎的積水就像「酸液」，裡面含有會分解軟骨的酵素，泡久了軟骨退化會更快。2. 肌肉快速萎縮：關節內的壓力會透過神經反射抑制肌肉用力，導致大腿肌肉迅速萎縮、膝蓋無力。3. 造成沾黏與鈣化：積血若久未處理，容易導致關節囊沾黏僵硬，甚至演變成鈣化，造成永久性的活動角度受限。'
    },
    {
      question: '是不是我少喝一點水，膝蓋就不會積水了？',
      answer: '完全錯誤，請勿嘗試！關節積液是「發炎反應」產生的組織液，跟您喝下去的水量沒有直接關係。刻意少喝水反而會導致身體脫水，讓腎臟受損，且血液變濃稠更不利於修復。請維持正常飲水，解決發炎才是重點。'
    },
    {
      question: '把積水抽掉，會不會把身體的營養都抽掉了？',
      answer: '不會。我們抽出的通常是「病理性的發炎積液」，這些髒水裡面充滿了發炎物質和會破壞軟骨的酵素，與健康的關節液不同。把這些有害的「髒水」抽掉，反而能保護剩下的軟骨。且一次抽吸的蛋白質流失量極微，透過日常飲食馬上就能補回，不用擔心。'
    }
  
  ]
},

{
  slug: 'nerve-hydrodissection',
  title: '超音波導引神經解套注射',
  lastModified: '2026-02-01',
  subtitle: '鬆開神經枷鎖，修復受損的關鍵',
  description: '手指發麻、腳底刺痛卻找不出原因？這可能是神經受到周邊組織壓迫。宸新復健科運用高解析超音波導引，進行「神經解套注射」，以低濃度葡萄糖水撐開沾黏空間，並提供神經修復養分。包含腕隧道症候群、跗骨隧道症候群及關節積水抽吸，皆能精準處理。',
  image: '/images/treatments/j.webp',
  features: ['神經修復', '非類固醇', '精準導引'],
  seoTitle: '新竹神經解套注射 - 腕隧道/跗骨隧道/關節抽水 | 宸新復健科',
  seoDescription: '新竹神經解套注射推薦。針對手麻腳麻、腕隧道症候群與跗骨隧道症候群，宸新復健科採用超音波導引神經解套術(Hydrodissection)。利用5%葡萄糖水剝離沾黏神經並供給養分，同時提供精準關節抽水服務，解決神經壓迫與關節腫脹問題。',
  keywords: ['神經解套', '新竹復健科', '腕隧道症候群', '跗骨隧道症候群', '關節抽水', '超音波導引', '手麻治療', '腳底刺痛'],
  youtubeVideoId: '', // 若有相關影片可填入
  contentHtml: `
    <p>你是否有過這種經驗：半夜睡覺手麻到醒過來，甩一甩才舒服一點？或是腳底莫名刺痛、灼熱，被當成足底筋膜炎治療許久卻不見起色？這些症狀的根源，往往不是肌肉或骨頭，而是<strong>「周邊神經夾擠」</strong>。</p>
    <br>
    <p>當神經在通過骨頭、韌帶或肌肉的狹窄隧道時，若因過度使用、受傷或發炎腫脹而受到壓迫，就會像被石頭壓住的水管一樣，導致缺血、缺氧，進而產生麻木、刺痛或無力感。傳統治療常依賴止痛藥或開刀減壓，而現代復健醫學提供了更安全、非手術的選擇——<strong>「超音波導引神經解套注射」</strong>。</p>

    <div style="background-color: #f0fdf4; border: 2px solid #34d399; border-radius: 1rem; padding: 1.5rem; margin: 2rem 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        <h2 style="color: #047857; margin-top: 0; font-weight: bold; border-bottom: 2px solid #6ee7b7; padding-bottom: 0.5rem; display: flex; align-items: center;">
            💉 什麼是神經解套注射？
        </h2>
        
        <p style="font-size: 1.1rem; color: #064e3b;">簡單來說，就是用液體將被夾住的神經「沖開」並「鬆綁」。</p>
        <p style="color: #065f46;">我們使用<strong>低濃度葡萄糖水 (5% Glucose)</strong> 作為注射液，這在醫學上具有雙重作用：</p>
        
        <ul style="list-style: none; padding: 0; margin-top: 1rem; color: #115e59;">
            <li style="margin-bottom: 1rem; display: flex; align-items: start;">
                <span style="background: #10b981; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">1</span>
                <div><strong>物理性解套：</strong> 利用液體的壓力，將神經與周圍沾黏的筋膜、韌帶強行分開，創造出緩衝空間，解除神經受到的物理壓迫。</div>
            </li>
            <li style="margin-bottom: 1rem; display: flex; align-items: start;">
                <span style="background: #10b981; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">2</span>
                <div><strong>藥理性修復 ：</strong> 研究發現，5% 葡萄糖水能降低神經發炎因子 (TRPV-1)，阻斷痛覺傳導，並提供神經細胞修復所需的養分，改善神經缺血缺氧的狀態。</div>
            </li>
        </ul>
        <p style="font-size: 0.95rem; color: #059669; font-weight: bold;">※ 此療法不含類固醇，不會造成肌腱萎縮或全身性副作用，是極為安全的綠色療法，但過度發炎還是需要加一點類固醇。</p>
    </div>

    <h3>👁️ 為什麼「超音波導引」是絕對必要？</h3>
    <p>神經就像一條細緻的電線，肉眼看不見，且與血管並行。若沒有影像導引進行「盲打」，極有可能誤傷神經造成永久性損傷，或打錯位置導致無效。</p>
    <p>宸新復健科堅持全療程使用<strong>高解析肌肉骨骼超音波</strong>：</p>
    <ol>
        <li><strong>精準定位：</strong> 超音波能清楚顯示神經腫脹的位置（截面積變大），確認卡壓點。</li>
        <li><strong>即時監控：</strong> 醫師能看著針尖緩緩接近神經，將藥水精準地注射在神經與周邊組織的<strong>介面之間</strong>，將神經360度完整包覆剝離，而不觸碰到神經本體。</li>
        <li><strong>動態評估：</strong> 注射後可立即檢查神經是否恢復滑動空間。</li>
    </ol>
         <h3>腕隧道症候群超音波導引解套，撐開<strong>正中神經</strong>的壓迫。</h3>
         <p><img src="/images/treatments/nerve/a.webp" alt="腕隧道症候群超音波導引解套"></p>
    <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

    <h3>🩺 常見適應症與治療重點</h3>

    <h4>1. 腕隧道症候群</h4>
    <p>這是最常見的神經壓迫，主因是手腕橫韌帶增厚，壓迫到<strong>正中神經</strong>。</p>
    <ul>
        <li><strong>症狀：</strong> 拇指、食指、中指發麻，半夜容易麻醒，甩手會改善。嚴重時大魚際肌（手掌肉）會萎縮無力。</li>
        <li><strong>治療關鍵：</strong> 透過超音波導引，將葡萄糖水注入橫韌帶與正中神經之間，撐開沾黏，取代傳統手術劃開韌帶的效果。適合輕中度患者，通常治療 3-5 次有顯著改善。</li>
    </ul>
    

    <h4>2. 跗骨隧道症候群</h4>
    <p>這是一個常被誤診為「足底筋膜炎」的疾病。問題出在腳踝內側的<strong>脛後神經</strong>受到壓迫。</p>
    <ul>
        <li><strong>症狀：</strong> 腳底（特別是前腳掌或足跟）有燒灼感、刺痛、麻木，久站久走後加劇。與足底筋膜炎不同的是，它通常帶有神經症狀（麻、電），且按壓腳踝內側會引發放射痛。</li>
        <li><strong>治療關鍵：</strong> 因腳踝內側血管神經豐富，盲打風險極高。超音波能精確避開脛後動脈，將藥水注入屈肌支持帶下方，釋放受壓迫的脛後神經分支。</li>
    </ul>

    <h4>3. 肘隧道症候群</h4>
    <p>俗稱「手機肘」，尺神經在手肘處受壓迫。症狀為無名指與小指發麻。神經解套能有效緩解手肘內側的沾黏。</p>


    <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

    <h3>⚖️ 治療比較：神經解套 vs. 類固醇 vs. 手術</h3>
    
    <div style="overflow-x: auto; padding-bottom: 10px;">
        <table style="width: 100%; min-width: 600px; border-collapse: collapse; margin-top: 1rem;">
            <thead>
                <tr style="background-color: #0f766e; color: white;">
                    <th style="padding: 0.75rem; border: 1px solid #cbd5e1;">治療方式</th>
                    <th style="padding: 0.75rem; border: 1px solid #cbd5e1;">主要成分</th>
                    <th style="padding: 0.75rem; border: 1px solid #cbd5e1;">作用原理</th>
                    <th style="padding: 0.75rem; border: 1px solid #cbd5e1;">適合對象</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 0.75rem; border: 1px solid #cbd5e1; font-weight: bold; color: #0d9488;">神經解套注射</td>
                    <td style="padding: 0.75rem; border: 1px solid #cbd5e1;">5% 葡萄糖水 (D5W)</td>
                    <td style="padding: 0.75rem; border: 1px solid #cbd5e1;">物理剝離沾黏 + 神經營養修復</td>
                    <td style="padding: 0.75rem; border: 1px solid #cbd5e1;">神經夾擠、慢性神經痛、不適合打類固醇者</td>
                </tr>
                <tr>
                    <td style="padding: 0.75rem; border: 1px solid #cbd5e1; font-weight: bold; color: #b45309;">類固醇注射</td>
                    <td style="padding: 0.75rem; border: 1px solid #cbd5e1;">皮質類固醇</td>
                    <td style="padding: 0.75rem; border: 1px solid #cbd5e1;">強力抗發炎、消腫</td>
                    <td style="padding: 0.75rem; border: 1px solid #cbd5e1;">急性期劇烈疼痛、滑囊炎、腱鞘炎</td>
                </tr>
                <tr>
                    <td style="padding: 0.75rem; border: 1px solid #cbd5e1; font-weight: bold; color:rgb(245, 69, 69);">減壓手術</td>
                    <td style="padding: 0.75rem; border: 1px solid #cbd5e1;">無</td>
                    <td style="padding: 0.75rem; border: 1px solid #cbd5e1;">切開組織，釋放壓力</td>
                    <td style="padding: 0.75rem; border: 1px solid #cbd5e1;">肌肉已萎縮、注射治療無效的重度患者</td>
                </tr>
            </tbody>
        </table>
    </div>

    <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

    <h3>📝 治療流程與常見問題</h3>
    
    <h4>治療頻率是多久？</h4>
    <p>神經修復需要時間。通常建議 <strong>每 2 週注射一次</strong>，完整療程約需 <strong>3次</strong>。醫師會根據超音波影像中神經消腫的程度來調整次數。</p>

    <h4>注射後會痛嗎？</h4>
    <p>由於使用的是細針，疼痛感輕微。但因為液體注入會撐開組織，治療當下與結束後可能會有一種「痠脹感」或短暫的麻感，這是藥水正在剝離沾黏的正常現象，通常 1-2 天內會緩解。</p>

    <div style="background-color: #ecfdf5; padding: 2rem; border-radius: 1rem; margin-top: 3rem; text-align: center;">
        <h3 style="color: #047857; margin-top: 0;">👨‍⚕️ 別讓神經痛限制了您的人生</h3>
        <p style="color: #334155; margin-bottom: 1.5rem;">神經受損是不可逆的，越早處理，恢復機率越高。如果您長期受手麻、腳麻困擾，或有關節腫脹抽水的需求，請不要忍耐。</p>
        <p style="font-weight: bold; color: #059669;">來宸新復健科，用超音波找出病灶，精準解套，重拾無痛生活！</p>
    </div>
  `,
  whyChooseUs: [
    '堅持<strong>超音波導引</strong>，精準避開血管與神經本體，安全性高。',
    '使用高濃度葡萄糖水，提供神經養分，無肌腱斷裂風險。',
    '具備關節積水鑑別診斷與抽吸技術，全面解決壓迫源頭。'
  ],
  treatmentFocus: [
    '<a href="/diseases/hand/carpal-tunnel-syndrome" class="text-cyan-400 hover:underline">腕隧道症候群 </a>🔍️',
    '<a href="/diseases/ankle/tarsal-tunnel-syndrome" class="text-cyan-400 hover:underline">跗骨隧道症候群</a>🔍️ ',
    '<a href="/diseases/elbow/ulnar-nerve-entrapment" class="text-cyan-400 hover:underline">肘隧道症候群</a>🔍️。',
  ],
  images: [],
  applicableConditions: ['腕隧道症候群', '跗骨隧道症候群', '肘隧道症候群', '關節積水', '貝克氏囊腫', '術後神經沾黏', '梨狀肌症候群'],
  qaList: [
    {
      question: '為什麼一定要用「超音波導引」？不能直接打嗎？',
      answer: '絕對不建議盲打。神經就像是一條極細的電線，且通常緊鄰著血管。沒有超音波導引的「盲打」不僅無法確保藥水準確注入「神經與組織的介面」來達到剝離效果，更有極高風險誤傷神經造成永久性損傷，或是刺破血管導致血腫。超音波導引是這項治療的「眼睛」，確保安全與精準。'
    },
    {
      question: '神經解套注射的治療原理是什麼？',
      answer: '主要包含物理與生化雙重機制：1. 物理性解套：利用液體壓力將被周邊組織沾黏、夾擠的神經「撐開」，創造緩衝空間，恢復神經的血液循環。  2. 神經修復：使用5%葡萄糖水，能阻斷神經上的痛覺受器（TRPV-1），減少疼痛訊號，並提供神經細胞修復所需的能量養分。'
    },
    {
      question: '神經壓迫如果一直不處理會怎樣？',
      answer: '神經損傷是不可逆的過程。初期可能只是手麻腳麻，甩一甩會好；中期會演變成持續性的刺痛與感覺異常；若拖到後期，神經支配的肌肉會開始萎縮、無力（例如腕隧道症候群導致大魚際肌凹陷）。一旦發生肌肉萎縮，即便後來開刀減壓，功能也難以完全恢復。因此建議在出現麻痛症狀初期就介入治療。'
    }
  ]
},

{
  slug: 'steroid-injection',
  title: '超音波導引類固醇注射',
  lastModified: '2026-01-25',
  tags: ['steroid'],
  subtitle: '急性發炎的滅火器，精準止痛不傷身',
  description: '破除類固醇迷思，宸新復健科採用高解析超音波導引，將低劑量藥物精準注入發炎組織周邊，避開肌腱本體。針對媽媽手、板機指與滑囊炎，提供最快速的消炎止痛選擇。',
  image: '/images/treatments/g.webp',
  features: ['超音波導引', '強力消炎', '快速止痛'],
  seoTitle: '新竹類固醇注射 - 媽媽手/板機指/滑囊炎治療 | 宸新復健科',
  seoDescription: '新竹超音波導引注射推薦。針對急性疼痛、肌腱炎與神經壓迫，宸新復健科提供精準類固醇注射治療。透過影像導引避開神經血管與肌腱實質，大幅降低副作用風險，是安全有效的「局部」消炎療法。',
  keywords: ['新竹類固醇', '局部注射', '媽媽手治療', '板機指', '超音波導引', '滑囊炎', '腕隧道症候群', '足底筋膜炎'],
  youtubeVideoId: '', // 若有相關衛教影片可填入 ID
  contentHtml: `
    <p>當手腕痛到無法轉門把、手指卡住彈不回去，或是肩膀痛到無法側睡時，這些<strong>急性發炎</strong>的症狀往往讓人痛不欲生。當口服消炎藥效果緩慢，復健治療又還沒跟上進度時，<strong>局部類固醇注射</strong>是醫學上公認最快速、最強效的「發炎滅火器」。</p>
    <br>
    <p>許多人聽到「類固醇」就聞之色變，擔心會有月亮臉、水牛肩等副作用。其實，復健科使用的<strong>局部注射</strong>與口服全身性類固醇完全不同。重點在於<strong>「打得準」</strong>與<strong>「劑量對」</strong>。宸新復健科堅持全療程採用<strong>高解析超音波導引</strong>，讓醫師能精準辨識發炎的腱鞘或滑囊，將藥物準確送到病灶，避免誤傷肌腱。</p>

    <div style="background-color: #fffbeb; border: 2px solid #fbbf24; border-radius: 1rem; padding: 1.5rem; margin: 2rem 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        <h2 style="color: #b45309; margin-top: 0; font-weight: bold; border-bottom: 2px solid #fcd34d; padding-bottom: 0.5rem; display: flex; align-items: center;">
            📢 為什麼類固醇一定要用「超音波導引」？
        </h2>
        
        <p style="font-size: 1.1rem; color: #78350f;">傳統的「盲打」容易將類固醇打入肌腱內部或皮下脂肪層，這正是造成肌腱斷裂或皮膚白斑的主因。宸新復健科透過精準影像導引，確保安全性：</p>
        
        <ul style="list-style: none; padding: 0; margin-top: 1rem; color: #92400e;">
            <li style="margin-bottom: 1rem; display: flex; align-items: start;">
                <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">1</span>
                <div><strong>保護肌腱：</strong> 透過螢幕即時顯像，醫師能確保針尖位於肌腱外層的「腱鞘」或「滑囊」內，絕對避免將藥物直接打進脆弱的肌腱纖維中，大幅降低肌腱脆化斷裂風險。</div>
            </li>
            <li style="margin-bottom: 1rem; display: flex; align-items: start;">
                <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">2</span>
                <div><strong>避開神經血管：</strong> 如腕隧道症候群的注射，神經與血管緊密相鄰。超音波導引能清楚避開正中神經，確保每一針都安全無虞。</div>
            </li>
            <li style="margin-bottom: 0; display: flex; align-items: start;">
                <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">3</span>
                <div><strong>極少量高效能：</strong> 因為打得準，只需要極低劑量的類固醇就能達到極佳的消炎效果，將副作用降到最低。</div>
            </li>
        </ul>
    </div>
                <div class="my-8 flex justify-center">
    <iframe 
      width="315" 
      height="560" 
      src="https://www.youtube.com/embed/A-keqKDu7bQ" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen
      class="max-w-full rounded-xl shadow-lg border border-slate-700"
    ></iframe>
     </div>

    <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

    <h3>🔬 類固醇如何治療？作用機制</h3>
    <p>類固醇被稱為「美國仙丹」，是因為它具有強大的抗發炎能力。在復健科的應用中，我們將其視為針對局部的精準治療：</p>
    <ol>
        <li><strong>強力抗發炎：</strong> 阻斷發炎介質的釋放，快速消除紅、腫、熱、痛的反應。</li>
        <li><strong>消除腫脹：</strong> 針對神經壓迫（如腕隧道症候群）或滑囊積水，類固醇能快速消腫，解除對神經的壓迫。</li>
        <li><strong>抑制沾黏：</strong> 在發炎早期介入，可以預防組織因長期發炎而產生纖維化沾黏。</li>
    </ol>

    <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

    <h3>🎯 誰適合打類固醇？適應症範圍</h3>
    <p>類固醇注射主要針對<strong>急性發炎期</strong>且<strong>疼痛劇烈</strong>的患者，或是長期復健效果不彰的頑固性疼痛。</p>

    <h4>常見適應症包括：</h4>
    <ul>
        <li><strong>手指/手腕疼痛：</strong> <a href="/diseases/hand/trigger-finger" class="text-cyan-400 hover:underline">板機指（手指卡住）</a>、
        <a href="/diseases/hand/mommy-thumb" class="text-cyan-400 hover:underline">媽媽手</a>、
        <a href="/diseases/hand/carpal-tunnel-syndrome" class="text-cyan-400 hover:underline">腕隧道症候群</a>。</li>
        <li><strong>肩膀疼痛：</strong> <a href="/diseases/shoulder/shoulder-impingement-syndrome" class="text-cyan-400 hover:underline">肩夾擠症候群</a>、
        <a href="/diseases/shoulder/calcific-tendinitis" class="text-cyan-400 hover:underline">鈣化性肌腱炎</a>、
        <a href="/diseases/shoulder/frozen-shoulder" class="text-cyan-400 hover:underline">急性五十肩（劇痛期）</a>。</li>
    </ul>

    <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

    <h3>⚖️ 類固醇 vs. PRP vs. 玻尿酸：比較表</h3>
    <p>不同的針劑有不同的適應症，類固醇並非萬能，但在「急性消炎」上具有不可取代的地位。</p>

    <div style="overflow-x: auto; padding-bottom: 10px;">
        <table style="width: 100%; min-width: 600px; border-collapse: collapse; margin-top: 1rem;">
            <thead>
                <tr style="background-color: #0369a1; color: white;">
                    <th style="padding: 0.75rem; border: 1px solid #e5e7eb; text-align: left; white-space: nowrap;">治療項目</th>
                    <th style="padding: 0.75rem; border: 1px solid #e5e7eb; text-align: left; white-space: nowrap;">主要作用</th>
                    <th style="padding: 0.75rem; border: 1px solid #e5e7eb; text-align: left; white-space: nowrap;">起效速度</th>
                    <th style="padding: 0.75rem; border: 1px solid #e5e7eb; text-align: left; white-space: nowrap;">特點</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 0.75rem; border: 1px solid #e5e7eb; font-weight: bold; color:rgb(116, 233, 239); white-space: nowrap;">類固醇</td>
                    <td style="padding: 0.75rem; border: 1px solid #e5e7eb;">強力消炎、消腫止痛</td>
                    <td style="padding: 0.75rem; border: 1px solid #e5e7eb;">極快 (1-3天內)</td>
                    <td style="padding: 0.75rem; border: 1px solid #e5e7eb;">適合急性劇痛。不能頻繁施打(<strong>間隔至少三個月</strong>)，需醫師嚴格把關。</td>
                </tr>
                <tr>
                    <td style="padding: 0.75rem; border: 1px solid #e5e7eb; font-weight: bold; color: #b91c1c; white-space: nowrap;">
                        <a href="/treatments/prp" class="text-cyan-400 hover:underline" style="color: #0891b2; text-decoration: none;">PRP 增生療法</a> 
                    </td>
                    <td style="padding: 0.75rem; border: 1px solid #e5e7eb;">組織修復、再生</td>
                    <td style="padding: 0.75rem; border: 1px solid #e5e7eb;">慢 (數週至數月)</td>
                    <td style="padding: 0.75rem; border: 1px solid #e5e7eb;">針對肌腱撕裂、退化根本治療。價格較高，需自費。</td>
                </tr>
                <tr>
                    <td style="padding: 0.75rem; border: 1px solid #e5e7eb; font-weight: bold; color:rgb(181, 209, 247); white-space: nowrap;">                        
                     <a href="/treatments/hyaluronic-acid" class="text-cyan-400 hover:underline" style="color: #0891b2; text-decoration: none;">玻尿酸</a> 
</td>
                    <td style="padding: 0.75rem; border: 1px solid #e5e7eb;">潤滑關節、物理保護</td>
                    <td style="padding: 0.75rem; border: 1px solid #e5e7eb;">中等 (注射後即潤滑)</td>
                    <td style="padding: 0.75rem; border: 1px solid #e5e7eb;">主要用於關節退化保養，副作用極低。</td>
                </tr>
            </tbody>
        </table>
        <div style="text-align: center; font-size: 0.8rem; color: #6b7280; margin-top: 5px; display: block; md:hidden;">
            (可左右滑動查看表格 👉)
        </div>
    </div>
  <p><img src="/images/treatments/steroid/a.webp" alt="類固醇與增生療法比較"></p>
    <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
        <h4 style="margin-top: 0; color: #0e7490;">💡 醫師的小叮嚀：類固醇是雙面刃</h4>
        <p style="margin-bottom: 0; color: #334155;">我們遵循嚴格的注射原則：<strong>「同一部位一年不超過 3-4 次」</strong>。適量的類固醇是良藥，過量則可能導致肌腱變脆或加速軟骨退化。在超音波精準導引下單次使用，能取其利而避其害，請放心交給專業醫師評估。</p><br>
         <p style="margin-bottom: 0; color: #334155;">且類固醇只<strong>治標不治本</strong>，沒有好的休息及後續治療，可能一個月後又復發。</p>
    </div>

    <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

    <h3>📝 治療流程與術後保養</h3>
    
    <h4>治療流程：</h4>
    <ol>
        <li><strong>醫師評估：</strong> 確認發炎位置，排除感染或骨折等禁忌症。</li>
        <li><strong>超音波導引：</strong> 醫師操作超音波，即時鎖定病灶（如腫脹的腱鞘），規劃進針路徑。</li>
        <li><strong>精準注射：</strong> 消毒後，在動態影像監控下將藥物注入正確層次。過程快速，約 1-2 分鐘。</li>
    </ol>

    <h4>術後注意事項：</h4>
    <ul>
        <li><strong>注射後疼痛：</strong> 部分患者在藥效發揮前（約6-12小時內）會有短暫的反彈痛，可冰敷緩解。</li>
        <li><strong>多休息：</strong> 這是最重要的！打完針不痛<strong>不代表已經好了</strong>，只是發炎被壓下來。請務必讓患處休息至少 3-5 天，避免立刻從事劇烈運動或粗重工作。</li>
        <li><strong>注意血糖：</strong> 糖尿病患者注射後，短期內血糖可能會有些微波動，請持續監控。</li>
        <li><strong>觀察變化：</strong> 若注射處出現持續紅腫熱痛（感染徵兆），請立即回診。</li>
    </ul>

    <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

    <div style="background-color: #ecfdf5; padding: 2rem; border-radius: 1rem; margin-top: 3rem; text-align: center;">
        <h3 style="color: #047857; margin-top: 0;">👨‍⚕️ 精準用藥，快速告別急性疼痛！</h3>
        <p style="color: #334155; margin-bottom: 1.5rem;">疼痛不該是您生活的常態。面對急性發炎，宸新復健科利用超音波導引技術，讓類固醇成為您安全可靠的盟友，精準滅火、快速緩解，助您盡早回歸正常生活。</p>
        <p style="font-weight: bold; color: #059669;">立即預約評估，讓專業醫師為您精準治療！</p>
    </div>
  `,
  whyChooseUs: [
    '全程使用<strong>高解析超音波導引</strong>，確保藥物不打進肌腱本體。',
    '嚴格把關注射劑量與頻率，避免副作用。',
    '結合物理治療與運動衛教，治標也治本。'
  ],
  treatmentFocus: [
    '<a href="/diseases/hand/mommy-thumb" class="text-cyan-400 hover:underline">媽媽手</a> / <a href="/diseases/hand/trigger-finger" class="text-cyan-400 hover:underline">板機指</a> 。',
    '<a href="/diseases/hand/carpal-tunnel-syndrome" class="text-cyan-400 hover:underline">腕隧道症候群</a> ',
    '<a href="/diseases/ankle/gout-arthritis" class="text-cyan-400 hover:underline">急性痛風</a>',
    '急性滑囊炎 (肩膀/膝蓋腫痛)。'
  ],
  images: [],
  applicableConditions: ['媽媽手', '板機指', '腕隧道症候群', '滑囊炎','旋轉肌腱炎炎',  '足底筋膜炎'],
  qaList: [
    {
      question: '打類固醇會有「月亮臉」或「變胖」嗎？',
      answer: '一般不會。復健科使用的是「局部」極微量的注射，與治療免疫疾病長期口服的高劑量類固醇不同。藥物主要作用在患處，進入全身循環的量極少，因此幾乎不會造成月亮臉或水牛肩等全身性副作用。'
    },
    {
      question: '聽說打類固醇肌腱會斷掉？',
      answer: '這是傳統「盲打」誤將藥物打入肌腱內部造成的風險。宸新採用「超音波導引」，能精準將藥物打在肌腱周圍的滑囊或腱鞘內，避開肌腱本體，因此安全性極高，肌腱斷裂風險極低。'
    },
    {
      question: '打完針如果不痛了，是不是就不用復健了？',
      answer: '不建議。類固醇是強力的消炎止痛藥，能解決「發炎」的結果，治標不治本，但往往沒有解決「動作錯誤」或「肌力不足」的原因。建議在疼痛緩解後，持續進行復健運動，強化肌力與姿勢矯正，才能避免復發。'
    }
  ]
},

{
  slug: 'iv-pain-relief',
  title: '靜脈消炎止痛針',
  lastModified: '2026-01-25',
  tags: ['IV'],
  subtitle: '全身性疼痛的急救站，快速緩解急性發炎',
  description: '當口服藥物緩不濟急，靜脈止痛針(NSAIDs)能提供更快速的藥物吸收與作用。針對閃到腰、落枕、急性痛風、偏頭痛或全身性筋膜炎，宸新復健科提供專業評估與安全施打，特別強調過敏史篩檢，確保治療安全有效。',
  image: '/images/treatments/h.webp',
  features: ['快速起效', '全身性消炎', '急性期適用'],
  seoTitle: '新竹靜脈止痛針 - 閃到腰/落枕/急性痛風/偏頭痛/全身痠痛治療 | 宸新復健科',
  seoDescription: '新竹靜脈注射推薦。針對急性痛風發作、頑固性偏頭痛與全身性筋膜發炎，宸新復健科提供高效靜脈消炎止痛治療(IV NSAIDs)。專業醫師評估藥物過敏史，提供比口服藥物更快速的疼痛緩解方案。',
  keywords: ['新竹打止痛針', '靜脈注射', 'NSAID', '閃到腰','落枕','急性痛風', '偏頭痛', '全身痠痛', '打點滴', '消炎針'],
  youtubeVideoId: '', 
  contentHtml: `
    <p>生活中有時會遇到突如其來的<strong>劇烈疼痛</strong>，例如閃到腰或落枕影響工作、痛風突然發作讓人寸步難行、偏頭痛痛到想撞牆，或是重感冒引起的全身肌肉痠痛。當口服止痛藥吃了很久還沒感覺，或是痛到無法吞嚥時，<strong>靜脈消炎止痛注射</strong>是醫療上協助患者度過疼痛難關的重要手段。</p>
    <br>
    <p>這類針劑通常含有高強度的<strong>非類固醇消炎藥（NSAIDs）</strong>，直接進入血液循環，跳過腸胃吸收的等待時間，能以最快速度壓制體內的發炎風暴。</p>

    <div style="background-color: #fef2f2; border: 2px solid #ef4444; border-radius: 1rem; padding: 1.5rem; margin: 2rem 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        <h2 style="color: #991b1b; margin-top: 0; font-weight: bold; border-bottom: 2px solid #fca5a5; padding-bottom: 0.5rem; display: flex; align-items: center;">
            🚨 救命關鍵：這類人「絕對」要主動告知！
        </h2>
        
        <p style="font-size: 1.1rem; color: #7f1d1d; font-weight: bold;">靜脈止痛針的主要成分通常是 NSAIDs（如 Ketorolac 等）。如果您有以下狀況，請務必在治療前告知醫師，否則可能引發嚴重過敏性休克：</p>
        
        <ul style="list-style: none; padding: 0; margin-top: 1rem; color: #991b1b;">
            <li style="margin-bottom: 1rem; display: flex; align-items: start;">
                <span style="background: #ef4444; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">!</span>
                <div><strong>藥物過敏史：</strong> 曾對阿斯匹靈 (Aspirin)、布洛芬 (Ibuprofen)或其他止痛藥過敏，出現過眼睛紅腫、嘴唇腫脹、氣喘或呼吸困難者。</div>
            </li>
            <li style="margin-bottom: 1rem; display: flex; align-items: start;">
                <span style="background: #ef4444; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">!</span>
                <div><strong>胃潰瘍/出血病史：</strong> 近期有胃出血或嚴重胃潰瘍者，強力消炎藥可能加重症狀。</div>
            </li>
            <li style="margin-bottom: 0; display: flex; align-items: start;">
                <span style="background: #ef4444; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">!</span>
                <div><strong>腎功能不全：</strong> 洗腎患者或慢性腎臟病患，需由醫師嚴格調整劑量或改用其他藥物。</div>
            </li>
        </ul>
    </div>

    <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

    <h3>💊 靜脈止痛針的成分與原理</h3>
    <p>很多人會問：「這是不是就是打類固醇？」其實不一定。復健科與急診常用的「消炎止痛針」，主要成分通常是 <strong>NSAIDs (非類固醇消炎藥)</strong>，有時會視情況搭配肌肉鬆弛劑或維生素 B 群。</p>
    <ol>
        <li><strong>阻斷發炎源頭：</strong> 透過抑制體內的環氧化酶，阻斷前列腺素的合成，直接從源頭「關掉」發炎反應。</li>
        <li><strong>生物利用率 100%：</strong> 口服藥物需經過胃酸破壞、腸道吸收、肝臟代謝，最後只剩部分藥效進入血液。靜脈注射則是 100% 進入血液循環，因此效果既強且快。</li>
    </ol>
    

    <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

    <h3>🎯 什麼時候需要打血管針？(適應症)</h3>
    <p>靜脈注射屬於「全身性」治療，與針對單點肌腱的「局部注射」不同。它適合範圍較大、多處疼痛，或是疼痛級數極高的狀況：</p>

    <h4>常見適應症包括：</h4>
    <ul>
        <li><strong>急性下背痛 (閃到腰)：</strong> 肌肉強烈痙攣導致無法起身或移動。</li>
        <li><strong>急性脖子痛(落枕)：</strong> 肌肉強烈痙攣導致無法轉頭。</li>
        <li><strong>急性痛風發作：</strong> 關節紅腫熱痛到無法走路，口服藥壓不下來時。</li>
        <li><strong>頑固性偏頭痛：</strong> 劇烈頭痛伴隨噁心、嘔吐，無法口服藥物時。</li>
        <li><strong>全身性筋膜炎/流感痠痛：</strong> 伴隨發燒的全身骨頭痠痛。</li>
        
    </ul>

    <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

    <h3>⚖️ 靜脈注射 vs. 口服藥 vs. 局部針劑</h3>
    <p>選擇哪種治療方式，取決於疼痛的「範圍」與「急迫性」。</p>

    <div style="overflow-x: auto; padding-bottom: 10px;">
        <table style="width: 100%; min-width: 600px; border-collapse: collapse; margin-top: 1rem;">
            <thead>
                <tr style="background-color: #4338ca; color: white;">
                    <th style="padding: 0.75rem; border: 1px solid #e5e7eb; text-align: left; white-space: nowrap;">治療方式</th>
                    <th style="padding: 0.75rem; border: 1px solid #e5e7eb; text-align: left; white-space: nowrap;">作用範圍</th>
                    <th style="padding: 0.75rem; border: 1px solid #e5e7eb; text-align: left; white-space: nowrap;">起效速度</th>
                    <th style="padding: 0.75rem; border: 1px solid #e5e7eb; text-align: left; white-space: nowrap;">適用情境</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 0.75rem; border: 1px solid #e5e7eb; font-weight: bold; color:rgb(99, 102, 241); white-space: nowrap;">靜脈注射 (IV)</td>
                    <td style="padding: 0.75rem; border: 1px solid #e5e7eb;">全身循環</td>
                    <td style="padding: 0.75rem; border: 1px solid #e5e7eb;">最快 (約30分鐘)</td>
                    <td style="padding: 0.75rem; border: 1px solid #e5e7eb;">急性劇痛、痛風、多處發炎、無法口服藥物時。</td>
                </tr>
                <tr>
                    <td style="padding: 0.75rem; border: 1px solid #e5e7eb; font-weight: bold; color: #059669; white-space: nowrap;">
                       口服藥物
                    </td>
                    <td style="padding: 0.75rem; border: 1px solid #e5e7eb;">全身循環</td>
                    <td style="padding: 0.75rem; border: 1px solid #e5e7eb;">慢 (1-2小時)</td>
                    <td style="padding: 0.75rem; border: 1px solid #e5e7eb;">輕中度疼痛、慢性疼痛控制、居家照護。</td>
                </tr>
                <tr>
                    <td style="padding: 0.75rem; border: 1px solid #e5e7eb; font-weight: bold; color:rgb(217, 119, 6); white-space: nowrap;">
                       局部注射
                    </td>
                    <td style="padding: 0.75rem; border: 1px solid #e5e7eb;">單點患處</td>
                    <td style="padding: 0.75rem; border: 1px solid #e5e7eb;">快 (針對該點)</td>
                    <td style="padding: 0.75rem; border: 1px solid #e5e7eb;">媽媽手、網球肘、單一關節炎。(不經過全身，副作用較少)</td>
                </tr>
            </tbody>
        </table>
        <div style="text-align: center; font-size: 0.8rem; color: #6b7280; margin-top: 5px; display: block; md:hidden;">
            (可左右滑動查看表格 👉)
        </div>
    </div>

    <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
        <h4 style="margin-top: 0; color: #0e7490;">💡 醫師的小叮嚀</h4>
        <p style="margin-bottom: 0; color: #334155;">靜脈止痛針雖然效果神速，但它屬於<strong>「急救性質」</strong>。長期依賴打針止痛，不僅可能傷腎、傷胃，更會掩蓋身體真正的問題。當急性疼痛緩解後，務必配合物理治療找出疼痛根源（如姿勢不良、肌力失衡），才是長久之計。</p>
    </div>

    <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

    <h3>📝 治療流程</h3>
    <ol>
        <li><strong>病史詢問：</strong> 醫師確認<strong>過敏史（重要！）</strong>、用藥史及疼痛狀況。</li>
        <li><strong>靜脈施打：</strong> 護理師尋找合適血管建立管路，藥物推注或點滴滴注。</li>
        <li><strong>留院觀察：</strong> 建議在院內休息 10-15 分鐘，確認無頭暈、呼吸不順等過敏反應後再離開。</li>
    </ol>

    <div style="background-color: #ecfdf5; padding: 2rem; border-radius: 1rem; margin-top: 3rem; text-align: center;">
        <h3 style="color: #047857; margin-top: 0;">👨‍⚕️ 宸新復健科：安全優先的疼痛管理</h3>
        <p style="color: #334155; margin-bottom: 1.5rem;">我們理解疼痛帶來的焦慮與不適。宸新復健科堅持在使用任何靜脈針劑前，進行嚴謹的過敏篩檢與身體評估，讓您在最安全的環境下，快速告別疼痛折磨。</p>
    </div>
  `,
  whyChooseUs: [
    '嚴格執行<strong>藥物過敏篩檢</strong>，確保施打安全。',
    '醫師專業評估，區分「局部注射」與「全身注射」的必要性。',
    '提供舒適的治療環境，即時監測生理數值。'
  ],
  treatmentFocus: [
    '急性肌肉痙攣(落枕、閃到腰)',
    '急性關節劇痛(積水、痛風)。',
    '嚴重偏頭痛 / 全身痠痛。'
    
  ],
  images: [],
  applicableConditions: ['痛風', '偏頭痛', '急性背痛', '全身痠痛', '類風濕性關節炎發作'],
  qaList: [
    {
      question: '打止痛針會有副作用嗎？',
      answer: '所有藥物都有潛在副作用。NSAID 類針劑最常見的副作用是胃部不適（胃痛、胃酸逆流），少數人可能出現過敏反應。腎功能不佳者需特別小心。宸新醫師會根據您的身體狀況調整劑量，將風險降至最低。'
    },
    {
      question: '是不是越痛就要打越多支？',
      answer: '不是。藥物有「天花板效應」，超過一定劑量後止痛效果不會增加，副作用風險卻會倍增。我們會依照標準醫療指引給予最適合的單次劑量。'
    },
    {
      question: '這跟去急診打嗎啡一樣嗎？',
      answer: '不一樣。急診針對外傷或癌症劇痛有時會使用鴉片類藥物（如嗎啡），會有成癮性與嗜睡風險。復健科門診使用的多為非類固醇消炎藥（NSAIDs），無成癮性，打完通常意識清醒，可正常返家。'
    }
  ]
}
]
// =======================================================
// 3. 自動化瘦身區 (Sitemap 與列表頁專用)
// =======================================================
// 自動過濾掉 contentHtml 與其他詳細資料，產生輕量列表
// 這樣 sitemap.ts 導入 treatmentsList 時就不會載入過重的資料

export const treatmentsList: TreatmentMetadata[] = fullTreatmentsData.map((item) => {
  // 使用解構賦值，把詳細資料分離出來，只回傳 metadata
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    contentHtml,
    whyChooseUs,
    treatmentFocus,
    images,
    youtubeVideoId,
    qaList,
    ...metadata
  } = item;
  return metadata;
});

// =======================================================
// 4. Helper Functions
// =======================================================

// 取得單一治療項目 (內頁用，從完整資料庫找)
export function getTreatmentBySlug(slug: string): Treatment | undefined {
  return fullTreatmentsData.find((t) => t.slug === slug);
}

// 取得所有治療項目 (列表頁或 Sitemap 用，只回傳輕量資料)
export function getAllTreatments() {
  return treatmentsList;
}

// 取得所有 Slug (Sitemap 專用)
export function getAllTreatmentSlugs() {
  return treatmentsList.map((t) => ({ slug: t.slug }));
}