// src/app/diseases/[category]/[slug]/page.tsx
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import { getDiseaseBySlug, generateAllDiseaseParams } from '@/data/diseases'
// ✨ 1. 新增引入 ShareButtons
import ShareButtons from '@/components/ShareButtons'

interface PageProps {
  params: {
    category: string
    slug: string
  }
}

// 1. 產生靜態路徑
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

  const siteUrl = 'https://www.dryichen.com.tw'
  const currentPageUrl = `${siteUrl}/diseases/${params.category}/${params.slug}`
  const qrCodeApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(currentPageUrl)}`

  // SEO: 麵包屑
  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '首頁', item: `${siteUrl}/` },
      { '@type': 'ListItem', position: 2, name: '疾病衛教', item: `${siteUrl}/diseases` },
      { '@type': 'ListItem', position: 3, name: disease.title, item: currentPageUrl },
    ],
  }

  // SEO: 醫療狀況 Schema
  const jsonLdCondition = {
    '@context': 'https://schema.org',
    '@type': 'MedicalCondition',
    name: disease.title,
    description: disease.seoDescription || disease.description,
    possibleTreatment: disease.treatments.map(t => ({ 
        '@type': 'MedicalTherapy', 
        name: t.replace(/<[^>]*>?/gm, '') // 移除 HTML 標籤
    })),
    signOrSymptom: disease.symptoms.map(s => ({ 
        '@type': 'MedicalSymptom', 
        name: s 
    })),
  }

  return (
    <>
      <JsonLd data={jsonLdBreadcrumb} />
      <JsonLd data={jsonLdCondition} />
      
      <style dangerouslySetInnerHTML={{__html: `
        /* 重點文字 (strong) - 青色 */
        .article-content strong {
            color: #22d3ee !important; /* Cyan-400 */
            font-weight: 700;
        }

        /* 超連結 (a) - 桃紅色 + 跳轉圖示 */
        .article-content a {
            color: #ec4899 !important; /* Pink-500 */
            font-weight: 600;
            text-decoration: none;
            border-bottom: 1px dashed #ec4899;
            transition: all 0.2s ease;
            display: inline-flex;
            align-items: center;
            gap: 2px;
        }

        .article-content a:hover {
            color: #db2777 !important; /* Pink-600 */
            border-bottom-style: solid;
            background-color: rgba(236, 72, 153, 0.15);
            padding: 0 4px;
            margin: 0 -4px;
            border-radius: 4px;
        }

        .article-content a::after {
            content: "↗";
            font-size: 0.85em;
            font-weight: bold;
            margin-bottom: 2px;
        }

        /* 圖片寬度限制 (針對 article-content 內的圖片) */
        .article-content img {
            max-width: 100%; /* 手機版滿版 */
            height: auto;
            border-radius: 0.75rem; /* rounded-xl */
            margin: 2rem auto; /* 上下留白，左右置中 */
            display: block; /* 讓 margin auto 生效 */
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-lg */
            border: 1px solid #334155; /* border-slate-700 */
        }

        /* 電腦版圖片寬度限制為 2/3 (66%) */
        @media (min-width: 768px) {
            .article-content img {
                max-width: 66%; 
            }
        }
      `}} />

      <div className="min-h-screen flex flex-col bg-slate-900 text-slate-300">
        
        <main className="flex-grow pt-4 pb-12 md:py-12 fade-in relative z-10">
           <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

              {/* 返回按鈕：回到該分類頁面 */}
              <Link href={`/diseases/${params.category}`} className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-6 transition-colors group">
                 <i className="fa-solid fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i> 
                 返回分類列表
              </Link>
              
              {/* ✨ 修改 2：移除這裡的 p-4 md:p-8，改到下方的內層 div，這樣底部的分享區塊才能滿版 */}
              <div className="bg-slate-800/80 backdrop-blur border border-slate-700 rounded-2xl overflow-hidden shadow-2xl">
                  
                  {/* ✨ 新增內層容器：包裹 Header, Grid, 和主內容，給予 padding */}
                  <div className="p-4 md:p-10">
                  
                      {/* Header: 標題與 QR Code */}
                      <div className="mb-8 border-l-4 border-cyan-500 pl-4 bg-gradient-to-r from-slate-900/50 to-transparent py-4 rounded-r-xl flex items-center gap-6">
                          <div className="hidden md:block bg-white p-1 rounded-lg shrink-0 group relative shadow-lg">
                              <img className="w-20 h-20 object-contain" src={qrCodeApiUrl} alt={`掃描閱讀 ${disease.title}`} />
                              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-max bg-slate-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                掃描此頁面
                              </div>
                          </div>
                          <div>
                              <h1 className="text-3xl md:text-4xl font-bold font-sans text-white mb-2 tracking-wide">{disease.title}</h1>
                              <div className="flex flex-wrap gap-2 mt-2">
                                {disease.seoKeywords?.slice(0,4).map((kw, i) => (
                                  <span key={i} className="text-xs bg-slate-700 text-cyan-400 px-2 py-1 rounded-full border border-slate-600">#{kw}</span>
                                ))}
                              </div>
                          </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-8 mb-12">
                          {/* 症狀 */}
                          <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700 h-full hover:border-pink-500/30 transition-colors">
                              <h4 className="text-xl font-bold text-white mb-4 border-b border-slate-600 pb-2 flex items-center">
                                <i className="fa-solid fa-triangle-exclamation text-pink-500 mr-2"></i>
                                常見症狀
                              </h4>
                              <ul className="article-content space-y-3 text-slate-300 list-disc list-inside">
                                  {disease.symptoms.map((item, idx) => (
                                    <li key={idx} className="leading-relaxed">{item}</li>
                                  ))}
                              </ul>
                          </div>

                          {/* 治療建議 */}
                          <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700 h-full hover:border-cyan-500/30 transition-colors">
                              <h4 className="text-xl font-bold text-white mb-4 border-b border-slate-600 pb-2 flex items-center">
                                <i className="fa-solid fa-user-doctor text-cyan-500 mr-2"></i>
                                治療建議
                              </h4>
                              <ul className="article-content space-y-3 text-slate-300 list-disc list-inside">
                                  {disease.treatments.map((item, idx) => (
                                    <li 
                                      key={idx} 
                                      dangerouslySetInnerHTML={{ __html: item }}
                                      className="leading-relaxed"
                                    ></li>
                                  ))}
                              </ul>
                          </div>
                      </div>

                      {/* 內容說明區 (主文) */}
                      <div className="article-content text-slate-300 leading-relaxed text-lg pb-6">
                        {disease.contentHtml ? (
                          <div dangerouslySetInnerHTML={{ __html: disease.contentHtml }} />
                        ) : (
                          <p>{disease.content || disease.description}</p>
                        )}
                      </div>

                  </div> {/* End of padding wrapper */}

                  {/* ✨ 3. 新增底部分享與導覽區塊 (滿版) */}
                  <div className="bg-slate-900/50 p-8 md:p-12 border-t border-slate-700 text-center">
                      <h3 className="text-white font-bold text-2xl mb-3">覺得這篇文章有幫助嗎？</h3>
                      <p className="text-slate-400 mb-6 text-lg">歡迎分享給親朋好友，讓更多人獲得正確的復健知識。</p>
                      
                      <ShareButtons url={currentPageUrl} title={disease.title} />

                      <div className="mt-12 pt-8 border-t border-slate-700/50">
                          <Link 
                            href="/diseases" 
                            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-cyan-400 border-2 border-cyan-500/30 rounded-full hover:bg-cyan-500/10 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300 group"
                          >
                                看更多疾病衛教 
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