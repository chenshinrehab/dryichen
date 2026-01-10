// src/app/treatments/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
// 確保您有這個資料檔，如果沒有請建立 (參考下方說明)
import { treatments } from '@/data/treatments'

export const metadata: Metadata = {
  title: '治療方式 - 專業復健治療服務 | 宸新復健科診所',
  description: '專業的復健治療服務，包括PRP注射、震波治療、一對一運動治療等，結合醫學與運動科學，提供個人化的治療方案。',
  keywords: ['復健治療', 'PRP注射', '震波治療', '運動治療', '新竹復健'],
}

// 定義麵包屑的結構化資料 (SEO用，畫面不顯示)
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '首頁', item: 'https://dryichen-4ze1.vercel.app/' },
    { '@type': 'ListItem', position: 2, name: '治療方式', item: 'https://dryichen-4ze1.vercel.app/treatments' },
  ],
}

export default function TreatmentsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      {/* 深色背景設定 */}
      <div className="min-h-screen flex flex-col bg-slate-900 text-slate-300">
        
        <main className="flex-grow py-12 md:py-16 fade-in">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* 標題區 */}
            <div className="mb-12 border-l-4 border-cyan-500 pl-6">
                <h1 className="text-4xl font-bold text-white mb-4">治療方式</h1>
                <p className="text-xl text-slate-400">
                  專業的復健治療服務，結合醫學與運動科學，提供個人化的治療方案
                </p>
            </div>
            
            {/* 卡片列表 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {treatments.map((treatment) => (
                <Link
                  key={treatment.slug}
                  href={`/treatments/${treatment.slug}`}
                  className="group bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all duration-300 flex flex-col"
                >
                  <div className="mb-4">
                     {/* 標題與箭頭 */}
                     <div className="flex justify-between items-start mb-2">
                        <h2 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                            {treatment.title}
                        </h2>
                        <i className="fa-solid fa-arrow-right text-slate-500 group-hover:text-cyan-400 transform group-hover:translate-x-1 transition-all"></i>
                     </div>
                     <p className="text-slate-400 mb-4 line-clamp-2">{treatment.description}</p>
                  </div>

                  {/* 適用症狀 (原有邏輯保留) */}
                  {treatment.applicableConditions && treatment.applicableConditions.length > 0 && (
                    <div className="mb-4 bg-slate-900/30 rounded-lg p-3 border border-slate-700/30">
                      <h3 className="font-semibold mb-2 text-pink-400 text-sm">適用症狀：</h3>
                      <ul className="flex flex-wrap gap-2">
                        {treatment.applicableConditions.slice(0, 4).map((condition, index) => (
                          <li key={index} className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded border border-slate-600">
                             {condition}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* 特色 (原有邏輯保留) */}
                  {treatment.features && treatment.features.length > 0 && (
                    <div className="mt-auto bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                      <h3 className="font-semibold mb-2 text-cyan-500 text-sm">特色重點：</h3>
                      <ul className="space-y-1.5">
                        {treatment.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="text-sm text-slate-300 flex items-start">
                             <span className="text-cyan-500/70 mr-2">▹</span> {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="mt-6 text-center">
                    <span className="text-cyan-400 font-semibold text-sm group-hover:underline decoration-cyan-400/50 underline-offset-4">
                        了解更多詳細內容
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  )
}