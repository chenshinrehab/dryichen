// src/data/sportsInjuries.ts

import { newsList, getNewsById } from '@/data/news'

export const sportsInjuriesData = [



   {
    category: 'problem',
    title: '診間病患常見疑問',
    description: '統整病患在診間常見疑問，一次幫大家解惑',
    image: '/images/sportinjury/9.webp',
    injuries: [
                              {
        slug: 'tissue-healing-time-analysis',
        title: '身體受傷多久會好？肌肉、肌腱、韌帶、骨頭修復全解析',
        description: '受傷後「要休息多久？」是復健科門診最常見的問題。身體各種組織的修復速度，取決於其血液循環能力與細胞代謝率。肌肉擁有豐富血流，通常數週內可修復；而肌腱與韌帶血流較差，常需要數月時間重建；關節軟骨更因缺乏血管，自我修復能力極低。本文將從醫學角度，帶您一次看懂五大類組織的修復時程，並破除「完全靜養」的傳統迷思。',
        image: '/images/news/article/tissue-healing-analysis.webp',
      },
            {
        slug: 'orthopedics-vs-rehabilitation',
        title: '骨科 vs 復健科：完整比較指南｜哪個才是你的最佳選擇？',
        description: '骨科偏向外科手術，以X光評估硬組織；復健科以超音波評估軟組織，強調非手術的精準注射與功能重建。本文比較兩科強項、診所差異，教導民眾根據症狀正確選擇，少走冤枉路。',
        image:  '/images/news/article/orthopedics-vs-rehabilitation.webp',
      },
                  {
        slug: 'ultrasound-vs-xray-guide',
        title: '照X光還是超音波？復健科醫師教你秒懂差異與選擇時機？',
        description: '受傷後到底該照X光還是超音波？本文用最生活化的「蓋房子」比喻，帶你秒懂為什麼X光看不到韌帶，而超音波卻能將軟組織看個仔細。結合實證醫學，解析這兩種門診最常見檢查的優缺點，以及在扭傷、發炎或懷疑骨折時的最佳選擇策略。',
        image:  '/images/news/article/us-vs-xray-guide.webp',
      },

                  {
        slug: 'joint-crepitus-causes-and-treatments',
        title: '關節喀喀響是壞掉了嗎？運動醫學解析三大成因與就醫時機',
        description: '關節發出喀喀聲卻不痛？本文從運動醫學角度深度解析關節聲音（crepitus）的三大科學成因、各部位無痛性喀喀聲的差異，並整理出必須就醫的「紅旗警示」與日常保養策略。',
        image: '/images/news/article/joint-crepitus.webp',
      },
                        {
        slug: 'ice-heat-therapy-guide',
        title: '冰敷還是熱敷？運動醫學告訴你正確答案：腳扭傷、閃腰、落枕完整攻略',
        description: '腳扭傷要冰敷還是熱敷？閃到腰呢？運動完後又該怎麼辦？本文以運動醫學觀點，整合最新實證研究，詳細說明冰敷與熱敷的適應症、正確溫度、持續時間與頻率，讓你在家就能做出正確處置。',
        image: '/images/news/article/ice-heat-therapy.webp',
      },

                  {
        slug: 'pain-medication-analysis',
        title: '疼痛就吃止痛藥？解析止痛藥與肌肉鬆弛劑的真相與風險',
        description: '深度剖析非類固醇消炎止痛藥（NSAIDs）、肌肉鬆弛劑、乙醯胺酚（普拿疼）的藥理機制與長期使用風險。實證研究揭露止痛藥只是「關掉警報」而非治療根源，並說明何時需要尋找疼痛的真正成因。',
        image: '/images/news/article/pain-medication-analysis.webp',
      },
            {
        slug: 'nsaid-hypersensitivity',
        title: 'NSAID（非類固醇消炎藥）過敏全解析：為什麼有人吃止痛藥會過敏？',
        description: '深度剖析NSAID過敏的發生比例、致病機轉、遺傳因素與交叉反應問題。實證研究揭露哪些NSAID最容易引發過敏，並提供過敏後的疼痛處理替代策略。',
        image: '/images/news/article/drug.webp',
      },
                     {
        slug: 'lumbar-disc-injection-analysis',
        title: '椎間盤突出免開刀？揭開「椎間盤內注射」的真!!',
        description: '深度剖析腰椎椎間盤突出接受PRP、羊膜、BMAC等椎間盤內注射的實際療效。實證研究揭露注射無法產生「撐開」神經壓迫的物理效果，傳統腰椎牽引與徒手治療仍是核心，而針對周邊韌帶與小面關節的輔助注射可能更具臨床價值。',
        image: '/images/news/article/lumbar-injection.webp',

      },
            {
        slug: 'cervical-disc-herniation-surgery-analysis',
        title: '頸椎椎間盤突出要開刀嗎？人工椎間盤置換全解析',
        description: '頸椎椎間盤突出常造成肩頸疼痛、手麻與無力。多數患者可透過復健獲得改善，但若出現神經進行性受損，則需考慮手術。本文以醫學觀點深入解析人工椎間盤置換術（CDA）與傳統融合手術（ACDF）的優缺點、術後後遺症及台灣自費價格，並探討保守治療與手術的選擇時機。',
        image: '/images/news/article/cervical-surgery.webp',

      },
               {
        slug: 'lumbar-disc-herniation-surgery',
        title: '腰椎椎間盤突出要開刀??  手術抉擇全解析',
        description: '腰椎椎間盤突出是造成坐骨神經痛與下背痛的主因之一。本文深入剖析傳統手術與脊椎微創手術（內視鏡/顯微鏡）的優缺點、術後沾黏等後遺症，以及台灣健保與自費價格大公開。實證醫學指出，若復健後症狀改善，人體具備吸收突出的自癒能力；但出現馬尾症候群等紅旗徵兆時，則應盡速評估手術。',
        image: '/images/news/article/lumbar-disc-herniation-surgery.webp',

      },
            {
        slug: 'scoliosis-causes-treatment',
        title: '脊椎側彎完整指南：成因、角度變化與治療選項全解析',
        description: '脊椎側彎不只是外觀問題！深入解析特發性、先天性與退化性側彎的成因，Cobb角度是否能變回來，以及從觀察到手術的完整治療比較。',
        image: '/images/news/article/scoliosis-treatment.webp',
      },

      {
        slug: 'frozen-shoulder-and-diabetes',
        title: '五十肩與糖尿病的深度關聯：為什麼糖尿病患者更容易罹患五十肩？',
        description: '糖尿病患者五十肩風險高出5倍！深入解析AGEs糖化機制、血糖控制與五十肩的關係，以及完整治療選項比較。',
        image: '/images/news/article/frozen-shoulder-diabetes.webp',
      },
                  {
        slug: 'precocious-puberty-taiwan-depth-analysis',
        title: '台灣兒童性早熟全解析：定義、成因與家長的避雷指南',
        description: '深度剖析台灣兒童性早熟的醫學定義與在地成因。從骨齡超前、環境荷爾蒙干擾到飲食誤區，提供全方位的預防對策，幫助家長守護孩子的長高黃金期。',
        image: '/images/news/article/precocious-puberty.webp',
      },
            {
        slug: 'statin-induced-myalgia-analysis',
        title: '吃降血脂藥全身痠痛？解析哪種血脂藥容易引發肌肉痛？',
        description: '深度剖析常見血脂藥（史他汀類藥物）引發肌肉痠痛的原因。實證醫學揭露親脂性與親水性血脂藥在肌肉副作用上的差異，並由林醫師提供臨床換藥與復健的科學改善策略。',
        image: '/images/news/article/statin-induced-myalgia1.webp',
      },
                  {
        slug: 'steroid-types-sports-medicine',
        title: '止痛的類固醇 vs. 增肌的類固醇：運動醫學完全解析，差別究竟在哪裡？',
        description: '許多人聽到「類固醇」就心生恐懼，但其實類固醇有兩大截然不同的種類：用於消炎止痛的「皮質類固醇」與用於增肌的「合成代謝類固醇」。本文以運動醫學觀點，用你看得懂的語言，深度解析兩者的機制、用途、風險，並澄清常見迷思。',
        image: '/images/news/article/steroid-types-sports-medicine.webp',
      },
    ]
  },

     {
    category: 'medical-updates',
    title: '最新醫療資訊',
    description: '林醫師持續更新精進醫療知識及技術，分享新的治療方式',
    image: '/images/sportinjury/10.webp',
    injuries: [
                        {
        slug: 'ge-logiq-totus-ultrasound',
        title: '診所正式引進 GE LOGIQ Totus——全球高階的肌肉骨骼超音波機',
        description: '診所正式引進旗艦等級 GE LOGIQ Totus 肌肉骨骼超音波。擁有超高解析度影像與多項智慧輔助功能，讓超音波導引注射更精準、更安全。',
        image:  '/images/news/article/gelotus/2.webp',
      },
                              {
        slug: 'regenerative-injections-comparison-prp-plt-amniotic-bmc',
        title: 'PRP、PLT、羊膜、BMC 哪種好？再生注射療法2026完全指南',
        description: '深度對比復健科四大再生療法：PRP、PLT、羊膜注射與 BMC 骨髓濃縮液。解析為何年長者的 PRP 效果可能打折扣，以及如何根據自身細胞活性、病況嚴重程度與預算，選出最有效的修復方案。',
        image: '/images/news/article/regenerative-injections-comparison.webp',
      },
                                          {
        slug: 'prolotherapy-dextrose-prp',
        title: '增生療法全解析：高濃度葡萄糖 vs. PRP，哪個更適合你？',
        description: '用白話的方式解釋增生療法的原理，並深入比較高濃度葡萄糖（Dextrose Prolotherapy）與富血小板血漿（PRP）的機制、效果與適應症。實證研究帶你了解這兩種再生療法的差異，幫助你做出更明智的治療選擇。',
        image: '/images/news/article/prolotherapy-dextrose-prp1.webp',
      },
                                          {
        slug: 'prolotherapy-injection-interval',
        title: '增生療法注射間隔全解析：為什麼葡萄糖隔兩週、PRP要四週',
        description: '從運動醫學角度深度解析增生療法中高濃度葡萄糖建議兩週施打一次、PRP建議四週施打一次的科學根據，說明注射間隔太短或太長的影響，以及為何完成3到5次完整療程才能達到最佳療效。',
        image: '/images/news/article/prolotherapy-interval.webp',
      },
                                    {
        slug: 'ligament-ha-vs-prp',
        title: '韌帶玻尿酸全解析!與PRP怎麼選？',
        description: '韌帶玻尿酸與PRP是修復關節與軟組織的兩大利器，但作用機制大不相同。實證研究揭露，PRP透過生長因子促進組織再生，適合慢性病變；玻尿酸則能提供潤滑、抑制沾黏，對急性扭傷有奇效。本文將系統性剖析兩者的優缺點，幫助您找出最適合的治療方案。',
        image: '/images/news/article/ligament-ha-vs-prp.webp',
      },
                                    {
        slug: 'eswt-energy-and-pain-level',
        title: '震波治療能量開多大才有效？越痛越好嗎？從醫學看最佳疼痛指數',
        description: '體外震波治療能量要開多大才有效？是不是越痛越好？本文從運動醫學角度深度解析震波能量分級與治療機制，說明為何治療時疼痛指數需維持在VAS 4至6分，並破解震波治療後吃消炎藥與施打麻醉的常見迷思。',
        image: '/images/news/article/eswt-energy-level.webp',
      },

    ]
  },


     {
    category: 'daycare',
    title: '日常生活醫學知識',
    description: '日常生活醫學小知識，讓生活更健康。',
    image: '/images/sportinjury/5.webp',
    injuries: [
          {
        slug: 'pillow-selection-guide',
        title: '枕頭選擇全解析：軟硬、高低、有凹洞嗎？醫學實證教你挑對枕頭',
        description: '從醫學角度深度解析枕頭軟硬、高度與形狀的選擇依據。實證研究揭露側躺與正躺各需哪種枕頭、中間凹洞設計是否真的有效，以及記憶棉、乳膠、羽絨等材質的差異，幫助你科學選出最適合自己的枕頭，告別晨起頸痛。',
        image: '/images/news/article/pillow-selection-guide.webp',
      },
                {
        slug: 'sleep-position-health-analysis',
        title: '正睡還是側睡？解析對脊椎、肩膀、骨盆與內臟器官的影響',
        description: '從醫學角度深度分析側睡與正睡（仰睡）的優缺點，涵蓋脊椎、肩膀旋轉肌群、骨盆、呼吸道及胃食道逆流等全面影響。實證研究揭露哪種睡姿更健康，並解析全球睡眠姿勢比例與個人化建議。',
        image: '/images/news/article/sleep-position-health-analysis.webp',
      },
                {
        slug: 'hula-hoop-horse-riding-weight-loss',
        title: '家居家搖呼拉圈或騎馬機，真的能有效瘦身嗎？運動醫學完整解析',
        description: '從運動醫學角度深度解析居家呼拉圈與騎馬機的減脂效果。實證研究揭露兩者的熱量消耗、核心肌群活化與體組成改變，並說明適用族群、禁忌症與正確使用方式。',
        image: '/images/news/article/hula-hoop-horse-riding-weight-loss.webp',
      },
                      {
        slug: 'children-kyphosis-guide',
        title: '小朋友為什麼會駝背？運動醫學完整解析：成因、治療與矯正運動',
        description: '深度解析兒童及青少年駝背（胸椎後凸）的成因，包含姿勢性駝背、許爾曼氏病與先天因素。提供實證支持的保守治療策略，以及家長可帶孩子練習的核心強化、伸展與矯正運動。',
        image: '/images/news/article/children-kyphosis-guide.webp',
      },
          {
        slug: 'why-cats-dont-get-stiff-neck',
        title: '家裡兩隻貓咪每天不是躺著就是躺著，為什麼不會落枕呢？',
        description: '診間每天都會看到很多落枕、閃到腰的病患。對人類來說，像貓咪那樣躺一小時，起來一定會脖子痛腰痛。但為什麼貓咪就不會呢？這其實跟牠們獨特的身體構造有關！',
        image: '/images/news/article/cat.webp',
      },

                  {
        slug: 'sunscreen-outdoor-sports-guide',
        title: '大太陽下如何保護自己？運動醫學教你正確防曬、認識防曬油原理與挑選指南',
        description: '從運動醫學觀點深度解析戶外大太陽下的防曬策略。實證研究揭露長期曝曬的疾病風險，包含皮膚癌、熱中暑、白內障，並詳細說明防曬油的物理與化學原理、SPF與PA的正確解讀、如何使用與挑選適合運動員的防曬產品。',
        image: '/images/news/article/sunscreen-outdoor-sports-guide.webp',
      },      
                  {
        slug: 'vertical-vibration-health-benefits',
        title: '垂直律動椅真的有效嗎？醫學解析：腸胃、心肺、骨骼好處',
        description: '全身垂直律動（WBVV）源自太空醫學，被證實能提升骨密度、改善微血管循環並促進腸胃蠕動。本文從復健與醫學觀點，深度剖析垂直律動對三大系統的益處，並揭露為何「水平或不規則震動」反而會產生剪力，對脊椎與關節造成不可逆的傷害。同時詳列適應症與絕對禁忌症。',
        image: '/images/news/article/wbvv-cover.webp',
      },



    ]
  },

          {
    category: 'nutrition',
    title: '營養補充知識',
    description: '長高長狀還有減肥飲食該如何選擇，營養品到底有沒有用?',
    image: '/images/sportinjury/7.webp',
    injuries: [
            {
        slug: 'weightlifting-nutrition-guide',
        title: '重訓飲食全解析：運動醫學觀點告訴你，蛋白質、澱粉、蔬菜怎麼吃才對？',
        description: '從運動醫學角度深入剖析重量訓練的飲食策略。實證研究揭露蛋白質每日建議攝取量、最佳補充時機、高品質食物來源，以及碳水化合物、蔬菜的正確搭配方式。營養補充品究竟有沒有用？科學證據一次說清楚。',
        image: '/images/news/article/weightlifting-nutrition-guide.webp',
      },
                  {
        slug: 'osteoporosis-calcium-guide',
        title: '骨鬆補鈣完全指南：運動醫學觀點解析劑量、鈣片種類與維他命D怎麼選',
        description: '從運動醫學角度深度解析骨質疏鬆補鈣策略。詳細比較碳酸鈣、檸檬酸鈣、海藻鈣的吸收率差異，說明每日鈣質建議劑量，以及維他命D3最佳補充方式，幫助民眾做出最正確的骨骼保健決定。',
        image: '/images/news/article/osteoporosis-calcium-guide.webp',
      },
                        {
        slug: 'joint-supplements-guide',
        title: '顧關節保健品全解析：UC-II、葡萄糖胺、鈣片、玻尿酸等誰有效?',
        description: '市售顧關節保健品種類繁多，本文以醫學觀點逐一解析 UC-II、葡萄糖胺、軟骨素、鈣片與口服玻尿酸的臨床證據。深入探討免疫調節機制、建議劑量、適用族群及常見迷思，幫助你科學選擇真正需要的成分，避免盲目花大錢。',
        image: '/images/news/article/joint-supplements-guide.webp',
      },
                        {
        slug: 'joint-supplement-truth',
        title: '診所施打軟骨素、維他命？揭開真相：實證效果到底如何？',
        description: '許多診所積極推薦患者自費注射軟骨素、維他命。但從運動醫學實證角度來看，這些補充品對關節退化與疼痛的效果究竟有多少？本文整理最新研究，並揭示部分產品為何「有效」的可能真相。',
        image: '/images/news/article/joint-supplement-truth.webp',
      },

                                    {
        slug: 'meat-nutrition-analysis',
        title: '吃對肉才能長肌肉！白肉與紅肉的醫學大解析：牛、豬、雞、魚怎麼挑？',
        description: '紅肉與白肉到底差在哪？牛肉、豬肉、雞肉、魚肉的營養成分有何不同？本文從復健與運動醫學觀點，針對兒童、健身族群、高齡者提供最科學的吃肉指南，教你遠離肌少症。',
        image: '/images/news/article/meat-nutrition-analysis.webp',
      },
                                          {
        slug: 'egg-nutrition-sports-medicine-myth',
        title: '一天能吃幾顆蛋？全蛋 vs 蛋白，會造成膽固醇過高嗎？',
        description: '雞蛋曾被視為膽固醇殺手，但最新運動醫學研究顯示，全蛋對肌肉合成的效果竟優於純蛋白。本文深入剖析亞洲族群吃蛋的保護效果、不同健康狀態的攝取建議，並破解生蛋較營養與膽固醇過高的常見迷思，教你如何吃出最高效益。',
        image: '/images/news/article/egg-nutrition-analysis.webp',
      },
                                                {
        slug: 'microwave-nutrients-myths-analysis',
        title: '微波爐會破壞營養嗎？醫學實證破解迷思',
        description: '「微波爐破壞食物營養」是流傳已久的迷思。本文從運動醫學與食品科學角度解析：決定營養保留的關鍵在於加熱溫度、時間與用水量。研究顯示，微波加熱在維生素C保留率上往往優於水煮，且適度蛋白質變性更有助於消化。帶您破解輻射與致癌迷思，掌握正確微波原則。',
        image: '/images/news/article/microwave-nutrients-science.webp',
      },
                              {
        slug: 'iv-drips-truth-unveiled',
        title: '揭開點滴的面紗：美白、減脂、保肝點滴成分？實證有效嗎？',
        description: '深度剖析坊間常見的美白點滴、減脂點滴與保肝點滴真實成分。從實證醫學角度揭露谷胱甘肽、左旋肉鹼與甘草酸的實際療效與潛在風險，破除單靠打針就能變白、變瘦的醫療行銷迷思。',
        image: '/images/news/article/iv-drips-cover.webp',
      },
      {
        slug: 'sugar-height-growth-analysis',
        title: '【家長必看】喝手搖飲、睡前吃水果會長不高？',
        description: '深度剖析精製糖如何透過胰島素拮抗、瘦素分泌與性早熟機制，干擾孩童生長激素分泌並導致生長板提早閉合。實證研究揭露手搖飲與甜點對最終身高的致命影響，並提供科學飲食策略。',
        image: '/images/news/article/sugar-height-growth-analysis.webp',
      },

    ]
  },

{
    category: 'tennis',
    title: '網球常見運動傷害',
    description: '網球運動科學化解析與常見的傷害介紹。',
    image: '/images/sportinjury/1.webp', 
    injuries: [
            {
        slug: 'tennis-injury-analysis', 
        title: '網球運動傷害全解析：握拍方式、單反雙反，誰更容易受傷？',
        description: '深度剖析東方式、西方式、半西方式握拍與單手反拍、雙手反拍的運動傷害差異。實證研究揭露哪種打法更容易導致網球肘、手腕ECU肌腱病變與肩袖撕裂，並提供科學預防策略。',
        image: '/images/news/article/tennis-injury-analysis.webp',
      },
      {
        slug: 'tennis-serve-injuries', 
        title: '網球發球的運動傷害完整指南：從平擊到 Kick，每一種球路的傷害風險',
        description: '探討網球發球生物力學，解析平擊、側旋、上旋與 Kick 發球對肩、肘、腕、脊椎的傷害風險，並提供專業的運動傷害預防建議與各球種深度分析。',
        image: '/images/news/article/tennis-serve-injuries.webp',
      },
            {
        slug: 'tennis-stroke-biomechanics', 
        title: '網球抽球科學：速度與旋轉的生物力學，握拍、站位與傷害預防全攻略',
        description: '從運動醫學角度深度解析網球抽球機制：解析動力鏈如何決定球速、上旋球的物理原理，並比較東方式、半西方式與西方式握拍的力學差異。結合最新研究，告訴你如何提升擊球品質並預防網球肘與手腕傷害。',
        image: '/images/news/article/tennis-stroke-biomechanics.webp',
      },
    ]
  },

  {
    category: 'basketball',
    title: '籃球常見運動傷害',
    description: '籃球運動常見的急停、跳躍所導致的傷害解析。',
    image: '/images/sportinjury/2.webp',
    injuries: [
                  {
        slug: 'basketball-position-injuries',
        title: '籃球傷害地圖：從 1 號位到 5 號位，你的位置決定了受傷風險？',
        description: '從運動醫學與生物力學角度，深入分析籃球場上五個位置的傷害風險。為何得分後衛受傷率最高？中鋒最怕腰椎與足部應力性骨折？本文結合 NBA 實證研究與真實案例，解析各位置常見的 ACL 撕裂、跳躍膝與踝扭傷機制，並提供針對性的預防策略。',
        image: '/images/news/article/basketball-injury-analysis.webp',
      },
            {
        slug: 'nba-injury-analysis',
        title: 'NBA球員十字韌帶、半月板、跟腱撕裂後的數據真相',
        description: '深度剖析NBA球員最常見的三大毀滅性傷病：前十字韌帶(ACL)撕裂、半月板手術與跟腱(阿基里斯腱)撕裂。從運動醫學、生物力學與進階實證數據出發，揭露這三種傷病術後的重返賽場(RTP)機率、真實命中率(TS%)影響、球員效率值(PER)下降幅度，以及「代償效應」帶來的二次傷害風險。並以Kevin Durant、Klay Thompson等球星為例，提供最科學的傷病解答。',
        image: '/images/news/article/nba-injury-analysis.webp',
      },
      {
        slug: 'basketball-injury',
        title: '為什麼打籃球最傷膝蓋？常見膝關節運動傷害完整解析',
        description: '籃球是全球最受歡迎的運動之一，但它也是導致膝關節損傷最高的運動之一。深入解析為何籃球特別傷膝蓋、常見傷害類型、受傷機轉與完整預防策略。',
        image: '/images/news/article/basketball/kneeinjury.webp',
      },

    ]
  },

    {
    category: 'baseball',
    title: '棒球常見運動傷害',
    description: '棒球運動醫學角度解析，並分析常見運動傷害。',
    image: '/images/sportinjury/3.webp',
    injuries: [
                        {
        slug: 'baseball-pitcher-handedness-medical-analysis',
        title: '棒球左投右投全解析：運動醫學觀點的優缺點與傷害風險',
        description: '深度剖析棒球左投與右投在生理結構上的顯著差異。本文探討左右投不同的肩肘傷害風險，包含 UCL 損傷與 GIRD 問題，並提供戰術優勢分析與專業的傷害預防監測策略。',
        image: '/images/news/article/baseball-pitcher-handedness.webp',
      },
                              {
        slug: 'baseball-batting-injuries-left-vs-right',
        title: '左打 vs. 右打：棒球打擊傷害的生物力學差異與常見風險解析',
        description: '深度剖析棒球左打與右打者因旋轉方向差異所導致的鏡像傷害。解析鉤骨骨折、腹斜肌拉傷及腰椎傷害的發生機制，並為不同側打者提供科學化的風險管理與預防建議。',
        image: '/images/news/article/baseball-batting-injuries-left-vs-right.webp',
      },
                  {
        slug: 'baseball-necklace-analysis',
        title: '棒球員戴磁力項鍊與金項鍊，真的能提升表現嗎？',
        description: '深度剖析大聯盟與職棒球員配戴磁力、鈦金屬與純金項鍊的背後科學。醫學實證揭露磁力項鍊是否能改變血液循環，並從生物力學角度解析金項鍊的重量是否會拖累揮棒表現，為您解碼球場飾品的真相。',
        image: '/images/news/article/necklace-analysis.webp',
      },
            {
        slug: 'mlb-tommy-john-surgery-analysis',
        title: '解密 MLB 球員 Tommy John 手術後的真實回歸率與表現變化',
        description: '從大谷翔平到韋蘭德：醫學解密 MLB 球員 Tommy John 手術的回歸率與表現',
        image: '/images/news/article/tommyjohn-analysis.webp',
      },
      {
        slug: 'baseball-pitcher-velocity',
        title: '棒球投手如何投出更快的球？運動醫學的科學解析',
        description: '從運動醫學角度深度剖析棒球投手球速的決定因素。力量真的越大越好嗎？科學研究揭露投球速度的關鍵：動力鏈效率、肩關節活動度、髖部旋轉速率與神經肌肉協調，並提供有依據的訓練策略。',
        image: '/images/news/article/baseball-pitcher-velocity.webp',
      },
      {
        slug: 'baseball-hitting-biomechanics',
        title: '棒球打擊科學全解析：如何打得更遠？告訴你關鍵肌群與傷害預防',
        description: '從運動醫學與生物力學角度深度解析棒球打擊的核心機制：哪些肌群決定打擊距離、最佳擊球角度是幾度、如何提升初速，以及打者常見的運動傷害與預防策略。不只是「越強壯越好」，科學告訴你真正的答案。',
        image: '/images/news/article/baseball-hitting-biomechanics.webp',
      },
            {
        slug: 'baseball-pitching-biomechanics-injuries',
        title: '棒球各種球路及運動傷害全解析？',
        description: '從運動醫學實證出發，深度解析棒球投球各球路的生物力學特徵。為什麼指叉球傷手肘？四縫線速球的風險在哪？本文對比大聯盟投手案例，分析投球六階段的受傷關鍵，提供科學化的預防策略與常見誤區解析。',
        image: '/images/news/article/baseball-pitching-biomechanics-injuries.webp',
      },
    ]
  },

  
    {
    category: 'weight-training',
    title: '重訓常見運動傷害',
    description: '重訓如何有效學畫訓練，及常見運動傷害',
    image: '/images/sportinjury/4.webp',
    injuries: [
            {
        slug: 'home-core-stretching-guide',
        title: '居家核心訓練與伸展全指南：棒式、橋式、嬰兒式、眼鏡蛇式，哪些腰部病患適合做？',
        description: '深入解析居家常見核心運動（棒式、橋式、鳥狗式）與伸展動作（嬰兒式、眼鏡蛇式、貓牛式）的訓練肌群、建議時長與組數，並說明各類腰部疾患（椎間盤突出、脊椎狹窄、脊椎滑脫）的適應與禁忌，以實證為依據，提供安全有效的居家復健建議。',
        image: '/images/news/article/coreexercise1.webp',
      },
                  {
        slug: 'back-muscle-training-guide',
        title: '背肌訓練完全指南：哪個動作效果最好？如何預防上交叉症候群？',
        description: '從運動醫學角度深度解析背肌訓練：肌電圖研究揭露哪個動作活化效果最強、預防上交叉症候群必練的五條肌肉，以及背部與胸部訓練量的黃金比例。科學訓練，不再駝背。',
        image: '/images/news/article/back-muscle-training-guide.webp',
      },
      {
        slug: 'chest-muscle-training-guide',
        title: '胸肌訓練2026完全指南：最有效動作、策略全解析',
        description: '深度剖析槓鈴臥推、上斜啞鈴推舉、纜繩夾胸等胸肌訓練動作的科學依據，解析最佳訓練組數、組間休息時間與漸進超負荷策略。實證研究揭露每週幾次訓練最有效、2–3分鐘休息為何優於短休息，以及為什麼漸進增重才是練出大胸肌的核心關鍵。',
        image: '/images/news/article/chest-training-guide.webp',
      },
      {
        slug: 'strength-breakthrough-bench-press-deadlift',
        title: '科學突破最大重量：胸推與硬舉的進階訓練與專項策略',
        description: '想突破胸推與硬舉的 1RM 瓶頸？本文結合運動醫學與肌力科學，解析漸進超負荷、週期化訓練及弱點輔助動作。從神經肌肉適應到核心預壓技術，教你如何安全、有系統地提升絕對肌力，並避開常見的訓練誤區。',
        image: '/images/news/article/bench-press-deadlift-strength.webp',
      },
                  {
        slug: 'deadlift-injury-analysis',
        title: '硬舉傷害全解析：下面的地雷動作，你中了幾個？',
        description: '深入剖析硬舉（Deadlift）最容易導致下背部、腰薦椎及膕繩肌受傷的原因。貓背、髖部過高、槓鈴遠離身體——這些常見的技術失誤如何引發椎間盤突出或肌腱撕裂？本文提供實證研究建議，助你建立安全的後鏈訓練基礎。',
        image: '/images/news/article/deadlift-injury-analysis.webp',
      },

                  {
        slug: 'bench-press-shoulder-injury',
        title: '重訓傷害全解析：胸推、肩推的地雷動作，你中了幾個？',
        description: '從運動醫學角度深入剖析重訓胸推與肩推最容易受傷的原因。手太開、槓鈴降太低、肩膀前推——這些常見的技術錯誤，正在悄悄傷害你的旋轉肌、胸大肌腱、肩鎖關節，甚至關節唇。實證研究告訴你哪個動作最危險，以及如何正確訓練。',
        image: '/images/news/article/bench-press-injury-analysis.webp',
      },


            {
        slug: 'crossed-syndrome-analysis',
        title: '交叉症候群完整解析：訓練背肌反而讓背更緊？',
        description: '交叉症候群是現代人最常見的姿勢失衡問題，許多人深受背肌緊繃之苦，卻擔心「訓練背肌會讓肌肉更緊」。本文以運動醫學實證為基礎，解析上下交叉症候群的成因、為何緊繃的背肌其實需要訓練、哪些動作最有效，以及腹背肌力比例的科學建議。',
        image: '/images/news/article/crossed-syndrome.webp',
      },
    ]
  },


        {
    category: 'other',
    title: '其他常見運動職業傷害',
    description: '其他各種運動或是日常生活姿勢錯誤導致的傷害解析。',
    image: '/images/sportinjury/6.webp',
    injuries: [
                  {
        slug: 'badminton-tennis-elbow',
        title: '打羽球為什麼會得網球肘？完整解析：動作、原因與改善策略',
        description: '從運動醫學角度深度分析羽球運動為何容易引發網球肘（外側上髁炎）。透過生物力學研究揭示反手拍、殺球等關鍵動作的傷害機制，並提供業餘球友實用的技術矯正與預防策略。',
        image: '/images/news/article/badminton-tennis-elbow.webp',

      },
            {
        slug: 'marathon-gait-injury-analysis',
        title: '馬拉松跑姿全解析：腳掌落地方式、步頻步幅，誰更容易受傷？',
        description: '深度剖析後腳跟著地、中足著地、前腳掌著地三大跑姿，以及過度跨步、步頻不足、軀幹前傾角度對運動傷害的影響。實證研究揭露哪種跑法更容易導致膝蓋疼痛、髂脛束症候群、足底筋膜炎與跟腱病變，並提供科學預防策略。',
        image: '/images/news/article/marasone.webp',

      },
                  {
        slug: 'slow-jogging-injury-analysis',
        title: '超慢跑的隱藏危機：你以為在保護身體，其實傷害正在累積',
        description: '超慢跑風靡台灣，但足底筋膜炎、阿基里斯腱炎、蹠骨痛等傷害屢見不鮮。本文以實證研究分析超慢跑的常見傷害、錯誤姿勢的危害，並說明為何一般健康成人應優先選擇慢跑或飛輪，而非長期停留在超慢跑。',
        image: '/images/news/article/ultrarun.webp',

      },
                        {
        slug: 'cycling-injury-analysis',
        title: '腳踏車全解析：公路車、城市車、摺疊車，有哪些傷害風險？',
        description: '從醫學與生物力學角度深度剖析公路車、城市車（通勤車）與摺疊車的姿勢差異與運動傷害風險。實證研究揭露各車型最容易導致的膝關節疼痛、下背痛、頸肩傷害與會陰神經壓迫，並提供科學預防策略。',
        image: '/images/news/article/cycling-injury-analysis.webp',

      },
      {
        slug: 'pikmin-bloom-syndrome',
        title: '捕捉皮克敏的終點是復健科？當心成為「痛痛皮友」！',
        description: '玩皮克敏 Bloom 也要注意健康！解析常見的烏龜頸、媽媽手、網球肘、足底筋膜炎等手遊與走路症候群，由復健科醫師提供專業建議，讓你無痛種花。',
        image: '/images/news/article/pikmin.webp',

      },
      {
        slug: 'daily-activities-knee-injury',
        title: '上下樓、深蹲、做家事傷膝蓋？哪些動作風險最高！',
        description: '膝蓋退化不只是運動員的專利！本文從運動醫學實證出發，解析日常動作如上下樓梯、深蹲、蹲跪做家事的膝關節受力數據。研究顯示，下樓梯壓力高達體重 3.46 倍，而長期蹲跪做家事更會增加 7 倍退化風險。教你如何透過正確姿勢與體重管理，延長膝蓋使用壽命。',
        image: '/images/news/article/knee-injury-daily-activities.webp',

      },

                          {
        slug: 'vertical-jump-biomechanics',
        title: '跳得更高！影響垂直起跳高度的關鍵肌肉與科學訓練法',
        description: '從運動醫學與生物力學角度分析，垂直起跳高度取決於下肢關節的協同發力與「牽張縮短週期」效率。研究指出，膝關節伸肌（股四頭肌）與髖關節伸肌（臀大肌）在起跳過程中貢獻了最大的做功。然而，若要突破瓶頸、有效增加起跳高度，針對「臀大肌」與後側動力鏈進行大重量阻力與增強式訓練，投資報酬率最高。本文將深入剖析起跳的科學原理，並提供實證有效的訓練與預防跳躍膝策略。',
        image: '/images/news/article/vertical-jump-biomechanics.webp',

      },


    ]
  },

                 {
    category: 'diary',
    title: '診間隨筆',
    description: '日常診間生活心得及趣事分享',
    image: '/images/sportinjury/8.webp',
    injuries: [
                        {
        slug: 'efficient-clinical-visit-guide',
        title: '醫病也醫心：一份讓彼此都輕鬆的「看診攻略」🩺✨',
        description: '門診總是等很久？陳新復健科醫師整理「看診攻略」，教你如何透過精準溝通、準備外院報告與釐清行政問題，提升醫療效率。醫病也醫心，讓我們一起找回高品質的醫療對話。',
        image:  '/images/news/article/hospital.webp',
      },
                  {
        slug: 'doctorvsengineer',
        title: '從新竹實中到診所院長：跨越 20 年的科技與醫療圈觀察，🧬醫生 vs. 工程師💻',
        description: '深度解析醫學系與電機系的生存現狀：從矽谷千萬年薪工程師到醫院住院醫師的工時壓力，探討天賦牆、財富跑道及中年失業風險，為猶豫中的學子提供最真實的職場建議。',
        image:  '/images/news/article/doctorvsengineer1.webp',
      },

                        {
        slug: 'pikmin-bloom-elderly-rehab',
        title: '當皮克敏走進阿媽的生活：五千步的約定，與找回笑容的魔法 ✨',
        description: '面對肌少症與長年的腰膝疼痛，復健不只是單調的儀器治療。看陳新復健科醫師如何利用《Pikmin Bloom》遊戲，陪伴阿媽從沙發走向公園，找回生活的掌控感與色彩。',
        image:  '/images/news/article/pikmin-grandma.webp',
      },
                        {
        slug: 'weightloss-sleep-apnea-mounjaro',
        title: '那一夜，她終於能好好睡一覺：減重與呼吸中止症的意外驚喜 🌙',
        description: '肥胖不只是數字問題，更關乎全家人的生活品質。看林醫師如何透過專業減重評估，幫助病患改善三高與睡眠呼吸中止症，找回健康，也讓辛苦的太太重獲安穩睡眠。',
        image:  '/images/news/article/weightloss-sleep.webpp',
      },

            {
        slug: 'steak-muscle-anatomy',
        title: '復健科醫師帶老婆吃牛排：菲力對應腰大肌，牛排部位人體肌肉完整解析',
        description: '從菲力到翼板，每塊牛排都藏著一堂解剖課。復健科醫師帶你用肌肉地圖讀懂牛排菜單。',
        image:  '/images/news/article/steak-muscle-anatomy.webp',
      },


    ]
  },
       
]