import { DiseaseItem, ContentItem } from '@/types/content'

export interface DiseaseCategory {
  slug: string
  title: string
  description?: string
  diseases: DiseaseItem[]
  /** SEO 关键词 */
  seoKeywords?: string[]
  /** SEO 描述 */
  seoDescription?: string
  /** 类别图片 URL */
  imageUrl?: string
}

export const diseaseCategories: DiseaseCategory[] = [
  {
    slug: 'spine-hip',
    title: '脊椎髖臀',
    description: '脊椎、髖關節與臀部相關疾病',
    diseases: [
      {
        id: 'lumbar-disc-herniation',
        title: '腰椎椎間盤突出',
        description: '椎間盤髓核擠出壓迫神經，造成腰痛或下肢麻痛。',
        content: '腰椎椎間盤突出是常見的脊椎疾病，主要因久坐、搬重物等動作導致椎間盤髓核擠出，壓迫到神經根，造成腰痛或下肢麻痛。早期可透過保守治療改善，嚴重時則需要手術介入。',
        symptoms: [
          '腰痛',
          '下肢麻痛',
          '久坐或搬重物時症狀加劇'
        ],
        treatments: [
          '保守治療（藥物、物理治療）',
          'PRP 注射',
          '嚴重時需微創手術'
        ],
        seoKeywords: ['腰椎椎間盤突出', '腰痛', '坐骨神經痛', '復健'],
        seoDescription: '腰椎椎間盤突出是常見的脊椎疾病，造成腰痛或下肢麻痛。了解症狀、治療方式與預防方法。',
      },
      {
        id: 'cervical-disc-degeneration',
        title: '頸椎椎間盤退化',
        description: '低頭用電腦導致的頸椎問題',
        content: '長期低頭使用電腦、手機，容易導致頸椎椎間盤退化，出現頸部疼痛、肩膀僵硬等症狀。需要透過姿勢矯正、物理治療等方式改善。',
        symptoms: [
          '頸部疼痛',
          '肩膀僵硬',
          '頭痛'
        ],
        treatments: [
          '姿勢矯正',
          '物理治療',
          '局部注射'
        ],
        seoKeywords: ['頸椎椎間盤退化', '頸部疼痛', '姿勢矯正'],
        seoDescription: '長期低頭使用電腦、手機導致頸椎椎間盤退化，了解症狀與治療方式。',
      },
      {
        id: 'sciatica',
        title: '坐骨神經痛',
        description: '疼痛從下背部放射至臀部、大腿後側甚至腳底。',
        content: '坐骨神經痛是一種症狀，疼痛會從下背部放射至臀部、大腿後側甚至腳底。需要找出壓迫源頭，可能是骨刺或肌肉緊繃，再針對原因進行治療。',
        symptoms: [
          '下背部疼痛',
          '臀部疼痛',
          '大腿後側疼痛',
          '腳底麻木'
        ],
        treatments: [
          '找出壓迫源頭（骨刺或肌肉）',
          '物理治療',
          '局部注射'
        ],
        seoKeywords: ['坐骨神經痛', '下背痛', '臀部疼痛'],
        seoDescription: '坐骨神經痛疼痛從下背部放射至臀部、大腿後側甚至腳底。了解症狀與治療方式。',
      },
      {
        id: 'spinal-stenosis',
        title: '脊椎狹窄症',
        description: '老化導致骨刺與韌帶肥厚，典型症狀為「間歇性跛行」。',
        content: '脊椎狹窄症是老化導致的疾病，骨刺與韌帶肥厚會壓迫神經，典型症狀為「間歇性跛行」，走不遠就需要坐下休息，好發於長輩。',
        symptoms: [
          '間歇性跛行',
          '走不遠就需要坐下休息',
          '好發於長輩'
        ],
        treatments: [
          '保守治療',
          '物理治療',
          '嚴重時需手術減壓'
        ],
        seoKeywords: ['脊椎狹窄症', '間歇性跛行', '長輩'],
        seoDescription: '脊椎狹窄症是老化導致的疾病，典型症狀為間歇性跛行。了解症狀與治療方式。',
      },
      {
        id: 'hip-osteoarthritis',
        title: '退化性髖關節炎',
        description: '軟骨磨損導致鼠蹊部疼痛，影響行走與穿襪等日常動作。',
        content: '退化性髖關節炎是軟骨磨損導致的疾病，會造成鼠蹊部疼痛，影響行走與穿襪等日常動作。治療方式包括減重、肌力訓練、PRP 注射，嚴重時需要人工關節置換。',
        symptoms: [
          '鼠蹊部疼痛',
          '行走困難',
          '穿襪等日常動作受限'
        ],
        treatments: [
          '減重',
          '肌力訓練',
          'PRP 注射',
          '人工關節置換'
        ],
        seoKeywords: ['退化性髖關節炎', '髖關節疼痛', 'PRP'],
        seoDescription: '退化性髖關節炎造成鼠蹊部疼痛，影響行走。了解症狀、治療方式與預防方法。',
      },
      {
        id: 'piriformis-syndrome',
        title: '梨狀肌症候群',
        description: '梨狀肌緊繃壓迫坐骨神經，造成深層臀部疼痛。',
        content: '梨狀肌症候群是梨狀肌緊繃壓迫坐骨神經導致的疾病，會造成深層臀部疼痛，坐姿時疼痛會加劇。可透過梨狀肌伸展、物理治療等方式改善。',
        symptoms: [
          '深層臀部疼痛',
          '坐姿時疼痛加劇'
        ],
        treatments: [
          '梨狀肌伸展',
          '物理治療',
          '局部注射'
        ],
        seoKeywords: ['梨狀肌症候群', '臀部疼痛', '坐骨神經'],
        seoDescription: '梨狀肌症候群造成深層臀部疼痛，了解症狀與治療方式。',
      }
    ]
  },
  {
    slug: 'shoulder',
    title: '肩膀',
    description: '肩膀相關疾病',
    diseases: [
      {
        id: 'rotator-cuff-tear',
        title: '旋轉肌撕裂',
        description: '肩膀旋轉肌群受傷或撕裂，造成肩膀疼痛與活動受限。',
        content: '旋轉肌撕裂是常見的肩膀疾病，會造成肩膀疼痛與活動受限。可透過 PRP 注射、震波治療等方式促進修復，嚴重時需要手術修補。',
        symptoms: [
          '肩膀疼痛',
          '手臂上舉困難',
          '夜間疼痛'
        ],
        treatments: [
          'PRP 注射',
          '震波治療',
          '嚴重時需手術修補'
        ],
        seoKeywords: ['旋轉肌撕裂', '肩膀疼痛', 'PRP', '震波'],
        seoDescription: '旋轉肌撕裂造成肩膀疼痛與活動受限。了解症狀、治療方式與復健方法。',
      },
      {
        id: 'frozen-shoulder',
        title: '五十肩（冰凍肩）',
        description: '肩膀關節囊發炎導致關節僵硬，活動範圍受限。',
        content: '五十肩（冰凍肩）是肩膀關節囊發炎導致的疾病，會造成關節僵硬，活動範圍受限。需要透過物理治療、關節鬆動術等方式改善。',
        symptoms: [
          '肩膀僵硬',
          '活動範圍受限',
          '夜間疼痛'
        ],
        treatments: [
          '物理治療',
          '關節鬆動術',
          '局部注射'
        ],
        seoKeywords: ['五十肩', '冰凍肩', '肩膀僵硬'],
        seoDescription: '五十肩（冰凍肩）造成肩膀關節僵硬，活動範圍受限。了解症狀與治療方式。',
      }
    ]
  },
  {
    slug: 'elbow',
    title: '手肘',
    description: '手肘相關疾病',
    diseases: [
      {
        id: 'tennis-elbow',
        title: '網球肘',
        description: '手肘外側肌腱發炎，造成手肘外側疼痛。',
        content: '網球肘是手肘外側肌腱發炎導致的疾病，會造成手肘外側疼痛，握力下降。可透過休息、PRP 注射、震波治療等方式改善。',
        symptoms: [
          '手肘外側疼痛',
          '握力下降',
          '提重物時疼痛加劇'
        ],
        treatments: [
          '休息',
          'PRP 注射',
          '震波治療'
        ],
        seoKeywords: ['網球肘', '手肘疼痛', 'PRP'],
        seoDescription: '網球肘是手肘外側肌腱發炎，造成手肘外側疼痛。了解症狀與治療方式。',
      },
      {
        id: 'golfer-elbow',
        title: '高爾夫球肘',
        description: '手肘內側肌腱發炎，造成手肘內側疼痛。',
        content: '高爾夫球肘是手肘內側肌腱發炎導致的疾病，會造成手肘內側疼痛。可透過休息、PRP 注射、震波治療等方式改善。',
        symptoms: [
          '手肘內側疼痛',
          '握力下降'
        ],
        treatments: [
          '休息',
          'PRP 注射',
          '震波治療'
        ],
        seoKeywords: ['高爾夫球肘', '手肘內側疼痛'],
        seoDescription: '高爾夫球肘是手肘內側肌腱發炎，造成手肘內側疼痛。了解症狀與治療方式。',
      }
    ]
  },
  {
    slug: 'hand',
    title: '手部',
    description: '手部相關疾病',
    diseases: [
      {
        id: 'trigger-finger',
        title: '板機指',
        description: '手指屈肌腱發炎，造成手指彎曲後無法伸直，需要另一手協助才能伸直。',
        content: '板機指是手指屈肌腱發炎導致的疾病，會造成手指彎曲後無法伸直，需要另一手協助才能伸直。可透過熱敷、按摩伸展、局部注射等方式改善，嚴重時需要微創針挑手術。',
        symptoms: [
          '手指彎曲後無法伸直',
          '需要另一手協助才能伸直',
          '手指根部疼痛'
        ],
        treatments: [
          '熱敷、按摩伸展',
          '局部注射',
          '震波治療或微創針挑手術'
        ],
        seoKeywords: ['板機指', '手指疼痛'],
        seoDescription: '板機指造成手指彎曲後無法伸直。了解症狀與治療方式。',
      },
      {
        id: 'carpal-tunnel',
        title: '腕隧道症候群',
        description: '正中神經在手腕處受壓迫，造成大拇指、食指與中指麻木刺痛，甩手後會改善。',
        content: '腕隧道症候群是正中神經在手腕處受壓迫導致的疾病，會造成大拇指、食指與中指麻木刺痛，夜間會麻醒。可透過夜間配戴副木固定、神經解離注射等方式改善，嚴重者需手術減壓。',
        symptoms: [
          '大拇指、食指與中指麻木刺痛',
          '夜間會麻醒，甩手後改善',
          '嚴重時大魚際肌萎縮'
        ],
        treatments: [
          '夜間配戴副木固定',
          '神經解離注射',
          '嚴重者需手術減壓'
        ],
        seoKeywords: ['腕隧道症候群', '手麻', '手腕疼痛'],
        seoDescription: '腕隧道症候群造成大拇指、食指與中指麻木刺痛。了解症狀與治療方式。',
      }
    ]
  },
  {
    slug: 'knee',
    title: '膝蓋',
    description: '膝蓋相關疾病',
    diseases: [
      {
        id: 'knee-osteoarthritis',
        title: '退化性膝關節炎',
        description: '關節軟骨磨損，導致上下樓梯無力、蹲下站不起來，嚴重時會O型腿變形。',
        content: '退化性膝關節炎是關節軟骨磨損導致的疾病，會造成上下樓梯無力、蹲下站不起來，嚴重時會O型腿變形。減重是首要任務，並需要進行股四頭肌肌力訓練，必要時可注射玻尿酸或PRP。',
        symptoms: [
          '上下樓梯無力疼痛',
          '膝蓋僵硬、活動有喀喀聲',
          '嚴重時關節積水腫脹'
        ],
        treatments: [
          '減重是首要任務',
          '股四頭肌肌力訓練',
          '玻尿酸或PRP注射'
        ],
        seoKeywords: ['退化性膝關節炎', '膝蓋疼痛', 'PRP', '玻尿酸'],
        seoDescription: '退化性膝關節炎造成上下樓梯無力、蹲下站不起來。了解症狀、治療方式與預防方法。',
      },
      {
        id: 'meniscus-tear',
        title: '半月板破裂',
        description: '膝蓋內的緩衝墊破裂，導致膝蓋腫脹、疼痛，甚至會有「卡住」(Locking) 無法伸直的現象。',
        content: '半月板破裂是膝蓋內的緩衝墊破裂導致的疾病，會造成膝蓋腫脹、疼痛，甚至會有「卡住」無法伸直的現象。年輕人優先考慮修補手術，老年退化性可保守治療，嚴重卡住需關節鏡部分切除。',
        symptoms: [
          '膝蓋關節縫隙壓痛',
          '會有「卡住」(Locking) 無法伸直的現象',
          '活動時有彈響聲'
        ],
        treatments: [
          '年輕人優先修補手術',
          '老年退化性可保守治療',
          '嚴重卡住需關節鏡部分切除'
        ],
        seoKeywords: ['半月板破裂', '膝蓋卡住', '關節鏡'],
        seoDescription: '半月板破裂造成膝蓋腫脹、疼痛，甚至會有卡住無法伸直的現象。了解症狀與治療方式。',
      },
      {
        id: 'acl-tear',
        title: '前十字韌帶斷裂',
        description: '常見於急停轉身的運動傷害，受傷當下常聽到「啪」一聲，之後膝蓋會反覆腫脹且感到鬆動不穩。',
        content: '前十字韌帶斷裂常見於急停轉身的運動傷害，受傷當下常聽到「啪」一聲，之後膝蓋會反覆腫脹且感到鬆動不穩。可先進行消腫止痛和肌力訓練，若要重回高強度運動，則需要進行韌帶重建手術。',
        symptoms: [
          '受傷時聽到斷裂聲',
          '膝蓋迅速腫脹積血',
          '走路感到膝蓋鬆動不穩 (Giving way)'
        ],
        treatments: [
          '消腫止痛',
          '肌力訓練（不手術者）',
          '若要重回高強度運動，需進行韌帶重建手術'
        ],
        seoKeywords: ['前十字韌帶斷裂', 'ACL', '運動傷害'],
        seoDescription: '前十字韌帶斷裂常見於急停轉身的運動傷害，造成膝蓋鬆動不穩。了解症狀與治療方式。',
      }
    ]
  },
  {
    slug: 'ankle',
    title: '足踝',
    description: '足踝相關疾病',
    diseases: [
      {
        id: 'plantar-fasciitis',
        title: '足底筋膜炎',
        description: '典型症狀是「早上起床踩地第一步最痛」，行走一段時間後緩解，但久站久走後疼痛又加劇。',
        content: '足底筋膜炎的典型症狀是「早上起床踩地第一步最痛」，行走一段時間後緩解，但久站久走後疼痛又加劇。可透過足底筋膜伸展、小腿拉筋、穿著足弓支撐鞋墊等方式改善，必要時可進行震波治療。',
        symptoms: [
          '早上下床第一步腳跟劇痛',
          '行走一段時間後疼痛緩解',
          '久站久走後疼痛又加劇'
        ],
        treatments: [
          '足底筋膜伸展',
          '小腿拉筋',
          '穿著足弓支撐鞋墊',
          '震波治療'
        ],
        seoKeywords: ['足底筋膜炎', '腳跟痛', '震波'],
        seoDescription: '足底筋膜炎典型症狀是早上起床踩地第一步最痛。了解症狀與治療方式。',
      },
      {
        id: 'ankle-sprain',
        title: '踝關節扭傷',
        description: '最常見的運動傷害（翻船），通常是腳踝向內翻轉導致外側韌帶拉傷或斷裂，造成外踝腫脹瘀血。',
        content: '踝關節扭傷是最常見的運動傷害（翻船），通常是腳踝向內翻轉導致外側韌帶拉傷或斷裂，造成外踝腫脹瘀血。急性期需要遵循 RICE原則（休息、冰敷、壓迫、抬高），並使用護踝保護，慢性期則需要進行本體感覺訓練以防復發。',
        symptoms: [
          '外側腳踝腫脹瘀血',
          '觸摸外側韌帶處有壓痛',
          '行走疼痛困難'
        ],
        treatments: [
          '急性期：RICE原則（休息、冰敷、壓迫、抬高）',
          '護踝保護',
          '慢性期：本體感覺訓練防復發'
        ],
        seoKeywords: ['踝關節扭傷', '翻船', 'RICE'],
        seoDescription: '踝關節扭傷是最常見的運動傷害，造成外踝腫脹瘀血。了解症狀、治療方式與復健方法。',
      },
      {
        id: 'achilles-tendinitis',
        title: '阿基里斯腱發炎',
        description: '連接小腿肌肉與腳跟的粗大肌腱發炎。症狀為腳跟上方腫脹、按壓痛，墊腳尖時疼痛加劇。',
        content: '阿基里斯腱發炎是連接小腿肌肉與腳跟的粗大肌腱發炎，症狀為腳跟上方腫脹、按壓痛，墊腳尖時疼痛加劇。可透過休息、小腿拉筋、震波治療等方式改善。',
        symptoms: [
          '腳跟上方腫脹',
          '按壓痛',
          '墊腳尖時疼痛加劇'
        ],
        treatments: [
          '休息',
          '小腿拉筋',
          '震波治療'
        ],
        seoKeywords: ['阿基里斯腱發炎', '腳跟痛', '震波'],
        seoDescription: '阿基里斯腱發炎造成腳跟上方腫脹、按壓痛。了解症狀與治療方式。',
      }
    ]
  }
]

/**
 * 根据类别 slug 获取类别
 */
export function getCategoryBySlug(slug: string): DiseaseCategory | undefined {
  return diseaseCategories.find(c => c.slug === slug)
}

/**
 * 根据类别 slug 和疾病 id 获取疾病
 */
export function getDiseaseBySlug(categorySlug: string, diseaseId: string): DiseaseItem | undefined {
  const category = getCategoryBySlug(categorySlug)
  if (!category) return undefined
  return category.diseases.find(d => d.id === diseaseId)
}

/**
 * 获取所有疾病（扁平化）
 */
export function getAllDiseases(): DiseaseItem[] {
  return diseaseCategories.flatMap(category => category.diseases)
}

/**
 * 生成所有静态路径参数（用于 generateStaticParams）
 */
export function generateAllDiseaseParams(): Array<{ category: string; slug: string }> {
  const params: Array<{ category: string; slug: string }> = []
  
  diseaseCategories.forEach((category) => {
    category.diseases.forEach((disease) => {
      params.push({
        category: category.slug,
        slug: disease.id, // 使用 id 作为 slug
      })
    })
  })
  
  return params
}

/**
 * 生成所有类别路径参数（用于 generateStaticParams）
 */
export function generateAllCategoryParams(): Array<{ category: string }> {
  return diseaseCategories.map((category) => ({
    category: category.slug,
  }))
}
