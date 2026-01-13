import { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import { diseaseCategories } from '@/data/diseases'

// ==========================================
// 1. Meta 設定
// ==========================================
export const metadata: Metadata = {
  title: '新竹骨科/復健科推薦 - 椎間盤突出/五十肩/關節炎/痠麻痛治療 | 宸新復健科',
  description: '新竹復健科權威，專治椎間盤突出、坐骨神經痛、肩頸痠痛與五十肩。提供退化性關節炎與網球肘的精準診斷，解決您的痠麻痛困擾，是您值得信賴的新竹骨科診所。',
  keywords: ['新竹骨科', '新竹復健科', '椎間盤突出', '背痛', '肩頸痠痛', '五十肩', '退化性關節炎', '網球肘', '痠麻痛', '復健診所'],
}

// ==========================================
// 2. Schema 結構化資料
// ==========================================
const diseasesSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '首頁', item: 'https://www.dryichen.com.tw' },
        { '@type': 'ListItem', position: 2, name: '疾病衛教', item: 'https://www.dryichen.com.tw/diseases' },
      ],
    },
    {
      '@type': 'MedicalWebPage',
      'name': '骨科復健疾病衛教',
      'description': '提供脊椎、關節、肌肉疼痛等相關疾病的詳細症狀說明與治療建議。',
      'lastReviewed': '2026-01-11',
      'reviewedBy': {
        '@type': 'Physician',
        'name': '林羿辰 醫師',
        'url': 'https://www.dryichen.com.tw/about/doctors'
      },
      'specialty': [
        { '@type': 'MedicalSpecialty', 'name': 'Orthopedics' },
        { '@type': 'MedicalSpecialty', 'name': 'Physical Medicine and Rehabilitation' }
      ]
    }
  ]
}

export default function DiseasesPage() {
  return (
    <>
      <JsonLd data={diseasesSchema} />

      <div className="min-h-screen flex flex-col bg-slate-900 text-slate-300">
        
        {/* --- 修改重點：容器寬度調整 --- 
            原為 max-w-5xl，改為 max-w-7xl 以增加寬度，
            讓 Grid 卡片有更多空間伸展，看起來更寬。
        */}
        <main className="max-w-7xl mx-auto px-4 pt-4 pb-12 md:pt-8 md:pb-16 fade-in w-full">
          <div className="px-4 sm:px-6 lg:px-8"> {/* 移除內層多餘的 max-w-7xl，直接用 padding 即可 */}
            
            {/* ============================================================
                ✨ 標題區塊 (置中)
               ============================================================ */}
            <div className="flex items-center justify-center gap-3 mb-10">
                <span className="bg-cyan-500/20 text-cyan-400 p-3 rounded-lg border border-cyan-500/30">
                    <i className="fa-solid fa-book-medical text-xl"></i>
                </span>
                <h1 className="text-3xl font-bold font-sans text-white">
                    疾病衛教 <span className="text-slate-500 text-lg font-normal ml-2">Diseases Info</span>
                </h1>
            </div>

            {/* ============================================================
                ✨ SEO 導言區 (置中 + 左側藍線)
               ============================================================ */}
            <div className="mb-12 max-w-3xl mx-auto">
                <details className="group border-l-4 border-cyan-500 pl-4">
                    <summary className="list-none [&::-webkit-details-marker]:hidden text-lg text-slate-400 leading-relaxed outline-none cursor-pointer select-none text-left">
                        <span className="inline-block h-full">
                            身體的疼痛不能只靠止痛藥。作為專業的<strong className="text-cyan-400 font-normal">新竹復健科骨科</strong>診所，我們重視精確的鑑別診斷。
                            
                            <span className="group-open:hidden">
                                ... 
                                <span className="ml-1 text-sm text-cyan-500 hover:text-cyan-400 hover:underline underline-offset-4 font-semibold">
                                    了解更多 <i className="fa-solid fa-chevron-down text-xs"></i>
                                </span>
                            </span>
                        </span>
                    </summary>
                    
                    <div className="mt-4 text-lg text-slate-400 leading-relaxed text-left animate-in fade-in slide-in-from-top-1 duration-300">
                        <p className="mb-4">
                            無論是現代文明病造成的<strong className="text-cyan-400 font-normal">肩頸痠痛</strong>與<strong className="text-cyan-400 font-normal">背痛</strong>，或是困擾中老年人的<strong className="text-cyan-400 font-normal">五十肩</strong>與膝蓋<strong className="text-cyan-400 font-normal">退化性關節炎</strong>，我們都能提供完整的治療計畫。
                        </p>
                        <p>
                            針對運動傷害如<strong className="text-cyan-400 font-normal">網球肘</strong>，以及神經壓迫導致的<strong className="text-cyan-400 font-normal">椎間盤突出</strong>與手腳<strong className="text-cyan-400 font-normal">痠麻痛</strong>，宸新復健科團隊將協助您找出病因，遠離疼痛。
                        </p>
                    </div>
                </details>
            </div>
            
            {/* ============================================================
                ✨ 卡片列表 
                保持 lg:grid-cols-3，但因為容器變寬 (max-w-7xl)，
                卡片寬度會自然拉伸變寬。
               ============================================================ */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {diseaseCategories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/diseases/${category.slug}`}
                  className="group bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all duration-300 flex flex-col"
                >
                  {/* 1. 圖片區塊 (上) */}
                  <div className="h-48 overflow-hidden relative bg-slate-800">
                      <img 
                        src={category.image} 
                        alt={`${category.title} - 新竹骨科復健`} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                      />
                      {/* 遮罩 */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                  </div>

                  {/* 2. 文字內容區塊 (下) */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-3">
                        <h2 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                            {category.title}
                        </h2>
                    </div>
                    
                    {/* 描述 (限制2行) */}
                    <p className="text-slate-400 mb-4 line-clamp-2 flex-grow text-sm leading-relaxed">
                      {category.description}
                    </p>

                    {/* 收錄項目 (標籤樣式 - 顯示前3個) */}
                    {category.diseases && category.diseases.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                            {category.diseases.slice(0, 3).map((d, idx) => (
                                <span key={idx} className="text-xs bg-slate-900 text-slate-300 px-2 py-1 rounded border border-slate-700">
                                    {d.title}
                                </span>
                            ))}
                            {category.diseases.length > 3 && (
                                <span className="text-xs text-slate-500 px-1 self-center">...</span>
                            )}
                        </div>
                    )}
                    
                    {/* 底部連結文字 */}
                    <div className="mt-auto text-right">
                          <span className="text-cyan-400 font-semibold text-sm group-hover:underline decoration-cyan-400/50 underline-offset-4">
                           了解更多及治療建議 <i className="fa-solid fa-arrow-right ml-1 text-xs"></i>
                          </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* ============================================================
                ✨ 專業信任區塊 (保持不變)
               ============================================================ */}
            <div className="bg-slate-800/80 rounded-2xl p-8 border border-slate-700 relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-full bg-slate-700 flex items-center justify-center border-2 border-cyan-500/50">
                             <i className="fa-solid fa-magnifying-glass-chart text-3xl text-cyan-400"></i>
                        </div>
                    </div>
                    
                    <div className="flex-grow">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            正確的診斷，是治療的第一步
                        </h3>
                        <div className="space-y-4 text-slate-300 leading-relaxed">
                            <p>
                                許多病患深受長期疼痛困擾，原因往往在於沒有找出真正的病灶。例如：<span className="text-cyan-400">手麻</span>不一定是腕隧道症候群，可能是頸椎神經壓迫；<span className="text-cyan-400">膝蓋痛</span>不一定是退化，可能是周邊韌帶拉傷。
                            </p>
                            <p>
                                透過詳細的理學檢查與影像評估，我們能區分疼痛來源，為您制定最合適的復健計畫，避免無效治療。
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