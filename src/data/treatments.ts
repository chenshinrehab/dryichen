// src/data/treatments.ts

export interface Treatment {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string
  contentHtml: string;
  whyChooseUs: string[];
  treatmentFocus: string[];
  images: { src: string; alt: string }[];
  applicableConditions: string[];
  features: string[];
  youtubeVideoId?: string;
  qaList?: { question: string; answer: string }[];
  
  // SEO 專用欄位
  seoTitle?: string;
  seoDescription?: string;
  keywords?: string[];
}

export const treatments: Treatment[] = [
  // =======================================================
  // 1. 增生療法 / PRP (完整保留 7 張圖 + 3 題 QA)
  // =======================================================
  {
    slug: 'prp',
    title: '增生療法 / PRP',
    subtitle: '超音波導引、高濃度血小板注射',
    description: '透過注射高濃度血小板血漿 (PRP) 或高濃度葡萄糖，精準修復受損關節與韌帶。',
    // 圖片：注射/實驗室示意
    image: '/images/treatments/a.jpg',
    // SEO 設定
    seoTitle: '新竹PRP注射推薦 - 膝蓋退化/旋轉肌破裂/網球肘 | 宸新復健科',
    seoDescription: '新竹PRP增生療法首選。醫師親自執行高解析超音波導引注射，將高濃度血小板精準送達病灶。免開刀治療退化性關節炎、半月軟骨受損與韌帶撕裂，啟動身體修復力。',
    keywords: ['新竹PRP', '新竹增生療法', '超音波導引注射', '膝蓋退化免開刀', '旋轉肌破裂', '足底筋膜炎', '高濃度葡萄糖', '新竹骨科推薦'],

    contentHtml: `
<p>疼痛總是如影隨形，讓你無法享受生活？傳統的消炎藥或類固醇雖然能暫時止痛，卻無法修復受損的組織。宸新復健科提供<strong>高濃度血小板血漿 (PRP) 增生療法</strong>及<strong>高濃度葡萄糖水</strong>，這是一種啟動人體自我修復機制的先進治療。</p>
<br>
<p>透過抽取自身血液，離心萃取出富含生長因子的血小板，再經由<strong>高解析超音波精準導引</strong>注射至受傷部位。就像是為受損的肌腱、韌帶或關節打入一劑強效的「修復工程隊」，從根本解決疼痛問題，讓您重拾活動力。</p>


<div style="background-color: #fffbeb; border: 2px solid #fbbf24; border-radius: 1rem; padding: 1.5rem; margin: 2rem 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
    <h2 style="color: #b45309; margin-top: 0; font-weight: bold; border-bottom: 2px solid #fcd34d; padding-bottom: 0.5rem; display: flex; align-items: center;">
        📢 為什麼選擇宸新 PRP 增生療法？
    </h2>
    <p style="font-size: 1.1rem; color: #78350f;">許多人打過 PRP 覺得沒效，很大的原因是「沒打對位置」或「濃度不夠」。宸新復健科堅持最高規格的治療標準：</p>
    
    <ul style="list-style: none; padding: 0; margin-top: 1rem; color: #92400e;">
        <li style="margin-bottom: 1rem; display: flex; align-items: start;">
            <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">1</span>
            <div><strong>醫學中心級超音波導引：</strong> 我們不靠「手感」盲打。每一針都透過高解析度超音波即時顯像，避開神經血管，精準將 PRP 送達受損組織深處。</div>
        </li>
        <li style="margin-bottom: 1rem; display: flex; align-items: start;">
            <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">2</span>
            <div><strong>高濃度萃取技術：</strong> 採用專利離心管與標準化流程，確保萃取出的血小板濃度達到修復所需的黃金標準（約血液濃度的 3-5 倍以上）。</div>
        </li>
        <li style="margin-bottom: 1rem; display: flex; align-items: start;">
            <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">3</span>
            <div><strong>複合式治療策略：</strong> 醫師會視情況搭配葡萄糖水增生療法、神經解套注射或震波治療，達到 1+1>2 的加乘效果。</div>
        </li>
                <li style="margin-bottom: 0; display: flex; align-items: start;">
            <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">4</span>
            <div><strong>收費標準：</strong>高濃度葡萄糖：<strong>1200元</strong>。高濃度血小板(PRP)：<strong>15000元</strong>。</div>
        </li>
    </ul>
</div>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h3>🔬 什麼是 PRP？治療原理大解密</h3>
<p>PRP 全名為 <strong>Platelet-Rich Plasma</strong>，意指「富含血小板的血漿」。大家熟知的血小板功能是止血，但其實它還富含多種<strong>生長因子</strong>，如 PDGF、TGF-β、VEGF 等。</p>
<br>
<p>當組織受傷時，身體會啟動修復機制，但隨著年齡增長或反覆受傷，這個機制會變慢甚至停滯。PRP 治療就像是按下「快轉鍵」，直接將高濃度的生長因子注入受傷部位，重新啟動並加速組織修復反應，促進膠原蛋白增生、血管新生，讓受損的肌腱、韌帶或軟骨得以癒合。</p>

<p><img src="/images/treatments/prp/principle.jpg" alt="PRP高濃度血小板治療原理說明"></p>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h3>🎯 誰適合打 PRP？適應症列表</h3>
<p>PRP 的應用範圍非常廣泛，幾乎涵蓋了所有骨科與復健科的軟組織損傷。若您有以下困擾，且復健或藥物治療效果不彰，PRP 會是您免於開刀的最佳選擇：</p>

<ul>
    <li><strong>退化性關節炎：</strong> 膝蓋、髖部、肩膀退化，PRP 能延緩軟骨磨損，減輕疼痛。</li>
    <li><strong>肌腱與韌帶撕裂傷：</strong> 旋轉肌袖撕裂、十字韌帶損傷、半月板損傷。</li>
    <li><strong>慢性肌腱炎：</strong> 網球肘、高爾夫球肘、阿基里斯腱炎、髕骨肌腱炎。</li>
    <li><strong>運動傷害：</strong> 腳踝扭傷（翻船）、肌肉拉傷。</li>
    <li><strong>神經壓迫：</strong> 腕隧道症候群、神經根壓迫。</li>
    <li><strong>足底筋膜炎：</strong> 長期足跟痛，踩地如針刺。</li>
</ul>

<p><img src="/images/treatments/prp/c.jpg" alt="PRP高濃度血小板治療適應症列表"></p>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h3>💉 超音波導引：精準醫療的靈魂</h3>
<p>「明明打了針，為什麼沒效？」這可能是因為沒有打到對的位置。傳統注射依賴醫師觸摸體表解剖位置（盲打），容易打偏或傷及周邊組織。</p>
<br>
<p>在宸新復健科，我們堅持<strong>「眼見為憑」</strong>。利用高解析度骨骼肌肉超音波，我們可以清晰看見神經、血管、肌腱與受傷組織的深度。在螢幕的<strong>即時導引下</strong>，醫師能將針頭精準引導至病灶核心，將珍貴的 PRP 一滴不漏地注入，大幅提升治療成功率並減少疼痛。</p>

<p><img src="/images/treatments/prp/d.jpg" alt="PRP高濃度血小板超音波導引注射示意圖"></p>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h3>🏥 治療流程：四步驟重啟修復力</h3>
<p>為了確保 PRP 的品質與安全性，我們建立了標準化的無菌操作流程，全程約需 30-40 分鐘，無需住院，治療後即可返家。</p>

<ol>
    <li><strong>血液抽取：</strong> 如同一般抽血檢查，從手臂抽取約 10~20cc 的血液。</li>
    <li><strong>離心濃縮：</strong> 將血液放入專用離心機，透過物理離心力將紅血球與血漿分離，萃取出高濃度的血小板層。</li>
    <li><strong>精準注射：</strong> 醫師消毒患部後，在超音波導引下，將 PRP 精準注射至受傷組織。</li>
    <li><strong>衛教與修復：</strong> 注射後稍微休息，聆聽衛教指導，即可返家開始修復期。</li>
</ol>

<p><img src="/images/treatments/prp/a.jpg" alt="PRP高濃度血小板注射標準流程圖"></p>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h3>⚖️ 超級比一比：PRP vs. 葡萄糖水 vs. 類固醇</h3>
<p>面對多種注射治療，該如何選擇？我們整理了以下比較表，幫助您釐清觀念。</p>

<h4>1. PRP vs. 高濃度葡萄糖水</h4>
<p>兩者都屬於「增生療法 (Prolotherapy)」，目的都是促進修復。<strong>高濃度葡萄糖水</strong>是利用滲透壓刺激輕微發炎反應來啟動修復，適合輕微損傷；而 <strong>PRP</strong> 則是直接提供生長因子原料，修復力更強、速度更快，適合中重度損傷或老年人。</p>

<p><img src="/images/treatments/prp/e.jpg" alt="PRP高濃度血小板與高濃度葡萄糖比較表"></p>

<h4>2. 增生療法 vs. 類固醇 (消炎針)</h4>
<p>這是截然不同的治療邏輯。<strong>類固醇</strong>強效消炎止痛，但會抑制修復，長期施打可能導致肌腱脆化甚至斷裂。<strong>增生療法</strong>初期可能會有些許痠脹感（那是修復啟動的訊號），但能讓組織長得更強壯、更健康。</p>

<p><img src="/images/treatments/prp/f.jpg" alt="增生注射與類固醇治療差異比較"></p>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h3>📝 術後照顧懶人包：讓效果更加分</h3>
<p>打完 PRP 只是修復的開始，術後的保養同樣重要。請遵循以下原則，幫助組織長得更好：</p>

<ul>
    <li><strong>注射後反應：</strong> 注射處可能會痠脹、溫熱感持續 3-7 天，這是正常的發炎修復反應，請勿驚慌。</li>
    <li><strong>禁止消炎藥：</strong> 術後兩週內<strong>請勿服用消炎止痛藥 (NSAIDs)</strong> 或施打類固醇，以免抑制生長因子的作用。若疼痛難耐，可服用普拿疼 (Acetaminophen) 或冰敷緩解。</li>
    <li><strong>營養補充：</strong> 多攝取優質蛋白質（修復原料）、維生素 C（膠原蛋白合成輔酶）與水分。</li>
    <li><strong>適度活動：</strong> 避免劇烈運動，但可進行溫和的關節活動與伸展，避免沾黏。</li>
</ul>

<p><img src="/images/treatments/prp/b.jpg" alt="PRP高濃度血小板注射後注意事項與衛教"></p>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<div style="background-color: #f0f9ff; padding: 2rem; border-radius: 1rem; margin-top: 3rem; text-align: center;">
    <h3 style="color: #0369a1; margin-top: 0;">👨‍⚕️ 還在忍受慢性疼痛嗎？</h3>
    <p style="color: #334155; margin-bottom: 1.5rem;">疼痛不該是常態。歡迎來到新竹宸新復健科，由醫師親自評估。透過精準的超音波診斷與 PRP 增生療法，讓我們一起啟動身體的修復力，找回無痛的自在生活！</p>
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
    // 完整保留原始 7 張圖片
    images: [
    ],
    applicableConditions: ['退化性關節炎', '旋轉肌撕裂', '網球肘', '足底筋膜炎', '半月軟骨受損'],
    features: ['啟動修復', '免開刀', '精準導引'],
    
    // 完整保留原始 3 題 QA
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
        answer: 'PRP 是非常安全的治療，因為用的完全是自己的血液，幾乎不會有過敏反應。大部分人的副作用會有注射部位的痠、脹或輕微疼痛、局部小範圍的瘀青。'
      },
      {
        question: '打 PRP 會越打越沒效嗎？',
        answer: '不會產生抗藥性。因為 PRP 取自自體血液，不含藥物成分，所以不會像止痛藥或類固醇那樣產生「抗藥性」。相反地，對於慢性損傷或退化，連續施打（如一個療程 3 次）通常能帶來「累加」的修復效果。不過，若關節磨損過於嚴重或生活習慣未改善，修復速度可能趕不上破壞速度，這時醫師會評估是否需要調整治療頻率或搭配其他療法。'
      },
      {
        question: 'PRP 和打類固醇有什麼不同？',
        answer: '類固醇是強力的「消炎藥」，能迅速止痛但長期使用可能導致肌腱脆化與斷裂；PRP 則是提供「生長因子」，目的是「修復」與「再生」受損組織。簡單來說，類固醇是滅火，PRP 是重建房子。'
      }
    ]
  },

  // =======================================================
  // 2. 聚焦式震波治療 (完整保留 3 張圖 + 3 題 QA)
  // =======================================================
  {
    slug: 'shockwave',
    title: '聚焦式 / 發散式體外震波',
    subtitle: '瑞士頂級設備、擊碎鈣化與骨刺',
    description: '引進瑞士頂級震波設備，免開刀擊碎鈣化點，專治足底筋膜炎與頑固疼痛。',
    // 圖片：醫療儀器/物理治療
    image: '/images/treatments/b.jpg',
    youtubeVideoId: '3OK5zeUBeGc',
    
    // SEO 設定
    seoTitle: '新竹體外震波治療 - 專治足底筋膜炎/骨刺/鈣化性肌腱炎 | 宸新復健科',
    seoDescription: '新竹震波治療推薦。宸新復健科採用瑞士頂級聚焦式震波儀，針對足底筋膜炎、鈣化性肌腱炎與網球肘效果顯著。免打針、免吃藥、非侵入性，有效擊碎鈣化組織並刺激血管新生。',
    keywords: ['新竹震波', '體外震波推薦', '足底筋膜炎', '鈣化性肌腱炎', '骨刺治療', '網球肘', '新竹物理治療'],

    contentHtml: `
     <p>您是否長期受慢性疼痛所苦？足底筋膜炎反覆發作、網球肘痛到拿不起杯子、或是旋轉肌鈣化讓您徹夜難眠？當復健、吃藥、打針都無法解決您的疼痛時，<strong>體外震波治療 (ESWT)</strong> 可能是您免於開刀的最佳選擇。</p>
<br>
<p>宸新復健科引進頂級雙機型震波設備，提供<strong>「聚焦式 + 發散式」複合式治療</strong>。我們堅持在治療前使用<strong>高解析超音波精準定位</strong>，如同導彈鎖定目標，將高能量聲波精準傳遞至深層受損組織，啟動身體的自我修復機制，從根本解決頑固疼痛。</p>


<div style="background-color: #fffbeb; border: 2px solid #fbbf24; border-radius: 1rem; padding: 1.5rem; margin: 2rem 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
    <h2 style="color: #b45309; margin-top: 0; font-weight: bold; border-bottom: 2px solid #fcd34d; padding-bottom: 0.5rem; display: flex; align-items: center;">
        📢 為什麼選擇宸新 ESWT 震波治療？
    </h2>
    
    <p style="font-size: 1.1rem; color: #78350f;">許多患者在其他地方打過震波覺得沒效，往往是因為「打太淺」或「沒對準」。宸新復健科堅持三大黃金治療標準，確保每一發震波都發揮最大效益：</p>
    
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

<p><img src="/images/treatments/shockwave/a.jpg" alt="ESWT體外震波治療原理圖解"></p>

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

<p><img src="/images/treatments/shockwave/b.jpg" alt="ESWT體外震波治療適應症範圍"></p>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h3>⚖️ 聚焦式 vs. 發散式：複合式治療的優勢</h3>
<p>市面上的震波機器主要分為兩種，各有優缺點。宸新復健科採用<strong>複合式治療策略</strong>，結合兩者優勢，達到 1+1>2 的效果。</p>

<p><img src="/images/treatments/shockwave/c.jpg" alt="ESWT聚焦式與發散式震波比較圖"></p>

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
    <p style="color: #334155; margin-bottom: 1.5rem;">無論是想重回球場的運動員，還是深受肩膀痛困擾的長輩，宸新復健科都能為您提供最專業的協助。透過超音波導引與複合式震波治療，讓我們一起擊退疼痛，找回活動自如的快樂！</p>
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
    // 完整保留原始 3 張圖片
    images: [
    ], 
    applicableConditions: ['足底筋膜炎', '鈣化性肌腱炎', '骨刺', '網球肘', '阿基里斯腱炎'],
    features: ['非侵入性', '擊碎鈣化', '恢復期短'],
    
    // 完整保留原始 3 題 QA
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

  // =======================================================
  // 3. 徒手治療 (完整保留 3 題 QA)
  // =======================================================
  {
    slug: 'manual',
    title: '徒手治療',
    subtitle: '物理治療師一對一、骨骼筋膜調整',
    description: '專業物理治療師一對一評估，調整骨盆歪斜、脊椎側彎與筋膜放鬆。',
    // 圖片：兒童積木/學習
    image: '/images/treatments/c.jpg',
    // SEO 設定
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

<p><img src="/images/treatments/therapy/a.jpg" alt="獨立的徒手治療空間"></p>

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

<p><img src="/images/treatments/therapy/b.jpg" alt="氣壓式多功能訓練機"></p>

<h3>2. 脊椎側彎專用訓練架</h3>
<p>脊椎側彎不只是外觀問題，更會影響呼吸與造成背痛。我們設有專用的訓練架（類似施羅斯牆），讓治療師能引導患者進行<strong>3D 空間的呼吸與矯正運動</strong>。透過特定的擺位與施力，將凹陷的胸廓撐開、旋轉的椎體轉正，從而改善體態並控制側彎角度。</p>

<p><img src="/images/treatments/therapy/c.jpg" alt="脊椎側彎訓練架"></p>

<h3>3. 挪威紅繩懸吊系統 (Redcord)</h3>
<p>源自挪威的醫療級懸吊系統。它的核心概念是「弱連結測試 (Weak Link Testing)」。治療師會利用繩索的不穩定性，找出您身體力量傳遞最弱的環節，然後透過高強度的神經肌肉控制訓練 (Neurac)，<strong>瞬間喚醒沉睡的深層核心肌群</strong>。對於長期下背痛、骨盆歪斜或產後核心無力的族群，紅繩往往能帶來立竿見影的改善。</p>

<p><img src="/images/treatments/therapy/d.jpg" alt="挪威紅繩懸吊訓練"></p>

<h3>4. 器械皮拉提斯 (Pilates Reformer)</h3>
<p>皮拉提斯不只是運動，更是復健的延伸。Reformer (核心床) 利用彈簧阻力與滑動平臺，能提供脊椎極佳的支撐與延伸感。在治療師的一對一指導下，您能精準地鍛鍊核心、改善圓肩駝背、骨盆前傾等不良姿勢，同時雕塑出修長緊實的肌肉線條。</p>

<p><img src="/images/treatments/therapy/e.jpg" alt="器械皮拉提斯"></p>

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
    features: ['一對一治療', '筋膜放鬆', '骨骼調整'],
    
    // 完整保留原始 3 題 QA
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

  {
    slug: 'high-intensity-laser',
    title: '高能量雷射治療 (HILT)',
    subtitle: '光速修復、深層止痛的黑科技',
    description: '引進美國頂級Summus高能量雷射，能穿透深層組織，提供立即性的止痛與消腫。專治急性運動傷害、兒童運動傷害與頑固性疼痛。',
    // 圖片：醫師操作雷射治療的示意圖
    image: '/images/treatments/d.jpg', 
    youtubeVideoId: '6vQDqF7Xk9E', // 若有相關影片可填入
    
    // SEO 設定
    seoTitle: '新竹高能量雷射治療 - 急性扭傷/術後修復/神經痛推薦 | 宸新復健科',
    seoDescription: '新竹高能量雷射推薦。宸新復健科採用美國頂級Summus高能量雷射，穿透深度達 10 公分。針對急性運動傷害、兒童運動傷害與頑固性疼痛效果顯著。無痛、溫熱感、立即消腫止痛，隔天可以馬上上場。',
    keywords: ['新竹高能量雷射', 'HILT', '雷射治療', '運動傷害', '急性扭傷', '坐骨神經痛', '術後復健'],

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


<p><img src="/images/treatments/laser/a.jpg" alt="高能量雷射治療原理示意圖"></p>

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

<p><img src="/images/treatments/laser/b.jpg" alt="高能量雷射治療適應症"></p>

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

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

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
    // 圖片保留空陣列或填入您實際的圖片網址
    images: [], 
    applicableConditions: ['急性扭傷', '坐骨神經痛', '退化性關節炎', '腕隧道症候群', '術後水腫'],
    features: ['無痛舒適', '立即消腫', '深層穿透'],
    
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
  }




];

// Helper functions (保持不變)
export function getTreatmentBySlug(slug: string) {
  return treatments.find((t) => t.slug === slug);
}

export function getAllTreatmentSlugs() {
  return treatments.map((t) => ({ slug: t.slug }));
}