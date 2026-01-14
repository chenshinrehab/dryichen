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
          <p>腰椎椎間盤突出是現代人常見久坐的文明病，更是造成<strong>坐骨神經痛</strong>的主因。當脊椎間的椎間盤因長期受力不均、姿勢不良或外力撞擊，導致內部的髓核突出，想是果凍被擠出，壓迫到後方的神經根。</p>
          <img src="/images/diseases/spine-hip/HIVD/a.jpg" alt="脊椎椎間盤突出構造圖" />
          <p>導致劇烈的下背痛，並沿著坐骨神經延伸至臀部、大腿後側甚至小腿與腳底，產生<strong>麻、痛、無力</strong>的現象。嚴重時甚至會影響大小便功能（馬尾症候群）。</p>
          <img src="/images/diseases/spine-hip/HIVD/b.jpg" alt="坐骨神經痛" />
          <p>診所內備有X光設備，可以馬上檢查有沒有椎間盤狹窄或是滑脫的情況，<strong>骨頭中間的縫隙消失</strong>，或是<strong>骨頭排列歪斜</strong>。</p>
          <img src="/images/diseases/spine-hip/HIVD/c.jpg" alt="ˊ椎間盤突出X光" />
          <p class="mt-4"><span class="text-cyan-400 font-bold">✨ 治療關鍵：</span> 80%的患者可透過非手術治療痊癒，如復健拉腰及止痛藥物。更有效的治療有<strong>PRP 增生療法</strong>能修復受損的纖維環，搭配<strong>徒手運動訓練核心肌群</strong>穩固脊椎，是避免復發的不二法門。</p>
          <p>若症狀惡化或太嚴重，甚至需要手術治療，核磁共振檢查，可以更清楚的看到椎間盤及神經結構。</p>
          <img src="/images/diseases/spine-hip/HIVD/d.jpg" alt="ˊ椎間盤突出MRI" />
          `,
        symptoms: ['下背劇痛', '坐骨神經痛 (腿麻)', '彎腰時疼痛加劇', '下肢無力'],
        treatments: ['<a href="/treatments/prp" class="text-cyan-400 hover:underline">PRP 增生療法</a>', '服用止痛藥物', '物理治療 (牽引)', '核心肌群訓練'],
        seoKeywords: ['腰椎椎間盤突出', '坐骨神經痛', '下背痛', '椎間盤突出免開刀', '腳麻'],
        seoDescription: '腰椎椎間盤突出造成嚴重腰痛與腿麻。宸新復健科提供免開刀的PRP注射與物理治療方案，有效改善坐骨神經痛。',
        images: [
           { src: '/images/diseases/spine-hip/HIVD/a.jpg', alt: '脊椎椎間盤突出構造圖' }
        ]
      },
      {
        id: 'cervical-disc-degeneration',
        slug: 'cervical-disc-degeneration',
        title: '頸椎椎間盤退化',
        description: '低頭用電腦導致的頸椎問題，俗稱「烏龜頸」。',
        contentHtml: `
          <p>現代人長時間低頭滑手機、使用電腦，頸椎承受的壓力是正常的數倍，容易導致頸椎椎間盤提早退化、長骨刺。</p>
          <p>初期症狀為肩頸僵硬、痠痛，若壓迫到神經，則會造成<strong>手臂麻痛、手部無力</strong>。嚴重時甚至會壓迫脊髓，影響行走平衡。</p>
        `,
        symptoms: ['頸部疼痛僵硬', '膏肓痛', '手臂麻木刺痛', '頭痛 (頸因性頭痛)'],
        treatments: ['姿勢矯正 (收下巴)', '頸椎牽引', '神經解離注射', '增生療法'],
        seoKeywords: ['頸椎椎間盤退化', '頸部疼痛', '手麻', '骨刺', '烏龜頸'],
        seoDescription: '長期低頭導致頸椎椎間盤退化與骨刺，造成手麻與頸痛。了解治療與矯正方式。',
        images: [
           { src: 'https://images.unsplash.com/photo-1531956531700-cd299634842e?auto=format&fit=crop&q=80&w=800', alt: '頸部疼痛示意圖' }
        ]
      },
      {
        id: 'sciatica',
        slug: 'sciatica',
        title: '坐骨神經痛',
        description: '疼痛從下背部放射至臀部、大腿後側甚至腳底。',
        contentHtml: `
          <p>坐骨神經痛並非單一疾病，而是一種<strong>症狀</strong>。通常是因為腰椎退化、骨刺、椎間盤突出，或是臀部的<strong>梨狀肌症候群</strong>壓迫到人體最大的坐骨神經所引起。</p>
          <p>典型症狀是電流般的抽痛，從腰部一路往下竄。治療必須先找出「壓迫點」在哪裡，才能對症下藥。</p>
        `,
        symptoms: ['電流般的放射痛', '腿部感覺異常 (像螞蟻爬)', '久坐起身困難', '走路跛行'],
        treatments: ['神經解離術', '物理治療', '梨狀肌伸展', '藥物治療'],
        seoKeywords: ['坐骨神經痛', '下背痛', '臀部疼痛', '神經壓迫'],
        seoDescription: '坐骨神經痛疼痛從下背部放射至臀部、大腿後側。了解症狀與免開刀治療方式。',
        images: [
           { src: 'https://images.unsplash.com/photo-1544367563-12123d8965cd?auto=format&fit=crop&q=80&w=800', alt: '坐骨神經痛位置' }
        ]
      },
      {
        id: 'spinal-stenosis',
        slug: 'spinal-stenosis',
        title: '脊椎狹窄症',
        description: '老化導致骨刺與韌帶肥厚，典型症狀為「間歇性跛行」。',
        contentHtml: `
          <p>脊椎狹窄症多發生於長輩，是因為脊椎老化、長骨刺、黃韌帶肥厚，導致脊髓腔變窄，壓迫神經。</p>
          <p>最典型的症狀是<strong>間歇性跛行</strong>：走沒多久（約5-10分鐘）就會覺得雙腿痠麻無力，必須坐下來彎腰休息才能繼續走。這與椎間盤突出「坐著比較痛」的症狀相反。</p>
        `,
        symptoms: ['間歇性跛行', '走不遠需坐下休息', '雙腿痠麻無力', '腰部後仰疼痛'],
        treatments: ['保守治療 (復健)', '硬脊膜外注射', '神經阻斷術', '嚴重時需手術減壓'],
        seoKeywords: ['脊椎狹窄症', '間歇性跛行', '長輩腰痛', '骨刺'],
        seoDescription: '脊椎狹窄症是老化導致的疾病，典型症狀為間歇性跛行。了解症狀與治療方式。',
        images: [
           { src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800', alt: '老年人背痛' }
        ]
      },
      {
        id: 'hip-osteoarthritis',
        slug: 'hip-osteoarthritis',
        title: '退化性髖關節炎',
        description: '軟骨磨損導致鼠蹊部疼痛，影響行走與穿襪等日常動作。',
        contentHtml: `
          <p>退化性髖關節炎是由於髖關節軟骨磨損、骨頭摩擦所致。疼痛位置通常在<strong>鼠蹊部 (該邊)</strong>、臀部外側或大腿前側。</p>
          <p>患者常感到關節僵硬，早上起床或久坐後特別明顯。嚴重時會影響走路姿勢（鴨子走路），甚至無法自行剪腳指甲、穿襪子。</p>
        `,
        symptoms: ['鼠蹊部疼痛', '走路跛行', '關節活動受限 (穿襪困難)', '腹股溝壓痛'],
        treatments: ['體重控制', '肌力訓練 (臀中肌)', 'PRP 關節注射', '人工關節置換'],
        seoKeywords: ['退化性髖關節炎', '髖關節疼痛', 'PRP', '鼠蹊部痛'],
        seoDescription: '退化性髖關節炎造成鼠蹊部疼痛，影響行走。了解症狀、治療方式與預防方法。',
        images: [
           { src: 'https://images.unsplash.com/photo-1591114251676-47408713175c?auto=format&fit=crop&q=80&w=800', alt: '髖關節X光檢查' }
        ]
      },
      {
        id: 'piriformis-syndrome',
        slug: 'piriformis-syndrome',
        title: '梨狀肌症候群',
        description: '梨狀肌緊繃壓迫坐骨神經，造成深層臀部疼痛。',
        contentHtml: `
          <p>梨狀肌是臀部深層的一條肌肉，當它因為久坐、過度運動或外傷而緊繃腫脹時，會壓迫到下方的坐骨神經，引發類似椎間盤突出的症狀。</p>
          <p>特徵是<strong>深層臀部疼痛</strong>，且在變換姿勢、翹腳或久坐時加劇。透過超音波導引注射放鬆肌肉，效果顯著。</p>
        `,
        symptoms: ['深層臀部痠痛', '久坐疼痛加劇', '無法翹二郎腿', '大腿後側麻痛'],
        treatments: ['梨狀肌伸展', '物理治療', '超音波導引注射', '震波治療'],
        seoKeywords: ['梨狀肌症候群', '臀部疼痛', '坐骨神經', '深層臀痛'],
        seoDescription: '梨狀肌症候群造成深層臀部疼痛，常誤診為椎間盤突出。了解症狀與精準治療方式。',
        images: [
           { src: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=800', alt: '健身房伸展臀部' }
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
          <p>旋轉肌袖是包覆肩關節的四條重要肌腱，負責肩膀的旋轉與抬舉。當因老化、長期過度使用（如投擲運動、油漆工）或外傷導致肌腱磨損撕裂，就會引起疼痛。</p>
          <p>患者常在<strong>手臂上舉 60-120 度</strong>時感到劇痛（疼痛弧），且夜間側睡壓到患側會痛醒。部分撕裂可透過 PRP 修復，完全斷裂則建議手術。</p>
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
          <p>踝關節扭傷是最常見的運動傷害，通常是腳底朝內翻轉（Inversion），導致外側的韌帶（前距腓韌帶）拉傷或撕裂。</p>
          <p>急性期需遵循 <strong>RICE 原則</strong>（休息、冰敷、壓迫、抬高）。待消腫後，務必進行<strong>本體感覺訓練</strong>（如單腳站立），否則韌帶鬆弛容易導致慣性扭傷。</p>
        `,
        symptoms: ['外側腳踝腫脹瘀血', '觸摸外側韌帶處有壓痛', '行走疼痛困難', '關節不穩'],
        treatments: ['急性期：RICE原則', '護踝保護', '慢性期：增生療法修復韌帶', '本體感覺訓練'],
        seoKeywords: ['踝關節扭傷', '翻船', '腳踝腫脹', '韌帶斷裂'],
        seoDescription: '踝關節扭傷是最常見的運動傷害，造成外踝腫脹瘀血。了解症狀、治療方式與復健方法。',
        images: [
           { src: 'https://images.unsplash.com/photo-1598282216223-7a716c02690a?auto=format&fit=crop&q=80&w=800', alt: '腳踝包紮' }
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