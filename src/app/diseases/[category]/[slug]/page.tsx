// src/app/diseases/[category]/[slug]/page.tsx
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import { getDiseaseBySlug, generateAllDiseaseParams } from '@/data/diseases'

interface PageProps {
  params: {
    category: string
    slug: string
  }
}

// 1. 產生靜態路徑 (支援 [category]/[slug] 雙層路由)
export async function generateStaticParams() {
  return generateAllDiseaseParams()
}

// 2. SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const disease = getDiseaseBySlug(params.category, params.slug)
  if (!disease) return { title: '疾病介紹不存在' }

  return {
    title: `${disease.title} - 疾病衛教 | 新竹宸新復健科`,
    description: disease.seoDescription || disease.description,
    keywords: disease.seoKeywords,
  }
}

export default function DiseaseDetailPage({ params }: PageProps) {
  const disease = getDiseaseBySlug(params.category, params.slug)
  if (!disease) notFound()

  // 自動生成 QR Code 與網址
  const siteUrl = 'https://dryichen-4ze1.vercel.app'
  const currentPageUrl = `${siteUrl}/diseases/${params.category}/${params.slug}`
  const qrCodeApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(currentPageUrl)}`

  // SEO: 麵包屑 + 醫療狀況 (MedicalCondition)
  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '首頁', item: `${siteUrl}/` },
      { '@type': 'ListItem', position: 2, name: '疾病衛教', item: `${siteUrl}/diseases` },
      { '@type': 'ListItem', position: 3, name: disease.title, item: currentPageUrl },
    ],
  }

  const jsonLdCondition = {
    '@context': 'https://schema.org',
    '@type': 'MedicalCondition',
    name: disease.title,
    description: disease.description,
    possibleTreatment: disease.treatments.map(t => ({ '@type': 'MedicalTherapy', name: t })),
    signOrSymptom: disease.symptoms.map(s => ({ '@type': 'MedicalSymptom', name: s })),
  }

  return (
    <>
      <JsonLd data={jsonLdBreadcrumb} />
      <JsonLd data={jsonLdCondition} />
      
      <div className="min-h-screen flex flex-col bg-slate-900 text-slate-300">
        
        <main className="flex-grow py-8 md:py-12 fade-in relative z-10">
           <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

              {/* 返回按鈕：回到該分類頁面 (若無分類頁則回總表) */}
              <Link href="/diseases" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-6 transition-colors group">
                 <i className="fa-solid fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i> 
                 返回衛教列表
              </Link>
              
              <div className="bg-slate-800/80 backdrop-blur border border-slate-700 rounded-2xl overflow-hidden shadow-2xl p-4 md:p-8">
                  
                  {/* Header: 標題與 QR Code */}
                  <div className="mb-8 border-l-4 border-cyan-500 pl-4 bg-gradient-to-r from-slate-900/50 to-transparent py-4 rounded-r-xl flex items-center gap-6">
                      <div className="hidden md:block bg-white p-1 rounded-lg shrink-0 group relative">
                          <img className="w-20 h-20 object-contain" src={qrCodeApiUrl} alt={`掃描閱讀 ${disease.title}`} />
                          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-max bg-slate-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                            掃描此頁面
                          </div>
                      </div>
                      <div>
                          <h1 className="text-3xl md:text-4xl font-bold font-sans text-white mb-2">{disease.title}</h1>
                          <div className="flex flex-wrap gap-2 mt-2">
                             {disease.seoKeywords?.slice(0,3).map((kw, i) => (
                               <span key={i} className="text-xs bg-slate-700 text-cyan-400 px-2 py-1 rounded-full border border-slate-600">#{kw}</span>
                             ))}
                          </div>
                      </div>
                  </div>

                  {/* 內容說明區 */}
                  {disease.contentHtml ? (
                    <div className="text-slate-300 leading-relaxed text-lg mb-8 border-b border-slate-700 pb-6" dangerouslySetInnerHTML={{ __html: disease.contentHtml }} />
                  ) : (
                    <p className="text-slate-300 leading-relaxed text-lg mb-8 border-b border-slate-700 pb-6">
                       {disease.content || disease.description}
                    </p>
                  )}

                  {/* 症狀與治療 - 雙欄呈現 */}
                  <div className="grid md:grid-cols-2 gap-8 mb-12">
                      {/* 症狀 */}
                      <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700 h-full">
                          <h4 className="text-xl font-bold text-white mb-4 border-b border-slate-600 pb-2 flex items-center">
                            <i className="fa-solid fa-triangle-exclamation text-pink-500 mr-2"></i>
                            常見症狀
                          </h4>
                          <ul className="space-y-3 text-slate-300 list-disc list-inside">
                              {disease.symptoms.map((item, idx) => (
                                <li key={idx}>{item}</li>
                              ))}
                          </ul>
                      </div>

                      {/* 治療建議 */}
                      <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700 h-full">
                          <h4 className="text-xl font-bold text-white mb-4 border-b border-slate-600 pb-2 flex items-center">
                            <i className="fa-solid fa-user-doctor text-cyan-500 mr-2"></i>
                            治療建議
                          </h4>
                          <ul className="space-y-3 text-slate-300 list-disc list-inside">
                              {disease.treatments.map((item, idx) => (
                                <li key={idx}>{item}</li>
                              ))}
                          </ul>
                      </div>
                  </div>

                  {/* 圖片展示區 (無文字，SEO alt保留) */}
                  {disease.images && disease.images.length > 0 && (
                    <div className="space-y-8">
                      {disease.images.map((img, idx) => (
                        <div key={idx} className="text-center group">
                           <div className="relative overflow-hidden rounded-lg shadow-lg inline-block w-full md:w-3/4">
                             <img 
                               src={img.src} 
                               alt={img.alt} 
                               className="w-full h-auto transform group-hover:scale-[1.02] transition-transform duration-500" 
                             />
                           </div>
                        </div>
                      ))}
                    </div>
                  )}

              </div>
           </div>
        </main>
      </div>
    </>
  )
}