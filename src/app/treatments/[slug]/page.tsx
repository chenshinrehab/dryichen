import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import { getTreatmentBySlug, getAllTreatmentSlugs } from '@/data/treatments'
import ShareButtons from '@/components/ShareButtons'

// 定義常數
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.dryichen.com.tw'

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
    openGraph: {
      title: treatment.title,
      description: treatment.seoDescription || treatment.description,
      url: `${SITE_URL}/treatments/${params.slug}`,
      type: 'article',
      images: treatment.images && treatment.images.length > 0 ? [treatment.images[0].src] : [],
    }
  }
}

export default function TreatmentDetailPage({ params }: PageProps) {
  const treatment = getTreatmentBySlug(params.slug)
  if (!treatment) notFound()

  const currentPageUrl = `${SITE_URL}/treatments/${params.slug}`
  const qrCodeApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&bgcolor=ffffff&data=${encodeURIComponent(currentPageUrl)}`

  // 2. Schema: 麵包屑
  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '首頁', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: '治療方式', item: `${SITE_URL}/treatments` },
      { '@type': 'ListItem', position: 3, name: treatment.title, item: currentPageUrl },
    ],
  }

  // 3. Schema: 醫療程序 (優化版：加入專科、圖片、更精確的類別)
  const jsonLdProcedure = {
    '@context': 'https://schema.org',
    '@type': 'TherapeuticProcedure', // 更精確，指「治療性處置」
    name: treatment.title,
    description: treatment.seoDescription || treatment.description,
    procedureType: 'Non-surgical',
    // 加入圖片，增加豐富搜尋結果顯示機會
    image: treatment.images && treatment.images.length > 0 
      ? treatment.images.map(img => img.src) 
      : undefined,
    // 標註專科：復健科與骨科
    medicalSpecialty: [
      { '@type': 'MedicalSpecialty', name: 'Physical Medicine and Rehabilitation' },
      { '@type': 'MedicalSpecialty', name: 'Orthopedics' }
    ],
    bodyLocation: 'Musculoskeletal system', // 肌肉骨骼系統
    howPerformed: '由專業醫師透過超音波導引或理學檢查評估後執行',
    provider: {
      '@type': 'Physician',
      'name': '林羿辰 醫師',
      'url': `${SITE_URL}/about/doctors`
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

  // 4. Schema: FAQ (如果有 Q&A 資料自動產生)
  const jsonLdFAQ = treatment.qaList && treatment.qaList.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: treatment.qaList.map(qa => ({
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
      <JsonLd data={jsonLdProcedure} />
      {jsonLdFAQ && <JsonLd data={jsonLdFAQ} />}

      {/* 樣式控制：保持與疾病頁面一致 */}
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
            font-size: 1.5rem; /* text-2xl */
            font-weight: 700;
            color: white;
            margin-top: 2.5rem;
            margin-bottom: 1.25rem;
            display: flex;
            align-items: center;
        }
        
        /* 標題前的小裝飾 */
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
            color: #cbd5e1; /* slate-300 */
        }
        .article-content li {
            margin-bottom: 0.5rem;
        }
      `}} />

      <div className="min-h-screen flex flex-col bg-slate-900 text-slate-300">
        
        <main className="flex-grow pt-4 pb-12 md:py-12 fade-in relative z-10">
           <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

              {/* 返回按鈕 */}
              <Link href="/treatments" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-6 transition-colors group">
                 <i className="fa-solid fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i> 
                 返回治療列表
              </Link>
              
              <div className="bg-slate-800/80 backdrop-blur border border-slate-700 rounded-2xl overflow-hidden shadow-2xl">
                 
                 <div className="p-4 md:p-10">

                    {/* Header: 標題與 QR Code */}
                    <div className="mb-10 border-l-4 border-cyan-500 pl-4 bg-gradient-to-r from-slate-900/80 to-transparent py-6 rounded-r-xl flex flex-col md:flex-row md:items-center gap-6">
                        <div className="hidden md:block bg-white p-2 rounded-lg shrink-0 group relative shadow-lg ring-2 ring-slate-700">
                           <img className="w-24 h-24 object-contain" src={qrCodeApiUrl} alt={`掃描預約 ${treatment.title}`} />
                           <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-max bg-slate-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-slate-600">
                             掃描帶走資訊
                           </div>
                        </div>
                        
                        <div>
                           <h1 className="text-3xl md:text-5xl font-bold font-sans text-white mb-3 tracking-wide leading-tight">{treatment.title}</h1>
                           {treatment.subtitle && <h2 className="text-xl text-cyan-400 font-medium tracking-wide">{treatment.subtitle}</h2>}
                        </div>
                    </div>

                    {/* 兩欄資訊區 (Why Choose Us & Focus) */}
                    {(treatment.whyChooseUs || treatment.treatmentFocus) && (
                      <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
                          {treatment.whyChooseUs && (
                            <div className="bg-slate-900/40 p-6 rounded-xl border border-slate-700/80 h-full hover:border-cyan-500/30 hover:bg-slate-900/60 transition-all duration-300">
                                <h4 className="text-xl font-bold text-cyan-400 mb-4 border-b border-slate-700 pb-2 flex items-center">
                                  <i className="fa-solid fa-thumbs-up mr-3"></i>
                                  為什麼選擇宸新
                                </h4>
                                <ul className="space-y-3 text-slate-300">
                                    {treatment.whyChooseUs.map((item, idx) => (
                                      <li key={idx} className="flex items-start">
                                         <span className="text-cyan-500 mr-2 mt-1.5 text-xs">●</span>
                                         <span dangerouslySetInnerHTML={{__html: item}} className="leading-relaxed"></span>
                                      </li>
                                    ))}
                                </ul>
                            </div>
                          )}

                          {treatment.treatmentFocus && (
                            <div className="bg-slate-900/40 p-6 rounded-xl border border-slate-700/80 h-full hover:border-pink-500/30 hover:bg-slate-900/60 transition-all duration-300">
                                <h4 className="text-xl font-bold text-pink-400 mb-4 border-b border-slate-700 pb-2 flex items-center">
                                  <i className="fa-solid fa-crosshairs mr-3"></i>
                                  治療重點
                                </h4>
                                <ul className="space-y-3 text-slate-300">
                                    {treatment.treatmentFocus.map((item, idx) => (
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
                        {treatment.contentHtml ? (
                            <div dangerouslySetInnerHTML={{ __html: treatment.contentHtml }} />
                        ) : (
                            <p>{treatment.description}</p>
                        )}
                    </div>

                    {/* YouTube 影片區塊 */}
                    {treatment.youtubeVideoId && (
                      <div className="mb-14 text-center">
                          <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
                              <i className="fa-brands fa-youtube text-red-500 mr-3 text-3xl"></i>
                              治療過程/介紹影片
                          </h3>
                          <div className="w-full md:w-[85%] mx-auto">
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
                      <div className="space-y-8 mb-14">
                        {treatment.images.map((img, idx) => (
                          <div key={idx} className="text-center group">
                             {/* 這裡使用 w-[85%] 確保與內文圖片寬度一致 */}
                             <div className="relative overflow-hidden rounded-xl shadow-xl inline-block w-full md:w-[85%] border border-slate-700 bg-slate-900">
                               <img src={img.src} alt={img.alt} className="w-full h-auto transform group-hover:scale-[1.02] transition-transform duration-700 block" />
                             </div>
                             {/* 已移除 caption 以避免型別錯誤 */}
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
              {/* 底部分享區塊 */}
              <div className="bg-slate-900/80 p-8 md:p-12 border-t border-slate-700 text-center relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent blur-sm"></div>
                
                <h3 className="text-white font-bold text-2xl mb-3 relative z-10">覺得這篇文章有幫助嗎？</h3>
                <p className="text-slate-400 mb-8 text-lg relative z-10">歡迎分享給親朋好友，讓更多人獲得正確的復健知識。</p>

                <div className="relative z-10">
                   <ShareButtons url={currentPageUrl} title={treatment.title} />
                </div>

                <div className="mt-12 pt-8 border-t border-slate-700/50 relative z-10">
                  <Link
                    href="/treatments"
                    className="inline-flex items-center justify-center px-8 py-3.5 text-lg font-bold text-cyan-400 border border-cyan-500/30 rounded-full hover:bg-cyan-500/10 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300 group"
                  >
                    看更多治療項目
                    <i className="fa-solid fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform"></i>
                  </Link>
                </div>
              </div>



              </div>
           </div>
        </main>
      </div>
    </>
  )
}