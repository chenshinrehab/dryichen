// src/data/diseases.ts

// ==========================================
// 1. 定義資料介面
// ==========================================
export interface DiseaseItem {
  id: string
  slug: string      // ✨ 關鍵：必須有這個欄位
  title: string
  description: string      // 列表頁用的簡短描述
  content?: string        // 舊版純文字 (為了相容性保留)
  contentHtml: string     // 詳細頁用的 HTML 內容 (支援排版)
  symptoms: string[]      // 常見症狀列表
  treatments: string[]    // 治療建議列表
  seoKeywords: string[]   // SEO 關鍵字
  seoDescription: string  // SEO 描述
  images: { src: string; alt: string }[] // 圖片
}

export interface DiseaseCategory {
  slug: string
  title: string
  description: string
  image: string
  diseases: DiseaseItem[]
  
  // SEO 欄位
  seoKeywords?: string[]
  seoDescription?: string
}

// ==========================================
// 2. 完整資料內容
// ==========================================
export const diseaseCategories: DiseaseCategory[] = [
  // =======================================================
  // 1. 脊椎髖臀 (關鍵字：坐骨神經痛、椎間盤突出、長骨刺)
  // =======================================================
  {
    slug: 'spine-hip',
    title: '脊椎髖臀',
    description: '脊椎、髖關節與臀部相關疾病',
    image: '/images/diseases/a.jpg',
    seoKeywords: ['新竹脊椎側彎', '坐骨神經痛治療', '新竹整脊', '骨刺', '梨狀肌症候群'],
    seoDescription: '新竹脊椎權威復健。專治腰椎椎間盤突出、坐骨神經痛與長骨刺。提供免開刀的PRP注射與徒手物理治療，精準改善下背痛與腳麻問題。',
    diseases: [
      {
        id: 'lumbar-disc-herniation',
        slug: 'lumbar-disc-herniation',
        title: '腰椎椎間盤突出',
        description: '彎腰刷牙一陣刺痛、大腿後側像被電到？這是椎間盤突出壓迫坐骨神經的警訊。了解如何透過拉腰與PRP免動刀修復脊椎。',
        contentHtml: `
<p>您是否有過這樣的經驗：早晨起床腰背僵硬、彎腰刷牙時突然一陣刺痛，或是久坐辦公室後，大腿後側傳來像「被電到」一樣的麻痛感？小心，這可能是現代人的文明病——<strong>腰椎椎間盤突出 (HIVD)</strong> 找上門了。</p>

<p>宸新復健科提供從<strong>精準診斷</strong>、<strong>物理治療</strong>到<strong>再生醫學 (PRP)</strong> 的全方位脊椎照護方案。我們不只緩解疼痛，更致力於找出病灶根源，透過強化核心肌群，為您的脊椎打造天然的防護鐵衣。</p>

<br>

<div style="background-color: #fffbeb; border: 2px solid #fbbf24; border-radius: 1rem; padding: 1.5rem; margin: 2rem 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
    <h2 style="color: #b45309 !important; margin-top: 0; font-weight: bold; border-bottom: 2px solid #fcd34d; padding-bottom: 0.5rem; display: flex; align-items: center;">
        📢 為什麼會椎間盤突出？脊椎的果凍理論
    </h2>
    
    <p style="font-size: 1.1rem; color: #78350f !important;">要了解這個病，首先要認識脊椎的避震器——椎間盤。您可以把它想像成一顆<strong>「夾心軟糖」或「果凍甜甜圈」</strong>：</p>
    
    <ul style="list-style: none; padding: 0; margin-top: 1rem; color: #92400e !important;">
        <li style="margin-bottom: 1rem; display: flex; align-items: start;">
            <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">1</span>
            <div style="color: #92400e !important;">
                <strong style="color: #0891b2 !important;">纖維環 (Annulus Fibrosus)：</strong> 
                外層像輪胎一樣堅韌的纖維組織，負責包覆與保護。
            </div>
        </li>
        <li style="margin-bottom: 1rem; display: flex; align-items: start;">
            <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">2</span>
            <div style="color: #92400e !important;">
                <strong style="color: #0891b2 !important;">髓核 (Nucleus Pulposus)：</strong> 
                中心像果凍般充滿水分的物質，負責緩衝壓力。
            </div>
        </li>
        <li style="margin-bottom: 0; display: flex; align-items: start;">
            <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">3</span>
            <div style="color: #92400e !important;">
                <strong style="color: #0891b2 !important;">破裂與突出：</strong> 
                當長期受力不均（如久坐）、姿勢不良（彎腰搬重物）或外力撞擊時，外層的纖維環會破裂，導致內部的「果凍」被擠出來，這就是椎間盤突出。
            </div>
        </li>
    </ul>
</div>

<p><img src="/images/diseases/spine-hip/HIVD/a.jpg" alt="脊椎椎間盤突出構造圖"></p>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h3>⚡ 從下背痛到腳麻：坐骨神經痛的警訊</h3>
<p>單純的椎間盤受損可能只會感到下背痠痛（類似閃到腰）。但真正的惡夢開始於<strong>突出的髓核壓迫到後方的神經根</strong>。</p>
<p>這會導致疼痛沿著坐骨神經的路徑，一路從臀部、大腿後側放射至小腿甚至腳底。患者常形容這種痛感為「酸、麻、刺痛、像被電到」。若壓迫過久，甚至會出現肌肉萎縮、腳踝無力（垂足）等現象。最嚴重的情況稱為<strong>「馬尾症候群 (Cauda Equina Syndrome)」</strong>，會影響大小便功能（失禁或尿不出來），這時就必須緊急開刀，否則會造成永久性神經損傷。</p>

<p><img src="/images/diseases/spine-hip/HIVD/b.jpg" alt="坐骨神經痛"></p>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h3>🔍 X 光 vs. MRI：我們如何揪出病灶？</h3>
<p>很多患者會問：「醫師，我照 X 光看得到軟骨突出嗎？」其實，診斷工具各有其功能：</p>

<h4>1. 快速篩檢：數位 X 光檢查</h4>
<p>診所內備有高解析度 X 光設備。雖然 X 光無法直接看到軟骨（椎間盤），但我們可以透過觀察<strong>「骨頭排列」</strong>來推斷：</p>
<ul>
    <li><strong>椎間隙變窄：</strong> 暗示中間的軟骨可能已經脫水磨損或突出。</li>
    <li><strong>骨刺增生：</strong> 脊椎退化的證據。</li>
    <li><strong>脊椎滑脫：</strong> 骨頭位置跑掉，造成不穩定。</li>
</ul>

<p><img src="/images/diseases/spine-hip/HIVD/c.jpg" alt="椎間盤突出X光"></p>

<h4>2. 黃金標準：核磁共振 (MRI)</h4>
<p>若症狀經過復健治療未改善，或是出現肌肉無力等嚴重神經學症狀，我們會建議安排 MRI 檢查。MRI 可以清晰地顯影出軟組織，讓我們看到椎間盤突出的<strong>確切位置、大小</strong>，以及神經根被壓迫的<strong>嚴重程度</strong>，這是評估是否需要手術的關鍵依據。</p>

<p><img src="/images/diseases/spine-hip/HIVD/d.jpg" alt="椎間盤突出MRI"></p>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h3>🛡️ 治療三部曲：80% 患者免開刀的秘密</h3>
<p>確診後別慌張，根據統計，<strong>超過 80% 的椎間盤突出患者可以透過非手術治療痊癒</strong>。宸新復健科提供階梯式的治療策略：</p>

<div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
    <h4 style="margin-top: 0; color: #0e7490 !important;">第一階段：健保復健與藥物 (Conservative Therapy)</h4>
    <p style="margin-bottom: 0; color: #334155 !important;">
        急性期透過口服消炎藥或神經穩定劑緩解疼痛。搭配<strong>腰椎牽引 (拉腰)</strong>，利用機械力量拉開脊椎間隙，產生負壓效果，幫助突出的椎間盤「縮回去」，並放鬆緊繃的肌肉。
    </p>
</div>

<div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
    <h4 style="margin-top: 0; color: #0e7490 !important;">第二階段：PRP 再生注射 (Regenerative Therapy)</h4>
    <p style="margin-bottom: 0; color: #334155 !important;">
        若復健效果緩慢，可考慮<strong style="color: #0891b2 !important;">PRP 增生療法</strong>。在超音波導引下，將高濃度血小板注射至受損的韌帶與小面關節周圍。生長因子能促進纖維環的修復，強化脊椎穩定度，從根本解決疼痛，這在現代醫學中是避免手術的一大利器。
    </p>
</div>

<div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
    <h4 style="margin-top: 0; color: #0e7490 !important;">第三階段：核心肌群訓練 (Core Stability)</h4>
    <p style="margin-bottom: 0; color: #334155 !important;">
        「天然的最好！」最強的護腰其實是您的<strong>核心肌群</strong>。待疼痛緩解後，透過徒手治療師的一對一指導（如紅繩、皮拉提斯），訓練深層腹橫肌與多裂肌，穩固脊椎，這是<strong>避免復發</strong>的唯一途徑。
    </p>
</div>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h3>🧘‍♂️ 預防勝於治療：您的坐姿正確嗎？</h3>
<p>所有的治療都抵不過一個壞姿勢。椎間盤突出常被稱為「久坐病」，因為坐姿時腰椎承受的壓力是站姿的 1.5 倍，若是彎腰駝背，壓力更會暴增至 2 倍以上。</p>

<h4>💡 醫師的護脊小叮嚀：</h4>
<ul>
    <li><strong>坐好坐滿：</strong> 屁股坐到椅子最深處。</li>
    <li><strong>腰部支撐：</strong> 使用靠墊支撐腰椎前凸的弧度。</li>
    <li><strong>腳踏實地：</strong> 雙腳平踩地面，膝蓋與臀部同高。</li>
    <li><strong>定時起身：</strong> 每 30-40 分鐘起身活動，別讓椎間盤「餓死」（椎間盤靠活動時的壓力變化來交換養分）。</li>
</ul>

<p><img src="/images/diseases/spine-hip/HIVD/f.jpg" alt="正確的坐姿示意圖"></p>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<div style="background-color: #ecfdf5; padding: 2rem; border-radius: 1rem; margin-top: 3rem; text-align: center;">
    <h3 style="color: #047857 !important; margin-top: 0;">👨‍⚕️ 坐骨神經痛不是絕症！</h3>
    <p style="color: #334155 !important; margin-bottom: 1.5rem;">只要及早診斷、精準治療，絕大多數的椎間盤突出都能獲得良好的改善。宸新復健科擁有完整的檢查設備與多元治療方案，讓我們陪您一起挺直腰桿，找回行動自如的快樂！</p>
    <p style="font-weight: bold; color: #059669 !important;">腰痠背痛？立即預約專業評估！</p>
</div>
          `,
        symptoms: ['下背劇痛', '坐骨神經痛 (腿麻)', '彎腰時疼痛加劇', '下肢無力'],
        treatments: [ '服用止痛藥物', '物理治療 (牽引)', '<a href="/treatments/manual" class="text-cyan-400 hover:underline">徒手運動治療</a>🔍️','<a href="/treatments/prp" class="text-cyan-400 hover:underline">PRP 增生療法</a>🔍️'],
        seoKeywords: ['腰椎椎間盤突出', '坐骨神經痛', '腳麻', '下背痛', '閃到腰', 'HIVD', '脊椎牽引', 'PRP增生療法', '核心肌群', '免動刀復健'],  
        seoDescription: '彎腰刺痛、腳麻像觸電？小心是「腰椎椎間盤突出」壓迫坐骨神經。宸新復健科提供免動刀治療方案，整合健保牽引(拉腰)、PRP增生注射與核心肌群訓練，精準修復脊椎健康。',
        images: [
           { src: '/images/diseases/spine-hip/HIVD/e.jpg', alt: '脊椎椎間盤突出構造圖' }
        ]
      },
      {
        id: 'cervical-disc-degeneration',
        slug: 'cervical-disc-degeneration',
        title: '頸椎椎間盤退化',
        description: '低頭滑手機導致脖子緊繃、手麻傳到手指？這不只是肌肉痠痛，小心是頸椎長骨刺或椎間盤突出。了解免動刀的修復關鍵。',
        contentHtml: `
<p style="color: #e2e8f0 !important;">您是否也是「低頭族」的一員？搭捷運滑手機、上班盯電腦，下班追劇還是在低頭。長時間維持同一姿勢，您是否常覺得肩頸僵硬，甚至偶爾會感覺手臂一陣麻痛傳到手指？小心，這不只是單純的肌肉痠痛，而是<strong style="color: #22d3ee !important;">頸椎椎間盤突出</strong>正在發出的警訊。</p>

<p style="color: #e2e8f0 !important;">宸新復健科提供從<strong>精準診斷</strong>、<strong>物理治療</strong>到<strong>再生醫學 (PRP)</strong> 的全方位頸椎照護方案。我們致力於協助您擺脫「烏龜頸」，找回抬頭挺胸的自信與無痛生活。</p>


<div style="background-color: #fffbeb; border: 2px solid #fbbf24; border-radius: 1rem; padding: 1.5rem; margin: 2rem 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
    <h2 style="color: #b45309 !important; margin-top: 0; font-weight: bold; border-bottom: 2px solid #fcd34d; padding-bottom: 0.5rem; display: flex; align-items: center;">
        📢 為什麼頸椎會提早退化？手機脖的危機
    </h2>
    
    <p style="font-size: 1.1rem; color: #78350f !important;">人的頭部重量約為 5 公斤（像一顆保齡球）。當我們維持直立時，頸椎承受的壓力最小。但研究顯示，當頭部每往前傾 15 度，頸椎承受的壓力就會倍增：</p>
    
    <ul style="list-style: none; padding: 0; margin-top: 1rem; color: #92400e !important;">
        <li style="margin-bottom: 1rem; display: flex; align-items: start;">
            <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">1</span>
            <div style="color: #92400e !important;">
                <strong style="color: #0891b2 !important;">低頭 30 度：</strong> 
                頸椎承受約 <strong style="color: #0891b2 !important;">18 公斤</strong> 的壓力。
            </div>
        </li>
        <li style="margin-bottom: 1rem; display: flex; align-items: start;">
            <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">2</span>
            <div style="color: #92400e !important;">
                <strong style="color: #0891b2 !important;">低頭 60 度：</strong> 
                壓力暴增至 <strong style="color: #0891b2 !important;">27 公斤</strong>，相當於一個小學生的體重掛在您的脖子上！
            </div>
        </li>
        <li style="margin-bottom: 0; display: flex; align-items: start;">
            <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">3</span>
            <div style="color: #92400e !important;">
                <strong style="color: #0891b2 !important;">結果：</strong> 
                這種長期不正常的受力，會導致頸椎椎間盤提早磨損、脫水，甚至導致內部的髓核像果凍一樣被擠出來，形成突出。
            </div>
        </li>
    </ul>
</div>


<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h3 style="color: #f8fafc !important;">⚡ 從痠痛到手麻：症狀的三階段演變</h3>
<p style="color: #e2e8f0 !important;">頸椎問題通常不是一天造成的，而是循序漸進的惡化。了解症狀進程，有助於您把握黃金治療期：</p>

<h4 style="color: #f1f5f9 !important;">階段一：肩頸僵硬 (Local Pain)</h4>
<p style="color: #e2e8f0 !important;">初期僅感覺脖子緊緊的、落枕頻率變高，常覺得肩膀重得像有石頭壓著。這時多半是肌肉緊繃與小面關節發炎。</p>

<h4 style="color: #f1f5f9 !important;">階段二：神經根壓迫 (Radiculopathy)</h4>
<p style="color: #e2e8f0 !important;">當突出的椎間盤壓迫到兩側的神經根時，會出現典型的<strong>「傳導痛」</strong>。這也是為什麼明明是脖子有問題，卻是手臂或手指在痛。根據壓迫的節數不同，麻痛的位置也像地圖一樣精準：</p>
<ul style="color: #e2e8f0 !important;">
    <li><strong>頸椎第 5 節 (C5)：</strong> 肩膀外側麻痛。</li>
    <li><strong>頸椎第 6 節 (C6)：</strong> 延伸至大拇指、食指（像是比讚的手勢區域）。</li>
    <li><strong>頸椎第 7 節 (C7)：</strong> 延伸至中指。</li>
    <li><strong>頸椎第 8 節 (C8)：</strong> 延伸至無名指、小指。</li>
</ul>

<p><img src="/images/diseases/spine-hip/CHIVD/b.jpg" alt="頸部神經壓迫疼痛地圖"></p>

<h4 style="color: #f1f5f9 !important;">階段三：脊髓病變 (Myelopathy)</h4>
<p style="color: #e2e8f0 !important;">這是最危險的情況。若椎間盤直接向後正中突出，壓迫到<strong>脊髓 (Spinal Cord)</strong>，會造成全身性的影響，如雙腳無力、走路像踩棉花不穩、手部精細動作困難（扣釦子、拿筷子變笨拙）。這時通常需要手術介入。</p>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h3 style="color: #f8fafc !important;">🔍 我們如何精準診斷？</h3>
<p style="color: #e2e8f0 !important;">要解決問題，必須先看清問題。宸新復健科提供完善的影像檢查：</p>

<h4 style="color: #f1f5f9 !important;">X 光檢查：看骨頭排列</h4>
<p style="color: #e2e8f0 !important;">診所內備有數位 X 光設備，可以快速檢查：</p>
<ul style="color: #e2e8f0 !important;">
    <li><strong>椎間盤變窄：</strong> 代表軟骨磨損，有突出風險。</li>
    <li><strong>骨刺增生 (Spondylosis)：</strong> 骨頭為了應對壓力而增生的防禦機制。</li>
    <li><strong>頸椎曲度變直：</strong> 從原本健康的 C 型曲線變成筆直的「軍人頸 (Military Neck)」，這是肌肉長期緊繃的證據。</li>
</ul>

<p><img src="/images/diseases/spine-hip/CHIVD/c.jpg" alt="椎間盤突出X光"></p>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h3 style="color: #f8fafc !important;">🛡️ 治療三部曲：宸新復健科的整合治療</h3>
<p style="color: #e2e8f0 !important;">確診為頸椎椎間盤突出不代表一定要開刀。統計顯示，<strong>80% 的患者可透過非手術治療痊癒</strong>。我們提供階梯式的治療方案：</p>

<div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
    <h4 style="margin-top: 0; color: #0e7490 !important;">1. 健保物理治療 (保守治療)</h4>
    <p style="margin-bottom: 0; color: #334155 !important;">
        急性期可透過口服藥物消炎止痛。搭配<strong>頸椎牽引 (拉脖子)</strong>，利用機器溫和拉開頸椎間隙，降低椎間盤內的壓力，幫助突出的部分回縮，並解除神經壓迫。
    </p>
</div>

<div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
    <h4 style="margin-top: 0; color: #0e7490 !important;">2. PRP 增生療法 (修復受損)</h4>
    <p style="margin-bottom: 0; color: #334155 !important;">
        若復健效果有限，手麻症狀持續，<strong style="color: #0891b2 !important;">PRP 增生療法</strong>是更積極的選擇。醫師會在超音波導引下，將高濃度生長因子注射至受損的頸椎小面關節與神經根周圍，促進受損的纖維環修復，並快速消除神經發炎水腫，是目前避免手術的高效療法。
    </p>
</div>

<div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
    <h4 style="margin-top: 0; color: #0e7490 !important;">3. 徒手與運動治療 (矯正體態)</h4>
    <p style="margin-bottom: 0; color: #334155 !important;">
        這是最根本的解方。頸椎問題多半來自<strong>「上交叉症候群」</strong>（烏龜頸＋圓肩）。透過徒手治療放鬆過緊的胸肌與上斜方肌，並教導您訓練<strong>深層頸屈肌</strong>（收下巴運動），重新建立頸椎的正確排列，避免復發。
    </p>
</div>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h3 style="color: #f8fafc !important;">🧘‍♂️ 醫師的護頸小叮嚀：正確姿勢</h3>
<p style="color: #e2e8f0 !important;">預防勝於治療，請在日常生活中落實以下原則：</p>
<ul style="color: #e2e8f0 !important;">
    <li><strong>螢幕高度：</strong> 電腦螢幕上緣應與視線平視，避免低頭。</li>
    <li><strong>收下巴：</strong> 時刻提醒自己「縮下巴 (Chin Tuck)」，讓耳垂對準肩膀上方。</li>
    <li><strong>手肘支撐：</strong> 使用電腦時，手肘應有支撐，避免聳肩造成頸部壓力。</li>
    <li><strong>定時活動：</strong> 每 30 分鐘轉動頸部，做擴胸運動。</li>
</ul>

<p><img src="/images/diseases/spine-hip/CHIVD/d.jpg" alt="正確的坐姿示意圖"></p>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<div style="background-color: #ecfdf5; padding: 2rem; border-radius: 1rem; margin-top: 3rem; text-align: center;">
    <h3 style="color: #047857 !important; margin-top: 0;">👨‍⚕️ 頸椎健康，生活才自在！</h3>
    <p style="color: #334155 !important; margin-bottom: 1.5rem;">手麻、脖子痛不是忍一忍就會好。若延誤治療造成神經永久損傷，將得不償失。宸新復健科擁有完整的檢查與治療團隊，讓我們幫您找回靈活的頸椎！</p>
    <p style="font-weight: bold; color: #059669 !important;">經常手麻脖子痛？立即預約評估！</p>
</div>
        
                  `,
        symptoms: ['頸部疼痛僵硬', '膏肓痛', '手臂麻木刺痛', '頭痛 (頸因性頭痛)'],
        treatments: ['姿勢矯正 (收下巴)', '頸椎牽引', '<a href="/treatments/manual" class="text-cyan-400 hover:underline">徒手運動治療</a>🔍️', '<a href="/treatments/prp" class="text-cyan-400 hover:underline">PRP 增生療法</a>🔍️'],
        seoKeywords: ['頸椎椎間盤退化', '頸椎骨刺', '手麻', '脖子痛', '手機脖', '烏龜頸', '上交叉症候群', '頸椎牽引', 'PRP增生療法', '膏肓痛'],
        seoDescription: '低頭族手麻、脖子痛？小心是「頸椎椎間盤突出」或長骨刺。宸新復健科提供免動刀治療方案，結合頸椎牽引、PRP增生注射與徒手物理治療，精準改善神經壓迫與烏龜頸體態。',
        images: [
           { src: '/images/diseases/spine-hip/CHIVD/a.jpg', alt: '頸部疼痛示意圖' }
        ]
      },
      {
        id: 'piriformis-syndrome',
        slug: 'piriformis-syndrome',
        title: '梨狀肌症候群',
        description: '久坐屁股深處痠痛、腳麻像觸電？這可能是「假性坐骨神經痛」。了解如何透過伸展與注射解開梨狀肌緊繃。',
        contentHtml: `
<p style="color: #e2e8f0 !important;">您是否有過這種感覺：明明腰沒有很痛，但<strong>屁股深處</strong>卻像被人狠狠揍了一拳，痠痛感一路延伸到大腿後側？坐著超過 15 分鐘就如坐針氈，甚至睡覺翻身都會痛醒？</p>

<p style="color: #e2e8f0 !important;">這可能不是脊椎出了問題，而是您的屁股「緊繃」了！這就是俗稱「假性坐骨神經痛」的<strong>梨狀肌症候群</strong>。宸新復健科提供從精準診斷、超音波導引注射到徒手物理治療的完整方案，幫您解開緊繃的枷鎖，找回輕鬆的臀部。</p>


<div style="background-color: #fffbeb; border: 2px solid #fbbf24; border-radius: 1rem; padding: 1.5rem; margin: 2rem 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
    <h2 style="color: #b45309 !important; margin-top: 0; font-weight: bold; border-bottom: 2px solid #fcd34d; padding-bottom: 0.5rem; display: flex; align-items: center;">
        📢 什麼是梨狀肌？屁股裡的隱形殺手
    </h2>
    
    <p style="font-size: 1.1rem; color: #78350f !important;">梨狀肌是位於臀部深層（臀大肌下面）的一條小肌肉，起點在薦骨，終點在大腿骨大轉子。它的功能主要是協助大腿<strong>外旋</strong>（像是翹二郎腿的動作）。為什麼它會出問題？</p>
    
    <ul style="list-style: none; padding: 0; margin-top: 1rem; color: #92400e !important;">
        <li style="margin-bottom: 1rem; display: flex; align-items: start;">
            <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">1</span>
            <div style="color: #92400e !important;">
                <strong style="color: #0891b2 !important;">久坐受壓：</strong> 
                長時間久坐（尤其是坐硬椅子），梨狀肌就像被夾心餅乾一樣長期缺血、緊繃。
            </div>
        </li>
        <li style="margin-bottom: 1rem; display: flex; align-items: start;">
            <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">2</span>
            <div style="color: #92400e !important;">
                <strong style="color: #0891b2 !important;">過度使用：</strong> 
                長跑選手、自行車騎士或突然進行高強度的深蹲訓練，導致肌肉微小撕裂傷發炎腫脹。
            </div>
        </li>
        <li style="margin-bottom: 0; display: flex; align-items: start;">
            <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">3</span>
            <div style="color: #92400e !important;">
                <strong style="color: #0891b2 !important;">錢包症候群 (Wallet Neuritis)：</strong> 
                習慣將厚錢包放在後口袋並坐著，直接壓迫梨狀肌與神經，這是許多男性的痛點。
            </div>
        </li>
    </ul>
</div>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h3 style="color: #f8fafc !important;">⚡ 症狀解析：深層的痛與麻</h3>
<p style="color: #e2e8f0 !important;">梨狀肌發炎時，最典型的特徵就是<strong>「深層臀部疼痛」</strong>。這種痛點位於屁股肉最多的地方，按壓時會感到一陣痠軟。疼痛常在變換姿勢、翹腳、上下樓梯或久坐超過 30 分鐘時加劇。</p>

<p><img src="/images/diseases/spine-hip/piri/b.jpg" alt="梨狀肌疼痛"></p>

<h4 style="color: #f1f5f9 !important;">為什麼會腳麻？（坐骨神經的無辜受累）</h4>
<p style="color: #e2e8f0 !important;">這正是它被稱為「假性坐骨神經痛」的原因。<strong>坐骨神經</strong>剛好從梨狀肌的下方（或中間）穿過。當梨狀肌因為發炎而腫脹、變硬時，就會像「掐脖子」一樣勒住下方的坐骨神經。</p>
<p style="color: #e2e8f0 !important;">這會引發類似椎間盤突出的神經症狀，造成疼痛、麻感或電流感一路從屁股延伸到<strong>大腿後側</strong>，甚至到達小腿。但與椎間盤突出不同的是，梨狀肌症候群通常<strong>不會</strong>造成腰部疼痛。</p>

<p><img src="/images/diseases/spine-hip/piri/c.jpg" alt="梨狀肌壓迫坐骨神經示意圖"></p>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h3 style="color: #f8fafc !important;">🔍 到底是腰椎突出還是梨狀肌？</h3>
<p style="color: #e2e8f0 !important;">這兩者症狀太像，常被誤診。宸新復健科醫師教您簡單分辨：</p>
<ul style="color: #e2e8f0 !important;">
    <li><strong>腰椎椎間盤突出：</strong> 通常伴隨「下背痛」，彎腰時症狀加劇，直抬腿測試 (SLR) 角度受限。</li>
    <li><strong>梨狀肌症候群：</strong> 腰部通常不痛（或只有輕微痠），主要是「屁股痛」。做<strong>翹二郎腿 (Figure 4)</strong> 的動作並下壓膝蓋時，屁股深處會劇痛。</li>
</ul>
<p style="color: #94a3b8 !important; font-size: 0.9rem;">*註：最準確的鑑別診斷仍需由醫師透過超音波或 MRI 檢查確認。</p>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h3 style="color: #f8fafc !important;">🛡️ 治療三部曲：解開屁股的結</h3>
<p style="color: #e2e8f0 !important;">好消息是，<strong>90% 的梨狀肌症候群不需要開刀</strong>。我們採用階梯式治療：</p>

<div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
    <h4 style="margin-top: 0; color: #0e7490 !important;">1. 保守治療 (消炎與放鬆)</h4>
    <p style="margin-bottom: 0; color: #334155 !important;">
        急性期口服肌肉鬆弛劑與消炎藥。物理治療使用深層熱療（如短波、超音波）來增加深部血液循環，軟化僵硬的肌肉組織。
    </p>
</div>

<div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
    <h4 style="margin-top: 0; color: #0e7490 !important;">2. 神經減壓注射 (精準解除壓迫)</h4>
    <p style="margin-bottom: 0; color: #334155 !important;">
        若物理治療效果緩慢，這是一針見效的方法。醫師在<strong>超音波導引</strong>下，可以清楚看到腫脹的梨狀肌與受壓的坐骨神經。我們使用<strong style="color: #0891b2 !important;">神經解套注射 (Hydrodissection)</strong>，將藥水精準注入肌肉與神經之間的沾黏處，像「水刀」一樣將它們分開，瞬間解除壓迫，並能一併施打 PRP 修復受傷的肌肉纖維。
    </p>
</div>

<div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
    <h4 style="margin-top: 0; color: #0e7490 !important;">3. 徒手與運動治療 (避免復發)</h4>
    <p style="margin-bottom: 0; color: #334155 !important;">
        這是長治久安的關鍵。物理治療師會透過<strong>徒手治療</strong>按壓放鬆深層激痛點。接著指導您進行<strong>臀肌強化</strong>，因為很多時候是因為臀大肌無力，導致小小的梨狀肌必須「過勞」代償，練好臀部肌肉才能真正斷根。
    </p>
</div>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h3 style="color: #f8fafc !important;">🧘‍♂️ 居家復健：醫師教您自救兩招</h3>
<p style="color: #e2e8f0 !important;">除了治療，日常的保養至關重要。建議久坐族每小時都要起來做一次：</p>

<h4 style="color: #f1f5f9 !important;">1. 梨狀肌伸展 (Piriformis Stretch)</h4>
<p style="color: #e2e8f0 !important;">坐在椅子上，將痛側的腳踝跨到對側膝蓋上（翹二郎腿姿勢）。腰桿挺直，身體慢慢往前傾，直到感覺屁股深處有緊繃痠痛感。停留 <strong>30 秒</strong>，重複 3-5 次。這能有效拉開緊繃的梨狀肌。</p>

<p><img src="/images/diseases/spine-hip/piri/d.jpg" alt="梨狀肌伸展教學"></p>

<h4 style="color: #f1f5f9 !important;">2. 橋式運動 (Bridge Exercise)</h4>
<p style="color: #e2e8f0 !important;">平躺，雙膝彎曲踩地。利用臀部的力量將骨盆抬起，使身體呈一直線。停留 <strong>5~10 秒</strong>，早晚各做 10 次。這能喚醒沉睡的臀大肌，減輕梨狀肌的負擔。</p>

<p><img src="/images/diseases/spine-hip/piri/e.jpg" alt="橋式訓練教學"></p>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<div style="background-color: #ecfdf5; padding: 2rem; border-radius: 1rem; margin-top: 3rem; text-align: center;">
    <h3 style="color: #047857 !important; margin-top: 0;">👨‍⚕️ 屁股痛？別再忍耐！</h3>
    <p style="color: #334155 !important; margin-bottom: 1.5rem;">梨狀肌症候群雖然惱人，但只要找對醫師、做對治療，恢復速度通常很快。宸新復健科擁有精準的超音波技術與專業治療團隊，讓我們幫您甩開屁股痛，坐得安穩、動得自在！</p>
    <p style="font-weight: bold; color: #059669 !important;">久坐屁股痛？立即預約精準評估！</p>
</div>
        `,
        symptoms: ['深層臀部痠痛', '久坐疼痛加劇', '無法翹二郎腿', '大腿後側麻痛'],
        treatments: ['梨狀肌伸展', '物理治療', '神經減壓注射', '<a href="/treatments/manual" class="text-cyan-400 hover:underline">徒手運動治療</a>🔍️'],
        seoKeywords: ['梨狀肌症候群', '屁股痛', '假性坐骨神經痛', '腳麻', '久坐屁股痛', '神經解套注射', '深層臀痛', '錢包症候群', '徒手治療', '免動刀復健'],
        seoDescription: '屁股深處痠痛、腳麻？小心是「梨狀肌症候群」引發的假性坐骨神經痛！宸新復健科透過超音波導引神經解套注射與徒手物理治療，精準解除神經壓迫，免動刀改善久坐臀痛。',
        images: [
           { src: '/images/diseases/spine-hip/piri/a.jpg', alt: '梨狀肌疼痛示意圖' }
        ]
      },
      
  
      {
        id: 'hip-osteoarthritis',
        slug: 'hip-osteoarthritis',
        title: '退化性髖關節炎',
        description: '走路該邊痛、穿襪子腳抬不起來？這是退化性髖關節炎的典型警訊。了解如何透過PRP與復健保養關節，找回輕盈步伐。',
        contentHtml: `
<p style="color: #e2e8f0 !important;">走路時總是覺得「該邊」（鼠蹊部）隱隱作痛？穿襪子、剪腳指甲變得越來越困難？小心，這可能不是單純的肌肉拉傷，而是<strong>退化性髖關節炎</strong>正在悄悄侵蝕您的行動力。</p>

<p style="color: #e2e8f0 !important;">髖關節是人體最大的負重關節，支撐著我們跑、跳、走的每一步。宸新復健科提供從<strong>精準影像診斷</strong>、<strong>徒手物理治療</strong>到<strong>再生醫學 (PRP)</strong> 的整合照護，助您保養關節，找回輕盈的步伐。</p>


<div style="background-color: #fffbeb; border: 2px solid #fbbf24; border-radius: 1rem; padding: 1.5rem; margin: 2rem 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
    <h2 style="color: #b45309 !important; margin-top: 0; font-weight: bold; border-bottom: 2px solid #fcd34d; padding-bottom: 0.5rem; display: flex; align-items: center;">
        📢 為什麼髖關節會退化？不只是老人的專利
    </h2>
    
    <p style="font-size: 1.1rem; color: #78350f !important;">退化性髖關節炎是因長期負重與磨損，導致關節軟骨逐漸變薄、消失的疾病。雖然常見於中老年族群，但以下高風險族群也需提早警覺：</p>
    
    <ul style="list-style: none; padding: 0; margin-top: 1rem; color: #92400e !important;">
        <li style="margin-bottom: 1rem; display: flex; align-items: start;">
            <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">1</span>
            <div style="color: #92400e !important;">
                <strong style="color: #0891b2 !important;">體重過重：</strong> 
                行走時髖關節需承受體重 3 倍的壓力。體重每增加 1 公斤，關節負擔就增加 3~4 公斤。
            </div>
        </li>
        <li style="margin-bottom: 1rem; display: flex; align-items: start;">
            <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">2</span>
            <div style="color: #92400e !important;">
                <strong style="color: #0891b2 !important;">舊傷或發育不良：</strong> 
                曾經骨折、脫臼，或是先天性髖關節發育不良 (DDH)，都會讓關節受力不均，加速磨損。
            </div>
        </li>
        <li style="margin-bottom: 0; display: flex; align-items: start;">
            <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">3</span>
            <div style="color: #92400e !important;">
                <strong style="color: #0891b2 !important;">股骨頭缺血性壞死 (AVN)：</strong> 
                長期使用類固醇或酗酒者，易導致股骨頭血液循環受阻而壞死塌陷，最終引發嚴重退化。
            </div>
        </li>
    </ul>
</div>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h3 style="color: #f8fafc !important;">⚡ 別搞錯！髖關節痛不是屁股痛</h3>
<p style="color: #e2e8f0 !important;">這是民眾最常混淆的觀念。真正的髖關節病變，痛點通常不在屁股後面（那是坐骨神經或梨狀肌的問題），而是集中在<strong>腹股溝（鼠蹊部/該邊）</strong>，有時會延伸到大腿前側或膝蓋內側。</p>

<h4 style="color: #f1f5f9 !important;">常見的三大警訊：</h4>
<ul style="color: #e2e8f0 !important;">
    <li><strong>晨間僵硬 (Morning Stiffness)：</strong> 早上起床時關節像卡住一樣，活動 10-20 分鐘後才會比較順。</li>
    <li><strong>活動受限 (ROM Loss)：</strong> 發現很難翹二郎腿、穿襪子要把腳抬很高很吃力、無法蹲低。</li>
    <li><strong>跛行 (Limping)：</strong> 走路一跛一跛，身體會偏向患側（這是一種為了減輕疼痛的代償步態）。</li>
</ul>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h3 style="color: #f8fafc !important;">🔍 X 光下的真相：軟骨去哪了？</h3>
<p style="color: #e2e8f0 !important;">透過 X 光檢查，我們可以清楚看到關節退化的程度。正常的髖關節，圓球狀的股骨頭與骨盆之間應該有一條黑色的縫隙，那就是健康的軟骨。</p>
<p style="color: #e2e8f0 !important;">但在退化性關節炎的影像中（如下圖），您會發現：</p>
<ul style="color: #e2e8f0 !important;">
    <li><strong>關節間隙變窄：</strong> 如下圖箭頭所示，原本的縫隙消失了，代表軟骨已經磨損殆盡，變成「骨頭磨骨頭」。</li>
    <li><strong>骨刺增生 (Osteophytes)：</strong> 骨頭邊緣長出尖銳的骨刺。</li>
    <li><strong>軟骨下骨硬化 (Sclerosis)：</strong> 骨頭顏色變白、變硬。</li>
</ul>

<p><img src="/images/diseases/spine-hip/OA/b.jpg" alt="嚴重的髖關節退化X光，箭頭處顯示軟骨消失"></p>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h3 style="color: #f8fafc !important;">🛡️ 治療三部曲：保養、修復、重建</h3>
<p style="color: #e2e8f0 !important;">髖關節退化不可逆，但我們可以「延緩」惡化並「改善」疼痛。宸新復健科採用階梯式治療策略：</p>

<div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
    <h4 style="margin-top: 0; color: #0e7490 !important;">1. 基礎保養 (減重與物理治療)</h4>
    <p style="margin-bottom: 0; color: #334155 !important;">
        <strong>減重</strong>是特效藥。研究顯示，每減輕 1 公斤體重，行走時髖關節的負擔就減少 4 公斤！搭配<strong>徒手治療</strong>放鬆緊繃的髂腰肌與內收肌群，增加關節活動角度，並利用儀器治療緩解發炎。
    </p>
</div>

<div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
    <h4 style="margin-top: 0; color: #0e7490 !important;">2. PRP 增生療法 (促進軟骨修復)</h4>
    <p style="margin-bottom: 0; color: #334155 !important;">
        對於中度退化、不想開刀的患者，<strong style="color: #0891b2 !important;">PRP (高濃度血小板) 注射</strong>是極佳的選擇。醫師會在超音波導引下，將生長因子精準注入狹窄的關節腔內。這能抑制發炎、減緩軟骨磨損速度，並改善關節潤滑液的品質，就像幫生鏽的齒輪上了頂級潤滑油。
    </p>
</div>

<div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
    <h4 style="margin-top: 0; color: #0e7490 !important;">3. 運動訓練 (天然護具)</h4>
    <p style="margin-bottom: 0; color: #334155 !important;">
        <strong>臀中肌</strong>是穩定髖關節最重要的肌肉。透過正確的肌力訓練（如側抬腿、蚌殼式），能強化肌肉力量，分擔關節承受的壓力。這比任何護具都來得有效。
    </p>
</div>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h3 style="color: #f8fafc !important;">🧘‍♂️ 日常保養小叮嚀</h3>
<ul style="color: #e2e8f0 !important;">
    <li><strong>減少負重：</strong> 避免頻繁上下樓梯、爬山或深蹲，這些動作會對髖關節造成巨大壓力。</li>
    <li><strong>輔具使用：</strong> 疼痛嚴重時，請不要排斥使用登山杖或拐杖（拿在好邊），這能大幅分擔患側壓力。</li>
    <li><strong>水中運動：</strong> 游泳或水中走路是最好的運動，水的浮力能支撐體重，讓關節在無負擔的情況下活動。</li>
</ul>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<div style="background-color: #ecfdf5; padding: 2rem; border-radius: 1rem; margin-top: 3rem; text-align: center;">
    <h3 style="color: #047857 !important; margin-top: 0;">👨‍⚕️ 別讓疼痛限制了您的世界！</h3>
    <p style="color: #334155 !important; margin-bottom: 1.5rem;">髖關節退化雖然不可逆，但透過正確的治療與保養，您依然可以擁有高品質的生活。若您有鼠蹊部疼痛或活動受限的困擾，請盡快至宸新復健科評估，讓我們幫您保住珍貴的關節！</p>
    <p style="font-weight: bold; color: #059669 !important;">走路卡卡不順？立即預約專業檢查！</p>
</div>
        `,
        symptoms: ['鼠蹊部疼痛', '走路跛行', '關節活動受限 (穿襪困難)', '腹股溝壓痛'],
        treatments: ['復健藥物治療', '<a href="/treatments/manual" class="text-cyan-400 hover:underline">徒手運動治療</a>🔍️', '<a href="/treatments/prp" class="text-cyan-400 hover:underline">PRP 增生療法</a>🔍️', '人工關節置換'],
        seoKeywords: ['退化性髖關節炎', '髖關節磨損', '鼠蹊部疼痛', '該邊痛', '走路跛行',   '穿襪子困難', 'PRP增生療法', '徒手物理治療', '股骨頭缺血性壞死', '免動刀治療'         
      ],
      
      seoDescription: '走路鼠蹊部(該邊)痛、穿襪子困難？小心是「退化性髖關節炎」。宸新復健科提供免動刀治療方案，結合精準診斷、PRP增生注射與徒手物理治療，助您延緩關節置換，改善跛行與活動受限。',
        images: [
           { src: '/images/diseases/spine-hip/OA/a.jpg', alt: '髖關節退化' }
        ]
      }
      
    ]
  },

  // =======================================================
  // 2. 肩膀 (關鍵字：五十肩、肩膀痛、手舉不起來)
  // =======================================================
  {
    slug: 'shoulder',
    title: '肩膀',
    description: '肩膀相關疾病',
    image: '/images/diseases/b.jpg',
    seoKeywords: ['新竹五十肩治療', '肩膀痛', '旋轉肌破裂', '鈣化性肌腱炎', '新竹物理治療'],
    seoDescription: '肩膀痛手舉不起來？五十肩與旋轉肌撕裂治療推薦。免開刀肩關節擴張術與PRP修復，解決夜間痛醒與活動受限問題。',
    diseases: [
      {
        id: 'rotator-cuff-tear',
        slug: 'rotator-cuff-tear',
        title: '旋轉肌撕裂',
        description: '手舉不高、半夜痛醒？小心是「旋轉肌撕裂」而非五十肩！宸新復健科透過高解析肌肉骨骼超音波精準診斷，提供PRP增生注射與專業徒手物理治療，為您量身打造免動刀的肌腱修復計畫，找回肩膀活動力。',
        contentHtml: `
<p style="color: #e2e8f0 !important;">您是否有這樣的困擾：想梳頭髮手卻舉不高？穿衣服時手無法伸到背後扣釦子？或是晚上睡覺壓到肩膀時，會被一陣尖銳的疼痛痛醒？小心，這可能不是單純的五十肩，而是更常見的肩膀隱形殺手——<strong>旋轉肌袖撕裂 (Rotator Cuff Tear)</strong>。</p>
<br>
<p style="color: #e2e8f0 !important;">肩膀是人體活動度最大的關節，但高靈活度也伴隨著高受傷風險。宸新復健科擁有高解析度肌肉骨骼超音波，能快速精準診斷肌腱受損程度，並提供從徒手物理治療到 PRP 再生注射的全方位免動刀修復方案。</p>



<div style="background-color: #fffbeb; border: 2px solid #fbbf24; border-radius: 1rem; padding: 1.5rem; margin: 2rem 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
    <h2 style="color: #b45309 !important; margin-top: 0; font-weight: bold; border-bottom: 2px solid #fcd34d; padding-bottom: 0.5rem; display: flex; align-items: center;">
        📢 什麼是「旋轉肌袖」？肩膀的安全帶
    </h2>
    
    <p style="font-size: 1.1rem; color: #78350f !important;">肩膀就像一個球窩關節（高爾夫球與球座），為了讓手臂這顆「球」能穩穩地待在肩胛骨這個淺淺的「座」上轉動，我們需要一組肌肉像袖套一樣包覆住關節。這組肌肉合稱「旋轉肌袖」，由四條肌肉組成：</p>
    
    <ul style="list-style: none; padding: 0; margin-top: 1rem; color: #92400e !important;">
        <li style="margin-bottom: 1rem; display: flex; align-items: start;">
            <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">1</span>
            <div style="color: #92400e !important;">
                <strong style="color: #0891b2 !important;">棘上肌 (Supraspinatus)：</strong> 
                最容易受傷的一條！負責啟動手臂側舉的動作。它常常被夾在肩峰骨頭與肱骨之間摩擦。
            </div>
        </li>
        <li style="margin-bottom: 1rem; display: flex; align-items: start;">
            <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">2</span>
            <div style="color: #92400e !important;">
                <strong style="color: #0891b2 !important;">棘下肌 (Infraspinatus) 與 小圓肌 (Teres Minor)：</strong> 
                負責手臂向外旋轉的動作（例如梳頭、投球的後擺動作）。
            </div>
        </li>
        <li style="margin-bottom: 0; display: flex; align-items: start;">
            <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">3</span>
            <div style="color: #92400e !important;">
                <strong style="color: #0891b2 !important;">肩胛下肌 (Subscapularis)：</strong> 
                位於肩胛骨前方，負責手臂向內旋轉（例如插腰、摸後背）。
            </div>
        </li>
    </ul>
</div>

<p><img src="/images/diseases/shoulder/tear/b.jpg" alt="肩關節旋轉肌袖解剖構造圖，顯示棘上肌肌腱位置"></p>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h3 style="color: #f8fafc !important;">⚡ 為什麼會撕裂？不只是運動員的專利</h3>
<p style="color: #e2e8f0 !important;">旋轉肌袖撕裂可分為「急性創傷」與「慢性退化」兩大類。事實上，<strong>大部分的撕裂是「磨」出來的</strong>，而非一次性的拉傷。</p>

<ul style="color: #e2e8f0 !important;">
    <li><strong>慢性退化 (最常見)：</strong> 隨著年齡增長（40歲以上），肌腱血液循環變差，彈性下降。加上長期重複性的過頂動作（如油漆工、老師寫黑板、家庭主婦曬衣服），或肩峰骨刺增生反覆摩擦肌腱（夾擠症候群），肌腱就會像一條老舊的麻繩一樣，開始磨損、分岔，最後斷裂。</li>
    <li><strong>急性創傷：</strong> 年輕人較常見。例如跌倒時手撐地、提重物拉傷、或運動時用力過猛（如棒球投擲、羽球殺球）。</li>
</ul>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h3 style="color: #f8fafc !important;">🔍 關鍵症狀：痛在哪裡？怎麼痛？</h3>
<p style="color: #e2e8f0 !important;">旋轉肌撕裂的疼痛非常有特色，通常不是痛在關節深處，而是痛在<strong>肩膀外側（三角肌粗隆附近）</strong>，有時會延伸到上手臂。</p>


<h4 style="color: #f1f5f9 !important;">五大特色：</h4>
<ol style="color: #e2e8f0 !important;">
    <li><strong>夜間疼痛：</strong> 晚上睡覺時，特別是側睡壓到患側，肩膀會出現劇烈疼痛，嚴重影響睡眠品質。</li>
    <li><strong>手臂無力：</strong> 手臂抬起變得困難，特別是在拿取高處物品或嘗試舉起重物時，會明顯感到無力而不穩。</li>
    <li><strong>活動受限：</strong> 肩膀關節的活動範圍受到限制，導致難以順利進行梳頭、穿衣或手伸到背後等日常動作。</li>
    <li><strong>特定動作疼痛：</strong> 當做特定動作時（例如將手抬高、向後轉動），肩膀的疼痛感會顯著加劇。</li>
    <li><strong>關節聲響：</strong> 活動肩膀時，關節內部容易發出「咔嗒」的聲響，或是出現類似摩擦的聲音。</li>
</ol>
<p><img src="/images/diseases/shoulder/tear/c.jpg" alt="旋轉肌袖撕裂典型症狀"></p>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h3 style="color: #f8fafc !important;">🩺 診斷利器：肌肉骨骼超音波</h3>
<p style="color: #e2e8f0 !important;">懷疑肌腱撕裂時，X 光只能看骨頭有沒有骨刺，看不到肌腱。核磁共振 (MRI) 雖然清楚但排程久且昂貴。</p>
<p style="color: #e2e8f0 !important;">在宸新復健科，我們使用<strong>高解析度肌肉骨骼超音波</strong>。它就像醫師的聽診器，能即時、動態地觀察肌腱在活動時的狀況。是部分撕裂、全層撕裂、還是鈣化發炎？超音波下一目了然，是診斷旋轉肌問題的黃金標準之一。</p>

<p style="color: #e2e8f0 !important;">下方超音波影像可清楚看到肌肉中間黑色的破洞。</p>
<p><img src="/images/diseases/shoulder/tear/d.jpg" alt="旋轉肌撕裂超音波影像"></p>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h3 style="color: #f8fafc !important;">🛡️ 治療策略：修復肌腱，重建功能</h3>
<p style="color: #e2e8f0 !important;">統計顯示，大部分（約 70-80%）的中小型撕裂或退化性撕裂，透過保守治療就能恢復良好功能，不一定要急著開刀。</p>

<div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
    <h4 style="margin-top: 0; color: #0e7490 !important;">1. 物理治療與運動訓練 (基礎工程)</h4>
    <p style="margin-bottom: 0; color: #334155 !important;">
        為什麼肌腱會磨損？通常是因為肩胛骨位置不對，或胸肌太緊、背肌無力造成的代償。物理治療師會利用<strong>徒手治療</strong>放鬆緊繃的關節囊，並指導您強化肩胛穩定肌群與未受傷的旋轉肌，導正肩膀的力學結構，避免肌腱繼續磨損。
    </p>
</div>

<div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
    <h4 style="margin-top: 0; color: #0e7490 !important;">2. <a href="/treatments/prp" >PRP 增生療法</a>🔍️ (加速癒合)</h4>
    <p style="margin-bottom: 0; color: #334155 !important;">
        肌腱的血液循環本來就不好，一旦撕裂很難自己長好。對於部分撕裂或嚴重退化的患者，<strong style="color: #0891b2 !important;">PRP (高濃度血小板血漿) 注射</strong>是強力的救援投手。在超音波導引下，將自體的生長因子精準注入撕裂孔洞中，能啟動組織再生機制，促進膠原蛋白癒合，是免於手術的高效選擇。
    </p>
</div>

<div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
    <h4 style="margin-top: 0; color: #0e7490 !important;">3. 何時需要考慮手術？</h4>
    <p style="margin-bottom: 0; color: #334155 !important;">
        如果是年輕人的急性創傷造成「全層完全斷裂」，導致手臂完全舉不起來，或者保守治療 3-6 個月後疼痛與無力仍無改善，這時就需要轉介骨科醫師評估關節鏡修補手術。
    </p>
</div>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<div style="background-color: #ecfdf5; padding: 2rem; border-radius: 1rem; margin-top: 3rem; text-align: center;">
    <h3 style="color: #047857 !important; margin-top: 0;">👨‍⚕️ 肩膀痛別硬撐，及早修復是關鍵！</h3>
    <p style="color: #334155 !important; margin-bottom: 1.5rem;">旋轉肌撕裂若置之不理，破洞可能會越來越大，最終導致不可逆的肩關節退化。宸新復健科具備精準的超音波診斷能力與再生醫療技術，讓我們協助您修復受損的翅膀，重新找回肩膀的自由！</p>
    <p style="font-weight: bold; color: #059669 !important;">手舉不高、半夜痛醒？立即預約超音波檢查！</p>
</div>
        `,
        symptoms: ['舉手疼痛無力', '夜間疼痛 (痛醒)', '外展角度疼痛', '肩膀卡卡聲'],
        treatments: ['復健藥物治療', '<a href="/treatments/manual" class="text-cyan-400 hover:underline">徒手運動治療</a>🔍️', '<a href="/treatments/prp" class="text-cyan-400 hover:underline">PRP 增生療法</a>🔍️', '手術修補'],
        seoKeywords: [
          '旋轉肌撕裂', '旋轉肌袖損傷',  '肩膀疼痛', '手舉不高',  '夜間肩痛',   '棘上肌受傷',    'PRP增生療法', '徒手治療',  '肌肉骨骼超音波','免動刀復健'       
          
      ],
      seoDescription: '手舉不高、半夜痛醒？小心是「旋轉肌撕裂」而非五十肩！宸新復健科透過高解析肌肉骨骼超音波精準診斷，提供PRP增生注射與專業徒手物理治療，為您量身打造免動刀的肌腱修復計畫，找回肩膀活動力。',
        images: [
           { src: '/images/diseases/shoulder/tear/a.jpg', alt: '旋轉肌撕裂傷' }
        ]
      },

      {
          id: 'calcific-tendinitis',
          slug: 'calcific-tendinitis',
          title: '旋轉肌鈣化 (鈣化性肌腱炎)',
          description: '肩膀痛到像被電鑽鑽？這不是五十肩，而是肌腱裡「長石頭」了！了解鈣化性肌腱炎的成因、震波治療與超音波導引洗鈣技術。',
          contentHtml: `
            <p style="color: #e2e8f0 !important;">您是否有過這種經驗：肩膀平時好好的，突然某天痛到<strong>想鑽地洞</strong>，連手都不敢動一下，甚至半夜痛到掛急診？這通常不是五十肩，也不是普通的拉傷，而是肩膀裡的「瘋狂石頭」在作怪——<strong>鈣化性肌腱炎 (Calcific Tendinitis)</strong>。</p>
                    <br>
            <p style="color: #e2e8f0 !important;">這是肩關節疼痛中最劇烈的一種。好消息是，這是一種<strong>「會好」</strong>的疾病。宸新復健科透過高解析超音波診斷，搭配<strong>體外震波</strong>與<strong>超音波導引洗鈣</strong>技術，能協助您快速粉碎結石，解除劇痛。</p>
        
        
            <div style="background-color: #fffbeb; border: 2px solid #fbbf24; border-radius: 1rem; padding: 1.5rem; margin: 2rem 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                <h2 style="color: #b45309 !important; margin-top: 0; font-weight: bold; border-bottom: 2px solid #fcd34d; padding-bottom: 0.5rem; display: flex; align-items: center;">
                    📢 為什麼肩膀會長石頭？恐怖的「牙膏期」
                </h2>
                
                <p style="font-size: 1.1rem; color: #78350f !important;">很多人以為是鈣質吃太多，其實無關！鈣化性肌腱炎的成因不明，目前推測與肌腱缺氧、局部代謝異常有關。病程主要分為三期：</p>
                
                <ul style="list-style: none; padding: 0; margin-top: 1rem; color: #92400e !important;">
                    <li style="margin-bottom: 1rem; display: flex; align-items: start;">
                        <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">1</span>
                        <div style="color: #92400e !important;">
                            <strong style="color: #0891b2 !important;">鈣化前期 (Pre-calcific)：</strong> 
                            肌腱產生纖維軟骨化，準備堆積鈣質，此時通常不痛。
                        </div>
                    </li>
                    <li style="margin-bottom: 1rem; display: flex; align-items: start;">
                        <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">2</span>
                        <div style="color: #92400e !important;">
                            <strong style="color: #0891b2 !important;">鈣化形成期 (Formative)：</strong> 
                            鈣質沈積變硬，像粉筆一樣。此時會有悶痛感，活動時「卡卡」的。
                        </div>
                    </li>
                    <li style="margin-bottom: 0; display: flex; align-items: start;">
                        <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">3</span>
                        <div style="color: #92400e !important;">
                            <strong style="color: #dc2626 !important;">吸收期 (Resorptive) - 最痛！：</strong> 
                            身體試圖把鈣點「吃掉」吸收。此時鈣化點會軟化變成像<strong>牙膏</strong>一樣的濃稠液體，內部壓力暴增，引發劇烈發炎。這也是患者痛到掛急診的階段。
                        </div>
                    </li>
                </ul>
            </div>
        
        
            <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
        
            <h3 style="color: #f8fafc !important;">⚡ 症狀特徵：這種痛很不一樣</h3>
            <p style="color: #e2e8f0 !important;">如何分辨是鈣化性肌腱炎？</p>
            <ul style="color: #e2e8f0 !important;"> <li><strong>突發劇痛與夜間痛醒：</strong> 毫無預警的劇烈疼痛，痛感高達 8-10 分。夜間或靜止時更嚴重，常痛到無法躺睡，患者形容「痛到想把手剁掉」。</li> <li><strong>活動受限與僵硬：</strong> 因劇痛導致肩膀迅速僵硬，手臂活動範圍受限。太痛而無法舉手，嚴重影響梳頭、穿衣等日常動作。
                </li> <li><strong>特定角度疼痛加劇：</strong> 典型徵兆為「疼痛弧」，即手臂側抬至特定角度（如圖中 90 度附近）時，疼痛會顯著加劇。
                </li> <li><strong>突然發作的劇痛：</strong> 疼痛常常無預警地發作，且非常劇烈。
                </li> <li><strong>關節內異物感：</strong> 活動時感覺關節內有東西卡住或有粗糙摩擦感，但通常無聲響。</li> </ul>
            <p><img src="/images/diseases/shoulder/cal/b.jpg" alt="旋轉肌袖鈣化典型症狀"></p>
            <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
        
            <h3 style="color: #f8fafc !important;">🔍 診斷：X 光與超音波雙管齊下</h3>
            <p style="color: #e2e8f0 !important;">要確診非常簡單，影像檢查一照便知：</p>
            <ul style="color: #e2e8f0 !important;">
                <li><strong>X 光：</strong> 可以看到骨頭上方有一團<strong>白色的陰影</strong>，這就是鈣化點。</li>
                <li><strong>超音波：</strong> 能判斷鈣化是在「硬化期」（有陰影）還是「牙膏期」（腫脹模糊），並確認是否伴隨旋轉肌撕裂，這對於決定治療策略至關重要。</li>
            </ul>
        
            <p><img src="/images/diseases/shoulder/cal/c.jpg" alt="旋轉肌袖鈣化X光及超音波影像"></p>
        
            <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
        
            <h3 style="color: #f8fafc !important;">🛡️ 治療策略：把石頭清出來！</h3>
            <p style="color: #e2e8f0 !important;">傳統吃藥復健對於大顆的鈣化點效果有限。宸新復健科提供兩大「碎石神器」：</p>
        
            <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
                <h4 style="margin-top: 0; color: #0e7490 !important;">1. <a href="/treatments/shockwave" class="text-cyan-400 hover:underline">體外震波治療</a>🔍️ - 擊碎結石</h4>
                <p style="margin-bottom: 0; color: #334155 !important;">
                    利用高能量聲波「隔山打牛」，經由超音波先精準定位，直接聚焦打在鈣化點上。震波能<strong>擊碎硬化的鈣化結晶</strong>，使其崩解成粉末，讓身體更容易吸收代謝；同時能促進血管新生，加速肌腱修復。通常約需 3-6 次療程，每週一次。
                </p>
            </div>
        
            <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
                <h4 style="margin-top: 0; color: #0e7490 !important;">2. 超音波導引抽吸術 (Barbotage) - 洗出牙膏</h4>
                <p style="margin-bottom: 0; color: #334155 !important;">
                    針對「急性劇痛期」或「牙膏期」的患者，醫師在<strong>超音波導引下</strong>，將針頭精準刺入鈣化點，用生理食鹽水反覆沖洗，將白色的鈣化牙膏<strong>直接抽吸出來</strong>，並注射藥物消炎。患者通常在術後當下就能感覺疼痛減少 50% 以上，但只有單顆大型的才有辦法使用抽吸。
                </p>
            </div>
        <p><img src="/images/diseases/shoulder/cal/d.jpg" alt="旋轉肌袖鈣化超音波導引抽吸術 (Barbotage)"></p>
            <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
        
            <div style="background-color: #ecfdf5; padding: 2rem; border-radius: 1rem; margin-top: 3rem; text-align: center;">
                <h3 style="color: #047857 !important; margin-top: 0;">👨‍⚕️ 痛起來要人命？我們幫您解決！</h3>
                <p style="color: #334155 !important; margin-bottom: 1.5rem;">鈣化性肌腱炎雖然痛得可怕，但只要用對方法（震波擊碎或穿刺抽吸），復原速度通常很快。宸新復健科擁有專業的介入性治療技術，讓我們幫您把肩膀裡的石頭搬走！</p>
                <p style="font-weight: bold; color: #059669 !important;">肩膀劇痛難耐？立即預約急診級處理！</p>
            </div>
          `,
          symptoms: [
            '突發性劇烈肩膀疼痛',
            '夜間痛到無法入睡',
            '手臂無法抬起（因疼痛）',
            '疼痛延伸至手臂外側'
          ],
          treatments: [
            '復健藥物治療', '<a href="/treatments/shockwave" class="text-cyan-400 hover:underline">體外震波治療</a>🔍️','超音波導引鈣化抽吸術',
            '超音波導引類固醇注射'
          ],
          seoKeywords: [
            '旋轉肌鈣化',
            '鈣化性肌腱炎',
            '肩膀長石頭',
            '肩膀劇痛',
            '震波治療',
            '鈣化抽吸'
          ],
          seoDescription: '旋轉肌鈣化（鈣化性肌腱炎）造成肩膀劇烈疼痛，常被誤為五十肩。宸新復健科提供震波治療與超音波導引洗鈣，有效擊碎結石，快速緩解疼痛。',
          images: [
            { 
              src: '/images/diseases/shoulder/cal/a.jpg', alt: '旋轉肌鈣化'
            },
          ]
      },


      {
          id: 'frozen-shoulder',
          slug: 'frozen-shoulder',
          title: '五十肩 (沾黏性肩關節囊炎)',
          description: '肩膀舉不高、無法扣內衣？這不只是老化！了解五十肩的三階段病程、高風險族群，以及醫師親授的「居家解凍運動」。',
          contentHtml: `
            <p style="color: #e2e8f0 !important;">您是否有這樣的困擾：手無法伸到背後扣內衣或抓癢？梳頭髮時手舉不起來？或是晚上睡覺翻身壓到肩膀，痛到瞬間清醒？如果這些症狀持續好幾個月，您可能被<strong>五十肩</strong>纏上了。</p> 
            <br>       
            <p style="color: #e2e8f0 !important;">五十肩的醫學正式名稱為<strong>「沾黏性肩關節囊炎 (Adhesive Capsulitis)」</strong>。想像關節囊原本像是一個寬鬆的袖套，但因為發炎而變厚、變緊，最後像<strong>「真空收縮膜」</strong>一樣緊緊包住關節，導致肩膀像是被冰凍一樣動彈不得。</p>

        
            <div style="background-color: #fffbeb; border: 2px solid #fbbf24; border-radius: 1rem; padding: 1.5rem; margin: 2rem 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                <h2 style="color: #b45309 !important; margin-top: 0; font-weight: bold; border-bottom: 2px solid #fcd34d; padding-bottom: 0.5rem; display: flex; align-items: center;">
                    📢 五十肩的「冰凍三尺」：病程三部曲
                </h2>
                
                <p style="font-size: 1.1rem; color: #78350f !important;">這是一種病程漫長的疾病，若不治療，自然病程可能長達 1~2 年甚至更久。了解自己處於哪一期，才能對症下藥：</p>
                
                <ul style="list-style: none; padding: 0; margin-top: 1rem; color: #92400e !important;">
                    <li style="margin-bottom: 1rem; display: flex; align-items: start;">
                        <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">1</span>
                        <div style="color: #92400e !important;">
                            <strong style="color: #dc2626 !important;">發炎期 (Freezing) - 痛 > 卡：</strong> 
                            約持續 2-9 個月。特徵是<strong>不動也痛、動了更痛</strong>，尤其是夜間疼痛非常劇烈，無法側躺或半夜痛醒。此時關節囊正在急性發炎充血。
                        </div>
                    </li>
                    <li style="margin-bottom: 1rem; display: flex; align-items: start;">
                        <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">2</span>
                        <div style="color: #92400e !important;">
                            <strong style="color: #0891b2 !important;">冰凍期 (Frozen) - 卡 > 痛：</strong> 
                            約持續 4-12 個月。疼痛稍微緩解，但<strong>關節嚴重沾黏僵硬</strong>。活動度很差手無法舉起，生活極度不便（如無法穿衣、洗澡或洗頭梳頭）。
                        </div>
                    </li>
                    <li style="margin-bottom: 0; display: flex; align-items: start;">
                        <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">3</span>
                        <div style="color: #92400e !important;">
                            <strong style="color: #0891b2 !important;">解凍期 (Thawing)：</strong> 
                            發炎消退，關節活動度慢慢恢復。但若無復健介入，活動角度往往無法完全恢復正常。
                        </div>
                    </li>
                </ul>
            </div>
        
        
            <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
        
            <h3 style="color: #f8fafc !important;">⚠️ 為什麼會得五十肩？高風險族群點名</h3>
            <p style="color: #e2e8f0 !important;">很多人以為五十肩是「老化」的必然現象，其實不然。醫學上將其分為原發性與次發性，以下這些情況會大幅增加罹病風險：</p>
        
            <li><strong>1. 糖尿病患者 (高危險群！)</strong></li>
            <p style="color: #e2e8f0 !important;">這是關聯性最強的疾病。統計顯示，<strong>糖尿病友罹患五十肩的機率是常人的 5 倍</strong>，且症狀通常更嚴重、更難治療，甚至容易兩隻手都可能發生。原因可能與高血糖導致膠原蛋白糖化、容易沾黏有關。</p>
        
            <li><strong>2. 甲狀腺疾病</strong></li>
            <p style="color: #e2e8f0 !important;">無論是甲狀腺亢進或低下，都會影響新陳代謝，進而增加關節囊發炎沾黏的風險。</p>
        
            <li><strong>3. 肩膀缺乏活動 (外傷或手術後)</strong></li>
            <p style="color: #e2e8f0 !important;">「不動」是關節沾黏的元兇。例如運動受傷，造成肌腱發炎撕裂或鈣化、骨折打石膏、旋轉肌腱開刀後，或是中風偏癱的患者，因為長時間不敢動或無法動，關節囊就會慢慢攣縮黏住。</p>
        
            <li><strong>4. 女性與年齡</strong></li>
            <p style="color: #e2e8f0 !important;">好發於 40-60 歲，且<strong>女性比例略高於男性</strong>。更年期前後的荷爾蒙變化也被認為是潛在因素之一。</p>
           <p><img src="/images/diseases/shoulder/fs/b.jpg" alt="五十肩好發族群"></p>

            <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
        
            <h3 style="color: #f8fafc !important;">⚡ 是五十肩還是旋轉肌撕裂？一招分辨</h3>
            <p style="color: #e2e8f0 !important;">這兩者常被搞混，但治療方向完全不同。醫師教您簡單分辨：</p>
            <ul style="color: #e2e8f0 !important;">
                <li><strong>五十肩（關節沾黏）：</strong> <strong style="color: #22d3ee !important;">主動、被動都卡住</strong>。就算別人幫您推，手也舉不上去，因為關節囊真的黏住了。</li>
                <li><strong>旋轉肌撕裂：</strong> <strong style="color: #22d3ee !important;">主動舉不起來，但被動可以</strong>。自己舉會痛或無力，但如果別人幫您扶著手，是可以舉到最高點的。</li>
            </ul>
        
            <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
        
            <h3 style="color: #f8fafc !important;">🛡️ 治療策略：別傻傻等它解凍！</h3>
            <p style="color: #e2e8f0 !important;">傳統復健（電療、熱敷）對於已經沾黏的關節囊效果緩慢。宸新復健科提供積極的「解凍三劍客」：</p>
        
            <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
                <h4 style="margin-top: 0; color: #0e7490 !important;">1. 肩關節擴張術 (Hydrodilatation) - 特效藥(激推!)</h4>
                <p style="margin-bottom: 0; color: #334155 !important;">
                    這是治療五十肩最快速有效的方法。醫師在<strong>超音波即時導引</strong>下，將擴張液（生理食鹽水 + 少量麻藥與抗炎藥）精準注入緊縮的關節囊中。利用液體的壓力，由內而外將沾黏的組織<strong>「撐開」</strong>。許多患者在注射完隔幾天，手就能舉高 30 度以上，且疼痛改善明顯，效果驚人！
                </p>
            </div>
        
        
            <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
                <h4 style="margin-top: 0; color: #0e7490 !important;">2. <a href="/treatments/manual" class="text-cyan-400 hover:underline">徒手治療關節鬆動術</a>🔍️</h4>
                <p style="margin-bottom: 0; color: #334155 !important;">
                    在做完擴張術後，關節囊雖然撐開了，但周邊的肌肉與筋膜仍是緊繃的。這時需要物理治療師進行<strong>關節鬆動術 (Mobilization)</strong>，針對沾黏的角度進行被動拉伸，並放鬆緊繃的胸小肌與旋轉肌群，找回關節的滑動感。
                </p>
            </div>
        
            <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
        
            <h3 style="color: #f8fafc !important;">🧘‍♂️ 醫師教你做：居家解凍三招</h3>
            <p style="color: #e2e8f0 !important;">治療只有一半在診所，另一半在家裡。五十肩的復健原則是<strong>「少量多餐」</strong>，每天勤做伸展，才能維持擴張術撐開的效果。以下三招請每天早晚各做 10 次：</p>
        
            <div style="margin-bottom: 2rem;">
                <h4 style="color: #22d3ee !important;">1. 手指爬牆運動 (增加舉手角度)</h4>
                <p style="color: #e2e8f0 !important;">面對牆壁，將患側手指放在牆上，像「蜘蛛人」一樣慢慢用手指往上爬，直到肩膀感覺緊繃微痛為止。身體可以輕輕往牆壁壓，停留 15 秒，再慢慢放下。側面爬牆也是同樣方式。</p>
                <p style="color: #94a3b8 !important; font-size: 0.9rem;">*重點：不要聳肩，要用肩膀的角度去動。</p>
            </div>
        
            <div style="margin-bottom: 2rem;">
                <h4 style="color: #22d3ee !important;">2. 毛巾操 (改善扣內衣動作)</h4>
                <p style="color: #e2e8f0 !important;">這是最難恢復的動作（內轉）。找一條長毛巾，好手在上、壞手在下，在背後拉住毛巾兩端。利用好手的力量將毛巾往上拉，帶動壞手往上抬（像是在刷背的動作）。拉到緊繃處停留 15 秒。</p>
            </div>
        
            <div style="margin-bottom: 2rem;">
                <h4 style="color: #22d3ee !important;">3. 鐘擺運動 (暖身與放鬆)</h4>
                <p style="color: #e2e8f0 !important;">身體前彎，好手扶著桌子支撐，讓患側手臂像鐘擺一樣自然垂下。利用身體的晃動帶動手臂前後、左右、畫圈擺動。這適合在運動前暖身，或疼痛較明顯時放鬆關節使用。</p>
            </div>
        
            <p><img src="/images/diseases/shoulder/fs/c.jpg" alt="五十肩居家運動"></p>
        
            <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
        
            <div style="background-color: #ecfdf5; padding: 2rem; border-radius: 1rem; margin-top: 3rem; text-align: center;">
                <h3 style="color: #047857 !important; margin-top: 0;">👨‍⚕️ 找回舉手的自由！</h3>
                <p style="color: #334155 !important; margin-bottom: 1.5rem;">五十肩不需要忍耐兩年等它自己好。透過現代醫學的「肩關節擴張術」搭配勤勞的居家運動，縮短病程只需幾週。宸新復健科陪您一起解凍肩膀，重新擁抱生活！</p>
                <p style="font-weight: bold; color: #059669 !important;">肩膀卡卡舉不高？立即預約擴張術評估！</p>
            </div>
          `,
          symptoms: [
            '肩膀各個角度活動受限',
            '無法扣內衣或梳頭',
            '夜間睡覺壓到肩膀痛醒',
            '手臂無法伸到背後'
          ],
          treatments: [
            '超音波導引肩關節擴張術',
            '<a href="/treatments/manual" class="text-cyan-400 hover:underline">徒手治療關節鬆動術</a>🔍️',
            '居家伸展運動 (爬牆/毛巾操)'     ,
            '止痛藥及復健'
          ],
          seoKeywords: [
            '五十肩',
            '冰凍肩',
            '沾黏性肩關節囊炎',
            '肩膀舉不起來',
            '肩關節擴張術',
            '五十肩運動'
          ],
          seoDescription: '五十肩（冰凍肩）導致肩膀僵硬舉不起來，夜間疼痛難耐。宸新復健科提供超音波導引肩關節擴張術與居家運動教學，快速分離沾黏，縮短恢復期。',
          images: [
            { src: '/images/diseases/shoulder/fs/a.jpg', alt: '五十肩示意圖'
            }
          ]
      }
    ]
  },

  // =======================================================
  // 3. 手肘 (關鍵字：網球肘、高爾夫球肘、震波)
  // =======================================================
  {
    slug: 'elbow',
    title: '手肘',
    description: '手肘相關疾病',
    image: '/images/diseases/c.jpg',
    seoKeywords: ['網球肘治療', '高爾夫球肘', '手肘痛', '新竹震波推薦'],
    seoDescription: '手肘外側痛擰毛巾沒力？專治網球肘與高爾夫球肘。引進瑞士聚焦式震波治療，有效修復肌腱發炎，恢復手臂力量。',
    diseases: [
     {
        id: 'tennis-elbow',
        slug: 'tennis-elbow',
        title: '網球肘 (肱骨外上髁炎)',
        description: '擰毛巾、轉門把手肘外側就痛？這不只是網球選手的專利！深入解析網球肘成因，從震波治療到 PRP 修復，以及關鍵的居家離心運動教學。',
        contentHtml: `
          <p style="color: #e2e8f0 !important;">您是否有這樣的困擾：想要擰乾一條毛巾，手肘外側卻傳來一陣刺痛？拿個馬克杯喝水、轉動門把，甚至只是敲鍵盤滑鼠，手肘那顆突出的骨頭附近就痛到不行？這就是典型的<strong>網球肘</strong>症狀。</p>
                <br>
          <p style="color: #e2e8f0 !important;">網球肘的醫學正式名稱為<strong>「肱骨外上髁炎 (Lateral Epicondylitis)」</strong>。雖然名字裡有網球，但臨床上 <strong>90% 的患者其實根本不打網球</strong>！家庭主婦、廚師、水電工、電腦族才是最大的受害族群。宸新復健科透過高解析超音波診斷與增生注射與體外震波治療，協助您修復受損的肌腱，找回強健的握力。</p>
      
          <div style="background-color: #fffbeb; border: 2px solid #fbbf24; border-radius: 1rem; padding: 1.5rem; margin: 2rem 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
              <h2 style="color: #b45309 !important; margin-top: 0; font-weight: bold; border-bottom: 2px solid #fcd34d; padding-bottom: 0.5rem; display: flex; align-items: center;">
                  📢 為什麼會得網球肘？肌腱的「過勞死」
              </h2>
              
              <p style="font-size: 1.1rem; color: #78350f !important;">要了解網球肘，得先認識一群關鍵肌肉——<strong>「共同伸肌腱(Common extensor tendon)」</strong>。這群肌肉從手肘外側一路延伸到手腕，負責我們手腕向後翹起（伸腕）的動作。</p>
              
              <ul style="list-style: none; padding: 0; margin-top: 1rem; color: #92400e !important;">
                  <li style="margin-bottom: 1rem; display: flex; align-items: start;">
                      <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">1</span>
                      <div style="color: #92400e !important;">
                          <strong style="color: #dc2626 !important;">反覆使用的微創傷：</strong> 
                          當我們反覆使用手腕（如切菜、鎖螺絲、打字），肌腱與骨頭的連接點會產生微小的撕裂傷。
                      </div>
                  </li>
                  <li style="margin-bottom: 1rem; display: flex; align-items: start;">
                      <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">2</span>
                      <div style="color: #92400e !important;">
                          <strong style="color: #0891b2 !important;">修復趕不上破壞：</strong> 
                          年輕時身體修復快，睡一覺就好。但隨著年齡增長或過度使用，修復速度變慢，這些微小撕裂傷來不及癒合，新的傷又加上去。
                      </div>
                  </li>
                  <li style="margin-bottom: 0; display: flex; align-items: start;">
                      <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">3</span>
                      <div style="color: #92400e !important;">
                          <strong style="color: #0891b2 !important;">肌腱變性 (Tendinosis)：</strong> 
                          長久下來，肌腱不再是健康的粉紅色，而是變成灰色、質地脆弱的組織，甚至長出不健康的血管與神經，這就是慢性疼痛的來源。所以嚴格來說，後期它已經不是單純的「發炎」，而是「退化」。
                      </div>
                  </li>
              </ul>
          </div>
      
          <p><img src="/images/diseases/elbow/tennis/b.jpg" alt="網球肘疼痛機轉"></p>
      
          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
      
          <h3 style="color: #f8fafc !important;">⚠️ 誰是高風險族群？不打球也會中招</h3>
          <p style="color: #e2e8f0 !important;">只要是<strong>「重複性使用手腕」</strong>的人，都在危險名單中：</p>
          <ul style="color: #e2e8f0 !important;">
              <li><strong>家庭主婦/夫：</strong> 切菜、洗碗、擰拖把、抱小孩，這些動作都在虐待伸腕肌群。</li>
              <li><strong>電腦族：</strong> 長時間使用滑鼠，手指懸空敲鍵盤，肌腱隨時處於緊繃狀態。</li>
              <li><strong>勞力工作者：</strong> 水電工（鎖螺絲）、油漆工（刷油漆）、木工、搬運工。</li>
              <li><strong>餐飲業者：</strong> 廚師（甩鍋）、服務生（端盤子）。</li>
              <li><strong>運動愛好者：</strong> 網球（反手拍姿勢錯誤）、羽球、重量訓練愛好者。</li>
          </ul>
      
          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
      
          <h3 style="color: #f8fafc !important;">🔍 自我檢測：我是網球肘還是高爾夫球肘？</h3>
          <p style="color: #e2e8f0 !important;">這兩個容易搞混，簡單分辨如下：</p>
          <ul style="color: #e2e8f0 !important;">
              <li><strong>網球肘 (手肘外側痛)：</strong> 手臂伸直、手心向下，用力將手腕翹起來（伸腕），如果手肘外側會痛，就是網球肘。</li>
              <li><strong>高爾夫球肘 (手肘內側痛)：</strong> 手臂伸直、手心向上，用力將手腕彎起來（屈腕），或是用手掌壓肚子，如果手肘內側會痛，就是高爾夫球肘。</li>
          </ul>
          <p style="color: #94a3b8 !important; font-size: 0.9rem;">*宸新診所使用高解析超音波，可直接看到肌腱是否有腫脹、撕裂、鈣化或新生血管，精準度遠高於徒手檢查。</p>
      
          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
      
          <h3 style="color: #f8fafc !important;">🛡️ 治療策略：從止痛到修復的階梯療法</h3>
          <p style="color: #e2e8f0 !important;">網球肘非常容易復發，重點在於「不只止痛，更要修復」。</p>
      
          <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
              <h4 style="margin-top: 0; color: #0e7490 !important;">1. 急性期：保護與物理治療</h4>
              <p style="margin-bottom: 0; color: #334155 !important;">
                  <strong>休息是第一步。</strong> 建議配戴<strong>「網球肘護具」</strong>（戴在手肘下方約兩指幅的肌肉肥厚處，而非骨頭上），能分散肌腱受力。搭配健保物理治療（超音波、雷射、深層熱療）來緩解急性發炎，及居家按摩伸展肌肉或徒手治療來放鬆肌肉。
              </p>
          </div>
      
          <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
              <h4 style="margin-top: 0; color: #0e7490 !important;">2. 慢性期首選：<a href="/treatments/shockwave" class="text-cyan-400 hover:underline">體外震波治療(ESWT)</a>🔍️</h4>
              <p style="margin-bottom: 0; color: #334155 !important;">
                  當疼痛超過 3 個月，肌腱已經變性纖維化，普通的熱敷電療效果很差。震波治療利用高能量聲波，能<strong>「打斷」</strong>不健康的結痂組織與新生血管，並刺激身體重新啟動修復機制。對於慢性網球肘，震波的治癒率極高。
              </p>
          </div>
      
      
          <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
              <h4 style="margin-top: 0; color: #0e7490 !important;">3. 難治型救星：<a href="/treatments/prp" class="text-cyan-400 hover:underline">PRP 增生療法</a>🔍️</h4>
              <p style="margin-bottom: 0; color: #334155 !important;">
                  如果肌腱有明顯的<strong>撕裂傷</strong>或震波效果不彰，建議使用 <strong style="color: #0891b2 !important;">PRP (高濃度血小板血漿)</strong>。醫師在超音波導引下，將生長因子精準注入肌腱撕裂處。PRP 能像膠水一樣黏合撕裂的組織，促進膠原蛋白再生，是目前修復肌腱最強力的非手術療法。
              </p>
          </div>
      
          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
      
          <h3 style="color: #f8fafc !important;">🧘‍♂️ 醫師教你做：關鍵的「離心運動」</h3>
          <p style="color: #e2e8f0 !important;">研究證實，<strong>離心收縮運動 (Eccentric Exercise)</strong> 是排列肌腱纖維、增加強度的關鍵。等疼痛緩解後（約治療 2-3 週後），請務必開始做以下運動，才能避免復發：</p>
      
          <div style="margin-bottom: 2rem;">
              <h4 style="color: #22d3ee !important;">1. 伸腕肌群伸展 (Stretching)</h4>
              <p style="color: #e2e8f0 !important;">手臂伸直，手心向下。用另一隻手將患側手掌<strong>往下、往內</strong>壓，直到手肘外側有緊繃感。停留 15-30 秒，重複 3-5 次。這能放鬆緊繃的肌肉。</p>
          </div>
           <p><img src="/images/diseases/elbow/tennis/d.jpg" alt="居家進行手腕屈肌伸展運動"></p>
          <div style="margin-bottom: 2rem;">
              <h4 style="color: #22d3ee !important;">2. 啞鈴離心訓練 (最重要！)</h4>
              <p style="color: #e2e8f0 !important;">找一個輕啞鈴（或裝水的水瓶，約 0.5-1 公斤）。</p>
              <ol style="color: #e2e8f0 !important; margin-left: 1.5rem;">
                  <li>將患側手前臂放在桌上，手腕懸空，手心向下握住啞鈴。</li>
                  <li><strong>向心階段（不練）：</strong> 用好手幫忙，把患側手腕翹起來到最高點。</li>
                  <li><strong>離心階段（訓練）：</strong> 患側手用力撐住，<strong>慢慢地、控制速度地</strong>（數 5 秒）將手腕往下放，直到最底。</li>
                  <li>重複 10-15 下為一組，每天做 3 組。</li>
              </ol>
              <p style="color: #94a3b8 !important; font-size: 0.9rem;">*原理：離心運動能像「梳頭髮」一樣，將雜亂的肌腱纖維梳理整齊，並增加肌腱強度。</p>
          </div>
          <p><img src="/images/diseases/elbow/tennis/c.jpg" alt="網球肘離心運動訓練"></p>
      
          <div style="margin-bottom: 2rem;">
              <h4 style="color: #22d3ee !important;">3. 橫向深層按摩 (Deep Friction Massage)</h4>
              <p style="color: #e2e8f0 !important;">用好手的大拇指，在患側手肘最痛的骨頭點附近，<strong>垂直於肌肉走向</strong>（左右推，不是上下推）進行深層按摩。每次約 3-5 分鐘。這有助於破壞沾黏組織，促進血液循環。</p>
          </div>
      
          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
      
          <div style="background-color: #ecfdf5; padding: 2rem; border-radius: 1rem; margin-top: 3rem; text-align: center;">
              <h3 style="color: #047857 !important; margin-top: 0;">👨‍⚕️ 別讓手肘痛廢了你的手！</h3>
              <p style="color: #334155 !important; margin-bottom: 1.5rem;">網球肘看似小毛病，但痛起來連拿杯咖啡都手抖，嚴重影響生活品質。只要透過精準的超音波診斷，搭配震波或 PRP 治療，並落實居家離心運動，絕對能根治！</p>
              <p style="font-weight: bold; color: #059669 !important;">擰毛巾手肘痛？立即預約超音波檢查！</p>
          </div>
        `,
        symptoms: [
          '手肘外側骨突處按壓疼痛',
          '握力變差，無法提重物',
          '打字或拿水杯時前臂痠痛',
          '早上起床手肘僵硬'
        ],
        treatments: [
          '配戴網球肘護具','<a href="/treatments/shockwave" class="text-cyan-400 hover:underline">體外震波治療(ESWT)</a>🔍️', '<a href="/treatments/prp" class="text-cyan-400 hover:underline">PRP 增生療法</a>🔍️','<a href="/treatments/manual" class="text-cyan-400 hover:underline">徒手運動治療</a>🔍️'
        ],
        seoKeywords: [
          '網球肘',
          '肱骨外上髁炎',
          '手肘外側痛',
          '震波治療',
          'PRP注射',
          '網球肘復健'
        ],
        seoDescription: '網球肘（肱骨外上髁炎）造成手肘外側疼痛、握力下降。宸新復健科提供震波治療、PRP注射與離心運動教學，有效修復肌腱，解決長期手肘疼痛。',
        images: [
          { src: '/images/diseases/elbow/tennis/a.jpg', alt: '網球肘示意圖'
          }
        ]
      },
      {
          id: 'golfers-elbow',
          slug: 'golfers-elbow',
          title: '高爾夫球肘 (肱骨內上髁炎)',
          description: '提重物手肘內側就痛？握手沒力氣？這不只是高爾夫球手的專利！深入解析高爾夫球肘成因，分辨尺神經壓迫，從震波治療到 PRP 修復，以及關鍵的居家復健運動教學。',
          contentHtml: `
            <p style="color: #e2e8f0 !important;">您是否有這樣的困擾：去超市提購物袋時，手肘內側突然一陣劇痛？或是轉門把、拿鍋鏟炒菜，甚至只是要把毛巾「往內」擰乾，手肘內側那個骨頭點就痛得受不了？這就是典型的<strong>高爾夫球肘</strong>。</p>
                 <br>
           
            <p style="color: #e2e8f0 !important;">它的醫學正式名稱為<strong>「肱骨內上髁炎 (Medial Epicondylitis)」</strong>。雖然名字裡有高爾夫，但臨床上 <strong>90% 的患者根本不打高爾夫球</strong>！家庭主婦、木工、搬運工、甚至常抱小孩的爸媽，才是最大的受害族群。宸新復健科透過高解析超音波診斷，協助您釐清是肌腱發炎還是神經壓迫，並提供精準的再生醫療修復方案。</p>
        

            <div style="background-color: #fffbeb; border: 2px solid #fbbf24; border-radius: 1rem; padding: 1.5rem; margin: 2rem 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                <h2 style="color: #b45309 !important; margin-top: 0; font-weight: bold; border-bottom: 2px solid #fcd34d; padding-bottom: 0.5rem; display: flex; align-items: center;">
                    📢 為什麼會得高爾夫球肘？屈腕肌群的哀嚎
                </h2>
                
                <p style="font-size: 1.1rem; color: #78350f !important;">要了解高爾夫球肘，得先認識前臂內側的「屈腕肌群」。這些肌肉負責手腕向內彎曲（屈腕）和手掌向下翻轉（旋前）的動作，它們全部匯集在手肘內側的一顆骨頭上（肱骨內上髁）。</p>
                
                <ul style="list-style: none; padding: 0; margin-top: 1rem; color: #92400e !important;">
                    <li style="margin-bottom: 1rem; display: flex; align-items: start;">
                        <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">1</span>
                        <div style="color: #92400e !important;">
                            <strong style="color: #dc2626 !important;">過度使用的微創傷：</strong> 
                            當我們反覆進行「手腕彎曲」或「用力抓握」的動作（如抱小孩、提重物、揮桿），肌腱與骨頭的連接點會承受巨大拉力，產生微小撕裂傷。
                        </div>
                    </li>
                    <li style="margin-bottom: 1rem; display: flex; align-items: start;">
                        <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">2</span>
                        <div style="color: #92400e !important;">
                            <strong style="color: #0891b2 !important;">修復機制失靈：</strong> 
                            肌腱的血液循環本來就比肌肉差。隨著年齡增長或休息不足，修復速度趕不上破壞速度，導致膠原蛋白排列混亂，肌腱變性、鈣化。
                        </div>
                    </li>
                    <li style="margin-bottom: 0; display: flex; align-items: start;">
                        <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">3</span>
                        <div style="color: #92400e !important;">
                            <strong style="color: #0891b2 !important;">不僅是發炎：</strong> 
                            與網球肘一樣，慢性的高爾夫球肘其實是一種「肌腱退化 (Tendinosis)」，這也是為什麼單純吃消炎藥往往只能止痛一時，藥效過了又開始痛。
                        </div>
                    </li>
                </ul>
            </div>
        
            
            <p><img src="/images/diseases/elbow/golf/b.jpg" alt="高爾夫球解剖結構示意圖，標示內側疼痛點"></p>
        
            <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
        
            <h3 style="color: #f8fafc !important;">⚠️ 誰是高風險族群？生活中的隱形殺手</h3>
            <p style="color: #e2e8f0 !important;">只要是<strong>「重複性屈腕與抓握」</strong>的人，都在危險名單中：</p>
            <ul style="color: #e2e8f0 !important;">
                <li><strong>勞力工作者：</strong> 木工（使用鐵鎚、鋸子）、水電工（轉板手）、搬家工人，是門診最常見的原因之一。</li>
                <li><strong>辦公室族群：</strong> 打字時手腕長時間懸空且過度彎曲。</li>
                <li><strong>新手爸媽/阿公阿嬤：</strong> 長時間抱小孩，手腕內扣支撐寶寶重量。</li>
                <li><strong>家庭主婦/夫：</strong> 提沉重的購物袋、切硬的食材、長時間刷鍋子。</li>
                <li><strong>運動愛好者：</strong> 高爾夫球（挖地瓜打法）、攀岩（高度抓握）、棒球投手、舉重選手。</li>
            </ul>
        
            <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
        
            <h3 style="color: #f8fafc !important;">🔍 是肌腱炎還是神經壓迫？</h3>
            <p style="color: #e2e8f0 !important;">手肘內側痛不一定全是高爾夫球肘，還有一位鄰居叫「尺神經」。兩者治療方式不同，需仔細分辨：</p>
            
            <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
                <h4 style="margin-top: 0; color: #0e7490 !important;">1. 高爾夫球肘 (肌腱問題)</h4>
                <p style="margin-bottom: 0; color: #334155 !important;">
                    <strong>痛點：</strong> 集中在手肘內側突出的骨頭上。<br>
                    <strong>特徵：</strong> 用力握拳、手腕向內彎曲時會痛。通常<strong>沒有麻感</strong>。
                </p>
            </div>
        
            <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
                <h4 style="margin-top: 0; color: #0e7490 !important;">2. 肘隧道症候群 (尺神經壓迫)</h4>
                <p style="margin-bottom: 0; color: #334155 !important;">
                    <strong>痛點：</strong> 手肘內側偏後方（像撞到麻筋的位置）。<br>
                    <strong>特徵：</strong> 會感覺電流感傳到<strong>無名指和小指</strong>，這兩指會麻麻的，嚴重時手掌肌肉會萎縮（爪形手）。
                </p>
            </div>
            <p style="color: #94a3b8 !important; font-size: 0.9rem;">*註：這兩種病常同時存在。宸新診所使用高解析超音波，可同時檢查肌腱是否腫脹及神經是否卡壓（腫脹）。</p>
        
            <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
        
            <h3 style="color: #f8fafc !important;">🛡️ 治療策略：從止痛到修復的階梯療法</h3>
            <p style="color: #e2e8f0 !important;">高爾夫球肘若不治療，慢性疼痛可能持續數年。我們的治療目標是「修復組織」而非單純壓制症狀。</p>
        
            <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
                <h4 style="margin-top: 0; color: #0e7490 !important;">1. 急性期：保護與減壓</h4>
                <p style="margin-bottom: 0; color: #334155 !important;">
                    <strong>暫停致痛動作。</strong> 建議配戴<strong>「高爾夫球肘護具」</strong>（戴在手肘下方肌肉肥厚處），改變力的傳導方向。可搭配徒手物理治療，物理治療師會使用貼紮技術或深層按摩來放鬆緊繃的前臂屈肌。
                </p>
            </div>
        
            <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
                <h4 style="margin-top: 0; color: #0e7490 !important;">2. 慢性期首選：<a href="/treatments/shockwave" class="text-cyan-400 hover:underline">體外震波治療(ESWT)</a>🔍️</h4>
                <p style="margin-bottom: 0; color: #334155 !important;">
                    肌腱連接骨頭處血液循環極差。震波治療利用高能量聲波，能<strong>「打斷」</strong>慢性沾黏組織，製造微小創傷以刺激身體釋放生長因子，重新啟動修復機制。對於超過 3 個月的頑固疼痛，震波是極佳的非侵入性選擇。
                </p>
            </div>
        
            
        
            <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
                <h4 style="margin-top: 0; color: #0e7490 !important;">3. 難治型救星：<a href="/treatments/prp" class="text-cyan-400 hover:underline">PRP 增生療法</a>🔍️</h4>
                <p style="margin-bottom: 0; color: #334155 !important;">
                    如果超音波顯示肌腱有<strong>撕裂傷</strong>或嚴重的鈣化，<strong style="color: #0891b2 !important;">PRP (高濃度血小板血漿)</strong> 是最強力的修復劑。醫師在超音波精準導引下，將自體生長因子注入受損肌腱，加速組織癒合。若合併尺神經壓迫，我們會同時進行<strong>神經解套注射</strong>，用藥水將被卡住的神經剝離出來，一次解決痛與麻。
                </p>
            </div>
        
            <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
        
            <h3 style="color: #f8fafc !important;">🧘‍♂️ 醫師教你做：復健運動三部曲</h3>
            <p style="color: #e2e8f0 !important;">疼痛緩解後，必須透過運動強化肌腱，否則下次提重物又會復發。請早晚各做一輪：</p>
        
            <div style="margin-bottom: 2rem;">
                <h4 style="color: #22d3ee !important;">1. 屈腕肌群伸展 (Stretching)</h4>
                <p style="color: #e2e8f0 !important;">手臂伸直，手心向上。用另一隻手將患側手掌<strong>往下、往後</strong>拉，直到手肘內側有緊繃感。停留 15-30 秒，重複 3-5 次。這能延長緊繃縮短的肌肉。</p>
            </div>
        
              <p><img src="/images/diseases/elbow/golf/c.jpg" alt="居家進行手腕屈肌伸展運動"></p>
        
            <div style="margin-bottom: 2rem;">
                <h4 style="color: #22d3ee !important;">2. 啞鈴離心訓練 (Eccentric Training)</h4>
                <p style="color: #e2e8f0 !important;">这是強化肌腱最有效的方法。找一個輕啞鈴或水瓶。</p>
                <ol style="color: #e2e8f0 !important; margin-left: 1.5rem;">
                    <li>將患側手前臂放在桌上（手掌懸空），<strong>手心向上</strong>握住啞鈴。</li>
                    <li><strong>向心階段（不練）：</strong> 用好手幫忙，把患側手腕彎起來到最高點。</li>
                    <li><strong>離心階段（訓練）：</strong> 患側手用力撐住，<strong>慢慢地、控制速度地</strong>（數 5 秒）將手腕往下放，直到最底。</li>
                    <li>重複 10-15 下為一組，每天做 3 組。</li>
                </ol>
            </div>
        
            <div style="margin-bottom: 2rem;">
                <h4 style="color: #22d3ee !important;">3. 抓握力訓練</h4>
                <p style="color: #e2e8f0 !important;">使用軟式網球或握力球，輕輕擠壓 5 秒後放鬆。重複 10-20 次。這能增加屈指肌群的耐力。</p>
            </div>
        
            <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
        
            <div style="background-color: #ecfdf5; padding: 2rem; border-radius: 1rem; margin-top: 3rem; text-align: center;">
                <h3 style="color: #047857 !important; margin-top: 0;">👨‍⚕️ 告別手肘內側痛，重拾生活力量！</h3>
                <p style="color: #334155 !important; margin-bottom: 1.5rem;">高爾夫球肘雖然難纏，但絕非無法治癒。只要透過超音波精確分辨病因，選擇適合的震波或 PRP 治療，並持之以恆地復健，您一定能重新提起生活的重量。宸新復健科，助您一臂之力！</p>
                <p style="font-weight: bold; color: #059669 !important;">手肘內側一用力就痛？立即預約專業評估！</p>
            </div>
          `,
          symptoms: [
            '手肘內側骨突處按壓疼痛',
            '手腕向內彎曲或用力抓握時疼痛',
            '提重物、轉門把、刷牙洗臉疼痛',
            '早上起床手肘僵硬'
          ],
          treatments: [
  '配戴護肘','<a href="/treatments/shockwave" class="text-cyan-400 hover:underline">體外震波治療(ESWT)</a>🔍️', 
  '<a href="/treatments/prp" class="text-cyan-400 hover:underline">PRP 增生療法</a>🔍️',
  '<a href="/treatments/manual" class="text-cyan-400 hover:underline">徒手運動治療</a>🔍️'
          ],
          seoKeywords: [
            '高爾夫球肘',
            '肱骨內上髁炎',
            '手肘內側痛',
            '尺神經壓迫',
            '震波治療',
            'PRP注射'
          ],
          seoDescription: '高爾夫球肘（肱骨內上髁炎）造成手肘內側疼痛、握力下降。宸新復健科提供震波治療、PRP注射與離心運動教學，有效修復肌腱，解決長期手肘疼痛。',
          images: [
            { src: '/images/diseases/elbow/golf/a.jpg', alt: '高爾夫球肘示意圖'
            }
          ]
      }
    ]
  },

  // =======================================================
  // 4. 手部 (關鍵字：板機指、媽媽手、腕隧道)
  // =======================================================
  {
    slug: 'hand',
    title: '手部',
    description: '手部相關疾病',
    image: '/images/diseases/d.jpg',
    seoKeywords: ['板機指微創手術', '媽媽手治療', '腕隧道症候群', '手麻', '新竹手外科'],
    seoDescription: '手指卡住或手麻刺痛？專治板機指、媽媽手與腕隧道症候群。提供超音波導引注射與微創手術諮詢，快速緩解手部疼痛。',
    diseases: [
{
        id: 'tfcc-injury',
        slug: 'tfcc-injury',
        title: '三角纖維軟骨損傷 (TFCC)',
        description: '手腕外側一轉就痛？擰毛巾、撐地都沒力？這可能是「手腕的半月板」受傷了！深入解析 TFCC 損傷成因、自我檢測法，以及 PRP 修復與護具選擇全攻略。',
        contentHtml: `
          <p style="color: #e2e8f0 !important;">您是否有這樣的困擾：做伏地挺身或想從椅子上撐起來時，手腕小指那側（尺側）傳來一陣刺痛？平時手不動還好，但只要做<strong>「轉門把」、「擰毛巾」</strong>或「轉動鑰匙」的動作，手腕深處就痛到沒力？</p>
            <br>    
          <p style="color: #e2e8f0 !important;">這不是普通的扭傷，而是<strong>三角纖維軟骨複合體 (TFCC)</strong> 受損了！它被稱為<strong>「手腕的半月板」</strong>，負責穩定手腕與緩衝壓力。由於這裡血液循環極差，一旦受傷非常難癒合。宸新復健科透過高解析超音波與動態測試，協助您精準診斷，並提供再生醫療方案，修復這塊手腕最重要的避震器。</p>
      

      
          <div style="background-color: #fffbeb; border: 2px solid #fbbf24; border-radius: 1rem; padding: 1.5rem; margin: 2rem 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
              <h2 style="color: #b45309 !important; margin-top: 0; font-weight: bold; border-bottom: 2px solid #fcd34d; padding-bottom: 0.5rem; display: flex; align-items: center;">
                  📢 什麼是 TFCC？手腕外側的穩定錨
              </h2>
              
              <p style="font-size: 1.1rem; color: #78350f !important;">TFCC 位於手腕的小指側（尺骨與腕骨之間），它不是單一塊軟骨，而是一組<strong>「複合體」</strong>，包含三角纖維軟骨盤、韌帶與肌腱鞘。它的功能至關重要：</p>
              
              <ul style="list-style: none; padding: 0; margin-top: 1rem; color: #92400e !important;">
                  <li style="margin-bottom: 1rem; display: flex; align-items: start;">
                      <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">1</span>
                      <div style="color: #92400e !important;">
                          <strong style="color: #dc2626 !important;">承受壓力：</strong> 
                          負責傳導手部約 20% 的力量到前臂。若失去它，尺骨會直接撞擊腕骨，造成劇痛。
                      </div>
                  </li>
                  <li style="margin-bottom: 1rem; display: flex; align-items: start;">
                      <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">2</span>
                      <div style="color: #92400e !important;">
                          <strong style="color: #0891b2 !important;">穩定關節：</strong> 
                          它是連接橈骨與尺骨的「強力膠」，讓我們在做旋轉動作（如翻手掌）時，手腕骨頭之間不會鬆脫。
                      </div>
                  </li>
                  <li style="margin-bottom: 0; display: flex; align-items: start;">
                      <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">3</span>
                      <div style="color: #92400e !important;">
                          <strong style="color: #0891b2 !important;">為什麼難好？</strong> 
                          TFCC 只有外圍 10-40% 有血管供應（紅區），內部中心區域（白區）幾乎沒有血流。一旦受傷，自我修復能力極差，這也是為什麼很多人痛了半年還不好的原因。
                      </div>
                  </li>
              </ul>
          </div>

        <p><img src="/images/diseases/hand/tfcc/b.jpg" alt="三角纖維軟骨損傷結構"></p>
      
          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
      
          <h3 style="color: #f8fafc !important;">⚠️ 兩大成因：你是哪一種？</h3>
          <p style="color: #e2e8f0 !important;">TFCC 損傷主要分為創傷型與退化型：</p>
      
          <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
              <h4 style="margin-top: 0; color: #0e7490 !important;">1. 創傷型 (Traumatic)</h4>
              <p style="margin-bottom: 0; color: #334155 !important;">
                  <strong>跌倒撐地：</strong> 手掌撐地時，手腕過度伸展與旋轉，瞬間壓力擠爆軟骨。<br>
                  <strong>扭轉暴力：</strong> 網球揮拍、棒球打擊、拳擊、伏地挺身手腕凹折或是健身時臥推重量過重。
              </p>
          </div>
      
          <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
              <h4 style="margin-top: 0; color: #0e7490 !important;">2. 退化型 (Degenerative) - 尺骨撞擊症候群</h4>
              <p style="margin-bottom: 0; color: #334155 !important;">
                  有些人天生<strong>「尺骨比橈骨長」</strong>（尺骨變異陽性），導致手腕活動時，過長的尺骨一直去磨損 TFCC。這就像車子的輪胎定位不正，開久了輪胎（軟骨）一定會磨破。這類患者通常沒有明顯受傷史，但手腕就是越來越痛。
              </p>
          </div>
      
          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
      
          <h3 style="color: #f8fafc !important;">🔍 自我檢測：這兩個動作會痛嗎？</h3>
          <p style="color: #e2e8f0 !important;">如果您懷疑自己是 TFCC 損傷，可以試試看以下動作：</p>
          <ul style="color: #e2e8f0 !important;">
              <li><strong>撐地測試 (Press Test)：</strong> 坐在有扶手的椅子上，雙手握住扶手，用力將身體撐起來。如果手腕小指側出現劇痛，陽性機率高。</li>
              <li><strong>轉門把測試：</strong> 模擬轉動門把或擰毛巾的動作，若疼痛加劇或發出「喀喀」聲響，代表軟骨可能撕裂或不穩。</li>
              <li><strong>鋼琴鍵徵象 (Piano Key Sign)：</strong> 手心向下，按壓手腕外側突出的骨頭（尺骨莖突）。如果骨頭像鋼琴鍵一樣可以被壓下去又彈起來，代表遠端橈尺關節 (DRUJ) 已經鬆脫了。</li>
          </ul>
      
          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
      
          <h3 style="color: #f8fafc !important;">🛡️ 治療策略：修復軟骨，穩定關節</h3>
          <p style="color: #e2e8f0 !important;">由於 TFCC 血流少，治療必須積極且精準。我們採取階梯式治療：</p>
      
          <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
              <h4 style="margin-top: 0; color: #0e7490 !important;">1. 急性期：護具固定與休息</h4>
              <p style="margin-bottom: 0; color: #334155 !important;">
                  <strong>固定是關鍵。</strong> 一般護腕沒用，必須使用<strong>「三角軟骨專用護腕」</strong>（限制手腕旋轉）或副木固定 4-6 週。讓軟骨在穩定的環境下嘗試自我癒合。急性期可搭配物理治療（雷射或電療）消炎。
              </p>
          </div>
      
          <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
              <h4 style="margin-top: 0; color: #0e7490 !important;">2. 修復首選：<a href="/treatments/prp" >PRP 增生療法</a>🔍️</h4>
              <p style="margin-bottom: 0; color: #334155 !important;">
                  因為血液進不去軟骨中心，我們必須<strong>「把養分送進去」</strong>。醫師在超音波導引下，將 <strong style="color: #0891b2 !important;">PRP (高濃度血小板)</strong> 精準注入撕裂的軟骨縫隙與周邊鬆弛的韌帶。生長因子能啟動修復反應，強化韌帶張力，是目前公認治療 TFCC 最有效的非手術方法。
              </p>
          </div>
          
          <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
              <h4 style="margin-top: 0; color: #0e7490 !important;">3. 何時需要手術？</h4>
              <p style="margin-bottom: 0; color: #334155 !important;">
                  如果保守治療與 PRP 注射 3-6 個月後仍持續劇痛，或手腕關節極度不穩（嚴重鬆脫），可能需要轉介骨科進行腕關節鏡修補手術，或針對過長的尺骨進行縮短手術。
              </p>
          </div>
      
          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
      
          <h3 style="color: #f8fafc !important;">🧘‍♂️ 醫師教你做：腕關節穩定訓練</h3>
          <p style="color: #e2e8f0 !important;">軟骨受傷後，必須強化周邊的肌肉來幫忙抓手腕。請在醫師評估許可後（通常是疼痛緩解期）開始進行：</p>
      
          <div style="margin-bottom: 2rem;">
              <h4 style="color: #22d3ee !important;">1. 等長收縮訓練 (Isometric Exercise)</h4>
              <p style="color: #e2e8f0 !important;">手腕維持正中位置（不彎不翹）。用另一隻手給予阻力，嘗試做手腕上翹、下壓、向內、向外的動作，但<strong>手腕本身不動</strong>，純粹用力對抗。每個方向用力 5-10 秒，重複 10 次。這能安全地強化肌肉而不磨損軟骨。</p>
          </div>
      
          <div style="margin-bottom: 2rem;">
              <h4 style="color: #22d3ee !important;">2. 錘式握法訓練 (Hammer Exercise)</h4>
              <p style="color: #e2e8f0 !important;">手拿輕啞鈴或水瓶，手腕擺出像拿鐵鎚的姿勢（拇指朝上）。利用手腕力量將重物輕輕上抬、下放（像敲鐵鎚）。這能訓練橈側肌群，分擔尺側 TFCC 的壓力。</p>
          </div>
      
          <div style="margin-bottom: 2rem;">
              <h4 style="color: #22d3ee !important;">3. 抓握球訓練</h4>
              <p style="color: #e2e8f0 !important;">用力握住軟式網球或握力球 5 秒後放鬆。強化前臂肌肉群，增加手腕穩定度。</p>
          </div>
      
         <p><img src="/images/diseases/hand/tfcc/c.jpg" alt="三角纖維軟骨損傷腕關節穩定訓練"></p>

          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
      
          <div style="background-color: #ecfdf5; padding: 2rem; border-radius: 1rem; margin-top: 3rem; text-align: center;">
              <h3 style="color: #047857 !important; margin-top: 0;">👨‍⚕️ 別讓手腕痛成為生活緊箍咒！</h3>
              <p style="color: #334155 !important; margin-bottom: 1.5rem;">TFCC 損傷因為位置深、血流差，被視為手腕的難症。但只要精確診斷，配合適當的護具固定與 PRP 再生治療，修復軟骨絕非不可能。宸新復健科，讓您的手腕重拾旋轉自如的力量！</p>
              <p style="font-weight: bold; color: #059669 !important;">擰毛巾手腕就痛？立即預約精準檢查！</p>
          </div>
        `,
        symptoms: [
          '手腕小指側（尺側）深處疼痛',
          '擰毛巾、轉門把時疼痛加劇',
          '手腕撐地或撐椅子時刺痛無力',
          '手腕旋轉時有「喀喀」聲響',
          '握力明顯下降'
        ],
        treatments: [
          'PRP 增生療法注射',
          '超音波導引葡萄糖增生療法',
          '長型護腕固定 (Splinting)',
          '等長收縮復健運動',
          '物理治療 (雷射/超音波)'
        ],
        seoKeywords: [
          'TFCC',
          '三角纖維軟骨',
          '手腕外側痛',
          '手腕尺側痛',
          'PRP注射',
          '手腕扭傷',
          '尺骨撞擊症候群'
        ],
        seoDescription: 'TFCC損傷（三角纖維軟骨）造成手腕外側擰毛巾疼痛。宸新復健科提供PRP增生療法與護具指導，修復手腕半月板，解決長期手腕疼痛。',
        images: [
          {  src: '/images/diseases/hand/tfcc/a.jpg', alt: '三角纖維軟骨示意圖'
          }
        ]
      },


{
        id: 'mommy-thumb',
        slug: 'mommy-thumb',
        title: '媽媽手 (狹窄性肌腱滑膜炎)',
        description: '大拇指根部痛到無法擰毛巾、抱小孩？這不只是媽媽的專利，更是現代人的文明病！深入解析媽媽手成因、Finkelstein 自我檢測，以及從護具固定到 PRP 修復的完整治療攻略。',
        contentHtml: `
          <p style="color: #e2e8f0 !important;">您是否有這樣的困擾：想要把毛巾擰乾，大拇指根部的手腕處卻傳來一陣劇痛？剛生完寶寶，想要把孩子抱起來哄睡，手腕卻痛到差點鬆手？或是身為長時間滑手機、打手遊的族群，發現大拇指卡卡、甚至出現凸起的腫塊？</p>
            
          <br>
          <p style="color: #e2e8f0 !important;">這就是俗稱的<strong>「媽媽手」</strong>，但它其實有一個繞口的醫學學名——<strong>「狄奎凡氏症 (De Quervain's Tenosynovitis)」</strong>，正式名稱為<strong>狹窄性肌腱滑膜炎</strong>。這並非媽媽的專利，任何過度使用大拇指的人都可能中招。宸新復健科透過精準超音波診斷，協助您分辨是單純發炎還是結構卡壓，並提供對應的再生醫療方案。</p>

      
          <div style="background-color: #fffbeb; border: 2px solid #fbbf24; border-radius: 1rem; padding: 1.5rem; margin: 2rem 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
              <h2 style="color: #b45309 !important; margin-top: 0; font-weight: bold; border-bottom: 2px solid #fcd34d; padding-bottom: 0.5rem; display: flex; align-items: center;">
                  📢 什麼是媽媽手？大拇指的「隧道塞車」
              </h2>
              
              <p style="font-size: 1.1rem; color: #78350f !important;">在我們手腕大拇指側的骨頭上，有一個由韌帶形成的狹窄隧道。有兩條控制大拇指活動的關鍵肌腱從中穿過：</p>
              
              <ul style="list-style: none; padding: 0; margin-top: 1rem; color: #92400e !important;">
                  <li style="margin-bottom: 1rem; display: flex; align-items: start;">
                      <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">1</span>
                      <div style="color: #92400e !important;">
                          <strong style="color: #dc2626 !important;">兩條主角：</strong> 
                          <strong>外展拇長肌</strong> 與 <strong>伸拇短肌</strong>。當我們翹起大拇指比「讚」時，就是這兩條肌肉在用力。
                      </div>
                  </li>
                  <li style="margin-bottom: 1rem; display: flex; align-items: start;">
                      <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">2</span>
                      <div style="color: #92400e !important;">
                          <strong style="color: #0891b2 !important;">過度摩擦：</strong> 
                          當大拇指反覆用力（如滑手機、抱小孩手腕內扣），肌腱在隧道內不斷來回摩擦，導致肌腱發炎腫脹。
                      </div>
                  </li>
                  <li style="margin-bottom: 0; display: flex; align-items: start;">
                      <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">3</span>
                      <div style="color: #92400e !important;">
                          <strong style="color: #0891b2 !important;">惡性循環：</strong> 
                          肌腱腫起來後，隧道空間變得更擠，就像變胖的人穿緊身褲，越動越痛，最後連腱鞘（隧道壁）也變厚，導致大拇指一動就痛，甚至卡住。
                      </div>
                  </li>
              </ul>
          </div>
      
          
             <p><img src="/images/diseases/hand/dq/b.jpg" alt="媽媽手肌肉構造"></p>
      
          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
      
          <h3 style="color: #f8fafc !important;">⚠️ 誰是高風險族群？不只媽媽會得！</h3>
          <p style="color: #e2e8f0 !important;">雖然稱為媽媽手，但現代生活型態讓這個病的族群大幅增加：</p>
          <ul style="color: #e2e8f0 !important;">
              <li><strong>新手媽媽：</strong> 這是最經典的族群。除了抱小孩姿勢不當（手腕過度彎曲），<strong>懷孕期間的鬆弛素</strong> 會造成全身韌帶鬆弛，加上產後擠奶、換尿布，讓手腕負擔暴增。</li>
              <li><strong>3C 族群 (滑鼠手/手遊手)：</strong> 長時間使用大拇指滑手機、單手打字、玩手遊，導致肌腱過勞。</li>
              <li><strong>餐飲與勞力工作者：</strong> 廚師（拿鍋鏟）、美髮師（拿剪刀）、裝修工人（使用器械），需要反覆使用大拇指力量的人。</li>
              <li><strong>阿公阿嬤：</strong> 幫忙帶孫子，隨著年紀增長肌腱退化，更容易受傷。</li>
          </ul>
      
          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
      
          <h3 style="color: #f8fafc !important;">🔍 自我檢測：Finkelstein 測試</h3>
          <p style="color: #e2e8f0 !important;">您可以透過一個簡單的動作，確認是否有媽媽手：</p>
          
          <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
              <h4 style="margin-top: 0; color: #0e7490 !important;">Finkelstein Test 步驟：</h4>
              <ol style="margin-bottom: 0; color: #334155 !important;">
                  <li>伸出手臂，將大拇指彎曲，用其他四根手指頭<strong>包住大拇指</strong>（握拳）。</li>
                  <li>手腕慢慢<strong>向小指側下壓</strong>（像是釣魚甩竿的動作）。</li>
                  <li><strong>結果判讀：</strong> 如果手腕大拇指側出現劇烈疼痛，即為陽性，代表極有可能患有媽媽手。</li>
              </ol>
          </div>
      
                  <p><img src="/images/diseases/hand/dq/c.jpg" alt="媽媽手Finkelstein 自我檢測動作示範"></p>
      
          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
      
          <h3 style="color: #f8fafc !important;">🛡️ 治療策略：從固定到修復的階梯療法</h3>
          <p style="color: #e2e8f0 !important;">媽媽手如果沒有妥善治療，容易變成慢性肌腱纖維化，甚至影響手部精細動作。治療分三階段：</p>
      
          <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
              <h4 style="margin-top: 0; color: #0e7490 !important;">1. 急性期：一定要選對護具！</h4>
              <p style="margin-bottom: 0; color: #334155 !important;">
                  <strong>護腕沒用，要用「拇指副木」！</strong> 一般的護腕只能固定手腕，大拇指還是能亂動。治療媽媽手必須使用<strong>「包含大拇指固定」</strong>的專用護具（Thumb Spica Splint），強迫大拇指休息，這是最重要的一步，也可以考慮高能量雷射快速減緩痛。
              </p>
          </div>
      
          <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
              <h4 style="margin-top: 0; color: #0e7490 !important;">2. 注射治療：類固醇好還是 PRP 好？</h4>
              <p style="margin-bottom: 0; color: #334155 !important;">
                  <strong>類固醇 (Steroid)：</strong> 俗稱「打針」。優點是消炎止痛極快，通常一針見效。但缺點是可能造成施打處皮膚變白（色素脫失）或皮下脂肪萎縮（皮膚凹陷），且若反覆施打會讓肌腱變脆，容易斷裂。通常建議<strong>最多施打 1-2 次，且間隔要大於3個月</strong>。<br><br>
                  <strong><a href="/treatments/prp" class="text-cyan-400 hover:underline">PRP 增生療法</a>🔍️：</strong> 在超音波導引下，將高濃度血小板注入腱鞘與肌腱之間。優點是<strong>修復組織、沒有副作用</strong>，能強化肌腱結構。對於擔心類固醇副作用或慢性難癒合的患者，是最佳選擇。
              </p>
          </div>
      
          
          <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
              <h4 style="margin-top: 0; color: #0e7490 !important;">3. 慢性沾黏：<a href="/treatments/shockwave" class="text-cyan-400 hover:underline">體外震波治療(ESWT)</a>🔍️</h4>
              <p style="margin-bottom: 0; color: #334155 !important;">
                  如果痛了幾個月，肌腱已經變厚、腱鞘已經變窄（沾黏），震波是很好的非侵入性選擇。利用能量波<strong>軟化僵硬的組織</strong>，促進微血管新生，改善局部的延展性。
              </p>
          </div>
           <p><img src="/images/diseases/hand/dq/d.jpg" alt="媽媽手護腕"></p>
          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
      
<h3 style="color: #f8fafc !important;">🧘‍♂️ 醫師教你做：告別媽媽手！復健運動四招</h3>
<p style="color: #e2e8f0 !important;">
    當手腕外側的紅腫熱痛稍微緩解後，單純休息是不夠的。我們必須適度放鬆緊繃的肌肉源頭，並訓練大拇指的肌力，才能避免肌腱再次發炎。<br>
    <strong style="color: #22d3ee !important;">⚠️ 請注意：所有動作請在「不痛」或僅有「微酸」的範圍內進行。</strong>
</p>
          <br>
<div style="margin-bottom: 2rem;">
    <h4 style="color: #22d3ee !important;">1. 前臂伸拇肌群按摩（源頭放鬆）</h4>
    <p style="color: #e2e8f0 !important;">
        「痛在手腕，問題常在前臂。」 媽媽手的痛點雖然在手腕骨突處，但控制大拇指的肌肉其實延伸到前臂。<br>
        <strong>做法：</strong>將患側手放在大腿上，手心向下。用另一手的大拇指或拳頭指節，尋找患側前臂靠大拇指側、接近手肘處的肌肉豐厚處（肌肉腹）。尋找有痠痛感的點，進行深層按壓或畫圓按摩。<br>
        <strong>頻率：</strong>每個痠痛點按壓 30-60 秒，每日 2-3 回。<br>
        <strong>功效：</strong>放鬆緊繃的肌肉源頭，降低肌腱末端的張力。
    </p>
</div>

<div style="margin-bottom: 2rem;">
    <h4 style="color: #22d3ee !important;">2. 手腕屈肌伸展（拮抗肌放鬆）</h4>
    <p style="color: #e2e8f0 !important;">
        許多新手爸媽在抱小孩時，手腕常不自覺向內彎曲（屈曲），導致前臂內側肌肉長期過度收縮，破壞手腕的力學平衡。<br>
        <strong>做法：</strong>患側手臂向前伸直，掌心朝上。用另一手握住患側手指（包含大拇指），輕輕將手掌向後、向下扳，直到感覺前臂內側有拉伸感。<br>
        <strong>頻率：</strong>停留 15-30 秒，重複 3-5 次。<br>
        <strong>功效：</strong>伸展長期縮短的手腕屈肌，平衡手腕兩側的肌肉張力，減少代償。
    </p>
</div>

<div style="margin-bottom: 2rem;">
    <h4 style="color: #22d3ee !important;">3. 橡皮筋伸展運動（肌力訓練）</h4>
    <p style="color: #e2e8f0 !important;">
        找一條橡皮筋套在五根手指外圍第一指節處。用力將五指<strong>「撐開」</strong>，對抗橡皮筋的阻力，維持 5 秒後放鬆。<br>
        <strong>頻率：</strong>重複 10-15 次。<br>
        <strong>功效：</strong>訓練「伸拇指肌群」的肌力，強化肌腱承受力。
    </p>
</div>

<div style="margin-bottom: 2rem;">
    <h4 style="color: #22d3ee !important;">4. 大拇指屈肌伸展（Finkelstein 伸展）</h4>
    <p style="color: #e2e8f0 !important;">
        將大拇指包在四指內（做握拳狀），手臂伸直，手腕輕輕向小指側（尺側）偏轉。感覺大拇指根部與手腕外側有「微酸緊繃」的拉扯感即可，切勿拉到疼痛。<br>
        <strong>頻率：</strong>停留 15 秒，重複 5 次。<br>
        <strong>功效：</strong>直接伸展發炎緊繃的伸拇短肌與外展拇長肌腱。
    </p>
</div>
             <p><img src="/images/diseases/hand/dq/e.jpg" alt="媽媽手居家手部放鬆與訓練"></p>
      
          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
      
          <div style="background-color: #ecfdf5; padding: 2rem; border-radius: 1rem; margin-top: 3rem; text-align: center;">
              <h3 style="color: #047857 !important; margin-top: 0;">👨‍⚕️ 媽媽手不是忍忍就好！</h3>
              <p style="color: #334155 !important; margin-bottom: 1.5rem;">大拇指承擔了手部 50% 的功能，一旦廢了生活將寸步難行。透過精準的超音波診斷，選擇適合的護具與再生治療，媽媽手絕對是可以治癒的。宸新復健科，守護您的雙手，讓您輕鬆擁抱生活！</p>
              <p style="font-weight: bold; color: #059669 !important;">大拇指一動就痛？立即預約精準檢測！</p>
          </div>
        `,
        symptoms: [
          '大拇指根部（手腕橈側）腫脹疼痛',
          '擰毛巾、轉門把、抱小孩時劇痛',
          'Finkelstein 測試呈現陽性',
          '大拇指活動時有卡住感或摩擦聲',
          '手腕橈側骨突處按壓疼痛'
        ],
        treatments: [
          '專用拇指護具固定 (Thumb Spica)',
          '超音波導引類固醇注射',
          'PRP 增生療法注射',
          '體外震波治療 (ESWT)',
          '橡皮筋肌力訓練'
        ],
        seoKeywords: [
          '媽媽手',
          '狄奎凡氏症',
          '大拇指痛',
          '手腕橈側痛',
          'PRP注射',
          '媽媽手護具',
          'Finkelstein測試'
        ],
        seoDescription: '媽媽手（狄奎凡氏症）造成大拇指根部劇痛。宸新復健科提供PRP增生療法、專用護具指導與居家復健教學，有效修復肌腱，解決長期手腕疼痛。',
        images: [
          { src: '/images/diseases/hand/dq/a.jpg', alt: '媽媽手疼痛示意圖'
          }
        ]
      },

{
          id: 'carpal-tunnel-syndrome',
          slug: 'carpal-tunnel-syndrome',
          title: '腕隧道症候群 (滑鼠手)',
          description: '半夜手麻被痛醒？騎機車手會麻？這不只是血液循環不好！深入解析腕隧道症候群成因、神經解套注射技術，以及關鍵的夜間護具配戴攻略。',
          contentHtml: `
            <p style="color: #e2e8f0 !important;">您是否有這樣的經驗：騎機車催油門久一點，手掌就開始發麻？或是半夜睡覺睡到一半，大拇指、食指和中指<strong>麻到把您叫醒</strong>，必須起來甩甩手才會舒服一點？</p>
                    <br>
            <p style="color: #e2e8f0 !important;">這些都是<strong>腕隧道症候群</strong>最經典的症狀，俗稱「滑鼠手」。它是最常見的周邊神經壓迫疾病，但常被誤認為是頸椎長骨刺或是單純的血液循環不良。宸新復健科透過高解析超音波，能直接測量神經是否腫脹，並利用<strong>神經解套注射</strong>技術，將被卡住的神經「救」出來，免除開刀之苦。</p>
        

        
            <div style="background-color: #fffbeb; border: 2px solid #fbbf24; border-radius: 1rem; padding: 1.5rem; margin: 2rem 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                <h2 style="color: #b45309 !important; margin-top: 0; font-weight: bold; border-bottom: 2px solid #fcd34d; padding-bottom: 0.5rem; display: flex; align-items: center;">
                    📢 什麼是腕隧道？手腕裡的「擁擠捷運站」
                </h2>
                
                <p style="font-size: 1.1rem; color: #78350f !important;">我們的手腕掌側有一個由骨頭和韌帶（橫腕韌帶）圍成的狹窄通道，就像一個隧道。這個小小的空間裡擠了非常多東西：</p>
                
                <ul style="list-style: none; padding: 0; margin-top: 1rem; color: #92400e !important;">
                    <li style="margin-bottom: 1rem; display: flex; align-items: start;">
                        <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">1</span>
                        <div style="color: #92400e !important;">
                            <strong style="color: #dc2626 !important;">9 條肌腱：</strong> 
                            負責手指彎曲的肌腱全部塞在這裡。
                        </div>
                    </li>
                    <li style="margin-bottom: 1rem; display: flex; align-items: start;">
                        <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">2</span>
                        <div style="color: #92400e !important;">
                            <strong style="color: #0891b2 !important;">1 條神經 (正中神經)：</strong> 
                            它是唯一通過這裡的神經，負責大拇指、食指、中指和一半無名指的感覺與肌肉控制。
                        </div>
                    </li>
                    <li style="margin-bottom: 0; display: flex; align-items: start;">
                        <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">3</span>
                        <div style="color: #92400e !important;">
                            <strong style="color: #0891b2 !important;">壓力鍋效應：</strong> 
                            當我們過度使用手腕（肌腱發炎腫脹），或是韌帶變厚（老化、糖尿病），隧道內的空間就會變小，最脆弱的<strong>正中神經</strong>就會被壓扁，導致缺血、發麻。
                        </div>
                    </li>
                </ul>
            </div>
        
                        <p><img src="/images/diseases/hand/cts/b.jpg" alt="腕隧道症候群原理與構造"></p>
            <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
        
            <h3 style="color: #f8fafc !important;">⚠️ 症狀特徵：麻哪幾根手指很重要！</h3>
            <p style="color: #e2e8f0 !important;">手麻不一定是腕隧道，請檢查您麻的是哪裡：</p>
            <ul style="color: #e2e8f0 !important;">
                <li><strong>典型症狀：</strong> <strong style="color: #22d3ee !important;">大拇指、食指、中指</strong>發麻刺痛。尤其是「甩手」後症狀會緩解（Flick sign）。</li>
                <li><strong>非典型症狀：</strong> 覺得五根手指都麻，甚至痛到手肘或肩膀（神經逆行性疼痛）。</li>
                <li><strong>嚴重警訊：</strong> 大拇指基部的肌肉（大魚際肌）萎縮凹陷，導致拿東西沒力氣，容易掉落。這代表神經已經受損嚴重，可能需要開刀。</li>
            </ul>
            <p style="color: #94a3b8 !important; font-size: 0.9rem;">*註：如果是小指麻，通常是「肘隧道症候群」（尺神經問題），不是腕隧道喔！</p>
        <p><img src="/images/diseases/hand/cts/c.jpg" alt="腕隧道症候群症狀"></p>
            <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
        
            <h3 style="color: #f8fafc !important;">🔍 自我檢測：法倫氏測試 (Phalen's Test)</h3>
            <p style="color: #e2e8f0 !important;">在家裡可以做個簡單實驗：</p>
            <ol style="color: #e2e8f0 !important; margin-left: 1.5rem;">
                <li>將雙手手背相對（手腕呈現 90 度彎曲）。</li>
                <li>保持這個姿勢，位置約在胸口高度。</li>
                <li>維持 <strong>60 秒</strong>。</li>
                <li><strong>結果：</strong> 如果在 1 分鐘內，手指開始出現<strong>麻木、刺痛</strong>的感覺，那就是陽性反應，罹患腕隧道症候群的機率很高。</li>
            </ol>
        
           <p><img src="/images/diseases/hand/cts/d.jpg" alt="腕隧道症候法倫氏測試 (Phalen's test) 動作示範"></p>
        
            <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
        
            <h3 style="color: #f8fafc !important;">🛡️ 治療策略：一定要開刀嗎？</h3>
            <p style="color: #e2e8f0 !important;">大多數輕度到中度的患者，透過精準的保守治療就能改善，不需要走到手術這一步。</p>
        
            <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
                <h4 style="margin-top: 0; color: #0e7490 !important;">1. 急性期：夜間護具 (Night Splint)</h4>
                <p style="margin-bottom: 0; color: #334155 !important;">
                    <strong>晚上戴比白天戴更重要！</strong> 很多人睡覺時會不自覺把手腕彎曲（捲成一團），導致神經整晚被壓迫。佩戴特製的副木或護具，強迫手腕維持在「正中位置」（不彎不翹），能讓神經獲得整晚的休息，大幅改善夜間手麻。
                </p>
            </div>
        
            <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
                <h4 style="margin-top: 0; color: #0e7490 !important;">2. 黃金治療：超音波導引神經解套注射</h4>
                <p style="margin-bottom: 0; color: #334155 !important;">
                    這是宸新復健科的專長項目。我們使用高解析超音波，清楚看到被壓扁的正中神經。接著利用長針，將藥水（低濃度葡萄糖或 PRP）精準注入神經與橫腕韌帶之間。
                    <br>
                    <strong>原理：</strong> 利用液體的壓力，將沾黏的組織<strong>「剝離/撐開」</strong> (Hydrodissection)，瞬間解除神經的壓迫，並提供神經修復所需的養分。就像幫神經開了一條新的高速公路，患者常感覺「手鬆開了」。
                </p>
            </div>
        
             <p><img src="/images/diseases/hand/cts/e.jpg" alt="腕隧道症候群超音波導引神經解套術注射"></p>

            <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
                <h4 style="margin-top: 0; color: #0e7490 !important;">3. 何時需要手術？</h4>
                <p style="margin-bottom: 0; color: #334155 !important;">
                    如果大魚際肌已經萎縮，或是經過神經傳導檢查發現神經損傷嚴重，這時為了搶救神經功能，會建議進行「腕隧道減壓手術」，將橫腕韌帶切開。
                </p>
            </div>
        
            <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
        
            <h3 style="color: #f8fafc !important;">🧘‍♂️ 醫師教你做：神經滑動運動 (Nerve Gliding)</h3>
            <p style="color: #e2e8f0 !important;">神經像一條電線，需要要在組織間自由滑動。如果卡住了，我們可以用運動讓它「鬆動」一下。請每天早晚做：</p>
        
            <div style="margin-bottom: 2rem;">
                <h4 style="color: #22d3ee !important;">正中神經滑動五部曲：</h4>
                <ol style="color: #e2e8f0 !important; margin-left: 1.5rem;">
                    <li><strong>握拳：</strong> 手腕維持正中。</li>
                    <li><strong>伸指：</strong> 手指全部伸直。</li>
                    <li><strong>後折：</strong> 手腕向後伸展（手掌朝前）。</li>
                    <li><strong>展開：</strong> 大拇指盡量向外張開。</li>
                    <li><strong>轉向：</strong> 前臂旋後（掌心朝臉），並用另一隻手輕輕將大拇指往下拉。</li>
                </ol>
                <p style="color: #94a3b8 !important; font-size: 0.9rem;">*每個動作停留 5 秒，過程中若感到輕微麻感是正常的拉扯現象。</p>
            </div>
        
               <p><img src="/images/diseases/hand/cts/f.jpg" alt="腕隧道症候群正中神經滑動五部曲"></p>
            <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
        
            <div style="background-color: #ecfdf5; padding: 2rem; border-radius: 1rem; margin-top: 3rem; text-align: center;">
                <h3 style="color: #047857 !important; margin-top: 0;">👨‍⚕️ 半夜手麻別再忍！</h3>
                <p style="color: #334155 !important; margin-bottom: 1.5rem;">腕隧道症候群若拖延治療，肌肉萎縮是不可逆的。只要在初期介入，透過夜間護具與神經解套注射，絕大多數患者都能重獲好眠。宸新復健科，專業守護您的神經健康！</p>
                <p style="font-weight: bold; color: #059669 !important;">手指發麻無力？立即預約神經檢查！</p>
            </div>
          `,
          symptoms: [
            '大拇指、食指、中指發麻刺痛',
            '夜間睡覺會被手麻痛醒',
            '騎機車時手麻加劇甩手後症狀改善',
            '大拇指根部肌肉萎縮無力'
          ],
          treatments: [
            '物理治療 (雷射/超音波)',
            '超音波導引神經解套注射 (Hydrodissection)',
            '夜間副木/護具固定',
            '神經滑動運動 (Nerve Gliding)',
          ],
          seoKeywords: [
            '腕隧道症候群',
            '滑鼠手',
            '手麻',
            '神經解套注射',
            '正中神經壓迫',
            '半夜手麻',
            'Phalen測試'
          ],
          seoDescription: '腕隧道症候群（滑鼠手）造成手指發麻、夜間痛醒。宸新復健科提供神經解套注射與夜間護具指導，有效解除正中神經壓迫，免除手術之苦。',
          images: [
            { 
                    src: '/images/diseases/hand/cts/a.jpg', alt: '腕隧道症候群疼痛示意圖'   
            }
          ]
      },

     {
          id: 'trigger-finger',
          slug: 'trigger-finger',
          title: '板機指 (手指屈肌腱腱鞘炎)',
          description: '手指彎曲後卡住伸不直？用力扳開還會「喀」一聲？這不是骨頭錯位！深入解析板機指成因、分級，以及超音波導引注射與微創針挑手術的完整治療攻略。',
          contentHtml: `
            <p style="color: #e2e8f0 !important;">您是否有這樣的經驗：早上起床時，發現手指頭僵硬、卡卡的，彎下去後竟然<strong>「鎖住」</strong>伸不直？必須用另一隻手用力把它扳開，伴隨著<strong>「喀」</strong>的一聲和劇痛，就像扣動手槍板機一樣？</p>
                <br>
        
            <p style="color: #e2e8f0 !important;">這就是典型的<strong>「板機指」</strong>，醫學正式名稱為<strong>手指屈肌腱狹窄性腱鞘炎</strong>。它是手部最常見的肌腱病變，好發於大拇指、中指與無名指。宸新復健科透過高解析超音波，能精準判斷肌腱腫脹程度與滑車增厚狀況，提供從徒手放鬆、精準注射到微創鬆解的一站式治療。</p>
        
    
            <div style="background-color: #fffbeb; border: 2px solid #fbbf24; border-radius: 1rem; padding: 1.5rem; margin: 2rem 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                <h2 style="color: #b45309 !important; margin-top: 0; font-weight: bold; border-bottom: 2px solid #fcd34d; padding-bottom: 0.5rem; display: flex; align-items: center;">
                    📢 為什麼手指會卡住？A1 滑車與火車過山洞
                </h2>
                
                <p style="font-size: 1.1rem; color: #78350f !important;">要了解板機指，我們可以想像手指的構造像是一列<strong>「火車（肌腱）」</strong>要通過好幾個<strong>「山洞（滑車）」</strong>。</p>
                
                <ul style="list-style: none; padding: 0; margin-top: 1rem; color: #92400e !important;">
                    <li style="margin-bottom: 1rem; display: flex; align-items: start;">
                        <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">1</span>
                        <div style="color: #92400e !important;">
                            <strong style="color: #dc2626 !important;">關鍵角色 A1 滑車：</strong> 
                            在我們手指根部（手掌橫紋處）有一個最重要的山洞叫做 <strong>A1 滑車</strong>。它的功能是把肌腱固定在骨頭上，讓手指能彎曲。
                        </div>
                    </li>
                    <li style="margin-bottom: 1rem; display: flex; align-items: start;">
                        <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">2</span>
                        <div style="color: #92400e !important;">
                            <strong style="color: #0891b2 !important;">發炎與結節：</strong> 
                            當手指過度使用（如長時間剪刀手、拿鋤頭、滑手機），肌腱與山洞不斷摩擦發炎。久而久之，肌腱會腫脹形成一個<strong>「結節 (Nodule)」</strong>，山洞（滑車）也會變厚、變窄。
                        </div>
                    </li>
                    <li style="margin-bottom: 0; display: flex; align-items: start;">
                        <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">3</span>
                        <div style="color: #92400e !important;">
                            <strong style="color: #0891b2 !important;">卡住的瞬間：</strong> 
                            當手指彎曲時，腫大的結節勉強通過了狹窄的山洞；但要伸直時，結節被卡在山洞口出不來，手指就鎖住了。用力一扳，結節瞬間擠過山洞，就會發出「喀」的聲響。
                        </div>
                    </li>
                </ul>
            </div>
               <p><img src="/images/diseases/hand/trigger/b.jpg" alt="板機指構造示意圖"></p>

            <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
        
            <h3 style="color: #f8fafc !important;">⚠️ 分級制度：你的手指多嚴重？</h3>
            <p style="color: #e2e8f0 !important;">臨床上我們依據嚴重程度分為四級，治療策略也隨之不同：</p>
            <ul style="color: #e2e8f0 !important;">
                <li><strong>第一級 (Pre-triggering)：</strong> 手掌根部會有壓痛感，早晨手指僵硬，但還沒有明顯卡住的現象。</li>
                <li><strong>第二級 (Active)：</strong> 手指彎曲時會卡住，但還可以<strong>自己用力伸直</strong>（會有喀喀聲）。</li>
                <li><strong>第三級 (Passive)：</strong> 手指卡住後<strong>無法自己伸直</strong>，必須用另一隻手幫忙扳開，且過程相當疼痛。</li>
                <li><strong>第四級 (Contracture)：</strong> 手指已經攣縮固定在彎曲位置，連用力扳都扳不開，這時通常肌腱已經嚴重沾黏。</li>
            </ul>
        
            <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
        
            <h3 style="color: #f8fafc !important;">🔍 誰是高風險族群？</h3>
            <p style="color: #e2e8f0 !important;">除了過度使用手部的人（美髮師、園藝、家庭主婦、牙醫）之外，有兩個疾病與板機指高度相關：</p>
            
            <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
                <h4 style="margin-top: 0; color: #0e7490 !important;">1. 糖尿病患者 (高危險群！)</h4>
                <p style="margin-bottom: 0; color: #334155 !important;">
                    糖尿病患者罹患板機指的機率高達 10%，且容易<strong>多指同時發生</strong>。原因是高血糖導致膠原蛋白糖化，使肌腱與滑車更容易增厚、發炎。這類患者對類固醇注射的反應通常較差，復發率高。
                </p>
            </div>
        
            <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
                <h4 style="margin-top: 0; color: #0e7490 !important;">2. 類風濕性關節炎</h4>
                <p style="margin-bottom: 0; color: #334155 !important;">
                    因為滑膜長期處於發炎狀態，容易導致肌腱病變。
                </p>
            </div>
        
            <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
        
            <h3 style="color: #f8fafc !important;">🛡️ 治療策略：解開卡住的鎖</h3>
            <p style="color: #e2e8f0 !important;">治療目標是「消除腫脹」並「擴大通道」。宸新復健科提供階梯式療法：</p>
        
            <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
                <h4 style="margin-top: 0; color: #0e7490 !important;">1. 第一級：徒手放鬆與物理治療</h4>
                <p style="margin-bottom: 0; color: #334155 !important;">
                    搭配蠟療、超音波等物理治療軟化組織，並搭配<strong>徒手治療放鬆緊繃的肌肉及居家伸展</strong> ，還有足夠的休息。
                </p>
            </div>
        
            <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
                <h4 style="margin-top: 0; color: #0e7490 !important;">2. 第二、三級：超音波導引注射</h4>
                <p style="margin-bottom: 0; color: #334155 !important;">
                    <strong>類固醇 (Steroid)：</strong> 傳統治療首選。直接注射在腱鞘內（不能打在肌腱上！，超音波導引注射才能更準確打在腱鞘內），強效消炎消腫。優點是快，缺點是多次施打可能導致肌腱斷裂，糖尿病患者效果不佳。<br><br>
                    <strong>超音波導引解套注射 (Hydrodissection)：</strong> 新式療法。利用超音波看準滑車與肌腱的縫隙，注入藥水（葡萄糖或 PRP）將兩者<strong>「撐開」</strong>，剝離沾黏並促進修復。適合不想打類固醇或糖尿病患者。
                </p>
            </div>
                  <p><img src="/images/diseases/hand/trigger/c.jpg" alt="板機指超音波導引注射"></p>
            <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
                <h4 style="margin-top: 0; color: #0e7490 !important;">3. 頑固型：經皮穿刺鬆解術 (Needle Release)</h4>
                <p style="margin-bottom: 0; color: #334155 !important;">
                    介於打針與開刀中間的<strong>微創技術</strong>。在局部麻醉下，醫師利用特殊的針頭，在超音波導引下直接將增厚的 A1 滑車<strong>「挑開/劃開」</strong>。傷口僅針孔大小，免縫合、恢復快，術後手指馬上就不卡了。
                </p>
            </div>
        
            <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
        
            <h3 style="color: #f8fafc !important;">🧘‍♂️ 醫師教你做：居家保養三招</h3>
            <p style="color: #e2e8f0 !important;">除了治療，日常的按摩與伸展能預防復發。請早晚各做一輪：</p>
        
            <div style="margin-bottom: 2rem;">
                <h4 style="color: #22d3ee !important;">1. 橫向深層按摩 (Deep Friction)</h4>
                <p style="color: #e2e8f0 !important;">用好手的大拇指，按壓患指根部最痛的結節處。做<strong>左右方向</strong>（垂直肌腱走向）的深層撥動按摩，而不是上下推。這有助於破壞沾黏組織。</p>
            </div>
        
            <div style="margin-bottom: 2rem;">
                <h4 style="color: #22d3ee !important;">2. 肌腱滑動運動 (Tendon Gliding)</h4>
                <p style="color: #e2e8f0 !important;">這是手指的體操。依序做：伸直手指 -> 彎曲指節（像爪子） -> 握拳 -> 手指伸直。動作要慢，讓肌腱在滑車內順暢滑動。</p>
            </div>
        
            <div style="margin-bottom: 2rem;">
                <h4 style="color: #22d3ee !important;">3. 伸展屈指肌群</h4>
                <p style="color: #e2e8f0 !important;">將患側手臂伸直，手心向外，用另一隻手將患指往後扳，感覺前臂內側有拉扯感。停留 15 秒，重複 5 次。</p>
            </div>
            <p><img src="/images/diseases/hand/trigger/d.jpg" alt="板機指居家運動"></p>

            <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
        
            <div style="background-color: #ecfdf5; padding: 2rem; border-radius: 1rem; margin-top: 3rem; text-align: center;">
                <h3 style="color: #047857 !important; margin-top: 0;">👨‍⚕️ 手指卡卡別硬扳！</h3>
                <p style="color: #334155 !important; margin-bottom: 1.5rem;">板機指是個「機械性」的問題，如果不處理腫脹的結節，只會越卡越緊。宸新復健科擁有完整的治療方案，從保守的復健徒手治療到積極的微創鬆解，讓我們幫您的手指「解鎖」，重回靈活自如！</p>
                <p style="font-weight: bold; color: #059669 !important;">手指彎了伸不直？立即預約超音波評估！</p>
            </div>
          `,
          symptoms: [
            '手指根部（手掌交界處）有壓痛點或結節',
            '手指彎曲後卡住，伸直時會「喀」一聲',
            '早上起床手指特別僵硬',
            '嚴重時手指無法伸直',
          ],
          treatments: [
            '超音波導引解套注射 (Hydrodissection)',
            '局部類固醇注射',
            '<a href="/treatments/manual" class="text-cyan-400 hover:underline">徒手運動治療</a>🔍️',
            '<a href="/treatments/shockwave" class="text-cyan-400 hover:underline">體外震波治療(ESWT)</a>🔍️'
          ],
          seoKeywords: [
            '板機指',
            '手指卡住',
            '手指喀喀聲',
            '腱鞘炎',
            '微創手術',
            '手指復健',
            'A1滑車'
          ],
          seoDescription: '板機指造成手指卡住伸不直，伴隨喀喀聲。宸新復健科提供超音波導引注射、副木固定與微創針挑手術，有效解決肌腱沾黏，恢復手指靈活。',
          images: [
            { src: '/images/diseases/hand/trigger/a.jpg', alt: '板機指疼痛示意圖'   
            }
          ]
      }

    ]
  },

  // =======================================================
  // 5. 膝蓋 (關鍵字：退化性關節炎、膝蓋痛、半月板)
  // =======================================================
  {
    slug: 'knee',
    title: '膝蓋',
    description: '膝蓋相關疾病',
    image: '/images/diseases/e.jpg',
    seoKeywords: ['退化性關節炎治療', '膝蓋痛打針', 'PRP膝蓋', '半月板破裂', '新竹骨科膝蓋'],
    seoDescription: '膝蓋退化上下樓梯痛？新竹退化性膝關節炎治療首選。提供玻尿酸潤滑與PRP軟骨修復療程。免開刀改善半月板受損與十字韌帶損傷。',
    diseases: [
     {
          id: 'knee-osteoarthritis',
          slug: 'knee-osteoarthritis',
          title: '退化性膝關節炎',
          description: '上下樓梯膝蓋無力？蹲下去站不起來？這不只是老化的必然！深入解析膝關節退化分級、玻尿酸與 PRP 的差別，以及關鍵的「股四頭肌」強化運動。',
          contentHtml: `
            <p style="color: #e2e8f0 !important;">您是否有這樣的困擾：早晨起床覺得膝蓋僵硬，要活動一下才比較順？上下樓梯時膝蓋感到痠軟無力，甚至聽到<strong>「喀喀」</strong>的摩擦聲？或是遇到濕冷的天氣，膝蓋就像氣象台一樣開始痠痛？</p>
                    <br>
            <p style="color: #e2e8f0 !important;"><strong>退化性膝關節炎</strong>是全球最常見的關節疾病，也是造成老年人行動不便的主因。但請注意，這並非老人的專利，過度運動、體重過重或曾受過傷的年輕族群也可能提早退化。宸新復健科透過「階梯式治療」策略，從精準診斷到再生修復，助您保養膝蓋，延長關節的使用年限，延後甚至免除置換人工關節的手術。</p>
        

        
            <div style="background-color: #fffbeb; border: 2px solid #fbbf24; border-radius: 1rem; padding: 1.5rem; margin: 2rem 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                <h2 style="color: #b45309 !important; margin-top: 0; font-weight: bold; border-bottom: 2px solid #fcd34d; padding-bottom: 0.5rem; display: flex; align-items: center;">
                    📢 膝蓋為什麼會痛？軟骨磨損的真相
                </h2>
                
                <p style="font-size: 1.1rem; color: #78350f !important;">膝關節就像是車子的輪胎與避震器。健康的膝蓋骨頭表面覆蓋著一層光滑的<strong>「關節軟骨」</strong>，中間還有負責緩衝的<strong>「半月板」</strong>與潤滑的<strong>「關節液」</strong>。</p>
                
                <ul style="list-style: none; padding: 0; margin-top: 1rem; color: #92400e !important;">
                    <li style="margin-bottom: 1rem; display: flex; align-items: start;">
                        <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">1</span>
                        <div style="color: #92400e !important;">
                            <strong style="color: #dc2626 !important;">軟骨磨損 (Wear and Tear)：</strong> 
                            隨著年齡增長或長期負重，軟骨就像磨平的輪胎皮一樣變薄、變粗糙，失去緩衝能力。
                        </div>
                    </li>
                    <li style="margin-bottom: 1rem; display: flex; align-items: start;">
                        <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">2</span>
                        <div style="color: #92400e !important;">
                            <strong style="color: #0891b2 !important;">骨刺增生 (Bone Spurs)：</strong> 
                            為了增加接觸面積來分擔壓力，骨頭邊緣會長出贅骨（骨刺）。骨刺本身不一定會痛，但它代表關節已經不穩定了。
                        </div>
                    </li>
                    <li style="margin-bottom: 0; display: flex; align-items: start;">
                        <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">3</span>
                        <div style="color: #92400e !important;">
                            <strong style="color: #0891b2 !important;">發炎反應：</strong> 
                            磨損的碎屑掉在關節腔內，會刺激滑膜發炎，導致關節<strong>積水腫脹</strong>（膝蓋看起來腫腫的），這就是疼痛的主要來源。
                        </div>
                    </li>
                </ul>
            </div>
        
                    <p><img src="/images/diseases/knee/oa/b.jpg" alt="退化性關節炎示意圖"></p>
            <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
        
            <h3 style="color: #f8fafc !important;">⚠️ 分級制度：你的膝蓋幾歲了？</h3>
            <p style="color: #e2e8f0 !important;">臨床上我們依據 X 光片（Kellgren-Lawrence 分級）將退化程度分為四級：</p>
            <ul style="color: #e2e8f0 !important;">
                <li><strong>第一級 (Grade 1)：</strong> 疑似有骨刺，關節間隙正常。症狀輕微，偶爾痠痛。</li>
                <li><strong>第二級 (Grade 2)：</strong> 看到明顯骨刺，關節間隙輕微變窄。上下樓梯開始無力。<strong>（這是保養的黃金期！）</strong></li>
                <li><strong>第三級 (Grade 3)：</strong> 骨刺多，關節間隙明顯變窄（軟骨磨掉一半）。蹲下困難，走久會痛。</li>
                <li><strong>第四級 (Grade 4)：</strong> 關節間隙消失（骨頭磨骨頭），骨頭變形。寸步難行，可能需要考慮人工關節置換。</li>
            </ul>
               
                    <p><img src="/images/diseases/knee/oa/c.jpg" alt="退化性關節炎x光分級"></p>



    <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

    <h3 style="color: #f8fafc !important;">🔍 超音波下的真相：X 光看不到的秘密</h3>
    <p style="color: #e2e8f0 !important;">很多患者會問：「醫師，我 X 光照出來骨頭還好，為什麼膝蓋這麼腫、這麼痛？」其實，X 光只能看硬骨頭，<strong>軟組織的問題（積水、半月板、發炎）必須靠高解析超音波才看得到</strong>。在宸新復健科的檢查螢幕上，我們會帶您看到以下狀況：</p>
          <br>
    <div style="margin-bottom: 2rem;">
        <h4 style="color: #22d3ee !important;">1. 膝關節積水 (Joint Effusion)</h4>
        <p style="color: #e2e8f0 !important;">正常的關節液只有一點點。但在超音波下，若看到髕骨上方出現<strong>「黑色的不規則區域」</strong>（黑色代表液體），那就是積水。這代表關節內正處於急性發炎狀態，會讓膝蓋非常腫脹，抽出後會舒服很多，施打PRP或玻尿酸前也一定要抽出，以免跟積水混在一起影響效果。</p>
    </div>
<p><img src="/images/diseases/knee/oa/e.jpg" alt="退化性關節炎膝蓋積水"></p>
    <div style="margin-bottom: 2rem;">
        <h4 style="color: #22d3ee !important;">2. 半月板擠出與破裂 (Meniscus Extrusion)</h4>
        <p style="color: #e2e8f0 !important;">健康的半月板應該乖乖待在上下骨頭中間當避震器。但在退化性關節炎患者身上，超音波常看到半月板像<strong>「夾心餅乾的內餡」</strong>一樣被擠出來，甚至出現不連續的裂痕（撕裂）。這代表避震功能失效，骨頭將直接承受衝擊。</p>
    </div>

    <div style="margin-bottom: 2rem;">
        <h4 style="color: #22d3ee !important;">3. 滑膜增厚與血流增加 (Synovitis)</h4>
        <p style="color: #e2e8f0 !important;">正常的滑膜很薄。若在超音波下看到滑膜變厚，且開啟<strong>「能量都卜勒 (Power Doppler)」</strong>模式時看到紅紅的血管訊號，代表滑膜正在充血發炎。這類患者通常膝蓋摸起來會熱熱的，且疼痛感強烈。</p>
    </div>

    <div style="margin-bottom: 2rem;">
        <h4 style="color: #22d3ee !important;">4. 軟骨磨損變薄</h4>
        <p style="color: #e2e8f0 !important;">超音波可以直接測量股骨表面「透明軟骨」的厚度。退化越嚴重，那層原本應該是平滑黑色的軟骨層會變得<strong>越來越薄</strong>，表面甚至變得像月球表面一樣坑坑洞洞（粗糙不平）。</p>
    </div>


            <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
        
            <h3 style="color: #f8fafc !important;">🔍 誰是高風險族群？</h3>
            <ul style="color: #e2e8f0 !important;">
                <li><strong>體重過重：</strong> 這是最大的殺手。體重每增加 1 公斤，膝蓋走路時受力增加 3-4 公斤，上下樓梯增加 7 倍壓力。</li>
                <li><strong>女性：</strong> 停經後荷爾蒙減少，加上骨盆較寬導致膝蓋受力角度較大，女性患病率是男性的 2 倍。</li>
                <li><strong>O型腿 / X型腿：</strong> 力線不正，導致膝蓋內側或外側受力不均，加速單側磨損。</li>
                <li><strong>職業傷害：</strong> 需要長期蹲跪、搬重物的工作者（如清潔工、建築工）。</li>
            </ul>
        
            <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
        
            <h3 style="color: #f8fafc !important;">🛡️ 治療策略：從潤滑到修復的階梯療法</h3>
            <p style="color: #e2e8f0 !important;">膝蓋退化不可逆，但我們可以「延緩」惡化並「消除」疼痛。治療選擇取決於嚴重程度：</p>
        
            <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
                <h4 style="margin-top: 0; color: #0e7490 !important;">1. 潤滑保養：玻尿酸注射 (Hyaluronic Acid)</h4>
                <p style="margin-bottom: 0; color: #334155 !important;">
                    <strong>就像幫車子換機油。</strong> 玻尿酸能增加關節液的黏稠度與潤滑度，減少軟骨摩擦，並具有輕微的抗發炎效果。適合第 2-3 級，覺得膝蓋卡卡、輕微疼痛的患者。健保與自費劑型皆有提供。
                </p>
            </div>
        
            <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
                <h4 style="margin-top: 0; color: #0e7490 !important;">2. 軟骨修復：<a href="/treatments/prp" class="text-cyan-400 hover:underline">PRP 增生療法</a>🔍️</h4>
                <p style="margin-bottom: 0; color: #334155 !important;">
                    <strong>這才是真正的「補」軟骨。</strong> 玻尿酸只能潤滑，無法修復。若希望能讓受損的軟骨、半月板或韌帶修復，<strong style="color: #0891b2 !important;">PRP (高濃度血小板)</strong> 是最佳選擇。透過超音波導引，將生長因子精準打入關節腔與受損的韌帶處，抑制發炎並促進組織再生。
                </p>
            </div>
       
            <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
                <h4 style="margin-top: 0; color: #0e7490 !important;">3. 嚴重疼痛：神經阻斷術 (Nerve Block)</h4>
                <p style="margin-bottom: 0; color: #334155 !important;">
                    對於第 4 級嚴重退化、但不適合或不想開刀的長輩，我們可以針對支配膝蓋感覺的「膝神經 (Genicular Nerve)」進行阻斷或燒灼。這能阻斷痛覺訊號傳回大腦，大幅改善生活品質。
                </p>
            </div>
        
            <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
        
            <h3 style="color: #f8fafc !important;">🧘‍♂️ 醫師教你做：最好的護膝是「肌肉」</h3>
            <p style="color: #e2e8f0 !important;">戴護膝只是輔助，把大腿前側的<strong>「股四頭肌」</strong>練壯，才是保護膝蓋的長久之計。強壯的肌肉能像彈簧一樣吸收衝擊力。請每天勤做：</p>
        
            <div style="margin-bottom: 2rem;">
                <h4 style="color: #22d3ee !important;">1. 坐姿直抬腿 (Straight Leg Raise)</h4>
                <p style="color: #e2e8f0 !important;">坐在椅子上（背挺直），將一隻腳膝蓋用力伸直，腳尖勾起，維持 5-10 秒，感覺大腿前側肌肉緊繃。然後慢慢放下。每腳重複 15-20 次。這是最安全、不傷膝蓋的訓練。</p>
            </div>
        
            <div style="margin-bottom: 2rem;">
                <h4 style="color: #22d3ee !important;">2. 靠牆深蹲 (Wall Squat)</h4>
                <p style="color: #e2e8f0 !important;">背靠著牆壁，雙腳打開與肩同寬，向前跨一步。慢慢沿著牆壁往下滑，直到膝蓋彎曲約 30-45 度（不要太深，不要超過腳尖）。停留 10-20 秒，再慢慢站起來。這能有效訓練股四頭肌的肌耐力。</p>
            </div>
        
            <div style="margin-bottom: 2rem;">
                <h4 style="color: #22d3ee !important;">3. 壓膝運動</h4>
                <p style="color: #e2e8f0 !important;">平躺或長坐，在膝蓋下方墊一條捲起來的毛巾。用力將膝蓋往下壓毛巾，讓大腿肌肉繃緊，維持 10 秒後放鬆。適合術後或膝蓋無力的初期復健。</p>
            </div>
        
                     <p><img src="/images/diseases/knee/oa/d.jpg" alt="退化性關節炎居家運動"></p>
            <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
        
            <div style="background-color: #ecfdf5; padding: 2rem; border-radius: 1rem; margin-top: 3rem; text-align: center;">
                <h3 style="color: #047857 !important; margin-top: 0;">👨‍⚕️ 膝蓋要用一輩子，現在保養不嫌晚！</h3>
                <p style="color: #334155 !important; margin-bottom: 1.5rem;">膝蓋退化不是絕症，透過減重、運動與現代再生醫療（PRP），我們可以有效地與它和平共處，甚至逆轉機能。別讓疼痛困住了您的腳步，宸新復健科助您找回說走就走的行動力！</p>
                <p style="font-weight: bold; color: #059669 !important;">上下樓梯膝蓋痛？立即預約關節檢測！</p>
            </div>
          `,
          symptoms: [
            '上下樓梯膝蓋無力、痠軟',
            '膝蓋活動時有喀喀聲',
            '關節積水腫脹',
            '膝蓋變形（O型腿變嚴重）'
          ],
          treatments: [
            '止痛藥及復健',
            '玻尿酸潤滑注射',
            '<a href="/treatments/prp" class="text-cyan-400 hover:underline">PRP 增生療法</a>🔍️',

            '<a href="/treatments/manual" class="text-cyan-400 hover:underline">股四頭肌強化運動</a>🔍️',
          ],
          seoKeywords: [
            '退化性膝關節炎',
            '膝蓋痛',
            '膝蓋積水',
            'PRP注射',
            '玻尿酸',
            '人工關節',
            '股四頭肌運動'
          ],
          seoDescription: '退化性膝關節炎造成上下樓梯膝蓋無力疼痛。宸新復健科提供PRP軟骨修復、玻尿酸注射與股四頭肌運動教學，有效延緩關節置換手術。',
          images: [
            { src: '/images/diseases/knee/oa/a.jpg', alt: '退化性膝關節炎疼痛示意圖' 
            }
          ]

      }

    ]
  },

  // =======================================================
  // 6. 足踝 (關鍵字：足底筋膜炎、腳踝扭傷、阿基里斯腱)
  // =======================================================
  {
    slug: 'ankle',
    title: '足踝',
    description: '足踝相關疾病',
    image: '/images/diseases/f.jpg',
    seoKeywords: ['足底筋膜炎治療', '腳踝扭傷復健', '阿基里斯腱發炎', '腳跟痛', '扁平足'],
    seoDescription: '足底筋膜炎下床好痛？新竹震波治療推薦。專治腳踝扭傷後遺症與阿基里斯腱發炎。提供客製化足弓鞋墊與復健運動指導，徹底解決足部疼痛。',
    diseases: [

      {
          id: 'ankle-sprain',
          slug: 'ankle-sprain',
          title: '踝關節扭傷 (翻腳刀)',
          description: '走路踩空、打球翻船？腳踝扭傷不只是冰敷就好！深入解析韌帶撕裂分級、為何會變成「玻璃腳」，以及震波與 PRP 如何加速修復。',
          contentHtml: `
            <p style="color: #e2e8f0 !important;">走路踩空、下樓梯不留神，或是打球落地時沒踩穩，<strong>「腳踝扭傷」（俗稱翻腳刀）</strong>絕對是復健科門診最常見的運動傷害第一名。許多患者以為「不痛就是好了」，受傷後隨便貼個藥布就繼續運動，結果韌帶鬆弛沒長好，演變成動不動就扭到的<strong>「習慣性扭傷（玻璃腳）」</strong>，甚至年紀輕輕就產生關節退化。</p>
          
            <br>      
            <p style="color: #e2e8f0 !important;">宸新復健科提供從急性期的超音波診斷、積水抽吸，到修復期的 PRP 增生療法與運動員等級的本體感覺訓練，我們不只讓您能走路，更要讓您能安心跳躍。</p>

        
            <div style="background-color: #fffbeb; border: 2px solid #fbbf24; border-radius: 1rem; padding: 1.5rem; margin: 2rem 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                <h2 style="color: #b45309 !important; margin-top: 0; font-weight: bold; border-bottom: 2px solid #fcd34d; padding-bottom: 0.5rem; display: flex; align-items: center;">
                    📢 為什麼會翻腳刀？脆弱的外側韌帶
                </h2>
                
                <p style="font-size: 1.1rem; color: #78350f !important;">人體的腳踝結構就像一個積木，內側韌帶強壯厚實，外側韌帶則相對薄弱。因此 80% 以上的扭傷都屬於<strong>腳掌向內翻轉 (Inversion)</strong>。這股力量會瞬間撕裂外側的韌帶群：</p>
                
                <ul style="list-style: none; padding: 0; margin-top: 1rem; color: #92400e !important;">
                    <li style="margin-bottom: 1rem; display: flex; align-items: start;">
                        <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">1</span>
                        <div style="color: #92400e !important;">
                            <strong style="color: #dc2626 !important;">前距腓韌帶 (ATFL)：</strong> 
                            第一受害者！位於外踝前方，這是最容易斷裂的一條，受傷時外踝前方會腫一個大包。
                        </div>
                    </li>
                    <li style="margin-bottom: 1rem; display: flex; align-items: start;">
                        <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">2</span>
                        <div style="color: #92400e !important;">
                            <strong style="color: #0891b2 !important;">跟腓韌帶 (CFL)：</strong> 
                            位於外踝正下方，如果扭傷力道更大，連這條也會受傷，造成關節嚴重不穩。
                        </div>
                    </li>
                    <li style="margin-bottom: 0; display: flex; align-items: start;">
                        <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">3</span>
                        <div style="color: #92400e !important;">
                            <strong style="color: #0891b2 !important;">後距腓韌帶 (PTFL)：</strong> 
                            位於後方，較少受傷，除非是極嚴重的脫臼性扭傷。
                        </div>
                    </li>
                </ul>
            </div>        
        
            <h3 style="color: #f8fafc !important;">⚠️ 受傷分級：你是哪一種？</h3>
            <p style="color: #e2e8f0 !important;">不是所有的扭傷都一樣，醫師通常會根據嚴重程度分為三級：</p>
            <ul style="color: #e2e8f0 !important;">
                <li><strong>第一級 (輕度)：</strong> 韌帶被拉扯產生微小裂傷。外觀輕微腫脹，仍可走路但會痛。恢復期約 1-2 週。</li>
                <li><strong>第二級 (中度)：</strong> 韌帶<strong>部分撕裂</strong>。明顯腫脹、瘀血（像麵龜），走路跛行，關節有些微鬆動。恢復期約 4-6 週。</li>
                <li><strong>第三級 (重度)：</strong> 韌帶<strong>完全斷裂</strong>。腳踝極度腫脹、甚至變形，完全無法受力踩地，關節明顯不穩。恢復期需 3 個月以上，甚至需手術修補。</li>
            </ul>
        
            <p><img src="/images/diseases/ankle/sprain/b.jpg" alt="腳踝外側韌帶(前距腓韌帶)撕裂傷示意圖"></p>
        
        
            <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
        
            <h3 style="color: #f8fafc !important;">🧊 急性期處理：依照RICE 原則</h3>
            <p style="color: #e2e8f0 !important;">受傷後的 48~72 小時是黃金急救期。依照RICE 原則（休息、冰敷、壓迫、抬高），避免持續腫脹惡化。</p>
            
            <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
                <h4 style="margin-top: 0; color: #0e7490 !important;">關鍵急救重點：</h4>
                <ul style="margin-bottom: 0; color: #334155 !important;">
                    <li><strong>Protection (保護)：</strong> 急性期不要逞強，使用護踝或拐杖保護腳踝，避免二度拉扯。</li>
                    <li><strong>Compression (壓迫)：</strong> 這是消腫最有效的方法！使用彈性繃帶由腳掌往小腿方向纏繞，減少出血空間。</li>
                    <li><strong>Elevation (抬高)：</strong> 睡覺或坐著時，將患肢抬高於心臟位置，幫助淋巴回流。</li>
                    <li><strong>Avoid Anti-inflammatories (避免過度消炎)：</strong> 剛受傷的前幾天，適度的發炎反應其實是啟動修復的信號，不要濫用強力消炎藥。</li>
                </ul>
            </div>
        
            <p><img src="/images/diseases/ankle/sprain/c.jpg" alt="腳踝扭傷急性期處理 RICE 原則"></p>
        
            <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
        
            <h3 style="color: #f8fafc !important;">🛡️ 治療策略：不想變玻璃腳該怎麼做？</h3>
            <p style="color: #e2e8f0 !important;">韌帶的血液循環很差，一旦撕裂很難自己長回原來的強度，容易變長、變鬆。為了避免習慣性扭傷，我們需要「主動修復」：</p>
        
            <div style="margin-bottom: 2rem;">
                <h4 style="color: #22d3ee !important;">1. 超音波導引檢查與抽吸</h4>
                <p style="color: #e2e8f0 !important;">X 光只能看骨頭，<strong>超音波</strong>才能看韌帶。醫師能判斷是否有積水或血腫，必要時在超音波導引下將積血抽出，能大幅減輕疼痛與腫脹感。</p>
            </div>
        
            <div style="margin-bottom: 2rem;">
                <h4 style="color: #22d3ee !important;">2. <a href="/treatments/prp" class="text-cyan-400 hover:underline">PRP 增生療法</a>🔍️ (韌帶強力膠)</h4>
                <p style="color: #e2e8f0 !important;">對於第二級以上的撕裂傷，<strong style="color: #0891b2 !important;">PRP (高濃度血小板)</strong> 是最佳選擇。將生長因子精準注入撕裂的韌帶中，能加速組織癒合，讓韌帶長得更強壯、更有彈性，減少未來鬆弛不穩的機率。</p>
            </div>
        
            <div style="margin-bottom: 2rem;">
                <h4 style="color: #22d3ee !important;">3. <a href="/treatments/shockwave" class="text-cyan-400 hover:underline">體外震波治療(ESWT)</a>🔍️</h4>
                <p style="color: #e2e8f0 !important;">如果扭傷已經超過 3 個月還隱隱作痛，通常是產生了<strong>沾黏組織</strong>或是韌帶周邊有<strong>碎骨或鈣化</strong>，震波能打散軟組織沾黏及碎骨或鈣化，並促進血管新生，或是徒手治療鬆動沾黏的踝關節，解決慢性的外踝疼痛。</p>
            </div>
        
            <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
        
            <h3 style="color: #f8fafc !important;">💪 醫師教你做：復健三招重建「本體感覺」</h3>
            <p style="color: #e2e8f0 !important;">為什麼會變玻璃腳？因為韌帶受傷後，大腦對腳踝位置的感應（GPS 訊號）會變遲鈍。不痛後一定要做以下訓練：</p>
        
            <div style="margin-bottom: 2rem;">
                <h4 style="color: #22d3ee !important;">1. 腳踝幫浦運動 (消腫期)</h4>
                <p style="color: #e2e8f0 !important;">躺在床上，腳板用力向上勾起（停 3 秒）、用力向下壓（停 3 秒）。像幫浦一樣促進血液循環，加速消腫。</p>
            </div>
        
            <div style="margin-bottom: 2rem;">
                <h4 style="color: #22d3ee !important;">2. 腓骨長肌訓練 (強化外側)</h4>
                <p style="color: #e2e8f0 !important;">坐在椅子上，用彈力帶套住雙腳前掌。雙腳跟著地，用患側腳掌<strong>往外、往上</strong>頂開彈力帶。這能強化外側肌肉，形成天然護踝。</p>
            </div>
        
            <div style="margin-bottom: 2rem;">
                <h4 style="color: #22d3ee !important;">3. 金雞獨立 (本體感覺關鍵！)</h4>
                <p style="color: #e2e8f0 !important;">站在平地上，用受傷那隻腳單腳站立，維持平衡 30 秒。如果覺得簡單，可以嘗試<strong>閉上眼睛</strong>（這會變得非常難！）。這能重新訓練大腦對腳踝的控制力，是預防再次扭傷最有效的運動。</p>
            </div>
        
            <p><img src="/images/diseases/ankle/sprain/d.jpg" alt="腳踝扭傷復健運動教學：幫浦運動、毛巾抓握、單腳站立"></p>
        
            <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
        
            <h3 style="color: #f8fafc !important;">🚨 什麼情況該立刻照 X 光？</h3>
            <p style="color: #e2e8f0 !important;">雖然大部分扭傷不傷骨頭，但如果符合<strong>「渥太華足踝規則 (Ottawa Ankle Rules)」</strong>，請務必進行 X 光檢查排除骨折：</p>
            <ul style="color: #e2e8f0 !important;">
                <li>外踝或內踝骨頭邊緣 6 公分內有壓痛。</li>
                <li>第五蹠骨基部（小腳趾後方突出的骨頭）有壓痛。</li>
                <li>受傷當下完全無法負重行走，走四步都有困難。</li>
            </ul>
        
            <div style="background-color: #ecfdf5; padding: 2rem; border-radius: 1rem; margin-top: 3rem; text-align: center;">
                <h3 style="color: #047857 !important; margin-top: 0;">👨‍⚕️ 翻船別輕忽，治好才能走更遠！</h3>
                <p style="color: #334155 !important; margin-bottom: 1.5rem;">腳踝扭傷雖小，但處理不慎後患無窮。正確的診斷、積極的增生療法，加上完整的本體感覺復健，才能讓您的腳踝穩如泰山，安心回歸運動場！</p>
                <p style="font-weight: bold; color: #059669 !important;">反覆翻船好不了？立即預約韌帶檢查！</p>
            </div>
          `,
          symptoms: [
            '外側腳踝急速腫脹像一顆滷蛋',
            '腳踝外側有劇烈壓痛或大片瘀青',
            '行走困難，無法單腳跳',
            '感覺關節鬆動不穩'
          ],
          treatments: [
            '急性期：RICE原則',
            '止痛藥物及復健治療',
            '超音波導引積水抽吸',
    '<a href="/treatments/prp" class="text-cyan-400 hover:underline">PRP 增生療法</a>🔍️'
          ],
          seoKeywords: [
            '踝關節扭傷',
            '翻腳刀',
            '腳踝韌帶撕裂',
            '前距腓韌帶',
            '習慣性扭傷',
            'PRP注射',
            '腳踝復健'
          ],
          seoDescription: '踝關節扭傷（翻腳刀）造成外踝腫脹瘀血。宸新復健科提供PRP增生療法修復韌帶，搭配本體感覺訓練，預防變成習慣性扭傷與玻璃腳。',
          images: [
            { 
              src: '/images/diseases/ankle/sprain/a.jpg', 
              alt: '腳踝扭傷疼痛示意圖' 
            }
          ]
  
      },

 {
        id: 'plantar-fasciitis',
        slug: 'plantar-fasciitis',
        title: '足底筋膜炎',
        description: '下床第一步腳底像被針刺？久站久走腳跟痛？深入解析足底筋膜炎成因、骨刺迷思，以及從震波治療到居家伸展的完整照護指南。',
        contentHtml: `
          <p style="color: #e2e8f0 !important;">您是否有這樣的經驗：早晨起床，腳一踩到地板的那一剎那，腳底傳來一陣<strong>椎心刺骨的劇痛</strong>？或是久坐辦公室起身要去倒水時，腳跟痛到不敢著地，但走一走之後好像又比較不痛了？</p>
          
          <br>  
          <p style="color: #e2e8f0 !important;">這就是<strong>足底筋膜炎</strong>最典型的症狀。它是足部疼痛最常見的原因，影響著無數的跑者、工程師、老師與家庭主婦。宸新復健科透過精準的超音波診斷與步態評估，協助您找出足底受力的癥結點，並提供震波與再生醫療方案，讓您重新找回輕盈的步伐。</p>

      
          <div style="background-color: #fffbeb; border: 2px solid #fbbf24; border-radius: 1rem; padding: 1.5rem; margin: 2rem 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
              <h2 style="color: #b45309 !important; margin-top: 0; font-weight: bold; border-bottom: 2px solid #fcd34d; padding-bottom: 0.5rem; display: flex; align-items: center;">
                  📢 什麼是足底筋膜？腳底的避震彈簧
              </h2>
              
              <p style="font-size: 1.1rem; color: #78350f !important;">足底筋膜是一層厚實的結締組織，像扇子一樣從腳跟骨延伸到五個腳趾根部。它的功能就像一張<strong>「弓弦」</strong>，負責拉緊足弓，在我們走路、跑步著地時提供避震與支撐。</p>
              
              <ul style="list-style: none; padding: 0; margin-top: 1rem; color: #92400e !important;">
                  <li style="margin-bottom: 1rem; display: flex; align-items: start;">
                      <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">1</span>
                      <div style="color: #92400e !important;">
                          <strong style="color: #dc2626 !important;">微小撕裂傷 (Micro-tears)：</strong> 
                          當足部過度使用（如馬拉松、久站）或結構異常（扁平足、高足弓）時，這條「弦」會被反覆拉扯。久而久之，筋膜與腳跟骨的連接點會產生微小的撕裂傷。
                      </div>
                  </li>
                  <li style="margin-bottom: 1rem; display: flex; align-items: start;">
                      <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">2</span>
                      <div style="color: #92400e !important;">
                          <strong style="color: #0891b2 !important;">退化而非單純發炎：</strong> 
                          近年研究發現，慢性的足底筋膜炎其實發炎細胞不多，更多的是膠原蛋白排列紊亂、變性與增厚。所以醫學上更傾向稱之為<strong>「足底筋膜病變」</strong>。這解釋了為什麼單吃消炎藥往往效果不持久。
                      </div>
                  </li>
                  <li style="margin-bottom: 0; display: flex; align-items: start;">
                      <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">3</span>
                      <div style="color: #92400e !important;">
                          <strong style="color: #0891b2 !important;">為什麼第一步最痛？</strong> 
                          晚上睡覺時，腳板自然放鬆下垂，筋膜處於縮短狀態並開始修復，且整個晚上沒動，肌肉變得更緊繃僵硬。早晨第一步踩下去，縮短的筋膜突然被強烈拉開，新長好的脆弱組織再次被撕裂，因此產生劇痛。走幾步後筋膜熱開被拉鬆了，疼痛反而減輕。
                      </div>
                  </li>
              </ul>
          </div>
       <p><img src="/images/diseases/ankle/plantar/a.jpg" alt="足底筋膜炎"></p>
      
          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
      
          <h3 style="color: #f8fafc !important;">⚠️ 誰是高風險族群？</h3>
          <p style="color: #e2e8f0 !important;">只要是<strong>「足部負重過大」</strong>或<strong>「力學結構異常」</strong>的人，都在危險名單中：</p>
          <ul style="color: #e2e8f0 !important;">
              <li><strong>結構異常：</strong> 
                  <ul>
                      <li><strong>扁平足：</strong> 足弓塌陷，導致筋膜被過度拉長。</li>
                      <li><strong>高足弓：</strong> 足弓缺乏吸震能力，壓力集中在腳跟與前腳掌。</li>
                  </ul>
              </li>
              <li><strong>過度使用：</strong> 跑者（尤其是突然增加跑量）、登山客、長時間站立工作者（櫃姐、老師、護理師、餐飲業）。</li>
              <li><strong>體重過重：</strong> 腳底承受的壓力與體重成正比。BMI > 27 者風險大增。</li>
              <li><strong>鞋子不當：</strong> 長期穿著底太硬、太薄的平底鞋，或缺乏足弓支撐的鞋子。</li>
              <li><strong>小腿緊繃：</strong> 阿基里斯腱太緊，會限制腳踝活動度，強迫足底筋膜代償受力。</li>
          </ul>
      
          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
      
          <h3 style="color: #f8fafc !important;">🔍 骨刺是兇手嗎？診斷迷思大破解</h3>
          <p style="color: #e2e8f0 !important;">很多患者照了 X 光看到腳跟有骨刺，就以為那是痛的來源，甚至想開刀拿掉。</p>
          
          <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
              <h4 style="margin-top: 0; color: #0e7490 !important;">👨‍⚕️ 醫師闢謠：骨刺通常是無辜的！</h4>
              <p style="margin-bottom: 0; color: #334155 !important;">
                  約有 50% 沒腳痛的人，照 X 光也有骨刺。骨刺是骨頭長期受拉扯後的「增生痕跡」，它通常是<strong>結果</strong>而非原因。真正的疼痛來源是<strong>筋膜本身的發炎與微小撕裂</strong>。
              </p>
          </div>
      
          <p style="color: #e2e8f0 !important;"><strong>宸新復健科的精準診斷工具：</strong></p>
          <ul style="color: #e2e8f0 !important;">
              <li><strong>高解析超音波：</strong> 直接測量筋膜厚度。正常約 2-3mm，若<strong>超過 3.5 mm</strong> 且回音變低（變黑），且按壓會痛，即可確診。</li>
              <li><strong>動態足壓檢測：</strong> 評估是否有扁平足或高足弓，作為製作鞋墊的依據。</li>
          </ul>
      
          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
      
          <h3 style="color: #f8fafc !important;">🛡️ 治療策略：從鞋墊到再生的階梯療法</h3>
          <p style="color: #e2e8f0 !important;">足底筋膜炎難治是因為我們每天都要走路，傷口很難休息。治療必須多管齊下：</p>
      
          <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
              <h4 style="margin-top: 0; color: #0e7490 !important;">1. 基礎工程：鞋墊與伸展</h4>
              <p style="margin-bottom: 0; color: #334155 !important;">
                  <strong>換雙好鞋：</strong> 選擇有足弓支撐、鞋底吸震、包覆性好的鞋子。室內避免赤腳，可穿厚底拖鞋。<br>
                  <strong>客製化鞋墊：</strong> 對於結構異常者，鞋墊能重新分配足底壓力，減少筋膜拉扯，是治本的關鍵。
              </p>
          </div>
      
          <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
              <h4 style="margin-top: 0; color: #0e7490 !important;">2. 黃金標準：<a href="/treatments/shockwave" class="text-cyan-400 hover:underline">體外震波治療(ESWT)</a>🔍️</h4>
              <p style="margin-bottom: 0; color: #334155 !important;">
                  對於慢性（超過 3 個月）的足底筋膜炎，震波是目前公認最有效的非侵入性治療。它利用高能量聲波，直接打在退化增厚的筋膜上，能<strong>破壞不健康的組織</strong>，刺激血管新生，促進膠原蛋白重組。通常每週 1 次，連續 3-6 次，改善率可達 80%。
              </p>
          </div>
      
          
      
          <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
              <h4 style="margin-top: 0; color: #0e7490 !important;">3. 頑固型剋星：<a href="/treatments/prp" class="text-cyan-400 hover:underline">PRP 增生療法</a>🔍️</h4>
              <p style="margin-bottom: 0; color: #334155 !important;">
                  若超音波顯示筋膜有<strong>實質撕裂傷</strong>或震波效果不彰，建議使用 <strong style="color: #0891b2 !important;">PRP (高濃度血小板血漿)</strong>。醫師在超音波導引下，將生長因子精準注入筋膜受損處，像「灌漿」一樣修補組織，加速癒合。
                  <br><span style="font-size: 0.9rem; color: #78350f;">*注意：足底筋膜炎應盡量避免施打類固醇（俗稱美國仙丹），雖止痛快，但多次施打可能導致足底脂肪墊萎縮，反而造成長期腳痛。</span>
              </p>
          </div>
      
          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
      
          <h3 style="color: #f8fafc !important;">🧘‍♂️ 醫師教你做：居家復健四招</h3>
          <p style="color: #e2e8f0 !important;">復健的重點在於「放鬆筋膜」與「增加小腿柔軟度」。請每天早晚勤做，建議先熱敷把肌肉熱開，伸展效果更好：</p>
      
          <div style="margin-bottom: 2rem;">
              <h4 style="color: #22d3ee !important;">1. 足底筋膜伸展 (Plantar Fascia Stretch)</h4>
              <p style="color: #e2e8f0 !important;">坐姿，將患腳跨在好腳膝蓋上（翹二郎腿）。用手抓住患腳的五根腳趾，<strong>用力將腳趾往腳背方向扳</strong>，直到感覺腳底緊緊的。另一手可按摩緊繃的足底筋膜。停留 15 秒，重複 10 次。<strong>建議在下床前先做此動作，可大幅減少第一步的劇痛。</strong></p>
          </div>
      
          <div style="margin-bottom: 2rem;">
              <h4 style="color: #22d3ee !important;">2. 腳底滾球按摩 (Ball Rolling)</h4>
              <p style="color: #e2e8f0 !important;">找一顆網球或高爾夫球（較深層），踩在腳底下。利用身體重量，讓球在足弓與腳跟前方來回滾動按摩，尋找痠痛點加強。每次 3-5 分鐘。切記不要直接用力踩在最痛的骨頭點上，以免發炎加劇。</p>
          </div>
      
          <div style="margin-bottom: 2rem;">
              <h4 style="color: #22d3ee !important;">3. 小腿後側伸展 (Calf Stretch)</h4>
              <p style="color: #e2e8f0 !important;">面對牆壁成弓箭步（前腳彎、後腳直）。雙手扶牆，<strong>後腳跟務必踩死地板</strong>，身體重心往前移，直到感覺後腳小腿肚緊繃。停留 30 秒，重複 5 次。放鬆小腿肌肉能有效降低足底筋膜的張力。</p>
          </div>
          
      
          <div style="margin-bottom: 2rem;">
              <h4 style="color: #22d3ee !important;">4. 腳趾抓毛巾 (Towel Curl)</h4>
              <p style="color: #e2e8f0 !important;">將一條毛巾鋪在地上，腳跟著地，利用腳趾頭的力量將毛巾抓皺、捲回來。這能訓練足底的小肌肉群，強化足弓支撐力。</p>
          </div>
       <p><img src="/images/diseases/ankle/plantar/b.jpg" alt="足底筋膜炎居家伸展運動"></p>
          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
      
          <div style="background-color: #ecfdf5; padding: 2rem; border-radius: 1rem; margin-top: 3rem; text-align: center;">
              <h3 style="color: #047857 !important; margin-top: 0;">👨‍⚕️ 走更長遠的路，從保養足底開始！</h3>
              <p style="color: #334155 !important; margin-bottom: 1.5rem;">足底筋膜炎是身體在抗議「過勞」的訊號。只要選對鞋子、勤做伸展，並在慢性期介入震波或 PRP 治療，就能徹底擺脫寸步難行的痛苦。宸新復健科，陪您重新走出健康人生！</p>
              <p style="font-weight: bold; color: #059669 !important;">下床第一步就痛？立即預約足部評估！</p>
          </div>
        `,
        symptoms: [
          '早晨下床第一步腳底劇痛',
          '久坐起身後腳跟疼痛',
          '腳跟骨前方內側按壓疼痛',
          '腳掌向上翹時腳底緊繃'
        ],
        treatments: [
          '客製化矯正鞋墊',
          '足底筋膜伸展運動',
          '<a href="/treatments/shockwave" class="text-cyan-400 hover:underline">體外震波治療(ESWT)</a>🔍️', 
          '<a href="/treatments/prp" class="text-cyan-400 hover:underline">PRP 增生療法</a>🔍️'
        ],
        seoKeywords: [
          '足底筋膜炎',
          '腳底痛',
          '腳跟痛',
          '足底筋膜炎治療',
          '震波治療',
          '客製化鞋墊',
          'PRP注射'
        ],
        seoDescription: '足底筋膜炎造成下床第一步腳底劇痛。宸新復健科提供震波治療、PRP注射與客製化鞋墊，搭配居家伸展教學，有效解決長期腳底疼痛。',
        images: [
          { 
           src: '/images/diseases/ankle/plantar/a.jpg', alt: '足底筋膜炎'
          }
        ]
      },

      {
          id: 'achilles-tendinitis',
          slug: 'achilles-tendinitis',
          title: '阿基里斯肌腱炎 (跟腱炎)',
          description: '早起下床腳跟上方劇痛？跑步蹬地無力？這不只是單純拉傷！深入解析阿基里斯腱炎成因、止點性與非止點性的差異，以及震波、PRP 與離心訓練的完整修復指南。',
          contentHtml: `
            <p style="color: #e2e8f0 !important;">您是否有這樣的經驗：早晨起床腳一落地，腳跟上方（腳脖子後側）就傳來一陣<strong>尖銳的撕裂痛</strong>？或是跑步跑到一半，感覺腳跟後方緊繃痠痛，甚至摸到一塊硬硬的凸起物？</p>
                    <br>
            <p style="color: #e2e8f0 !important;">這就是<strong>阿基里斯肌腱炎（跟腱炎）</strong>，是跑者與運動愛好者的惡夢，也是希臘神話中戰神阿基里斯唯一的弱點。阿基里斯腱是人體最粗壯、最強大的肌腱，但也因為血液循環差，一旦受傷非常難好。宸新復健科透過高解析超音波精準分型，搭配震波與再生療法，協助您修復這條關鍵的生命線。</p>
        

        
            <div style="background-color: #fffbeb; border: 2px solid #fbbf24; border-radius: 1rem; padding: 1.5rem; margin: 2rem 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                <h2 style="color: #b45309 !important; margin-top: 0; font-weight: bold; border-bottom: 2px solid #fcd34d; padding-bottom: 0.5rem; display: flex; align-items: center;">
                    📢 阿基里斯腱：承受體重 8 倍力量的強韌鋼索
                </h2>
                
                <p style="font-size: 1.1rem; color: #78350f !important;">阿基里斯腱連接著小腿肌群（腓腸肌與比目魚肌）與腳跟骨。當我們走路、跑步、跳躍時，這條肌腱負責將力量傳遞到腳跟，讓我們能做出「墊腳尖」與「推進」的動作。</p>
                
                <ul style="list-style: none; padding: 0; margin-top: 1rem; color: #92400e !important;">
                    <li style="margin-bottom: 1rem; display: flex; align-items: start;">
                        <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">1</span>
                        <div style="color: #92400e !important;">
                            <strong style="color: #dc2626 !important;">缺血區 (Watershed Area)：</strong> 
                            阿基里斯腱在接點上方約 2-6 公分處，血液供應最差。這裡是養分輸送的沙漠，因此也是最容易發生斷裂與發炎的「重災區」。
                        </div>
                    </li>
                    <li style="margin-bottom: 1rem; display: flex; align-items: start;">
                        <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">2</span>
                        <div style="color: #92400e !important;">
                            <strong style="color: #0891b2 !important;">過度使用的代價：</strong> 
                            跑步時，阿基里斯腱需承受體重 8 倍的張力。如果突然增加跑量、鞋子避震太差，或是小腿肌肉太緊，肌腱就會產生微小撕裂傷，有時候會合併鈣化。
                        </div>
                    </li>
                    <li style="margin-bottom: 0; display: flex; align-items: start;">
                        <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">3</span>
                        <div style="color: #92400e !important;">
                            <strong style="color: #0891b2 !important;">不是發炎，是退化：</strong> 
                            長期的阿基里斯腱炎，病理上其實是<strong>「肌腱變性 (Tendinosis)」</strong>。膠原蛋白排列變得混亂、鬆散，甚至增生出不健康的神經血管，導致慢性疼痛。
                        </div>
                    </li>
                </ul>
            </div>
            
                   <p><img src="/images/diseases/ankle/achill/a.jpg" alt="阿基里斯肌腱炎 (跟腱炎)"></p>
        
            <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
        
            <h3 style="color: #f8fafc !important;">⚠️ 分型很重要：你是哪一種痛？</h3>
            <p style="color: #e2e8f0 !important;">治療方式取決於受傷的位置。阿基里斯腱炎主要分為兩種類型：</p>
        
            <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
                <h4 style="margin-top: 0; color: #0e7490 !important;">1. 非止點性肌腱炎 (Non-insertional)</h4>
                <p style="margin-bottom: 0; color: #334155 !important;">
                    <strong>位置：</strong> 腳跟上方約 2-6 公分處。<br>
                    <strong>特徵：</strong> 常發生在年輕、活動量大的跑者。肌腱會明顯<strong>腫脹變粗</strong>，捏起來像有一顆橄欖核在裡面。這類型對震波與離心運動反應很好。
                </p>
            </div>
        
            <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
                <h4 style="margin-top: 0; color: #0e7490 !important;">2. 止點性肌腱炎 (Insertional)</h4>
                <p style="margin-bottom: 0; color: #334155 !important;">
                    <strong>位置：</strong> 肌腱連到腳跟骨頭的接點處。<br>
                    <strong>特徵：</strong> 常伴隨<strong>骨刺</strong>或<strong>哈格蘭畸形 (Haglund’s deformity)</strong>。因為是骨頭與肌腱的摩擦，治療較為棘手，震波與離心運動反應不錯，但進行離心運動時需特別小心角度。
                </p>
            </div>
        
            <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
        
            <h3 style="color: #f8fafc !important;">🔍 超音波下的真相：別等到斷掉才後悔</h3>
            <p style="color: #e2e8f0 !important;">很多人以為只是緊繃，結果用力一蹬就斷了。宸新復健科使用高解析超音波檢查：</p>
            <ul style="color: #e2e8f0 !important;">
                <li><strong>肌腱厚度：</strong> 是否腫脹變性。</li>
                <li><strong>撕裂傷：</strong> 是否有黑色的低回音區域（部分撕裂）。</li>
                <li><strong>鈣化與骨刺：</strong> 止點處是否有尖銳骨刺持續摩擦肌腱。</li>
                <li><strong>新生血管：</strong> 使用都卜勒血流偵測，若看到紅藍色的血流訊號，代表正處於慢性發炎期。</li>
            </ul>
        
            <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
        
            <h3 style="color: #f8fafc !important;">🛡️ 治療策略：階梯式修復方案</h3>
            <p style="color: #e2e8f0 !important;">阿基里斯腱的血液循環差，單靠休息很難痊癒。我們採取主動修復策略：</p>
        
            <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
                <h4 style="margin-top: 0; color: #0e7490 !important;">1. 急性期：減壓與墊高，小腿肌肉放鬆伸展</h4>
                <p style="margin-bottom: 0; color: #334155 !important;">
                    建議在鞋內放入<strong>「足跟墊 (Heel Lift)」</strong>，墊高腳跟約 1-2 公分。這能縮短肌腱的行程，大幅減少行走時的拉扯張力，並搭配徒手緊繃的小腿肚，讓肌腱獲得喘息。
                </p>
            </div>
        
            <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
                <h4 style="margin-top: 0; color: #0e7490 !important;">2. 慢性期首選：<a href="/treatments/shockwave" class="text-cyan-400 hover:underline">體外震波治療(ESWT)</a>🔍️</h4>
                <p style="margin-bottom: 0; color: #334155 !important;">
                    對於腫脹變粗的「非止點性」肌腱炎，震波效果極佳。高能量聲波能<strong>打散纖維化的疤痕組織</strong>，並刺激缺血區產生新的血管，帶入修復所需的養分。通常建議每週 1 次，約 4-6 次療程。
                </p>
            </div>
            
            
            <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
                <h4 style="margin-top: 0; color: #0e7490 !important;">3. 撕裂修復：<a href="/treatments/prp" class="text-cyan-400 hover:underline">PRP 增生療法</a>🔍️</h4>
                <p style="margin-bottom: 0; color: #334155 !important;">
                    若超音波發現肌腱內部已有<strong>實質撕裂</strong>，或是職業運動員需要快速回到賽場，<strong style="color: #0891b2 !important;">PRP (高濃度血小板)</strong> 是最強的修復劑。精準注入撕裂處，提供大量的生長因子，像灌漿一樣強化脆弱的肌腱結構。
                    <br><span style="font-size: 0.9rem; color: #78350f;">*警告：阿基里斯腱絕對嚴禁施打類固醇，這會大幅增加肌腱斷裂的風險！</span>
                </p>
            </div>
        
            <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
        
            <h3 style="color: #f8fafc !important;">🧘‍♂️ 醫師教你做：黃金標準「離心收縮運動」</h3>
            <p style="color: #e2e8f0 !important;">單純的拉筋是不夠的。研究證實，<strong>離心收縮 (Eccentric Loading)</strong> 是唯一能讓排列混亂的肌腱纖維重新變整齊的方法。請在疼痛緩解後開始執行：</p>
        
            <div style="margin-bottom: 2rem;">
                <h4 style="color: #22d3ee !important;">1. 離心足跟下降 (Heel Drop) - 最重要！</h4>
                <p style="color: #e2e8f0 !important;">找一個樓梯或階梯邊緣，雙腳前腳掌踩在邊緣，腳跟懸空。</p>
                <ol style="color: #e2e8f0 !important; margin-left: 1.5rem;">
                    <li><strong>向心階段（不練）：</strong> 用「好腳」幫忙用力，把身體墊高到最高點。</li>
                    <li><strong>轉移重心：</strong> 將重心移到「患側腳」。</li>
                    <li><strong>離心階段（訓練）：</strong> 患側腳用力撐住，<strong>慢慢地（數 5 秒）</strong>將腳跟往下沉，直到比階梯平面還低。</li>
                    <li>重複 15 下為一組，每天做 3 組。膝蓋伸直做一次（練腓腸肌），膝蓋微彎做一次（練比目魚肌）。</li>
                </ol>
                <p style="color: #94a3b8 !important; font-size: 0.9rem;">*注意：止點性肌腱炎（痛點在骨頭接點）做此動作若太痛，請在平地做，不要讓腳跟低於平面。</p>
            </div>
            
             <p><img src="/images/diseases/ankle/achill/b.jpg" alt="阿基里斯腱居家階梯離心收縮復健運動示範"></p>
            
            <div style="margin-bottom: 2rem;">
                <h4 style="color: #22d3ee !important;">2. 小腿伸展及滾筒放鬆</h4>
                <p style="color: #e2e8f0 !important;">阿基里斯腱太緊往往是因為上面的小腿肌肉太緊。使用拉弓步的方式伸展小腿肚(腓腸肌)或滾筒按摩球，放鬆小腿肚，這能有效降低肌腱承受的張力。</p>
            </div>
                     <p><img src="/images/diseases/ankle/achill/c.jpg" alt="阿基里斯腱居家伸展放鬆運動示範"></p>
            <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
        
            <div style="background-color: #ecfdf5; padding: 2rem; border-radius: 1rem; margin-top: 3rem; text-align: center;">
                <h3 style="color: #047857 !important; margin-top: 0;">👨‍⚕️ 跑者的生命線，值得最好照顧！</h3>
                <p style="color: #334155 !important; margin-bottom: 1.5rem;">阿基里斯肌腱炎若置之不理，最終可能導致肌腱斷裂，需要手術縫合且復健期長達一年。只要及早發現，透過震波、增生注射與離心訓練，絕大多數患者都能重回跑道。宸新復健科，守護您邁出的每一步！</p>
                <p style="font-weight: bold; color: #059669 !important;">腳跟上方緊繃疼痛？立即預約超音波檢查！</p>
            </div>
          `,
          symptoms: [
            '早晨下床第一步腳跟上方劇痛',
            '腳跟上方肌腱腫脹、變粗且有壓痛',
            '跑步蹬地或墊腳尖時無力疼痛',
            '運動後疼痛加劇，隔天僵硬'
          ],
          treatments: [
            '止痛藥及復健',
            '伸展及離心收縮運動',
            '<a href="/treatments/shockwave" class="text-cyan-400 hover:underline">體外震波治療(ESWT)</a>🔍️', 
            '<a href="/treatments/prp" class="text-cyan-400 hover:underline">PRP 增生療法</a>🔍️'
          ],
          seoKeywords: [
            '阿基里斯肌腱炎',
            '跟腱炎',
            '腳跟痛',
            '腳脖子痛',
            '震波治療',
            'PRP注射',
            '離心運動'
          ],
          seoDescription: '阿基里斯肌腱炎造成腳跟上方劇痛與僵硬。宸新復健科提供震波治療、PRP注射與離心收縮運動教學，有效修復肌腱，預防斷裂風險。',
          images: [
            { 
           src: '/images/diseases/ankle/achill/a.jpg', alt: '阿基里斯肌腱炎'
            }
          ]

      }
    ]
  }
]

// ==========================================
// Helper Functions (確保頁面能抓到資料)
// ==========================================

export function getCategoryBySlug(slug: string): DiseaseCategory | undefined {
  return diseaseCategories.find(c => c.slug === slug)
}

export function getDiseaseBySlug(categorySlug: string, diseaseId: string): DiseaseItem | undefined {
  const category = getCategoryBySlug(categorySlug)
  if (!category) return undefined
  // 因為路由使用的是 id (或 slug)，這裡使用 id 來查找
  return category.diseases.find(d => d.id === diseaseId || d.slug === diseaseId)
}

export function getAllDiseases(): DiseaseItem[] {
  return diseaseCategories.flatMap(category => category.diseases)
}

export function generateAllDiseaseParams(): Array<{ category: string; slug: string }> {
  const params: Array<{ category: string; slug: string }> = []
  
  diseaseCategories.forEach((category) => {
    category.diseases.forEach((disease) => {
      params.push({
        category: category.slug,
        slug: disease.slug, // 使用 slug 作為網址參數
      })
    })
  })
  
  return params
}

export function generateAllCategoryParams(): Array<{ category: string }> {
  return diseaseCategories.map((category) => ({
    category: category.slug,
  }))
}