// src/app/diseases/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
// 確保您有這個資料檔
import { diseaseCategories } from '@/data/diseases'

// ==========================================
// 1. Meta 設定 (針對指定關鍵字優化)
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
        { '@type': 'ListItem', position: 1, name: '首頁', item: 'https://dryichen-4ze1.vercel.app/' },
        { '@type': 'ListItem', position: 2, name: '疾病衛教', item: 'https://dryichen-4ze1.vercel.app/diseases' },
      ],
    },
    // 醫療網頁標記 (明確定義為醫療知識頁面)
    {
      '@type': 'MedicalWebPage',
      'name': '骨科復健疾病衛教',
      'description': '提供脊椎、關節、肌肉疼痛等相關疾病的詳細症狀說明與治療建議。',
      'lastReviewed': '2026-01-11',
      'reviewedBy': {
        '@type': 'Physician',
        'name': '林羿辰 醫師',
        'url': 'https://dryichen-4ze1.vercel.app/about/doctors'
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
        
        <main className="flex-grow py-12 md:py-16 fade-in">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* 標題區 */}
            <div className="flex items-center gap-3 mb-6 pl-2">
                <span className="bg-cyan-500/20 text-cyan-400 p-3 rounded-lg border border-cyan-500/30">
                    <i className="fa-solid fa-book-medical text-xl"></i>
                </span>
                <h1 className="text-3xl font-bold font-sans text-white">
                    疾病衛教 <span className="text-slate-500 text-lg font-normal ml-2">Diseases Info</span>
                </h1>
            </div>

            {/* SEO 導言區 (原生 Details 收合設計 - 埋入大量關鍵字) */}
            <div className="mb-10 pl-2 max-w-4xl">
                <details className="group">
                    {/* Summary: 永遠顯示的第一段 */}
                    <summary className="list-none text-lg text-slate-400 leading-relaxed outline-none cursor-pointer select-none">
                        <span className="inline-block border-l-4 border-cyan-500 pl-4 h-full">
                           身體的疼痛不能只靠止痛藥。作為專業的<strong className="text-cyan-400 font-normal">新竹骨科</strong>與<strong className="text-cyan-400 font-normal">新竹復健科</strong>診所，我們重視精確的鑑別診斷。
                           
                           {/* 展開提示文字 */}
                           <span className="group-open:hidden">
                               ... 
                               <span className="ml-1 text-sm text-cyan-500 hover:text-cyan-400 hover:underline underline-offset-4 font-semibold">
                                 了解更多 <i className="fa-solid fa-chevron-down text-xs"></i>
                               </span>
                           </span>
                        </span>
                    </summary>
                    
                    {/* 展開後的詳細內容 (SEO 關鍵字寶庫) */}
                    <div className="mt-2 text-lg text-slate-400 leading-relaxed pl-5 animate-in fade-in slide-in-from-top-1 duration-300">
                        <p className="mb-4">
                            無論是現代文明病造成的<strong className="text-cyan-400 font-normal">肩頸痠痛</strong>與<strong className="text-cyan-400 font-normal">背痛</strong>，或是困擾中老年人的<strong className="text-cyan-400 font-normal">五十肩</strong>與膝蓋<strong className="text-cyan-400 font-normal">退化性關節炎</strong>，我們都能提供完整的治療計畫。
                        </p>
                        <p>
                            針對運動傷害如<strong className="text-cyan-400 font-normal">網球肘</strong>，以及神經壓迫導致的<strong className="text-cyan-400 font-normal">椎間盤突出</strong>與手腳<strong className="text-cyan-400 font-normal">痠麻痛</strong>，宸新復健科團隊將協助您找出病因，遠離疼痛。
                        </p>
                    </div>
                </details>
            </div>
            
            {/* 卡片列表 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {diseaseCategories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/diseases/${category.slug}`}
                  // 套用統一的卡片樣式：半透明背景 + 霓虹邊框 + 懸浮上移
                  className="bg-slate-800/50 backdrop-blur border border-slate-700 p-6 rounded-xl hover:border-cyan-500/50 transition-all hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] group hover:-translate-y-1 cursor-pointer flex flex-col"
                >
                  <h2 className="text-xl font-bold text-cyan-400 mb-3 group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                    {category.title}
                    <i className="fa-solid fa-angle-right opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all text-sm"></i>
                  </h2>
                  
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow">
                    {category.description}
                  </p>

                  {/* 底部收錄項目預覽 (綠色左邊框風格) */}
                  <div className="bg-slate-900/50 p-3 rounded border-l-2 border-green-500 mt-auto">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold text-slate-200 text-sm">收錄項目</h4>
                        <span className="text-xs bg-slate-800 text-green-400 px-2 py-0.5 rounded-full border border-green-900/50">
                            共 {category.diseases.length} 項
                        </span>
                      </div>
                      
                      {/* 用 tag 形式列出前幾個疾病，增加點擊慾望並提供爬蟲關鍵字 */}
                      <div className="flex flex-wrap gap-1">
                          {category.diseases.slice(0, 3).map((d, idx) => (
                              <span key={idx} className="text-xs text-slate-400 bg-slate-800 px-2 py-1 rounded border border-slate-700">
                                  {d.title}
                              </span>
                          ))}
                          {category.diseases.length > 3 && (
                              <span className="text-xs text-slate-500 px-1 self-center">...</span>
                          )}
                      </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* 3. 專業信任區塊 (E-E-A-T 強化 - 診斷的重要性) */}
            <div className="bg-slate-800/80 rounded-2xl p-8 border border-slate-700 relative overflow-hidden">
                {/* 裝飾背景 */}
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