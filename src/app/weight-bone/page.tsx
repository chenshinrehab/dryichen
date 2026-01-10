// src/app/weight-bone/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
// 引入我們之前建立好的資料檔
import { weightLossPrograms } from '@/data/weightLoss'

export const metadata: Metadata = {
  title: '減重與骨齡 - 專業減重門診與兒童骨齡評估 | 宸新復健科診所',
  description: '專業減重門診服務，包括週纖達、猛健樂等減重項目，以及兒童骨齡評估服務，協助您達成健康減重目標。',
  keywords: ['減重', '骨齡評估', '週纖達', '猛健樂', '新竹減重'],
}

// 1. 定義 SEO 用的麵包屑資料 (畫面不顯示，Google 看得到)
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '首頁', item: 'https://dryichen-4ze1.vercel.app/' },
    { '@type': 'ListItem', position: 2, name: '減重與骨齡', item: 'https://dryichen-4ze1.vercel.app/weight-bone' },
  ],
}

export default function WeightLossPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      {/* 深色背景設定 */}
      <div className="min-h-screen flex flex-col bg-slate-900 text-slate-300">
        
        <main className="flex-grow py-12 md:py-16 fade-in">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* 標題區 */}
            <div className="flex items-center gap-3 mb-8 pl-2">
                <span className="bg-cyan-500/20 text-cyan-400 p-3 rounded-lg border border-cyan-500/30">
                    <i className="fa-solid fa-weight-scale text-xl"></i>
                </span>
                <h1 className="text-3xl font-bold font-sans text-white">
                    減重與骨齡 <span className="text-slate-500 text-lg font-normal ml-2">Weight & Bone</span>
                </h1>
            </div>

            {/* 描述文字 */}
            <div className="mb-10 pl-2">
                <p className="text-xl text-slate-400 border-l-4 border-cyan-500 pl-4">
                    專業減重門診服務，協助您達成健康減重目標，並提供兒童骨齡評估服務
                </p>
            </div>
            
            {/* 卡片列表 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {weightLossPrograms.map((program) => (
                <Link
                  key={program.slug}
                  href={`/weight-bone/${program.slug}`}
                  // 2. 套用新風格：深色半透明 + 霓虹邊框 + 懸浮效果
                  className="bg-slate-800/50 backdrop-blur border border-slate-700 p-6 rounded-xl hover:border-cyan-500/50 transition-all hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] group hover:-translate-y-1 cursor-pointer flex flex-col"
                >
                  {/* 標題 */}
                  <h2 className="text-xl font-bold text-cyan-400 mb-3 group-hover:text-cyan-300 transition-colors">
                    {program.title}
                  </h2>
                  
                  {/* 描述 */}
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed flex-grow">
                    {program.description}
                  </p>
                  
                  {/* 特色區塊 (綠色左邊框風格) */}
                  {program.features && program.features.length > 0 && (
                    <div className="bg-slate-900/50 p-3 rounded border-l-2 border-green-500 mt-auto">
                      <h3 className="font-semibold text-slate-200 mb-1 text-sm">特色：</h3>
                      <ul className="text-sm text-slate-400 space-y-1">
                        {program.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-start">
                             <span className="text-green-500 mr-2 text-xs">●</span> {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* 底部了解更多 (選擇性顯示，或保留卡片整體點擊感) */}
                  <div className="mt-4 text-right">
                     <span className="text-xs text-cyan-500 group-hover:underline decoration-cyan-500/50 underline-offset-4">
                        了解更多 →
                     </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </main>
        
        {/* Footer 已移除，layout.tsx 會自動處理 */}
      </div>
    </>
  )
}