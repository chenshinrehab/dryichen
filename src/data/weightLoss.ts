// src/data/weightbone.ts

// 1. 定義資料結構 (比照 treatments 的高規格)
export interface WeightLossProgram {
  slug: string;
  title: string;
  subtitle?: string;        // 副標題
  description: string;      // 列表頁用的簡短描述
  contentHtml?: string;     // 詳細頁用的 HTML 內容 (支援價格表等)
  features?: string[];      // 列表頁用的特色標籤
  
  // 詳細頁專用欄位
  whyChooseUs?: string[];   // 我們的特色 / 為什麼選擇我們
  programBenefits?: string[];// 療程優點 / 治療重點
  images?: { src: string; alt: string }[]; // 圖片陣列
  
  qrCode?: string;          // 雖然頁面自動生成，但保留欄位定義
  benefitsTitle?: string;      // 自訂右側欄位標題 (預設是 "療程優點")
  benefitsIconClass?: string;  // 自訂右側欄位 Icon (預設是粉紅色讚)
  qaList?: { question: string; answer: string }[];
}

export const weightLossPrograms: WeightLossProgram[] = [
  // =======================================================
  // 1. 猛健樂 (Mounjaro) - 完整版
  // =======================================================
  {
    slug: 'mounjaro',
    title: '猛健樂 (Mounjaro)',
    subtitle: '新一代雙重腸泌素受體促效劑',
    description: '新一代雙重腸泌素(GIP/GLP-1)受體促效劑，提供更卓越的體重控制效果。',
    features: ['一週一次', '抑制食慾', '延緩胃排空'],
    contentHtml: `
      新竹猛健樂推薦，提供完整服務。<br>
      新一代的雙重腸泌素(GIP/GLP-1)受體促效劑，能同時活化GIP與GLP-1受體，提供比傳統單一機轉藥物更卓越的體重控制與血糖管理效果。<br><br>
      <span class="text-cyan-400 font-bold">✨ 2.5mg：$10,500</span><br>
      <span class="text-cyan-400 font-bold">✨ 5mg ：$11,500</span><br>
      <span class="text-cyan-400 font-bold">✨ 7.5mg：$13,000</span><br>
      <span class="text-cyan-400 font-bold">✨ 10mg : $15,000</span>
    `,
    whyChooseUs: [
      '詳細問診及衛教施打',
      '甲狀腺超音波檢查及抽血檢查',
      '療程含高階 InBody 及運動課程'
    ],
    programBenefits: [
      '一週一次好簡單',
      '體重下降可達 20%',
      '有效控制三高及脂肪肝'
    ],
    images: [
      { src: '/images/weight-loss/mounjaro/a.jpg', alt: '猛健樂流程' },
      { src: '/images/weight-loss/mounjaro/b.jpg', alt: '猛健樂特點' },
      { src: '/images/weight-loss/mounjaro/c.jpg', alt: '猛健樂適合對象' },
      { src: '/images/weight-loss/mounjaro/d.jpg', alt: '猛健樂懶人包' }
    ],

// ✨ 新增 QA
qaList: [
  {
    question: '猛健樂會有什麼副作用嗎？',
    answer: '常見的副作用多為腸胃道症狀，如噁心、腹脹或便秘。這些反應通常是輕微且暫時的，透過調整飲食（少量多餐、避開油膩）及醫師調整劑量，大多能順利適應。'
  },
  {
    question: '停藥後會復胖嗎？',
    answer: '減重藥物是輔助工具，幫助您建立良好的飲食與生活習慣。若停藥後能維持健康的飲食與運動習慣，就能有效維持體重。我們提供專業的衛教與追蹤，協助您長期維持成果。'
  },
  {
    question: '施打猛健樂會痛嗎？',
    answer: '猛健樂使用的是極細的專利針頭，施打於皮下脂肪層（如腹部或大腿），大部分患者僅感覺像被蚊子叮一下，幾乎沒有疼痛感，非常方便操作。'
  }
]


  },

  // =======================================================
  // 2. 週纖達 (Ozempic) - 預留欄位
  // =======================================================
  {
    slug: 'ozempic',
    title: '週纖達',
    subtitle: 'GLP-1 受體促效劑',
    description: '協助控制體重的注射藥物，幫助您減少飢餓感，輕鬆達成減重目標。',
    features: ['穩定血糖', '減少體脂肪堆積'],
    contentHtml: `
    新竹週纖達推薦，提供完整服務。<br>
    週纖達是一種 GLP-1 受體促效劑，原本用於糖尿病治療，後來發現具有顯著的減重效果。<br><br>
    <span class="text-cyan-400 font-bold">✨ 1mg ：$9000 (約等於猛健樂 5mg)</span><br>
    <span class="text-cyan-400 font-bold">✨ 1.7mg ：$12000 (約等於猛健樂 10mg)</span><br><br>
    透過模擬腸道荷爾蒙的作用，增加飽足感、延緩胃部排空，進而減少熱量攝取，是現代人體重管理的得力助手，注重CP值朋友的首選。
  `,
    whyChooseUs: ['詳細問診及衛教施打', '甲狀腺超音波檢查及抽血檢查', '療程含高階inbody及運動課程'], // 範例資料
    programBenefits: ['一週一次好簡單，更高CP值', '適用於12-18歲青少年減重', '有效控制三高及脂肪肝，心臟保護'],      // 範例資料
    images: [      { src: '/images/weight-loss/ozempic/a.jpg', alt: '週纖達與猛健樂比較' }], // 圖片待補

    qaList: [
      {
        question: '週纖達跟猛健樂有什麼不一樣？',
        answer: '兩者都是腸泌素藥物。週纖達是單重機轉 (GLP-1)，上市時間較久，安全性資料多且CP值高；猛健樂是雙重機轉 (GIP/GLP-1)，減重效果通常更顯著，適合體重基數較大者。醫師會依您的狀況建議適合的藥物。'
      },
      {
        question: '我有糖尿病可以使用嗎？',
        answer: '可以的。週纖達本身即為治療第二型糖尿病的藥物，能有效穩定血糖。但若您已在使用其他降血糖藥物，請務必告知醫師，以免發生低血糖風險。'
      },
      {
        question: '需要每天打針嗎？',
        answer: '不需要。週纖達是長效型藥物，一週只需要皮下注射一次，非常方便，不用擔心每天忘記吃藥的問題。'
      }
    ]


  },

  // =======================================================
  // 3. 兒童骨齡評估 - 預留欄位
  // =======================================================
  {
    slug: 'bone-age',
    title: '兒童骨齡評估',
    subtitle: '掌握黃金生長發育期',
    description: '透過左手X光片判讀骨骼成熟度，預測成年身高，掌握黃金生長發育期。',
    features: ['性早熟', '生長遲緩', '想了解身高潛力的兒童'],
    contentHtml: `
    擔心孩子長不高嗎？想知道是否有性早熟或生長遲緩的問題？
    <br><br>
    新竹宸新復健科提供兒童骨齡檢查，不需要預約、掛號或等待 ⏰，僅需一秒鐘拍攝左手 X 光片，安全低輻射 👍。
    <br><br>
    我們結合專業醫師與AI大數據判讀，經由骨齡及父母身高，精準預測成年身高! 破百名兒童已經參與，並高度好評肯定 💯，立即掌握孩子的黃金成長期！
    `,
    whyChooseUs: ['免預約：門診時間來馬上照，不用候診掛號。', '精準判讀：使用 TW3 法判讀及二代 AI 輔助。', '彈性收費：依照需求階段性選擇付費。'],    // 範例資料
    programBenefits: ['準確度高，適合評估生長遲緩。', '更能反映真實的身高潛力。', '模板更符合亞洲兒童生長曲線。'], // 範例資料
    benefitsTitle: '為什麼選擇 TW3 法？',
    benefitsIconClass: 'fa-solid fa-check-circle text-green-500',
    images: [      { src: '/images/weight-loss/boneage/a.jpg', alt: '兒童照骨齡流程' },
                  { src: '/images/weight-loss/boneage/b.jpg', alt: 'GP法及TW3法比較' }                   ], // 圖片待補

                  qaList: [
                    {
                      question: '照骨齡會有輻射影響嗎？',
                      answer: '請家長放心。拍攝左手掌骨的X光輻射劑量極低（約 0.001 毫西弗），相當於搭飛機飛行 10 分鐘所接收的背景輻射量，對兒童身體幾乎沒有影響。'
                    },
                    {
                      question: '幾歲適合做骨齡檢查？',
                      answer: '一般建議 5 歲以上即可進行評估。若發現孩子身高百分位低於 3%、一年長高不到 4 公分，或是出現性早熟徵兆（如女生胸部發育、男生睪丸變大），應儘早檢查。'
                    },
                    {
                      question: '如果骨齡超前或落後怎麼辦？',
                      answer: '骨齡超前可能代表性早熟，雖然現在長得高，但生長板可能提早閉合導致成人身高矮小；骨齡落後則可能與營養或內分泌有關。醫師會根據個別狀況，提供飲食、運動、睡眠或轉介藥物治療的建議。'
                    }
                  ]

  }
];

// 取得單一資料的函式
export function getWeightLossProgramBySlug(slug: string) {
  return weightLossPrograms.find((program) => program.slug === slug);
}

// 取得所有 slug
export function getAllWeightLossProgramSlugs() {
  return weightLossPrograms.map((program) => ({
    slug: program.slug,
  }));
}