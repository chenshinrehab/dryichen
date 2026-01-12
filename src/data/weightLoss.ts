// src/data/weightLoss.ts

// 1. 定義資料結構
export interface WeightLossProgram {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string
  contentHtml?: string;
  features?: string[];
  whyChooseUs?: string[];
  programBenefits?: string[];
  images?: { src: string; alt: string }[];
  qrCode?: string;
  benefitsTitle?: string;
  benefitsIconClass?: string;
  qaList?: { question: string; answer: string }[];

  // ✨ 新增 SEO 專用欄位
  seoTitle?: string;        // 瀏覽器標題
  seoDescription?: string;  // 搜尋結果摘要
  keywords?: string[];      // 關鍵字標籤
}

export const weightLossPrograms: WeightLossProgram[] = [
  // =======================================================
  // 1. 猛健樂 (Mounjaro) - 關鍵字：新竹減重、瘦瘦針價格、雙重腸泌素
  // =======================================================
  {
    slug: 'mounjaro',
    title: '猛健樂 (Mounjaro)',
    subtitle: '新一代雙重腸泌素受體促效劑',
    description: '新一代雙重腸泌素(GIP/GLP-1)受體促效劑，提供更卓越的體重控制效果。',
    // ✨ 新增圖片：醫師諮詢/藥物示意
    image: '/images/weight-loss/a.jpg',
    features: ['一週一次', '抑制食慾', '延緩胃排空'],
    
    // ✨ SEO 強力優化
    seoTitle: '新竹猛健樂(Mounjaro)減重門診 - 價格/效果/副作用 | 宸新復健科',
    seoDescription: '新竹猛健樂(Mounjaro)瘦瘦針推薦。新一代雙重腸泌素(GIP/GLP-1)，減重效果優於傳統善纖達。林羿辰醫師親自規劃療程，含InBody檢測與飲食指導，有效改善肥胖、脂肪肝與三高問題。',
    keywords: ['新竹猛健樂', 'Mounjaro價格', '新竹瘦瘦針', '新竹減重門診', '雙重腸泌素', '減肥針推薦', '胰島素阻抗'],

    contentHtml: `
      <p>宸新復健科提供完整的新竹<strong>猛健樂 (Mounjaro)</strong> 減重療程。這是目前最新的雙重腸泌素 (GIP/GLP-1) 受體促效劑，能同時活化 GIP 與 GLP-1 兩種受體。</p>
      
      <p>臨床研究顯示，猛健樂能提供比傳統單一機轉藥物（如善纖達、週纖達）更卓越的<strong>體重控制</strong>與<strong>血糖管理</strong>效果，是目前對抗頑固型肥胖、代謝症候群與多囊性卵巢的新利器。</p>

      <div class="my-6 p-4 bg-slate-800/50 border-l-4 border-cyan-500 rounded-r-lg">
        <h4 class="text-white font-bold mb-2">宸新復健科猛健樂價格方案：</h4>
        <ul class="space-y-2 text-slate-300">
           <li><span class="text-cyan-400 font-bold">✨ 2.5mg：</span>$10,500</li>
           <li><span class="text-cyan-400 font-bold">✨ 5mg ：</span>$11,500</li>
           <li><span class="text-cyan-400 font-bold">✨ 7.5mg：</span>$13,000</li>
           <li><span class="text-cyan-400 font-bold">✨ 10mg ：</span>$15,000</li>
        </ul>
        <p class="text-sm text-slate-500 mt-2">* 實際劑量需經醫師評估後開立</p>
      </div>
    `,
    whyChooseUs: [
      '詳細問診及衛教施打，確保用藥安全',
      '包含<strong>甲狀腺超音波</strong>及完整<strong>抽血檢查</strong>',
      '療程含高階 <strong>InBody 身體組成分析</strong>及運動課程'
    ],
    programBenefits: [
      '一週一次皮下注射，簡單方便',
      '臨床顯示體重下降幅度可達 20%',
      '有效控制三高、改善脂肪肝與心血管健康'
    ],
    images: [
      { src: '/images/weight-loss/mounjaro/a.jpg', alt: '猛健樂減重治療流程圖' },
      { src: '/images/weight-loss/mounjaro/b.jpg', alt: '猛健樂雙重腸泌素特點說明' },
      { src: '/images/weight-loss/mounjaro/c.jpg', alt: '猛健樂適合施打對象' },
      { src: '/images/weight-loss/mounjaro/d.jpg', alt: '新竹猛健樂懶人包' }
    ],
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
  // 2. 週纖達 (Ozempic) - 關鍵字：Ozempic價格、善纖達比較、一週一次
  // =======================================================
  {
    slug: 'ozempic',
    title: '週纖達 (Ozempic)',
    subtitle: 'GLP-1 受體促效劑',
    description: '協助控制體重的注射藥物，幫助您減少飢餓感，輕鬆達成減重目標。',
    image: '/images/weight-loss/b.jpg',
    features: ['穩定血糖', '減少體脂肪堆積'],
    
    // ✨ SEO 強力優化
    seoTitle: '新竹週纖達(Ozempic)減重 - 價格/副作用/與善纖達比較 | 宸新復健科',
    seoDescription: '新竹週纖達(Ozempic)瘦瘦針推薦。高CP值的一週一次減重藥物，有效抑制食慾、增加飽足感。適合忙碌上班族、想改善體態與血糖控制者。提供完整衛教與劑量規劃。',
    keywords: ['新竹週纖達', 'Ozempic價格', '新竹瘦瘦針推薦', '善纖達比較', 'GLP-1', '減肥筆', '胰妥讚'],

    contentHtml: `
      <p>宸新復健科提供高CP值的<strong>週纖達 (Ozempic)</strong> 減重療程。這是一種長效型 GLP-1 受體促效劑，透過模擬腸道荷爾蒙的作用，能有效<strong>增加飽足感</strong>、<strong>延緩胃部排空</strong>，進而減少熱量攝取。</p>
      
      <p>週纖達原本用於糖尿病治療，後來發現具有顯著的減重效果。對於預算有限、或追求高性價比的減重族群來說，是一個非常理想的選擇。</p>

      <div class="my-6 p-4 bg-slate-800/50 border-l-4 border-cyan-500 rounded-r-lg">
        <h4 class="text-white font-bold mb-2">宸新復健科週纖達價格方案：</h4>
        <ul class="space-y-2 text-slate-300">
           <li><span class="text-cyan-400 font-bold">✨ 1mg：</span>$9,000 <span class="text-sm text-slate-500">(約等於猛健樂 5mg 效力)</span></li>
           <li><span class="text-cyan-400 font-bold">✨ 1.7mg：</span>$12,000 <span class="text-sm text-slate-500">(約等於猛健樂 10mg 效力)</span></li>
        </ul>
      </div>
    `,
    whyChooseUs: [
      '詳細問診及衛教施打，確保劑量正確',
      '甲狀腺超音波檢查及抽血檢查',
      '療程含高階 InBody 及運動課程'
    ],
    programBenefits: [
      '一週一次好簡單，不用每天挨針',
      'CP值高，小資族也能負擔',
      '有效控制三高及脂肪肝，提供心臟保護'
    ],
    images: [
      { src: '/images/weight-loss/ozempic/a.jpg', alt: '週纖達與猛健樂、善纖達比較圖' }
    ],
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
  // 3. 兒童骨齡評估 - 關鍵字：新竹照骨齡、性早熟檢查、長高門診
  // =======================================================
  {
    slug: 'bone-age',
    title: '兒童骨齡評估',
    subtitle: '掌握黃金生長發育期',
    description: '透過左手X光片判讀骨骼成熟度，預測成年身高，掌握黃金生長發育期。',
    // ✨ 新增圖片：兒童測量身高
    image: '/images/weight-loss/c.jpg',
    features: ['性早熟', '生長遲緩', '想了解身高潛力的兒童'],
    
    // ✨ SEO 強力優化
    seoTitle: '新竹兒童骨齡檢查 - 性早熟/長高門診/身高預測 | 宸新復健科',
    seoDescription: '新竹照骨齡推薦。免掛號免預約，隨到隨照。結合TW3法與AI大數據精準判讀，準確預測兒童成年身高。針對性早熟、生長遲緩提供專業評估與治療建議，把握孩子黃金轉骨期。',
    keywords: ['新竹照骨齡', '兒童長高門診', '性早熟檢查', '生長遲緩', '預測身高', '骨齡X光', '新竹小兒內分泌'],

    contentHtml: `
      <p>擔心孩子長不高嗎？想知道是否有<strong>性早熟</strong>或<strong>生長遲緩</strong>的問題？</p>
      
      <p>新竹宸新復健科提供專業的<strong>兒童骨齡檢查</strong>服務。我們最大的特色是：<strong>不需要預約、不需要掛號、不需要漫長等待</strong>，僅需一秒鐘拍攝左手 X 光片，且輻射劑量極低，安全無虞。</p>

      <p>我們結合專業醫師經驗與<strong>二代 AI 大數據</strong>，採用最符合亞洲兒童生長曲線的 <strong>TW3 法</strong>進行判讀。經由骨齡及父母身高，能精準預測孩子的成年身高潛力！目前已有破百名兒童參與，並獲得家長高度好評肯定。</p>
      
      <p class="font-bold text-cyan-400 mt-4">立即行動，掌握孩子的黃金成長期！</p>
    `,
    whyChooseUs: [
      '<strong>免預約、免掛號</strong>：門診時間來馬上照，省去醫院排隊時間',
      '<strong>精準判讀</strong>：使用 TW3 法判讀及二代 AI 輔助，比傳統 GP 法更準確',
      '<strong>彈性收費</strong>：依照需求階段性選擇付費，不強迫推銷'
    ],
    programBenefits: [
      '準確度高，適合早期發現生長遲緩問題',
      '更能反映真實的身高潛力，避免錯過治療黃金期',
      'AI 模板更符合現代亞洲兒童生長曲線'
    ],
    benefitsTitle: '為什麼選擇 TW3 法？',
    benefitsIconClass: 'fa-solid fa-check-circle text-green-500',
    images: [
      { src: '/images/weight-loss/boneage/a.jpg', alt: '兒童照骨齡檢查流程圖' },
      { src: '/images/weight-loss/boneage/b.jpg', alt: 'GP法及TW3法骨齡判讀比較' }
    ],
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

export function getWeightLossProgramBySlug(slug: string) {
  return weightLossPrograms.find((program) => program.slug === slug);
}

export function getAllWeightLossProgramSlugs() {
  return weightLossPrograms.map((program) => ({
    slug: program.slug,
  }));
}