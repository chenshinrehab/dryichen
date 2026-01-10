// src/app/diseases/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
// 確保您有這個資料檔
import { diseaseCategories } from '@/data/diseases'

export const metadata: Metadata = {
  title: '疾病衛教 - 復健相關疾病介紹與治療建議 | 宸新復健科診所',
  description: '詳細的疾病介紹與治療建議，涵蓋脊椎、肩膀、手肘、手部、膝蓋、足踝等復健相關疾病，幫助您了解症狀與治療方式。',
  keywords: ['疾病衛教', '復健疾病', '症狀', '治療建議', '新竹復健'],
}

// SEO 用的麵包屑資料 (畫面不顯示)
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '首頁', item: 'https://dryichen-4ze1.vercel.app/' },
    { '@type': 'ListItem', position: 2, name: '疾病衛教', item: 'https://dryichen-4ze1.vercel.app/diseases' },
  ],
}

export default function DiseasesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      {/* 深色背景設定 */}
      <div className="min-h-screen flex flex-col bg-slate-900 text-slate-300">
        
        <main className="flex-grow py-12 md:py-16 fade-in">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* 標題區 (依照治療方式頁面的風格) */}
            <div className="flex items-center gap-3 mb-8 pl-2">
                <span className="bg-cyan-500/20 text-cyan-400 p-3 rounded-lg border border-cyan-500/30">
                    <i className="fa-solid fa-book-medical text-xl"></i>
                </span>
                <h1 className="text-3xl font-bold font-sans text-white">
                    疾病衛教 <span className="text-slate-500 text-lg font-normal ml-2">Diseases Info</span>
                </h1>
            </div>

            {/* 描述文字 */}
            <div className="mb-10 pl-2">
                <p className="text-xl text-slate-400 border-l-4 border-cyan-500 pl-4">
                    詳細的疾病介紹與治療建議，幫助您了解各種復健相關疾病
                </p>
            </div>
            
            {/* 卡片列表 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {diseaseCategories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/diseases/${category.slug}`}
                  // ✨ 套用深色半透明 + 霓虹邊框 + 懸浮上移效果
                  className="bg-slate-800/50 backdrop-blur border border-slate-700 p-6 rounded-xl hover:border-cyan-500/50 transition-all hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] group hover:-translate-y-1 cursor-pointer flex flex-col"
                >
                  {/* 卡片標題 */}
                  <h2 className="text-xl font-bold text-cyan-400 mb-3 group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                    {category.title}
                    {/* 小箭頭 */}
                    <i className="fa-solid fa-angle-right opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all text-sm"></i>
                  </h2>
                  
                  {/* 描述 */}
                  {category.description && (
                    <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow">
                      {category.description}
                    </p>
                  )}

                  {/* 底部區塊 (仿照治療方式的綠色邊框風格) */}
                  <div className="bg-slate-900/50 p-3 rounded border-l-2 border-green-500 mt-auto">
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="font-semibold text-slate-200 text-sm">收錄項目</h4>
                        <span className="text-xs bg-slate-800 text-green-400 px-2 py-0.5 rounded-full border border-green-900/50">
                            共 {category.diseases.length} 項
                        </span>
                      </div>
                      
                      {/* 列出前幾個疾病名稱作為預覽 */}
                      <p className="text-slate-500 text-xs truncate">
                        {category.diseases.map(d => d.title).join('、')}
                      </p>
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