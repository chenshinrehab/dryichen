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
    id: 'case-precocious-puberty-height',
    title: '妳敢信這是一雙7歲的手？全班最高的她，骨齡竟已10歲...偷走身高的性早熟警訊',
    summary: '七歲小女生身高鶴立雞群，家長原本引以為傲，直到摸到乳房硬塊才驚覺不對勁。經朋友介紹至宸新拍攝骨齡，赫然發現骨齡超前三歲！預估身高從遺傳的167公分暴跌至155公分。透過緊急轉診至兒童內分泌科施打柳普林，我們要在這場與生長板閉合的賽跑中，搶回孩子的未來身高。',
    contentHtml: `
        <div class="quote-box" style="border-left: 4px solid #06b6d4; border-radius:8px; padding-left: 1rem; margin: 1.5rem 0; font-style: italic; color: #64748b; background-color: #f8fafc; padding: 1rem;">
          <p class="mb-0" style="font-size: 1.1rem; font-weight: 500;">「你敢相信這是一位7歲小朋友的手部 X 光嗎？因為判讀起來，這雙手的骨骼年齡竟然已經10歲了。」</p>
        </div>
  
        <p>看著燈箱上的 X 光片，診間裡的氣氛瞬間凝結。這句話對於坐在對面的爸媽來說，無疑是一記重擊。</p>
        <p>故事的主角是一位可愛的7歲小女生。她在班上總是鶴立雞群，身高一直名列前茅。爸爸媽媽看著孩子長得比同齡人高，心裡原本是高興的，以為這孩子發育得好，贏在了起跑點。</p>
        <p>直到最近，媽媽在幫女兒洗澡時，意外在<strong>乳暈下方觸摸到硬塊</strong>，甚至感覺乳房似乎開始發育了。這份「發育太好」的喜悅，瞬間轉變為對「性早熟」的恐慌。</p>
  
        <h2>鶴立雞群的背後：被偷走的 12 公分</h2>
        <p>家長上網查了許多資料，越看越擔心，最後在朋友的介紹下，來到<strong>宸新</strong>進行專業的<a href="/weight-bone/bone-age" class="text-cyan-400 hover:underline">骨齡評估</a>。</p>
        <p>「醫師，她才七歲，怎麼可能骨頭已經十歲了？」媽媽焦急地問。</p>
        <p>事實擺在眼前，X 光片顯示生長板的成熟度遠超乎預期。我們立刻進行了身高預測計算，結果令人心碎：</p>
        <ul style="background-color: #fff1f2; padding: 1.5rem; border-radius: 8px; list-style-type: none;">
            <li style="margin-bottom: 0.5rem;">🧬 <strong>依遺傳計算的目標身高： 167 公分</strong></li>
            <li style="margin-bottom: 0.5rem; color: #e11d48; font-weight: bold;">⚠️ 依目前骨齡預測的成年身高： 155 公分</li>
            <li style="border-top: 1px solid #fecdd3; padding-top: 0.5rem; margin-top: 0.5rem;">📉 <strong>整整消失了 12 公分！</strong></li>
        </ul>
        <p>這就是性早熟最可怕的地方——<strong>「小時候高不是高」</strong>。過早啟動的荷爾蒙雖然讓孩子現在看起來比別人高，但卻加速了生長板的閉合，像是提早把未來的身高額度給透支光了。</p>
                 <p><img src="/images/cases/boneage/1.webp " alt="骨齡X光" style="width: 50%; height: auto;"></p>
        <h2>與時間賽跑：緊急轉診與柳普林治療</h2>
        <p>面對這消失的12公分，我們一刻都不能等。</p>
        <p>在宸新完成初步評估後，我們立刻協助轉診至醫院的<strong>兒童內分泌科</strong>。經過詳細檢查，確診為性早熟，並隨即開始接受<strong>柳普林</strong> 的治療。</p>
        <p>柳普林是一種 GnRH 作用劑，簡單來說，它的任務是「踩煞車」。透過抑制性荷爾蒙的分泌，它能暫緩第二性徵的發育進程，更重要的是<strong>避免生長板提前閉合</strong>。我們希望能爭取更多長高的時間，讓骨齡「等一等」身高的成長，盡力把那失去的 12 公分追回來。</p>

  

        <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 2rem 0;">
  
        <div class="doctor-note" style="background-color: #fff7ed; border-left: 4px solid #f97316; padding: 1.5rem; border-radius:8px; margin-bottom: 2rem;">
          <h3 style="margin-top: 0; color: #c2410c; font-size: 1.2rem; display: flex; align-items: center; gap: 0.5rem;">
              <i class="fa-solid fa-user-doctor"></i> 醫師手札
          </h3>
          <p style="color: #431407; font-style: italic; margin-bottom: 0;">
            「很多家長以為孩子長得高就是好，卻忽略了『性徵』的提早出現。女童8歲前、男童9歲前若出現第二性徵（如乳房發育、睪丸變大），都可能是性早熟的警訊。如果您發現孩子身高突然長得特別快，或是摸到胸部有硬塊，請務必儘早進行骨齡檢查。別讓一時的『高人一等』，成為未來的遺憾。」
          </p>
        </div>
        
        <div class="cta-box" style="background-color: #f3f4f6; padding: 1.5rem; border-radius: 8px; margin-top: 2rem; color: #374151;">
          <h3 style="margin-top: 0; color: #111827;">擔心孩子長不高或發育太快？</h3>
          <p style="color: #374151;">掌握生長黃金期，只需一張 X 光片。透過精準骨齡判讀，預測成年身高與評估發育狀況。</p>
          <p style="margin-bottom: 0;">
            <a href="/weight-bone/bone-age" style="color: #2563eb; text-decoration: underline; font-weight: bold;">
              👉 點此預約：兒童生長與骨齡評估門診
            </a>
          </p>
        </div>
    `,
    date: '2026-02-07', 
    category: '兒童生長',
    tags: ['性早熟', '骨齡', ], 
    coverImage: '/images/cases/boneage/1.webp', 
    relatedTreatments: ['bone-age-assessment', 'pediatric-endocrinology-referral'] 
},

  {
    id: 'case-calcific-tendinitis-shockwave',
    title: '誤把「結石」當「撕裂傷」？健身美女打了三次PRP無效，原來肩膀藏了顆大石頭！',
    summary: '一位熱愛羽球的40歲女性，因肩膀劇痛被誤診為嚴重撕裂傷，在恐懼下施打了三次PRP卻毫無起色。經由林醫師超音波精準檢查，才發現真兇竟是一顆巨大鈣化結石！透過「聚焦式體外震波」精準擊碎鈣化，四次療程後疼痛消失，重返球場。',
    contentHtml: `
        <div class="quote-box" style="border-left: 4px solid #06b6d4; border-radius:8px; padding-left: 1rem; margin: 1.5rem 0; font-style: italic; color: #64748b; background-color: #f8fafc; padding: 1rem;">
          <p class="mb-0" style="font-size: 1.1rem; font-weight: 500;">「方向不對，努力白費。治療肩膀痛最怕的不是痛本身，而是沒有找到真正的『痛點』，讓病患走了冤枉路。」</p>
        </div>
   
        <p>對於一位熱愛運動的人來說，最痛苦的懲罰莫過於「不能動」。</p>
        <p>這次來到診間的，是一位充滿活力的40歲女性。她平時熱愛健身，羽球更是打得嚇嚇叫。然而，在一次高強度的揮拍後，她的肩膀開始隱隱作痛，原本以為休息幾天就好，沒想到疼痛卻變本加厲，到最後連手都舉不起來，別說殺球了，連日常生活都成了問題。</p>
   
        <h2>恐懼下的錯誤選擇：無效的三次PRP</h2>
        <p>「我去附近的骨科看過，醫生說我有嚴重的肌肉撕裂傷，如果不打PRP（高濃度血小板血漿），就只能開刀了...」她回憶起當時的情景，眼神中仍帶著餘悸。</p>
        <p>聽到「開刀」兩個字，她嚇壞了。為了避免手術，她咬著牙自費打了三次 PRP。然而，昂貴的治療換來的卻是失望——<strong>疼痛一點都沒有改善</strong>，肩膀依然僵硬如石。</p>
        <p>她在絕望之際，上網搜尋到了宸新診所的好風評，抱著最後一絲希望來找林醫師：「醫生，為什麼我的撕裂傷都治不好？」</p>
   
        <h2>超音波建功：揪出藏在肌肉裡的「大石頭」</h2>
        <p>「我們先別急著下定論，讓超音波來說話。」</p>
        <p>當超音波探頭滑過她的肩膀，螢幕上的影像立刻揭露了真相——哪裡是什麼嚴重的撕裂傷？在旋轉肌腱裡，赫然卡著一顆<strong>巨大的鈣化點</strong>！隨後安排的 X 光檢查，更是鐵證如山：一顆輪廓清晰、密度極高的結石，死死地卡在肩膀關節處。</p>
        <p>謎底揭曉：<strong>這就是典型的「<a href="/diseases/shoulder/calcific-tendinitis" class="text-cyan-400 hover:underline">鈣化性肌腱炎</a>」。</strong></p>
        <p>這也解釋了為什麼之前的 PRP 治療完全無效。PRP 的強項是修復軟組織撕裂，但對於這種堅硬如石的鈣化點，它就像是拿水去澆石頭，根本無法解決物理上的阻塞與發炎。</p>
   
      <p><img src="/images/cases/cal/1.webp " alt="鈣化肌腱炎X光" style="width: 50%; height: auto;"></p>

        <h2>對症下藥：聚焦式體外震波的「碎石」計畫</h2>
        <p>面對這種已經形成的硬化結石，正確的武器應該是<strong>「<a href="/treatments/shockwave" class="text-cyan-400 hover:underline">聚焦式體外震波</a>」</strong>。</p>
        <p>我們的治療策略很明確：</p>
        <ol style="padding-left: 1.5rem; margin-bottom: 1.5rem;">
            <li style="margin-bottom: 0.5rem;"><strong>精準定位：</strong>每次施打前，先用超音波確認鈣化點的深度與位置。</li>
            <li style="margin-bottom: 0.5rem;"><strong>震波擊碎：</strong>利用高能量的聚焦震波，直接穿透軟組織，將大塊的鈣化結晶「震碎」成粉末狀。</li>
            <li style="margin-bottom: 0.5rem;"><strong>身體吸收：</strong>震碎後的微小鈣化顆粒，會透過發炎反應引導血液循環，慢慢被身體代謝帶走。</li>
        </ol>

        <h2>眼見為憑：變小、變淡的鈣化點</h2>
        <p>經過四次的高階震波治療，病患的疼痛感顯著下降。她興奮地告訴我：「林醫師，我現在手可以舉高了，昨天甚至試著去健身房動了一下！」</p>
        <p>為了確認療效，我們再次拍攝 X 光。影像結果令人振奮：</p>
        <p>雖然因為肩膀擺位的角度略有不同，造成鈣化點在影像上的位置往下移動，但可以清楚看到<strong>鈣化明顯變小了</strong>！更重要的是，鈣化點的顏色<strong>沒這麼白了</strong>。</p>
        <p>在 X 光影像學上，<strong>「越白代表越硬」</strong>。顏色變淡，意味著鈣化結構已經變得鬆散、軟化。接下來，只需要搭配復健運動，促進肩部的血液循環，剩下的殘餘鈣化就會隨著時間慢慢被身體「運走」。</p>
   <p><img src="/images/cases/cal/2.webp " alt="鈣化肌腱炎X光" style="width: 50%; height: auto;"></p>

        <h2>重拾球拍的笑容</h2>
        <p>看著她從原本進診間時的愁眉苦臉，到現在開始規劃下一次的羽球聚會，這正是精準醫療最大的價值。不用開刀、不用白受罪，只要診斷正確，頑固的肩膀痛也能迎刃而解。</p>
        <p>現在，她終於可以無後顧之憂地殺球了！</p>

        <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 2rem 0;">
   
        <div class="doctor-note" style="background-color: #fff7ed; border-left: 4px solid #f97316; padding: 1.5rem; border-radius:8px; margin-bottom: 2rem;">
          <h3 style="margin-top: 0; color: #c2410c; font-size: 1.2rem; display: flex; align-items: center; gap: 0.5rem;">
              <i class="fa-solid fa-user-doctor"></i> 醫師手札
          </h3>
          <p style="color: #431407; font-style: italic; margin-bottom: 0;">
            「鈣化性肌腱炎常被誤診為五十肩或單純的肌腱撕裂。如果在沒有超音波確認的情況下盲目治療，往往事倍功半。面對鈣化，PRP 雖好但非首選；透過『超音波導引定位』加上『聚焦式震波』，才是震碎頑石、釋放肩膀的最佳解方。」
          </p>
        </div>
        
        <div class="cta-box" style="background-color: #f3f4f6; padding: 1.5rem; border-radius: 8px; margin-top: 2rem; color: #374151;">
          <h3 style="margin-top: 0; color: #111827;">肩膀痛了很久都好不了？</h3>
          <p style="color: #374151;">別讓錯誤的治療耽誤您的復原。立即預約高階超音波檢查，確認是否有鈣化問題。</p>
          <p style="margin-bottom: 0;">
            <a href="/treatments/shockwave" style="color: #2563eb; text-decoration: underline; font-weight: bold;">
              👉 點此了解：聚焦式體外震波治療
            </a>
          </p>
        </div>
    `,
    date: '2026-02-07', 
    category: '震波治療',
    tags: ['鈣化性肌腱炎', '聚焦式體外震波'], 
    coverImage: '/images/cases/cal/1.webp', 
    relatedTreatments: ['shockwave-therapy', 'ultrasound-guided-injection'] 
}, 

  {
    id: 'case-calcific-tendonitis-lavage',
    title: '打了幾十次震波都沒用？50歲大姐的肩膀「頑石」消除記—超音波導引鈣化沖洗術',
    summary: '一位飽受肩膀劇痛折磨的50歲女性，歷經數月、數十次震波治療無效，生活幾近停擺。來到宸新後，透過高階超音波揪出導致疼痛的「頑固鈣化結石」。在嘗試高能量震波仍未改善後，醫師果斷採取「超音波導引鈣化沖洗術」，直接將肌腱內的結石「洗」出來，兩週後重獲新生。',
    contentHtml: `
      <div class="quote-box" style="border-left: 4px solid #06b6d4; border-radius:8px; padding-left: 1rem; margin: 1.5rem 0; font-style: italic; color: #64748b; background-color: #f8fafc; padding: 1rem;">
        <p class="mb-0" style="font-size: 1.1rem; font-weight: 500;">「看著螢幕上那顆白色的石頭一點一點被洗出來，我心裡的重擔好像也跟著放下了。原來，我的肩膀是真的可以不痛的。」</p>
      </div>
  
      <p>肩膀痛起來，真的會讓人懷疑人生。</p>
      <p>這次來到診間的，是一位50歲的大姐。她一坐下，臉上就寫滿了疲憊與無奈。這幾個月來，她的肩膀像是被鎖住了一樣，手舉不高、穿衣困難，最近更是惡化到劇烈疼痛，不僅工作大受影響，連晚上的睡眠都成了奢求。</p>
  
      <h2>以為是救星，卻打了個寂寞？震波無效的真相</h2>
      <p>「醫師，我真的什麼都試過了...」她嘆了口氣。</p>
      <p>在來到宸新之前，她在其他診所被診斷為<a href="/diseases/shoulder/calcific-tendinitis" class="text-cyan-400 hover:underline">鈣化性肌腱炎</a>。為了治好它，她非常配合治療，不僅急性發作時打了類固醇，甚至忍痛做了<strong>好幾十次的震波治療</strong>。但讓她崩潰的是，錢花了、痛忍了，那種鑽心的痛卻始終如影隨形。</p>
      <p>後來，她在朋友介紹下，抱著最後一絲希望來到這裡。她聽說我們有<strong>進口的高能量<a href="/treatments/shockwave" class="text-cyan-400 hover:underline">體外震波儀器</a></strong>，而且每次施打前都會用<strong>超音波精準定位</strong>，心想：「這次總該有效了吧？」</p>
  
      <h2>當高能量震波也遇到「鐵板」</h2>
      <p>初次評估時，我也推測可能是之前的治療定位不夠精準，或是儀器能量穿透力不足。於是，我們在超音波導引下，精確鎖定鈣化點，進行了幾次聚焦式體外震波治療。</p>
      <p>然而，令人意外的是，即便用上了最強的武器，那顆鈣化點依然不動如山，疼痛改善非常有限。</p>
      <p>「這顆鈣化太頑固了，太硬、太大，光靠從外面打震波，可能打不散。」看著超音波影像中那團亮白色的結石，我向患者提出了一個更直接的方案：「我們換個方式，直接進去把它『洗』出來吧！」</p>
  
  
      <h2>超音波導引鈣化沖洗：眼見為憑的「掏石」工程</h2>
      <p>這項技術叫做<strong>「超音波導引鈣化沖洗術」 (Barbotage)</strong>。我們在即時超音波的監控下，將針頭精準地引導至鈣化中心，利用生理食鹽水反覆沖洗、抽吸。</p>
       
   <p><img src="/images/cases/calwash/1.webp " alt="鈣化沖洗超音波圖" style="width: 70%; height: auto;"></p>
      <p>治療過程中，螢幕上的畫面就像是挖掘工程。一開始那顆巨大的白色結石，隨著我們不斷地沖洗、抽出粉筆灰般的鈣化物，體積肉眼可見地開始縮小、崩解。患者看著螢幕，驚訝地說：「原來裡面真的有這麼多東西！」</p>
      
   <p><img src="/images/cases/calwash/2.webp " alt="鈣化沖洗超音波圖" style="width: 70%; height: auto;"></p>
      <p>到了治療尾聲，那顆原本巨大的「路障」，幾乎已經看不到了。</p>
    <p><img src="/images/cases/calwash/3.webp " alt="鈣化沖洗超音波圖" style="width: 70%; height: auto;"></p>
    <p>針筒中沖洗出來的鈣化。</p>
    <p><img src="/images/cases/calwash/4.webp " alt="沖洗出來的鈣化" style="width: 70%; height: auto;"></p>

  
      <h2>兩週後的笑容：重拾正常生活</h2>
      <p>兩週後回診，大姐是笑著走進診間的。</p>
      <p>「醫師，這次真的不一樣了！」她興奮地轉動手臂給我看。不僅疼痛感大幅下降，原本卡住的角度也終於鬆開了。她說，終於不用再提心吊膽地過日子，工作和生活都回到了正軌。</p>
      <p>看著她輕鬆的動作，證明了對於頑固型的鈣化，精準的「沖洗」往往能突破震波治療的瓶頸，帶來真正的解脫。</p>
  
      <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 2rem 0;">
  
      <div class="doctor-note" style="background-color: #fff7ed; border-left: 4px solid #f97316; padding: 1.5rem; border-radius:8px; margin-bottom: 2rem;">
        <h3 style="margin-top: 0; color: #c2410c; font-size: 1.2rem; display: flex; align-items: center; gap: 0.5rem;">
            <i class="fa-solid fa-user-doctor"></i> 醫師手札
        </h3>
        <p style="color: #431407; font-style: italic; margin-bottom: 0;">
          「鈣化性肌腱炎的治療不是只有一種。有些鈣化處於『吸收期』，質地像牙膏，這時候震波效果不佳，反而用針抽吸沖洗效果最好；有些則是太過堅硬陳舊，震波也難以震碎。透過超音波精準判斷鈣化的『質地』與『大小』，選擇對的武器（震波或沖洗），才能讓病人少受罪，快點好。」
        </p>
      </div>
      
      <div class="cta-box" style="background-color: #f3f4f6; padding: 1.5rem; border-radius: 8px; margin-top: 2rem; color: #374151;">
        <h3 style="margin-top: 0; color: #111827;">肩膀痛了很久，震波打不好？</h3>
        <p style="color: #374151;">也許您需要的不是更多的震波，而是精準的「鈣化沖洗」。歡迎預約評估，讓我們幫您找出疼痛的真正原因。</p>
        <p style="margin-bottom: 0;">
          <a href="/booking" style="color: #2563eb; text-decoration: underline; font-weight: bold;">
            👉 點此預約門診檢查
          </a>
        </p>
      </div>
    `,
    date: '2026-02-06', 
    category: '鈣化性肌腱炎',
    tags: ['鈣化性肌腱炎', '超音波導引'], 
    coverImage: '/images/cases/calwash/1.webp', 
    relatedTreatments: ['shockwave-therapy', 'ultrasound-guided-injection', 'barbotage'] 
  }, 
 
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