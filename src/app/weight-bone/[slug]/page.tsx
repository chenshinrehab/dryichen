// src/app/weight-bone/[slug]/page.tsx
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import { getWeightLossProgramBySlug, getAllWeightLossProgramSlugs } from '@/data/weightLoss'

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return getAllWeightLossProgramSlugs()
}

// 1. 動態 Meta 設定 (SEO 核心)
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const program = getWeightLossProgramBySlug(params.slug)
  if (!program) return { title: '項目不存在' }

  return {
    // 優先使用 seoTitle，沒有則用預設
    title: program.seoTitle || `${program.title} - 新竹減重與骨齡門診`,
    description: program.seoDescription || program.description,
    keywords: program.keywords || ['新竹減重', '瘦瘦針', '骨齡'],
  }
}

export default function WeightBoneDetailPage({ params }: PageProps) {
  const program = getWeightLossProgramBySlug(params.slug)
  if (!program) notFound()

  const siteUrl = 'https://www.dryichen.com.tw'
  const currentPageUrl = `${siteUrl}/weight-bone/${params.slug}`
  const qrCodeApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(currentPageUrl)}`

  // 2. Schema 結構化資料
  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '首頁', item: `${siteUrl}/` },
      { '@type': 'ListItem', position: 2, name: '減重與骨齡', item: `${siteUrl}/weight-bone` },
      { '@type': 'ListItem', position: 3, name: program.title, item: currentPageUrl },
    ],
  }

  // 使用 Product 或 Service 標記醫療服務
  const jsonLdProduct = {
    '@context': 'https://schema.org',
    '@type': 'Service', // 改用 Service 對醫療項目更準確
    name: program.title,
    description: program.seoDescription || program.description,
    provider: {
      '@type': 'MedicalClinic',
      'name': '宸新復健科診所',
      'image': 'https://dryichen-4ze1.vercel.app/logo.png', // 建議補上 logo
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': '新竹市',
        'addressRegion': 'Hsinchu City'
      }
    },
    image: program.images && program.images.length > 0 ? `${siteUrl}${program.images[0].src}` : undefined,
    areaServed: {
       '@type': 'City',
       'name': 'Hsinchu'
    }
  }

  return (
    <>
      <JsonLd data={jsonLdBreadcrumb} />
      <JsonLd data={jsonLdProduct} />
      
      <div className="min-h-screen flex flex-col bg-slate-900 text-slate-300">
        
        <main className="flex-grow py-8 md:py-12 fade-in relative z-10">
           <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

              <Link href="/weight-bone" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-6 transition-colors group">
                 <i className="fa-solid fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i> 
                 返回列表
              </Link>
              
              <div className="bg-slate-800/80 backdrop-blur border border-slate-700 rounded-2xl overflow-hidden shadow-2xl p-4 md:p-8">
                  
                  {/* Header */}
                  <div className="mb-8 border-l-4 border-cyan-500 pl-4 bg-gradient-to-r from-slate-900/50 to-transparent py-4 rounded-r-xl flex items-center gap-6">
                      <div className="hidden md:block bg-white p-1 rounded-lg shrink-0 group relative shadow-lg">
                          <img 
                            className="w-20 h-20 object-contain" 
                            src={qrCodeApiUrl} 
                            alt={`掃描預約 ${program.title}`}
                          />
                          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-max bg-slate-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                            掃描此頁面
                          </div>
                      </div>
                      
                      <div>
                          <h1 className="text-3xl md:text-4xl font-bold font-sans text-white mb-2 tracking-wide">{program.title}</h1>
                          {program.subtitle && <h2 className="text-xl text-cyan-400 font-medium">{program.subtitle}</h2>}
                      </div>
                  </div>

                  {/* ✨ 1. 特色與優點 (移動到這裡，位於主文上方) */}
                  {(program.whyChooseUs || program.programBenefits) && (
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {program.whyChooseUs && (
                          <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700 h-full hover:border-cyan-500/30 transition-colors">
                              <h4 className="text-xl font-bold text-white mb-4 border-b border-slate-600 pb-2 flex items-center">
                                <i className="fa-solid fa-star text-cyan-500 mr-2 text-base"></i>
                                我們的特色
                              </h4>
                              <ul className="space-y-3 text-slate-300 list-disc list-inside">
                                  {program.whyChooseUs.map((item, idx) => (
                                    <li key={idx} dangerouslySetInnerHTML={{__html: item}} className="leading-relaxed"></li>
                                  ))}
                              </ul>
                          </div>
                        )}
                        {program.programBenefits && (
                          <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700 h-full hover:border-pink-500/30 transition-colors">
                              <h4 className="text-xl font-bold text-white mb-4 border-b border-slate-600 pb-2 flex items-center">
                                <i className={`${program.benefitsIconClass || 'fa-solid fa-thumbs-up text-pink-500'} mr-2 text-base`}></i>
                                {program.benefitsTitle || '療程優點'}
                              </h4>
                              <ul className="space-y-3 text-slate-300 list-disc list-inside">
                                  {program.programBenefits.map((item, idx) => (
                                    <li key={idx} className="leading-relaxed">{item}</li>
                                  ))}
                              </ul>
                          </div>
                        )}
                    </div>
                  )}

                  {/* 內容說明區 (主文) */}
                  {/* ✨ 樣式修正：
                      2. strong 變青色
                      3. h3 變大且維持灰白色
                      4. img 圖片在電腦版寬度設為 85% (md:[&_img]:w-[85%]) 並置中
                  */}
                  <div className="text-slate-300 leading-relaxed text-lg mb-8 border-b border-slate-700 pb-6 article-content
                    [&_strong]:!text-cyan-400 [&_strong]:font-bold
                    [&_h3]:!text-slate-300 [&_h3]:!text-[1.75rem] [&_h3]:font-bold [&_h3]:mt-8 [&_h3]:mb-4
                    [&_img]:w-full md:[&_img]:w-[85%] [&_img]:mx-auto [&_img]:rounded-lg [&_img]:shadow-lg [&_img]:border [&_img]:border-slate-700
                  ">
                      {program.contentHtml ? (
                          <div dangerouslySetInnerHTML={{ __html: program.contentHtml }} />
                      ) : (
                          <p>{program.description}</p>
                      )}
                  </div>

                  {/* 圖片區 (修正：移除文字，保留 Alt SEO) */}
                  {program.images && program.images.length > 0 && (
                    <div className="space-y-8 mb-12">
                      {program.images.map((img, idx) => (
                        <div key={idx} className="text-center group">
                           {/* ✨ 4. 修改處：將電腦版寬度設定為 md:w-[85%] */}
                           <div className="relative overflow-hidden rounded-lg shadow-lg inline-block w-full md:w-[85%] border border-slate-700">
                             <img src={img.src} alt={img.alt} className="w-full h-auto transform group-hover:scale-[1.02] transition-transform duration-500" />
                           </div>
                           {/* 原本下方的文字標籤已移除，隱藏文字說明但保留 alt */}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* 常見問答 (Q&A) 區塊 */}
                  {program.qaList && program.qaList.length > 0 && (
                    <div className="mt-8">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                          <i className="fa-regular fa-circle-question text-cyan-400 mr-3"></i>
                          常見問答
                        </h3>
                        
                        <div className="space-y-4">
                          {program.qaList.map((qa, idx) => (
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