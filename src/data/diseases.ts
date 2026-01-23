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
  lastModified?: string;
  seoKeywords: string[]   // SEO 關鍵字
  seoDescription: string  // SEO 描述
  images: { src: string; alt: string }[] // 圖片
}

export interface DiseaseCategory {
  slug: string
  title: string
  lastModified?: string;
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
    lastModified: '2026-01-21',
    description: '脊椎、髖關節與臀部相關疾病',
    image: '/images/diseases/a.jpg',
    seoKeywords: ['新竹脊椎側彎', '坐骨神經痛治療', '新竹整脊', '骨刺', '梨狀肌症候群'],
    seoDescription: '新竹脊椎權威復健。專治腰椎椎間盤突出、坐骨神經痛與長骨刺。提供免開刀的PRP注射與徒手物理治療，精準改善下背痛與腳麻問題。',
    diseases: [
      {
        id: 'lumbar-disc-herniation',
        slug: 'lumbar-disc-herniation',
        title: '腰椎椎間盤突出',
        lastModified: '2026-01-22',
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

    <h3>🧘‍♂️ 醫師教你做：穿上天然的「肌肉護腰」</h3>
    <p style="color: #e2e8f0 !important;">椎間盤退化就像車子的輪胎扁掉了，吸震能力變差。這時我們必須把旁邊的肌肉（核心肌群與臀肌）練得像鋼圈一樣硬，才能分擔脊椎的壓力。</p>

    <h4 style="color: #fcd34d !important; margin-top: 2rem; border-left: 4px solid #fcd34d; padding-left: 1rem;">Part 1. 溫和伸展 (增加循環、減少沾黏)</h4>

    <div style="margin-bottom: 2rem;">
        <h4 style="color: #22d3ee !important;">1. 嬰兒式伸展</h4>
        <p style="color: #e2e8f0 !important;">
            這是一個非常好的「自我牽引」動作，能打開壓迫的椎間孔。
            <br>
            1. 採跪姿，臀部坐在腳跟上。<br>
            2. 雙手盡量向前延伸，上半身趴在地上，額頭點地。<br>
            3. 感覺下背部被溫柔地拉開。停留 30 秒，深呼吸。重複 3 次。
        </p>
    </div>

        <div style="margin-bottom: 2rem;">
        <h4 style="color: #22d3ee !important;">2. 眼鏡蛇式/人面獅身式</h4>
        <p style="color: #e2e8f0 !important;">
            對於久坐族群，後仰能幫助椎間盤向前復位，恢復腰椎生理曲線。
            <br>
            1. 趴在瑜珈墊上，雙腳與肩同寬。<br>
            2. <strong>初階版（人面獅身）：</strong> 手肘撐地，將上半身撐起，視線平視前方。適合退化較嚴重或怕痛的長輩。<br>
            3. <strong>進階版（眼鏡蛇）：</strong> 手掌撐地，將手臂伸直撐起上半身。<br>
            4. <strong>注意：</strong> 若覺得腰部有「卡住」或刺痛感，請降低高度或停止，不要勉強硬撐。
        </p>
    </div>

    <div style="margin-bottom: 2rem;">
        <h4 style="color: #22d3ee !important;">3. 貓牛式</h4>
        <p style="color: #e2e8f0 !important;">
            增加脊椎的液體交換，幫助椎間盤代謝。
            <br>
            1. 四足跪姿，雙手在肩膀正下方。<br>
            2. <strong>吸氣時：</strong>頭抬起，腰微凹（牛式）。<br>
            3. <strong>吐氣時：</strong>腹部收緊，背部拱高像生氣的貓，視線看肚臍。<br>
            4. 動作要慢，專注於脊椎一節一節的活動。重複 10 次。
        </p>
    </div>
    <p><img src="/images/diseases/spine-hip/HIVD/g.jpg" alt="下背痛伸展"></p>
    <h4 style="color: #fcd34d !important; margin-top: 2rem; border-left: 4px solid #fcd34d; padding-left: 1rem;">Part 2. 核心與臀部強化 (重建地基)</h4>

    <div style="margin-bottom: 2rem;">
        <h4 style="color: #22d3ee !important;">4. 死蟲式 (Dead Bug) - 黃金標準</h4>
        <p style="color: #e2e8f0 !important;">
            <strong>這是對退化性脊椎最安全的運動</strong>，因為脊椎完全平貼地板，不會受到剪力。
            <br>
            1. 平躺，雙手舉高，雙腳屈膝抬起呈 90 度（像死掉的蟲）。<br>
            2. <strong>關鍵：</strong> 用力將下背部「壓死」在地板上，不能有縫隙。<br>
            3. 吐氣時，對側手腳慢慢伸直（右手左腳延伸），吸氣回正。<br>
            4. 過程中背部絕對不能拱起來。每邊做 10 次。
        </p>
    </div>

    <div style="margin-bottom: 2rem;">
        <h4 style="color: #22d3ee !important;">5. 橋式 (Bridge) - 喚醒臀肌</h4>
        <p style="color: #e2e8f0 !important;">
            臀部是腰部的地基。臀肌有力，腰椎壓力減半。
            <br>
            1. 平躺，雙腳屈膝踩地，腳跟靠近屁股。<br>
            2. <strong>發力順序：</strong> 先夾緊屁股 → 再將骨盆抬起。<br>
            3. 抬到身體呈一直線即可，<strong>不要過度拱腰</strong>（肋骨要收好）。停留 5 秒，慢慢放下。重複 12 次。
        </p>
    </div>

    
    <div style="margin-bottom: 2rem;">
        <h4 style="color: #22d3ee !important;">6. 棒式 (Plank) - 全身穩定</h4>
        <p style="color: #e2e8f0 !important;">
            訓練深層腹橫肌，形成天然護腰帶。
            <br>
            1. 手肘撐地（在肩膀正下方），雙腳伸直踩地。<br>
            2. 腹部用力收緊，屁股夾緊，身體呈一直線。<br>
            3. <strong>關鍵錯誤：</strong> 絕對不能「塌腰」！如果覺得腰痠，代表核心沒力了，請膝蓋著地（退階做跪姿棒式）。目標維持 30 秒。
        </p>
    </div>

    <div style="margin-bottom: 2rem;">
        <h4 style="color: #22d3ee !important;">7. 鳥狗式 (Bird-Dog)</h4>
        <p style="color: #e2e8f0 !important;">
            訓練背肌與核心的協調性。
            <br>
            1. 四足跪姿，背部打平（這時背上放一杯水不能倒）。<br>
            2. 慢慢伸直右手與左腳，讓身體呈一直線。<br>
            3. 停留 5 秒，收回。換邊進行。<br>
            4. 重點是身體<strong>不要左右搖晃</strong>，訓練核心抗旋轉的能力。
        </p>
    </div>
  <p><img src="/images/diseases/spine-hip/HIVD/h.jpg" alt="下背痛核心訓練"></p>
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
        id: 'scoliosis',
        slug: 'scoliosis',
        title: '脊椎側彎',
        lastModified: '2026-01-21',
        description: '孩子肩膀一高一低？背部凸起？脊椎側彎不只是姿勢不良！宸新擁有「院內X光機」即時追蹤，搭配「側彎專用矯正架」與專業治療師，把握黃金治療期，讓脊椎重回正軌。',
        contentHtml: `
          <p style="color: #e2e8f0 !important;">當您發現家中的孩子肩膀一高一低，或是彎腰時背部某一側異常凸起，這可能不只是單純的「姿勢不良」，而是<strong>脊椎側彎</strong> 的警訊。在台灣，青少年脊椎側彎的發生率約為 3-5%，若錯過黃金治療期，側彎角度可能會隨著身高抽高而急速惡化，不僅影響外觀自信，成年後更可能導致嚴重的背痛與心肺功能受損。</p>
                <br>
          <p style="color: #e2e8f0 !important;">治療脊椎側彎，<strong>「監測」</strong>與<strong>「精準運動」</strong>缺一不可。宸新復健科打造了新竹少見的<strong>「脊椎側彎整合治療中心」</strong>，我們不只提供治療，更擁有<strong>院內 X 光機</strong>可隨時追蹤角度變化，並引進特殊的<strong>脊椎側彎矯正訓練架</strong>，由受過專業訓練的物理治療師一對一指導，協助您對抗地心引力，將彎曲的脊椎「練」回來。</p>
<p><img src="/images/diseases/spine-hip/scolio/b.jpg" alt="脊椎側彎四格漫畫"></p>
      
          <div style="background-color: #fffbeb; border: 2px solid #fbbf24; border-radius: 1rem; padding: 1.5rem; margin: 2rem 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
              <h2 style="color: #b45309 !important; margin-top: 0; font-weight: bold; border-bottom: 2px solid #fcd34d; padding-bottom: 0.5rem; display: flex; align-items: center;">
                  📢 什麼是脊椎側彎？這是一個「3D 立體」的變形
              </h2>
              
              <p style="font-size: 1.1rem; color: #78350f !important;">很多人以為脊椎側彎只是脊椎往左或往右彎（2D 平面），只要用力往反方向凹回來就好？<strong>這是大錯特錯的觀念！</strong></p>
              
              <ul style="list-style: none; padding: 0; margin-top: 1rem; color: #92400e !important;">
                  <li style="margin-bottom: 1rem; display: flex; align-items: start;">
                      <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">1</span>
                      <div style="color: #92400e !important;">
                          <strong style="color: #dc2626 !important;">螺旋狀旋轉 (Rotation)：</strong> 
                          真正的脊椎側彎包含椎體的<strong>「旋轉」</strong>。想像一條擰乾的毛巾，脊椎在側彎的同時也發生了扭轉，這會帶動肋骨變形，造成背部單側隆起（剃刀背, Rib Hump）。
                      </div>
                  </li>
                  <li style="margin-bottom: 1rem; display: flex; align-items: start;">
                      <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">2</span>
                      <div style="color: #92400e !important;">
                          <strong style="color: #0891b2 !important;">C 型 vs. S 型：</strong> 
                          側彎可能呈現單一弧度的 C 型，或是代償後出現兩個弧度的 S 型。每一種型態的施力點與矯正方向都完全不同。
                      </div>
                  </li>
                  <li style="margin-bottom: 0; display: flex; align-items: start;">
                      <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">3</span>
                      <div style="color: #92400e !important;">
                          <strong style="color: #dc2626 !important;">惡化的關鍵期：</strong> 
                          青春期（10-18歲）的身高快速生長期是側彎惡化最快的時期。骨頭長得越快，彎得越快。一旦骨垢線閉合（長大成人），矯正難度將大幅增加。
                      </div>
                  </li>
              </ul>
          </div>
      
          <p><img src="/images/diseases/spine-hip/scolio/c.jpg" alt="脊椎側彎類型"></p>

          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
      
          <h3 style="color: #f8fafc !important;">🔍 亞當式前彎測試：在家就能做</h3>
          <p style="color: #e2e8f0 !important;">家長可以透過<strong>「亞當式前彎測試 (Adam's Forward Bend Test)」</strong>進行初步篩檢：</p>
          <ol style="color: #e2e8f0 !important; margin-left: 1.5rem;">
              <li>讓孩子雙腳併攏站立，雙手合掌自然下垂。</li>
              <li>膝蓋打直，身體慢慢向前彎腰 90 度。</li>
              <li>家長從孩子的<strong>正後方</strong>觀察背部水平。</li>
              <li><strong>結果：</strong> 如果發現背部一邊高、一邊低（單側隆起），這就是脊椎旋轉的證據，極高機率患有脊椎側彎。</li>
          </ol>
         <p><img src="/images/diseases/spine-hip/scolio/d.jpg" alt="脊椎側彎亞當式前彎測試"></p>
          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
      
          <h3 style="color: #f8fafc !important;">🛡️ 宸新三大優勢：為什麼選擇我們？</h3>
          <p style="color: #e2e8f0 !important;">治療脊椎側彎是一場與時間的賽跑，也是一場精準的力學戰爭。我們整合了<strong>影像、器材、人力</strong>，提供醫院等級的照護：</p>
      
          <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
              <h4 style="margin-top: 0; color: #0e7490 !important;">優勢一：<a href="/about/clinic/x-ray" class="text-cyan-400 hover:underline">院內X光機</a>🔍️，隨時追蹤 </h4>
              <p style="margin-bottom: 0; color: #334155 !important;">
                  <strong>不用再去大醫院排隊等片子！</strong> 
                  側彎的角度（Cobb Angle）變化是治療成效的唯一指標。宸新復健科配置專業 X 光設備：
                  <ul style="margin-top: 0.5rem; color: #334155 !important;">
                      <li><strong>即時診斷：</strong> 初診當下立刻拍攝全脊椎影像，醫師直接測量角度，判斷是否需要背架或復健。</li>
                      <li><strong>精準監控：</strong> 復健每 3-6 個月需重新拍攝，確認側彎是否有惡化或改善。</li>
                  </ul>
              </p>
          </div>
      
          <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
              <h4 style="margin-top: 0; color: #0e7490 !important;">優勢二：<a href="/about/clinic/scoliosis-rack" class="text-cyan-400 hover:underline">脊椎側彎專用矯正架</a>🔍️</h4>
              <p style="margin-bottom: 0; color: #334155 !important;">
                  <strong>對抗地心引力的秘密武器。</strong>
                  這不是一般的健身器材，而是類似德國施羅斯 (Schroth) 概念的懸吊系統。
                  <ul style="margin-top: 0.5rem; color: #334155 !important;">
                      <li><strong>3D 懸吊：</strong> 利用繩索與帶子，將身體懸掛在特定角度，利用地心引力幫助脊椎「去旋轉 (De-rotation)」。</li>
                      <li><strong>被動伸展 + 主動發力：</strong> 在矯正架上，我們可以固定骨盆（地基），讓患者針對塌陷的胸廓進行「旋轉式呼吸」，由內而外撐開凹陷的脊椎。這是徒手治療難以做到的精準度。</li>
                  </ul>
              </p>
          </div>
              <p><img src="/images/diseases/spine-hip/scolio/e.jpg" alt="脊椎側彎訓練架"></p>
        
          <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
              <h4 style="margin-top: 0; color: #0e7490 !important;">優勢三：<a href="/treatments/manual" class="text-cyan-400 hover:underline">專業物理治療師一對一指導</a>🔍️</h4>
              <p style="margin-bottom: 0; color: #334155 !important;">
                  <strong>側彎矯正運動非常複雜，做錯比沒做更糟。</strong>
                  我們的治療師受過脊椎側彎特定運動的專業訓練。
                  <ul style="margin-top: 0.5rem; color: #334155 !important;">
                      <li><strong>客製化運動：</strong> 每位患者的彎曲方向不同（胸椎右彎、腰椎左彎等），治療師會設計專屬的「反向運動」。</li>
                      <li><strong>大腦重塑：</strong> 側彎患者的大腦已經習慣歪斜的身體（覺得歪的才是正的）。治療師利用鏡子、觸覺回饋，重新訓練大腦的「本體感覺」，讓患者學會什麼才是「正」的姿勢。</li>
                  </ul>
              </p>
          </div>
      
          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
      
          <h3 style="color: #f8fafc !important;">📊 治療黃金階梯：Cobb Angle 決定策略</h3>
          <p style="color: #e2e8f0 !important;">透過 X 光測量出的柯氏角 (Cobb Angle)，決定了我們的治療方針：</p>
          <ul style="color: #e2e8f0 !important;">
              <li><strong>0° - 20° (輕度)：</strong> <strong style="color: #22d3ee !important;">黃金觀察期。</strong> 重點在於「特定矯正運動」與「姿勢調整」，目標是防止惡化。</li>
              <li><strong>20° - 40° (中度)：</strong> <strong style="color: #22d3ee !important;">積極治療期。</strong> 必須穿戴「矯正背架 (Brace)」，並搭配高強度的「矯正架運動」。目標是矯正角度與維持外觀。</li>
              <li><strong>> 40° (重度)：</strong> <strong style="color: #22d3ee !important;">手術評估期。</strong> 若快速惡化影響心肺功能，可能需轉介骨科評估手術。但術前術後仍需復健維持柔軟度。</li>
          </ul>
      
          
          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
      
          <div style="background-color: #ecfdf5; padding: 2rem; border-radius: 1rem; margin-top: 3rem; text-align: center;">
              <h3 style="color: #047857 !important; margin-top: 0;">👨‍⚕️ 挺直背脊，找回自信！</h3>
              <p style="color: #334155 !important; margin-bottom: 1.5rem;">脊椎側彎是一場持久戰，家長與孩子的配合至關重要。宸新提供「X光檢測、背架諮詢、矯正架運動」的一站式服務。不要等到背部隆起才後悔，趁著骨骼還在生長，讓我們幫孩子把脊椎「拉」回來！</p>
              <p style="font-weight: bold; color: #059669 !important;">懷疑孩子有側彎？立即預約 X 光檢測！</p>
          </div>
        `,
        symptoms: [
          '肩膀一高一低',
          '肩胛骨單側隆起',
          '彎腰時背部單側凸起',
          '身體中心線偏移，衣服容易穿歪'    
          
        ],
        treatments: [
          '<a href="/about/clinic/x-ray" class="text-cyan-400 hover:underline">院內 X 光即時追蹤</a>🔍️ ',
          '<a href="/about/clinic/scoliosis-rack" class="text-cyan-400 hover:underline">脊椎側彎專用矯正架</a>🔍️',
          '<a href="/treatments/manual" class="text-cyan-400 hover:underline">專業物理治療師一對一指導</a>🔍️',
          '穿戴背架或手術治療'
        ],
        seoKeywords: [
          '脊椎側彎',
          'Scoliosis',
          '脊椎矯正',
          '脊椎側彎矯正架',
          '施羅斯運動',
          'X光檢查',
          '兒童復健',
          '物理治療'
        ],
        seoDescription: '脊椎側彎矯正權威。宸新復健科擁有院內X光機即時追蹤，引進專業脊椎側彎矯正架，由物理治療師一對一指導3D矯正運動，把握兒童黃金治療期。',
        images: [
          { src: '/images/diseases/spine-hip/scolio/a.jpg', alt: '脊椎椎間盤突出構造圖'
          }
        ]
      },

 {
        id: 'upper-crossed-syndrome',
        slug: 'upper-crossed-syndrome',
        lastModified: '2026-01-23',
        title: '上交叉症候群 (烏龜頸/圓肩)',
        description: '脖子後面長出「富貴包」？長期頭痛、肩膀僵硬？這是典型的上交叉症候群！深入解析肌肉失衡機制，提供高能量雷射放鬆與徒手矯正策略，搭配居家運動找回挺拔體態。',
        contentHtml: `
          <p style="color: #e2e8f0 !important;">走在路上，您是否注意到很多人都有這樣的體態：<strong>頭部不自覺前傾</strong>（像是烏龜探頭）、<strong>肩膀向內拱起</strong>（圓肩）、背部駝背，甚至頸椎後方凸起了一塊肉（俗稱富貴包）？</p>
                 <br>
          <p style="color: #e2e8f0 !important;">這不只是外觀不好看的問題，這是現代人最常見的文明病——<strong>「上交叉症候群」</strong>。這種長期的肌肉失衡，是造成慢性頭痛、頸椎骨刺、甚至手臂麻木的元兇，常發生在長期用電腦的竹科工程師或是練胸肌多於背部肌肉的健身族(<strong>建議訓練重量胸:背為1 : 1.2，訓練量胸:背為1 : 2</strong>)。在宸新復健科，我們不只治療疼痛，更透過<strong>姿態評估</strong>與<strong>肌力平衡訓練</strong>，從力學結構上「把身體拉回正軌」。</p>
     
   
      
          <div style="background-color: #fffbeb; border: 2px solid #fbbf24; border-radius: 1rem; padding: 1.5rem; margin: 2rem 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
              <h2 style="color: #b45309 !important; margin-top: 0; font-weight: bold; border-bottom: 2px solid #fcd34d; padding-bottom: 0.5rem; display: flex; align-items: center;">
                  📢 什麼是「上交叉」？身體裡的隱形大 X
              </h2>
              
              <p style="font-size: 1.1rem; color: #78350f !important;">由捷克物理治療大師 Dr. Vladimir Janda 提出。當我們從側面看人體時，強弱失衡的肌肉群剛好形成一個<strong>「X」字型的交叉</strong>：</p>
              
              <ul style="list-style: none; padding: 0; margin-top: 1rem; color: #92400e !important;">
                  <li style="margin-bottom: 1rem; display: flex; align-items: start;">
                      <span style="background: #ef4444; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">緊</span>
                      <div style="color: #92400e !important;">
                          <strong style="color: #dc2626 !important;">過度緊繃線 (Tight Line)：</strong> 
                          連接<strong>後上背</strong>（上斜方肌、提肩胛肌）與<strong>前胸</strong>（胸大肌、胸小肌）。這條線太緊，會把肩膀往上聳、往內拉，造成圓肩。
                      </div>
                  </li>
                  <li style="margin-bottom: 1rem; display: flex; align-items: start;">
                      <span style="background: #3b82f6; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">弱</span>
                      <div style="color: #92400e !important;">
                          <strong style="color: #0891b2 !important;">過度無力線 (Weak Line)：</strong> 
                          連接<strong>頸部前方</strong>（深層頸屈肌）與<strong>中下背部</strong>（中下斜方肌、前鋸肌）。這條線太弱，導致頭抬不起來（下巴凸出），肩胛骨抓不住脊椎（翼狀肩胛）。
                      </div>
                  </li>
                  <li style="margin-bottom: 0; display: flex; align-items: start;">
                      <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">3</span>
                      <div style="color: #92400e !important;">
                          <strong style="color: #b45309 !important;">力學後果：</strong> 
                          頭每往前伸 1 吋，頸椎受力就增加 1 倍。長期下來，頸椎關節會提早退化、長骨刺，甚至壓迫神經。
                      </div>
                  </li>
              </ul>
          </div>
      <p><img src="/images/diseases/spine-hip/upper/b.jpg" alt="上交叉症候群成因"></p>

          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
      

          <h3 style="color: #f8fafc !important;">🔍 X光下的發現：頸椎曲度消失及退化</h3>
          <p style="color: #e2e8f0 !important;">上交叉症候群的患者，X光可以發現<strong>倒C的曲度</strong> 不見了，變成I型的脊椎，漸漸地開始長出骨刺或椎間盤突出。</p>
      <p><img src="/images/diseases/spine-hip/upper/g.jpg" alt="上交叉症候群的x光"></p>
          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
      

          <h3 style="color: #f8fafc !important;">🔍 疼痛特徵：您的痛是哪一種？</h3>
          <p style="color: #e2e8f0 !important;">上交叉症候群的患者，通常會有以下幾種典型的疼痛表現：</p>
          
          <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
              <h4 style="margin-top: 0; color: #0e7490 !important;">1. 頸源性頭痛 </h4>
              <p style="margin-bottom: 0; color: #334155 !important;">
                  痛感通常從<strong>後腦勺</strong>開始，像一條帶子一樣緊箍到太陽穴或眼窩。這是因為後頸的「枕下肌群」太緊，壓迫到枕神經所致。
              </p>
          </div>
      
          <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
              <h4 style="margin-top: 0; color: #0e7490 !important;">2. 膏肓痛與肩頸僵硬</h4>
              <p style="margin-bottom: 0; color: #334155 !important;">
                  覺得肩膀上像背了千斤頂，怎麼按摩都鬆不開。肩胛骨內側（膏肓穴）常有痠痛點，這是因為菱形肌被圓肩「拉長」而過勞發炎。
              </p>
          </div>
          <p><img src="/images/diseases/spine-hip/upper/c.jpg" alt="上交叉症候群疼痛特徵"></p>
          <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
              <h4 style="margin-top: 0; color: #0e7490 !important;">3. 手臂麻木 (胸廓出口症候群)</h4>
              <p style="margin-bottom: 0; color: #334155 !important;">
                  因為圓肩導致胸小肌太緊，卡住通往手臂的神經血管。睡覺時或手舉高時，手掌和手指容易發麻、冰冷。
              </p>
          </div>
       <p><img src="/images/diseases/spine-hip/upper/d.jpg" alt="胸廓出口症候群"></p>
          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
      
          <h3 style="color: #f8fafc !important;">🛡️ 宸新整合治療：先放鬆，後訓練</h3>
          <p style="color: #e2e8f0 !important;">治療上交叉症候群，順序非常重要。如果緊繃的肌肉沒放鬆就直接練肌力，只會代償更嚴重。我們的治療三部曲：</p>
      
          <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
              <h4 style="margin-top: 0; color: #0e7490 !important;">1. 深度鬆解：<a href="/treatments/high-intensity-laser" class="text-cyan-400 hover:underline">高能量雷射</a></h4>
              <p style="margin-bottom: 0; color: #334155 !important;">
                  針對像石頭一樣硬的<strong>上斜方肌</strong>與<strong>提肩胛肌</strong>，傳統熱敷效果有限。高能量雷射能穿透至深層筋膜，透過光熱效應與光化學效應，快速促進血液循環，帶走堆積的乳酸，讓肌肉瞬間「軟化」。
              </p>
          </div>
      
          <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
              <h4 style="margin-top: 0; color: #0e7490 !important;">2. 結構調整：<a href="/treatments/manual" class="text-cyan-400 hover:underline">專業徒手治療</a></h4>
              <p style="margin-bottom: 0; color: #334155 !important;">
                  上交叉患者通常伴隨<strong>「胸椎僵硬」</strong>（駝背卡死）。物理治療師會使用關節鬆動術打開胸椎活動度，並徒手放鬆緊繃的胸大肌與枕下肌群，，及教導正確的居家運動，改善體態，讓頸椎回正。
              </p>
          </div>
      
          <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
              <h4 style="margin-top: 0; color: #0e7490 !important;">3. 痛點擊破：<a href="/treatments/shockwave" class="text-cyan-400 hover:underline">體外震波治療</a></h4>
              <p style="margin-bottom: 0; color: #334155 !important;">
                  如果您摸到肩膀裡有「氣結」或條索狀的硬塊（激痛點），震波是最佳選擇。利用聲波震碎鈣化與沾黏組織，雖然治療當下會有些痠痛，但效果非常顯著。
              </p>
          </div>
      
          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

    <h3 style="color: #f8fafc !important;">🧘‍♂️ 醫師教你做：逆轉「大 X」的 8 招黃金運動</h3>
    <p style="color: #e2e8f0 !important;">上交叉症候群的修正原則是：<strong>先放鬆緊繃的肌肉（前胸、上肩），再強化無力的肌肉（深層頸肌、背肌）</strong>。請務必依照順序進行：</p>

    <h4 style="color: #fcd34d !important; margin-top: 2rem; border-left: 4px solid #fcd34d; padding-left: 1rem;">Part 1. 四大伸展：釋放緊繃枷鎖</h4>

    <div style="margin-bottom: 2rem;">
        <h4 style="color: #22d3ee !important;">1. 門框胸肌伸展</h4>
        <p style="color: #e2e8f0 !important;">
            <strong>目標：</strong> 放鬆胸大肌與胸小肌，改善圓肩。
            <br>
            1. 找一個門框，雙手手肘彎曲 90 度抵住門框兩側（呈投降姿勢）。<br>
            2. 一腳向前跨一步，身體重心往前壓。<br>
            3. 感覺胸口前方肌肉被拉開。維持 30 秒，重複 3 次。<br>
            4. <strong>注意：</strong> 腰不要過度前挺，專注在胸口打開。
        </p>
    </div>

    <div style="margin-bottom: 2rem;">
        <h4 style="color: #22d3ee !important;">2. 上斜方肌伸展</h4>
        <p style="color: #e2e8f0 !important;">
            <strong>目標：</strong> 放鬆聳肩的肌肉，改善僵硬。
            <br>
            1. 坐姿或站姿，右手放在背後（固定肩膀不聳起）。<br>
            2. 左手繞過頭頂，輕輕將頭往左邊肩膀拉。<br>
            3. 感覺右側脖子到肩膀的線條被拉開。維持 15 秒，換邊。重複 3 次。
        </p>
    </div>

    <div style="margin-bottom: 2rem;">
        <h4 style="color: #22d3ee !important;">3. 提肩胛肌伸展</h4>
        <p style="color: #e2e8f0 !important;">
            <strong>目標：</strong> 放鬆連接頸椎與肩胛骨的肌肉，改善落枕感。
            <br>
            1. 頭向左轉 45 度，低頭看左邊腋下（像要聞腋下）。<br>
            2. 左手輕壓後腦勺，感覺右後頸被拉伸。<br>
            3. 維持 15 秒，換邊。重複 3 次。
        </p>
    </div>

    <div style="margin-bottom: 2rem;">
        <h4 style="color: #22d3ee !important;">4. 枕下肌群放鬆</h4>
        <p style="color: #e2e8f0 !important;">
            <strong>目標：</strong> 放鬆後腦勺與頸椎交界處，緩解頸源性頭痛。
            <br>
            1. 雙手抱頭，十指交扣在後腦勺。<br>
            2. 頭部維持不動，雙手大拇指輕輕按摩後腦勺下方的凹陷處（風池穴周圍）。<br>
            3. 也可以用花生球或網球放在後腦勺下方躺著熱敷放鬆。
        </p>
    </div>
     <p><img src="/images/diseases/spine-hip/upper/e.jpg" alt="上交叉症候群伸展"></p>
    
    <h4 style="color: #fcd34d !important; margin-top: 2rem; border-left: 4px solid #fcd34d; padding-left: 1rem;">Part 2. 四大強化：喚醒沉睡背肌</h4>

    <div style="margin-bottom: 2rem;">
        <h4 style="color: #22d3ee !important;">5. 彈力帶划船</h4>
        <p style="color: #e2e8f0 !important;">
            <strong>目標：</strong> 強化中下斜方肌與菱形肌，把圓肩「拉」回來。
            <br>
            1. 將彈力帶固定在門把或柱子上（約胸口高度）。<br>
            2. 雙手抓住彈力帶兩端，手肘彎曲向後拉。<br>
            3. <strong>關鍵：</strong> 感覺是用「肩胛骨夾背」的力量帶動手肘，而不是只用手拉。肩膀保持下壓不聳肩。<br>
            4. 重複 15 下，做 3 組。
        </p>
    </div>

    <div style="margin-bottom: 2rem;">
        <h4 style="color: #22d3ee !important;">6. 反向飛鳥</h4>
        <p style="color: #e2e8f0 !important;">
            <strong>目標：</strong> 強化三角肌後束與上背部，打開胸廓。
            <br>
            1. 雙手握住彈力帶或輕啞鈴，身體微向前傾，膝蓋微彎。<br>
            2. 雙手像鳥展翅一樣向兩側打開，直到與身體平行。<br>
            3. 感覺肩胛骨用力互相靠近。動作要慢，不要用甩的。<br>
            4. 重複 12 下，做 3 組。
        </p>
    </div>

    <div style="margin-bottom: 2rem;">
        <h4 style="color: #22d3ee !important;">7. 牆壁天使 </h4>
        <p style="color: #e2e8f0 !important;">
            <strong>目標：</strong> 訓練下斜方肌與前鋸肌，改善翼狀肩胛。
            <br>
            1. 背對牆壁站立，腳跟離牆約 15 公分。<br>
            2. 讓後腦勺、上背部、臀部貼緊牆壁。<br>
            3. 雙手舉起呈「W」字型，手背貼牆。慢慢向上推成「Y」字型，再慢慢拉回「W」。<br>
            4. 過程中<strong>下背部不能拱起</strong>離開牆面。重複 10 下。
        </p>
    </div>

    <div style="margin-bottom: 2rem;">
        <h4 style="color: #22d3ee !important;">8. 縮下巴運動 </h4>
        <p style="color: #e2e8f0 !important;">
            <strong>目標：</strong> 強化深層頸屈肌，改善烏龜頸（這是最重要的核心訓練）。
            <br>
            1. 眼睛平視前方，手指輕推下巴。<br>
            2. 頭部<strong>水平向後</strong>平移（擠出雙下巴），感覺後頸被拉長。<br>
            3. 停留 5-10 秒，放鬆。重複 10 次。<br>
            4. 隨時隨地都可以做，次數不限。
        </p>
    </div>
   <p><img src="/images/diseases/spine-hip/upper/f.jpg" alt="上交叉症候群肌力訓練"></p>
     
          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
      
          <div style="background-color: #ecfdf5; padding: 2rem; border-radius: 1rem; margin-top: 3rem; text-align: center;">
              <h3 style="color: #047857 !important; margin-top: 0;">👨‍⚕️ 挺起胸膛，告別痠痛！</h3>
              <p style="color: #334155 !important; margin-bottom: 1.5rem;">上交叉症候群是日積月累的結果，當然不可能一天就矯正回來。但只要透過高能量雷射緩解急性疼痛，配合物理治療調整關節，並持之以恆地進行居家運動，您絕對能找回挺拔自信的體態。宸新復健科，陪您一起把脊椎「練」回來！</p>
              <p style="font-weight: bold; color: #059669 !important;">想改善體態、消除富貴包？立即預約姿態評估！</p>
          </div>
        `,
        symptoms: [
          '頭部明顯前傾 (烏龜頸)',
          '肩膀圓肩內扣，背部駝背',
          '後頸部與上背部交界處凸起 (富貴包)',
          '經常性頭痛、頭暈、手臂容易麻木',
        ],
        treatments: [
          '姿態矯正運動，止痛藥復健',
          '<a href="/treatments/laser" class="text-cyan-400 hover:underline">高能量雷射止痛</a>🔍️',
          '<a href="/treatments/manual" class="text-cyan-400 hover:underline">徒手放鬆運動治療</a>🔍️',
          '<a href="/treatments/shockwave" class="text-cyan-400 hover:underline">體外震波治療</a>🔍️',
          
        ],
        seoKeywords: [
          '上交叉症候群',
          '烏龜頸',
          '圓肩',
          '富貴包',
          '膏肓痛',
          '頸源性頭痛',
          '物理治療',
          '姿態矯正'
        ],
        seoDescription: '上交叉症候群造成烏龜頸、圓肩與富貴包。宸新復健科提供高能量雷射、徒手治療與專業姿態矯正運動，有效解決長期肩頸痠痛與體態問題。',
        images: [
          { src: '/images/diseases/spine-hip/upper/a.jpg', alt: '上交叉症候群'
          }
        ]
      },

      {
        id: 'lower-crossed-syndrome',
        slug: 'lower-crossed-syndrome',
        lastModified: '2026-01-23',
        title: '下交叉症候群 (骨盆前傾)',
        description: '明明很瘦卻有小腹？久坐腰部總是痠痛？你可能患有「下交叉症候群」導致的骨盆前傾！宸新復健科透過院內X光骨骼排列分析，結合徒手治療與核心懸吊訓練，從根源導正體態，告別慢性腰痛。',
        contentHtml: `
          <p style="color: #e2e8f0 !important;">您是否也有這樣的困擾：明明體重標準，甚至四肢纖細，但<strong>小腹總是特別凸出</strong>？久坐辦公室後，站起來時<strong>腰椎連著屁股上方一陣痠軟無力</strong>？睡覺平躺時，腰部卻懸空無法貼平床面，怎麼躺都不舒服？</p>
                <br>
          <p style="color: #e2e8f0 !important;">這些現象，很可能不是因為您「胖」，而是典型的體態失衡——<strong>「下交叉症候群」</strong>，也就是俗稱的嚴重的<strong>骨盆前傾</strong>。這不只是外觀問題，更是許多慢性腰痛、膝蓋疼痛的根源。在宸新復健科，我們不只緩解疼痛，更利用<strong>院內 X 光機</strong>科學化分析骨盆角度，並結合專業物理治療師團隊與<strong>紅繩懸吊系統與器械皮拉提斯</strong>，喚醒沉睡的核心肌群，從「結構」與「功能」雙管齊下，找回身體正確的排列。</p>
      
          <div style="background-color: #fffbeb; border: 2px solid #fbbf24; border-radius: 1rem; padding: 1.5rem; margin: 2rem 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
              <h2 style="color: #b45309 !important; margin-top: 0; font-weight: bold; border-bottom: 2px solid #fcd34d; padding-bottom: 0.5rem; display: flex; align-items: center;">
                  📢 什麼是下交叉症候群？身體裡的「拔河比賽」失控了
              </h2>
              
              <p style="font-size: 1.1rem; color: #78350f !important;">想像您的骨盆是一個水桶，正常情況下它應該保持相對水平。但當身體前後的肌肉力量失衡，就像一場失控的拔河比賽，導致「水桶」向前傾倒（骨盆前傾），腰椎過度前凸。這種對角線的肌肉失衡模式，我們稱之為下交叉症候群：</p>
              
              <ul style="list-style: none; padding: 0; margin-top: 1rem; color: #92400e !important;">
                  <li style="margin-bottom: 1rem; display: flex; align-items: start;">
                      <span style="background: #ef4444; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">強</span>
                      <div style="color: #92400e !important;">
                          <strong style="color: #dc2626 !important;">過度緊繃/縮短的肌群 (需要放鬆)：</strong> 
                          <br>1. <strong>髖屈肌群 (髂腰肌)：</strong> 長時間久坐導致大腿前側與腹股溝深處肌肉縮短。
                          <br>2. <strong>下背伸肌群 (豎脊肌)：</strong> 為了平衡前傾的骨盆，腰部肌肉被迫持續緊繃收縮。
                      </div>
                  </li>
                  <li style="margin-bottom: 1rem; display: flex; align-items: start;">
                      <span style="background: #3b82f6; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">弱</span>
                      <div style="color: #92400e !important;">
                          <strong style="color: #0891b2 !important;">無力/被拉長的肌群 (需要訓練)：</strong> 
                          <br>1. <strong>腹部核心肌群：</strong> 腹肌無力拉不住骨盆，導致內臟往前推，形成「假凸肚」。
                          <br>2. <strong>臀部肌群 (臀大肌/臀中肌)：</strong> 久坐加上被長期拉長，導致臀肌失憶，無法發揮穩定骨盆與髖關節的作用。
                      </div>
                  </li>
              </ul>
          </div>
         <p><img src="/images/diseases/spine-hip/lower/b.jpg" alt="下交叉症候群成因"></p>
          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
          
          <h3 style="color: #f8fafc !important;">🔍 不只是腰痛！下交叉症候群的連鎖反應</h3>
          <p style="color: #e2e8f0 !important;">骨盆是連接上半身與下半身的樞紐，一旦歪斜，影響是全身性的：</p>
          <ul style="color: #e2e8f0 !important; line-height: 1.6;">
              <li><strong>慢性下背痛：</strong> 腰椎長期處於過度伸展擠壓的狀態，容易引發小面關節發炎、椎間盤突出風險增加。</li>
              <li><strong>外觀體態改變：</strong> 明顯的「翹臀」假象（實際上是骨盆前傾）、小腹凸出、肋骨外翻。</li>
              <li><strong>膝蓋疼痛與退化：</strong> 骨盆前傾常伴隨股骨內轉（膝蓋內扣），增加膝關節內側壓力。</li>
              <li><strong>大腿後側緊繃拉傷：</strong> 臀肌無力時，大腿後側肌群（膕旁肌）需代償出力，長期處於被拉長又過勞的狀態，容易拉傷。</li>
              <li><strong>呼吸模式異常：</strong> 核心與肋骨位置改變，影響橫膈膜功能，導致呼吸短淺。</li>
          </ul>
                  <p><img src="/images/diseases/spine-hip/lower/c.jpg" alt="下交叉症候群的連鎖反應"></p>

          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
          
          <h3 style="color: #f8fafc !important;">🛡️ 宸新全方位治療策略：重塑身體力線</h3>
          <p style="color: #e2e8f0 !important;">面對下交叉症候群，單純的按摩放鬆只能治標。宸新復健科採取「評估-放鬆-啟動-整合」的四步驟根治方案：</p>
          
          <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
              <h4 style="margin-top: 0; color: #0e7490 !important;">1. 科學化影像診斷與功能評估</h4>
              <p style="margin-bottom: 0; color: #334155 !important;">
                  <ul style="margin-top: 0.5rem; color: #334155 !important;">
                           <li><strong>物理治療師觸診與<a href="/treatments/manual" class="text-cyan-400 hover:underline">動作測試</a>：</strong> 評估髂腰肌緊繃程度（Thomas Test）、臀肌啟動模式是否異常，找出代償的元兇。</li>
                  </ul>
              </p>
          </div>
      
          <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
              <h4 style="margin-top: 0; color: #0e7490 !important;">2. 精準徒手治療：釋放緊繃枷鎖</h4> 
              <p style="margin-bottom: 0; color: #334155 !important;">
                  在訓練無力肌肉前，必須先鬆開緊繃的拮抗肌。
                  <ul style="margin-top: 0.5rem; color: #334155 !important;">
                      <li><strong><a href="/treatments/manual" class="text-cyan-400 hover:underline">專業徒手治療</a>：</strong> 針對深層緊繃的髂腰肌、腰方肌進行筋膜釋放與關節鬆動術，恢復肌肉彈性與關節活動度。</li>
                  </ul>
              </p>
          </div>
          
          <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
              <h4 style="margin-top: 0; color: #0e7490 !important;">3. 核心與臀肌喚醒：重建身體地基</h4>
              <p style="margin-bottom: 0; color: #334155 !important;">
                  這是最關鍵的一步！治療師手把手指導，確保您「用對肌肉」發力。
                  <ul style="margin-top: 0.5rem; color: #334155 !important;">
                      <li><strong>臀肌失憶症治療：</strong> 重新建立大腦與臀肌的連結，學習在走路、站立時正確使用臀部支撐。</li>
                        <li><strong><a href="/about/clinic/redcord" class="text-cyan-400 hover:underline">紅繩懸吊系統 (Redcord)</a>：</strong> 利用不穩定的懸吊繩索，強迫身體深層核心肌群參與穩定，這是一般地面運動難以達到的訓練深度，對於矯正骨盆位置效果顯著。</li>
                       <li><strong><a href="/about/clinic/pilates-reformer" class="text-cyan-400 hover:underline">器械皮拉提斯(Pilates)</a>：</strong> 本院引進專業的皮拉提斯核心床 (Reformer)，結合復健醫學原理，由物理治療師親自指導。利用彈簧阻力輔助，能更安全、精準地訓練核心肌群、延展脊椎並增加關節活動度。</li>
                    
                  </ul>
                </p>               
           </div>
      
          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
      
     <h3 style="color: #f8fafc !important;">🧘‍♂️ 醫師教你做：逆轉「下交叉」的 8 招黃金運動</h3>
<p style="color: #e2e8f0 !important;">下交叉症候群（骨盆前傾）的修正原則是：<strong>先放鬆緊繃的肌肉（髖屈肌、下背），再強化無力的肌肉（腹部核心、臀肌）</strong>。請務必依照順序進行：</p>

<h4 style="color: #fcd34d !important; margin-top: 2rem; border-left: 4px solid #fcd34d; padding-left: 1rem;">Part 1. 四大伸展：釋放骨盆壓力</h4>

<div style="margin-bottom: 2rem;">
    <h4 style="color: #22d3ee !important;">1. 跪姿髖屈肌伸展</h4>
    <p style="color: #e2e8f0 !important;">
        <strong>目標：</strong> 放鬆最緊繃的髂腰肌，改善骨盆前傾的主因。
        <br>
        1. 採單腳跪姿（弓箭步），後腳膝蓋著地（可墊毛巾）。<br>
        2. 保持上半身挺直，重心緩慢前移，直到感覺後腳鼠蹊部有拉扯感。<br>
        3. 收緊屁股（夾臀）可以增加伸展效果。維持 30 秒，換邊，重複 3 次。<br>
        <strong>注意：</strong> 腰椎不要過度拱起，重點在髖部前推。
    </p>
</div>

<div style="margin-bottom: 2rem;">
    <h4 style="color: #22d3ee !important;">2. 嬰兒式</h4>
    <p style="color: #e2e8f0 !important;">
        <strong>目標：</strong> 溫和延展緊繃的下背豎脊肌。
        <br>
        1. 採跪姿，雙腳大拇指併攏，膝蓋微開。<br>
        2. 臀部坐向腳跟，上半身往前趴下，雙手盡量向前延伸。<br>
        3. 感受下背部肌肉被拉長放鬆。維持 30~60 秒，重複 3 次。<br>
        <strong>注意：</strong> 保持深呼吸，讓肋骨後側擴張。
    </p>
</div>

<div style="margin-bottom: 2rem;">
    <h4 style="color: #22d3ee !important;">3. 貓式拱背</h4>
    <p style="color: #e2e8f0 !important;">
        <strong>目標：</strong> 增加脊椎活動度，釋放腰椎壓力。
        <br>
        1. 四足跪姿，手腕在肩膀正下方，膝蓋在髖部正下方。<br>
        2. 吐氣時，肚臍內收，將背部拱起像生氣的貓，視線看向肚臍。<br>
        3. 吸氣時回到中間位置（下交叉患者避免過度做塌腰的牛式，專注在拱背即可）。<br>
        <strong>注意：</strong> 動作要緩慢，專注於脊椎一節一節的活動。
    </p>
</div>

<div style="margin-bottom: 2rem;">
    <h4 style="color: #22d3ee !important;">4. 站姿股四頭肌伸展</h4>
    <p style="color: #e2e8f0 !important;">
        <strong>目標：</strong> 放鬆大腿前側，減少向下拉扯骨盆的力量。
        <br>
        1. 採站姿（可扶牆保持平衡）。<br>
        2. 一手抓住同側腳踝，將腳跟拉向臀部。<br>
        3. 保持兩膝蓋併攏，骨盆微後傾（尾骨捲向地板）。維持 30 秒，換邊。<br>
        <strong>注意：</strong> 不要讓大腿向外打開，膝蓋要朝向地板。
    </p>
</div>
    <p><img src="/images/diseases/spine-hip/lower/d.jpg" alt="下交叉症候群的伸展動作"></p>
<h4 style="color: #fcd34d !important; margin-top: 2rem; border-left: 4px solid #fcd34d; padding-left: 1rem;">Part 2. 四大肌力：建立核心護盾</h4>

<div style="margin-bottom: 2rem;">
    <h4 style="color: #22d3ee !important;">1. 死蟲式</h4>
    <p style="color: #e2e8f0 !important;">
        <strong>目標：</strong> 強化深層核心，學習在四肢活動時穩定腰椎。
        <br>
        1. 平躺，雙手舉向天花板，雙腳屈膝舉起呈 90 度（像翻倒的蟲）。<br>
        2. 此時腰部要平貼地板（不能有縫隙）。<br>
        3. 吸氣，對側手腳（如右手左腳）同時緩慢下放，但不碰地；吐氣收回。<br>
        4. 動作過程中腰部必須全程緊貼地面。左右交替做 10~12 下，3 組。<br>
        <strong>注意：</strong> 如果腰部拱起，請縮小動作幅度。
    </p>
</div>

<div style="margin-bottom: 2rem;">
    <h4 style="color: #22d3ee !important;">2. 橋式 </h4>
    <p style="color: #e2e8f0 !important;">
        <strong>目標：</strong> 喚醒並強化無力的臀大肌，改善「睡著的屁股」。
        <br>
        1. 平躺，雙腳屈膝踩地，寬度與骨盆同寬。<br>
        2. 腳跟用力踩地，將臀部抬起，直到肩膀、髖部、膝蓋呈一直線。<br>
        3. 頂峰停留 2 秒，用力夾緊臀部，再緩慢放下。<br>
        4. 重複 15 次，做 3 組。<br>
        <strong>注意：</strong> 是用屁股的力量推，而不是用腰頂（腰不應痠痛）。
    </p>
</div>

<div style="margin-bottom: 2rem;">
    <h4 style="color: #22d3ee !important;">3. 棒式 </h4>
    <p style="color: #e2e8f0 !important;">
        <strong>目標：</strong> 建立抗伸展的核心力量，防止骨盆前傾。
        <br>
        1. 雙肘撐地，位於肩膀正下方，雙腳伸直併攏。<br>
        2. 收緊肚子、夾緊屁股、大腿用力，身體呈一直線。<br>
        3. 想像肚臍要吸向脊椎。維持 30~60 秒，重複 3 次。<br>
        <strong>注意：</strong> 絕對不能塌腰，如果腰痠請先膝蓋著地降低難度。
    </p>
</div>

<div style="margin-bottom: 2rem;">
    <h4 style="color: #22d3ee !important;">4. 鳥狗式 </h4>
    <p style="color: #e2e8f0 !important;">
        <strong>目標：</strong> 訓練核心穩定性與背部/臀部的協調控制。
        <br>
        1. 四足跪姿預備，背部保持平坦（桌板姿勢）。<br>
        2. 吸氣，同時伸直對側手腳（如右手左腳），向前後延伸。<br>
        3. 想像有人拉你的手跟腳，身體不歪斜。停留 2 秒後吐氣收回。<br>
        4. 左右交替做 10~12 下，3 組。<br>
        <strong>注意：</strong> 保持骨盆水平，不要翻轉身體，背上像放了一杯水不能灑。
    </p>
</div>
            <p><img src="/images/diseases/spine-hip/lower/e.jpg" alt="下交叉症候群的肌力訓練動作"></p>
          <div style="background-color: #ecfdf5; padding: 2rem; border-radius: 1rem; margin-top: 3rem; text-align: center;">
              <h3 style="color: #047857 !important; margin-top: 0;">👨‍⚕️ 別讓錯誤體態偷走您的健康</h3>
              <p style="color: #334155 !important; margin-bottom: 1.5rem;">下交叉症候群是現代人的文明病，它不只影響外觀，更是身體發出的求救訊號。在宸新復健科，我們透過專業的醫師與物理治療團隊，協助您打破肌肉失衡的惡性循環，重建穩定的核心與骨盆，找回無痛且挺拔的自信體態！</p>
              <p style="font-weight: bold; color: #059669 !important;">懷疑自己骨盆前傾？立即預約專業體態評估！</p>
          </div>
        `,
        symptoms: [
          '久坐後腰部明顯痠痛挺不直',
          '平躺時腰部懸空無法貼地',
          '明明不胖卻有明顯的小腹凸出',
          '站姿時有明顯的「翹臀」但伴隨腰痠',
        ],
        treatments: [
          '醫師檢查與治療師體態評估',
          '<a href="/treatments/manual" class="text-cyan-400 hover:underline">髂腰肌深層筋膜放鬆與客製化居家運動</a>🔍️',
          '<a href="/about/clinic/redcord" class="text-cyan-400 hover:underline">紅繩懸吊系統 (Redcord)</a>🔍️',
          '<a href="/about/clinic/pilates-reformer" class="text-cyan-400 hover:underline">器械皮拉提斯(Pilates)</a>🔍️'

        ],
        seoKeywords: [
          '下交叉症候群',
          '骨盆前傾',
          '腰痛',
          '小腹凸出',
          '核心肌群無力',
          '髂腰肌緊繃',
          '物理治療',
          '體態矯正',
          'X光檢查',
          '臀肌失憶症'
        ],
        seoDescription: '下交叉症候群(骨盆前傾)是久坐族腰痛與小腹凸出的主因。宸新復健科結合院內X光分析、徒手治療放鬆緊繃髂腰肌，並運用紅繩懸吊系統強化核心與臀肌，從根源矯正體態改善疼痛。',
        images: [
          { src: '/images/diseases/spine-hip/lower/a.jpg', alt: '下交叉症候群' }
        ]
      },

      {
        id: 'cervical-disc-degeneration',
        slug: 'cervical-disc-degeneration',
        title: '頸椎椎間盤退化',
        lastModified: '2026-01-22',
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

    <h3 >🧘‍♂️ 醫師教你做：打造天然的「肌肉頸圈」</h3>
    <p style="color: #e2e8f0 !important;">頸椎退化就像避震器老舊了。我們必須強化深層的頸部核心肌肉，讓它們像「天然頸圈」一樣穩穩抓住脊椎，減少神經受到的壓迫。</p>

    <h4 style="color: #fcd34d !important; margin-top: 2rem; border-left: 4px solid #fcd34d; padding-left: 1rem;">Part 1. 伸展減壓 (找回生理曲線)</h4>

    <div style="margin-bottom: 2rem;">
        <h4 style="color: #22d3ee !important;">1. 縮下巴運動 - 頸椎復位</h4>
        <p style="color: #e2e8f0 !important;">
            這是對抗退化最重要的一招，能打開椎間孔，讓突出的椎間盤有機會縮回。
            <br>
            1. 眼睛平視前方，手指輕推下巴。<br>
            2. 頭部<strong>水平向後</strong>平移（擠出雙下巴），感覺後腦勺像被一條線往上拉。<br>
            3. 停留 5 秒，放鬆。重複 10 次。<br>
            4. <strong>注意：</strong> 千萬不要變成「低頭」，視線要保持水平。
        </p>
    </div>
    
   
    <div style="margin-bottom: 2rem;">
        <h4 style="color: #22d3ee !important;">2. 毛巾頸椎牽引</h4>
        <p style="color: #e2e8f0 !important;">
            利用毛巾輔助，溫和恢復頸椎的 C 型曲線。
            <br>
            1. 將毛巾捲成條狀，掛在脖子後方（約頸椎中段）。<br>
            2. 雙手抓住毛巾兩端向前拉緊。<br>
            3. 頭部慢慢向後仰，以毛巾為支點，伸展頸部前方。<br>
            4. 感覺頸椎一節節打開。停留 10 秒，重複 5 次。
        </p>
    </div>

    <div style="margin-bottom: 2rem;">
        <h4 style="color: #22d3ee !important;">3. 胸大肌伸展</h4>
        <p style="color: #e2e8f0 !important;">
            駝背會加重頸椎退化，所以要打開胸口。
            <br>
            1. 面對牆角，雙手抬高呈 90 度扶牆。<br>
            2. 腳呈弓箭步，身體重心向前壓。<br>
            3. 感覺胸口肌肉被拉開。停留 15 秒，重複 3 次。
        </p>
    </div>

    <h4 style="color: #fcd34d !important; margin-top: 2rem; border-left: 4px solid #fcd34d; padding-left: 1rem;">Part 2. 核心穩定 (強化深層肌群)</h4>

    <div style="margin-bottom: 2rem;">
        <h4 style="color: #22d3ee !important;">4. 等長收縮訓練</h4>
        <p style="color: #e2e8f0 !important;">
            這是最安全的肌力訓練，<strong>脖子不動，肌肉用力</strong>。
            <br>
            1. <strong>前推：</strong> 手掌抵住額頭，頭用力往前頂手，但手不讓頭動。維持 5 秒。<br>
            2. <strong>側推：</strong> 手掌抵住太陽穴，頭用力往側面頂。維持 5 秒。<br>
            3. <strong>後推：</strong> 雙手交疊在後腦勺，頭用力往後頂。維持 5 秒。<br>
            4. 每個方向做 5 次。這能強化頸部四周的肌肉牆。
        </p>
    </div>

    <div style="margin-bottom: 2rem;">
        <h4 style="color: #22d3ee !important;">5. 頸部深層屈肌訓練 </h4>
        <p style="color: #e2e8f0 !important;">
            訓練頸椎的「腹肌」（頸長肌），這是穩定頸椎的關鍵。
            <br>
            1. 平躺，拿掉枕頭。先做「縮下巴」動作。<br>
            2. 保持縮下巴，將頭<strong>微微抬離地面 2 公分</strong>就好（不要抬太高）。<br>
            3. 視線看向腳尖，維持 5-10 秒。感覺脖子深處微痠。<br>
            4. 如果覺得脖子表面（胸鎖乳突肌）很緊繃，代表做錯了，請縮小抬起的幅度。
        </p>
    </div>

    <div style="margin-bottom: 2rem;">
        <h4 style="color: #22d3ee !important;">6. W 字伸展</h4>
        <p style="color: #e2e8f0 !important;">
            強化上背部肌群，提供頸椎穩定的地基。
            <br>
            1. 站立或坐姿，雙手舉起呈「W」字型。<br>
            2. 用力將肩胛骨向後、向下夾緊（想像背後夾一支筆）。<br>
            3. 維持 5 秒，放鬆。重複 12 次。
        </p>
    </div>
<p><img src="/images/diseases/spine-hip/CHIVD/e.jpg" alt="頸椎退化居家運動"></p>
<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h3 >🧘‍♂️ 醫師的護頸小叮嚀：正確姿勢</h3>
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
        lastModified: '2026-01-21',
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
        id: 'cervical-facet-syndrome',
        slug: 'cervical-facet-syndrome',
        title: '頸椎小面關節炎',
        lastModified: '2026-01-22',
        description: '抬頭看天花板脖子就痛？早上起床頸部僵硬卡住？這可能不是單純落枕！深入解析小面關節炎成因，教您分辨與椎間盤突出的差異，以及超音波導引增生注射的精準修復。',
        contentHtml: `
          <p style="color: #e2e8f0 !important;">您是否有這樣的經驗：早上起床發現脖子僵硬，像是「落枕」一樣動彈不得？或是開車要倒車入庫時，頭一轉就覺得頸後深處傳來一陣刺痛？甚至只是抬頭想點個眼藥水，脖子就痛到受不了？</p>
                <br>
          <p style="color: #e2e8f0 !important;">這些症狀的元兇，往往不是大家熟知的骨刺或椎間盤突出，而是頸椎的穩定器——<strong>「小面關節」</strong>發炎了。這是現代「低頭族」最常見的頸痛原因之一。宸新復健科透過X光與高解析超音波診斷，能精準分辨疼痛來源，並提供<strong>超音波導引增生注射</strong>，直接修復鬆弛的關節囊，從根本解決反覆落枕與頸痛。</p>
            
          <div style="background-color: #fffbeb; border: 2px solid #fbbf24; border-radius: 1rem; padding: 1.5rem; margin: 2rem 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
              <h2 style="color: #b45309 !important; margin-top: 0; font-weight: bold; border-bottom: 2px solid #fcd34d; padding-bottom: 0.5rem; display: flex; align-items: center;">
                  📢 什麼是小面關節？脖子裡的「指關節」
              </h2>
              
              <p style="font-size: 1.1rem; color: #78350f !important;">我們的頸椎每一節的後方，左右各有一個指甲般大小的關節，這就是小面關節。它們上下相連，就像屋頂的瓦片一樣。</p>
              
              <ul style="list-style: none; padding: 0; margin-top: 1rem; color: #92400e !important;">
                  <li style="margin-bottom: 1rem; display: flex; align-items: start;">
                      <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">1</span>
                      <div style="color: #92400e !important;">
                          <strong style="color: #dc2626 !important;">功能：</strong> 
                          限制頸椎過度旋轉與滑動，提供穩定性。就像火車的軌道一樣，引導我們抬頭、低頭與轉頭的動作。
                      </div>
                  </li>
                  <li style="margin-bottom: 1rem; display: flex; align-items: start;">
                      <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">2</span>
                      <div style="color: #92400e !important;">
                          <strong style="color: #0891b2 !important;">為什麼會發炎？</strong> 
                          當我們長期低頭滑手機（頸椎受力增加），或是突然的甩鞭式外傷（車禍），包覆在關節外的「關節囊」會受傷鬆弛，導致軟骨磨損、發炎腫脹，甚至卡住，這就是為什麼會突然轉不動的原因。
                      </div>
                  </li>
                  <li style="margin-bottom: 0; display: flex; align-items: start;">
                      <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">3</span>
                      <div style="color: #92400e !important;">
                          <strong style="color: #dc2626 !important;">轉移痛：</strong> 
                          小面關節的神經非常豐富。有趣的是，痛點通常不只在脖子，還會往下傳到<strong>肩胛骨內側</strong>，往上傳到<strong>後腦勺</strong>。這常被誤診為膏肓痛或頭痛。
                      </div>
                  </li>
              </ul>
          </div>
           <p><img src="/images/diseases/spine-hip/cfacet/b.jpg" alt="小面關節結構圖"></p>
          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
      
          <h3 style="color: #f8fafc !important;">🔍 超級比一比：是關節、神經還是肌肉痛？</h3>
          <p style="color: #e2e8f0 !important;">這是患者最常搞混的三種病。治療方向完全不同，必須精準區分：</p>
          
          <div style="overflow-x: auto;">
              <table style="width: 100%; border-collapse: collapse; margin-top: 1rem; color: #e2e8f0; table-layout: fixed;">
                  <thead>
                      <tr style="background-color: #1e293b;">
                          <th style="padding: 1rem; text-align: left; border-bottom: 2px solid #334155; width: 16%; white-space: nowrap;">比較項目</th>
                          <th style="padding: 1rem; text-align: left; border-bottom: 2px solid #334155; color: #22d3ee; width: 28%;">小面關節炎</th>
                          <th style="padding: 1rem; text-align: left; border-bottom: 2px solid #334155; width: 28%;">椎間盤突出</th>
                          <th style="padding: 1rem; text-align: left; border-bottom: 2px solid #334155; width: 28%;">肌肉筋膜疼痛</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td style="padding: 1rem; border-bottom: 1px solid #334155; font-weight: bold;">最痛動作</td>
                          <td style="padding: 1rem; border-bottom: 1px solid #334155; font-weight: bold; color: #22d3ee;">抬頭、後仰、轉頭</td>
                          <td style="padding: 1rem; border-bottom: 1px solid #334155;">低頭、縮下巴</td>
                          <td style="padding: 1rem; border-bottom: 1px solid #334155;">特定肌肉拉扯時</td>
                      </tr>
                      <tr>
                          <td style="padding: 1rem; border-bottom: 1px solid #334155; font-weight: bold;">疼痛範圍</td>
                          <td style="padding: 1rem; border-bottom: 1px solid #334155;">後頸深處、肩胛骨</td>
                          <td style="padding: 1rem; border-bottom: 1px solid #334155;">沿著手臂像「電流」</td>
                          <td style="padding: 1rem; border-bottom: 1px solid #334155;">肩頸大範圍痠痛</td>
                      </tr>
                      <tr>
                          <td style="padding: 1rem; border-bottom: 1px solid #334155; font-weight: bold;">手部麻木</td>
                          <td style="padding: 1rem; border-bottom: 1px solid #334155;"><strong>極少見</strong> (通常不過手肘)</td>
                          <td style="padding: 1rem; border-bottom: 1px solid #334155;"><strong>常見</strong> (手指會麻)</td>
                          <td style="padding: 1rem; border-bottom: 1px solid #334155;">無</td>
                      </tr>
                      <tr>
                          <td style="padding: 1rem; border-bottom: 1px solid #334155; font-weight: bold;">晨間僵硬</td>
                          <td style="padding: 1rem; border-bottom: 1px solid #334155;"><strong>明顯</strong> (越睡越痛)</td>
                          <td style="padding: 1rem; border-bottom: 1px solid #334155;">較不明顯</td>
                          <td style="padding: 1rem; border-bottom: 1px solid #334155;">有時有</td>
                      </tr>
                  </tbody>
              </table>
          </div>
      
          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
      
          <h3 style="color: #f8fafc !important;">💉 治療策略：精準修復，不再反覆發作</h3>
          <p style="color: #e2e8f0 !important;">小面關節炎如果只吃藥、熱敷，往往只能暫時緩解，因為鬆弛的關節囊沒有修復，下次抬頭還是會痛。我們建議採取階梯式治療：</p>
      
          <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
              <h4 style="margin-top: 0; color: #0e7490 !important;">1. 精準修復：超音波導引<a href="/treatments/prp" class="text-cyan-400 hover:underline">增生療法</a>🔍️</h4>
              <p style="margin-bottom: 0; color: #334155 !important;">
                  <strong>這是治療的關鍵！</strong> 由於小面關節非常微小（僅指甲大），且旁邊就是重要的神經血管，<strong>盲打（不看影像直接打）風險極高且效果不佳</strong>。
                  <br><br>
                  在宸新，醫師會使用<strong>高解析超音波</strong>，清晰呈現關節位置，將高濃度葡萄糖或 PRP (自體生長因子) 精準注入受損的<strong>關節囊與周邊韌帶</strong>。
                  <br>
                  <strong>原理：</strong> 刺激組織產生輕微發炎反應，啟動修復機制，讓鬆弛的關節囊重新變得強韌緊實，如同幫頸椎「鎖緊螺絲」，從根本解決不穩定的問題。
              </p>
          </div>
      
          <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
              <h4 style="margin-top: 0; color: #0e7490 !important;">2. 配套治療：<a href="/treatments/manual" class="text-cyan-400 hover:underline">徒手運動治療</a>🔍️與<a href="/treatments/high-intensity-laser" class="text-cyan-400 hover:underline">高能量雷射 (HILT)</a>🔍️</h4>
              <p style="margin-bottom: 0; color: #334155 !important;">
                  <strong>徒手治療 (Manual Therapy)：</strong> 當關節「卡住 (Lock)」時，治療師會運用關節鬆動術 (Mobilization)，溫和地將卡住的關節打開，恢復活動度。<br>
                  <strong>高能量雷射 (HILT)：</strong> 針對害怕打針的患者，高能量雷射能深層穿透至關節處，快速消除滑膜發炎腫脹，達到無痛止痛的效果。
              </p>
          </div>
      
          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
      

    <h3 style="color: #f8fafc !important;">🧘‍♂️ 醫師教你做：進階頸椎保養四招</h3>

    <p style="color: #e2e8f0 !important;">小面關節最怕「頭前傾（烏龜頸）」，這會讓關節壓力暴增。請每天勤做以下運動：</p>

    <div style="margin-bottom: 2rem;">
        <h3 style="color: #22d3ee !important;">1. 縮下巴運動</h3>
        <p style="color: #e2e8f0 !important;">
            1. 眼睛平視前方，手指輕推下巴。<br>
            2. 頭部<strong>水平向後</strong>平移（擠出雙下巴的感覺），感覺後頸部被拉直。<br>
            3. 停留 5 秒，放鬆。重複 10 次。<br>
            <strong>注意：</strong> 是平移，不是低頭！這能打開後方的小面關節，釋放壓力。
        </p>
    </div>


    <div style="margin-bottom: 2rem;">
        <h3 style="color: #22d3ee !important;">2. 毛巾輔助旋轉 - 落枕救星</h3>
        <p style="color: #e2e8f0 !important;">
            當脖子轉動會痛或卡住時，這招非常有效。
            <br>
            1. 將毛巾掛在脖子後方，雙手交叉抓住毛巾兩端。<br>
            2. 若要向<strong>右轉</strong>：右手抓毛巾下端往下拉穩，左手抓毛巾上端<strong>沿著臉頰顴骨</strong>將頭帶往右邊轉。<br>
            3. 動作要輕柔，利用毛巾的力量帶動頸椎旋轉，而非脖子自己用力。重複 6-10 次。<br>
            <strong>原理：</strong> 毛巾提供了一個滑動的支點，能幫助卡住的小面關節順暢滑開。
        </p>
    </div>
    
    <div style="margin-bottom: 2rem;">
        <h3 style="color: #22d3ee !important;">3. 提肩胛肌伸展 (聞腋下運動)</h3>
        <p style="color: #e2e8f0 !important;">
            這條肌肉連接著頸椎與肩胛骨，緊繃時會把頸椎向下拉扯，增加關節壓力。
            <br>
            1. 坐姿，右手抓住椅子邊緣固定肩膀（不聳肩）。<br>
            2. 頭轉向左邊 45 度，低頭看像<strong>左邊腋下</strong>。<br>
            3. 左手輕壓後腦勺，感覺右後頸被拉開。停留 15 秒，重複 3 次。<br>
            <strong>注意：</strong> 動作是「低頭」，剛好可以打開後方的小面關節，非常適合此症狀。
        </p>
    </div>

    <div style="margin-bottom: 2rem;">
        <h3 style="color: #22d3ee !important;">4. 胸椎開展運動 </h3>
        <p style="color: #e2e8f0 !important;">
            許多人的頸痛源自於「駝背」。胸椎太僵硬，脖子就被迫要代償做出更多角度。
            <br>
            1. 找一張有靠背的椅子，坐到底。<br>
            2. 雙手抱頭，將上背部靠在椅背上緣。<br>
            3. 吐氣時，上半身慢慢向後仰，伸展胸椎（感覺胸口打開）。<br>
            4. <strong>關鍵：</strong> 下巴要微收，不要讓頭過度後仰，我們要動的是「背」不是「脖子」。
        </p>
    </div>
<p><img src="/images/diseases/spine-hip/cfacet/c.jpg" alt="小面關節結構圖"></p>
    
  
      
          <div style="background-color: #ecfdf5; padding: 2rem; border-radius: 1rem; margin-top: 3rem; text-align: center;">
              <h3 style="color: #047857 !important; margin-top: 0;">👨‍⚕️ 告別「卡脖子」，找回靈活視角！</h3>
              <p style="color: #334155 !important; margin-bottom: 1.5rem;">頸椎小面關節炎雖然不是大病，但痛起來卻讓人坐立難安。只要精準分辨病因，透過超音波導引注射修復鬆弛的關節，再搭配正確的姿勢矯正，您絕對能擺脫反覆落枕的困擾。宸新復健科，專業守護您的頸椎健康！</p>
              <p style="font-weight: bold; color: #059669 !important;">抬頭脖子就刺痛？立即預約頸椎檢查！</p>
          </div>
        `,
        symptoms: [
          '抬頭、後仰或轉頭時頸後深處刺痛',
          '早晨起床脖子僵硬（反覆落枕）',
          '疼痛會傳導至肩胛骨內側或後腦勺',
          '按壓頸椎旁開 1-2 公分處有明顯壓痛點',
        ],
        treatments: [
          '止痛藥復健治療',
          '<a href="/treatments/prp" class="text-cyan-400 hover:underline">超音波導引增生注射 (PRP/葡萄糖)</a>🔍️',
          '<a href="/treatments/manual" class="text-cyan-400 hover:underline">頸椎關節鬆動術 (徒手治療)</a>🔍️',
          '<a href="/treatments/laser" class="text-cyan-400 hover:underline">高能量雷射治療 (HILT)</a>🔍️',
        ],
        seoKeywords: [
          '頸椎小面關節炎',
          '落枕',
          '脖子痛',
          '抬頭痛',
          '超音波導引注射',
          '增生療法',
          'PRP注射'
        ],
        seoDescription: '頸椎小面關節炎造成反覆落枕與抬頭疼痛。宸新復健科提供高解析超音波診斷，區分椎間盤突出，並施行精準導引增生注射，修復頸椎關節。',
        images: [
          { src: '/images/diseases/spine-hip/cfacet/a.jpg', alt: '頸椎小面關節炎示意圖' 
          }
        ]
      },

      {
        id: 'facet-joint-syndrome',
        slug: 'facet-joint-syndrome',
        lastModified: '2026-01-22',
        title: '腰椎小面關節炎',
        description: '腰痠背痛不一定是肌肉痛或椎間盤突出！往後仰就痛？早上起床腰桿僵硬？這可能是脊椎後方的「小面關節」在抗議。深入解析小面關節炎特徵、與坐骨神經痛的差異，以及超音波導引增生注射如何精準修復。',
        contentHtml: `
          <p style="color: #e2e8f0 !important;">您是否有這樣的經驗：早上起床時腰部僵硬挺不直，要活動個半小時才比較舒服？久坐後站起來的那一瞬間，腰部深處傳來一陣酸楚？或是當您試著<strong>「往後仰」</strong>伸懶腰，或者轉頭看後方時，脊椎某個點會產生尖銳的疼痛感？</p>
          <br>
          <p style="color: #e2e8f0 !important;">許多人以為這只是單純的肌肉拉傷，或是擔心自己是不是椎間盤突出。但如果您的疼痛集中在脊椎兩側深處，且<strong>「後仰比前彎更痛」</strong>，那麼兇手很可能不是椎間盤，而是脊椎後方的穩定器——<strong>「小面關節」</strong>發炎了。在宸新復健科，我們透過高解析超音波精準定位，分辨疼痛根源，並提供增生療法注射與體外震波修復受損的關節囊，搭配徒手運動治療強化脊椎，從根本解決脊椎退化問題。</p>
        
          <div style="background-color: #fffbeb; border: 2px solid #fbbf24; border-radius: 1rem; padding: 1.5rem; margin: 2rem 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
              <h2 style="color: #b45309 !important; margin-top: 0; font-weight: bold; border-bottom: 2px solid #fcd34d; padding-bottom: 0.5rem; display: flex; align-items: center;">
                  📢 什麼是小面關節？脊椎後方的「門鉸鏈」
              </h2>
              
              <p style="font-size: 1.1rem; color: #78350f !important;">我們的脊椎就像一節一節疊起來的積木。為了讓這些積木能穩定活動，每一節脊椎後方左右兩側，都各有一個像手指關節般大小的構造，這就是「小面關節」。</p>
              
              <ul style="list-style: none; padding: 0; margin-top: 1rem; color: #92400e !important;">
                  <li style="margin-bottom: 1rem; display: flex; align-items: start;">
                      <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">1</span>
                      <div style="color: #92400e !important;">
                          <strong style="color: #dc2626 !important;">功能：引導動作與承重</strong> 
                          如果說前方的「椎間盤」是避震器，後方的「小面關節」就是控制方向的門鉸鏈。它們負責引導脊椎進行後仰與旋轉的動作，並承擔約 15-20% 的脊椎壓力。
                      </div>
                  </li>
                  <li style="margin-bottom: 1rem; display: flex; align-items: start;">
                      <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">2</span>
                      <div style="color: #92400e !important;">
                          <strong style="color: #0891b2 !important;">退化與發炎：</strong> 
                          隨著年齡增長、長期姿勢不良（如駝背、烏龜頸）或反覆扭傷，包覆在關節外面的「關節囊韌帶」會鬆弛，導致關節不穩定、軟骨磨損，進而引發滑膜發炎腫脹。這就是所謂的脊椎退化性關節炎。
                      </div>
                  </li>
                  <li style="margin-bottom: 0; display: flex; align-items: start;">
                      <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">3</span>
                      <div style="color: #92400e !important;">
                          <strong style="color: #dc2626 !important;">惡性循環：</strong> 
                          當前方椎間盤退化變扁時，後方的小面關節壓力就會暴增，加速磨損。反之，小面關節不穩定也會導致椎間盤更容易突出。兩者互為因果。
                      </div>
                  </li>
              </ul>
          </div>
      <p><img src="/images/diseases/spine-hip/facet/b.jpg" alt="小面關節結構圖"></p>
          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
      
          <h3 style="color: #f8fafc !important;">🔍 超級比一比：如何分辨是肌肉、椎間盤還是小面關節痛？</h3>
<p style="color: #e2e8f0 !important;">這三者是最常混淆的背痛原因，但疼痛特徵其實大不相同：</p>

<div style="overflow-x: auto;">
    <table style="width: 100%; border-collapse: collapse; margin-top: 1rem; color: #e2e8f0; table-layout: fixed;">
        <thead>
            <tr style="background-color: #1e293b;">
                <th style="padding: 1rem; text-align: left; border-bottom: 2px solid #334155; width: 16%; white-space: nowrap;">比較項目</th>
                <th style="padding: 1rem; text-align: left; border-bottom: 2px solid #334155; color: #22d3ee; width: 28%;">小面關節炎</th>
                <th style="padding: 1rem; text-align: left; border-bottom: 2px solid #334155; width: 28%;">椎間盤突出</th>
                <th style="padding: 1rem; text-align: left; border-bottom: 2px solid #334155; width: 28%;">肌肉筋膜疼痛</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 1rem; border-bottom: 1px solid #334155; font-weight: bold;">最痛動作</td>
                <td style="padding: 1rem; border-bottom: 1px solid #334155; font-weight: bold; color: #22d3ee;">往後仰、旋轉</td>
                <td style="padding: 1rem; border-bottom: 1px solid #334155;">往前彎腰、久坐</td>
                <td style="padding: 1rem; border-bottom: 1px solid #334155;">特定姿勢拉扯、出力時</td>
            </tr>
            <tr>
                <td style="padding: 1rem; border-bottom: 1px solid #334155; font-weight: bold;">疼痛範圍</td>
                <td style="padding: 1rem; border-bottom: 1px solid #334155;">脊椎兩側深處範圍較局限</td>
                <td style="padding: 1rem; border-bottom: 1px solid #334155;">脊椎中央深處</td>
                <td style="padding: 1rem; border-bottom: 1px solid #334155;">大範圍淺層痠痛</td>
            </tr>
            <tr>
                <td style="padding: 1rem; border-bottom: 1px solid #334155; font-weight: bold;">傳導痛</td>
                <td style="padding: 1rem; border-bottom: 1px solid #334155;"><strong>通常不過膝</strong> (傳到臀部、大腿後側)</td>
                <td style="padding: 1rem; border-bottom: 1px solid #334155;"><strong>常超過膝</strong> (典型的坐骨神經痛，傳到小腿腳底)</td>
                <td style="padding: 1rem; border-bottom: 1px solid #334155;">無明顯神經傳導痛</td>
            </tr>
            <tr>
                <td style="padding: 1rem; border-bottom: 1px solid #334155; font-weight: bold;">晨間僵硬</td>
                <td style="padding: 1rem; border-bottom: 1px solid #334155;"><strong>非常明顯</strong>，活動後改善</td>
                <td style="padding: 1rem; border-bottom: 1px solid #334155;">較不明顯</td>
                <td style="padding: 1rem; border-bottom: 1px solid #334155;">有時有，熱敷後改善</td>
            </tr>
            <tr>
                <td style="padding: 1rem; border-bottom: 1px solid #334155; font-weight: bold;">壓痛點</td>
                <td style="padding: 1rem; border-bottom: 1px solid #334155;">脊椎旁開 2-3 公分深壓痛</td>
                <td style="padding: 1rem; border-bottom: 1px solid #334155;">棘突正中央深壓痛</td>
                <td style="padding: 1rem; border-bottom: 1px solid #334155;">肌肉上的激痛點</td>
            </tr>
        </tbody>
    </table>
</div>

          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
      
          <h3 style="color: #f8fafc !important;">🛡️ 宸新精準治療策略：修復不穩定的關節</h3>
          <p style="color: #e2e8f0 !important;">小面關節炎的根源往往是「關節囊韌帶鬆弛」導致的關節不穩定。因此，治療不能只靠止痛藥，重點在於<strong>「修復韌帶，恢復穩定」</strong>。</p>

      
          <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
              <h4 style="margin-top: 0; color: #0e7490 !important;">1. 精準診斷：超音波影像及X光檢查</h4>
              <p style="margin-bottom: 0; color: #334155 !important;">
                  X 光只能看到骨頭有沒有長骨刺，但看不到發炎的滑膜與腫脹的關節囊。我們使用高解析度骨骼肌肉超音波，能直接觀察小面關節是否有積水、滑膜增生，並確認壓痛點是否與影像吻合，排除其他問題。
              </p>
          </div>
      
          <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
              <h4 style="margin-top: 0; color: #0e7490 !important;">2. 核心治療💉：超音波導引<a href="/treatments/prp" class="text-cyan-400 hover:underline">PRP 增生療法</a>🔍️</h4>
              <p style="margin-bottom: 0; color: #334155 !important;">
                  這是治療小面關節炎最關鍵的一環。
                  <br>
                  <strong>為什麼要打針？</strong> 因為關節囊韌帶血液循環差，自我修復能力弱。
                  <br>
                  <strong>怎麼打？</strong> 我們在超音波即時導引下，清楚看到細小的關節縫隙，將高濃度葡萄糖水或自體血小板 (PRP) 精準注入關節囊周圍韌帶。
                  <br>
                  <strong>效果：</strong> 這些增生劑能啟動身體的修復機制，刺激膠原蛋白新生，讓鬆弛的關節囊重新變得強韌緊實，恢復關節穩定度，疼痛自然消失。
              </p>
          </div>
      
          <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
              <h4 style="margin-top: 0; color: #0e7490 !important;">3. 功能重建：<a href="/treatments/manual" class="text-cyan-400 hover:underline">徒手治療與核心訓練</a>🔍️</h4>
              <p style="margin-bottom: 0; color: #334155 !important;">
                  在疼痛緩解後，必須解決造成關節退化的根本原因——姿勢不良與核心無力。
                  <ul style="margin-top: 0.5rem; color: #334155 !important;">
                      <li><strong>徒手治療：</strong> 物理治療師運用關節鬆動術，改善關節活動度，並放鬆周邊緊繃的肌肉。</li>
                      <li><strong>核心肌群訓練：</strong> 強化深層核心肌肉（如多裂肌、腹橫肌），它們是脊椎的天然馬甲，能分擔小面關節的壓力。</li>
                  </ul>
              </p>
          </div>
      
          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">


    <h3 style="color: #f8fafc !important;">🧘‍♂️ 醫師教你做：打開卡住的關節</h3>
    <p style="color: #e2e8f0 !important;">小面關節炎的特性是<strong>「喜歡彎腰，討厭後仰」</strong>。因此復健的重點在於「屈曲運動 (Flexion Exercise)」與「核心穩定」，把擠壓的關節打開，釋放壓力：</p>

    <div style="margin-bottom: 2rem;">
        <h4 style="color: #22d3ee !important;">1. 雙膝抱胸運動</h4>
        <p style="color: #e2e8f0 !important;">平躺在床上，雙手抱住兩腳膝蓋，慢慢將大腿拉向胸口，直到感覺下背部有被拉開的微痠感（不會痛的範圍）。停留 15-30 秒，重複 5 次。這能直接擴大小面關節的間隙，緩解晨間僵硬。</p>
    </div>
    

    <div style="margin-bottom: 2rem;">
        <h4 style="color: #22d3ee !important;">2. 貓式伸展 - 著重拱背</h4>
        <p style="color: #e2e8f0 !important;">採四足跪姿。吐氣時腹部用力收緊，背部像生氣的貓一樣<strong>盡量拱高</strong>，視線看向肚臍。這個動作能完全打開脊椎後方的關節。<strong>注意：吸氣回正即可，盡量不要做出「下腰（牛式）」的動作，以免過度擠壓關節造成疼痛。</strong></p>
    </div>
    
    <div style="margin-bottom: 2rem;">
        <h4 style="color: #22d3ee !important;">3. 骨盆後傾運動 )</h4>
        <p style="color: #e2e8f0 !important;">平躺，雙膝彎曲踩地。想像肚臍要用力往下貼到背後的脊椎，收縮腹肌，讓您的腰部<strong>「完全貼平地面」</strong>（消除腰椎原本懸空的弧度）。維持 10 秒後放鬆。這能啟動深層核心，減少腰椎過度前凸帶來的關節壓力。</p>
    </div>
      <p><img src="/images/diseases/spine-hip/facet/c.jpg" alt="小面關節居家運動"></p>
      
    <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
          <div style="background-color: #ecfdf5; padding: 2rem; border-radius: 1rem; margin-top: 3rem; text-align: center;">
              <h3 style="color: #047857 !important; margin-top: 0;">👨‍⚕️ 別讓「後仰痛」困擾您的生活！</h3>
              <p style="color: #334155 !important; margin-bottom: 1.5rem;">小面關節炎常被誤認為普通的腰痠背痛而被忽略，導致脊椎持續退化。如果您發現自己後仰特別痛、早上起床特別僵硬，請務必尋求專業評估。透過超音波精準診斷與增生注射修復韌帶，搭配物理治療強化核心，我們能協助您找回穩定的脊椎，重拾靈活的身軀！</p>
              <p style="font-weight: bold; color: #059669 !important;">腰背後仰疼痛？懷疑脊椎關節退化？立即預約脊椎評估！</p>
          </div>
        `,
        symptoms: [
          '往後仰或旋轉時背痛加劇',
          '晨間起床時脊椎僵硬明顯，活動後改善',
          '疼痛位置在脊椎兩側深處，按壓會痛',
          '久站或維持同一姿勢過久會變痛'
        ],
        treatments: [
          '止痛藥物及復健',
          '<a href="/treatments/prp" class="text-cyan-400 hover:underline">PRP 增生療法</a>🔍️',
          '<a href="/treatments/manual" class="text-cyan-400 hover:underline">關節鬆動術與核心肌群訓練</a>🔍️',
          '<a href="/treatments/shockwave" class="text-cyan-400 hover:underline">體外震波治療(ESWT)</a>🔍️'
        ],
        seoKeywords: [
          '小面關節炎',
          'Facet Joint Syndrome',
          '脊椎退化',
          '後仰痛',
          '晨間僵硬',
          '閃到腰',
          '增生療法注射',
          'PRP注射',
          '超音波導引'
        ],
        seoDescription: '小面關節炎是造成慢性背痛與頸痛的常見原因，特徵是後仰疼痛與晨間僵硬。宸新復健科提供超音波導引增生注射(PRP)精準修復受損韌帶，並比較其與椎間盤突出之差異。',
        images: [
          { src: '/images/diseases/spine-hip/facet/a.jpg', alt: '小面關節炎示意圖' 
          }
        ]
      }, 
      
 {
        id: 'muscle-tmd',
        slug: 'muscle-tmd',
        title: '顳顎關節症候群',
        lastModified: '2026-01-21',
        description: '臉頰痠痛、頭痛、脖子緊？這不只是壓力大，而是顳顎關節肌肉發炎！深入解析「頸部與下巴」的連動關係，以及徒手治療與高能量雷射如何放鬆深層筋膜。',
        contentHtml: `
          <p style="color: #e2e8f0 !important;">您是否有這樣的經驗：早晨起床覺得兩側臉頰痠軟無力，好像整晚都在咬牙切齒？或是工作壓力大時，太陽穴兩側開始抽痛，連帶脖子也覺得緊繃僵硬？甚至有時候張開嘴巴，覺得臉頰肌肉「卡卡的」拉不開？</p>
                <br>
          <p style="color: #e2e8f0 !important;">這些症狀往往被誤認為是單純的偏頭痛或肩頸痠痛，但其實這很可能是<strong>「肌肉型顳顎關節症候群」</strong>。不同於關節骨頭的問題，這類型的疼痛源自於<strong>「咬合肌群」</strong>與<strong>「頸部肌群」</strong>的過度緊繃</strong>。宸新復健科透過整合性的治療方案 — 從藥物控制、物理復健，到進階的徒手放鬆與高能量雷射，協助您解開這些打結的肌肉，找回放鬆的笑容。</p>
      
      
          <div style="background-color: #fffbeb; border: 2px solid #fbbf24; border-radius: 1rem; padding: 1.5rem; margin: 2rem 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
              <h2 style="color: #b45309 !important; margin-top: 0; font-weight: bold; border-bottom: 2px solid #fcd34d; padding-bottom: 0.5rem; display: flex; align-items: center;">
                  📢 為什麼臉頰與脖子會一起痛？
              </h2>
              
              <p style="font-size: 1.1rem; color: #78350f !important;">顳顎關節（下巴關節）是全身最忙碌的關節，我們說話、吞嚥、咀嚼都要靠它。控制這個關節的肌肉群，與控制頸部的肌肉群有著密不可分的<strong>「連動關係」</strong>。</p>
              
              <ul style="list-style: none; padding: 0; margin-top: 1rem; color: #92400e !important;">
                  <li style="margin-bottom: 1rem; display: flex; align-items: start;">
                      <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">1</span>
                      <div style="color: #92400e !important;">
                          <strong style="color: #dc2626 !important;">咬合肌群過勞：</strong> 
                          當我們因為壓力大不自覺<strong>咬緊牙關</strong>，或是夜間磨牙時，臉頰兩側的「嚼肌」與太陽穴的「顳肌」會長時間處於收縮狀態，導致肌肉缺氧、乳酸堆積，形成<strong>激痛點 </strong>，引發臉頰痛與頭痛。
                      </div>
                  </li>
                  <li style="margin-bottom: 1rem; display: flex; align-items: start;">
                      <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">2</span>
                      <div style="color: #92400e !important;">
                          <strong style="color: #0891b2 !important;">頸部肌肉的牽連：</strong> 
                          現代人常見的<strong>「烏龜頸」</strong>（頭部前傾），會強迫頸部肌肉（如胸鎖乳突肌、斜方肌）用力拉住頭部。研究發現，頸部肌肉緊繃會透過筋膜鏈直接拉扯下顎，導致嘴巴張不開或咬合位置改變。
                      </div>
                  </li>
                  <li style="margin-bottom: 0; display: flex; align-items: start;">
                      <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">3</span>
                      <div style="color: #92400e !important;">
                          <strong style="color: #0891b2 !important;">轉移痛 (Referred Pain)：</strong> 
                          這是一個很重要的概念！脖子痛可能會傳導到下巴，下巴痛也可能傳導到耳朵或太陽穴。所以治療顳顎關節，<strong>絕對不能只醫嘴巴，必須連脖子一起治療！</strong>
                      </div>
                  </li>
              </ul>
          </div>
      <p><img src="/images/diseases/spine-hip/tmd/b.jpg" alt="顳顎關節症候群肌肉圖"></p>

          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
      
          <h3 style="color: #f8fafc !important;">⚠️ 常見症狀：是不是肌肉在抗議？</h3>
          <p style="color: #e2e8f0 !important;">如果不確定自己是不是肌肉型問題，請檢視以下症狀：</p>
          <ul style="color: #e2e8f0 !important;">
              <li><strong>臉頰痠痛：</strong> 尤其是早上起床時，感覺臉頰兩側肉很痠。</li>
              <li><strong>太陽穴頭痛：</strong> 吃硬的東西時，太陽穴會有脹痛感（這是顳肌在痛）。</li>
              <li><strong>張口受限但無卡卡聲：</strong> 嘴巴張不大，感覺像是被肌肉「拉住」或是「緊緊的」，而不一定是關節卡住，有卡卡聲代表關節跑位了，建議搭配牙科治療。</li>
              <li><strong>肩頸僵硬：</strong> 伴隨明顯的脖子痛、肩膀緊，且當脖子放鬆時，牙齒咬合感覺比較輕鬆。</li>
          </ul>
      
          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
      
          <h3 style="color: #f8fafc !important;">🛡️ 宸新全方位治療策略</h3>
          <p style="color: #e2e8f0 !important;">針對肌肉筋膜型的顳顎障礙，單純吃藥往往治標不治本。我們採用<strong>「內外兼修」</strong>的治療策略：</p>
      
          <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
              <h4 style="margin-top: 0; color: #0e7490 !important;">1. 第一線：藥物與物理復健</h4>
              <p style="margin-bottom: 0; color: #334155 !important;">
                  <strong>藥物治療：</strong> 急性期我們會開立<strong>非類固醇消炎藥</strong>與<strong>肌肉鬆弛劑</strong>，幫助過度亢奮的咀嚼肌「強制關機」休息。<br>
                  <strong>物理復健：</strong> 利用雷射或是熱療增加臉部血液循環，代謝堆積的乳酸；搭配經皮電刺激阻斷神經痛覺，緩解肌肉痙攣。
              </p>
          </div>
      
          <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
              <h4 style="margin-top: 0; color: #0e7490 !important;">2. 關鍵技術：<a href="/treatments/manual" class="text-cyan-400 hover:underline">徒手放鬆治療</a>🔍️</h4>
              <p style="margin-bottom: 0; color: #334155 !important;">
                  這是解決肌肉緊繃最直接的方法。物理治療師會針對特定的肌群進行放鬆：
                  <ul style="margin-top: 0.5rem; color: #334155 !important;">
                      <li><strong>口內放鬆術：</strong> 治療師戴上手套，直接伸入您的口腔內，按壓放鬆<strong>「內翼肌」</strong>與<strong>「外翼肌」</strong>。這些是藏在深層、從臉外面按不到的肌肉，往往是張口受限的主因。</li>
                      <li><strong>頸椎筋膜鬆動：</strong> 放鬆緊繃的胸鎖乳突肌與枕下肌群，解除「烏龜頸」對下巴的拉扯，從源頭阻斷轉移痛。</li>
                      <li><strong>顳顎關節鬆動：</strong> 透過手法輕柔地牽引關節，增加關節腔空間，減少壓力。</li>
                  </ul>
              </p>
          </div>
      
          <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
              <h4 style="margin-top: 0; color: #0e7490 !important;">3. <a href="/treatments/high-intensity-laser" class="text-cyan-400 hover:underline">高能量雷射 (HILT)</a>🔍️</h4>
              <p style="margin-bottom: 0; color: #334155 !important;">
                  如果徒手治療太痛，或是肌肉發炎嚴重，<strong>高能量雷射</strong>是最佳選擇。
                  <br>
                  <strong>深層穿透：</strong> 不同於一般熱敷只在表皮，高能量雷射能穿透至皮下數公分，直達深層的咀嚼肌與頸椎小面關節。
                  <br>
                  <strong>立即放鬆：</strong> 透過光生物調節作用，能快速促進血液循環，帶走發炎物質。治療時會感受到<strong>溫暖舒適的熱感</strong>，許多患者在治療過程中就會感覺緊繃的臉頰瞬間鬆開，張口幅度立即改善。
              </p>
          </div>
      
      <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
        <h4 style="margin-top: 0; color: #0e7490 !important;">4. 進階醫療：跨專科轉介與合作</h4>
        <p style="margin-bottom: 0; color: #334155 !important;">
            若在保守治療後狀況仍惡化，出現<strong>張口幅度明顯變小</strong>（張口受限）、或關節內部開始出現<strong>卡卡聲與彈響</strong>，這代表問題可能已經從肌肉層面延伸到關節結構。
            <br><br>
            宸新復健科擁有<strong>長期配合的口腔外科專科醫師</strong>，能協助您快速轉介並安排最合適的進階治療，包括：
            <ul style="margin-top: 0.5rem; color: #334155 !important;">
                <li><strong>客製化咬合板：</strong> 減少夜間磨牙對關節的破壞，保護關節盤。</li>
                <li><strong>關節腔注射：</strong> 施打玻尿酸潤滑關節，或 PRP 修復關節盤。</li>
                <li><strong>關節鏡手術：</strong> 針對嚴重沾黏或結構破壞的微創手術選擇。</li>
            </ul>
        </p>
      </div>
  <p><img src="/images/diseases/spine-hip/tmd/c.jpg" alt="顳顎關節症候群治療"></p>

          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
      
          <h3 style="color: #f8fafc !important;">🧘‍♂️ 醫師教你做：居家放鬆小撇步</h3>
          <p style="color: #e2e8f0 !important;">回家後，請保持良好的習慣，避免肌肉再次緊繃：</p>
      
          <div style="margin-bottom: 2rem;">
              <h4 style="color: #22d3ee !important;">1. "N" 字休息法</h4>
              <p style="color: #e2e8f0 !important;">發出 "N" 的音，將舌尖輕輕頂在上排門牙後方的牙肉上。保持這個姿勢，牙齒微微分開（不要咬合）。這是下顎肌肉最放鬆的姿勢，請隨時提醒自己保持在這個狀態。</p>
          </div>
      
          <div style="margin-bottom: 2rem;">
              <h4 style="color: #22d3ee !important;">2. 溫熱敷按摩</h4>
              <p style="color: #e2e8f0 !important;">睡前使用熱毛巾敷在臉頰兩側與後頸部，每次 10-15 分鐘。熱敷後輕輕畫圈按摩臉頰肌肉，能有效減少夜間磨牙的機率。</p>
          </div>
      
          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
      
          <div style="background-color: #ecfdf5; padding: 2rem; border-radius: 1rem; margin-top: 3rem; text-align: center;">
              <h3 style="color: #047857 !important; margin-top: 0;">👨‍⚕️ 放鬆肌肉，找回張口的自在！</h3>
              <p style="color: #334155 !important; margin-bottom: 1.5rem;">大多數的顳顎關節疼痛，源頭都是那條緊繃的肌肉神經。不需要急著擔心骨頭壞掉，透過藥物控制，搭配專業的徒手治療鬆解沾黏，以及高能量雷射的深層修復，我們能幫您卸下臉部與頸部的重擔。宸新復健科，讓您輕鬆開口，不再咬牙切齒！</p>
              <p style="font-weight: bold; color: #059669 !important;">臉頰痠痛、頭痛不已？立即預約肌肉放鬆評估！</p>
          </div>
        `,
        symptoms: [
          '太陽穴周圍脹痛或牙痛感',
          '嘴巴張不開，感覺肌肉緊繃拉住',
          '肩頸僵硬，尤其是後腦勺與頸部連接處',
          '壓力大或疲勞時症狀加劇'
        ],
        treatments: [
          '藥物治療及物理復健',
          '<a href="/treatments/manual" class="text-cyan-400 hover:underline">徒手口內放鬆/頸椎鬆動治療</a>🔍️',
          '<a href="/treatments/high-intensity-laser" class="text-cyan-400 hover:underline">高能量雷射 (HILT)</a>🔍️',
          '休息放鬆與姿勢矯正'
        ],
        seoKeywords: [
          '顳顎關節症候群',
          '肌肉型TMD',
          '臉頰痠痛',
          '徒手治療',
          '高能量雷射',
          '頸源性頭痛',
          '磨牙治療'
        ],
        seoDescription: '臉頰痠痛、張口困難？這可能是肌肉型顳顎關節症候群。宸新復健科提供徒手治療放鬆深層筋膜，搭配高能量雷射快速止痛，解決緊繃問題。',
        images: [
          { src: '/images/diseases/spine-hip/tmd/a.jpg', alt: '顳顎關節症候群' 
          }
        ]

      },

      {
        id: 'hip-osteoarthritis',
        slug: 'hip-osteoarthritis',
        title: '退化性髖關節炎',
        lastModified: '2026-01-21',
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
    lastModified: '2026-01-21',
    description: '肩膀相關疾病',
    image: '/images/diseases/b.jpg',
    seoKeywords: ['新竹五十肩治療', '肩膀痛', '旋轉肌破裂', '鈣化性肌腱炎', '新竹物理治療'],
    seoDescription: '肩膀痛手舉不起來？五十肩與旋轉肌撕裂治療推薦。免開刀肩關節擴張術與PRP修復，解決夜間痛醒與活動受限問題。',
    diseases: [
      {
        id: 'rotator-cuff-tear',
        slug: 'rotator-cuff-tear',
        title: '旋轉肌撕裂',
        lastModified: '2026-01-21',
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
          lastModified: '2026-01-21',
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
          lastModified: '2026-01-21',
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
    lastModified: '2026-01-21',
    image: '/images/diseases/c.jpg',
    seoKeywords: ['網球肘治療', '高爾夫球肘', '手肘痛', '新竹震波推薦'],
    seoDescription: '手肘外側痛擰毛巾沒力？專治網球肘與高爾夫球肘。引進瑞士聚焦式震波治療，有效修復肌腱發炎，恢復手臂力量。',
    diseases: [
     {
        id: 'tennis-elbow',
        slug: 'tennis-elbow',
        title: '網球肘 (肱骨外上髁炎)',
        lastModified: '2026-01-21',
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
          lastModified: '2026-01-21',
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
    lastModified: '2026-01-21',
    description: '手部相關疾病',
    image: '/images/diseases/d.jpg',
    seoKeywords: ['板機指微創手術', '媽媽手治療', '腕隧道症候群', '手麻', '新竹手外科'],
    seoDescription: '手指卡住或手麻刺痛？專治板機指、媽媽手與腕隧道症候群。提供超音波導引注射與微創手術諮詢，快速緩解手部疼痛。',
    diseases: [
{
        id: 'tfcc-injury',
        slug: 'tfcc-injury',
        title: '三角纖維軟骨損傷 (TFCC)',
        lastModified: '2026-01-21',
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
        lastModified: '2026-01-21',
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
          lastModified: '2026-01-21',
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
          lastModified: '2026-01-21',
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
    lastModified: '2026-01-21',
    description: '膝蓋相關疾病',
    image: '/images/diseases/e.jpg',
    seoKeywords: ['退化性關節炎治療', '膝蓋痛打針', 'PRP膝蓋', '半月板破裂', '新竹骨科膝蓋'],
    seoDescription: '膝蓋退化上下樓梯痛？新竹退化性膝關節炎治療首選。提供玻尿酸潤滑與PRP軟骨修復療程。免開刀改善半月板受損與十字韌帶損傷。',
    diseases: [
     {
          id: 'knee-osteoarthritis',
          slug: 'knee-osteoarthritis',
          title: '退化性膝關節炎',
          lastModified: '2026-01-21',
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

      },

{
        id: 'jumpers-knee',
        slug: 'jumpers-knee',
        title: '跳躍膝 (髕骨肌腱炎)',
        lastModified: '2026-01-21',
        description: '膝蓋下方痛到無法跳躍？下樓梯膝蓋軟腳？這不只是籃球員的專利！深入解析跳躍膝分級、超音波下的新生血管，以及震波治療與離心深蹲的修復全攻略。',
        contentHtml: `
          <p style="color: #e2e8f0 !important;">您是否有這樣的經驗：打完籃球或排球後，<strong>膝蓋骨正下方</strong>摸起來非常痛？或是長時間久坐看電影，站起來的那一瞬間膝蓋下方感到痠軟無力？</p>
                <br>
          <p style="color: #e2e8f0 !important;">這就是俗稱的<strong>「跳躍膝」</strong>，醫學正式名稱為<strong>髕骨肌腱炎 (Patellar Tendinitis)</strong>，或更精確地稱為<strong>髕骨肌腱病變</strong>。  </p>                
              <br><p style="color: #e2e8f0 !important;">它是所有跑跳運動員的夢魘(如籃球、羽球跟排球)，但其實經常爬山、深蹲姿勢錯誤的健身族群也常中招。宸新復健科透過高解析超音波偵測「新生血管」，搭配震波與 PRP 再生療法，協助您修復這條負責「起飛」的關鍵肌腱。</p>


      
          <div style="background-color: #fffbeb; border: 2px solid #fbbf24; border-radius: 1rem; padding: 1.5rem; margin: 2rem 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
              <h2 style="color: #b45309 !important; margin-top: 0; font-weight: bold; border-bottom: 2px solid #fcd34d; padding-bottom: 0.5rem; display: flex; align-items: center;">
                  📢 什麼是跳躍膝？肌腱的「過勞死」
              </h2>
              
              <p style="font-size: 1.1rem; color: #78350f !important;">髕骨肌腱連接髕骨（膝蓋骨）下緣與脛骨（小腿骨），是大腿股四頭肌力量傳導的最終路徑。當我們跳躍、落地或深蹲時，這條肌腱要承受體重 <strong>7-10 倍</strong>的拉力。</p>
              
              <ul style="list-style: none; padding: 0; margin-top: 1rem; color: #92400e !important;">
                  <li style="margin-bottom: 1rem; display: flex; align-items: start;">
                      <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">1</span>
                      <div style="color: #92400e !important;">
                          <strong style="color: #dc2626 !important;">微小撕裂 (Micro-tears)：</strong> 
                          當運動強度超過肌腱負荷，肌腱纖維會產生微小撕裂。年輕時睡一覺就好，但若修復速度趕不上破壞速度，累積的傷害就會爆發。
                      </div>
                  </li>
                  <li style="margin-bottom: 1rem; display: flex; align-items: start;">
                      <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">2</span>
                      <div style="color: #92400e !important;">
                          <strong style="color: #0891b2 !important;">不是發炎，是「退化」：</strong> 
                          這是最重要的觀念！慢性的跳躍膝，顯微鏡下看到的不是發炎細胞，而是<strong>膠原蛋白排列混亂、黏液樣變性</strong>。所以單純吃消炎藥（NSAIDs）往往無效，因為它不是發炎，而是結構壞掉了。
                      </div>
                  </li>
                  <li style="margin-bottom: 0; display: flex; align-items: start;">
                      <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">3</span>
                      <div style="color: #92400e !important;">
                          <strong style="color: #0891b2 !important;">新生血管 (Neovascularization)：</strong> 
                          為了修復受傷組織，身體會長出不正常的微血管與神經。這些神經非常敏感，就是導致您覺得「刺痛」的元兇。
                      </div>
                  </li>
              </ul>
          </div>
                       <p><img src="/images/diseases/knee/jump/b.jpg" alt="髕骨肌腱結構"></p>

          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
      
          <h3 style="color: #f8fafc !important;">⚠️ 分級制度：Blazina Classification</h3>
          <p style="color: #e2e8f0 !important;">您的膝蓋處於哪個階段？這決定了您是否需要停練：</p>
          <ul style="color: #e2e8f0 !important;">
              <li><strong>第一期：</strong> 運動中不痛，<strong>運動完才開始痛</strong>。不影響運動表現。（可繼續運動，但需冰敷與伸展）</li>
              <li><strong>第二期：</strong> 運動中會痛，熱身後減輕，運動後又變痛。表現稍微受影響。</li>
              <li><strong>第三期：</strong> <strong>運動中持續疼痛</strong>，無法發揮實力，甚至日常上下樓梯都會痛。（必須休息與治療）</li>
              <li><strong>第四期：</strong> 肌腱完全斷裂（需手術）。</li>
          </ul>
      
          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
      
          <h3 style="color: #f8fafc !important;">🔍 超音波下的真相：尋找「新生血管」</h3>
          <p style="color: #e2e8f0 !important;">在宸新復健科，我們不只聽您說痛，我們用看的！透過高解析超音波，我們可以觀察到：</p>
          
          <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
              <h4 style="margin-top: 0; color: #0e7490 !important;">1. 肌腱腫脹增厚</h4>
              <p style="margin-bottom: 0; color: #334155 !important;">
                  正常的肌腱像一條緊實的白色緞帶。受傷的肌腱會變厚、變腫，看起來灰灰暗暗的（低回音）。
              </p>
          </div>
      
          <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
              <h4 style="margin-top: 0; color: #0e7490 !important;">2. 能量都卜勒 (Power Doppler)</h4>
              <p style="margin-bottom: 0; color: #334155 !important;">
                  這也是我們判斷嚴重程度的關鍵。如果開啟血流偵測模式，在肌腱內部看到<strong>像火苗一樣的紅藍色訊號</strong>，代表有很多不正常的「新生血管」長進去。這些血管伴隨著神經，是疼痛的主要來源，也是 PRP 或震波治療的主要目標。
              </p>
          </div>
                     <p><img src="/images/diseases/knee/jump/c.jpg" alt="髕骨肌超音波影像"></p>
       
          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
      
          <h3 style="color: #f8fafc !important;">🛡️ 治療策略：破壞重建，再生修復</h3>
          <p style="color: #e2e8f0 !important;">既然跳躍膝是「結構退化」，治療重點就不在消炎，而在於<strong>「刺激再生」</strong>：</p>
      
          <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
              <h4 style="margin-top: 0; color: #0e7490 !important;">1. 急性期：髕骨加壓帶 (Patellar Strap)</h4>
              <p style="margin-bottom: 0; color: #334155 !important;">
                  綁在膝蓋骨正下方的一條帶子。它的原理是改變肌腱的受力支點，分散拉力，能立即減輕疼痛，讓您能維持輕度活動。
              </p>
          </div>
      
          <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
              <h4 style="margin-top: 0; color: #0e7490 !important;">2. 黃金標準：<a href="/treatments/shockwave" class="text-cyan-400 hover:underline">體外震波治療(ESWT)</a>🔍️</h4>
              <p style="margin-bottom: 0; color: #334155 !important;">
                  對於慢性的肌腱病變，震波是目前公認最有效的物理治療。利用高能量聲波<strong>破壞新生血管</strong>與神經，阻斷痛覺，並造成微小創傷以啟動身體的修復機制，促進膠原蛋白重新排列。
              </p>
          </div>
      
          <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
              <h4 style="margin-top: 0; color: #0e7490 !important;">3. 頑固型剋星：<a href="/treatments/prp" class="text-cyan-400 hover:underline">PRP 增生療法</a>🔍️</h4>
              <p style="margin-bottom: 0; color: #334155 !important;">
                  若超音波顯示肌腱內部有<strong>撕裂傷 (Cleft)</strong> 或震波效果不彰，建議使用 <strong style="color: #0891b2 !important;">PRP (高濃度血小板)</strong>。醫師在超音波導引下，將生長因子精準注入肌腱受損處，像「灌漿」一樣填補撕裂，是目前職業運動員的首選療法。
              </p>
          </div>
      
          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

          <h3 style="color: #f8fafc !important;">🧘‍♂️ 醫師教你做：復健運動兩大王牌—伸展與肌力強化</h3>
          <p style="color: #e2e8f0 !important;">復健不是只有休息，<strong>「正確的負重」</strong>才能讓肌腱長好。請依序進行：</p>
      
          <div style="margin-bottom: 2rem;">


    <div style="margin-bottom: 2rem;">
    <div style="margin-bottom: 2rem;">
        <h4 style="color: #22d3ee !important; margin-bottom: 0.5rem;">1. 滾筒放鬆股四頭肌 (Foam Rolling)</h4>
        <p style="color: #e2e8f0 !important; margin: 0;">
            <strong>動作：</strong> 採趴姿，將滾筒置於大腿前側下方。利用手肘支撐地面，身體前後緩慢滾動，尋找特別痠痛的點（激痛點）並停留 30 秒。<br>
            <strong>重點：</strong> 改善筋膜沾黏，恢復肌肉彈性，減少對膝蓋肌腱的牽引張力。
        </p>
    </div>

        <h4 style="color: #22d3ee !important; margin-bottom: 0.5rem;">2. 股四頭肌伸展 (Quadriceps Stretch)</h4>
        <p style="color: #e2e8f0 !important; margin: 0;">
            <strong>動作：</strong> 站立姿勢，一手扶牆保持平衡，另一手抓住同側腳踝往後拉，讓腳跟碰到屁股。需感覺大腿前側有明顯緊繃感。<br>
            <strong>原理：</strong> 太緊的股四頭肌會不斷拉扯髕骨肌腱，導致發炎處反覆受傷，因此「放鬆肌肉」至關重要。
        </p>
    </div>


    <div style="background-color: rgba(34, 211, 238, 0.1); border-left: 4px solid #22d3ee; padding: 1rem; margin: 2rem 0; border-radius: 4px;">
        <p style="color: #e2e8f0 !important; margin: 0;">
            ⚠️ <strong>觀念導正：</strong>復健不是只有休息，<strong>「正確的負重」</strong>才能讓肌腱長好。完成上述放鬆後，請依序進行以下訓練：
        </p>
    </div>

    <div style="margin-bottom: 2rem;">
        <h4 style="color: #22d3ee !important; margin-bottom: 0.5rem;">3. 西班牙深蹲 (Spanish Squat) - 止痛神器</h4>
        <p style="color: #e2e8f0 !important; margin: 0;">
            <strong>適用時機：</strong> 疼痛明顯時，作為「等長收縮」訓練。<br>
            <strong>動作：</strong> 找一條粗的彈力帶綁在柱子上，將雙腳套入彈力帶放在膝蓋後窩。身體向後坐，利用彈力帶支撐，維持小腿垂直地面，大腿用力撐住 30-45 秒，做 5 組。<br>
            <strong>原理：</strong> 這能有效減輕疼痛（利用皮質脊髓抑制作用），讓大腿肌肉在低疼痛的狀態下被喚醒。
        </p>
    </div>

    <div style="margin-bottom: 2rem;">
        <h4 style="color: #22d3ee !important; margin-bottom: 0.5rem;">4. 斜板深蹲 (Decline Squat) - 修復關鍵</h4>
        <p style="color: #e2e8f0 !important; margin: 0;">
            <strong>適用時機：</strong> 疼痛緩解後，開始進行「離心訓練」。<br>
            <strong>動作：</strong> 站在斜板（或是腳跟墊高）上單腳站立。<strong>慢慢地（數 5 秒）</strong>往下蹲，直到膝蓋彎曲約 60-90 度，然後用好腳幫忙站起來。<br>
            <strong>重點：</strong> 重點在於「下蹲」的過程要慢。這能梳理肌腱纖維，引導新生組織排列整齊，增加肌腱強度。
        </p>
    </div>
     <p><img src="/images/diseases/knee/jump/d.jpg" alt="髕骨肌腱炎(跳躍膝)居家運動強化"></p>
</div>
      
          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
      
          <div style="background-color: #ecfdf5; padding: 2rem; border-radius: 1rem; margin-top: 3rem; text-align: center;">
              <h3 style="color: #047857 !important; margin-top: 0;">👨‍⚕️ 找回起飛的力量！</h3>
              <p style="color: #334155 !important; margin-bottom: 1.5rem;">跳躍膝雖然難纏，但只要有耐心，透過超音波精準定位，搭配震波或 PRP 治療，並落實西班牙深蹲等肌力訓練，絕對能根治。宸新復健科，助您重返球場，再創佳績！</p>
              <p style="font-weight: bold; color: #059669 !important;">膝蓋下方痛到無法蹲？立即預約超音波檢查！</p>
          </div>
        `,
        symptoms: [
          '膝蓋骨正下方（肌腱處）按壓劇痛',
          '跳躍、落地、深蹲或久坐時疼痛加劇',
          '下坡下樓梯時膝蓋下方痠軟',
          '運動初期疼痛，熱身後緩解（早期症狀）'
        ],
        treatments: [
          '止痛藥物及復健',
          '<a href="/treatments/shockwave" class="text-cyan-400 hover:underline">體外震波治療(ESWT)</a>🔍️',
          '<a href="/treatments/prp" class="text-cyan-400 hover:underline">PRP 增生療法</a>🔍️',
          '<a href="/treatments/manual" class="text-cyan-400 hover:underline">徒手運動治療</a>🔍️'
        ],
        seoKeywords: [
          '跳躍膝',
          '髕骨肌腱炎',
          '膝蓋下方痛',
          '震波治療',
          'PRP注射',
          '籃球膝',
          '深蹲膝蓋痛'
        ],
        seoDescription: '跳躍膝（髕骨肌腱炎）造成膝蓋下方劇痛，影響跳躍能力。宸新復健科提供震波治療、PRP注射與西班牙深蹲教學，有效修復肌腱退化。',
        images: [
          { src: '/images/diseases/knee/jump/a.jpg', alt: '跳躍膝（髕骨肌腱炎）' 
          }
        ]
      },

{
        id: 'meniscus-injury',
        slug: 'meniscus-injury',
        title: '膝蓋半月板損傷 (Meniscus Injury)',
        lastModified: '2026-01-21',
        description: '膝蓋突然「卡住」伸不直？走路膝蓋關節縫刺痛？這可能是膝蓋的避震器壞了！深入解析半月板損傷成因、紅黃白區的修復關鍵，以及 PRP 與手術治療的全攻略。',
        contentHtml: `
          <p style="color: #e2e8f0 !important;">您是否有這樣的經驗：打籃球一個轉身跳投，落地時膝蓋內部傳來「啪」的一聲，接著就一陣劇痛？或是蹲下去撿東西，站起來時膝蓋突然<strong>「卡住」</strong>伸不直，要甩一甩才能動？又或者上下樓梯時，膝蓋內側或外側的<strong>關節縫</strong>總是有固定的刺痛點？</p>
                <br>
          <p style="color: #e2e8f0 !important;">這些都是<strong>半月板損傷</strong>的典型症狀。半月板被稱為膝蓋的「避震器」，一旦受損，不僅走路痛苦，更會加速膝關節的退化。宸新復健科透過高解析超音波進行動態檢查，協助您判斷半月板受損的位置與程度，並提供保存膝蓋的再生醫療方案。</p>
      
          <div style="background-color: #fffbeb; border: 2px solid #fbbf24; border-radius: 1rem; padding: 1.5rem; margin: 2rem 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
              <h2 style="color: #b45309 !important; margin-top: 0; font-weight: bold; border-bottom: 2px solid #fcd34d; padding-bottom: 0.5rem; display: flex; align-items: center;">
                  📢 什麼是半月板？膝蓋裡的「C型軟骨墊片」
              </h2>
              
              <p style="font-size: 1.1rem; color: #78350f !important;">在我們的大腿骨（股骨）與小腿骨（脛骨）之間，塞著兩塊呈現「C」字型的纖維軟骨，內側一個、外側一個，這就是半月板。它們的功能至關重要：</p>
              
              <ul style="list-style: none; padding: 0; margin-top: 1rem; color: #92400e !important;">
                  <li style="margin-bottom: 1rem; display: flex; align-items: start;">
                      <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">1</span>
                      <div style="color: #92400e !important;">
                          <strong style="color: #dc2626 !important;">避震緩衝：</strong> 
                          吸收我們走路、跳躍時地面的反作用力，保護關節面的透明軟骨不被磨損。就像汽車的避震器一樣。
                      </div>
                  </li>
                  <li style="margin-bottom: 1rem; display: flex; align-items: start;">
                      <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">2</span>
                      <div style="color: #92400e !important;">
                          <strong style="color: #0891b2 !important;">增加穩定：</strong> 
                          填補圓大腿骨與小腿骨之間的空隙，讓關節活動更吻合穩定。
                      </div>
                  </li>
                  <li style="margin-bottom: 0; display: flex; align-items: start;">
                      <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">3</span>
                      <div style="color: #92400e !important;">
                          <strong style="color: #dc2626 !important;">決定命運的「紅區」與「白區」：</strong> 
                          這是治療最關鍵的概念！半月板的血液供應很差，只有靠近關節囊外緣的 1/3 有血管，稱為<strong>「紅區 (Red Zone)」</strong>，這裡受傷有機會自己癒合或透過注射修復。而靠近關節內側的 2/3 幾乎沒有血管，稱為<strong>「白區 (White Zone)」</strong>，一旦撕裂極難癒合，往往需要手術修整。
                      </div>
                  </li>
              </ul>
          </div>
         <p><img src="/images/diseases/knee/mm/b.jpg" alt="半月板的血液供應"></p>
    
          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
      
          <h3 style="color: #f8fafc !important;">⚠️ 兩大成因：年輕人 vs. 中老年人</h3>
          <p style="color: #e2e8f0 !important;">半月板損傷在不同年齡層有不同的致病機轉：</p>
      
          <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
              <h4 style="margin-top: 0; color: #0e7490 !important;">1. 創傷型 (Traumatic Tear) - 年輕愛運動者</h4>
              <p style="margin-bottom: 0; color: #334155 !important;">
                  通常發生在激烈運動中。當膝蓋在<strong>彎曲且負重</strong>的狀態下，突然進行<strong>強力的扭轉</strong>（例如：籃球切入變向、足球急停轉身），半月板就會被夾在骨頭中間「扭破」。這類損傷常合併前十字韌帶 (ACL) 斷裂一起發生，受傷以內側半月板較為常見。
              </p>
          </div>
      
          <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
              <h4 style="margin-top: 0; color: #0e7490 !important;">2. 退化型 (Degenerative Tear) - 中老年族群</h4>
              <p style="margin-bottom: 0; color: #334155 !important;">
                  隨著年齡增長，半月板的水分減少、變得脆弱。不需要劇烈運動，可能只是<strong>蹲下去澆花、從矮椅子站起來</strong>，一個簡單的動作就造成半月板磨損撕裂。這通常伴隨著退化性膝關節炎一起出現，同樣退化也是以內側半月板更為常見。
              </p>
          </div>
      
          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
      
          <h3 style="color: #f8fafc !important;">🔍 症狀特徵：膝蓋裡的「不速之客」</h3>
          <p style="color: #e2e8f0 !important;">怎麼知道半月板破了？請留意以下警訊：</p>
          <ul style="color: #e2e8f0 !important;">
              <li><strong>關節線疼痛：</strong> 最典型的症狀。按壓膝蓋內側或外側的關節縫隙時，會有明顯的刺痛點。</li>
              <li><strong>卡鎖現象：</strong> 這是危險訊號！如果撕裂的半月板碎片像「門擋」一樣卡在關節中間，會導致膝蓋突然卡住伸不直。這通常需要盡快處理。</li>
              <li><strong>關節積水腫脹：</strong> 受傷後幾小時到隔天，膝蓋會慢慢腫起來（因為關節液分泌增加）。</li>
              <li><strong>發軟無力：</strong> 上下樓梯時突然覺得膝蓋「軟了一下」，使不上力。</li>
              <li><strong>彈響聲：</strong> 活動膝蓋時常聽到喀喀聲。</li>
          </ul>
               <p><img src="/images/diseases/knee/mm/c.jpg" alt="半月板受傷的症狀"></p>


    <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

    <h3 style="color: #f8fafc !important;">🔍 精準診斷：超音波 vs. 核磁共振 (MRI)</h3>
    <p style="color: #e2e8f0 !important;">半月板是軟骨，一般的 X 光只能看骨頭，是<strong>照不到半月板</strong>的！因此必須依靠更精密的影像檢查：</p>

    <div style="margin-bottom: 2rem;">
        <h3 style="color: #f8fafc "><strong>1. 高解析骨骼肌肉超音波</strong> (第一線檢查)</h3>
        <p style="color: #e2e8f0 !important;">在宸新復健科，我們使用高階超音波進行檢查，它有兩大優勢：</p>
        <ul style="color: #e2e8f0 !important;">
            <li><strong>看積水：</strong> 半月板受傷常伴隨關節發炎積水。超音波能清楚看到關節囊被黑色的液體撐開，這是急性發炎的鐵證。</li>
            <li><strong>動態檢查：</strong> 這是超音波最強的地方。醫師會邊擠壓膝蓋、邊用探頭看，可以觀察到半月板是否不穩定地<strong>「被擠出來」</strong>(Meniscus Extrusion)，或是看到明顯的撕裂裂縫。</li>
        </ul>
    </div>

    <p><img src="/images/diseases/knee/mm/d.jpg" alt="半月板受傷的超音波影像"></p>
    
    <div style="margin-bottom: 2rem;">
        <h3 style="color: #f8fafc "><strong>2. 核磁共振 MRI</strong> (手術評估黃金標準)</h3>
        <p style="color: #e2e8f0 !important;">如果您有以下狀況，建議安排 MRI 檢查：</p>
        <ul style="color: #e2e8f0 !important;">
            <li>超音波懷疑有<strong>深層（白區）</strong>或是<strong>複雜性撕裂</strong>。</li>
            <li>膝蓋持續卡鎖 (Locking)，懷疑有游離軟骨塊。</li>
            <li>懷疑合併前十字韌帶斷裂。</li>
            <li><strong>評估是否需要開刀：</strong> MRI 能提供膝蓋內部的 3D 立體影像，是骨科醫師決定手術方式（修補或切除）的最重要依據。</li>
        </ul>
    </div>
    
          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
      
          <h3 style="color: #f8fafc !important;">🛡️ 治療策略：能留就留，能補就補</h3>
          <p style="color: #e2e8f0 !important;">半月板非常珍貴，切掉一點就少一點避震能力，未來罹患退化性關節炎的機率會暴增。因此現代醫學的治療原則是<strong>「盡量保存」</strong>。</p>
      
          <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
              <h4 style="margin-top: 0; color: #0e7490 !important;">1. 保守治療與物理治療</h4>
              <p style="margin-bottom: 0; color: #334155 !important;">
                  適用對象：退化型撕裂、小型且穩定的撕裂、位於紅區邊緣、沒有卡鎖症狀者。<br>
                  急性期透過冰敷、休息減少腫脹。後續重點在於<strong>強化股四頭肌與臀部肌群</strong>，減輕膝蓋負擔。
              </p>
          </div>
      
          <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
              <h4 style="margin-top: 0; color: #0e7490 !important;">2. 再生修復：<a href="/treatments/prp" class="text-cyan-400 hover:underline">PRP 增生療法</a>🔍️</h4>
              <p style="margin-bottom: 0; color: #334155 !important;">
                  適用對象：位於<strong>紅區或紅白交界區</strong>的撕裂傷，且不想開刀者。<br>
                  由於半月板血流差，我們透過超音波導引，將高濃度的生長因子 (PRP) 精準注射到撕裂縫隙中，提供修復所需的「養分與原料」，促進組織癒合。這對於年輕、創傷型的紅區撕裂效果尤佳。
              </p>
          </div>
          
     
          <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
              <h4 style="margin-top: 0; color: #0e7490 !important;">3. 什麼情況一定要開刀（關節鏡）？</h4>
              <p style="margin-bottom: 0; color: #334155 !important;">
                  如果出現以下狀況，通常需要骨科介入進行關節鏡手術：
                  <ul style="margin-top: 0.5rem; color: #334155 !important;">
                      <li>膝蓋反覆出現<strong>「卡鎖 (Locking)」</strong>現象，嚴重影響生活。</li>
                      <li>保守治療與 PRP 注射 3-6 個月無效，持續疼痛積水。</li>
                      <li>複雜的大型撕裂（如桶柄狀撕裂 Bucket-handle tear）。</li>
                        <li>手術方式分為「修補縫合」（首選，但需在紅區）或「部分切除」（針對白區無法修復的碎片）。
                  </ul>
              </p>
          </div>
      
          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
      
          <h3 style="color: #f8fafc !important;">🧘‍♂️ 醫師教你做：安全復健運動</h3>
          <p style="color: #e2e8f0 !important;">半月板受傷後，最忌諱深蹲與過度扭轉。初期復健重點在於「不負重」的肌力訓練：</p>
      
          <div style="margin-bottom: 2rem;">
              <h4 style="color: #22d3ee !important;">直抬腿運動</h4>
              <p style="color: #e2e8f0 !important;">平躺在床上，患側膝蓋伸直，用力將整條腿抬高約 30-45 度，腳尖勾起。維持 5-10 秒，再慢慢放下。重複 15 次。這個動作能有效訓練股四頭肌，且完全不會對半月板造成壓力。</p>
          </div>
       
          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
      
          <div style="background-color: #ecfdf5; padding: 2rem; border-radius: 1rem; margin-top: 3rem; text-align: center;">
              <h3 style="color: #047857 !important; margin-top: 0;">👨‍⚕️ 膝蓋卡卡別輕忽，保本最重要！</h3>
              <p style="color: #334155 !important; margin-bottom: 1.5rem;">半月板損傷是膝蓋退化的前哨站。一旦出現關節線疼痛或卡住的症狀，請務必及早就醫評估。透過精準的診斷，分辨紅區白區，選擇最適合的再生治療或手術方案，才能保住珍貴的避震器，讓膝蓋陪您走更長遠的路！</p>
              <p style="font-weight: bold; color: #059669 !important;">走路膝蓋縫刺痛？立即預約超音波檢查！</p>
          </div>
        `,
        symptoms: [
          '膝蓋關節線（內側或外側縫隙）按壓刺痛',
          '膝蓋腫脹反覆積水',
          '膝蓋活動時突然「卡住」伸不直',
          '活動時膝蓋有喀喀聲響 '

        ],
        treatments: [
          '止痛藥物及復健',
          '超音波導引抽積水與<a href="/treatments/prp" class="text-cyan-400 hover:underline">PRP 增生療法</a>🔍️',
          '<a href="/treatments/manual" class="text-cyan-400 hover:underline">物理治療與肌力訓練 (股四頭肌強化)</a>🔍️',
          '關節鏡半月板手術'
        ],
        seoKeywords: [
          '半月板損傷',
          '半月板撕裂',
          '膝蓋卡住',
          '關節線疼痛',
          'PRP注射',
          '膝蓋積水',
          '運動傷害'
        ],
        seoDescription: '膝蓋半月板損傷造成關節卡住、刺痛與積水。宸新復健科提供精準超音波診斷，分辨紅白區撕裂，提供PRP再生注射與復健指導，非手術修復膝蓋避震器。',
        images: [
          { src: '/images/diseases/knee/mm/a.jpg', alt: '膝蓋半月板損傷' 
          }
        ]
      },
 {
        id: 'cruciate-ligament-injury',
        slug: 'cruciate-ligament-injury',
        title: '前後十字韌帶損傷',
        lastModified: '2026-01-21',
        description: '膝蓋聽到「波」一聲後腫脹？下樓梯覺得小腿會跑掉？深入解析前十字韌帶 (ACL) 與後十字韌帶 (PCL) 損傷，以及「開刀 vs. 保守治療」的黃金決策關鍵。',
        contentHtml: `
          <p style="color: #e2e8f0 !important;">您是否有這樣的經驗：打籃球急停跳投、或是滑雪轉身時，膝蓋內部突然傳來響亮的<strong>波 (Pop)</strong>一聲，接著整個人軟腳跌倒？當下雖然還能勉強站起來，但幾個小時後膝蓋腫得像麵龜一樣？</p>
                <br>
          <p style="color: #e2e8f0 !important;">這就是最典型的<strong>前十字韌帶斷裂</strong>劇本。它是膝蓋最脆弱也最重要的穩定器。宸新復健科透過精準的理學檢查與高階超音波檢查，協助您判斷韌帶的連續性，並提供從「不開刀增生治療」到「術前術後復健」的完整照護，讓您重返運動場。</p>
      
          <div style="background-color: #fffbeb; border: 2px solid #fbbf24; border-radius: 1rem; padding: 1.5rem; margin: 2rem 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
              <h2 style="color: #b45309 !important; margin-top: 0; font-weight: bold; border-bottom: 2px solid #fcd34d; padding-bottom: 0.5rem; display: flex; align-items: center;">
                  📢 膝蓋內部的「安全帶」：ACL 與 PCL
              </h2>
              
              <p style="font-size: 1.1rem; color: #78350f !important;">在膝關節深處，有兩條呈現「X」形狀交叉的韌帶，負責前後方向的穩定：</p>
              
              <ul style="list-style: none; padding: 0; margin-top: 1rem; color: #92400e !important;">
                  <li style="margin-bottom: 1rem; display: flex; align-items: start;">
                      <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">1</span>
                      <div style="color: #92400e !important;">
                          <strong style="color: #dc2626 !important;">前十字韌帶 (ACL) - 運動員殺手：</strong> 
                          負責防止小腿骨（脛骨）<strong>過度向前滑動</strong>。它非常脆弱，70% 的斷裂屬於「非接觸性損傷」，也就是沒人撞你，自己急停、旋轉、落地姿勢不對就斷了。
                      </div>
                  </li>
                  <li style="margin-bottom: 1rem; display: flex; align-items: start;">
                      <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">2</span>
                      <div style="color: #92400e !important;">
                          <strong style="color: #0891b2 !important;">後十字韌帶 (PCL) - 車禍與跌倒：</strong> 
                          比 ACL 粗壯兩倍，負責防止小腿骨<strong>過度向後滑動</strong>。通常發生在機車車禍（膝蓋撞儀表板）或膝蓋跪地跌倒時。後十字韌帶自癒能力較好，手術機率較低。
                      </div>
                  </li>
                  <li style="margin-bottom: 0; display: flex; align-items: start;">
                      <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">3</span>
                      <div style="color: #92400e !important;">
                          <strong style="color: #dc2626 !important;">關節積血 (Hemarthrosis)：</strong> 
                          十字韌帶斷裂時，血管會跟著破裂，導致大量血液灌入關節腔。這就是為什麼受傷後 2-4 小時內膝蓋會極速腫脹的原因。
                      </div>
                  </li>
              </ul>
          </div>
          <p><img src="/images/diseases/knee/acl/b.jpg" alt="十字韌帶結構圖"></p>

          
          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
      
          <h3 style="color: #f8fafc !important;">⚠️ 症狀特徵：斷掉是什麼感覺？</h3>
          <p style="color: #e2e8f0 !important;">如果出現以下「ACL 斷裂三部曲」，請務必就醫：</p>
          <ul style="color: #e2e8f0 !important;">
              <li><strong>聽覺：</strong> 受傷當下聽到或感覺到膝蓋深處<strong>「波 (Pop)」</strong>的一聲。</li>
              <li><strong>腫脹：</strong> 受傷後 24 小時內膝蓋腫脹明顯（因為關節積血）。</li>
              <li><strong>不穩：</strong> 急性期過後（2週後），走路或上下樓梯時覺得膝蓋空空的、小腿好像會跑掉，或是<strong>不敢做急停轉身</strong>的動作。</li>
          </ul>
      
          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
      
          <h3 style="color: #f8fafc !important;">🔍 診斷方式：拉拉看就知道</h3>
          <p style="color: #e2e8f0 !important;">診斷十字韌帶不一定要馬上照 MRI，有經驗的醫師透過雙手即可初步判斷：</p>
          
          <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
              <h4 style="margin-top: 0; color: #0e7490 !important;">1. 前拉測試 (Anterior drawer test)</h4>
              <p style="margin-bottom: 0; color: #334155 !important;">
                  這是診斷 ACL 最準確的理學檢查。醫師會將膝蓋彎曲 30 度，嘗試將小腿骨往前拉。如果韌帶斷了，小腿會被<strong>「拉出來」</strong>且沒有拉到最後沒有停住的感覺。
              </p>
          </div>
      
          <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
              <h4 style="margin-top: 0; color: #0e7490 !important;">2. 影像檢查： 超音波 vs 核磁共振  </h4>
              <p style="margin-bottom: 0; color: #334155 !important;">
                  <strong>超音波：</strong> 可看到關節積血、韌帶腫脹，以及檢查是否合併<strong>半月板破裂或韌帶撕裂</strong>（這很常見，稱為惱人三重傷 Unhappy Triad），下圖為超音波導引下將積血抽吸出來。<br>
                  <strong>核磁共振：</strong>若嚴重鬆脫或反覆積水，考慮手術建議安排，能清楚看到韌帶是「全斷」還是「部分斷裂」，。
              </p>
          </div>
      
          <p><img src="/images/diseases/knee/acl/c.jpg" alt="膝關節超音波導引抽血"></p>

          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
      
          <h3 style="color: #f8fafc !important;">🛡️ 治療決策：一定要開刀重建嗎？</h3>
          <p style="color: #e2e8f0 !important;">這是患者最糾結的問題。其實並非斷了就一定要開刀，取決於您的「需求」與「斷裂程度」：</p>
      
          <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
              <h4 style="margin-top: 0; color: #0e7490 !important;">1. 保守治療 (<a href="/treatments/prp" class="text-cyan-400 hover:underline">PRP 增生療法</a> + 復健)</h4>
              <p style="margin-bottom: 0; color: #334155 !important;">
                  <strong>適用對象：</strong> 部分撕裂 (Grade 1-2)、老年人、活動需求低（不打球，只走路）、後十字韌帶損傷者。<br>
                  <strong>治療方式：</strong> 急性期抽出關節積血。接著使用 <strong style="color: #0891b2 !important;">PRP (高濃度血小板)</strong> 超音波導引下精準注射到撕裂的韌帶，促進癒合。最重要的是強化<strong>腿後肌</strong>及<strong>股四頭肌</strong>，讓強壯的肌肉代償韌帶的功能。
              </p>
          </div>
      
          <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
              <h4 style="margin-top: 0; color: #0e7490 !important;">2. 手術重建 (Reconstruction)</h4>
              <p style="margin-bottom: 0; color: #334155 !important;">
                  <strong>適用對象：</strong> 完全斷裂 (Grade 3)、膝蓋嚴重不穩（軟腳）、合併半月板破裂、年輕人、高強度運動員或保守治療效果不佳。<br>
                  <strong>治療方式：</strong> 十字韌帶斷了接不回去，通常是取自體肌腱（如腿後肌）來「重建」一條新的韌帶。
              </p>
          </div>
      
          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
      
          <h3 style="color: #f8fafc !important;">🧘‍♂️ 醫師教你做：復健關鍵在「閉鎖鏈」</h3>
          <p style="color: #e2e8f0 !important;">無論開不開刀，復健都是必須的。十字韌帶受傷後，重點在於強化大腿後側肌肉：</p>
      
          <div style="margin-bottom: 2rem;">
              <h4 style="color: #22d3ee !important;">1. 橋式 - 喚醒腿後肌</h4>
              <p style="color: #e2e8f0 !important;">平躺，雙膝彎曲，腳跟踩地。用力將屁股抬起，直到身體呈一直線。這能訓練臀大肌與腿後肌。腿後肌是前十字韌帶的好朋友，能幫忙拉住小腿骨。</p>
          </div>
      
          <div style="margin-bottom: 2rem;">
              <h4 style="color: #22d3ee !important;">2. 靠牆深蹲 - 閉鎖鏈運動</h4>
              <p style="color: #e2e8f0 !important;">背靠牆，雙腳與肩同寬，慢慢往下滑直到膝蓋彎曲 30-45 度。腳掌踩死地板（閉鎖鏈），這樣對韌帶的剪力最小，最安全。停留 10 秒，重複 10 次。</p>
          </div>
      
          <div style="margin-bottom: 2rem;">
              <h4 style="color: #22d3ee !important;">3. 避免動作 (禁忌)</h4>
              <p style="color: #e2e8f0 !important;">受傷初期（或術後 3 個月內），<strong>請避免「坐姿踢腿機」</strong>最後 30 度伸直的動作（開放鏈），這會對前十字韌帶產生極大的剪力，容易導致韌帶鬆弛或重建失敗。</p>
          </div>
         <p><img src="/images/diseases/knee/acl/d.jpg" alt="十字韌帶受傷居家運動"></p>

          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
      
          <div style="background-color: #ecfdf5; padding: 2rem; border-radius: 1rem; margin-top: 3rem; text-align: center;">
              <h3 style="color: #047857 !important; margin-top: 0;">👨‍⚕️ 膝蓋穩定，才能安心衝刺！</h3>
              <p style="color: #334155 !important; margin-bottom: 1.5rem;">十字韌帶損傷是膝蓋的大型工程，需要醫師、治療師與患者三方配合。即使需要手術，術前的 PRP 強化與術後的積極復健，都是決定重返運動場的關鍵。宸新復健科，陪您走過這段漫長的復健路！</p>
              <p style="font-weight: bold; color: #059669 !important;">膝蓋聽到波一聲？立即預約穩定度檢查！</p>
          </div>
        `,
        symptoms: [
          '受傷當下聽到膝蓋「波」一聲',
          '受傷後 24 小時內膝蓋嚴重腫脹 (積血)',
          '感覺膝蓋鬆鬆的、不穩定',
          '下樓梯或急停時膝蓋發軟',
        ],
        treatments: [
          '止痛藥復健與護膝',
          '超音波導引抽積血<a href="/treatments/prp" class="text-cyan-400 hover:underline">PRP 增生療法</a>🔍️',
          '術前/術後<a href="/treatments/manual" class="text-cyan-400 hover:underline">徒手運動治療</a>🔍️',
          '十字韌帶重建手術',
        ],
        seoKeywords: [
          '十字韌帶斷裂',
          'ACL',
          'PCL',
          '膝蓋積水',
          'PRP注射',
          '膝蓋開刀',
          '前十字韌帶重建'
        ],
        seoDescription: '十字韌帶損傷（ACL/PCL）造成膝蓋不穩與積水。宸新復健科提供PRP保守治療、術前術後復健指導，以及開刀決策諮詢，助您重返運動場。',
        images: [
          { src: '/images/diseases/knee/acl/a.jpg', alt: '十字韌帶損傷'  
          }
        ]
      },

{
        id: 'knee-collateral-ligament',
        slug: 'knee-collateral-ligament',
        title: '膝蓋副韌帶損傷',
        lastModified: '2026-01-21',
        description: '膝蓋內側劇痛？被人從側面撞到後膝蓋不穩？這可能不是十字韌帶，而是副韌帶受傷！深入解析 MCL/LCL 受傷分級、動態超音波診斷，以及活動型護具與 PRP 修復全攻略。',
        contentHtml: `
          <p style="color: #e2e8f0 !important;">您是否有這樣的經驗：打籃球時被人從膝蓋外側「撞」了一下，瞬間感覺膝蓋內側一陣撕裂劇痛？或是滑雪、踢足球時，小腿突然往外或是往內折了一下？受傷後，雖然還能走路，但總覺得膝蓋兩側會<strong>疼痛</strong>且<strong>鬆鬆的</strong>，左右搖晃不穩？</p>
            
          <br>
          <p style="color: #e2e8f0 !important;">這通常不是十字韌帶的問題，而是膝蓋的側向衛兵——<strong>副韌帶</strong> 受傷了。其中以<strong>內側副韌帶</strong> 損傷最為常見。宸新復健科透過「高階超音波檢查」，能親眼看到韌帶受傷及鬆弛的程度，並提供活動型護具與再生注射方案，讓韌帶重新長緊，避免膝蓋提早退化。</p>

      
          <div style="background-color: #fffbeb; border: 2px solid #fbbf24; border-radius: 1rem; padding: 1.5rem; margin: 2rem 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
              <h2 style="color: #b45309 !important; margin-top: 0; font-weight: bold; border-bottom: 2px solid #fcd34d; padding-bottom: 0.5rem; display: flex; align-items: center;">
                  📢 左右護法：內側與外側副韌帶的功能
              </h2>
              
              <p style="font-size: 1.1rem; color: #78350f !important;">膝蓋不只需要前後穩定（靠十字韌帶），更需要左右穩定（靠副韌帶）。它們像兩條強韌的膠帶，貼在膝蓋的內外兩側：</p>
              
              <ul style="list-style: none; padding: 0; margin-top: 1rem; color: #92400e !important;">
                  <li style="margin-bottom: 1rem; display: flex; align-items: start;">
                      <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">1</span>
                      <div style="color: #92400e !important;">
                          <strong style="color: #dc2626 !important;">內側副韌帶 - 最常受傷：</strong> 
                          位於膝蓋內側，像寬扁的扇子。當膝蓋外側受到撞擊，或是小腿過度往外轉時，內側副韌帶會被拉長撕裂。這常發生在足球、籃球、滑雪運動中。
                      </div>
                  </li>
                  <li style="margin-bottom: 1rem; display: flex; align-items: start;">
                      <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">2</span>
                      <div style="color: #92400e !important;">
                          <strong style="color: #0891b2 !important;">外側副韌帶：</strong> 
                          位於膝蓋外側，像一條細繩子。當膝蓋內側受到撞擊時受傷。外側副韌帶受傷較少見，但一旦發生，常合併十字韌帶或腓神經損傷。
                      </div>
                  </li>
                  <li style="margin-bottom: 0; display: flex; align-items: start;">
                      <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">3</span>
                      <div style="color: #92400e !important;">
                          <strong style="color: #0891b2 !important;">自我修復能力：</strong> 
                          好消息是，內側副韌帶的血液循環比十字韌帶好，如果是一、二級撕裂，透過正確的保守治療（復健+<a href="/treatments/prp" class="text-cyan-400 hover:underline">增生療法</a>），<strong>癒合機率極高</strong>，通常不需要開刀。
                      </div>
                  </li>
              </ul>
          </div>
    <p><img src="/images/diseases/knee/mcl/b.jpg" alt="內側副韌帶受傷結構"></p>


          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
      
          <h3 style="color: #f8fafc !important;">⚠️ 受傷分級：你是哪一級？</h3>
          <p style="color: #e2e8f0 !important;">醫師會根據韌帶鬆弛的程度分為三級，這決定了你需要戴護具多久：</p>
          <ul style="color: #e2e8f0 !important;">
              <li><strong>第一級 (Grade I)：</strong> 韌帶<strong>微小撕裂</strong>，但在壓力測試下膝蓋沒有鬆動。只有按壓痛，走路正常。恢復期約 4 週。</li>
              <li><strong>第二級 (Grade II)：</strong> 韌帶<strong>部分撕裂</strong>。壓力測試下膝蓋會「打開」一點點，但還有止點感（End point）。會有明顯腫脹、走路跛行。恢復期約 8 週。</li>
              <li><strong>第三級 (Grade III)：</strong> 韌帶<strong>完全斷裂</strong>。壓力測試下膝蓋會像門一樣被完全打開，沒有止點感。膝蓋極度不穩，通常合併半月板或十字韌帶受傷。恢復期需 3 個月以上。</li>
          </ul>
      
          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
      
          <h3 style="color: #f8fafc !important;">🔍 超音波檢查：眼見為憑的診斷</h3>
          <p style="color: #e2e8f0 !important;">X 光只能看骨頭，診斷副韌帶損傷，<strong>超音波是第一線利器</strong>。宸新復健科採用高階超音波檢查：</p>
              <br>
              <h4 style="color: #22d3ee !important;"><strong>1.副韌帶結構檢查</strong></h4>
              <p style="color: #e2e8f0 !important;">高階超音波影像可以清楚看到副韌帶的結構，撕裂的程度，並搭配超音波導引精準注射效果更好。</p>

              <h4 style="color: #22d3ee !important;"><strong>2. 檢查伴隨損傷</strong></h4>
              <p style="color: #e2e8f0 !important;">副韌帶損傷受傷常伴隨內側半月板受損（因為它們黏在一起）。超音波可以同時檢查是否有半月板積水或突出的徵兆。</p>
            <p><img src="/images/diseases/knee/mcl/c.jpg" alt="內側副韌帶受傷超音波圖片"></p>


          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
      
          <h3 style="color: #f8fafc !important;">🛡️ 治療策略：長好、長緊、不鬆弛</h3>
          <p style="color: #e2e8f0 !important;">副韌帶治療的重點在於<strong>「早期活動但限制角度」</strong>。完全不動（打石膏）反而會讓韌帶癒合後變弱。</p>
      
          <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
              <h4 style="margin-top: 0; color: #0e7490 !important;">1. 急性期：復健及護膝</h4>
              <p style="margin-bottom: 0; color: #334155 !important;">
                  <strong>復健及止痛藥先消腫止痛</strong> 對於二、三級撕裂，必須配戴兩側有金屬支架的護具。
                  <br>護膝允許膝蓋前後彎曲（避免沾黏），但<strong>嚴格禁止左右晃動</strong>（保護韌帶）。需配戴 4-6 週，直到韌帶初步癒合。
              </p>
          </div>
      
          <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
              <h4 style="margin-top: 0; color: #0e7490 !important;">2. 加速修復：<a href="/treatments/prp" class="text-cyan-400 hover:underline">PRP 增生療法</a>🔍️</h4>
              <p style="margin-bottom: 0; color: #334155 !important;">
                  韌帶一旦鬆弛就很難變緊。為了讓韌帶癒合得「強韌且緊實」，<strong style="color: #0891b2 !important;">PRP (高濃度血小板)</strong> 是最佳選擇。醫師在超音波導引下，將生長因子沿著撕裂的韌帶注射。這能加速膠原蛋白生成，就像用強力膠把撕裂的纖維緊緊黏回去，減少未來膝蓋不穩的後遺症。
              </p>
          </div>
      
          <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
              <h4 style="margin-top: 0; color: #0e7490 !important;">3. 慢性沾黏：<a href="/treatments/manual" class="text-cyan-400 hover:underline">徒手運動治療</a>🔍️</h4>
              <p style="margin-bottom: 0; color: #334155 !important;">
                  如果受傷超過 3 個月，膝蓋內側還是一直痠痛，通常是癒合過程產生了<strong>疤痕組織</strong>。體外震波或徒手運動治療搭配關節鬆動，改善活動度。
              </p>
          </div>
      
          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
      
          <h3 style="color: #f8fafc !important;">🧘‍♂️ 醫師教你做：復健運動兩階段</h3>
          <p style="color: #e2e8f0 !important;">復健的目標是先恢復角度，再強化肌肉。請在醫師指導下進行：</p>
      
          <div style="margin-bottom: 2rem;">
              <h3 style="color: #e2e8f0 ">第一階段：角度恢復 (受傷 1-2 週)</h3>
              <p style="color: #e2e8f0 !important;"><strong>足跟滑動訓練：</strong> 平躺，慢慢將腳跟往屁股方向滑動，讓膝蓋彎曲。彎到覺得緊繃微痛就停住，維持 10 秒再伸直。目標是恢復到 90 度彎曲。</p>
          </div>
      
          <div style="margin-bottom: 2rem;">
              <h3 style="color: #e2e8f0 ">第二階段：肌力強化 (受傷 3 週後)</h3>
              <p style="color: #e2e8f0 !important;"><strong>直抬腿運動：</strong> 膝蓋打直，將整條腿抬高 45 度。強化股四頭肌，幫忙穩定膝蓋。</p>
              <p style="color: #e2e8f0 !important;"><strong>蚌殼式運動：</strong> 側躺，雙膝彎曲，開合膝蓋。強化臀中肌，這是控制膝蓋不內夾（保護內側副韌帶）的最重要肌肉。</p>
          </div>
          
         <p><img src="/images/diseases/knee/mcl/d.jpg" alt="內側副韌帶受傷居家運動"></p>
          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
      
          <div style="background-color: #ecfdf5; padding: 2rem; border-radius: 1rem; margin-top: 3rem; text-align: center;">
              <h3 style="color: #047857 !important; margin-top: 0;">👨‍⚕️ 韌帶要長緊，膝蓋才穩定！</h3>
              <p style="color: #334155 !important; margin-bottom: 1.5rem;">內側副韌帶損傷雖然常見，但若忽視治療導致韌帶鬆弛，未來將大幅增加半月板磨損與退化性關節炎的風險。宸新復健科透過精準的高階超音波檢查與再生治療，協助您修復韌帶，讓膝蓋重回穩固！</p>
              <p style="font-weight: bold; color: #059669 !important;">膝蓋內側痛、左右搖晃？立即預約韌帶檢查！</p>
          </div>
        `,
        symptoms: [
          '膝蓋內側或外側有明顯壓痛點',
          '膝蓋左右搖晃不穩',
          '膝蓋內側腫脹瘀血',
          '走路時覺得膝蓋鬆鬆的'
        ],
        treatments: [
          '復健吃止痛藥與穿戴護膝',
          '<a href="/treatments/prp" class="text-cyan-400 hover:underline">PRP 增生療法</a>🔍️',
          '臀肌訓練與<a href="/treatments/manual" class="text-cyan-400 hover:underline">徒手運動治療</a>🔍️',
          '<a href="/treatments/shockwave" class="text-cyan-400 hover:underline">體外震波治療(ESWT)</a>🔍️',
        ],
        seoKeywords: [
          '膝蓋副韌帶損傷',
          'MCL',
          'LCL',
          '膝蓋內側痛',
          'PRP注射',
          '膝蓋不穩',
          '膝蓋護具'
        ],
        seoDescription: '膝蓋副韌帶損傷（MCL/LCL）造成膝蓋內側劇痛與不穩。宸新復健科提供動態超音波診斷、PRP韌帶修復與護具指導，有效解決膝蓋鬆弛問題。',
        images: [
          { src: '/images/diseases/knee/mcl/a.jpg', alt: '膝蓋副韌帶損傷' 
          }
        ]
      },


{
        id: 'iliotibial-band-syndrome',
        slug: 'iliotibial-band-syndrome',
        title: '髂脛束症候群 (跑者膝)',
        lastModified: '2026-01-21',
        description: '跑步膝蓋外側刺痛？下坡時痛感加劇？這就是典型的跑者膝！深入解析臀中肌無力與 ITBS 的關聯，以及震波治療與正確滾筒放鬆的全攻略。',
        contentHtml: `
          <p style="color: #e2e8f0 !important;">您是否有這樣的經驗：跑步跑到大約 3-5 公里時，<strong>膝蓋外側</strong>開始出現隱隱作痛，如果繼續跑下去，那種刺痛感會越來越強烈，甚至痛到無法彎曲膝蓋？休息幾天好像好了，但下次一跑，同樣的里程數又開始痛？</p>
                <br>
          <p style="color: #e2e8f0 !important;">這就是俗稱的<strong>「跑者膝」</strong>，醫學正式名稱為<strong>髂脛束症候群 (ITBS)</strong>。它是長跑者與自行車騎士最常見的夢魘。宸新復健科透過動態步態分析與高解析超音波，配合徒手運動治療評估、協助您找出是因為「臀肌失能」還是「足部過度旋前」導致的生物力學異常，並提供精準的修復方案。</p>
      
      
          <div style="background-color: #fffbeb; border: 2px solid #fbbf24; border-radius: 1rem; padding: 1.5rem; margin: 2rem 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
              <h2 style="color: #b45309 !important; margin-top: 0; font-weight: bold; border-bottom: 2px solid #fcd34d; padding-bottom: 0.5rem; display: flex; align-items: center;">
                  📢 什麼是髂脛束？為什麼膝蓋外側會痛？
              </h2>
              
              <p style="font-size: 1.1rem; color: #78350f !important;">髂脛束 (Iliotibial Band) 是一條從臀部外側一路延伸到膝蓋外側下方的厚實筋膜，像一條強韌的鋼纜，負責穩定膝蓋與髖關節。</p>
              
              <ul style="list-style: none; padding: 0; margin-top: 1rem; color: #92400e !important;">
                  <li style="margin-bottom: 1rem; display: flex; align-items: start;">
                      <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">1</span>
                      <div style="color: #92400e !important;">
                          <strong style="color: #dc2626 !important;">觀念更新：不是摩擦，是「壓迫」！</strong> 
                          過去認為 ITBS 是筋膜在骨頭上前後「摩擦」起水泡。但最新醫學研究發現，髂脛束其實是被緊緊固定在骨頭上的，根本動不了。真正的痛源是髂脛束下方的<strong>「高敏感脂肪墊 (Fat Pad)」</strong>。
                      </div>
                  </li>
                  <li style="margin-bottom: 1rem; display: flex; align-items: start;">
                      <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">2</span>
                      <div style="color: #92400e !important;">
                          <strong style="color: #0891b2 !important;">30度夾角魔咒：</strong> 
                          當膝蓋彎曲約 <strong>30度</strong> 時（正好是跑步著地的角度），緊繃的髂脛束會對下方的脂肪墊產生最大的<strong>「壓迫力」</strong>。反覆的壓迫導致脂肪墊充血、水腫、神經發炎，這就是為什麼下坡跑（膝蓋微彎受力大）會特別痛的原因。
                      </div>
                  </li>
                  <li style="margin-bottom: 0; display: flex; align-items: start;">
                      <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">3</span>
                      <div style="color: #92400e !important;">
                          <strong style="color: #0891b2 !important;">臀中肌失能 (The Root Cause)：</strong> 
                          這才是真正的兇手！當負責穩定骨盆的臀中肌無力時，另一條肌肉（闊筋膜張肌）就必須過度用力來幫忙，闊筋膜張肌連接著髂脛束，導致整條髂脛束緊繃縮短，進而壓迫膝蓋外側。
                      </div>
                  </li>
              </ul>
          </div>
        <p><img src="/images/diseases/knee/itb/b.jpg" alt="髂脛束構造"></p>

          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
      
          <h3 style="color: #f8fafc !important;">⚠️ 症狀特徵：跟其他膝蓋痛有何不同？</h3>
          <p style="color: #e2e8f0 !important;">膝蓋痛分很多種，ITBS 的特徵非常明確：</p>
          <ul style="color: #e2e8f0 !important;">
              <li><strong>痛點明確：</strong> 痛在膝蓋<strong>外側骨突處</strong>（股骨外髁），按壓會有尖銳刺痛。</li>
              <li><strong>下坡惡夢：</strong> 跑下坡或下樓梯時，疼痛感會加倍。</li>
              <li><strong>里程數魔咒：</strong> 剛開始跑不痛，直到固定里程（例如 3km）後開始痛，停下來走就不痛。</li>
              <li><strong>膝蓋伸直不痛：</strong> 膝蓋完全伸直或彎曲到底時通常不痛，痛都在彎曲 30 度左右的區間。</li>
          </ul>
      
          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
      
          <h3 style="color: #f8fafc !important;">🔍 診斷方式：超音波與壓力測試</h3>
          <p style="color: #e2e8f0 !important;">診斷 ITBS 不需要照 X 光（骨頭通常沒事），靠的是理學檢查與超音波：</p>
          
          <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
              <h4 style="margin-top: 0; color: #0e7490 !important;">1. 諾伯氏壓力測試 (Noble Compression Test)</h4>
              <p style="margin-bottom: 0; color: #334155 !important;">
                  醫師會用拇指按壓患者膝蓋外側的痛點，同時將膝蓋反覆伸直彎曲。若在彎曲 30 度時重現劇痛，即為陽性。
              </p>
          </div>
      
          <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
              <h4 style="margin-top: 0; color: #0e7490 !important;">2. 高解析超音波檢查</h4>
              <p style="margin-bottom: 0; color: #334155 !important;">
                  可以直接看到髂脛束是否增厚、腫脹，以及下方的滑囊或脂肪墊是否有積水發炎。這能排除半月板損傷或外側韌帶受傷的可能性。
              </p>
          </div>
      
          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
      
          <h3 style="color: #f8fafc !important;">🛡️ 治療策略：放鬆緊繃，強化弱點</h3>
          <p style="color: #e2e8f0 !important;">ITBS 的治療不僅是止痛，重點在於「解決肌肉張力失衡」。</p>
      
          <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
              <h4 style="margin-top: 0; color: #0e7490 !important;">1. 立即止痛：<a href="/treatments/shockwave" class="text-cyan-400 hover:underline">體外震波治療(ESWT)</a>🔍️</h4>
              <p style="margin-bottom: 0; color: #334155 !important;">
                  由於髂脛束是一條血液循環很差的筋膜，吃藥效果有限。震波治療利用高能量聲波，直接打在緊繃的髂脛束與大腿外側肌肉上，能<strong>軟化沾黏的筋膜</strong>，促進微循環，並快速阻斷神經痛覺。通常 3-5 次療程後，跑步時的刺痛感會大幅下降。
              </p>
          </div>
      
      
          <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
              <h4 style="margin-top: 0; color: #0e7490 !important;">2. 急性消腫：超音波導引注射</h4>
              <p style="margin-bottom: 0; color: #334155 !important;">
                  如果脂肪墊發炎腫脹太嚴重，導致走路一跛一跛，醫師會在超音波導引下，將微量類固醇或葡萄糖水準確注入滑囊內（神經解套），快速消除腫脹壓力。
                  <br><span style="font-size: 0.9rem; color: #78350f;">*PRP 增生療法則適用於髂脛束本身有撕裂傷的個案。</span>
              </p>
          </div>
      
          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
      
          <h3 style="color: #f8fafc !important;">🧘‍♂️ 醫師教你做：別再亂滾滾筒！</h3>
          <p style="color: #e2e8f0 !important;">很多跑者會直接拿滾筒去滾膝蓋外側最痛的地方，<strong>這是錯的！</strong> 那樣只會讓發炎的脂肪墊被壓得更扁、更痛。正確的方法是：</p>
      
          <div style="margin-bottom: 2rem;">
              <h4 style="color: #22d3ee !important;">1. 滾筒放鬆：針對闊筋膜張肌</h4>
              <p style="color: #e2e8f0 !important;">不要滾膝蓋外側，要滾<strong>「髖部外側（褲子口袋處）」</strong>。這裡才是拉緊整條髂脛束的源頭。側躺在滾筒上，在髖骨下方來回滾動，放鬆緊繃的肌肉腹。</p>
          </div>
        
          <div style="margin-bottom: 2rem;">
              <h4 style="color: #22d3ee !important;">2. 蚌殼式或橋式運動 - 喚醒臀肌</h4>
              
            <p style="color: #e2e8f0 !important;">這是治療 ITBS 的黃金動作。側躺，雙膝彎曲，雙腳併攏。像蚌殼一樣將上面的膝蓋打開、合起來。重點是用<strong>臀部側邊</strong>的力量，身體不要跟著轉。每天 3 組，每組 15 下。</p>
          <p style="color: #e2e8f0 !important;"><strong>橋式</strong>:平躺瑜珈墊，雙手放身體兩側，膝蓋彎曲，雙腳與肩同寬，由臀部發力將骨盆和軀幹向上抬起，直到肩膀、臀部、膝蓋呈一直線，停留3秒，緩緩放下臀部，每組10-20下，做3組。</p>
            </div>
      
          <div style="margin-bottom: 2rem;">
              <h4 style="color: #22d3ee !important;">3. 螃蟹走路 (Monster Walk)</h4>
              <p style="color: #e2e8f0 !important;">在膝蓋上方套上彈力圈，採取半蹲姿勢，向側面橫向移動。這能強效訓練臀中肌，穩定骨盆，減少髂脛束的負擔。</p>
          </div>
              <p><img src="/images/diseases/knee/itb/c.jpg" alt="髂脛束伸展"></p>
          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
      
          <div style="background-color: #ecfdf5; padding: 2rem; border-radius: 1rem; margin-top: 3rem; text-align: center;">
              <h3 style="color: #047857 !important; margin-top: 0;">👨‍⚕️ 練好臀部，膝蓋不痛！</h3>
              <p style="color: #334155 !important; margin-bottom: 1.5rem;">髂脛束症候群其實是身體在抗議「臀部偷懶」。只要透過震波緩解急性疼痛，並認真鍛鍊臀中肌，您就能擺脫側邊膝蓋痛的魔咒。宸新復健科，從力學根源幫您找回奔跑的樂趣！</p>
              <p style="font-weight: bold; color: #059669 !important;">跑步膝蓋外側痛？立即預約步態評估！</p>
          </div>
        `,
        symptoms: [
          '膝蓋外側骨突處（股骨外髁）刺痛',
          '跑步下坡或慢跑時疼痛加劇',
          '膝蓋彎曲 30 度時最痛',
          '臀部外側或大腿外側緊繃',
          '休息時不痛，跑固定里程後開始痛'
        ],
        treatments: [
          '體外震波治療 (ESWT)',
          '超音波導引滑囊注射',
          '滾筒肌筋膜放鬆 (TFL)',
          '臀中肌肌力訓練 (蚌殼式)',
          '步態與跑姿調整'
        ],
        seoKeywords: [
          '髂脛束症候群',
          'ITBS',
          '跑者膝',
          '膝蓋外側痛',
          '震波治療',
          '臀中肌訓練',
          '滾筒放鬆'
        ],
        seoDescription: '髂脛束症候群（跑者膝）造成膝蓋外側劇痛。宸新復健科提供震波治療、超音波導引注射與臀中肌訓練教學，有效解決跑步膝蓋痛。',
        images: [
          { 
            src: '/images/diseases/knee/itb/a.jpg', alt: '髂脛束症候群疼痛示意圖' 
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
    lastModified: '2026-01-21',
    description: '足踝相關疾病',
    image: '/images/diseases/f.jpg',
    seoKeywords: ['足底筋膜炎治療', '腳踝扭傷復健', '阿基里斯腱發炎', '腳跟痛', '扁平足'],
    seoDescription: '足底筋膜炎下床好痛？新竹震波治療推薦。專治腳踝扭傷後遺症與阿基里斯腱發炎。提供客製化足弓鞋墊與復健運動指導，徹底解決足部疼痛。',
    diseases: [

      {
          id: 'ankle-sprain',
          slug: 'ankle-sprain',
          title: '踝關節扭傷 (翻腳刀)',
          lastModified: '2026-01-21',
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

    <h3 style="color: #f8fafc !important;">🔍 超音波檢查：透視腳踝內部的「鷹眼」</h3>
    <p style="color: #e2e8f0 !important;">許多患者會問：「醫師，我 X 光照出來骨頭沒斷，為什麼還是這麼痛、這麼腫？」其實，X 光只能看大塊骨頭，<strong>韌帶、肌腱與細微裂痕必須靠高解析超音波才看得到</strong>。在宸新復健科，我們透過超音波能清楚看到以下關鍵問題：</p>

    <div style="margin-bottom: 2rem;">
        <h4 style="color: #22d3ee !important;">1. 關節積水與血腫 (Joint Effusion)</h4>
        <p style="color: #e2e8f0 !important;">扭傷當下微血管破裂，血液會瞬間灌入關節腔。超音波下可以看到關節囊被<strong>黑色的液體（血水）</strong>撐開。如果不將這些積血抽出，積血會釋放發炎物質侵蝕軟骨，造成長期腫脹與沾黏。</p>
    </div>

    <div style="margin-bottom: 2rem;">
        <h4 style="color: #22d3ee !important;">2. 韌帶撕裂傷 (Ligament Tear)</h4>
        <p style="color: #e2e8f0 !important;">正常的韌帶像是緊緻的白色纜繩。受傷時，超音波會顯示韌帶<strong>腫脹變粗、顏色變黑</strong>（水腫）。若是「完全斷裂」，則會看到韌帶連續性中斷，斷端像像橡皮筋一樣回縮，這代表關節已經失去穩定度。</p>
    </div>

    <div style="margin-bottom: 2rem;">
        <h4 style="color: #22d3ee !important;">3. 撕裂性骨折與碎骨 (Avulsion Fracture)</h4>
        <p style="color: #e2e8f0 !important;">有時候韌帶太強韌，扭傷瞬間沒有斷，反而把黏著的骨頭表面<strong>「撕」下一塊碎骨</strong>。這些細微的游離碎骨片（Loose body）在 X 光下容易被重疊忽略，但在超音波下會像「鑽石」一樣閃閃發亮，無所遁形。若不處理，這些碎骨會在關節內磨損軟骨。</p>
    </div>

            <p><img src="/images/diseases/ankle/sprain/e.jpg" alt="腳踝扭傷超音波影像"></p>

        
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
        lastModified: '2026-01-21',
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
          lastModified: '2026-01-21',
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

      },
      {
        id: 'posterior-tibial-tendonitis',
        slug: 'posterior-tibial-tendonitis',
        lastModified: '2026-01-21',
        title: '脛後肌腱炎 ',
        description: '腳踝內側腫痛？足弓塌陷變扁平足？這不只是腳的問題，可能跟脊椎力線有關！宸新復健科運用院內X光追蹤與脊椎側彎矯正架，從骨盆與脊椎源頭調整，徹底解決足部疼痛。',
        contentHtml: `
          <p style="color: #e2e8f0 !important;">您是否有這樣的困擾：走路走久了，<strong>腳踝內側骨頭下方</strong>開始紅腫刺痛？發現原本好好的足弓好像慢慢「垮」下去了，變成了扁平足？甚至從後面看，腳跟明顯往外歪斜？</p>
                <br>
          <p style="color: #e2e8f0 !important;">這就是典型的<strong>「脛後肌腱炎」</strong>，又稱為<strong>成人後天性扁平足</strong>。這不僅是肌腱發炎，更是足部地基的崩塌。值得注意的是，腳底的失衡往往源自於核心與脊椎的歪斜。在宸新復健科，我們不只醫腳，更擁有<strong>院內 X 光機</strong>即時追蹤骨骼排列，並結合專業物理治療師與<strong>脊椎側彎矯正架</strong>，從軀幹核心調整力線，減輕足部負擔，提供全方位的根治方案。</p>
         <p><img src="/images/diseases/ankle/tp/b.jpg" alt="脛後肌腱炎"></p>
      
          <div style="background-color: #fffbeb; border: 2px solid #fbbf24; border-radius: 1rem; padding: 1.5rem; margin: 2rem 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
              <h2 style="color: #b45309 !important; margin-top: 0; font-weight: bold; border-bottom: 2px solid #fcd34d; padding-bottom: 0.5rem; display: flex; align-items: center;">
                  📢 什麼是脛後肌腱？足弓的「吊橋鋼纜」
              </h2>
              
              <p style="font-size: 1.1rem; color: #78350f !important;">脛後肌腱是一條沿著小腿內側骨頭，繞過內踝，連接到腳底舟狀骨的強壯肌腱。它的功能至關重要：</p>
              
              <ul style="list-style: none; padding: 0; margin-top: 1rem; color: #92400e !important;">
                  <li style="margin-bottom: 1rem; display: flex; align-items: start;">
                      <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">1</span>
                      <div style="color: #92400e !important;">
                          <strong style="color: #dc2626 !important;">支撐足弓：</strong> 
                          它像吊橋的鋼纜一樣，負責在我們踩地時將足弓「拉起來」，提供避震與推進力。
                      </div>
                  </li>
                  <li style="margin-bottom: 1rem; display: flex; align-items: start;">
                      <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">2</span>
                      <div style="color: #92400e !important;">
                          <strong style="color: #0891b2 !important;">過勞與撕裂：</strong> 
                          當體重過重、久站久走，或是核心無力導致骨盆歪斜，這條肌腱會承受過大的拉力。久而久之，肌腱會像被拉鬆的橡皮筋一樣產生微小撕裂，最終導致足弓塌陷。
                      </div>
                  </li>
                  <li style="margin-bottom: 0; display: flex; align-items: start;">
                      <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">3</span>
                      <div style="color: #92400e !important;">
                          <strong style="color: #dc2626 !important;">動力鏈的連鎖反應：</strong> 
                          這也是我們最重視的！足弓塌陷會導致膝蓋內轉 (X型腿)、骨盆前傾，甚至引發脊椎側彎。反之，脊椎側彎也會導致雙腳受力不均，加速單側足弓崩塌。
                      </div>
                  </li>
              </ul>
          </div>
           <p><img src="/images/diseases/ankle/tp/c.jpg" alt="脛後肌腱炎造成原因" style="width: 100%; height: auto;"></p>

          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

     

    <h3 style="color: #f8fafc !important;">🏃 跑者的隱形傷痛：脛後肌與跑步的愛恨情仇</h3>
    <p style="color: #e2e8f0 !important;">很多跑者聽過「足底筋膜炎」或「跑者膝」，但卻忽略了<strong>脛後肌</strong>這個默默付出的無名英雄。其實，許多不明原因的小腿內側痛（夾脛症）或腳底痛，元兇都是它！</p>

    <div style="background-color: #fffbeb; border: 2px solid #fbbf24; border-radius: 1rem; padding: 1.5rem; margin: 2rem 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        <h4 style="color: #b45309 !important; margin-top: 0;">💡 為什麼跑步會傷到脛後肌？</h4>
        <ul style="margin-top: 0.5rem; color: #92400e !important;">
            <li style="margin-bottom: 0.5rem;"><strong>煞車與避震：</strong> 跑步著地時，腳掌會自然發生「足外翻 (Pronation)」來吸收衝擊。脛後肌的工作就是<strong>「離心收縮」</strong>，像煞車皮一樣控制外翻的速度。</li>
            <li style="margin-bottom: 0.5rem;"><strong>推進力：</strong> 離地時，它負責鎖定足部骨骼，將軟趴趴的腳掌變成堅硬的槓桿，幫助推進。</li>
            <li style="margin-bottom: 0;"><strong>過勞崩潰：</strong> 如果跑量增加太快、跑鞋支撐不足，或是本身有扁平足，脛後肌就會因為「煞車踩太久」而過勞發炎，導致足弓支撐力失效。</li>
        </ul>
    </div>
   
    <h3 style="color: #f8fafc !important;">🧘‍♂️ 醫師教你做：關鍵放鬆與強化</h3>
    <p style="color: #e2e8f0 !important;">不想跑到足弓塌陷？請務必將以下動作加入您的日常訓練菜單：</p>

    <div style="margin-bottom: 2rem;">
        <h4 style="color: #22d3ee !important;">1. 深層放鬆：小腿內側按摩</h4>
        <p style="color: #e2e8f0 !important;">脛後肌藏在小腿深層，單純拉筋很難拉到。
        <br><strong>做法：</strong> 坐在地上，將按摩球（網球或花生球）放在小腿內側骨頭（脛骨）的後方邊緣。用手加壓並尋找痠痛點，找到後停留 30-60 秒，並配合腳踝上下勾動。這能釋放深層筋膜張力。</p>
    </div>

    <div style="margin-bottom: 2rem;">
        <h4 style="color: #22d3ee !important;">2. 提踵夾球- 黃金訓練！</h4>
        <p style="color: #e2e8f0 !important;">這是專門訓練脛後肌的經典動作。
        <br><strong>做法：</strong> 光腳站立，在<strong>雙腳腳跟之間夾一顆網球</strong>。
        <br><strong>動作：</strong> 慢慢踮起腳尖，過程中<strong>用力夾緊球</strong>，不要讓球掉下來。這會強迫腳跟往內轉，精準徵召脛後肌。每組 15 下，做 3 組。</p>
    </div>
    
    <div style="margin-bottom: 2rem;">
        <h4 style="color: #22d3ee !important;">3. 彈力帶內翻訓練</h4>
        <p style="color: #e2e8f0 !important;"><strong>做法：</strong> 坐姿，一腳伸直，將彈力帶套在腳掌上，另一端固定在身體外側（或用另一腳踩住）。
        <br><strong>動作：</strong> 對抗彈力帶的阻力，將腳掌<strong>「往內、往上」</strong>翻轉（像要看腳底板一樣）。慢慢放回。這能強化脛後肌的肌耐力。</p>
    </div>

    <p><img src="/images/diseases/ankle/tp/e.jpg" alt="脛後肌腱炎放鬆及伸展" style="width: 100%; height: auto;"></p>

           <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
          <h3 style="color: #f8fafc !important;">🔍 自我檢測：你是不是危險族群？</h3>
          <p style="color: #e2e8f0 !important;">除了腳踝內側痛，您可以透過以下方式檢查：</p>
          <ul style="color: #e2e8f0 !important;">
              <li><strong>踮腳尖測試 ：</strong> 扶著牆壁，嘗試用患側單腳踮腳尖。如果<strong>無法踮起來</strong>，或是踮起來時腳跟沒有往內轉，代表肌腱已經嚴重受損。</li>
              <li><strong>太多腳趾徵象 ：</strong> 從背後看，患側的腳趾頭會往外撇，看到比好腳更多的腳趾頭（因為足弓垮了，前足外展）。</li>
              <li><strong>鞋底磨損：</strong> 鞋底內側磨損特別嚴重。</li>
          </ul>
      
          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
      
          <h3 style="color: #f8fafc !important;">🛡️ 宸新獨家優勢：從脊椎顧到足底</h3>
          <p style="color: #e2e8f0 !important;">治療脛後肌腱炎，不能只是「頭痛醫頭，腳痛醫腳」。宸新復健科整合了高科技設備與專業團隊，提供業界少見的全方位治療：</p>
      
          <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
              <h4 style="margin-top: 0; color: #0e7490 !important;">1. 超音波檢查搭配 X 光機，精準判讀診斷</h4>
              <p style="margin-bottom: 0; color: #334155 !important;">
                  我們不只用超音波看肌腱，更用 <strong>X 光</strong>看骨骼結構。
                  <ul style="margin-top: 0.5rem; color: #334155 !important;">
                      <li><strong>脛後肌超音波掃描：</strong> 搭配高解析度超音波可以清楚看到整條肌腱的結構，有無發炎或撕裂，經由超音波導引注射治療。</li>
                      <li><strong>脊椎X光拍攝：</strong> 很多足部問題源自於長短腳或脊椎側彎。透過脊椎 X 光，我們能找出導致足部受力不均的「核心元兇」。</li>
                  </ul>
              </p>
          </div>
      
   <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
          <h4 style="margin-top: 0; color: #0e7490 !important;">2. 再生治療💉：修復受損的鋼纜</h4> 
          <p style="margin-bottom: 0; color: #334155 !important;">除了矯正結構，針對已經受傷發炎的肌腱，我們提供積極的修復方案：</p>
          <ul style="margin-top: 0.5rem; color: #334155 !important;">
              <li><strong><a href="/treatments/prp" class="text-cyan-400 hover:underline">PRP 增生療法</a>：</strong> 在超音波導引下，將高濃度血小板注入撕裂的脛後肌腱中，強化肌腱結構，避免斷裂。</li>
              <li><strong><a href="/treatments/shockwave" class="text-cyan-400 hover:underline">體外震波治療(ESWT)</a>：</strong> 擊碎慢性沾黏組織，促進肌腱周圍的血液循環。</li>
          </ul>
        </p>
     </div>

      
          <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
              <h4 style="margin-top: 0; color: #0e7490 !important;">3. <a href="/treatments/manual" class="text-cyan-400 hover:underline">專業物理治療師團隊</a>🔍️</h4>
              <p style="margin-bottom: 0; color: #334155 !important;">
                  我們的治療師具備脊椎矯正與足部生物力學的雙重專業。
                  <ul style="margin-top: 0.5rem; color: #334155 !important;">
                      <li><strong>縮足運動：</strong> 手把手教您如何用腳底小肌肉重建足弓。</li>
                      <li><strong>步態訓練：</strong> 矯正走路內八或外八的習慣。</li>
                      <li><strong>客製化鞋墊建議：</strong> 針對結構性扁平足，提供專業的鞋墊選配建議。</li>
                  </ul>
              </p>
          </div>
      
                <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
              <h4 style="margin-top: 0; color: #0e7490 !important;">4. <a href="/about/clinic/scoliosis-rack" class="text-cyan-400 hover:underline">脊椎側彎矯正架</a></h4>
              <p style="margin-bottom: 0; color: #334155 !important;">
                  <strong>這與腳痛有什麼關係？關係大了！</strong>
                  如果骨盆歪斜或脊椎側彎，身體重心會偏移，導致單腳足弓承受巨大壓力，肌腱炎永遠好不了。
                  我們利用專業的<strong>矯正架懸吊系統</strong>，由物理治療師指導，矯正軀幹與骨盆的排列，讓身體重心回正，徹底解除施加在足弓上的異常壓力。這是真正治本的關鍵。
              </p>
          </div>
       <p><img src="/images/diseases/ankle/tp/d.jpg" alt="脛後肌腱炎治療方式"></p>

          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">
      
          <div style="background-color: #ecfdf5; padding: 2rem; border-radius: 1rem; margin-top: 3rem; text-align: center;">
              <h3 style="color: #047857 !important; margin-top: 0;">👨‍⚕️ 救足弓，要從「準確診斷」開始！</h3>
              <p style="color: #334155 !important; margin-bottom: 1.5rem;">脛後肌腱炎是身體力線崩塌的警訊。在宸新復健科，我們不只看您的腳，更看您的脊椎與骨盆。透過院內超音波及 X 光追蹤、增生注射、脊椎側彎矯正架與專業物理治療，我們從源頭改善受力機制，讓您的雙腳重獲支撐力！</p>
              <p style="font-weight: bold; color: #059669 !important;">走路腳踝內側痛？立即預約全身力線評估！</p>
          </div>
        `,
        symptoms: [
          '腳踝內側（內踝下方）紅腫刺痛',
          '走路久了腳底板痠痛',
          '無法單腳踮腳尖',
          '足弓塌陷，變成後天性扁平足',
              ],
        treatments: [
          '<a href="/treatments/manual" class="text-cyan-400 hover:underline">徒手運動治療及體態評估</a>🔍️',
          '<a href="/treatments/prp" class="text-cyan-400 hover:underline">PRP 增生療法</a>🔍️',
          '<a href="/treatments/shockwave" class="text-cyan-400 hover:underline">體外震波治療(ESWT)</a>🔍️',
          '客製化足弓鞋墊'
        ],
        seoKeywords: [
          '脛後肌腱炎',
          '後天性扁平足',
          '足弓塌陷',
          '腳踝內側痛',
          '脊椎側彎矯正',
          'X光檢查',
          '物理治療'
        ],
        seoDescription: '脛後肌腱炎造成腳踝內側痛與足弓塌陷。宸新復健科獨家結合院內X光追蹤與脊椎側彎矯正架，從骨盆脊椎源頭調整力線，徹底解決足部疼痛。',
        images: [
          { src: '/images/diseases/ankle/tp/a.jpg', alt: '脛後肌腱炎示意圖' 
          }
        ]
      }

    ]
  }
]

// ==========================================
// ✨ 1. 自動化瘦身區 (給 Sitemap 與 列表頁 使用)
// ==========================================
// 這段程式碼會自動過濾掉 "contentHtml"，只保留輕量資訊。
// 這樣 sitemap.ts 導入這個變數時，就不會載入過重的文章內文。

export const diseaseCategoriesList = diseaseCategories.map((category) => ({
  slug: category.slug,
  title: category.title,
  description: category.description,
  image: category.image,
  // SEO 欄位保留給列表頁使用
  seoKeywords: category.seoKeywords,
  seoDescription: category.seoDescription,
  // 針對裡面的疾病，把 "contentHtml" 拿掉
  lastModified: category.lastModified,
  diseases: category.diseases.map((disease) => {

    const { contentHtml, treatments, images, ...lightweightData } = disease;
    
    return lightweightData;
  }),
}));


// ==========================================
// ✨ 2. Helper Functions (資料讀取函式)
// ==========================================

// 取得單一分類 (使用原始資料，確保資料完整性)
export function getCategoryBySlug(slug: string) {
  return diseaseCategories.find(c => c.slug === slug)
}

// 取得單一疾病完整內容 (內頁用：必須讀取原始 diseaseCategories 以取得 contentHtml)
export function getDiseaseBySlug(categorySlug: string, diseaseId: string) {
  const category = getCategoryBySlug(categorySlug)
  if (!category) return undefined
  // 支援透過 id 或 slug 查找
  return category.diseases.find(d => d.id === diseaseId || d.slug === diseaseId)
}

// 取得所有疾病列表 (列表頁/Sitemap用：改用 diseaseCategoriesList 以提升效能)
export function getAllDiseases() {
  // 這裡改用瘦身過的 list，這樣在生成所有文章列表時，不會佔用大量記憶體
  return diseaseCategoriesList.flatMap(category => category.diseases);
}

// 生成所有靜態路徑參數 (SSG用：使用輕量資料)
export function generateAllDiseaseParams(): Array<{ category: string; slug: string }> {
  const params: Array<{ category: string; slug: string }> = []
  
  diseaseCategoriesList.forEach((category) => {
    category.diseases.forEach((disease) => {
      params.push({
        category: category.slug,
        slug: disease.slug,
      })
    })
  })
  
  return params
}

// 生成所有分類路徑參數 (SSG用)
export function generateAllCategoryParams(): Array<{ category: string }> {
  return diseaseCategoriesList.map((category) => ({
    category: category.slug,
  }))
}