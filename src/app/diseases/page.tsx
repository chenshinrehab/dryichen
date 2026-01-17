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
  openGraph: {
    title: '新竹骨科/復健科推薦 - 各部位疼痛治療導覽',
    description: '肩膀痛、膝蓋痛、腰痛？點擊查看宸新復健科針對各部位疼痛的詳細衛教與治療建議。',
    type: 'website',
  }
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
      '@id': 'https://www.dryichen.com.tw/diseases/#webpage',
      'name': '骨科復健疾病衛教導覽',
      'description': '提供脊椎、關節、肌肉疼痛等相關疾病的詳細症狀說明與治療建議。',
      'lastReviewed': new Date().toISOString().split('T')[0],
      'reviewedBy': {
        '@type': 'Physician',
        'name': '林羿辰 醫師',
        'url': 'https://www.dryichen.com.tw/about/doctors'
      },
      'specialty': [
        { '@type': 'MedicalSpecialty', 'name': 'Orthopedics' },
        { '@type': 'MedicalSpecialty', 'name': 'Physical Medicine and Rehabilitation' }
      ],
      'mainEntity': {
        '@type': 'ItemList',
        'itemListElement': diseaseCategories.map((cat, index) => ({
            '@type': 'ListItem',
            'position': index + 1,
            'url': `https://www.dryichen.com.tw/diseases/${cat.slug}`,
            'name': cat.title
        }))
      }
    }
  ]
}

export default function DiseasesPage() {
  return (
    <>
      <JsonLd data={diseasesSchema} />

      <div className="min-h-screen flex flex-col bg-slate-900 text-slate-300">
        
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16 md:pt-12 md:pb-20 fade-in">
          
          {/* ============================================================
              ✨ 標題區塊
              ============================================================ */}
          <div className="text-center mb-10 md:mb-14">
            <div className="inline-flex items-center justify-center gap-3 mb-4">
               <span className="bg-cyan-500/10 text-cyan-400 p-3 rounded-xl border border-cyan-500/20 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                   <i className="fa-solid fa-book-medical text-2xl"></i>
               </span>
               <h1 className="text-3xl md:text-4xl font-bold font-sans text-white tracking-wide">
                   疾病衛教 <span className="text-slate-500 text-xl font-normal ml-2 tracking-normal">Diseases Info</span>
               </h1>
            </div>
            <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto">
                點選下方部位，了解常見症狀與復健治療方式
            </p>
          </div>

          {/* ============================================================
              ✨ SEO 導言區 (Collapsible)
              ============================================================ */}
          <div className="mb-12 max-w-4xl mx-auto">
             <details className="group bg-slate-800/30 border border-slate-700/50 rounded-2xl overflow-hidden transition-all duration-300 open:bg-slate-800/50 open:border-cyan-500/30">
                <summary className="list-none [&::-webkit-details-marker]:hidden flex items-center justify-between p-4 md:p-6 cursor-pointer select-none text-slate-300 hover:text-cyan-400 transition-colors">
                    <span className="text-lg font-medium flex items-center gap-3">
                        <i className="fa-solid fa-user-doctor text-cyan-500"></i>
                        <span>身體的疼痛，不能只靠止痛藥</span>
                    </span>
                    <span className="text-sm bg-slate-700/50 px-3 py-1 rounded-full group-open:bg-cyan-500/20 group-open:text-cyan-400 transition-all">
                        <span className="group-open:hidden">閱讀前言 <i className="fa-solid fa-chevron-down ml-1"></i></span>
                        <span className="hidden group-open:inline">收起內容 <i className="fa-solid fa-chevron-up ml-1"></i></span>
                    </span>
                </summary>
                
                <div className="px-4 pb-6 md:px-6 md:pb-8 text-base md:text-lg text-slate-400 leading-relaxed border-t border-slate-700/50 pt-4 animate-in fade-in slide-in-from-top-2 duration-300">
                    <p className="mb-4">
                        作為專業的<strong className="text-cyan-400 font-normal">新竹復健科骨科</strong>診所，我們重視精確的鑑別診斷。
                        無論是現代文明病造成的<strong className="text-cyan-400 font-normal">肩頸痠痛</strong>與<strong className="text-cyan-400 font-normal">背痛</strong>，或是困擾中老年人的<strong className="text-cyan-400 font-normal">五十肩</strong>與膝蓋<strong className="text-cyan-400 font-normal">退化性關節炎</strong>，我們都能提供完整的治療計畫。
                    </p>
                    <p>
                        針對運動傷害如<strong className="text-cyan-400 font-normal">網球肘</strong>，以及神經壓迫導致的<strong className="text-cyan-400 font-normal">椎間盤突出</strong>與手腳<strong className="text-cyan-400 font-normal">痠麻痛</strong>，宸新復健科團隊將協助您找出病因，遠離疼痛。
                    </p>
                </div>
             </details>
          </div>
          
          {/* ============================================================
              ✨ 卡片列表 Grid
              ============================================================ */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
            {diseaseCategories.map((category) => (
              <Link
                key={category.slug}
                href={`/diseases/${category.slug}`}
                className="group relative bg-slate-800/40 backdrop-blur border border-slate-700 rounded-2xl overflow-hidden hover:bg-slate-800 hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
              >
                {/* 1. 圖片區塊 */}
                {/* aspect-video 確保圖片比例固定，避免跑版 */}
                <div className="aspect-[16/9] w-full overflow-hidden relative bg-slate-900">
                    <img 
                      src={category.image} 
                      alt={`${category.title} - 新竹骨科復健`} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                    
                    {/* 分類標題直接壓在圖片左下角，更有雜誌感 */}
                    <div className="absolute bottom-0 left-0 p-5 w-full">
                        <h2 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors drop-shadow-lg flex items-center justify-between">
                            {category.title}
                            <i className="fa-solid fa-arrow-right -rotate-45 group-hover:rotate-0 text-slate-400 group-hover:text-cyan-400 transition-all duration-300 text-lg opacity-0 group-hover:opacity-100"></i>
                        </h2>
                    </div>
                </div>

                {/* 2. 文字內容區塊 */}
                <div className="p-5 pt-2 flex flex-col flex-grow border-t border-slate-700/30">
                  
                  {/* 描述 */}
                  <p className="text-slate-400 mb-4 line-clamp-2 text-sm leading-relaxed min-h-[2.5rem]">
                    {category.description}
                  </p>

                  {/* 收錄項目標籤 */}
                  <div className="mt-auto">
                      {category.diseases && category.diseases.length > 0 ? (
                        <div className="flex flex-wrap gap-1.5">
                            {category.diseases.slice(0, 3).map((d, idx) => (
                                <span key={idx} className="text-[11px] font-medium bg-slate-700/50 text-slate-300 px-2 py-1 rounded-md border border-slate-600/50 group-hover:border-cyan-500/30 group-hover:text-cyan-100 transition-colors">
                                    {d.title}
                                </span>
                            ))}
                            {category.diseases.length > 3 && (
                                <span className="text-[10px] text-slate-500 self-center pl-1">+{category.diseases.length - 3}</span>
                            )}
                        </div>
                      ) : (
                         <span className="text-xs text-slate-600 italic">資料更新中...</span>
                      )}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* ============================================================
              ✨ 專業信任區塊 (E-E-A-T 加強)
              ============================================================ */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-10 border border-slate-700 relative overflow-hidden shadow-2xl">
              {/* 背景裝飾 */}
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0 hidden md:block">
                      <div className="w-16 h-16 rounded-2xl bg-slate-700/50 flex items-center justify-center border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                           <i className="fa-solid fa-magnifying-glass-chart text-3xl text-cyan-400"></i>
                      </div>
                  </div>
                  
                  <div className="flex-grow">
                      <div className="flex items-center gap-4 mb-4 md:mb-2">
                        <i className="fa-solid fa-magnifying-glass-chart text-3xl text-cyan-400 md:hidden"></i>
                        <h3 className="text-2xl md:text-3xl font-bold text-white">
                            正確的診斷，是治療的第一步
                        </h3>
                      </div>
                      
                      <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
                          <p>
                              許多病患深受長期疼痛困擾，原因往往在於沒有找出真正的病灶。例如：<span className="text-cyan-400 font-medium bg-cyan-900/20 px-1 rounded">手麻</span>不一定是腕隧道症候群，可能是頸椎神經壓迫；<span className="text-cyan-400 font-medium bg-cyan-900/20 px-1 rounded">膝蓋痛</span>不一定是退化，可能是周邊韌帶拉傷。
                          </p>
                          <p>
                              透過詳細的理學檢查與影像評估，我們能區分疼痛來源，為您制定最合適的復健計畫，避免無效治療。
                          </p>
                      </div>
                      
                      <div className="mt-8 pt-6 border-t border-slate-700/50 flex items-center justify-between flex-wrap gap-4">
                          <div className="flex items-center gap-2">
                             {/* 🔴 錯誤修復：移除 onError 
                                原本：onError={(e) => e.currentTarget.style.display='none'}
                                
                                如果圖片載入失敗，建議在伺服器端確認圖片存在，
                                或改用 Next.js <Image> 元件來處理錯誤。
                                這裡直接使用 img 標籤並移除事件處理器以通過編譯。
                             */}
                             <img 
                                src="/images/doctor/b.jpg" 
                                alt="林羿辰醫師" 
                                className="w-12 h-12 rounded-full border border-slate-600" 
                             />
                             <span className="text-slate-400 text-sm">本文由 林羿辰 醫師 審閱</span>
                          </div>
                          <Link href="/about/doctors" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center gap-2 group">
                             認識我們的醫療團隊 <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                          </Link>
                      </div>
                  </div>
              </div>
          </div>

        </main>
      </div>
    </>
  )
}