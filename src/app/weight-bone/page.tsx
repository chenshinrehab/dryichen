import { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import { weightLossPrograms } from '@/data/weightLoss'
import WeightLossTools from '@/components/WeightLossTools'
// ✨ 1. 引入動畫組件
import ScrollAnimation from '@/components/ScrollAnimation'

// 定義常數，確保網址一致
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.dryichen.com.tw'
const PAGE_PATH = '/weight-bone'
const CANONICAL_URL = `${SITE_URL}${PAGE_PATH}`

export const metadata: Metadata = {
  title: '新竹減重與骨齡門診 - 猛健樂/瘦瘦針/生長遲緩/性早熟評估 | 新竹宸新復健科',
  description: '新竹宸新復健科提供專業體重管理與兒童生長發育評估。林羿辰醫師親自規劃猛健樂(Mounjaro)、週纖達(Ozempic)等瘦瘦針療程，並提供兒童骨齡X光檢查。',
  keywords: ['新竹減重', '新竹猛健樂', '瘦瘦針', '新竹照骨齡', '生長遲緩', '性早熟', '週纖達', '兒童長高'],
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: '新竹減重與骨齡門診 - 猛健樂/瘦瘦針/生長遲緩/性早熟評估',
    description: '提供新竹地區專業減重、瘦瘦針治療與兒童骨齡評估服務。',
    url: CANONICAL_URL,
    type: 'website',
  },
}

const weightBoneSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '首頁', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: '減重與骨齡', item: CANONICAL_URL },
      ],
    },
    {
      '@type': 'MedicalWebPage', 
      '@id': `${CANONICAL_URL}#webpage`,
      'name': '減重與骨齡門診',
      'description': '提供新竹地區專業減重、瘦瘦針治療與兒童骨齡評估服務。',
      'url': CANONICAL_URL,
      'lastReviewed': new Date().toISOString().split('T')[0],
      'reviewedBy': {
        '@type': 'Physician',
        'name': '林羿辰 醫師',
        'url': `${SITE_URL}/about/doctors`
      },
      'specialty': [
        { '@type': 'MedicalSpecialty', 'name': 'Weight Loss Management' },
        { '@type': 'MedicalSpecialty', 'name': 'Pediatric Growth Assessment' }
      ],
      'mainEntity': {
        '@type': 'ItemList',
        'itemListElement': weightLossPrograms.map((program, index) => ({
            '@type': 'ListItem',
            'position': index + 1,
            'url': `${SITE_URL}/weight-bone/${program.slug}`,
            'name': program.title
        }))
      }
    }
  ]
}

export default function WeightLossPage() {
  return (
    <>
      <JsonLd data={weightBoneSchema} />
      
      {/* ✨ 2. 放入動畫組件 */}
      <ScrollAnimation />

      <div className="min-h-screen flex flex-col bg-slate-900 text-slate-300">
        
        <main className="flex-grow pt-0 -mt-10 md:-mt-12 pb-12 relative z-10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* ✨ 3. 標題與工具區塊 - 參考範本加入 relative z-50 解決選單擋住問題 */}
            <div className="text-center mb-5 max-w-4xl mx-auto animate-on-scroll relative z-50">
    <div className="flex items-center justify-center gap-4 mb-4">
        {/* 圖示容器：固定寬高並置中 */}
        <span className="flex items-center justify-center w-12 h-12 bg-cyan-500/20 text-cyan-400 rounded-lg border border-cyan-500/30">
            <i className="fa-solid fa-weight-scale text-xl"></i>
        </span>

        {/* 文字容器：套用同樣的垂直位移校正 */}
        <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold font-sans text-white leading-none transform translate-y-[7px]">
                減重與骨齡
            </h1>
        </div>
    </div>

    <div className="relative z-20">
        <WeightLossTools />
    </div>
</div>

            {/* ✨ 4. 卡片列表 - 依照範本修改為「容器一次進場」 */}
            <div className="grid grid-cols-1 gap-8 mb-16 animate-on-scroll delay-100 relative z-10">
              {weightLossPrograms.map((program) => (
                <Link
                  key={program.slug}
                  href={`/weight-bone/${program.slug}`}
                  // 移除單張卡片的動畫與延遲 class
                  className="group relative bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl overflow-hidden hover:bg-slate-800 hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)] hover:-translate-y-1 transition-all duration-300 flex flex-col md:flex-row h-auto md:h-64 cursor-pointer"
                >
                  {/* 圖片區塊 (2/5) - 完整保留 */}
                  <div className="w-full md:w-2/5 relative h-48 md:h-full overflow-hidden">
                    <img 
                      src={program.image} 
                      alt={`${program.title} - 新竹推薦`}
                      className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-900/90 to-transparent"></div>
                  </div>

                  {/* 文字內容區塊 (3/5) - 完整保留 */}
                  <div className="w-full md:w-3/5 p-5 md:p-6 flex flex-col justify-center relative">
                    <i className="fa-solid fa-file-medical absolute right-4 bottom-4 text-8xl text-slate-800/50 -rotate-12 group-hover:text-cyan-900/30 transition-colors duration-500 pointer-events-none"></i>
                    
                    <div className="relative z-10 h-full flex flex-col justify-center">
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors flex items-center">
                        {program.title}
                        <i className="fa-solid fa-arrow-right opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all ml-3 text-lg text-cyan-500"></i>
                      </h2>

                      <p className="text-slate-300 text-lg mb-4 line-clamp-2">
                        {program.description}
                      </p>

                      {program.features && program.features.length > 0 && (
                        <div className="mt-auto">
                          <div className="flex flex-wrap gap-2">
                             {program.features.slice(0, 3).map((feature, idx) => (
                               <span key={idx} className="text-sm bg-cyan-500/10 text-cyan-400 px-2 py-1 rounded border border-cyan-500/20">
                                  <i className="fa-solid fa-check mr-1 text-xs"></i>{feature}
                               </span>
                             ))}
                             {program.features.length > 3 && (
                               <span className="text-sm text-slate-500 px-2 py-1">...</span>
                             )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* ✨ 5. 醫師治療理念區塊 - 範本延遲 delay-200 */}
            <div className="bg-slate-800/80 rounded-2xl p-8 border border-slate-700 relative overflow-hidden animate-on-scroll delay-200">
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-full bg-slate-700 flex items-center justify-center border-2 border-cyan-500/50">
                             <i className="fa-solid fa-user-doctor text-3xl text-cyan-400"></i>
                        </div>
                    </div>
                    
                    <div className="flex-grow text-left">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            醫師治療理念與叮嚀
                        </h3>
                        <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
                            <p>
                                體重控制不僅僅是為了外觀，更是為了健康。市面上的減重藥物（如<span className="text-cyan-400">瘦瘦針、猛健樂</span>）必須在專業醫師的評估下使用。
                            </p>
                            <p>
                                同樣地，兒童的生長發育只有一次。透過<span className="text-cyan-400">骨齡檢測</span>，我們能客觀判斷孩子的生長潛力，把握黃金成長期。
                            </p>
                        </div>
                        
                        <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg flex gap-3">
                            <i className="fa-solid fa-triangle-exclamation text-yellow-500 mt-1"></i>
                            <p className="text-sm text-yellow-200/80">
                                <strong>特別提醒：</strong>所有醫療行為皆有個別差異。請親自蒞臨診所，由醫師進行完整評估。
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ✨ 6. SEO 導言區 - 範本延遲 delay-300 */}
            <div className="max-w-4xl mx-auto opacity-70 hover:opacity-100 transition-opacity duration-300 mt-12 px-4 animate-on-scroll delay-300">
              <details className="group border-l-2 border-slate-700 pl-4">
                <summary className="list-none [&::-webkit-details-marker]:hidden text-sm md:text-base text-slate-500 leading-relaxed outline-none cursor-pointer select-none text-left hover:text-cyan-400 transition-colors">
                  <span className="inline-block h-full">
                    宸新復健科提供<strong className="text-cyan-400 font-normal">全方位的服務</strong>...
                    <span className="group-open:hidden">
                      ... <span className="text-xs text-cyan-500 hover:underline ml-2">展開閱讀</span>
                    </span>
                  </span>
                </summary>

                <div className="mt-4 text-base text-slate-500 leading-relaxed text-left">
                  <p className="mb-4">
                    我們提供科學化的<strong className="text-cyan-400 font-normal">減重</strong>療程，包含<strong className="text-cyan-400 font-normal">猛健樂</strong>與<strong className="text-cyan-400 font-normal">瘦瘦針</strong>。
                  </p>
                  <p>
                    針對兒童發育，我們提供專業的<strong className="text-cyan-400 font-normal">照骨齡</strong> X光檢查，把握成長期。
                  </p>
                </div>
              </details>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}