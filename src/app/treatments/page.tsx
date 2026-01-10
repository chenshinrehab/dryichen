// src/app/treatments/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
// 確保您有這個資料檔
import { treatments } from '@/data/treatments'

export const metadata: Metadata = {
  title: '治療方式 - 專業復健治療服務 | 宸新復健科診所',
  description: '專業的復健治療服務，包括PRP注射、震波治療、一對一運動治療等，結合醫學與運動科學，提供個人化的治療方案。',
  keywords: ['復健治療', 'PRP注射', '震波治療', '運動治療', '新竹復健'],
}

// SEO 用的麵包屑資料 (畫面不顯示)
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
            
            {/* 標題區 (依照您的參考設計加上 icon 裝飾) */}
            <div className="flex items-center gap-3 mb-8 pl-2">
                <span className="bg-cyan-500/20 text-cyan-400 p-3 rounded-lg border border-cyan-500/30">
                    <i className="fa-solid fa-notes-medical text-xl"></i>
                </span>
                <h1 className="text-3xl font-bold font-sans text-white">
                    治療方式 <span className="text-slate-500 text-lg font-normal ml-2">Treatments</span>
                </h1>
            </div>
            
            {/* 卡片列表 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {treatments.map((treatment) => (
                <Link
                  key={treatment.slug}
                  href={`/treatments/${treatment.slug}`}
                  // ✨ 這裡套用您指定的全新樣式：半透明背景 + 霓虹邊框 + 懸浮上移效果
                  className="bg-slate-800/50 backdrop-blur border border-slate-700 p-6 rounded-xl hover:border-cyan-500/50 transition-all hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] group hover:-translate-y-1 cursor-pointer flex flex-col"
                >
                  {/* 標題 */}
                  <h2 className="text-xl font-bold text-cyan-400 mb-3 group-hover:text-cyan-300 transition-colors">
                    {treatment.title}
                  </h2>

                  {/* 描述 */}
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed flex-grow">
                    {treatment.description}
                  </p>

                  {/* 適用症狀區塊 (綠色左邊框風格) */}
                  {treatment.applicableConditions && treatment.applicableConditions.length > 0 && (
                    <div className="bg-slate-900/50 p-3 rounded border-l-2 border-green-500 mt-auto">
                        <h4 className="font-semibold text-slate-200 mb-1 text-sm">適用症狀</h4>
                        <p className="text-slate-400 text-sm">
                            {/* 將陣列轉為用頓號分隔的字串 */}
                            {treatment.applicableConditions.join('、')}
                        </p>
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