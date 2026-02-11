import { NewsPost } from './news'; // 從總控制器引入型別定義

export const articlesData: NewsPost[] = [

  {
    id: 'baby-kneecap-mystery',
    title: '各位新手爸媽，先別緊張！ 如果你現在抱著剛出生的嬰兒去照 X 光，你會嚇一跳：咦？為什麼寶寶膝蓋那邊是「空」的？骨頭去哪了？ 😱',
    lastModified: '2026-02-11',
    category: '衛教文章',
    date: '2026-02-11',
    summary: '嬰兒照 X 光為什麼看不到膝蓋骨？別緊張，這是老天爺給寶寶最棒的禮物！復健科醫師揭開「隱形膝蓋」的秘密，告訴你為什麼軟骨是寶寶學爬學走的天然安全氣囊。',
    coverImage: '/images/news/article/202602/baby.webp',
    seoTitle: '嬰兒沒有膝蓋骨？復健科醫師解析寶寶髕骨軟骨化與生長秘密',
    seoDescription: '解析嬰兒X光照不到膝蓋的原因：髕骨在2-6歲前由軟骨構成。復健科醫師說明這個「天然護膝」如何保護寶寶學爬學走時避免骨折與疼痛。',
    keywords: ['嬰兒膝蓋', '髕骨', '軟骨鈣化', '生長板', 'X光', '復健科', '兒童骨科', '學爬'],
    contentHtml: `
        <img src="/images/news/article/202602/baby.webp" alt="嬰兒膝蓋X光與軟骨示意圖" style="width: min(100%, 650px); height: auto; display: block; margin: 0 auto;">
         <br />
        <p>各位新手爸媽，先別緊張！ 如果你現在抱著剛出生的嬰兒去照 X 光，你會嚇一跳：咦？為什麼寶寶膝蓋那邊是「空」的？骨頭去哪了？ 😱</p>

        <p>身為復健科醫師，今天要來揭曉這個上天最溫柔的設計！</p>

        <hr>

        <h2>🦴 真相是：它是「軟」的！</h2>
        <p>寶寶並不是沒有膝蓋結構，而是他們的髕骨（膝蓋骨）一開始完全是由軟骨構成的。 因為軟骨在 X 光下是透明的，所以看起來就像消失了一樣。一直要等到 2 到 6 歲，這塊軟骨才會慢慢鈣化、變硬，成為我們摸到的那塊硬骨頭。</p>
        
        

        <hr>

        <h2>💡 為什麼老天爺要這樣設計？</h2>
        <p>這其實是為了寶寶的「生存」著想！ 試想一下，如果寶寶的膝蓋一出生就是硬邦邦的骨頭：</p>
        
        <ul>
          <li><strong>學爬會痛爆：</strong> 跪在地上爬行時，膝蓋直接撞地板，寶寶肯定不想爬。</li>
          <li><strong>學走易骨折：</strong> 剛學走路跌跌撞撞，硬碰硬的結果就是膝蓋骨碎裂。</li>
        </ul>

        <p>正因為它是軟骨，它就像是寶寶內建的 <strong>「天然高級護膝」</strong> 或是安全氣囊。🚗💨 這也是為什麼小朋友整天摔倒、跪地都沒事，依然笑嘻嘻；但大人一摔，往往就痛到骨裂甚至骨折的原因（因為我們的「護膝」已經變硬了😭）。</p>

        <hr>

        <h2>👨‍⚕️ 醫師的小叮嚀：</h2>
        <p>所以，趁孩子還小（6 歲以前），好好珍惜他們那雙「軟Ｑ」的膝蓋吧！那是他們探索世界最強大的武器。</p>

        <br />
        <p>如果您對孩子的骨骼發育或生長痛有疑慮，歡迎<a href="/booking" class="text-cyan-400 hover:underline">預約門診</a>，讓我們為您的小寶貝進行詳細評估。</p>
    `
},
  {
    id: 'diurnal-height-change',
    title: '📏 不用喝轉骨湯！每天早上起床，你都會自動「長高 1 公分」！',
    lastModified: '2026-02-11',
    category: '衛教文章',
    date: '2026-02-11',
    summary: '為什麼下午量身高總是矮了一截？別緊張，這不是你變矮了！身為復健科醫師，今天要揭開脊椎「椎間盤」的吸水秘密，教你如何利用生理特性在體檢時量出最高身高。',
    coverImage: '/images/news/article/202602/height.webp',
    seoTitle: '為什麼早上比較高？復健科醫師解析椎間盤與身高變化的關係',
    seoDescription: '解析早晚身高差距的原因：脊椎椎間盤的再水合作用。復健科醫師說明地心引力如何影響脊椎海綿組織，以及充足睡眠對脊椎彈性的重要性。',
    keywords: ['長高', '椎間盤', '身高差距', '復健科', '脊椎保健', '地心引力', '再水合作用'],
    contentHtml: `
        <img src="/images/news/article/202602/height.webp" alt="脊椎椎間盤早晚高度變化示意圖" style="width: min(100%, 650px); height: auto; display: block; margin: 0 auto;">
         <br />
        <p>體檢的時候，是不是總覺得機器不準？為什麼下午量身高總是矮了一截？ 別緊張，這不是你「變矮了」，也不是機器壞掉！🙅‍♂️</p>

        <p>身為復健科醫師，今天要教你一個作弊的小撇步：想長高，早上量就對了！</p>

        <hr>

        <h2>你的脊椎，其實是一塊「吸水海綿」🧽！</h2>
        
        <p>我們的脊椎骨之間，夾著一塊塊軟骨叫做「椎間盤」。 你可以把它想像成充滿水分的海綿：</p>
        
        <ul>
          <li><strong>☀️ 白天（受壓）：</strong> 當你站著走路、坐著辦公，地心引力就像一隻無形的大手，慢慢把海綿裡的水分擠出來 ➡️ 脊椎變扁，身高變矮。</li>
          <li><strong>🌙 晚上（回充）：</strong> 當你平躺睡覺時，壓力釋放，水分會重新流回椎間盤（再水合作用）➡️ 海綿膨脹，身高變高！</li>
        </ul>

        <hr>

        <h2>📊 數據會說話：</h2>
        <p>一般人早上剛起床跟晚上睡覺前，身高差可以達到 <strong>1 ~ 2 公分</strong>！ 這也是為什麼太空人從外太空回來時🚀，平均會長高 5 公分（因為在那裡沒有重力把脊椎壓扁）！</p>

        <hr>

        <h2>👨‍⚕️ 醫師的小叮嚀：</h2>
        <p>所以，如果你很在意身高數據（或是差那 1 公分就能考空服員/警察），記得體檢一定要約早上！</p>
        <p>而且這也告訴我們：充足的睡眠不只是為了精神，更是為了讓你的脊椎「喝飽水」、恢復彈性喔。</p>

        <br />
        <p>如果您長期有腰椎擠壓感或<a href="/diseases/spine-hip/lumbar-disc-herniation" class="text-cyan-400 hover:underline">椎間盤突出</a>的困擾，歡迎<a href="/booking" class="text-cyan-400 hover:underline">預約門診</a>，讓我們為您的脊椎健康進行專業評估。</p>
    `
},
  {
    id: 'funny-bone-ulnar-nerve',
    title: '⚡ 撞到手肘那種電到的酥麻感，到底是撞到哪？',
    lastModified: '2026-02-11',
    category: '衛教文章',
    date: '2026-02-11',
    summary: '手肘敲到桌角，瞬間「滋～」的一聲電流感傳遍全身？那種酸爽不是撞到骨頭，而是撞到了尺神經。復健科醫師帶你認識這條「裸露的電線」以及 Funny Bone 的由來。',
    coverImage: '/images/news/article/202602/ulnar.webp',
    seoTitle: '手肘撞到像電到？尺神經與肘隧道症候群解析 | 復健科醫師衛教',
    seoDescription: '手肘撞到產生電流感的原因是「尺神經」受壓。解析 Funny Bone 英文名稱的諧音由來（Humerus 與 Humorous），以及長期手麻可能潛藏的肘隧道症候群風險。',
    keywords: ['尺神經', '手肘電到', 'Funny Bone', '肘隧道症候群', '手麻', '復健科', '肱骨'],
    contentHtml: `
        <img src="/images/news/article/202602/ulnar.webp" alt="手肘尺神經解剖位置示意圖" style="width: min(100%, 650px); height: auto; display: block; margin: 0 auto;">
         <br />
        <p>大家一定都有這種經驗吧？手肘不小心敲到桌角，瞬間「滋～」的一聲，一股強烈的電流感直接從小指竄到頭皮，那種酸爽簡直讓人原地升天……😱</p>

        <p>身為復健科醫師，我要告訴你：你撞到的不是骨頭，也不是筋，而是一條無辜的「神經」！</p>

        <hr>

        <h2>🧠 真兇是誰？ 它的名字叫 「尺神經」</h2>
        
        <p>因為它經過手肘時，剛好穿過一個沒什麼肌肉保護的淺溝，就像一條裸露的電線。只要輕輕一敲，就會引發那種讓人想哭又想笑的麻痛感。</p>

        <hr>

        <h2>為什麼英文叫它 "Funny Bone"（有趣的骨頭）？</h2>
        <p>這其實是醫學界最著名的「雙關語諧音梗」！🤣</p>
        
        <ul>
          <li><strong>感覺很怪 (Funny)：</strong> 撞到時那種又麻又痛、說不出來的奇怪感覺。</li>
          <li><strong>諧音梗 (Pun)：</strong> 上臂的骨頭叫做 <strong>Humerus（肱骨）</strong>，發音跟 <strong>Humorous（幽默的）</strong>幾乎一模一樣。</li>
        </ul>

        <p>所以，當你敲到電到時，是因為你的 Humerus（肱骨）正在跟你開一個 Humorous（幽默）的玩笑呢！這就是 "Funny Bone" 的由來。</p>

        <hr>

        <h2>👨‍⚕️ 醫師的小提醒：</h2>
        <p>雖然這感覺很「Funny」，但如果你的手肘長期都有麻麻的感覺，甚至影響到手力，那可能就是<strong>「尺神經」被壓迫太久了</strong>，<a href="/diseases/elbow/ulnar-nerve-entrapment" class="text-cyan-400 hover:underline">肘隧道症候群</a>記得要來找醫生檢查喔！</p>

        
        <br />
        <p>如果您有持續性手麻或握力下降的問題，歡迎<a href="/booking" class="text-cyan-400 hover:underline">預約門診</a>，我們會透過神經傳導檢查或超音波為您精確診斷。</p>
    `
},

  {
    id: 'weather-pain-joints',
    title: '🌧️ 阿嬤的膝蓋比氣象局還準？原來我們都有內建「人體氣象臺」！',
    lastModified: '2026-02-11',
    category: '衛教文章',
    date: '2026-02-11',
    summary: '明明大太陽，長輩卻說快變天了？這不是迷信，而是物理學！身為復健科醫師，帶你解析為什麼下雨前關節會痠痛，以及氣壓變化如何影響我們的關節囊。',
    coverImage: '/images/news/article/202602/knee.webp',
    seoTitle: '為什麼下雨前膝蓋痠痛？氣壓與關節痛的關係 | 復健科醫師解析',
    seoDescription: '解析「人體氣象臺」現象：低氣壓如何導致關節囊膨脹並壓迫神經。復健科醫師說明變天關節痛的物理原理，並提供舊傷與退化性關節炎的照護建議。',
    keywords: ['天氣痛', '關節痠痛', '低氣壓', '復健科', '退化性關節炎', '舊傷', '人體氣象台'],
    contentHtml: `
        <img src="/images/news/article/202602/knee.webp" alt="氣壓變化與關節疼痛原理圖" style="width: min(100%, 650px); height: auto; display: block; margin: 0 auto;">
         <br />
        <p>明明窗外還出大太陽，家裡的長輩卻突然摸著膝蓋說：「快變天了，我要趕快去收衣服！」結果過沒多久真的下大雨……😱</p>
        <p>你以為這是都市傳說，還是心理作用嗎？</p>
        <p>身為復健科醫師，我要幫阿嬤平反：這不是迷信，這是物理學！ 🔬</p>

        <hr>

        <h2>🎈 為什麼下雨前關節會痠痛？</h2>
        <p>關鍵不在「濕氣」，而在 <strong>「氣壓」</strong>！</p>
        <p>想像你的關節囊就像一顆 <strong>「密封的氣球」</strong>。</p>
        
        

        <p>當天氣變壞、快要下雨前，大氣壓力會降低（低氣壓）。這時候，原本被大氣壓力壓住的關節囊（氣球），就會因為外部壓力變小而 <strong>微微膨脹</strong>。</p>

        <hr>

        <h2>💥 這一脹，事情就大條了！</h2>
        <p>對於健康的關節可能沒感覺，但對於已經有發炎、舊傷或<a href="/diseases/knee/knee-osteoarthritis " class="text-cyan-400 hover:underline">退化性關節炎</a>來說，這微小的膨脹會直接 <strong>壓迫到周邊敏感的神經與組織</strong>，引發痠痛。</p>
        <p>所以，阿嬤的膝蓋是真的偵測到了「氣壓下降」，比氣象預報的衛星雲圖還要早一步！📡</p>

        <hr>

        <h2>👨‍⚕️ 醫師小結：</h2>
        <p>下次長輩說膝蓋痠要下雨了，請給予尊重，並幫他熱敷一下。那可是經過歲月認證的生物科技啊！</p>

        <br />
        <p>👇 你的身上也有內建氣象臺嗎？是膝蓋、腰還是舊傷口？底下留言告訴我，看誰最準！</p>
        
        <br />
        <p>如果您的舊傷隨天氣變化隱隱作痛，歡迎<a href="/booking" class="text-cyan-400 hover:underline">預約門診</a>，讓我們協助您透過物理治療或增生療法改善慢性發炎。</p>
    `
},
  {
    id: 'text-neck-syndrome',
    title: '抓到了！現在正在低頭的你，脖子上其實坐著一個「8歲小孩」！',
    lastModified: '2026-02-11',
    category: '衛教文章',
    date: '2026-02-11',
    summary: '你現在是不是正低頭盯著螢幕看？身為復健科醫師，我要告訴你一個殘酷的物理真相：當你低頭 60 度時，頸椎承受的壓力高達 27 公斤！這就是為什麼你的肩頸永遠硬得像石頭。',
    coverImage: '/images/news/article/202602/neck.webp',
    seoTitle: '低頭族頸椎壓力有多大？復健科醫師揭開肩頸痠痛與骨刺真相',
    seoDescription: '解析低頭滑手機對頸椎的影響：低頭60度時頸椎需承受27公斤壓力，相當於一名8歲小孩。復健科醫師教你如何透過正確姿勢預防骨刺與肩頸硬得像石頭的問題。',
    keywords: ['低頭族', '頸椎壓力', '肩頸痠痛', '骨刺', '復健科', '手機姿勢', '肩頸僵硬'],
    contentHtml: `
        <img src="/images/news/article/202602/neck.webp" alt="低頭角度與頸椎承受壓力示意圖" style="width: min(100%, 650px); height: auto; display: block; margin: 0 auto;">
         <br />
        <p>你現在是不是正低頭盯著螢幕看？</p>
        <p>先別動！維持這個姿勢想一想：你的脖子現在感覺如何？是不是有點緊、有點痠？</p>
        <p>身為復健科醫師，我要告訴你一個殘酷的物理真相。📉</p>

        <hr>

        <h2>💡 你的頭，比你想像的還要重！</h2>
        <p>平常頭擺正的時候，重量大約是 5 公斤（差不多是一顆保齡球的重量 🎳）。</p>
        
        

        <p>但是！當你低頭 60 度 滑手機時（就是你現在這個姿勢），頸椎承受的壓力會瞬間暴增到 <strong>27 公斤</strong>！</p>

        <hr>

        <h2>🐶 27 公斤是什麼概念？</h2>
        <p>這重量大約等於：</p>
        <ul>
          <li>✅ 一個 8 歲的小學生 👦</li>
          <li>✅ 一隻成年的黃金獵犬 🐕</li>
        </ul>
        
        <p>試想一下，如果我現在把一隻黃金獵犬放到你的肩膀上，叫牠乖乖坐好，然後你每天揹著牠滑 3 小時的手機……</p>
        <p>你的頸椎不抗議、不長骨刺才怪！這就是為什麼你的肩頸永遠硬得像石頭。🗿</p>

        <hr>

        <h2>👨‍⚕️ 醫師的小叮嚀：</h2>
        <p>看到這裡，請做一個動作救救你的脖子——<strong>「把手機舉高，平視螢幕」</strong>。</p>
        <p>雖然手會痠，但總比頸椎提早退化，造成<a href="/diseases/spine-hip/cervical-disc-degeneration" class="text-cyan-400 hover:underline">頸椎椎間盤突出</a>好，對吧？</p>

        <br />
        <p>👇 Tag 你身邊那個總是「低頭族」的朋友，問他：你的脖子上現在是坐著小孩還是黃金獵犬？</p>
        
        <br />
        <p>如果您長期受肩頸痠痛困擾，歡迎<a href="/booking" class="text-cyan-400 hover:underline">預約門診</a>，讓我們透過超音波檢查為您的頸椎狀況把關。</p>
    `
},

  {
    id: 'knuckle-cracking-myth',
    title: '史上最狂醫師！用 60 年實測：阿嬤說的『折手指會變醜』是真的嗎？',
    lastModified: '2026-02-11',
    category: '衛教文章',
    date: '2026-02-11',
    summary: '「不要再折手指了，以後會得關節炎！」這句話你是不是從小聽到大？甚至還有人說手指節會變粗、變醜？身為復健科醫師，今天我要來幫大家破解這個世紀大迷思！',
    coverImage: '/images/news/article/202602/finger.webp',
    seoTitle: '折手指會關節炎嗎？復健科醫師破解折手指變醜、變粗迷思',
    seoDescription: '破解折手指迷思：美國醫師 Donald Unger 連續 60 年實測折手指是否導致關節炎，並獲得搞笑諾貝爾獎。解析喀喀聲來源（空穴現象）與對關節的影響。',
    keywords: ['折手指', '關節炎', 'Donald Unger', '搞笑諾貝爾獎', '復健科', '空穴現象', '手指變粗'],
    contentHtml: `
        <img src="/images/news/article/202602/finger.webp" alt="折手指迷思破解" style="width: min(100%, 650px); height: auto; display: block; margin: 0 auto;">
         <br />
        <p>「不要再折手指了，以後會得關節炎！」這句話你是不是從小聽到大？甚至還有人說手指節會變粗、變醜？🖐️</p>

        <p>身為復健科醫師，今天我要來幫大家破解這個世紀大迷思！</p>

        <hr>

        <h2>👨‍⚕️ 真相是：放心折吧！完全不會得關節炎。</h2>

        <p>這可不是我隨便說說，這是有人用「60 年的青春」換來的答案！ 這世界上有一位超狂的美國醫師 Donald Unger，為了反駁媽媽的話，他連續 60 年 每天都只折「左手」的手指，右手則完全不折，以此作為對照組。</p>

        <p>60 年後，他比對雙手的 X 光片……結果發現 兩隻手的關節狀況一模一樣，都沒有關節炎！ 這份超有毅力的研究，甚至讓他獲得了 2009 年的「搞笑諾貝爾醫學獎」。🏆</p>

        <hr>

        <h2>🤔 那「喀喀聲」到底是怎麼來的？</h2>
        <p>別擔心，那不是骨頭在摩擦！那是關節液中的氣泡破裂產生的聲音（物理學稱之為「空穴現象」），原理就像你擠破氣泡紙一樣療癒，對關節本身是沒有傷害的。</p>

        <hr>

        <h2>🎯 結論：</h2>
        <p>除非你折到會痛，或者用力過猛拉傷韌帶，否則折手指本身是不會讓關節變大或發炎的。放心去折吧！</p>

        <br />
        <p>👇 底下留言標記你身邊那個「超愛折手指」的朋友，告訴他：你可以安心地繼續折手指了！</p>
        
        <br />
        <p>如果您也有任何關節不適或運動傷害，歡迎<a href="/booking" class="text-cyan-400 hover:underline">預約門診</a>，讓我們為您提供專業評估。</p>
    `
},

  {
    id: 'skiing-injuries-top5',
    title: '🏂 滑雪的終點是骨科？揭曉雪季「五大傷兵名單」',
    lastModified: '2026-02-11',
    category: '衛教文章',
    date: '2026-02-11',
    summary: '最近門診病患有一半是剛從日本回來的雪友。究竟滑雪最容易傷到哪裡？受傷了該如何快速回到雪場？復健科醫師為你解析雪季熱門傷情與 PRP 增生療法。',
    coverImage: '/images/news/article/ski.webp',
    seoTitle: '滑雪受傷怎麼辦？膝蓋韌帶、尾椎、手腕受傷治療與PRP增生療法',
    seoDescription: '解析滑雪五大常見傷害：尾椎挫傷、腳踝扭傷、膝蓋 MCL 受傷、手腕 TFCC 損傷及肩膀脫臼。提供 PRP、增生療法與高能量雷射等快速修復方案。',
    keywords: ['滑雪受傷', '膝蓋內側副韌帶', 'PRP', '增生療法', '三角軟骨損傷', '復健科'],
    contentHtml: `
        <img src="/images/news/article/ski.webp" alt="滑雪受傷常見部位示意圖" style="width: min(100%, 450px); height: auto; display: block; margin: 0 auto;">
        <h2>🏂 滑雪的終點是骨科？</h2>

        <p>最近門診病患，有一半是剛從日本回來的雪友，甚至還有人是為了下週要出發，現在急著要把舊傷修好的。🎿 最近統計了一下診所的「雪季五大傷兵名單」，看看你中了哪一個？👇</p>

        <hr>

        <h2>🔥 滑雪受傷熱門榜 Top 5</h2>
        <ul>
          <li><strong>尾椎下背挫傷：</strong>跌倒時屁股向後坐，造成下背或尾椎疼痛。</li>
          <li><strong>腳踝扭傷：</strong>雪鞋沒穿好或單板（Snowboard），腳踝直接「翻船」。</li>
          <li><strong>膝蓋內側副韌帶受傷：</strong>雙板（Ski）最常見！兩腳板分太開或是膝蓋內夾，導致內側韌帶撕裂傷。</li>
          <li><strong>手腕三角軟骨損傷：</strong>跌倒時手掌直覺撐地，傷到三角軟骨或舟月韌帶。</li>
          <li><strong>肩膀旋轉肌撕裂：</strong>高速撞擊或跌倒時肩膀著地，嚴重時也可能脫臼。</li>
        </ul>

        <hr>

        <h2>🚑 受傷了，該怎麼辦？</h2>
        <p>其實大部分的輕微拉傷，透過口服藥物搭配物理治療，乖乖休息都會好。但問題來了——<strong>「醫師，我的雪季很短啊！」</strong> 😭</p>
        <p>這是我們最常聽到的心聲。機票飯店都訂了，假也請了，誰想在飯店躺平？這也是為什麼最近<strong>增生療法</strong>與 <strong>PRP（自體血小板）</strong> 的詢問度爆表：</p>

        <ul>
          <li><strong>輕微損傷：</strong>使用高濃度葡萄糖修補組織，穩扎穩打；急性疼痛可考慮<strong>高能量雷射</strong>快速舒緩。</li>
          <li><strong>嚴重撕裂 / 時間緊迫：</strong>許多雪友為了趕快回到雪場，直接選擇 <strong>PRP</strong>。利用高濃度生長因子加速修復，縮短尷尬的「停機時間」。</li>
        </ul>

        <blockquote>
            看到好多病患打完針、經過短暫休息與測試後，傳來順利回到雪道上分享滑雪過程的照片，那種失而復得的笑容，真的是復健科醫師最大的成就感！💪
        </blockquote>

        <p>我也開始期待三月底北海道員工旅遊的滑雪行程了！❄️</p>

        <h2>👨‍⚕️ 醫師小叮嚀</h2>
        <p>滑雪前<strong>「暖身」</strong>真的不能省，護具（護腕、護膝、防摔褲）穿好穿滿。如果不幸受傷，千萬不要硬撐，及早評估治療，才能滑得長長久久喔！</p>
        <br />
        <p>如果您也有滑雪運動傷害，歡迎<a href="/booking" class="text-cyan-400 hover:underline">預約門診</a>，讓我們陪您重返雪道。</p>
    `
  },

  {
    id: 'musclesprain',
    title: '別再叫它「肌鬆針」了！揭開冬天閃腰潮的背後真相',
    lastModified: '2026-02-10',
    category: '衛教文章',
    date: '2026-02-10',
    summary: '寒流來襲，診所湧入大量「閃到腰」與「落枕」的患者，大家一進門就指名要打「肌肉放鬆針」。但你知道它的成份嗎？要如何避免再發生呢？',
    coverImage: '/images/news/article/musclesprain.webp',
    seoTitle: '冬天閃到腰、落枕怎麼辦？揭開肌肉放鬆針真相與預防秘訣',
    seoDescription: '冬天容易落枕閃腰，許多人指名打肌肉放鬆針。醫師解析肌鬆針成分(NSAID、鬆弛劑、類固醇)與冬天肌肉保養兩大秘訣。',
    keywords: ['落枕', '閃到腰', '肌肉鬆弛劑', '冬天保養', '急性發炎'],
    contentHtml: `
        <img src="/images/news/article/musclesprain.webp" alt="冬天肌肉僵硬與治療示意圖" style="width: 100%; height: auto;">
        <h2>別再叫它「肌鬆針」了！揭開冬天閃腰潮的背後真相</h2>

        <p>你是否也有這種經驗？明明昨天還好好的，早上一覺醒來，脖子卻像被水泥封住轉不動？或是只是彎腰綁個鞋帶，腰部突然一陣閃電般的劇痛？</p>
        <p>寒流來診所湧入大量「閃到腰」與「落枕」的患者，大家一進門就指名要打「肌肉放鬆針」。 但你知道它的成份嗎？ 要如何避免再發生呢?</p>

        <h2>📋 為什麼冬天總是「容易落枕、閃腰」？</h2>
        <ul>
          <li><strong>橡皮筋效應：</strong> 低溫讓肌肉與韌帶變硬、變脆。一個轉身或噴嚏，僵硬的肌肉來不及反應，就發生了微小撕裂。</li>
          <li><strong>冬眠模式：</strong> 血管為了保溫而收縮，導致血液循環變差，代謝廢物堆積，肌肉容易處於「缺氧僵硬」狀態。</li>
          <li><strong>防禦姿勢：</strong> 冷風中我們慣性縮脖子、聳肩，這種無意識的緊繃，就容易落枕。</li>
        </ul>

        <h2>💉 那支「神奇的放鬆針」，到底是什麼？</h2>
        <p>當病人痛到崩潰時，這支針確實能救急，大幅改善生活：</p>
        <ul>
          <li><strong>強效滅火（NSAID）：</strong> 快速阻斷急性發炎風暴，把痛覺訊號降下來，但藥物過敏患者打了可能會休克。</li>
          <li><strong>解除痙攣（鬆弛劑）：</strong> 身體受傷時會因為怕痛而瘋狂收縮（痙攣）來保護患處，結果反而越夾越痛。這一針是強制讓肌肉鬆開，打破疼痛的惡性循環。</li>
          <li><strong>強效止痛 (類固醇)：</strong> 劇烈疼痛，且嚴重影響工作生活，可以更強烈的把急性發炎風暴壓下來，依照患者情況決定是否需要加。</li>
        </ul>

        <h2>💡 如何避免冬天肌肉痛?</h2>
        <ul>
          <li><strong>慢速開機：</strong> 醒來先在被窩動一動，讓肌肉先暖機再活動。</li>
          <li><strong>物理外掛：</strong> 一條圍巾、一個熱敷墊，保持肌肉血液循環及彈性。</li>
        </ul>
    `
  },

  {
    id: 'choosing-the-right-treatment',
    title: '今天，我大概讓五位病人「失望」了… 淺談精準把關的重要性',
    lastModified: '2026-02-09',
    category: '診間隨筆',
    date: '2026-02-09',
    summary: '年關將至，許多病患抱著最後一絲希望走進診間，甚至要求昂貴的 PRP 治療只想「快點好」。但醫療的本質不是選貴的就好，而是基於專業判斷的精準把關。',
    coverImage: '/images/news/article/newyear.webp',
    seoTitle: '為什麼醫師不讓我打PRP？精準醫療與正確復健診斷的重要性',
    seoDescription: '面對鈣化性肌腱炎、五十肩、媽媽手等症狀，最貴的 PRP 不一定是最好的選擇。宸新復健科診所醫師分享診間案例，強調精準診斷、把錢花在刀口上的醫療核心價值。',
    keywords: ['PRP', '鈣化性肌腱炎', '五十肩', '媽媽手', '十字韌帶受傷', '椎間盤突出', '精準醫療', '陳信復健科'],
    contentHtml: `
       <img src="/images/news/article//newyear.webp" alt="為什麼醫師不讓我打PRP？精準醫療與正確復健診斷的重要性" class="responsive-img-enlarge">
        <h2>醫療的本質，不是像點餐一樣「選貴的就好」</h2>
        <p>年關將至，疼痛的焦慮似乎也跟著倒數。今天門診比以往忙碌，其中有五位初診病人，像是約好似地帶著同樣的故事前來。他們都在其他地方做過復健、打過針，卻遲遲未見起色。</p>
        <br />
        <p>在親友的介紹下，他們抱著最後一絲希望走進診間，起手式幾乎都一樣：<strong>「醫師，自費沒關係，PRP 也可以，只要能趕快好過年就好！」</strong></p>
        <br />
        <p>說實話，如果醫療只是商業，這會是最好做的生意。但看著他們急切的眼神，最後我一針 PRP 都沒打。經過超音波與理學檢查評估後，我發現昂貴的治療並不是他們此刻的解方：</p>

        <hr>

        <h2>常見五大疼痛迷思：為什麼你不需要 PRP？</h2>
        
        <h3>1️⃣ 鈣化性肌腱炎</h3>
        <p>超音波下看到明顯的鈣化點，這時候需要的不是修補組織的 PRP，而是<strong>體外震波</strong>精準擊碎，才能真正緩解疼痛。</p>
        

        <h3>2️⃣ 五十肩沾黏</h3>
        <p>當關節囊都縮住了，強行注入生長因子也沒空間發揮。<strong>肩關節擴張術</strong>配合物理治療師的徒手治療把角度拉開，才是當務之急。</p>

        <h3>3️⃣ 嚴重發炎的媽媽手</h3>
        <p>「火燒得正旺」的發炎期，PRP 反而可能誘發更強的發炎反應。這時候最傳統的<strong>類固醇</strong>反而像精準的滅火器，能快速控制症狀。</p>

        <h3>4️⃣ 十字韌帶受傷 (全斷)</h3>
        <p>理學檢查發現膝蓋非常鬆且積水嚴重。如果是全斷，打了 PRP 也長不回來，這時醫師的專業是<strong>及時轉診</strong>到醫院安排開刀，而非留下病患做無效治療。</p>
        

        <h3>5️⃣ 椎間盤突出</h3>
        <p>建議先嘗試<strong>健保復健</strong>，再加上後續的<strong>徒手運動調整</strong>。若能在非侵入性治療下改善，就沒必要承擔高風險的椎間盤注射。</p>

        <hr>

        <h2>👨‍⚕️ 醫師筆記：把錢花在刀口上</h2>
        <blockquote>
          「醫療的本質，是基於專業判斷的精準把關。」
        </blockquote>
        
        <p>我也許「拒絕」了病患原本想做的花錢療程，但我給了他們更需要的東西。<strong>選擇對的治療，遠比選擇貴的治療，更能真正幫到病患。</strong></p>
        <br />
        <p>如果您也有長期治療無效的疼痛，歡迎<a href="/booking" class="text-cyan-400 hover:underline">預約門診</a>，讓我們透過精準的影像檢查，為您找到真正的解方。</p>
    `
  },

  {
    id: 'prp-prolotherapy-guide-hsinchu',
    title: '【2026新竹PRP懶人包】：增生療法原理、治療流程與注意事項全解析',
    lastModified: '2026-02-05',
    category: '衛教文章',
    date: '2026-02-05',
    summary: '新竹關節疼痛治療首選！PRP 到底能治療什麼？宸新復健科專業醫師統整 PRP 修復機轉、適應症、治療流程及術後注意事項，並針對新竹運動族群最關心的修復週期與常見問題深度解答。',
    coverImage: '/images/news/article/prp/0.webp',
    seoTitle: '新竹 PRP 增生療法推薦｜宸新復健科：關節修復、運動傷害、價格流程懶人包',
    seoDescription: '在新竹找 PRP 治療？宸新復健科詳細解析 PRP 高濃度血小板血漿原理，針對膝關節退化、旋轉肌破裂、網球肘等運動傷害提供精準治療。結合超音波導引技術，打造最高效率的組織修復計畫。',
    keywords: [
      '新竹PRP', 
      'PRP治療', 
      '宸新復健科', 
      '增生療法', 
      '高濃度血小板血漿', 
      '關節退化治療', 
      '運動傷害修復', 
      '竹北PRP推薦', 
      '超音波導引注射', 
      '韌帶修復'
    ],
    contentHtml: `
    <style>
  .responsive-img-enlarge { width: 110% !important; max-width: none !important; display: block !important; margin: 1rem auto !important; position: relative !important; left: 50% !important; transform: translateX(-50%) !important; height: auto; }
  @media (min-width: 768px) { .responsive-img-enlarge { width: 100% !important; left: 0 !important; transform: none !important; } }
</style>
        <h2>新竹 PRP 增生療法：專業原理與治療流程全解析</h2>
        <img src="/images/news/article/prp/1.webp" alt="新竹 PRP 增生療法修復原理懶人包" class="responsive-img-enlarge">
        <img src="/images/news/article/prp/2.webp" alt="新竹宸新復健科 PRP 專業治療流程說明" class="responsive-img-enlarge">
        <img src="/images/news/article/prp/3.webp" alt="PRP 治療常見適應症：膝關節、旋轉肌、網球肘" class="responsive-img-enlarge">
        <img src="/images/news/article/prp/4.webp" alt="PRP 注射術後注意事項與居家照護建議" class="responsive-img-enlarge">
        <img src="/images/news/article/prp/5.webp" alt="新竹地區 PRP 治療常見問題 FAQ" class="responsive-img-enlarge">
<div style="display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 12px; padding: 12px 0;">
          
          <a href="/treatments/prp" 
             style="
                display: flex; flex-direction: row; align-items: center; justify-content: center;
                gap: 10px; padding: 12px 24px;
                background: linear-gradient(to right, #3b82f6, #4f46e5);
                border-radius: 16px; color: #ffffff !important; text-decoration: none !important;
                font-weight: 700; font-size: 16px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                transition: all 0.3s ease-in-out; cursor: pointer;
             "
             onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 10px 15px -3px rgba(0, 0, 0, 0.2)';"
             onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 6px -1px rgba(0, 0, 0, 0.1)';"
          >
            <svg stroke="currentColor" fill="currentColor" viewBox="0 0 512 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg" style="color: white;"><path d="M464 128a64 64 0 0 0-93.5-57.1C352.4 53.6 324.4 41 292 41c-43.4 0-80.4 22.8-100.4 57.1-15.8-11.4-35.3-18.1-56.3-18.1-52.6 0-95.3 42.7-95.3 95.3 0 22.2 7.6 42.6 20.3 58.7-12.7 16.1-20.3 36.5-20.3 58.7 0 52.6 42.7 95.3 95.3 95.3 21 0 40.5-6.7 56.3-18.1C211.6 404.2 248.6 427 292 427c32.4 0 60.4-12.6 78.5-29.9 11 10.7 25.9 17.3 42.3 17.3 35.3 0 64-28.7 64-64 0-18.8-8.1-35.7-21-47.5 12.9-11.8 21-28.7 21-47.5 0-18.8-8.1-35.7-21-47.5 12.9-11.8 21-28.7 21-47.5 0-16.4-6.6-31.3-17.2-42.3a64.24 64.24 0 0 0 4.4-15.1zM292 379c-48 0-87-39-87-87s39-87 87-87 87 39 87 87-39 87-87 87z"></path></svg>
            <span style="white-space: nowrap; color: #ffffff;">了解更多PRP增生療法</span>
          </a>

        </div>

      `
  }, 

  {
    id: 'mounjaro-guide-hsinchu',
    title: '【2026猛健樂懶人包】：藥物原理施打方式，注意事項副作用全解析',
    lastModified: '2026-02-04',
    category: '衛教文章',
    date: '2026-02-04',
    summary: '新竹減重新選擇！猛健樂到底在紅什麼？宸新復健科醫師統整其機轉原理、適應症、施打方式及副作用管理，並公開新竹民眾最關心的價格與療程優勢。',
    coverImage: '/images/news/article/mounjaro/0.webp',
    seoTitle: '新竹猛健樂(Mounjaro)減重門診｜宸新復健科：原理、價格、副作用懶人包',
    seoDescription: '想在新竹諮詢猛健樂(Mounjaro)減重？宸新復健科詳解 Tirzepatide 雙腸泌素原理、適應症、正確施打方式及飲食注意事項。結合專業身體組成檢測，為您量身打造安全有效的瘦身計畫。',
    keywords: ['猛健樂', 'Mounjaro', '新竹減重', '宸新復健科', 'Tirzepatide', '瘦瘦針', '雙機轉', '減肥門診', '胰島素阻抗'],
    contentHtml: `
    <style>
  .responsive-img-enlarge { width: 110% !important; max-width: none !important; display: block !important; margin: 1rem auto !important; position: relative !important; left: 50% !important; transform: translateX(-50%) !important; height: auto; }
  @media (min-width: 768px) { .responsive-img-enlarge { width: 100% !important; left: 0 !important; transform: none !important; } }
</style>
        <h2>新竹猛健樂 Mounjaro 減重門診：藥物機轉與施打指南</h2>
        <img src="/images/news/article/mounjaro/1.webp" alt="猛健樂 Mounjaro 雙腸泌素作用原理懶人包" class="responsive-img-enlarge">
        <img src="/images/news/article/mounjaro/2.webp" alt="猛健樂正確施打方式與療程進度規劃" class="responsive-img-enlarge">
        <img src="/images/news/article/mounjaro/3.webp" alt="新竹減重門診：猛健樂常見副作用管理與應對" class="responsive-img-enlarge">
        <img src="/images/news/article/mounjaro/4.webp" alt="猛健樂療程期間的飲食建議與生活型態調整" class="responsive-img-enlarge">
        <img src="/images/news/article/mounjaro/5.webp" alt="新竹宸新復健科：猛健樂 vs 傳統瘦瘦針差異比較" class="responsive-img-enlarge">
        <img src="/images/news/article/mounjaro/6.webp" alt="猛健樂減重門診諮詢流程與價格說明" class="responsive-img-enlarge">

<div style="display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 12px; padding: 12px 0;">
          
          <a href="/weight-bone/mounjaro" 
             style="
                display: flex; flex-direction: row; align-items: center; justify-content: center;
                gap: 10px; padding: 12px 24px;
                background: linear-gradient(to right, #3b82f6, #4f46e5);
                border-radius: 16px; color: #ffffff !important; text-decoration: none !important;
                font-weight: 700; font-size: 16px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                transition: all 0.3s ease-in-out; cursor: pointer;
             "
             onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 10px 15px -3px rgba(0, 0, 0, 0.2)';"
             onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 6px -1px rgba(0, 0, 0, 0.1)';"
          >
            <svg stroke="currentColor" fill="currentColor" viewBox="0 0 512 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg" style="color: white;"><path d="M464 128a64 64 0 0 0-93.5-57.1C352.4 53.6 324.4 41 292 41c-43.4 0-80.4 22.8-100.4 57.1-15.8-11.4-35.3-18.1-56.3-18.1-52.6 0-95.3 42.7-95.3 95.3 0 22.2 7.6 42.6 20.3 58.7-12.7 16.1-20.3 36.5-20.3 58.7 0 52.6 42.7 95.3 95.3 95.3 21 0 40.5-6.7 56.3-18.1C211.6 404.2 248.6 427 292 427c32.4 0 60.4-12.6 78.5-29.9 11 10.7 25.9 17.3 42.3 17.3 35.3 0 64-28.7 64-64 0-18.8-8.1-35.7-21-47.5 12.9-11.8 21-28.7 21-47.5 0-18.8-8.1-35.7-21-47.5 12.9-11.8 21-28.7 21-47.5 0-16.4-6.6-31.3-17.2-42.3a64.24 64.24 0 0 0 4.4-15.1zM292 379c-48 0-87-39-87-87s39-87 87-87 87 39 87 87-39 87-87 87z"></path></svg>
            <span style="white-space: nowrap; color: #ffffff;">了解更多猛健樂</span>
          </a>

          <a href="/weight-bone/BMI" 
             style="
                display: flex; flex-direction: row; align-items: center; justify-content: center;
                gap: 10px; padding: 12px 24px;
                background: linear-gradient(to right, #10b981, #059669);
                border-radius: 16px; color: #ffffff !important; text-decoration: none !important;
                font-weight: 700; font-size: 16px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                transition: all 0.3s ease-in-out; cursor: pointer;
             "
             onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 10px 15px -3px rgba(0, 0, 0, 0.2)';"
             onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 6px -1px rgba(0, 0, 0, 0.1)';"
          >
            <svg stroke="currentColor" fill="currentColor" viewBox="0 0 512 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg" style="color: white;"><path d="M448 64H64C28.65 64 0 92.65 0 128v256c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V128c0-35.35-28.65-64-64-64zm-192 272c-44.18 0-80-35.82-80-80s35.82-80 80-80 80 35.82 80 80-35.82 80-80 80z"></path></svg>
            <span style="white-space: nowrap; color: #ffffff;">減重自我評估</span>
          </a>

        </div>
    `
  },

  {
    id: 'child-height-growth-guide',
    title: '【2026兒童長高全攻略懶人包】家長必看！掌握黃金生長期的關鍵密碼',
    category: '衛教文章',
    date: '2026-02-04',
    lastModified: '2026-02-04',
    summary: '孩子的身高是家長最關心的事。從遺傳公式、生長板閉合時間、性早熟警訊，到睡眠、營養、跳繩運動建議，復健科醫師整理完整長高懶人包，助孩子突破遺傳限制！',
    coverImage: '/images/news/article/boneage/0.webp',
    
    // ✨ SEO 強力優化區
    seoTitle: '兒童長高懶人包：生長板閉合時間、性早熟症狀、長高食物與跳繩建議 - 醫師完整解析',
    seoDescription: '擔心孩子長不高？醫師詳解兒童長高關鍵：男女生長板閉合年齡、遺傳身高公式、預防性早熟警訊。掌握睡眠黃金期、必吃長高營養素(鈣、鋅、維生素D)及跳繩運動菜單，把握青春期最後衝刺機會。',
    keywords: ['兒童長高', '性早熟', '生長板', '遺傳身高', '骨齡', '轉大人', '生長激素', '跳繩長高', '維生素D', '補鈣'],
    
    contentHtml: `
<style>
  .responsive-img-enlarge { width: 110% !important; max-width: none !important; display: block !important; margin: 1rem auto !important; position: relative !important; left: 50% !important; transform: translateX(-50%) !important; height: auto; }
  @media (min-width: 768px) { .responsive-img-enlarge { width: 100% !important; left: 0 !important; transform: none !important; } }
</style>
        <h2>2026 兒童長高全攻略：把握生長板閉合前的黃金衝刺期</h2>
        <img src="/images/news/article/boneage/1.webp" alt="兒童長高黃金期與生長板閉合時間圖解" class="responsive-img-enlarge">
        <img src="/images/news/article/boneage/2.webp" alt="影響兒童身高的關鍵因素：遺傳、營養與作息" class="responsive-img-enlarge">
        <img src="/images/news/article/boneage/3.webp" alt="兒童長高必備營養素：蛋白質、鈣質、維生素 D 與鋅" class="responsive-img-enlarge">
        <img src="/images/news/article/boneage/4.webp" alt="預防兒童性早熟：避免環境荷爾蒙與肥胖影響身高" class="responsive-img-enlarge">
        <img src="/images/news/article/boneage/5.webp" alt="高效長高運動建議：每日跳繩計畫與正確姿勢" class="responsive-img-enlarge">

        <div style="
          display: grid; 
          /* 強制手機版為兩欄，並在電腦版（螢幕寬於 640px）自動變回四欄 */
          grid-template-columns: repeat(2, 1fr); 
          gap: 10px; 
          padding: 16px 8px;
        ">
          <style>
            @media (min-width: 640px) {
              .button-grid-container { grid-template-columns: repeat(4, 1fr) !important; }
            }
          </style>

          <div class="button-grid-container" style="display: grid; grid-template-columns: inherit; gap: inherit; grid-column: 1 / -1;">
            
            <a href="/weight-bone/bone-age" 
                style="display: flex; align-items: center; justify-content: center; padding: 12px 4px; background: linear-gradient(to right, #3b82f6, #4f46e5); border-radius: 12px; color: #ffffff !important; text-decoration: none !important; font-weight: 700; font-size: 14px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); transition: all 0.3s ease; text-align: center;"
                onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform='translateY(0)'">
              <span style="color: #ffffff;">宸新骨齡門診</span>
            </a>

            <a href="/weight-bone/BMI" 
                style="display: flex; align-items: center; justify-content: center; padding: 12px 4px; background: linear-gradient(to right, #10b981, #059669); border-radius: 12px; color: #ffffff !important; text-decoration: none !important; font-weight: 700; font-size: 14px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); transition: all 0.3s ease; text-align: center;"
                onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform='translateY(0)'">
              <span style="color: #ffffff;">生長發育評估</span>
            </a>

            <a href="/weight-bone/calculator" 
                style="display: flex; align-items: center; justify-content: center; padding: 12px 4px; background: linear-gradient(to right, #3b82f6, #4f46e5); border-radius: 12px; color: #ffffff !important; text-decoration: none !important; font-weight: 700; font-size: 14px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); transition: all 0.3s ease; text-align: center;"
                onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform='translateY(0)'">
              <span style="color: #ffffff;">遺傳身高預測</span>
            </a>

            <a href="/weight-bone/nutrition" 
                style="display: flex; align-items: center; justify-content: center; padding: 12px 4px; background: linear-gradient(to right, #f59e0b, #d97706); border-radius: 12px; color: #ffffff !important; text-decoration: none !important; font-weight: 700; font-size: 14px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); transition: all 0.3s ease; text-align: center;"
                onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform='translateY(0)'">
              <span style="color: #ffffff;">長高營養指南</span>
            </a>
          </div>
        </div>

      <p>孩子的身高，一直是許多家長最焦慮的話題。「我的孩子這樣算矮嗎？」、「是不是該補鈣？」、「聽說太早發育會長不高？」這些疑問在診間層出不窮。</p>
      <br>
      <p>其實，兒童長高是一場與時間的賽跑。了解生長板的運作、掌握遺傳與後天的黃金比例，並在正確的時間點介入，才能幫助孩子發揮最大的生長潛力。本篇懶人包將為您完整解析關於「長高」的所有關鍵知識。</p>
  
      <h2>一、 決定身高的兩大力量：遺傳 vs. 後天努力</h2>
      <p>大家常問：「身高是天註定的嗎？」答案是：大部分是，但還有極為重要的努力空間。醫學研究顯示，遺傳因素對身高的影響約佔 <strong>70% 至 80%</strong>，父母的身高決定了孩子的「基本盤」。但剩下的 <strong>20% 至 30%</strong> 則取決於後天的營養、睡眠與運動。這 30% 的差異，往往就是 5 到 10 公分的差距，也是家長可以努力的目標。</p>
      
      <h3>📏 遺傳身高預測公式 (Target Height)</h3>
      <p>您可以透過以下公式，算出孩子未來的「目標身高」範圍：</p>
      <ul>
        <li><strong>男生：</strong>(父親身高 + 母親身高 + 12) ÷ 2 ± 7.5 公分</li>
        <li><strong>女生：</strong>(父親身高 + 母親身高 - 12) ÷ 2 ± 7.5 公分</li>
      </ul>
      <p><em>註：這只是一個統計學上的預測區間。若後天管理得當，孩子絕對有機會突破遺傳預測的高標；反之，若生活作息不佳，可能連低標都達不到。</em></p>
  
      <h2>二、 破解生長板與骨齡的秘密</h2>
      <p>想要長高，關鍵在於位於長骨末端的<strong>「生長板 (Growth Plate)」</strong>。它位於長骨的末端，是骨骼延長的關鍵區域。一旦生長板「閉合」（X光下縫隙消失），骨骼就不會再變長，身高也就此定型。</p>
      
      <p>判斷孩子還能不能長，最準確的方法並非看實際年齡，而是到復健科或小兒內分泌科拍攝左手掌 X 光片來判斷<strong>「骨齡 (Bone Age)」</strong>。</p>
      <ul>
        <li><strong>若骨齡小於實際年齡：</strong>代表還有生長空間，但也可能是體質性生長遲緩。</li>
        <li><strong>若骨齡大於實際年齡：</strong>代表生長板提早老化，生長空間被壓縮，這常是性早熟常見的跡象。</li>
      </ul>
  
      <h3>⏳ 男女平均生長板閉合年齡</h3>
      <ul>
        <li><strong>女生：</strong>平均在 <strong>14 ~ 15 歲</strong> 左右閉合。</li>
        <li><strong>男生：</strong>平均在 <strong>16 ~ 17 歲</strong> 左右閉合 (部分晚熟型的男孩可能延至 18 歲)。</li>
      </ul>
  
      <h2>三、 掌握生長節奏：各階段正常生長速度</h2>
      <p>孩子的生長並非等速前進，每個時期都有標準速度。若低於以下標準，家長務必提高警覺：</p>
      <ul>
        <li><strong>嬰兒期 (0-1歲)：</strong>一年增長 20~25 公分 (生長最快的黃金期)。</li>
        <li><strong>幼兒期 (1-3歲)：</strong>一年增長 10~12 公分.</li>
        <li><strong>學齡前期 (3-6歲)：</strong>一年增長 6~8 公分。</li>
        <li><strong>學齡期 (6歲至青春期前)：</strong>一年穩定成長 5~6 公分。</li>
      </ul>
      <p><strong>🚨 重要警訊：</strong>若此階段孩子每年長不到 <strong>4 公分</strong>，或生長曲線落在第 3 百分位以下（同齡 100 人中排最後 3 名），請務必就醫檢查。</p>
  
      <h2>四、 青春期衝刺：男女大不同</h2>
      <p>青春期是最後的長高機會，一旦啟動，生長板就開始進入關閉的倒數計時。</p>
  
      <h3>👧 女生：通常比男生早發育，也較早停止</h3>
      <ul>
        <li><strong>初期 (約 8-10 歲)：</strong>胸部發育（出現小硬塊），生長開始加速，每年約長 7~8 公分。</li>
        <li><strong>高峰期 (約 10-12 歲)：</strong>到達巔峰，一年可長 8~10 公分。</li>
        <li><strong>末期指標：</strong><strong>「初經來潮」</strong>。初經後生長激素受雌激素抑制，生長速度驟降，平均大約只能再長 4~6 公分。初經前的時間最為寶貴。</li>
      </ul>
  
      <h3>👦 男生：大器晚成，衝刺力強</h3>
      <ul>
        <li><strong>初期 (約 10-12 歲)：</strong>睪丸變大、變色（常被家長忽略），每年約長 7~9 公分。</li>
        <li><strong>高峰期 (約 12-14 歲)：</strong>陰莖增長、長出陰毛，一年可長 10~12 公分。</li>
        <li><strong>末期指標：</strong><strong>「變聲與長鬍鬚」</strong>。當聲音變低沈時，通常已進入青春期後期，生長速度遞減，直到 16、17 歲閉合。</li>
      </ul>
  
      <h2>五、 隱形殺手：性早熟與肥胖影響</h2>
      <p>若女生在 8 歲前乳房發育、男生在 9 歲前睪丸變大，即為性早熟。這會導致骨齡加速成熟，讓生長板提早閉合。雖然這類孩子初期在班上看起來很高，但實際上是「透支未來」，最終成人身高反而可能偏矮。</p>
      <p><strong>家長注意：</strong>避免讓孩子接觸環境荷爾蒙，並嚴格控制體重。肥胖的脂肪細胞會分泌雌激素，是推動骨齡提早閉合的重要因素。</p>
  
      <h2>六、 後天長高三大支柱：睡眠、營養、運動</h2>
      <p>想突破遺傳，必須在生長板閉合前徹底執行以下紀律：</p>
  
      <h3>💤 第一支柱：睡眠 (生長激素工廠)</h3>
      <p>生長激素在<strong>深層睡眠</strong>時分泌最旺盛，其高峰期集中在「晚上 10 點至凌晨 2 點」。</p>
      <ul>
        <li><strong>建議：</strong>為了在 10 點進入深眠，孩子應於 <strong>晚上 9:30 前上床</strong>。</li>
        <li><strong>環境：</strong>務必關燈全黑，微光會干擾褪黑激素，進而影響生長激素分泌。</li>
      </ul>
  
      <h3>🍽️ 第二支柱：營養補充 (蓋房子的原料)</h3>
      <ul>
        <li><strong>蛋白質 (地基)：</strong>生長激素合成的關鍵。多攝取蛋、奶、瘦肉、豆類。</li>
        <li><strong>鈣質 (磚塊)：</strong>讓骨頭變硬。建議每天 2 杯牛奶，並攝取小魚乾或芝麻。</li>
        <li><strong>維生素 D (搬運工)：</strong>幫助腸道吸收鈣。來源包括曬太陽（每日 15 分鐘）、鮭魚、蛋黃。</li>
        <li><strong>鋅 (Zinc)：</strong>與細胞分裂密切相關，缺鋅會導致長不高。來源：牡蠣、海鮮、南瓜子。</li>
        <li><strong>⚠️ 嚴禁糖分：</strong>高糖會<strong>直接抑制生長激素分泌</strong>，一杯全糖手搖飲可能讓生長激素停機 2 小時。</li>
      </ul>
  
      <h3>🏃 第三支柱：運動 (物理性刺激)</h3>
      <p>垂直衝擊運動能刺激生長板，<strong>跳繩</strong>是最高效的選擇。</p>
      <p style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; border-left: 5px solid #3b82f6; color: #374151; line-height: 1.6;">
        <strong style="color: #1f2937;">📝 跳繩長高公式：年齡 × 100 下 / 每天</strong><br>
        例如：10 歲的孩子每天跳 1000 下。建議分段進行，穿著球鞋避免受傷。
      </p>
  
      <h2>七、 結語：給家長的行動清單</h2>
      <p>長高是一次性的機會，錯過就無法重來。請家長協助落實：</p>
      <ol>
        <li><strong>定期紀錄：</strong>每三個月測量身高，繪製生長曲線。</li>
        <li><strong>早睡覺：</strong>晚上 9:30 前就寢，保證生長激素品質。</li>
        <li><strong>多跳躍：</strong>落實每日跳繩計畫。</li>
        <li><strong>吃對營養：</strong>補充足夠蛋白質、鋅與維生素 D，嚴格禁絕糖分與油炸。</li>
        <li><strong>及早就醫：</strong>若發現發育過早或身高停滯，請盡速諮詢復健科醫師進行骨齡評估。</li>
      </ol>


    `
  },

  {
    id: 'climbing-injuries',
    title: '【運動常見傷害 - 攀岩】攀向巔峰也要小心受傷！',
    lastModified: '2026-01-30',
    category: '衛教文章',
    date: '2026-01-30',
    summary: '攀岩是近年熱門運動，但受傷部位多集中在上肢。從手指滑車、肩膀到膝蓋折膝動作，醫師詳解六大常見攀岩傷害，讓你像大神 Alex Honnold 一樣挑戰自我而不受傷！',
    coverImage: '/images/news/article/climb.webp',
    seoTitle: '攀岩運動傷害懶人包：手指滑車、肩旋轉肌、折膝半月板受傷詳解',
    seoDescription: '攀岩愛好者必看！醫師整理六大常見攀岩傷害：A2滑車韌帶撕裂、肩夾擠、高爾夫球肘、TFCC手腕痛及折膝導致的半月板損傷。結合 Alex Honnold 挑戰 101 情境衛教。',
    keywords: ['攀岩', '運動傷害', 'Alex Honnold', '手指滑車', '滑車韌帶', '肩旋轉肌', '半月板', '復健'],
    contentHtml: `
        <h2>常見攀岩運動傷害解析：上肢與下肢的潛在風險</h2>
        <img src="/images/news/article/climb.webp" alt="攀岩運動常見傷害分布圖：手指、肩膀、手肘與膝蓋" style="width: 60%; height: auto;">
      <p>攀岩是近年來超級熱門的運動，不僅納入奧運項目，最近無繩獨攀大神 Alex Honnold 成功攀登台北 101 的壯舉更是震撼全台！</p><br>
      <p>🏥 門診中常遇到受傷的岩友，不同於滑雪多傷下肢，攀岩因運動特性，受傷部位多集中在上肢。常見原因不外乎：<strong>過度使用、休息不足或墜落姿勢不當</strong>。</p>
      
      <p>以下結合攀岩情境，介紹六種常見的攀岩傷害：</p>
  
      <h2>1️⃣ 手指滑車韌帶損傷</h2>
      <p>這是攀岩最常見的傷害（尤其是 A2/A4 滑車）。當攀岩者使用 <strong>「Crimp (扣點)」</strong> 的姿勢，手指緊緊扣住微小邊緣時，肌腱承受極大拉力，易導致韌帶發炎甚至撕裂，嚴重時手指甚至會聽到「啪」的一聲。</p>
  
      <h2>2️⃣ 肩旋轉肌袖損傷</h2>
      <p>肩膀是攀岩時活動範圍最大、受力最複雜的關節。頻繁的 <strong>「過頭動作」</strong> 及大幅度的動態移動，若肩胛穩定度不足，容易造成肩夾擠或肌腱發炎，嚴重時連睡覺壓到肩膀都會痛醒。</p>
  
      <h2>3️⃣ 手肘肌腱炎 (網球肘/高爾夫球肘)</h2>
      <p>前臂肌肉過度緊繃所致。攀爬長距離挑戰時，肌肉極易疲勞：</p>
      <ul>
        <li><strong>高爾夫球肘 (內側痛)：</strong> 常因過度引體向上出力造成。</li>
        <li><strong>網球肘 (外側痛)：</strong> 常因過度伸腕抓握造成。</li>
      </ul>
  
      <h2>4️⃣ 三角纖維軟骨複合體損傷 (TFCC)</h2>
      <p>指的是手腕外側（小指側）的疼痛。當遇到需要抓握大角度的 <strong>「Sloper (平滑點)」</strong> 或 <strong>「Undercling (倒抓)」</strong> 時，手腕在極度扭轉的角度下發力，就容易造成軟骨擠壓受損。</p>
  
      <h2>5️⃣ 膝蓋半月板損傷</h2>
      <p>現代攀岩技巧常使用 <strong>「Drop Knee (折膝)」</strong> 或高強度的 <strong>「Heel Hook (掛腳)」</strong>。這類動作會對膝蓋施加強大的扭轉剪力，容易導致半月板 or 内側韌帶受傷。</p>
  
      <h2>6️⃣ 腳踝扭傷</h2>
      <p>通常發生在 <strong>抱石 (Bouldering)</strong> 項目。在沒有繩索保護的情況下墜落，若落地姿勢不佳或腳剛好卡在岩墊縫隙，極易造成腳踝翻船扭傷。</p>
  
      <h2>👨‍⚕️ 醫師叮嚀</h2>
      <p>攀岩是一項很棒的運動，在追求挑戰自我的同時，也要懂得傾聽身體的聲音。<strong>「適度休息」與「正確的肌力訓練」</strong>才是長久之道喔！</p>
    `
  },

  {
    id: 'hyaluronic-diff',
    title: '打膝蓋剩下的玻尿酸，可以順便補臉嗎？',
    lastModified: '2026-01-21',
    category: '衛教文章',
    date: '2026-01-17',
    summary: '門診一位大姊突發奇想：「醫美打臉好貴，膝蓋打剩的玻尿酸可以補法令紋嗎？」修但幾勒！雖然都叫玻尿酸，但機油跟水泥可是不能混用的喔！',
    coverImage: '/images/news/article/ha.webp',
    seoTitle: '打膝蓋剩下的玻尿酸，可以順便補臉嗎？醫美與關節玻尿酸差異',
    seoDescription: '門診常被問：打膝蓋剩下的玻尿酸，可以順便補臉嗎？醫師解釋：雖然都叫玻尿酸，但關節用的像機油，醫美用的像水泥，用途大不同！醫師詳解三種玻尿酸差異。',
    keywords: ['玻尿酸', '膝蓋退化', '醫美', '增生療法', '韌帶修復', '醫學知識'],
    contentHtml: `
        <h2>關節玻尿酸 vs 醫美玻尿酸：成分、用途與交聯度大對比</h2>
        <img src="/images/news/article/ha.webp" alt="醫美用玻尿酸與關節注射用玻尿酸的差異解析" style="width: 100%; height: auto;">
      <p>門診一位可愛的大姊突發奇想問我：「醫美打臉好貴喔，阿打膝蓋的玻尿酸，剩一點幫我補一下法令紋？」</p>
      <p><strong>😂 修但幾勒！當然不行！</strong></p>
      <p>雖然都叫「玻尿酸」，但不會拿機油去補牆壁一樣啊！這兩者的濃度、分子大小與交聯程度完全不同。</p>
      
      <h2>1. 🚗 膝蓋退化用的：關節的「機油」</h2>
      <p>膝蓋退化就像引擎機油乾掉，骨頭磨骨頭當然痛！這類玻尿酸主要功能是<strong>「潤滑」</strong>。</p>
      <ul>
        <li><strong>短效型（傳統機油）：</strong> 像水一樣稀，要每週打，比較便宜。</li>
        <li><strong>長效型（合成機油）：</strong> 比較濃稠，半年到一年打一次就好，省時但較貴。</li>
      </ul>
      <p><strong>❌ 為什麼不能打臉？</strong><br>因為它太稀了！打進臉部無法支撐，幾天就被流失代謝掉了。</p>
      
      <h2>2. 🧱 醫美用的：臉部的「水泥/填充材」</h2>
      <p>醫美的玻尿酸經過特殊處理（交聯），質地像果凍甚至黏土一樣硬挺。它的功能是<strong>「填充與塑形」</strong>，這樣才能撐起臉型、填補皺紋。</p>
      <p><strong>❌ 為什麼不能打膝蓋？</strong><br>就像把乾掉硬硬的水泥灌進引擎，無法達到潤滑效果，反而會讓膝蓋卡住、更加疼痛！</p>
      
      <h2>3. 🏗️ 韌帶修補用的：組織的「鷹架」</h2>
      <p>這是新研發的玻尿酸應用。它的目的是像<strong>「鷹架」</strong>一樣，讓修復細胞可以爬上鷹架去修補破洞，幫助受傷的組織長回來。</p>
      
      <h4>👨‍⚕️ 醫師小總結</h4>
      <p>雖然名稱一樣，但用途大不同，請記住這三個概念：</p>
      <ul>
        <li>想<strong>潤滑關節</strong> 👉 用<strong>機油</strong>（關節玻尿酸）</li>
        <li>想<strong>變美填補</strong> 👉 用<strong>水泥</strong>（醫美玻尿酸）</li>
        <li>想<strong>修復韌帶</strong> 👉 用<strong>鷹架</strong>（軟組織玻尿酸）</li>
      </ul>
    `
  },

  {
    id: 'kneeclick',
    title: '膝蓋為何會喀喀響，是膝蓋退化了嗎?',
    lastModified: '2026-01-21',
    category: '衛教文章',
    date: '2026-01-14',
    summary: '門診很常碰到病患來看診，詢問膝蓋為何會喀喀響，擔心膝蓋是不是退化了!',
    coverImage: '/images/news/article/knee.webp',
    seoTitle: '膝蓋為何會喀喀響，是膝蓋退化了嗎?',
    seoDescription: '膝蓋為何會喀喀響，是膝蓋退化了嗎?，膝蓋有聲音，膝關節退化。',
    keywords: ['醫學知識', '膝蓋痛', '退化性關節炎', '喀喀響'],
    contentHtml: `
        <h2>膝蓋喀喀響原因揭秘：是生理現象還是關節退化警訊？</h2>
        <img src="/images/news/article/knee.webp" alt="膝蓋關節構造與喀喀響發生原因示意圖" style="width: 100%; height: auto;">

      <p>門診很常碰到病患來看診，詢問膝蓋為何會喀喀響，擔心膝蓋是不是退化了！</p>
  
      <h2>✅ 這種聲音免驚！(生理性聲響)</h2>
      <p>如果膝蓋有聲音，但是 <strong>「完全不痛、不腫、有力氣」</strong>，通常是正常的生理現象：</p>
      <ul>
        <li><strong>氣泡聲：</strong> 像折手指一樣，關節內的氣泡破掉（啵一聲）。</li>
        <li><strong>筋骨滑動：</strong> 就像撥吉他弦，筋稍微掃過骨頭的聲音。</li>
      </ul>
      <h4>👉 醫師說：</h4>
      <p>只要不痛，通常不需要治療，也不是關節炎的前兆喔！</p>
  
      <h2>🚨 出現這 4 種狀況，請看醫生！</h2>
      <p>如果聲音伴隨著不舒服，這才是膝蓋在求救：</p>
      <ul>
        <li><strong>會痛：</strong> 最直接的警訊，內部組織受傷。</li>
        <li><strong>會腫：</strong> 膝蓋看起來腫腫的，摸起來熱熱的。</li>
        <li><strong>會卡：</strong> 膝蓋彎到一半突然「卡死」動不了。</li>
        <li><strong>會軟：</strong> 走路突然沒力氣，稍微軟腳。</li>
      </ul>
      <h4>👉 醫師說：</h4>
      <p>這可能代表半月板、軟骨或是韌帶受傷了，請盡快檢查。</p>
  
      <h2>💪 膝蓋有聲音，該怎麼保養？</h2>
      <ul>
        <li><strong>練壯股四頭肌：</strong> 大腿肌肉有力，就能抓穩膝蓋骨，減少磨損。<br>(方法：坐在椅子上，把腳伸直抬高停留 5-10 秒，或背靠牆壁半蹲)</li>
        <li><strong>運動後放鬆大腿前外側</strong></li>
        <li><strong>避開危險動作：</strong> 少做蹲跪、盤腿坐，避免深蹲超過 90 度。</li>
      </ul>
  
      <h4>💡 最後記住這句口訣：</h4>
      <p><strong>「有聲無痛」多觀察，「有聲有痛」快就醫！</strong></p>
    `
  }
];