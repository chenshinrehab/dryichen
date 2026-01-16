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
        description: '椎間盤擠出壓迫神經，造成腰痛或下肢麻痛。',
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
        treatments: [ '服用止痛藥物', '物理治療 (牽引)', '<a href="/treatments/manual" class="text-cyan-400 hover:underline">徒手運動治療</a>','<a href="/treatments/prp" class="text-cyan-400 hover:underline">PRP 增生療法</a>'],
        seoKeywords: ['腰椎椎間盤突出', '坐骨神經痛', '下背痛', '椎間盤突出免開刀', '腳麻'],
        seoDescription: '腰椎椎間盤突出造成嚴重腰痛與腿麻。宸新復健科提供免開刀的PRP注射與物理治療方案，有效改善坐骨神經痛。',
        images: [
           { src: '/images/diseases/spine-hip/HIVD/e.jpg', alt: '脊椎椎間盤突出構造圖' }
        ]
      },
      {
        id: 'cervical-disc-degeneration',
        slug: 'cervical-disc-degeneration',
        title: '頸椎椎間盤退化',
        description: '低頭用電腦導致的頸椎問題，椎間盤壓迫神經，造成肩頸痛或上肢麻痛。',
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
        treatments: ['姿勢矯正 (收下巴)', '頸椎牽引', '<a href="/treatments/manual" class="text-cyan-400 hover:underline">徒手運動治療</a>', '<a href="/treatments/prp" class="text-cyan-400 hover:underline">PRP 增生療法</a>'],
        seoKeywords: ['頸椎椎間盤退化', '頸部疼痛', '手麻', '骨刺', '烏龜頸'],
        seoDescription: '長期低頭導致頸椎椎間盤退化與骨刺，造成手麻與頸痛。了解治療與矯正方式。',
        images: [
           { src: '/images/diseases/spine-hip/CHIVD/a.jpg', alt: '頸部疼痛示意圖' }
        ]
      },
      {
        id: 'piriformis-syndrome',
        slug: 'piriformis-syndrome',
        title: '梨狀肌症候群',
        description: '梨狀肌緊繃壓迫坐骨神經，造成深層臀部疼痛或腳麻。',
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
        treatments: ['梨狀肌伸展', '物理治療', '神經減壓注射', '<a href="/treatments/manual" class="text-cyan-400 hover:underline">徒手運動治療</a>'],
        seoKeywords: ['梨狀肌症候群', '臀部疼痛', '坐骨神經', '深層臀痛'],
        seoDescription: '梨狀肌症候群造成深層臀部疼痛，常誤診為椎間盤突出。了解症狀與精準治療方式。',
        images: [
           { src: '/images/diseases/spine-hip/piri/a.jpg', alt: '梨狀肌疼痛示意圖' }
        ]
      },
      
  
      {
        id: 'hip-osteoarthritis',
        slug: 'hip-osteoarthritis',
        title: '退化性髖關節炎',
        description: '軟骨磨損導致鼠蹊部疼痛，影響行走與穿襪等日常動作。',
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
        treatments: ['復健藥物治療', '<a href="/treatments/manual" class="text-cyan-400 hover:underline">徒手運動治療</a>', '<a href="/treatments/prp" class="text-cyan-400 hover:underline">PRP 增生療法</a>', '人工關節置換'],
        seoKeywords: ['退化性髖關節炎', '髖關節疼痛', 'PRP', '鼠蹊部痛'],
        seoDescription: '退化性髖關節炎造成鼠蹊部疼痛，影響行走。了解症狀、治療方式與預防方法。',
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
    seoDescription: '肩膀痛手舉不起來？新竹五十肩與旋轉肌撕裂治療推薦。免開刀肩關節擴張術與PRP修復，解決夜間痛醒與活動受限問題。',
    diseases: [
      {
        id: 'rotator-cuff-tear',
        slug: 'rotator-cuff-tear',
        title: '旋轉肌撕裂',
        description: '肩膀旋轉肌群受傷或撕裂，造成肩膀疼痛與活動受限。',
        contentHtml: `
<p style="color: #e2e8f0 !important;">您是否有這樣的困擾：想梳頭髮手卻舉不高？穿衣服時手無法伸到背後扣釦子？或是晚上睡覺壓到肩膀時，會被一陣尖銳的疼痛痛醒？小心，這可能不是單純的五十肩，而是更常見的肩膀隱形殺手——<strong>旋轉肌袖撕裂 (Rotator Cuff Tear)</strong>。</p>

<p style="color: #e2e8f0 !important;">肩膀是人體活動度最大的關節，但高靈活度也伴隨著高受傷風險。宸新復健科擁有高解析度肌肉骨骼超音波，能快速精準診斷肌腱受損程度，並提供從徒手物理治療到 PRP 再生注射的全方位免動刀修復方案。</p>

<br>

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

<p><img src="/path/to/your/image_anatomy_rotator_cuff.jpg" alt="肩關節旋轉肌袖解剖構造圖，顯示棘上肌肌腱位置"></p>

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

<p><img src="/path/to/your/image_shoulder_pain_location.jpg" alt="旋轉肌袖撕裂典型疼痛位置示意圖，位於肩膀外側"></p>

<h4 style="color: #f1f5f9 !important;">三大典型表現：</h4>
<ol style="color: #e2e8f0 !important;">
    <li><strong>夜間疼痛 (Night Pain)：</strong> 這是最惱人的症狀。白天可能還好，但晚上睡覺側躺壓到患側時，會痛到無法入睡。</li>
    <li><strong>特定角度無力 (Weakness)：</strong> 手臂在側舉到 60~120 度之間（疼痛弧）會特別痛或無力，甚至舉不起來。但如果有人幫你把手扶上去超過這個角度，反而就不痛了。</li>
    <li><strong>活動受限：</strong> 手臂很難伸到背後去扣內衣或抓癢。</li>
</ol>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h3 style="color: #f8fafc !important;">🩺 診斷利器：肌肉骨骼超音波</h3>
<p style="color: #e2e8f0 !important;">懷疑肌腱撕裂時，X 光只能看骨頭有沒有骨刺，看不到肌腱。核磁共振 (MRI) 雖然清楚但排程久且昂貴。</p>
<p style="color: #e2e8f0 !important;">在宸新復健科，我們使用<strong>高解析度肌肉骨骼超音波</strong>。它就像醫師的聽診器，能即時、動態地觀察肌腱在活動時的狀況。是部分撕裂、全層撕裂、還是鈣化發炎？超音波下一目了然，是診斷旋轉肌問題的黃金標準之一。</p>

<p><img src="/path/to/your/image_ultrasound_shoulder_exam.jpg" alt="醫師使用高解析超音波進行肩關節旋轉肌袖檢查"></p>

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
    <h4 style="margin-top: 0; color: #0e7490 !important;">2. PRP 增生療法 (加速癒合)</h4>
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
        symptoms: ['舉手疼痛無力', '夜間疼痛 (痛醒)', '特定角度疼痛 (Painful Arc)', '肩膀卡卡聲'],
        treatments: ['<a href="/treatments/prp" class="text-cyan-400 hover:underline">PRP 增生療法</a>', '聚焦式震波', '肌力訓練', '手術修補'],
        seoKeywords: ['旋轉肌撕裂', '肩膀疼痛', 'PRP', '震波'],
        seoDescription: '旋轉肌撕裂造成肩膀疼痛與活動受限。了解症狀、治療方式與復健方法。',
        images: [
           { src: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=800', alt: '肩膀肌肉構造' }
        ]
      },
      {
        id: 'frozen-shoulder',
        slug: 'frozen-shoulder',
        title: '五十肩 (冰凍肩)',
        description: '肩膀關節囊發炎導致關節僵硬，活動範圍受限。',
        contentHtml: `
          <p>五十肩的正式名稱為「沾黏性肩關節囊炎」。關節囊因為發炎而變厚、纖維化，導致肩膀像是結冰一樣動彈不得。</p>
          <p>病程分為三期：<strong>發炎期</strong>（不動也痛）、<strong>冰凍期</strong>（角度嚴重受限，無法梳頭、扣內衣）、<strong>解凍期</strong>。若不及早介入復健與擴張術，病程可能長達 1-2 年。</p>
        `,
        symptoms: ['肩膀僵硬動彈不得', '無法扣內衣/梳頭/抓背', '夜間睡覺痛醒', '關節沾黏'],
        treatments: ['肩關節擴張術', '徒手治療 (鬆動術)', '震波治療', '居家伸展運動'],
        seoKeywords: ['五十肩', '冰凍肩', '肩膀僵硬', '肩關節擴張術'],
        seoDescription: '五十肩（冰凍肩）造成肩膀關節僵硬，活動範圍受限。了解症狀與治療方式。',
        images: [
           { src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800', alt: '物理治療師檢查肩膀' }
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
        title: '網球肘',
        description: '手肘外側肌腱發炎，造成手肘外側疼痛，擰毛巾無力。',
        contentHtml: `
          <p>網球肘（肱骨外上髁炎）並非打網球者的專利，更是家庭主婦、廚師、電腦族的常見病。主因是手腕伸肌群過度使用，導致肌腱附著點發炎。</p>
          <p>患者常在<strong>擰毛巾、提重物、轉門把</strong>時感到手肘外側劇痛，甚至有無力感。震波治療對此症狀有極佳療效。</p>
        `,
        symptoms: ['手肘外側壓痛', '擰毛巾/提重物無力', '手腕伸直抗阻力疼痛', '握力下降'],
        treatments: ['<a href="/treatments/shockwave" class="text-cyan-400 hover:underline">聚焦式震波治療</a>', '護具使用', 'PRP 注射', '肌腱伸展運動'],
        seoKeywords: ['網球肘', '手肘疼痛', 'PRP', '震波治療'],
        seoDescription: '網球肘是手肘外側肌腱發炎，造成手肘外側疼痛。了解症狀與治療方式。',
        images: [
           { src: 'https://images.unsplash.com/photo-1617957718614-8c23f060c2d0?auto=format&fit=crop&q=80&w=800', alt: '手肘疼痛按壓' }
        ]
      },
      {
        id: 'golfer-elbow',
        slug: 'golfer-elbow',
        title: '高爾夫球肘',
        description: '手肘內側肌腱發炎，造成手肘內側疼痛。',
        contentHtml: `
          <p>高爾夫球肘（肱骨內上髁炎）發生在手肘內側，主要是手腕屈肌群過度使用造成。常見於高爾夫球友、搬運工或長時間抱小孩的家長。</p>
          <p>症狀為手肘內側骨頭凸起處有壓痛點，彎曲手腕或握拳用力時疼痛加劇。治療方式與網球肘類似。</p>
        `,
        symptoms: ['手肘內側疼痛', '握力下降', '手腕彎曲用力時疼痛'],
        treatments: ['休息', 'PRP 注射', '震波治療', '貼紮保護'],
        seoKeywords: ['高爾夫球肘', '手肘內側疼痛', '媽媽手肘'],
        seoDescription: '高爾夫球肘是手肘內側肌腱發炎，造成手肘內側疼痛。了解症狀與治療方式。',
        images: [
           { src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800', alt: '健身房手臂訓練' }
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
        id: 'trigger-finger',
        slug: 'trigger-finger',
        title: '板機指',
        description: '手指屈肌腱發炎，造成手指彎曲後無法伸直，卡住像扣板機。',
        contentHtml: `
          <p>板機指是因為手指屈肌腱與滑車（腱鞘）之間發炎腫脹，導致肌腱滑動不順，甚至卡住。</p>
          <p>患者早晨起床時手指最僵硬，彎曲後會「卡」住伸不直，需要用另一隻手幫忙扳開，並伴隨明顯的彈響聲與疼痛。初期可注射類固醇或震波治療，嚴重時需微創手術鬆解滑車。</p>
        `,
        symptoms: ['手指彎曲後無法伸直', '掌指關節處有硬塊壓痛', '手指活動有彈響聲 (Click)', '早晨僵硬明顯'],
        treatments: ['熱敷、按摩伸展', '局部注射 (類固醇/葡萄糖)', '震波治療', '微創針挑手術'],
        seoKeywords: ['板機指', '手指疼痛', '手指卡住', '微創手術'],
        seoDescription: '板機指造成手指彎曲後無法伸直。了解症狀與治療方式。',
        images: [
           { src: 'https://images.unsplash.com/photo-1627606360432-841f3d894b98?auto=format&fit=crop&q=80&w=800', alt: '手部按摩' }
        ]
      },
      {
        id: 'carpal-tunnel',
        slug: 'carpal-tunnel',
        title: '腕隧道症候群',
        description: '正中神經在手腕處受壓迫，造成大拇指、食指與中指麻木刺痛。',
        contentHtml: `
          <p>腕隧道症候群是正中神經在經過手腕的「腕隧道」時受到壓迫。常見於電腦族、廚師或懷孕婦女。</p>
          <p>典型症狀是大拇指、食指、中指及無名指一半出現<strong>麻木、刺痛或灼熱感</strong>，尤其在夜間或騎機車時加劇。甩手後症狀會暫時緩解。若不治療，可能導致大魚際肌（手掌肌肉）萎縮無力。</p>
        `,
        symptoms: ['前三指麻木刺痛', '夜間麻醒', '甩手後改善', '大魚際肌萎縮無力'],
        treatments: ['夜間配戴副木固定', '神經解離注射 (Hydrodissection)', '維生素B12', '手術減壓'],
        seoKeywords: ['腕隧道症候群', '手麻', '手腕疼痛', '神經解離'],
        seoDescription: '腕隧道症候群造成大拇指、食指與中指麻木刺痛。了解症狀與治療方式。',
        images: [
           { src: 'https://images.unsplash.com/photo-1605202860882-77764d262d14?auto=format&fit=crop&q=80&w=800', alt: '電腦族手腕疼痛' }
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
        description: '關節軟骨磨損，導致上下樓梯無力、蹲下站不起來。',
        contentHtml: `
          <p>退化性膝關節炎是隨著年齡增長、軟骨磨損導致的疾病，但也可能因肥胖或過度使用而提早發生。</p>
          <p>患者初期會覺得膝蓋卡卡、上下樓梯無力痠痛。嚴重時關節會腫脹積水（發炎），甚至變形（O型腿），連平路都走不遠。<strong>減重</strong>與<strong>股四頭肌訓練</strong>是治療的基礎，搭配玻尿酸或PRP注射可延緩退化。</p>
        `,
        symptoms: ['上下樓梯痛', '膝蓋僵硬、活動有喀喀聲', '嚴重時關節積水腫脹', 'O型腿變形'],
        treatments: ['減重是首要任務', '股四頭肌肌力訓練', '玻尿酸潤滑', '<a href="/treatments/prp" class="text-cyan-400 hover:underline">PRP 修復治療</a>'],
        seoKeywords: ['退化性膝關節炎', '膝蓋疼痛', 'PRP', '玻尿酸'],
        seoDescription: '退化性膝關節炎造成上下樓梯無力、蹲下站不起來。了解症狀、治療方式與預防方法。',
        images: [
           { src: 'https://images.unsplash.com/photo-1598136490941-30d885318abd?auto=format&fit=crop&q=80&w=800', alt: '膝蓋疼痛老年人' }
        ]
      },
      {
        id: 'meniscus-tear',
        slug: 'meniscus-tear',
        title: '半月板破裂',
        description: '膝蓋內的緩衝墊破裂，導致膝蓋腫脹、卡住 (Locking)。',
        contentHtml: `
          <p>半月板是位於膝關節內的兩塊軟骨墊片，負責避震與緩衝。年輕人常因運動旋轉膝蓋導致撕裂，老年人則多為退化性磨損。</p>
          <p>受傷後膝蓋常會腫脹，且因為破損的軟骨卡在關節中，會出現<strong>「膝蓋卡住」(Locking)</strong> 無法完全伸直的現象，並伴隨關節縫隙的疼痛。</p>
        `,
        symptoms: ['膝蓋關節縫隙壓痛', '膝蓋卡住 (Locking) 無法伸直', '活動時有彈響聲', '膝蓋腫脹'],
        treatments: ['急性期冰敷休息', 'PRP 注射修復', '物理治療', '嚴重卡住需關節鏡手術'],
        seoKeywords: ['半月板破裂', '膝蓋卡住', '關節鏡', '運動傷害'],
        seoDescription: '半月板破裂造成膝蓋腫脹、疼痛，甚至會有卡住無法伸直的現象。了解症狀與治療方式。',
        images: [
           { src: 'https://images.unsplash.com/photo-1552674605-469523f54050?auto=format&fit=crop&q=80&w=800', alt: '運動員膝蓋受傷' }
        ]
      },
      {
        id: 'acl-tear',
        slug: 'acl-tear',
        title: '前十字韌帶斷裂',
        description: '常見於急停轉身的運動傷害，受傷當下常聽到「啪」一聲。',
        contentHtml: `
          <p>前十字韌帶 (ACL) 是維持膝蓋穩定最重要的韌帶。常見於籃球、足球等需要急停、轉身的運動。</p>
          <p>斷裂當下常會聽到<strong>「啪」</strong>的一聲，隨後膝蓋迅速腫脹積血。消腫後，患者會覺得膝蓋<strong>鬆鬆的、不穩</strong>，走路有軟腳的感覺 (Giving way)。若需重回高強度運動，通常建議手術重建。</p>
        `,
        symptoms: ['受傷時聽到斷裂聲 (Pop)', '膝蓋迅速腫脹積血', '膝蓋鬆動不穩 (Giving way)', '無法劇烈運動'],
        treatments: ['消腫止痛 (RICE)', '肌力訓練 (強化腿後肌)', '護具保護', '韌帶重建手術'],
        seoKeywords: ['前十字韌帶斷裂', 'ACL', '運動傷害', '膝蓋不穩'],
        seoDescription: '前十字韌帶斷裂常見於急停轉身的運動傷害，造成膝蓋鬆動不穩。了解症狀與治療方式。',
        images: [
           { src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800', alt: '健身房腿部訓練' }
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
        id: 'plantar-fasciitis',
        slug: 'plantar-fasciitis',
        title: '足底筋膜炎',
        description: '典型症狀是「早上起床踩地第一步最痛」。',
        contentHtml: `
          <p>足底筋膜是一層網狀的結締組織，負責支撐足弓。當因久站、體重過重或鞋子不合適導致過度拉扯，就會發炎。</p>
          <p>最典型的症狀是<strong>「下床第一步腳跟劇痛」</strong>，走一走會稍微緩解，但久站久走後疼痛又會回來。震波治療對於慢性足底筋膜炎效果非常顯著，能刺激組織再生。</p>
        `,
        symptoms: ['下床第一步腳跟劇痛', '行走一段時間後緩解', '久站久走後疼痛加劇', '足跟壓痛'],
        treatments: ['足底筋膜伸展', '小腿拉筋', '穿著足弓支撐鞋墊', '<a href="/treatments/shockwave" class="text-cyan-400 hover:underline">聚焦式震波治療</a>'],
        seoKeywords: ['足底筋膜炎', '腳跟痛', '震波', '足弓鞋墊'],
        seoDescription: '足底筋膜炎典型症狀是早上起床踩地第一步最痛。了解症狀與治療方式。',
        images: [
           { src: 'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?auto=format&fit=crop&q=80&w=800', alt: '足底按摩示意圖' }
        ]
      },
      {
        id: 'ankle-sprain',
        slug: 'ankle-sprain',
        title: '踝關節扭傷',
        description: '俗稱「翻船」，造成外踝腫脹瘀血。',
        contentHtml: `
         <p>走路踩空、下樓梯不留神，或是打球落地時沒踩穩，<strong>「腳踝扭傷」（俗稱翻腳刀）</strong>絕對是復健科門診最常見的運動傷害第一名。許多患者以為不痛就是好了，卻因為缺乏後續復健，演變成動不動就扭到的「玻璃腳」。</p>
        <br>
         <h3>🔍 為什麼會翻腳刀？傷到了哪裡？</h3>
<p>人體的腳踝結構外側韌帶較弱，因此 80% 以上的扭傷都屬於<strong>腳掌向內翻轉 (Inversion)</strong>。這股力量最強烈衝擊的，通常是位於腳踝外側的<strong>「前距腓韌帶」(ATFL)</strong>。</p>
<br>
<p>輕微扭傷可能只是韌帶拉扯（第一級），但嚴重時可能造成韌帶部分撕裂（第二級）甚至全斷（第三級），這時腳踝就會腫得像「麵龜」一樣。</p>
<img src="/images/diseases/ankle/sprain/b.jpg" alt="前距腓韌帶韌帶撕裂傷" />
<h3>🧊 急性期處理：先消腫止痛</h3>
<p>受傷後的 48~72 小時內是急性發炎期，目標是減少出血與腫脹。請遵循 <strong>RICE 原則</strong>（或是目前醫界推廣的 PEACE & LOVE 原則）：</p>
<ul>
  <li><strong>Rest（休息）：</strong> 減少走動，必要時使用拐杖，避免二度傷害。</li>
  <li><strong>Ice（冰敷）：</strong> 幫助血管收縮消腫。每次 10-15 分鐘，小心不要凍傷。</li>
  <li><strong>Compression（壓迫）：</strong> 使用彈性繃帶纏繞，幫助組織液回流，減少腫脹空間。</li>
  <li><strong>Elevation（抬高）：</strong> 睡覺或坐著時，將患肢抬高於心臟位置。</li>
</ul>
 <img src="/images/diseases/ankle/sprain/c.jpg" alt="腳踝扭傷急性期處理RICE 原則" />

<h3>⚠️ 復健科醫師的叮嚀：不痛不代表痊癒！</h3>
<p>這是最關鍵的一點！等到消腫不痛後，<strong>「本體感覺」(Proprioception)</strong> 的重建至關重要。</p>
<p>韌帶受傷後，大腦對腳踝位置的感應會變遲鈍（就像 GPS 訊號不良）。如果不進行訓練，腳踝就像螺絲沒鎖緊，很容易再次受傷，形成<strong>「慢性踝關節不穩定」</strong>。</p>
<br>
<h3>💪 在家也能做的復健三招</h3>
<ul>
  <li><strong>腳踝幫浦運動 (Ankle Pump)：</strong> 躺在床上，腳板向上勾起、向下壓，促進血液循環，幫助消腫。</li>
  <li><strong>毛巾抓握訓練：</strong> 坐在椅子上，用腳趾頭去抓地上的毛巾，強化足底肌肉。</li>
  <li><strong>單腳站立訓練 (金雞獨立)：</strong> 這是訓練本體感覺最好的方法。嘗試用受傷那隻腳單腳站立 30 秒，如果太簡單，可以試著閉上眼睛挑戰。</li>
  <img src="/images/diseases/ankle/sprain/d.jpg" alt="腳踝扭傷在家也能做的復健三招" />
</ul>

<h3>🚨 什麼情況該來看醫生？</h3>
<p>大部分扭傷會自行修復，但如果出現以下狀況，請務必就醫檢查是否傷及骨頭(照X光)或韌帶撕裂(超音波檢查)</p>
<ul>
  <li>1.受傷當下聽到「啪」一聲。</li>
  <li>2.腳踝完全<strong>無法負重踩地</strong>，走四步都有困難。</li>
  <li>3.外觀嚴重變形或按壓骨頭處有劇烈疼痛。</li>
</ul>
<br>
<p>腳踝扭傷雖小，但處理不慎後患無窮。正確的診斷加上完整的復健訓練，才能讓您安心回歸運動場！</p>

        `,
        symptoms: ['外側腳踝腫脹瘀血', '觸摸外側韌帶處有壓痛', '行走疼痛困難', '關節不穩'],
        treatments: ['急性期：RICE原則', '護踝保護', '<a href="/treatments/prp" class="text-cyan-400 hover:underline">PRP 增生療法</a>', '<a href="/treatments/manual" class="text-cyan-400 hover:underline">徒手運動治療</a>' ],
        seoKeywords: ['踝關節扭傷', '翻船', '腳踝腫脹', '韌帶斷裂'],
        seoDescription: '踝關節扭傷是最常見的運動傷害，造成外踝腫脹瘀血。了解症狀、治療方式與復健方法。',
        images: [
           { src: '/images/diseases/ankle/sprain/a.jpg', alt: '腳踝扭傷' }
        ]
      },
      {
        id: 'achilles-tendinitis',
        slug: 'achilles-tendinitis',
        title: '阿基里斯腱發炎',
        description: '連接小腿肌肉與腳跟的粗大肌腱發炎，墊腳尖時疼痛。',
        contentHtml: `
          <p>阿基里斯腱是人體最粗壯的肌腱，負責跳躍與跑步。常見於跑步愛好者或突然增加運動量的人。</p>
          <p>症狀為腳跟後上方腫脹、僵硬，按壓會痛，且<strong>墊腳尖</strong>或上樓梯時疼痛加劇。若不理會，長期發炎可能導致肌腱鈣化甚至斷裂。</p>
        `,
        symptoms: ['腳跟上方腫脹僵硬', '按壓痛', '墊腳尖時疼痛加劇', '早晨起步時僵硬'],
        treatments: ['休息與減少跑跳', '小腿拉筋 (離心收縮)', '震波治療', 'PRP 注射'],
        seoKeywords: ['阿基里斯腱發炎', '腳跟痛', '跑步受傷', '震波'],
        seoDescription: '阿基里斯腱發炎造成腳跟上方腫脹、按壓痛。了解症狀與治療方式。',
        images: [
           { src: 'https://images.unsplash.com/photo-1552674605-469523f54050?auto=format&fit=crop&q=80&w=800', alt: '腳踝肌腱檢查' }
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