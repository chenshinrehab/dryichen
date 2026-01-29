// src/app/treatments/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import { treatmentsList } from '@/data/treatments'
// ✨ 1. 引入動畫組件
import ScrollAnimation from '@/components/ScrollAnimation'

// 定義標準網域與路徑
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.dryichen.com.tw'
const PAGE_PATH = '/treatments'
const CANONICAL_URL = `${SITE_URL}${PAGE_PATH}`

// ==========================================
// 1. Meta 設定 (加入 Canonical)
// ==========================================
export const metadata: Metadata = {
  title: '新竹PRP/增生注射/震波/徒手治療 - 超音波導引骨科復健 | 宸新復健科',
  description: '新竹復健科推薦。林羿辰醫師團隊提供高解析超音波導引注射(PRP/葡萄糖增生療法)，精準治療疼痛。另設有高能量體外震波、專業徒手治療與運動治療。',
  keywords: [
    '新竹PRP', '新竹增生注射', '超音波導引注射', '新竹骨科', 
    '體外震波', '新竹體外震波', '徒手治療', '新竹徒手治療', 
    '復健科推薦', '膝蓋退化免開刀', '足底筋膜炎治療'
  ],
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: '新竹PRP/增生注射/震波/徒手治療 - 宸新復健科',
    description: '提供PRP增生療法、體外震波、徒手治療等專業骨科復健服務過。',
    url: CANONICAL_URL,
    type: 'website',
  },
}

// ==========================================
// 2. Schema 結構化資料
// ==========================================
const treatmentsSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '首頁', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: '治療項目', item: CANONICAL_URL },
      ],
    },
    {
      '@type': 'MedicalWebPage',
      '@id': `${CANONICAL_URL}#webpage`,
      'name': '復健治療項目總覽',
      'description': '提供PRP增生療法、體外震波、徒手治療等專業骨科復健服務。',
      'url': CANONICAL_URL,
      'mainEntity': {
        '@type': 'ItemList',
        'itemListElement': treatmentsList.map((item, index) => ({
            '@type': 'ListItem',
            'position': index + 1,
            'url': `${SITE_URL}/treatments/${item.slug}`,
            'name': item.title
        }))
      }
    }
  ]
}

export default function TreatmentsPage() {
  return (
    <>
      <JsonLd data={treatmentsSchema} />
      
      {/* ✨ 2. 放置動畫觸發器 */}
      <ScrollAnimation />

      <div className="min-h-screen flex flex-col bg-slate-900 text-slate-300">
        
        <main className="flex-grow pt-0 -mt-10 md:-mt-12 pb-12 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* ✨ 3. 標題區塊動畫 */}
            <div className="flex items-center justify-center gap-3 mb-10 animate-on-scroll">
                <span className="bg-cyan-500/20 text-cyan-400 p-3 rounded-lg border border-cyan-500/30">
                    <i className="fa-solid fa-notes-medical text-xl"></i>
                </span>
                <h1 className="text-3xl font-bold font-sans text-white">
                    治療項目 <span className="text-slate-500 text-lg font-normal ml-2">Treatments</span>
                </h1>
            </div>

            {/* ✨ 4. 卡片列表 - 加入交錯進場動畫 */}
            <div className="grid grid-cols-1 gap-8 mb-16">
              {treatmentsList.map((treatment, index) => {
                // 為前幾張卡片加上延遲
                const delays = ['delay-100', 'delay-200', 'delay-300', 'delay-500'];
                const delayClass = index < 4 ? delays[index] : 'delay-100';

                return (
                  <Link
                    key={treatment.slug}
                    href={`/treatments/${treatment.slug}`}
                    className={`group relative bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-500 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300 flex flex-col md:flex-row h-auto md:h-64 cursor-pointer animate-on-scroll ${delayClass}`}
                  >
                    {/* 左側：圖片區塊 */}
                    <div className="w-full md:w-2/5 relative h-48 md:h-full overflow-hidden">
                      <img 
                        src={treatment.image} 
                        alt={`${treatment.title} - 新竹推薦`}
                        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-900/90 to-transparent"></div>
                    </div>

                    {/* 右側：文字內容區塊 */}
                    <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-center relative">
                      <i className="fa-solid fa-file-medical absolute right-4 bottom-4 text-8xl text-slate-800/50 -rotate-12 group-hover:text-cyan-900/30 transition-colors duration-500 pointer-events-none"></i>
                      
                      <div className="relative z-10 h-full flex flex-col justify-center">
                          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors flex items-center">
                              {treatment.title}
                              <i className="fa-solid fa-arrow-right opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-2 transition-all ml-3 text-lg text-cyan-500"></i>
                          </h2>
                          
                          <p className="text-slate-300 text-lg mb-4 line-clamp-2">
                              {treatment.description}
                          </p>
                          
                          {treatment.applicableConditions && treatment.applicableConditions.length > 0 && (
                              <div className="mt-auto">
                                  <div className="flex flex-wrap gap-2">
                                      {treatment.applicableConditions.slice(0, 4).map((condition, idx) => (
                                          <span key={idx} className="text-sm bg-cyan-500/10 text-cyan-400 px-2 py-1 rounded border border-cyan-500/20">
                                              <i className="fa-solid fa-check mr-1 text-xs"></i>{condition}
                                          </span>
                                      ))}
                                      {treatment.applicableConditions.length > 4 && (
                                          <span className="text-sm text-slate-500 px-2 py-1">...</span>
                                      )}
                                  </div>
                              </div>
                          )}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* ✨ 5. 專業理念區塊 - 動畫 */}
            <div className="bg-slate-800/80 rounded-2xl p-8 border border-slate-700 relative overflow-hidden animate-on-scroll">
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-shrink-0 hidden md:block">
                        <div className="w-16 h-16 rounded-full bg-slate-700 flex items-center justify-center border-2 border-cyan-500/50">
                             <i className="fa-solid fa-microscope text-3xl text-cyan-400"></i>
                        </div>
                    </div>
                    
                    <div className="flex-grow">
                        <div className="flex items-center gap-4 mb-4 md:mb-2">
                            <i className="fa-solid fa-microscope text-3xl text-cyan-400 md:hidden"></i>
                            <h3 className="text-2xl font-bold text-white">
                                精準醫療，對症下藥
                            </h3>
                        </div>
                        <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
                            <p>
                                疼痛的成因複雜，傳統的「頭痛醫頭」往往只能治標。宸新復健科堅持引入醫學中心等級的<strong className="text-cyan-400">超音波導引</strong>技術，在注射治療（如 PRP、增生療法）時，能精準送達病灶。
                            </p>
                            <p>
                                同時，我們整合了物理治療師的<strong className="text-cyan-400">徒手治療</strong>與運動訓練，不僅修復組織，更協助您重建正確的身體力學。
                            </p>
                        </div>
                    </div>
                </div>
            </div>

          </div>

          {/* ✨ 6. SEO 導言區 - 動畫 */}
          <div className="max-w-4xl mx-auto opacity-70 hover:opacity-100 transition-opacity duration-300 mt-12 animate-on-scroll delay-300">
              <details className="group border-l-2 border-slate-700 pl-4">
                  <summary className="list-none [&::-webkit-details-marker]:hidden text-sm md:text-base text-slate-500 leading-relaxed outline-none cursor-pointer select-none text-left hover:text-cyan-400 transition-colors">
                      <span className="inline-block h-full">
                          <span className="flex items-center gap-2 mb-2">
                             <i className="fa-solid fa-circle-info text-cyan-500/50"></i>
                             <strong className="text-white font-medium">醫師叮嚀：精準治療，重啟修復</strong>
                          </span>
                          宸新復健科致力於提供最先進的<strong className="text-cyan-400 font-normal">新竹骨科</strong>復健治療...
                          <span className="group-open:hidden">
                             <span className="text-xs text-cyan-500 hover:underline ml-2">展開閱讀</span>
                          </span>
                      </span>
                  </summary>

                  <div className="mt-4 text-base text-slate-500 leading-relaxed text-left">
                    <p className="mb-4">
                        我們特別引進高解析度<strong className="text-cyan-400 font-normal">超音波導引注射</strong>技術，讓<strong className="text-cyan-400 font-normal">PRP</strong>與<strong className="text-cyan-400 font-normal">增生注射</strong>治療能精準修復受損組織。
                    </p>
                    <p className="mb-4">
                        針對慢性疼痛與術後恢復，我們配備高能量<strong className="text-cyan-400 font-normal">體外震波</strong>儀器，專治足底筋膜炎等。
                    </p>
                    <p> 
                        並由資深治療師提供一對一的<strong className="text-cyan-400 font-normal">徒手治療</strong>與運動指導。
                    </p>
                  </div>
              </details>
          </div>
        </main>
      </div>
    </>
  )
}