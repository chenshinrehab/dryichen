import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import { getWeightLossProgramBySlug, getAllWeightLossProgramSlugs } from '@/data/weightLoss'

// 定義常數
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.dryichen.com.tw'

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
    title: program.seoTitle || `${program.title} - 新竹減重與骨齡門診`,
    description: program.seoDescription || program.description,
    keywords: program.keywords || ['新竹減重', '瘦瘦針', '骨齡', '兒童生長'],
    openGraph: {
      title: program.title,
      description: program.seoDescription || program.description,
      url: `${SITE_URL}/weight-bone/${params.slug}`,
      type: 'article',
      images: program.images && program.images.length > 0 ? [program.images[0].src] : [],
    }
  }
}

export default function WeightBoneDetailPage({ params }: PageProps) {
  const program = getWeightLossProgramBySlug(params.slug)
  if (!program) notFound()

  const currentPageUrl = `${SITE_URL}/weight-bone/${params.slug}`
  const qrCodeApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&bgcolor=ffffff&data=${encodeURIComponent(currentPageUrl)}`

  // 2. Schema: 麵包屑
  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '首頁', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: '減重與骨齡', item: `${SITE_URL}/weight-bone` },
      { '@type': 'ListItem', position: 3, name: program.title, item: currentPageUrl },
    ],
  }

  // 3. Schema: 醫療服務 (Service)
  const jsonLdService = {
    '@context': 'https://schema.org',
    '@type': 'Service', // 對於減重課程或骨齡評估，Service 是合適的
    name: program.title,
    description: program.seoDescription || program.description,
    provider: {
      '@type': 'MedicalClinic',
      'name': '宸新復健科診所',
      'image': `${SITE_URL}/logo.png`, // 建議確認路徑
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': '新竹市',
        'addressRegion': 'Hsinchu City',
        'addressCountry': 'TW'
      }
    },
    image: program.images && program.images.length > 0 ? program.images.map(img => img.src) : undefined,
    areaServed: {
       '@type': 'City',
       'name': 'Hsinchu'
    },
    // 加入專科標記
    serviceType: ['Medical Weight Loss', 'Bone Age Assessment'],
  }

  // 4. Schema: FAQ (自動生成問答結構化資料)
  const jsonLdFAQ = program.qaList && program.qaList.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: program.qaList.map(qa => ({
      '@type': 'Question',
      name: qa.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: qa.answer
      }
    }))
  } : null;

  return (
    <>
      <JsonLd data={jsonLdBreadcrumb} />
      <JsonLd data={jsonLdService} />
      {jsonLdFAQ && <JsonLd data={jsonLdFAQ} />}
      
      {/* 樣式控制：保持與治療頁面一致 */}
      <style dangerouslySetInnerHTML={{__html: `
        /* 重點文字 (strong) - 青色 */
        .article-content strong {
            color: #22d3ee !important; /* Cyan-400 */
            font-weight: 700;
        }

        /* 超連結 (a) - 桃紅色 */
        .article-content a {
            color: #ec4899 !important; /* Pink-500 */
            font-weight: 600;
            text-decoration: none;
            border-bottom: 1px dashed #ec4899;
            transition: all 0.2s ease;
        }

        .article-content a:hover {
            color: #db2777 !important; /* Pink-600 */
            border-bottom-style: solid;
        }

        /* 內容標題樣式 */
        .article-content h3 {
            font-size: 1.5rem;
            font-weight: 700;
            color: white;
            margin-top: 2.5rem;
            margin-bottom: 1.25rem;
            display: flex;
            align-items: center;
        }
        
        .article-content h3::before {
            content: '';
            display: inline-block;
            width: 6px;
            height: 24px;
            background-color: #06b6d4; /* Cyan-500 */
            margin-right: 12px;
            border-radius: 2px;
        }

        /* 圖片寬度限制 (針對 article-content 內的圖片) */
        .article-content img {
            max-width: 100%;
            height: auto;
            border-radius: 0.75rem;
            margin: 2rem auto;
            display: block;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
            border: 1px solid #475569;
        }

        /* 電腦版圖片寬度調整 (85% + 置中) */
        @media (min-width: 768px) {
            .article-content img {
                max-width: 85%;
            }
        }
        
        /* 列表樣式 */
        .article-content ul {
            list-style-type: disc;
            padding-left: 1.5rem;
            margin-bottom: 1.5rem;
            color: #cbd5e1;
        }
        .article-content li {
            margin-bottom: 0.5rem;
        }
      `}} />

      <div className="min-h-screen flex flex-col bg-slate-900 text-slate-300">
        
        <main className="flex-grow pt-4 pb-12 md:py-12 fade-in relative z-10">
           <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

              {/* 返回按鈕 */}
              <Link href="/weight-bone" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-6 transition-colors group">
                 <i className="fa-solid fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i> 
                 返回列表
              </Link>
              
              <div className="bg-slate-800/80 backdrop-blur border border-slate-700 rounded-2xl overflow-hidden shadow-2xl">
                 
                 <div className="p-4 md:p-10">

                    {/* Header: 標題與 QR Code */}
                    <div className="mb-10 border-l-4 border-cyan-500 pl-4 bg-gradient-to-r from-slate-900/80 to-transparent py-6 rounded-r-xl flex flex-col md:flex-row md:items-center gap-6">
                        <div className="hidden md:block bg-white p-2 rounded-lg shrink-0 group relative shadow-lg ring-2 ring-slate-700">
                           <img 
                            className="w-24 h-24 object-contain" 
                            src={qrCodeApiUrl} 
                            alt={`掃描預約 ${program.title}`} 
                           />
                           <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-max bg-slate-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-slate-600">
                             掃描帶走資訊
                           </div>
                        </div>
                        
                        <div>
                           <h1 className="text-3xl md:text-5xl font-bold font-sans text-white mb-3 tracking-wide leading-tight">{program.title}</h1>
                           {program.subtitle && <h2 className="text-xl text-cyan-400 font-medium tracking-wide">{program.subtitle}</h2>}
                        </div>
                    </div>

                    {/* 特色與優點 (Grid) */}
                    {(program.whyChooseUs || program.programBenefits) && (
                      <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
                          {program.whyChooseUs && (
                            <div className="bg-slate-900/40 p-6 rounded-xl border border-slate-700/80 h-full hover:border-cyan-500/30 hover:bg-slate-900/60 transition-all duration-300">
                                <h4 className="text-xl font-bold text-cyan-400 mb-4 border-b border-slate-700 pb-2 flex items-center">
                                  <i className="fa-solid fa-star mr-3"></i>
                                  我們的特色
                                </h4>
                                <ul className="space-y-3 text-slate-300">
                                    {program.whyChooseUs.map((item, idx) => (
                                      <li key={idx} className="flex items-start">
                                         <span className="text-cyan-500 mr-2 mt-1.5 text-xs">●</span>
                                         <span dangerouslySetInnerHTML={{__html: item}} className="leading-relaxed"></span>
                                      </li>
                                    ))}
                                </ul>
                            </div>
                          )}

                          {program.programBenefits && (
                            <div className="bg-slate-900/40 p-6 rounded-xl border border-slate-700/80 h-full hover:border-pink-500/30 hover:bg-slate-900/60 transition-all duration-300">
                                <h4 className="text-xl font-bold text-pink-400 mb-4 border-b border-slate-700 pb-2 flex items-center">
                                  <i className={`${program.benefitsIconClass || 'fa-solid fa-thumbs-up'} mr-3`}></i>
                                  {program.benefitsTitle || '療程優點'}
                                </h4>
                                <ul className="space-y-3 text-slate-300">
                                    {program.programBenefits.map((item, idx) => (
                                      <li key={idx} className="flex items-start">
                                         <span className="text-pink-500 mr-2 mt-1.5 text-xs">●</span>
                                         <span className="leading-relaxed">{item}</span>
                                      </li>
                                    ))}
                                </ul>
                            </div>
                          )}
                      </div>
                    )}

                    {/* 內容說明區 (主文) */}
                    <div className="article-content text-slate-300 leading-relaxed text-lg mb-10 pb-8 border-b border-slate-700/50">
                        {program.contentHtml ? (
                            <div dangerouslySetInnerHTML={{ __html: program.contentHtml }} />
                        ) : (
                            <p>{program.description}</p>
                        )}
                    </div>

                    {/* 圖片展示區 (使用與治療頁面相同的樣式) */}
                    {program.images && program.images.length > 0 && (
                      <div className="space-y-8 mb-14">
                        {program.images.map((img, idx) => (
                          <div key={idx} className="text-center group">
                             {/* 使用 inline-block 和 w-[85%] 確保與內文圖片一致 */}
                             <div className="relative overflow-hidden rounded-xl shadow-xl inline-block w-full md:w-[85%] border border-slate-700 bg-slate-900">
                               <img src={img.src} alt={img.alt} className="w-full h-auto transform group-hover:scale-[1.02] transition-transform duration-700 block" />
                             </div>
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
                               <details key={idx} className="group bg-slate-900/30 rounded-xl border border-slate-700 overflow-hidden open:border-cyan-500/50 open:bg-slate-900/60 transition-all duration-300">
                                  <summary className="flex items-start justify-between p-5 cursor-pointer list-none hover:bg-slate-800/50 transition-colors">
                                      <h4 className="font-bold text-lg text-slate-200 flex items-start group-hover:text-cyan-300 transition-colors">
                                        <span className="text-cyan-500 mr-3 font-black mt-0.5">Q{idx + 1}.</span>
                                        <span className="leading-relaxed">{qa.question}</span>
                                      </h4>
                                      <span className="text-slate-500 group-hover:text-cyan-400 group-open:rotate-180 group-open:text-cyan-500 transition-all duration-300 ml-4 mt-1 shrink-0">
                                         <i className="fa-solid fa-chevron-down"></i>
                                      </span>
                                  </summary>
                                  <div className="px-6 pb-6 pt-0 text-slate-300 leading-relaxed ml-0 md:ml-10">
                                     <div className="border-l-2 border-slate-600 pl-4 py-1 text-base md:text-lg animate-in fade-in slide-in-from-top-2">
                                       {qa.answer}
                                     </div>
                                  </div>
                               </details>
                            ))}
                          </div>
                      </div>
                    )}
                    
                 </div> {/* End padding */}

              </div>
           </div>
        </main>
      </div>
    </>
  )
}