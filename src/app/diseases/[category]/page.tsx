// src/app/diseases/[category]/page.tsx
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import { getCategoryBySlug, generateAllCategoryParams } from '@/data/diseases'

interface PageProps {
  params: {
    category: string
  }
}

export async function generateStaticParams() {
  return generateAllCategoryParams()
}

// SEO 設定
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const category = getCategoryBySlug(params.category)
  if (!category) return { title: '分類不存在' }

  return {
    title: `${category.title} - 疾病衛教 | 新竹宸新復健科`,
    description: category.seoDescription || category.description,
    keywords: category.seoKeywords,
  }
}

export default function DiseaseCategoryPage({ params }: PageProps) {
  const category = getCategoryBySlug(params.category)

  if (!category) {
    notFound()
  }

  const siteUrl = 'https://dryichen-4ze1.vercel.app'
  const currentUrl = `${siteUrl}/diseases/${category.slug}`

  // SEO: 麵包屑
  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '首頁', item: `${siteUrl}/` },
      { '@type': 'ListItem', position: 2, name: '疾病衛教', item: `${siteUrl}/diseases` },
      { '@type': 'ListItem', position: 3, name: category.title, item: currentUrl },
    ],
  }

  return (
    <>
      <JsonLd data={jsonLdBreadcrumb} />

      <div className="min-h-screen flex flex-col bg-slate-900 text-slate-300">
        
        <main className="flex-grow py-12 md:py-16 fade-in">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* 返回按鈕 */}
            <Link href="/diseases" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors group">
               <i className="fa-solid fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i> 
               返回衛教總覽
            </Link>

            {/* 標題區 */}
            <div className="mb-12 border-l-4 border-cyan-500 pl-6">
                <h1 className="text-4xl font-bold text-white mb-4">{category.title}</h1>
                <p className="text-xl text-slate-400">
                  {category.description}
                </p>
                {/* 顯示分類下的熱門關鍵字 (Tag) */}
                {category.seoKeywords && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {category.seoKeywords.map((kw, idx) => (
                      <span key={idx} className="text-xs bg-slate-800 text-cyan-500 px-2 py-1 rounded-full border border-slate-700">#{kw}</span>
                    ))}
                  </div>
                )}
            </div>
            
            {/* 疾病卡片列表 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.diseases.map((disease) => (
                <Link
                  key={disease.id}
                  href={`/diseases/${category.slug}/${disease.id}`}
                  className="group bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all duration-300 flex flex-col"
                >
                  {/* 圖片處理：優先使用該疾病的第一張圖，若無則用分類圖，再無則顯示 Icon */}
                  <div className="h-48 overflow-hidden relative bg-slate-800">
                    {disease.images && disease.images.length > 0 ? (
                        <img 
                          src={disease.images[0].src} 
                          alt={disease.images[0].alt}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                    ) : category.imageUrl ? (
                        <img 
                          src={category.imageUrl} 
                          alt={category.title}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 opacity-60 grayscale group-hover:grayscale-0"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center">
                           <i className="fa-solid fa-stethoscope text-4xl text-slate-600 group-hover:text-cyan-500 transition-colors"></i>
                        </div>
                    )}
                    
                    {/* 遮罩讓文字更清楚 */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                      <div className="flex justify-between items-start mb-3">
                        <h2 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                            {disease.title}
                        </h2>
                      </div>
                      
                      <p className="text-slate-400 mb-4 line-clamp-2 flex-grow text-sm leading-relaxed">
                         {disease.description}
                      </p>

                      {/* 顯示前幾個症狀標籤 */}
                      {disease.symptoms && disease.symptoms.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                            {disease.symptoms.slice(0, 3).map((symptom, idx) => (
                                <span key={idx} className="text-xs bg-slate-900 text-slate-300 px-2 py-1 rounded border border-slate-700">
                                    {symptom}
                                </span>
                            ))}
                        </div>
                      )}
                      
                      <div className="mt-auto text-right">
                         <span className="text-cyan-400 font-semibold text-sm group-hover:underline decoration-cyan-400/50 underline-offset-4">
                            了解更多及治療建議 <i className="fa-solid fa-arrow-right ml-1 text-xs"></i>
                         </span>
                      </div>
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