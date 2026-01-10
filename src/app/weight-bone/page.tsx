// src/app/weight-bone/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
// 確保上面的檔案已經建立，這裡才抓得到資料
import { weightLossPrograms } from '../../data/weightLoss'

export const metadata: Metadata = {
  title: '減重與骨齡 - 專業減重門診與兒童骨齡評估 | 宸新復健科診所',
  description: '專業減重門診服務，包括週纖達、猛健樂等減重項目，以及兒童骨齡評估服務，協助您達成健康減重目標。',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '首頁', item: 'https://dryichen-4ze1.vercel.app/' },
    { '@type': 'ListItem', position: 2, name: '減重與骨齡', item: 'https://dryichen-4ze1.vercel.app/weight-bone' },
  ],
}

export default function WeightBonePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <div className="min-h-screen flex flex-col bg-slate-900 text-slate-300">
        <main className="flex-grow py-12 md:py-16 fade-in">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* 標題區 */}
            <div className="mb-12 border-l-4 border-cyan-500 pl-6">
                <h1 className="text-4xl font-bold text-white mb-4">減重與骨齡</h1>
                <p className="text-xl text-slate-400">
                專業減重門診服務，協助您達成健康減重目標，並提供兒童骨齡評估服務
                </p>
            </div>
            
            {/* 卡片列表 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {weightLossPrograms.map((program) => (
                <Link
                  key={program.slug}
                  href={`/weight-bone/${program.slug}`} 
                  className="group bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all duration-300 flex flex-col"
                >
                  <div className="mb-4">
                     <div className="flex justify-between items-start mb-2">
                        <h2 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                            {program.title}
                        </h2>
                        <i className="fa-solid fa-arrow-right text-slate-500 group-hover:text-cyan-400 transform group-hover:translate-x-1 transition-all"></i>
                     </div>
                     <p className="text-slate-400 mb-4 line-clamp-2">{program.description}</p>
                  </div>

                  {program.features && program.features.length > 0 && (
                    <div className="mt-auto bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                      <h3 className="font-semibold mb-2 text-cyan-500 text-sm">特色重點：</h3>
                      <ul className="space-y-1.5">
                        {program.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="text-sm text-slate-300 flex items-start">
                             <span className="text-cyan-500/70 mr-2">▹</span> {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  )
}