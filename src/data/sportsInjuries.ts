// src/data/sportsInjuries.ts

import { newsList, getNewsById } from '@/data/news'

export const sportsInjuriesData = [

     {
    category: 'daycare',
    title: '日常生活醫學知識',
    description: '日常生活醫學小知識，讓生活更健康。',
    image: '/images/sportinjury/5.webp',
    injuries: [

          {
        slug: 'why-cats-dont-get-stiff-neck',
        title: '家裡兩隻貓咪每天不是躺著就是躺著，為什麼不會落枕呢？',
        description: '診間每天都會看到很多落枕、閃到腰的病患。對人類來說，像貓咪那樣躺一小時，起來一定會脖子痛腰痛。但為什麼貓咪就不會呢？這其實跟牠們獨特的身體構造有關！',
        image: '/images/news/article/cat.webp',
      },
            {
        slug: 'scoliosis-causes-treatment',
        title: '脊椎側彎完整指南：成因、角度變化與治療選項全解析',
        description: '脊椎側彎不只是外觀問題！深入解析特發性、先天性與退化性側彎的成因，Cobb角度是否能變回來，以及從觀察到手術的完整治療比較。',
        image: '/images/news/article/scoliosis-treatment.webp',
      },
            {
        slug: 'nsaid-hypersensitivity',
        title: 'NSAID（非類固醇消炎藥）過敏全解析：為什麼有人吃止痛藥會過敏？',
        description: '深度剖析NSAID過敏的發生比例、致病機轉、遺傳因素與交叉反應問題。實證研究揭露哪些NSAID最容易引發過敏，並提供過敏後的疼痛處理替代策略。',
        image: '/images/news/article/drug.webp',
      },
      {
        slug: 'frozen-shoulder-and-diabetes',
        title: '五十肩與糖尿病的深度關聯：為什麼糖尿病患者更容易罹患五十肩？',
        description: '糖尿病患者五十肩風險高出5倍！深入解析AGEs糖化機制、血糖控制與五十肩的關係，以及完整治療選項比較。',
        image: '/images/news/article/frozen-shoulder-diabetes.webp',
      },

    ]
  },

          {
    category: 'nutrition',
    title: '營養補充知識',
    description: '長高長狀還有減肥飲食該如何選擇，營養品到底有沒有??',
    image: '/images/sportinjury/7.webp',
    injuries: [
      {
        slug: 'sugar-height-growth-analysis',
        title: '【家長必看】喝手搖飲、睡前吃水果會長不高？',
        description: '深度剖析精製糖如何透過胰島素拮抗、瘦素分泌與性早熟機制，干擾孩童生長激素分泌並導致生長板提早閉合。實證研究揭露手搖飲與甜點對最終身高的致命影響，並提供科學飲食策略。',
        image: '/images/news/article/sugar-height-growth-analysis.webp',
      },
            {
        slug: 'precocious-puberty-taiwan-depth-analysis',
        title: '台灣兒童性早熟全解析：定義、成因與家長的避雷指南',
        description: '深度剖析台灣兒童性早熟的醫學定義與在地成因。從骨齡超前、環境荷爾蒙干擾到飲食誤區，提供全方位的預防對策，幫助家長守護孩子的長高黃金期。',
        image: '/images/news/article/precocious-puberty.webp',
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
        slug: 'baseball-pitcher-velocity',
        title: '棒球投手如何投出更快的球？運動醫學的科學解析',
        description: '從運動醫學角度深度剖析棒球投手球速的決定因素。力量真的越大越好嗎？科學研究揭露投球速度的關鍵：動力鏈效率、肩關節活動度、髖部旋轉速率與神經肌肉協調，並提供有依據的訓練策略。',
        image: '/images/news/article/baseball-pitcher-velocity.webp',
      },
      {
        slug: 'baseball-hitting-biomechanics',
        title: '棒球打擊科學全解析：如何打得更遠？運動醫學告訴你關鍵肌群與傷害預防',
        description: '從運動醫學與生物力學角度深度解析棒球打擊的核心機制：哪些肌群決定打擊距離、最佳擊球角度是幾度、如何提升初速，以及打者常見的運動傷害與預防策略。不只是「越強壯越好」，科學告訴你真正的答案。',
        image: '/images/news/article/baseball-hitting-biomechanics.webp',
      },
            {
        slug: 'baseball-pitching-biomechanics-injuries',
        title: '棒球各種球路的運動傷害全解析：指叉球、四縫線、滑球，誰更容易讓投手受傷？',
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
        slug: 'chest-muscle-training-guide',
        title: '胸肌訓練2026完全指南：最有效動作、策略全解析',
        description: '深度剖析槓鈴臥推、上斜啞鈴推舉、纜繩夾胸等胸肌訓練動作的科學依據，解析最佳訓練組數、組間休息時間與漸進超負荷策略。實證研究揭露每週幾次訓練最有效、2–3分鐘休息為何優於短休息，以及為什麼漸進增重才是練出大胸肌的核心關鍵。',
        image: '/images/news/article/chest-training-guide.webp',
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
        slug: 'pikmin-bloom-syndrome',
        title: '捕捉皮克敏的終點是復健科？當心成為「痛痛皮友」！',
        description: '玩皮克敏 Bloom 也要注意健康！解析常見的烏龜頸、媽媽手、網球肘、足底筋膜炎等手遊與走路症候群，由復健科醫師提供專業建議，讓你無痛種花。',
        image: '/images/news/article/pikmin.webp',

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
        slug: 'ge-logiq-totus-ultrasound',
        title: '診所正式引進 GE LOGIQ Totus——全球高階的肌肉骨骼超音波機',
        description: '診所正式引進旗艦等級 GE LOGIQ Totus 肌肉骨骼超音波。擁有超高解析度影像與多項智慧輔助功能，讓超音波導引注射更精準、更安全。',
        image:  '/images/news/article/gelotus/2.webp',
      },
                        {
        slug: 'pikmin-bloom-elderly-rehab',
        title: '當皮克敏走進阿媽的生活：五千步的約定，與找回笑容的魔法 ✨',
        description: '面對肌少症與長年的腰膝疼痛，復健不只是單調的儀器治療。看陳新復健科醫師如何利用《Pikmin Bloom》遊戲，陪伴阿媽從沙發走向公園，找回生活的掌控感與色彩。',
        image:  '/images/news/article/pikmin-grandma.webp',
      },
            {
        slug: 'steak-muscle-anatomy',
        title: '復健科醫師帶老婆吃牛排：菲力對應腰大肌，牛排部位人體肌肉完整解析',
        description: '從菲力到翼板，每塊牛排都藏著一堂解剖課。復健科醫師帶你用肌肉地圖讀懂牛排菜單。',
        image:  '/images/news/article/steak-muscle-anatomy.webp',
      },
      {
        slug: 'orthopedics-vs-rehabilitation',
        title: '骨科 vs 復健科：完整比較指南｜哪個才是你的最佳選擇？',
        description: '骨科偏向外科手術，以X光評估硬組織；復健科以超音波評估軟組織，強調非手術的精準注射與功能重建。本文比較兩科強項、診所差異，教導民眾根據症狀正確選擇，少走冤枉路。',
        image:  '/images/news/article/orthopedics-vs-rehabilitation.webp',
      },

    ]
  },
       
]