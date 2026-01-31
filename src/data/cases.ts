// src/data/cases.ts

export interface CaseStudy {
  id: string;
  title: string;
  summary: string;
  contentHtml: string;
  date: string;
  category: string;
  tags: string[];
  coverImage: string;
  relatedTreatments: string[]; 
  seoTitle?: string;
  seoDescription?: string;
}

export const casesData: CaseStudy[] = [
  {
    id: 'case-prp-01y',
    title: '65歲膝蓋嚴重退化：超音波導引PRP精準注射，成功免開刀擺脫拐杖',
    summary: '65歲阿嬤因膝蓋退化性關節炎寸步難行，因心肺風險無法手術。曾於他處多次施打玻尿酸與PRP無效，經評估後採用「先抽積水、後精準注射」策略，針對內側半月板破損處修復。3次療程後疼痛顯著改善，終於丟掉拐杖行動自如。',
    contentHtml: `
      <p>那天，一位 65 歲的阿嬤拄著拐杖，在鄰居的介紹下走進了我的診間。她每走一步，眉頭就深鎖一次，那是長期忍受 <a href="/diseases/knee/knee-osteoarthritis" class="text-cyan-400 hover:underline">膝蓋退化性關節炎</a>，折磨的疲憊神情。</p>
  
      <h2>當治療無效，只剩開刀的恐懼</h2>
      <p>阿嬤一坐下就充滿無奈地說：「林醫師，我真的沒辦法了。我去過大醫院打好幾次玻尿酸，也在附近診所打過好幾次 <strong>PRP (高濃度血小板血漿)</strong>，錢花了不少，但效果真的都不好……」</p>
      <p>其實阿嬤的膝蓋退化相當嚴重，本來已經打算開刀置換人工關節。但因為她本身心肺功能不佳，麻醉與手術的風險極高，家人不敢冒險，她自己也害怕下不了手術台。在進退兩難、寸步難行的情況下，她抱著最後一絲希望來嘗試。</p>
          <p><img src="/images/cases/prpknee/a.jpg" alt: '退化性關節炎x光"></p>
     
      <h2>為什麼之前的 PRP 沒效？關鍵在「細節」</h2>
      <p>詳細檢查後，我發現阿嬤的膝蓋有明顯積水，且內側<strong>半月板磨損</strong>嚴重。我向她解釋：「阿嬤，之前的治療效果不好，可能跟『濃度』和『注射位置』有關。」</p>
      <p>若膝蓋關節腔內有發炎積水，直接施打 PRP 會導致生長因子被稀釋，效果大打折。此外，退化的源頭往往不只在關節腔，更在於受損的半月板與周邊韌帶。</p>
  
      <h2>精準醫療：超音波導引下的修復工程</h2>
      <p>經過溝通建立信心後，我們決定展開新的療程。我堅持施打前的標準作業程序（SOP）：</p>
      <ul>
        <li><strong>抽吸積水：</strong>先利用超音波確認積水位置，將關節內的髒水抽乾淨，避免 PRP 被稀釋。</li>
        <li><strong>精準定位：</strong>不只是打入關節腔，更利用<strong>超音波導引</strong>，清楚看見內側半月板及周邊韌帶的撕裂處。</li>
        <li><strong>定點注射：</strong>將高濃度的 PRP 精準注射到最需要修復的破損位置。</li>
      </ul>
          <p><img src="/images/cases/prpknee/b.jpg" alt: '半月板破裂超音波圖片"></p>
      <h2>從舉步維艱到丟掉拐杖</h2>
      <p>第一次治療後，阿嬤回診時神情輕鬆許多，她說：「醫師，好像稍微比較不痛了耶！」這微小的進步建立了她的信心。我們按部就班，一個月進行一次治療。</p>
      <p>到了第三次療程結束後的回診，打開診間門看到一個熟悉的身影——但這次，她手上沒有拿拐杖。阿嬤走進診間，笑得非常開心，那是久違的自信。她說：「醫師，我終於可以不用靠這支拐杖，可以行動自如了！」</p>
  
    
     <p>這個案例告訴我們，<strong>嚴重的退化性關節炎</strong>不一定只能開刀。透過正確的診斷、抽吸積水的前置作業，加上<strong>超音波導引的精準注射</strong>，即使是困難的案例，也有機會透過再生醫療找回生活品質。</p>
    
<div class="cta-box" style="background-color: #f3f4f6; padding: 1.5rem; border-radius: 8px; margin-top: 2rem; color: #374151;">
      <h3 style="margin-top: 0; color:rgb(15, 49, 121);">想更了解 PRP 增生療法？</h3>
      <p style="color: #374151;">如果您或家人也有關節疼痛、退化性關節炎的困擾，想知道 PRP 是如何幫助組織修復，歡迎查看詳細介紹。</p>
      <p style="margin-bottom: 0;">
        <a href="/treatments/prp" style="color: #2563eb; text-decoration: underline; font-weight: bold;">
          👉 點此了解：PRP 增生療法原理與適應症
        </a>
      </p>
    </div>
    
     `,
    date: '2026-01-31',
    category: 'PRP注射',
    tags: ['膝蓋退化', 'PRP', '免開刀', '半月板損傷'], 
    coverImage: '/images/cases/prpknee/a.jpg', // 建議更換為您的實際案例圖檔名
    relatedTreatments: ['prp-injection', 'ultrasound-guided-injection'] 
  },

  {
    id: 'case-frozen-shoulder-distension',
    title: '50歲的五十肩惡夢：為什麼病人想打 PRP，我卻拒絕了？',
    summary: '50歲女性因嚴重五十肩導致生活一團亂，夜間痛醒、無法穿衣。外院誤診為撕裂傷建議施打昂貴PRP。經超音波檢查確認無撕裂僅為沾黏，改採「肩關節擴張術」治療。一次注射後夜間疼痛即消失，最終完全康復。',
    contentHtml: `
      <p>那天，一位 50 歲的女士走進診間，她的臉色黯淡，眼圈很深，一看就是長期沒睡好。</p>
      <p>她坐下來的第一句話，不是喊痛，而是充滿挫折地說：「林醫師，我的生活現在簡直是一團亂……」</p>
  
      <h2>當痛不只是痛，而是生活的崩塌</h2>
      <p>這位病人本身有<strong>糖尿病</strong>和<strong>甲狀腺疾病</strong>，這兩者正是<a href="/diseases/shoulder/frozen-shoulder" class="text-cyan-400 hover:underline">五十肩 (沾黏性肩關節囊炎)</a>的高風險族群。她右邊肩膀已經痛了半年，起初只是覺得活動卡卡的、有一點痛，她以為忍一忍就好。</p>
      <p>沒想到惡夢慢慢開始。從沒辦法扣內衣、沒辦法梳頭，到最後手根本舉不過頭。最折磨的是晚上，只要一翻身壓到右肩，那種鑽心的痛會瞬間把她痛醒。長期睡眠不足，讓她精神耗弱，工作表現一落千丈，連家事都力不從心。</p>
      <p>「我試過推拿、針灸，也看了好多醫生，完全沒效。」她拿出一疊資料說：「之前的診所說我是『旋轉肌撕裂傷』，說一定要打 <strong>PRP (高濃度血小板血漿)</strong> 才會好。朋友介紹我來宸新，我想說好吧，那就打 PRP 吧，只要能好，多少錢我都願意花。」</p>
  
      <h2>醫師的良心：只給對的，不給貴的</h2>
      <p>聽到這裡，我沒有馬上答應幫她打針。我拿起超音波探頭，仔細檢查了她的肩膀。</p>
      <p>螢幕上顯示，她的旋轉肌腱雖然有些許發炎腫脹，但<strong>完全沒有撕裂傷</strong>。真正的元兇，是關節囊嚴重發炎、沾黏，就像那種黏得死緊的膠帶，把關節鎖死了。</p>
      <p>我看著她的眼睛，堅定地告訴她：「<strong>妳不需要打 PRP。</strong>」</p>
      <p>她愣住了，以為我不想救她。我解釋道：「妳的問題是『沾黏』，不是『撕裂』。PRP 是用來修復破損的組織，對妳這種嚴重的沾黏，效果並不好。妳現在需要的，是把沾黏撐開。」</p>
      <p>如果當時我順著她的意幫她打 PRP，她可能要多花好幾萬塊，卻換來失望的結果。<strong>醫師的良心很重要，我必須選擇「適合」病人的治療，而不是「最貴」的治療。</strong></p>
  
      <h2>肩關節擴張術：撐開沾黏，重獲自由</h2>
      <p>經過溝通，我們決定進行<a href="/treatments/shoulder-dilation" class="text-cyan-400 hover:underline">肩關節擴張注射</a>。在超音波導引下，我將食鹽水精準注入她緊縮的關節囊中，利用液體的壓力將沾黏的組織溫柔地<strong>「撐開」</strong>。</p>
      <p>注射剛結束，我請她試著舉手。她驚訝地發現：「醫師，我可以多舉高快 10 度耶！」</p>
      <p>更神奇的在後頭，回去的夜晚終於沒有被痛醒，紮紮實實地睡了一覺。兩個禮拜後回診，她是笑著走進來的，氣色完全不同。她開心地說：「林醫師，我終於找回我的生活了！」</p>
  
      <h2>正確診斷，才能少走冤枉路</h2>
      <p>後續我們又進行了兩次擴張注射，搭配徒手關節鬆動治療，她的肩膀現在已經完全恢復正常，可以自在地梳頭、穿衣。</p>
      <p>五十肩的痛苦，外人很難體會。但我想告訴大家，醫療沒有萬靈丹，PRP 雖好，但要用在對的地方。<strong>精準的診斷</strong>加上<strong>對症下藥</strong>，才能真正幫助病人走出疼痛的深淵。</p>
      <p><img src="/images/cases/fs/a.jpg" alt: '五十肩治療成果" style="width: 40%; height: auto;"></p>
      <hr />
      
      <div class="cta-box" style="background-color: #f3f4f6; padding: 1.5rem; border-radius: 8px; margin-top: 2rem; color: #374151;">
        <h3 style="margin-top: 0; color: #111827;">肩膀痛很久都好不了？</h3>
        <p style="color: #374151;">如果您也有五十肩的困擾，或是被建議施打昂貴療程卻不確定是否適合，歡迎點選下方連結，了解更多關於五十肩的治療方式。</p>
        <p style="margin-bottom: 0;">
          <a href="/treatments/shoulder-dilation" style="color: #2563eb; text-decoration: underline; font-weight: bold;">
            👉 點此了解：肩關節擴張術與五十肩治療
          </a>
        </p>
      </div>
    `,
    date: '2026-01-31', // 設定一個未來的日期或當前日期
    category: '肩膀疼痛',
    tags: ['五十肩', 'dilation', '沾黏', '糖尿病', '免開刀'], 
    coverImage: '/images/cases/fs/a.jpg', // 記得更換對應圖片
    relatedTreatments: ['frozen-shoulder-treatment', 'hydrodilatation'] 
  }
  // ... 其他案例
];

export function getCaseById(id: string): CaseStudy | undefined {
  return casesData.find((post) => post.id === id);
}

/**
 * 修改後：根據 Tags 抓取相關案例
 * @param tags 治療項目的標籤 (例如 treatment.tags)
 * @param limit 顯示數量限制
 */
export function getRelatedCases(tags: string[] | undefined, limit: number = 3): CaseStudy[] {
  // 1. 如果治療項目沒有 tags，直接回傳空陣列 (不顯示)
  if (!tags || tags.length === 0) return [];

  // 2. 篩選邏輯：檢查案例的 tags 是否包含傳入的任一個 tag
  // 例如：治療有 'PRP'，案例也有 'PRP' -> 配對成功
  const filtered = casesData.filter(c => 
    c.tags && c.tags.some(caseTag => tags.includes(caseTag))
  );

  // 3. 回傳篩選結果 (若無配對則回傳空陣列，不自動補最新文章)
  return filtered.slice(0, limit);
}