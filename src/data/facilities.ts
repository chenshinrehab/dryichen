// src/data/facilities.ts

export interface FacilityItem {
  id: string
  title: string
  description: string      // 列表頁短描述 & Meta Description
  contentHtml: string      // 詳細頁 HTML
  imageUrl: string
  keywords: string[]       // SEO 關鍵字
}

export const facilitiesData: FacilityItem[] = [
  // ==========================================
  // 環境設施 (Environment)
  // ==========================================
  {
    id: 'waiting-area',
    title: '寬敞舒適候診區',
    description: '挑高明亮的候診空間，提供免費 Wi-Fi 與茶水，讓您在放鬆的心情下等待看診。',
    keywords: ['新竹復健科環境', '舒適候診', '無障礙空間', '親子友善'],
    contentHtml: `
      <p>宸新復健科打破傳統診所擁擠狹小的印象，打造<strong>挑高、明亮且寬敞</strong>的候診大廳。</p>
      <p>我們深知等待看診時的焦慮，因此特別設置了舒適的沙發區、免費Wi-Fi、衛教影片以及茶水服務。全院採<strong>無障礙設計</strong>，無論是推輪椅的長輩或推嬰兒車的家長，都能輕鬆進出，享有最友善的就醫體驗。</p>
    `,
    imageUrl: '/images/clinic/a.jpg'
  },
  {
    id: 'parking',
    title: '專屬停車位',
    description: '診所設有專屬停車空間，讓行動不便的患者免於奔波，就醫更便利。',
    keywords: ['復健科停車', '新竹好停車診所', '無障礙車位', '方便就醫'],
    contentHtml: `
    <div class="my-8 flex justify-center">
    <iframe 
      width="315" 
      height="560" 
      src="https://www.youtube.com/embed/hFh6xaYpP1k" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen
      class="max-w-full rounded-xl shadow-lg border border-slate-700"
    ></iframe>
  </div>  
    <p>在新竹市區就醫，停車往往是最大的困擾。宸新復健科體貼行動不便的患者，於診所旁規劃了<strong>專屬汽機車停車位</strong>。</p>
      <p>您不需要在附近繞圈找位子，或是停在大老遠再忍痛走過來。我們致力於解決您就醫路上的最後一哩路，讓復健之路更加順暢無阻。</p>
      <img src="/images/clinic/bb.jpg" alt="診所停車位" />
    `,
    imageUrl: '/images/clinic/b.jpg'
  },

  // ==========================================
  // 檢查診斷 (Diagnostic)
  // ==========================================
  {
    id: 'x-ray',
    title: '數位 X 光檢查',
    description: '低輻射、高解析度，快速診斷骨折與退化性關節炎，提供即時影像分析。',
    keywords: ['數位X光', '骨折檢查', '骨刺', '脊椎側彎檢查', '新竹X光診所'],
    contentHtml: `
      <p>本院採用最新型數位 X 光機 (Digital Radiography)，具備<strong>低輻射、成像快、高解析度</strong>的特點。</p>
      <p>拍攝後影像直接傳輸至診間電腦，讓醫師能即時為您解說骨骼結構。無論是意外受傷的<strong>骨折診斷</strong>、長輩的<strong>退化性關節炎</strong>程度評估，或是兒童的<strong>脊椎側彎與骨齡篩檢</strong>，都能提供最客觀準確的影像依據。</p>
    `,
    imageUrl: '/images/clinic/c.jpg'
  },
  {
    id: 'ultrasound',
    title: '高解析度超音波',
    description: '軟組織檢查利器，精準導引注射不可或缺的「醫師第三隻眼」。',
    keywords: ['肌骨超音波', '超音波導引注射', '肌腱炎檢查', '韌帶撕裂', '新竹超音波檢查'],
    contentHtml: `
      <p>相較於 X 光看骨頭，高解析度肌肉骨骼超音波能清楚看到<strong>肌腱、韌帶、神經與肌肉</strong>的動態狀況。</p>
      <p>搭配高階彩色都卜勒血流偵測，能精準判斷發炎程度。最重要的是，我們堅持進行<strong>超音波導引注射</strong>，邊掃描邊打針，將 PRP 或增生藥劑準確送達病灶，避免誤傷神經血管，大幅提升治療成功率。</p>
    `,
    imageUrl: '/images/clinic/d.jpg'
  },

  // ==========================================
  // 治療設備 (Treatment Devices)
  // ==========================================
  {
    id: 'prp',
    title: 'PRP 增生注射',
    description: '高濃度血小板分離技術，確保生長因子濃度，提升治療效果。',
    keywords: ['PRP設備', '離心機', '生長因子', '高濃度血小板', '無菌操作'],
    contentHtml: `
      <p>工欲善其事，必先利其器。PRP (高濃度血小板血漿) 的修復效果，取決於血小板的<strong>濃度與純度</strong>。</p>
      <p>本院採用瑞士進口之高階 PRP 專用套管與高速離心設備，全程在無菌環境下操作，能有效分離萃取出濃度極高且純淨的生長因子及血小板血漿，最大化軟骨與韌帶的修復效果。</p>
    `,
    imageUrl: '/images/clinic/e.jpg'
  },
  
  {
    id: 'shockwave',
    title: '聚焦式震波治療',
    description: '非侵入性治療首選，針對鈣化性肌腱炎與足底筋膜炎效果顯著。',
    keywords: ['震波治療', '聚焦式震波', '足底筋膜炎', '鈣化性肌腱炎', '網球肘治療'],
    contentHtml: `
      <p>引進瑞士頂級 EMS 聚焦式震波儀，利用高能量聲波穿透組織，精準聚焦於深層病灶，能有效<strong>擊碎鈣化組織</strong>並刺激組織微血管新生，加速修復。</p>
      <p>震波治療具備<strong>免打針、免吃藥、無恢復期</strong>的優勢，對於長期沾黏、鈣化性肌腱炎以及藥物治療無效的頑固型疼痛（如網球肘、足底筋膜炎），具有顯著的療效。</p>
    `,
    imageUrl: '/images/clinic/f.jpg'
  },

  {
    id: 'laser',
    title: '高能量雷射',
    description: '深層消炎止痛，加速細胞修復，急性扭傷消腫神器。',
    keywords: ['高能量雷射', '消腫止痛', '腳踝扭傷', '肌肉拉傷', '光生物調節'],
    contentHtml: `
      <p>高能量雷射能穿透至深層組織，透過光生物調節作用抑制發炎反應，並加速細胞粒線體產生能量。</p>
      <p>對於<strong>急性腳踝扭傷消腫、肌肉拉傷修復</strong>效果極佳，能大幅縮短受傷後的恢復時間，無痛可馬上運動是職業運動員常備的治療利器。</p>
    `,
    imageUrl: '/images/clinic/g.jpg'
  },

  // ==========================================
  // 復健區域 (Rehab Areas)
  // ==========================================
  {
    id: 'ortho-rehab',
    title: '骨科復健區',
    description: '寬敞的運動治療空間，配備多樣化復健器材，協助術後與慢性疼痛患者恢復功能。',
    keywords: ['骨科復健', '物理治療', '術後復健', '電療熱敷', '新竹復健中心'],
    contentHtml: `
      <p>我們的骨科復健區空間寬敞明亮，不用人擠人等復健，依據功能劃分為<strong>電療熱敷區</strong>與<strong>微波牽引區</strong>。</p>
      <p>進口復健設備，治療效果更好，有紅外線、超音波、熱療蠟療、微波、干擾波、電療、頸椎腰椎牽引、雷射，循環機...等</p>
    `,
    imageUrl: '/images/clinic/h.jpg'
  },
  {
    id: 'manual-therapy-room',
    title: '獨立徒手治療室',
    description: '隱私性高的一對一治療空間，由物理治療師進行深層筋膜放鬆與骨骼調整。',
    keywords: ['徒手治療', '新竹整復', '筋膜放鬆', '一對一物理治療', '私密空間'],
    contentHtml: `
      <p>為了保障患者隱私與治療品質，我們特別規劃了<strong>獨立隔間的徒手治療室</strong>。</p>
      <p>在這裡，物理治療師能專注於一對一的評估與治療。透過關節鬆動術、肌筋膜放鬆 (MFR) 與神經鬆動術，解決您長期的頸椎壓迫、骨盆歪斜或術後關節沾黏問題，讓您在安靜放鬆的環境下重獲健康。</p>
    `,
    imageUrl: '/images/clinic/i.jpg'
  },
  {
    id: 'pediatric-early-intervention',
    title: '兒童早療專區',
    description: '色彩繽紛、充滿童趣的治療空間，讓孩子在遊戲中快樂復健，促進感覺統合發展。',
    keywords: ['兒童早療', '感覺統合', '發展遲緩', '語言治療', '早療教室'],
    contentHtml: `
      <p>為了讓怕生的孩子能卸下心防，我們打造了色彩繽紛、充滿童趣的<strong>兒童早療專區</strong>。</p>
      <p>配備攀岩牆、盪鞦韆、球池與平衡木等感覺統合器材。專業的語言治療師、職能治療師與物理治療師透過「遊戲治療」的方式，引導發展遲緩、語言遲緩、專注力不足或肌肉張力異常的孩子，在快樂玩耍中同步提升大腦與肢體的協調能力。</p>
    `,
    imageUrl: '/images/clinic/j.jpg'
  },

  // ==========================================
  // 特色課程 (Special Courses)
  // ==========================================
  {
    id: 'redcord',
    title: '紅繩懸吊系統 (Redcord)',
    description: '源自挪威的醫療級懸吊運動，喚醒深層核心肌群，改善慢性腰痛與姿勢不良。',
    keywords: ['紅繩運動', 'Redcord', '核心訓練', '懸吊治療', '挪威紅繩'],
    contentHtml: `
      <p><strong>紅繩懸吊系統 (Redcord)</strong> 是源自挪威的醫療級運動治療設備。透過不穩定的繩索懸吊，能強迫身體徵召深層的<strong>核心肌群</strong>來維持平衡。</p>
      <p>對於長期下背痛、脊椎不穩定、產後骨盆修復以及想提升運動表現的選手，紅繩能精準喚醒「沉睡的肌肉」，重新建立正確的肌肉用力模式 (Neuromuscular Control)。</p>
    `,
    imageUrl: '/images/clinic/k.jpg'
  },
  {
    id: 'pilates-reformer',
    title: '器械皮拉提斯',
    description: '結合復健醫學的彼拉提斯核心床，雕塑線條同時改善脊椎排列與身體控制。',
    keywords: ['器械皮拉提斯', 'Pilates', '核心床', '脊椎保健', '體態雕塑'],
    contentHtml: `
      <p>本院引進專業的<strong>皮拉提斯核心床 (Reformer)</strong>，結合復健醫學原理，由物理治療師親自指導。</p>
      <p>利用彈簧阻力輔助，能更安全、精準地訓練核心肌群、延展脊椎並增加關節活動度。非常適合脊椎側彎矯正、椎間盤問題、下背痛及肩頸痠痛，以及追求優美體態線條的女性朋友。</p>
    `,
    imageUrl: '/images/clinic/m.jpg'
  },
  {
    id: 'scoliosis-rack',
    title: '脊椎側彎矯正架',
    description: '針對脊椎側彎患者設計的施羅斯 (Schroth) 矯正設備，透過3D呼吸與特定擺位改善側彎角度。',
    keywords: ['脊椎側彎矯正', '施羅斯療法', 'Schroth', '脊椎側彎背架', '兒童脊椎側彎'],
    contentHtml: `
      <p>針對原發性脊椎側彎的青少年與成人，我們設有專用的<strong>脊椎側彎矯正架 (Wall Bar)</strong>。</p>
      <p>採用德國<strong>施羅斯療法 (Schroth Method)</strong> 的概念，透過特定的擺位、肌力訓練與 3D 旋轉呼吸法，主動對抗脊椎的旋轉與側彎。能有效改善外觀體態、減緩背部疼痛，並控制側彎角度的惡化。</p>
    `,
    imageUrl: '/images/clinic/n.jpg'
  }
];

export function getFacilityById(id: string) {
  return facilitiesData.find(item => item.id === id);
}