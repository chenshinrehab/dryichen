// src/app/treatments/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import { treatments } from '@/data/treatments'

// ==========================================
// 1. Meta 設定
// ==========================================
export const metadata: Metadata = {
  title: '新竹PRP/增生注射/震波/徒手治療 - 超音波導引骨科復健 | 宸新復健科',
  description: '新竹復健科推薦。林羿辰醫師團隊提供高解析超音波導引注射(PRP/葡萄糖增生療法)，精準治療疼痛。另設有高能量體外震波、專業徒手治療與運動治療，為新竹骨科患者提供全方位復健方案。',
  keywords: [
    '新竹PRP', '新竹增生注射', '超音波導引注射', '新竹骨科', 
    '體外震波', '新竹體外震波', '徒手治療', '新竹徒手治療', 
    '復健科推薦', '膝蓋退化免開刀', '足底筋膜炎治療'
  ],
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
        { '@type': 'ListItem', position: 1, name: '首頁', item: 'https://www.dryichen.com.tw/' },
        { '@type': 'ListItem', position: 2, name: '治療項目', item: 'https://www.dryichen.com.tw/treatments' },
      ],
    },
    {
      '@type': 'MedicalWebPage',
      'name': '復健治療項目總覽',
      'description': '提供PRP增生療法、體外震波、徒手治療等專業骨科復健服務。',
      'lastReviewed': '2026-01-11',
      'reviewedBy': {
        '@type': 'Physician',
        'name': '林羿辰 醫師',
        'url': 'https://www.dryichen.com.tw/about/doctors'
      },
      'specialty': [
        { '@type': 'MedicalSpecialty', 'name': 'Orthopedics' },
        { '@type': 'MedicalSpecialty', 'name': 'Physical Medicine and Rehabilitation' },
        { '@type': 'MedicalSpecialty', 'name': 'Sports Medicine' }
      ]
    }
  ]
}

export default function TreatmentsPage() {
  return (
    <>
      <JsonLd data={treatmentsSchema} />

      <div className="min-h-screen flex flex-col bg-slate-900 text-slate-300">
        
      <main className="max-w-5xl mx-auto px-4 pt-4 pb-12 md:pt-8 md:pb-16 fade-in">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            
            {/* ============================================================
                ✨ 標題區塊 (統一置中樣式)
               ============================================================ */}
            <div className="flex items-center justify-center gap-3 mb-10">
                <span className="bg-cyan-500/20 text-cyan-400 p-3 rounded-lg border border-cyan-500/30">
                    <i className="fa-solid fa-notes-medical text-xl"></i>
                </span>
                <h1 className="text-3xl font-bold font-sans text-white">
                    治療項目 <span className="text-slate-500 text-lg font-normal ml-2">Treatments</span>
                </h1>
            </div>

            {/* ============================================================
                ✨ SEO 導言區 (統一置中樣式)
               ============================================================ */}
            <div className="mb-12 max-w-3xl mx-auto">
                <details className="group border-l-4 border-cyan-500 pl-4">
                    {/* Summary */}
                    <summary className="list-none [&::-webkit-details-marker]:hidden text-lg text-slate-400 leading-relaxed outline-none cursor-pointer select-none text-left">
                        <span className="inline-block h-full">
                            宸新復健科致力於提供最先進的<strong className="text-cyan-400 font-normal">新竹骨科</strong>復健治療，結合醫學影像與運動科學，為您解決長期疼痛。
                            
                            <span className="group-open:hidden">
                                ... 
                                <span className="ml-1 text-sm text-cyan-500 hover:text-cyan-400 hover:underline underline-offset-4 font-semibold">
                                    了解更多 <i className="fa-solid fa-chevron-down text-xs"></i>
                                </span>
                            </span>
                        </span>
                    </summary>
                    
                    {/* Content */}
                    <div className="mt-4 text-lg text-slate-400 leading-relaxed text-left animate-in fade-in slide-in-from-top-1 duration-300">
                        <p className="mb-4">
                            我們特別引進高解析度<strong className="text-cyan-400 font-normal">超音波導引注射</strong>技術，讓<strong className="text-cyan-400 font-normal">PRP</strong> (高濃度血小板) 與<strong className="text-cyan-400 font-normal">增生注射</strong>治療能精準修復受損組織，大幅提升<strong>退化性關節炎</strong>與<strong>肌腱撕裂</strong>的療效。
                        </p>
                        <p>
                            針對慢性疼痛與術後恢復，我們配備高能量<strong className="text-cyan-400 font-normal">體外震波</strong>儀器，專治<strong>足底筋膜炎</strong>與<strong>鈣化性肌腱炎</strong>。</p>
                            <p> 並由資深治療師提供一對一的<strong className="text-cyan-400 font-normal">徒手治療</strong>與運動指導，全方位解決您的疼痛困擾。
                        </p>
                    </div>
                </details>
            </div>
            
            {/* ============================================================
                ✨ 卡片列表 (長條橫式)
               ============================================================ */}
            <div className="grid grid-cols-1 gap-8 mb-16">
              {treatments.map((treatment) => (
                <Link
                  key={treatment.slug}
                  href={`/treatments/${treatment.slug}`}
                  // 統一的高質感卡片樣式：半透明 + 霓虹邊框 + 懸浮效果 + 橫式排列
                  className="group relative bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-500 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300 flex flex-col md:flex-row h-auto md:h-64 cursor-pointer"
                >
                  {/* 左側：圖片區塊 (2/5) */}
                  <div className="w-full md:w-2/5 relative h-48 md:h-full overflow-hidden">
                    <img 
                      src={treatment.image} 
                      alt={`${treatment.title} - 新竹推薦`}
                      className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-900/90 to-transparent"></div>
                  </div>

                  {/* 右側：文字內容區塊 (3/5) */}
                  <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-center relative">
                    {/* 裝飾 Icon */}
                    <i className="fa-solid fa-file-medical absolute right-4 bottom-4 text-8xl text-slate-800/50 -rotate-12 group-hover:text-cyan-900/30 transition-colors duration-500 pointer-events-none"></i>
                    
                    <div className="relative z-10 h-full flex flex-col justify-center">
                        {/* 標題 */}
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors flex items-center">
                            {treatment.title}
                            <i className="fa-solid fa-arrow-right opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-2 transition-all ml-3 text-lg text-cyan-500"></i>
                        </h2>
                        
                        {/* 描述 (限制 2 行) */}
                        <p className="text-slate-300 text-lg mb-4 line-clamp-2">
                            {treatment.description}
                        </p>
                        
                        {/* 適用症狀 (從下方移上來，限制高度以符合卡片) */}
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
              ))}
            </div>

            {/* ============================================================
                ✨ 專業理念區塊 (保持不變)
               ============================================================ */}
            <div className="bg-slate-800/80 rounded-2xl p-8 border border-slate-700 relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-full bg-slate-700 flex items-center justify-center border-2 border-cyan-500/50">
                             <i className="fa-solid fa-microscope text-3xl text-cyan-400"></i>
                        </div>
                    </div>
                    
                    <div className="flex-grow">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            精準醫療，對症下藥
                        </h3>
                        <div className="space-y-4 text-slate-300 leading-relaxed">
                            <p>
                                疼痛的成因複雜，傳統的「頭痛醫頭」往往只能治標。宸新復健科堅持引入醫學中心等級的<strong className="text-cyan-400">超音波導引</strong>技術，在注射治療（如 PRP、增生療法）時，能即時看見神經、血管與受傷組織，確保藥劑精準送達病灶。
                            </p>
                            <p>
                                同時，我們整合了物理治療師的<strong className="text-cyan-400">徒手治療</strong>與運動訓練，不僅修復組織，更協助您重建正確的身體力學，從根本預防復發。
                            </p>
                        </div>
                    </div>
                </div>
            </div>

          </div>
        </main>
      </div>
    </>
  )
}