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
    id: 'case-rotator-cuff-art-teacher',
    title: '那雙教會我畫畫的手，舉不起來了...高中美術老師的旋轉肌修復之旅',
    summary: '昔日實驗高中的美術恩師，因木工勞損導致嚴重旋轉肌撕裂，夜不成眠且無法作畫。本以為難逃開刀命運，透過超音波導引與高濃度葡萄糖增生療法，歷經六次治療，見證撕裂傷口從「破洞」到「填滿」的癒合奇蹟，重拾畫筆。',
    contentHtml: `
        <div class="quote-box" style="border-left: 4px solid #06b6d4; border-radius:8px; padding-left: 1rem; margin: 1.5rem 0; font-style: italic; color: #64748b; background-color: #f8fafc; padding: 1rem;">
          <p class="mb-0" style="font-size: 1.1rem; font-weight: 500;">「以前是老師教我用眼睛觀察美、用手創造美；現在換我用超音波的眼睛、治療的手，來守護老師的創作生涯。」</p>
        </div>
  
        <p>那天診間門一開，進來的是一位熟悉又敬重的身影——我的高中美術老師。</p>
        <p>看著她，我不禁想起以前在<strong>實驗高中</strong>的日子。實中有個很棒的傳統，就是畢業前每個人都要畫一幅油畫。那時候，正是這位老師帶著我們一點一滴教會我調色、構圖，更讓我愛上了藝術，懂得在忙碌的生活中停下來欣賞美。</p>
        <p>但這次見面，老師的眉頭深鎖，那雙曾經揮灑自如的手，此刻卻撫著肩膀，顯得無力而沈重。</p>
  
        <h2>從拿畫筆到搬木頭，旋轉肌的無聲抗議</h2>
        <p>「羿辰，我的手現在連舉都舉不太起來，晚上更是痛到沒辦法睡...」老師無奈地說。</p>
        <p>原來，老師近年來醉心於木工創作。為了追求作品的完美，她頻繁地搬運沈重的原木、長時間敲打琢磨。這些高強度的反覆動作，早已超過了身體的負荷。原本是用來創造藝術的雙手，卻因為過度操勞，造成了肩膀<a href="/diseases/shoulder/rotator-cuff-tear" class="text-cyan-400 hover:underline">旋轉肌嚴重撕裂傷</a>。</p>
        <p>對一位創作者來說，手舉不起來，不僅是生活的困擾，更是心靈的折磨——這意味著她<strong>再也沒辦法好好畫畫了</strong>。</p>
  
        <h2>超音波下的殘酷真相與轉機</h2>
        <p>我拿起超音波探頭，滑過老師的肩膀。螢幕上的影像讓我心裡沈了一下：<strong>撕裂傷的範圍很大</strong>。</p>
        <p>依照傳統的骨科觀點，這樣程度的撕裂，往往意味著漫長的復健，甚至不得不考慮<strong>手術修復</strong>。聽到可能要開刀，老師的眼神流露出擔憂，她不想因為手術而有長期的停工期，更害怕術後的不確定性。</p>
        <p>「老師，我們先別急著開刀。」我看著影像中殘存的肌腱組織，判斷還有再生的機會：「我們試試看用修復的方式，讓它自己長回來。」</p>
  
        <figure style="margin: 2rem 0;">
           <img src="/images/cases/art/b.webp" alt="旋轉肌撕裂修復過程超音波對照圖" style="border-radius: 8px; width: 60%;">
        </figure>

        <h2>看得見的癒合：六次治療的修復之路</h2>
        <p>我們擬定了治療計畫：<strong>超音波導引注射</strong>搭配<strong>高濃度葡萄糖 (Prolotherapy)</strong>。</p>
        <p>這是一場耐心與信心的馬拉松。第一次因為撕裂範圍很大，先做了<a href="/treatments/prp" class="text-cyan-400 hover:underline">PRP 增生療法</a>
            ；隨後的五次治療，則是改用兩周一次的高濃度葡萄糖增生注射。</p>
  
        <p>身為美術老師，她對「視覺」特別敏銳。每次回診，我們都會一起看著超音波螢幕。這成了我們之間新的「評圖」時間——評的不是油畫，而是肌腱的修復進度。</p>
        <p>「林醫師，這個黑黑的<strong>破洞好像真的變小</strong>了！」老師指著螢幕驚喜地說。</p>
        <p>是的，每一次注射，我們都親眼見證傷口<strong>一點一滴地癒合</strong>。隨著影像上的黑影縮小，老師笑容也變多了。她開始能睡個好覺，手能舉高了，最重要的是，她終於能再次拿起畫筆。</p>
  
        <h2>藝術與醫術的交會</h2>
        <p>最後一次回診，超音波顯示旋轉肌已經順利癒合。老師轉動著肩膀，開心地告訴我她已經開始構思新的畫作。</p>
        <p>看著老師離去的背影，我很慶幸能運用我的專業，回報當年的啟蒙之恩。醫療有時不僅是治癒身體，更是為了守護病人熱愛生活的能力。</p>
                <figure style="margin: 2rem 0;">
           <img src="/images/cases/art/a.webp" alt="旋轉肌撕裂修復完成合照" style="border-radius: 8px; width: 50%;">
        </figure>
  

        <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 2rem 0;">
  
        <div class="doctor-note" style="background-color: #fff7ed; border-left: 4px solid #f97316; padding: 1.5rem; border-radius:8px; margin-bottom: 2rem;">
          <h3 style="margin-top: 0; color: #c2410c; font-size: 1.2rem; display: flex; align-items: center; gap: 0.5rem;">
              <i class="fa-solid fa-user-doctor"></i> 醫師手札
          </h3>
          <p style="color: #431407; font-style: italic; margin-bottom: 0;">
            「許多旋轉肌撕裂的患者，一聽到『撕裂』兩個字就覺得天崩地裂，以為一定要開刀。其實在超音波導引下，若撕裂程度未完全斷裂，透過高濃度葡萄糖或 PRP 啟動身體的修復機制，人體的自癒潛力往往超乎想像。能幫老師保住不用開刀的肩膀，是我身為學生最驕傲的成績單。」
          </p>
        </div>
        
        <div class="cta-box" style="background-color: #f3f4f6; padding: 1.5rem; border-radius: 8px; margin-top: 2rem; color: #374151;">
          <h3 style="margin-top: 0; color: #111827;">肩膀痛到手舉不起來？</h3>
          <p style="color: #374151;">旋轉肌撕裂不一定非開刀不可。透過精密超音波診斷，評估是否適合免開刀的修復注射治療。</p>
          <p style="margin-bottom: 0;">
            <a href="/treatments/prp" style="color: #2563eb; text-decoration: underline; font-weight: bold;">
              👉 點此了解：增生療法如何修復撕裂傷
            </a>
          </p>
        </div>
    `,
    date: '2026-02-02', 
    category: '增生注射',
    tags: ['旋轉肌撕裂', '增生療法', '高濃度葡萄糖', '免開刀', 'PRP'], 
    coverImage: '/images/cases/art/a.webp', 
    relatedTreatments: ['prolotherapy', 'ultrasound-guided-injection'] 
  }, 
 
 
  {
    id: 'case-prp-01y',
      title: '65歲膝蓋嚴重退化：超音波導引PRP精準注射，成功免開刀擺脫拐杖',
      summary: '65歲阿嬤因膝蓋退化性關節炎寸步難行，因心肺風險無法手術。曾於他處多次施打玻尿酸與PRP無效，經評估後採用「先抽積水、後精準注射」策略，針對內側半月板破損處修復。3次療程後疼痛顯著改善，終於丟掉拐杖行動自如。',
      contentHtml: `
          <div class="quote-box" style="border-left: 4px solid #06b6d4; border-radius: 8px; padding-left: 1rem; margin: 1.5rem 0; font-style: italic; color: #64748b; background-color: #f8fafc; padding: 1rem;">
  <p class="mb-0" style="font-size: 1.1rem; font-weight: 500;">
    「林醫師，我本來以為這輩子都要拿拐杖了...沒想到還能再次自己走進來。」
  </p>
</div>
    
          <p>那天，一位 65 歲的阿嬤拄著拐杖，在鄰居的介紹下走進了我的診間。她每走一步，眉頭就深鎖一次，那是長期忍受 <a href="/diseases/knee/knee-osteoarthritis" class="text-cyan-400 hover:underline">膝蓋退化性關節炎</a> 折磨的疲憊神情。</p>
      
          <h2>當治療無效，只剩開刀的恐懼</h2>
          <p>阿嬤一坐下就充滿無奈地說：「林醫師，我真的沒辦法了。我去過大醫院打好幾次玻尿酸，也在附近診所打過好幾次 <strong>PRP (高濃度血小板血漿)</strong>，錢花了不少，但效果真的都不好……」</p>
          
          <p>其實阿嬤的膝蓋退化相當嚴重，本來已經打算開刀置換人工關節。但因為她本身心肺功能不佳，麻醉與手術的風險極高，家人不敢冒險，她自己也害怕下不了手術台。在進退兩難、寸步難行的情況下，她抱著最後一絲希望來嘗試。</p>
          
          <figure style="margin: 2rem 0;">
            <img src="/images/cases/prpknee/a.webp" alt="退化性關節炎X光顯示內側關節間隙狹窄" style="border-radius: 8px; width: 40%;">
           </figure>
         
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
          
          <figure style="margin: 2rem 0;">
            <img src="/images/cases/prpknee/b.webp" alt="超音波導引下精準注射半月板破裂處" style="border-radius: 8px; width: 50%;">
            
          </figure>
    
          <h2>從舉步維艱到丟掉拐杖</h2>
          <p>第一次治療後，阿嬤回診時神情輕鬆許多，她說：「醫師，好像稍微比較不痛了耶！」這微小的進步建立了她的信心。我們按部就班，一個月進行一次治療。</p>
          <p>到了第三次療程結束後的回診，打開診間門看到一個熟悉的身影——但這次，她手上沒有拿拐杖。阿嬤走進診間，笑得非常開心，那是久違的自信。她說：「醫師，我終於可以不用靠這支拐杖，可以行動自如了！」</p>
      
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 2rem 0;">
    
          <div class="doctor-note" style="background-color: #fff7ed; border-left: 4px solid #f97316; padding: 1.5rem; border-radius: 8px ; margin-bottom: 2rem;">
            <h3 style="margin-top: 0; color: #c2410c; font-size: 1.2rem; display: flex; align-items: center; gap: 0.5rem;">
               <i class="fa-solid fa-user-doctor"></i> 醫師手札
            </h3>
            <p style="color: #431407; font-style: italic; margin-bottom: 0;">
              「身為復健科醫師，最大的成就感往往不是影像上的進步，而是看到患者笑容的回歸。看著阿嬤離去的背影，不再是蹣跚沈重，而是輕盈自在，這就是為什麼我堅持每一針都要配合超音波導引——因為精準，才能不負患者將生活品質託付給我的這份信任。」
            </p>
          </div>
      
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
    coverImage: '/images/cases/prpknee/a.webp', // 建議更換為您的實際案例圖檔名
    relatedTreatments: ['prp-injection', 'ultrasound-guided-injection'] 
  },

  {
    id: 'case-frozen-shoulder-distension',
    title: '50歲的五十肩惡夢：為什麼病人想打 PRP，我卻拒絕了？',
    summary: '50歲女性因嚴重五十肩導致生活一團亂，夜間痛醒、無法穿衣。外院誤診為撕裂傷建議施打昂貴PRP。經超音波檢查確認無撕裂僅為沾黏，改採「肩關節擴張術」治療。一次注射後夜間疼痛即消失，最終完全康復。',
    contentHtml: `
        <div class="quote-box" style="border-left: 4px solid #06b6d4; border-radius: 8px; padding-left: 1rem; margin: 1.5rem 0; font-style: italic; color: #64748b; background-color: #f8fafc; padding: 1rem;">
          <p class="mb-0" style="font-size: 1.1rem; font-weight: 500;">「林醫師，只要能不痛，多少錢我都願意花...謝謝醫師沒有讓我花冤枉錢，還治好了我的病。」</p>
        </div>
  
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
        
        <figure style="margin: 2rem 0;">
          <img src="/images/cases/fs/a.webp" alt="肩關節擴張術示意圖" style="border-radius: 8px; width: 40%;">
         
        </figure>
  
        <p>注射剛結束，我請她試著舉手。她驚訝地發現：「醫師，我可以多舉高快 10 度耶！」</p>
        <p>更神奇的在後頭，回去的夜晚終於沒有被痛醒，紮紮實實地睡了一覺。兩個禮拜後回診，她是笑著走進來的，氣色完全不同。她開心地說：「林醫師，我終於找回我的生活了！」</p>
    
        <h2>正確診斷，才能少走冤枉路</h2>
        <p>後續我們又進行了兩次擴張注射，搭配徒手關節鬆動治療，她的肩膀現在已經完全恢復正常，可以自在地梳頭、穿衣。</p>
        <p>五十肩的痛苦，外人很難體會。但我想告訴大家，醫療沒有萬靈丹，PRP 雖好，但要用在對的地方。<strong>精準的診斷</strong>加上<strong>對症下藥</strong>，才能真正幫助病人走出疼痛的深淵。</p>
  
        <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 2rem 0;">
  
        <div class="doctor-note" style="background-color: #fff7ed; border-left: 4px solid #f97316; padding: 1.5rem; border-radius:8px; margin-bottom: 2rem;">
          <h3 style="margin-top: 0; color: #c2410c; font-size: 1.2rem; display: flex; align-items: center; gap: 0.5rem;">
             <i class="fa-solid fa-user-doctor"></i> 醫師手札
          </h3>
          <p style="color: #431407; font-style: italic; margin-bottom: 0;">
            「拒絕病人的『主動消費』，有時候比說服病人治療更難。當病人捧著錢求救時，醫師能不能守住專業的底線，如實告知『其實妳不需要這麼貴的治療』？對我來說，醫療不是商業買賣，而是一份信任。看到她不用花大錢就能重拾笑容，這比任何營收都來得珍貴。」
          </p>
        </div>
        
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
    category: '肩關節擴張術',
    tags: ['五十肩', 'dilation', '沾黏', '糖尿病', '免開刀'], 
    coverImage: '/images/cases/fs/a.webp', // 記得更換對應圖片
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