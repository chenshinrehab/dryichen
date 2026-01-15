// src/app/treatments/[slug]/page.tsx
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import { getTreatmentBySlug, getAllTreatmentSlugs } from '@/data/treatments'

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return getAllTreatmentSlugs()
}

// 1. 動態 Meta 設定 (SEO 核心)
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const treatment = getTreatmentBySlug(params.slug)
  if (!treatment) return { title: '項目不存在' }

  return {
    title: treatment.seoTitle || `${treatment.title} - 新竹宸新復健科`,
    description: treatment.seoDescription || treatment.description,
    keywords: treatment.keywords || ['新竹復健', '骨科', treatment.title],
  }
}

export default function TreatmentDetailPage({ params }: PageProps) {
  const treatment = getTreatmentBySlug(params.slug)
  if (!treatment) notFound()

  const siteUrl = 'https://www.dryichen.com.tw'
  const currentPageUrl = `${siteUrl}/treatments/${params.slug}`
  const qrCodeApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(currentPageUrl)}`

  // 2. Schema 結構化資料
  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '首頁', item: `${siteUrl}/` },
      { '@type': 'ListItem', position: 2, name: '治療方式', item: `${siteUrl}/treatments` },
      { '@type': 'ListItem', position: 3, name: treatment.title, item: currentPageUrl },
    ],
  }

  const jsonLdProcedure = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: treatment.title,
    description: treatment.seoDescription || treatment.description,
    bodyLocation: 'Whole body',
    procedureType: 'Non-surgical',
    howPerformed: '由專業醫師或治療師評估後執行',
    provider: {
      '@type': 'Physician',
      'name': '林羿辰 醫師',
      'url': `${siteUrl}/about/doctors`
    },
    location: {
      '@type': 'MedicalClinic',
      'name': '宸新復健科診所',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': '新竹市',
        'addressRegion': 'Hsinchu City',
        'addressCountry': 'TW'
      }
    }
  }

  return (
    <>
      <JsonLd data={jsonLdBreadcrumb} />
      <JsonLd data={jsonLdProcedure} />

      <div className="min-h-screen flex flex-col bg-slate-900 text-slate-300">
        
        <main className="flex-grow py-8 md:py-12 fade-in relative z-10">
           <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

              <Link href="/treatments" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-6 transition-colors group">
                 <i className="fa-solid fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i> 
                 返回治療列表
              </Link>
              
              <div className="bg-slate-800/80 backdrop-blur border border-slate-700 rounded-2xl overflow-hidden shadow-2xl p-4 md:p-8">
                  
                  {/* Header */}
                  <div className="mb-8 border-l-4 border-cyan-500 pl-4 bg-gradient-to-r from-slate-900/50 to-transparent py-4 rounded-r-xl flex items-center gap-6">
                      <div className="hidden md:block bg-white p-1 rounded-lg shrink-0 group relative shadow-lg">
                          <img className="w-20 h-20 object-contain" src={qrCodeApiUrl} alt={`掃描預約 ${treatment.title}`} />
                          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-max bg-slate-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                            掃描此頁面
                          </div>
                      </div>
                      
                      <div>
                          <h1 className="text-3xl md:text-4xl font-bold font-sans text-white mb-2 tracking-wide">{treatment.title}</h1>
                          {treatment.subtitle && <h2 className="text-xl text-cyan-400 font-medium">{treatment.subtitle}</h2>}
                      </div>
                  </div>

                  {/* 兩欄資訊區 */}
                  {(treatment.whyChooseUs || treatment.treatmentFocus) && (
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {treatment.whyChooseUs && (
                          <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700 h-full hover:border-cyan-500/30 transition-colors">
                              <h4 className="text-xl font-bold text-white mb-4 border-b border-slate-600 pb-2 flex items-center">
                                <i className="fa-solid fa-thumbs-up text-cyan-500 mr-2 text-base"></i>
                                為什麼選擇宸新
                              </h4>
                              <ul className="space-y-3 text-slate-300 list-disc list-inside">
                                  {treatment.whyChooseUs.map((item, idx) => (
                                    <li key={idx} dangerouslySetInnerHTML={{__html: item}} className="leading-relaxed"></li>
                                  ))}
                              </ul>
                          </div>
                        )}

                        {treatment.treatmentFocus && (
                          <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700 h-full hover:border-pink-500/30 transition-colors">
                              <h4 className="text-xl font-bold text-white mb-4 border-b border-slate-600 pb-2 flex items-center">
                                <i className="fa-solid fa-crosshairs text-pink-500 mr-2 text-base"></i>
                                治療重點
                              </h4>
                              <ul className="space-y-3 text-slate-300 list-disc list-inside">
                                  {treatment.treatmentFocus.map((item, idx) => (
                                    <li key={idx} className="leading-relaxed">{item}</li>
                                  ))}
                              </ul>
                          </div>
                        )}
                    </div>
                  )}

                  {/* 內容說明區 (主文) */}
                  {/* ✨ 樣式修正：
                      1. strong 變青色
                      2. h3 變大且維持灰白色
                      3. img 圖片在電腦版寬度設為 85% (md:[&_img]:w-[85%]) 並置中
                  */}
                  <div className="text-slate-300 leading-relaxed text-lg mb-8 border-b border-slate-700 pb-6 article-content
                    [&_strong]:!text-cyan-400 [&_strong]:font-bold
                    [&_h3]:!text-slate-300 [&_h3]:!text-[1.75rem] [&_h3]:font-bold [&_h3]:mt-8 [&_h3]:mb-4
                    [&_img]:w-full md:[&_img]:w-[85%] [&_img]:mx-auto [&_img]:rounded-lg [&_img]:shadow-lg [&_img]:border [&_img]:border-slate-700
                  ">
                      {treatment.contentHtml ? (
                          <div dangerouslySetInnerHTML={{ __html: treatment.contentHtml }} />
                      ) : (
                          <p>{treatment.description}</p>
                      )}
                  </div>

                  {/* YouTube 影片區塊 */}
                  {treatment.youtubeVideoId && (
                    <div className="mb-12 text-center">
                        <div className="w-full md:w-3/4 mx-auto">
                             <div className="relative w-full pb-[56.25%] rounded-xl overflow-hidden shadow-2xl border border-slate-700 group">
                                <iframe 
                                    src={`https://www.youtube.com/embed/${treatment.youtubeVideoId}`} 
                                    title={`${treatment.title} 治療介紹影片`}
                                    className="absolute top-0 left-0 w-full h-full" 
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen
                                    loading="lazy"
                                ></iframe>
                             </div>
                        </div>
                    </div>
                  )}

                  {/* 圖片展示區 */}
                  {treatment.images && treatment.images.length > 0 && (
                    <div className="space-y-8 mb-12">
                      {treatment.images.map((img, idx) => (
                        <div key={idx} className="text-center group">
                           {/* ✨ 修改處：將電腦版寬度從 md:w-3/4 (75%) 改為 md:w-[85%] 以符合您的需求 */}
                           <div className="relative overflow-hidden rounded-lg shadow-lg inline-block w-full md:w-[85%] border border-slate-700">
                             <img src={img.src} alt={img.alt} className="w-full h-auto transform group-hover:scale-[1.02] transition-transform duration-500" />
                           </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* 常見問答 (Q&A) 區塊 */}
                  {treatment.qaList && treatment.qaList.length > 0 && (
                    <div className="mt-8">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                          <i className="fa-regular fa-circle-question text-cyan-400 mr-3"></i>
                          常見問答
                        </h3>
                        
                        <div className="space-y-4">
                          {treatment.qaList.map((qa, idx) => (
                             <details key={idx} className="group bg-slate-900/50 rounded-xl border border-slate-700 overflow-hidden open:border-cyan-500/50 transition-all">
                                <summary className="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-slate-800/50 transition-colors">
                                   <h4 className="font-bold text-lg text-white flex items-center">
                                     <span className="text-cyan-500 mr-3 font-black">Q{idx + 1}.</span>
                                     {qa.question}
                                   </h4>
                                   <span className="text-cyan-500 group-open:rotate-180 transition-transform duration-300">
                                      <i className="fa-solid fa-chevron-down"></i>
                                   </span>
                                </summary>
                                <div className="px-5 pb-5 pt-0 text-slate-300 leading-relaxed pl-12">
                                   <p className="border-l-2 border-slate-600 pl-4 py-1">
                                     {qa.answer}
                                   </p>
                                </div>
                             </details>
                          ))}
                        </div>
                    </div>
                  )}

              </div>
           </div>
        </main>
      </div>
    </>
  )
}