'use client';

import React from 'react';
import Link from 'next/link';
import ShareButtons from '@/components/ShareButtons';

// 定義通用的資料介面 (包含治療與設備的所有可能欄位)
export interface ArticleData {
  title: string;
  subtitle?: string;
  description?: string; // 簡短描述
  contentHtml?: string; // HTML 內文
  
  // 圖片相關
  heroImage?: string;   // 設備頁的大封面圖
  images?: { src: string; alt?: string }[]; // 治療頁的圖片集
  
  // 影音
  youtubeVideoId?: string;
  
  // 治療頁專屬區塊
  whyChooseUs?: string[];
  treatmentFocus?: string[];
  qaList?: { question: string; answer: string }[];
  
  // 設備頁專屬
  keywords?: string[];
}

interface ArticleDetailProps {
  data: ArticleData;
  backLink: {
    href: string;
    label: string;
  };
  currentUrl: string; // 用於分享與 QR Code
  layoutStyle: 'hero' | 'standard'; // 'hero'=設備頁風格, 'standard'=治療頁風格
}

export default function ArticleDetail({ data, backLink, currentUrl, layoutStyle }: ArticleDetailProps) {
  
  // QR Code API
  const qrCodeApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&bgcolor=ffffff&data=${encodeURIComponent(currentUrl)}`;

  return (
    <>
      {/* 整合後的 CSS 樣式 */}
      <style jsx global>{`
        /* 重點文字 (strong) - 青色 */
        .article-content strong {
            color: #22d3ee !important;
            font-weight: 700;
        }
        /* 超連結 (a) - 桃紅色 */
        .article-content a {
            color: #ec4899 !important;
            font-weight: 600;
            text-decoration: none;
            border-bottom: 1px dashed #ec4899;
            transition: all 0.2s ease;
        }
        .article-content a:hover {
            color: #db2777 !important;
            border-bottom-style: solid;
        }
        /* 標題樣式 H2, H3 整合 */
        .article-content h2, .article-content h3 {
            font-size: 1.5rem;
            font-weight: 700;
            color: white;
            margin-top: 2.5rem;
            margin-bottom: 1.25rem;
            display: flex;
            align-items: center;
        }
        .article-content h2::before, .article-content h3::before {
            content: '';
            display: inline-block;
            width: 6px;
            height: 24px;
            background-color: #06b6d4;
            margin-right: 12px;
            border-radius: 2px;
        }
        /* 圖片樣式 */
        .article-content img {
            max-width: 100%;
            height: auto;
            border-radius: 0.75rem;
            margin: 2rem auto;
            display: block;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
            border: 1px solid #475569;
        }
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
      `}</style>

      <div className="min-h-screen flex flex-col bg-slate-900 text-slate-300">
        <main className="flex-grow pt-0 -mt-10 md:-mt-12 pb-12 fade-in relative z-10">
           <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

             {/* 返回按鈕 (統一在上方) */}
             <div className="pt-4">
                <Link href={backLink.href} className="inline-flex items-center text-cyan-400 mb-6 hover:text-cyan-300 transition-colors group">
                    <i className="fa-solid fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i> 
                    {backLink.label}
                </Link>
             </div>
             
             <div className="bg-slate-800/80 backdrop-blur border border-slate-700 rounded-2xl overflow-hidden shadow-2xl">
                 
                 {/* =========================================================
                     LAYOUT STYLE 1: HERO IMAGE (適合設備頁)
                     ========================================================= */}
                 {layoutStyle === 'hero' && data.heroImage && (
                    <div className="relative h-64 md:h-96 w-full group">
                        <img 
                          src={data.heroImage} 
                          alt={data.title} 
                          className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                        
                        <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full">
                            <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 tracking-wide shadow-black drop-shadow-md">{data.title}</h1>
                            {data.keywords && (
                                <div className="hidden md:flex flex-wrap gap-2">
                                    {data.keywords.slice(0, 5).map((kw, i) => (
                                        <span key={i} className="text-xs md:text-sm bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-500/30 backdrop-blur-md">
                                            #{kw}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                 )}

                 <div className="p-4 md:p-10">
                    
                    {/* =========================================================
                        LAYOUT STYLE 2: STANDARD WITH QR (適合治療頁)
                        ========================================================= */}
                    {layoutStyle === 'standard' && (
                        <div className="mb-10 border-l-4 border-cyan-500 pl-4 bg-gradient-to-r from-slate-900/80 to-transparent py-6 rounded-r-xl flex flex-col md:flex-row md:items-center gap-6">
                            <div className="hidden md:block bg-white p-2 rounded-lg shrink-0 group relative shadow-lg ring-2 ring-slate-700">
                               <img className="w-24 h-24 object-contain" src={qrCodeApiUrl} alt={`掃描預約 ${data.title}`} />
                               <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-max bg-slate-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-slate-600">
                                 掃描帶走資訊
                               </div>
                            </div>
                            
                            <div>
                               <h1 className="text-3xl md:text-5xl font-bold font-sans text-white mb-3 tracking-wide leading-tight">{data.title}</h1>
                               {data.subtitle && <h2 className="text-xl text-cyan-400 font-medium tracking-wide">{data.subtitle}</h2>}
                            </div>
                        </div>
                    )}

                    {/* =========================================================
                        共用區塊：Why Choose Us & Focus (通常只有治療頁有)
                        ========================================================= */}
                    {(data.whyChooseUs || data.treatmentFocus) && (
                      <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
                          {data.whyChooseUs && (
                            <div className="bg-slate-900/40 p-6 rounded-xl border border-slate-700/80 h-full hover:border-cyan-500/30 hover:bg-slate-900/60 transition-all duration-300">
                                <h4 className="text-xl font-bold text-cyan-400 mb-4 border-b border-slate-700 pb-2 flex items-center">
                                  <i className="fa-solid fa-thumbs-up mr-3"></i> 為什麼選擇宸新
                                </h4>
                                <ul className="space-y-3 text-slate-300">
                                    {data.whyChooseUs.map((item, idx) => (
                                      <li key={idx} className="flex items-start">
                                         <span className="text-cyan-500 mr-2 mt-1.5 text-xs">●</span>
                                         <span dangerouslySetInnerHTML={{__html: item}} className="leading-relaxed"></span>
                                      </li>
                                    ))}
                                </ul>
                            </div>
                          )}

                          {data.treatmentFocus && (
                            <div className="bg-slate-900/40 p-6 rounded-xl border border-slate-700/80 h-full hover:border-pink-500/30 hover:bg-slate-900/60 transition-all duration-300">
                                <h4 className="text-xl font-bold text-pink-400 mb-4 border-b border-slate-700 pb-2 flex items-center">
                                  <i className="fa-solid fa-crosshairs mr-3"></i> 治療重點
                                </h4>
                                <ul className="space-y-3 text-slate-300">
                                  {data.treatmentFocus.map((item, idx) => (
                                    <li key={idx} className="flex items-start">
                                      <span className="text-pink-500 mr-2 mt-1.5 text-xs">●</span>
                                      <span className="leading-relaxed" dangerouslySetInnerHTML={{ __html: item }} />
                                    </li>
                                  ))}
                                </ul>
                            </div>
                          )}
                      </div>
                    )}

                    {/* =========================================================
                        共用區塊：內文 (HTML)
                        ========================================================= */}
                    <div className="article-content text-slate-300 leading-relaxed text-lg mb-10 pb-8 border-b border-slate-700/50">
                        {data.contentHtml ? (
                            <div dangerouslySetInnerHTML={{ __html: data.contentHtml }} />
                        ) : (
                            <p>{data.description}</p>
                        )}
                    </div>

                    {/* =========================================================
                        共用區塊：YouTube 影片
                        ========================================================= */}
                    {data.youtubeVideoId && (
                      <div className="mb-14 text-center">
                          <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
                              <i className="fa-brands fa-youtube text-red-500 mr-3 text-3xl"></i>
                              相關介紹影片
                          </h3>
                          <div className="w-full md:w-[85%] mx-auto">
                               <div className="relative w-full pb-[56.25%] rounded-xl overflow-hidden shadow-2xl border border-slate-700 group">
                                  <iframe 
                                    src={`https://www.youtube.com/embed/${data.youtubeVideoId}`} 
                                    title={`${data.title} 介紹影片`}
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

                    {/* =========================================================
                        共用區塊：圖片展示 (Treatment Gallery)
                        ========================================================= */}
                    {data.images && data.images.length > 0 && (
                      <div className="space-y-8 mb-14">
                        {data.images.map((img, idx) => (
                          <div key={idx} className="text-center group">
                             <div className="relative overflow-hidden rounded-xl shadow-xl inline-block w-full md:w-[85%] border border-slate-700 bg-slate-900">
                               <img src={img.src} alt={img.alt || data.title} className="w-full h-auto transform group-hover:scale-[1.02] transition-transform duration-700 block" />
                             </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* =========================================================
                        共用區塊：Q&A (QA List)
                        ========================================================= */}
                    {data.qaList && data.qaList.length > 0 && (
                      <div className="mt-8">
                          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                            <i className="fa-regular fa-circle-question text-cyan-400 mr-3"></i>
                            常見問答
                          </h3>
                          <div className="space-y-4">
                            {data.qaList.map((qa, idx) => (
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
                    
                 </div> {/* End Padding */}

                 {/* =========================================================
                     FOOTER: SHARE & CTA
                     ========================================================= */}
                 <div className="bg-slate-900/80 p-8 md:p-12 border-t border-slate-700 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent blur-sm"></div>
                    
                    <h3 className="text-white font-bold text-2xl mb-3 relative z-10">覺得這篇介紹有幫助嗎？</h3>
                    <p className="text-slate-400 mb-8 text-lg relative z-10">歡迎分享給親朋好友，讓更多人了解我們的專業。</p>

                    <div className="relative z-10 mb-10">
                       <ShareButtons url={currentUrl} title={data.title} />
                    </div>

                    <div className="pt-8 border-t border-slate-700/50 w-full flex justify-center">
                      <Link 
                        href={backLink.href}
                        className="inline-flex items-center justify-center px-8 py-3.5 text-lg font-bold text-cyan-400 border border-cyan-500/30 rounded-full hover:bg-cyan-500/10 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300 group"
                      >
                         查看更多項目
                         <i className="fa-solid fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform"></i>
                      </Link>
                    </div>
                 </div>

             </div>
           </div>
        </main>
      </div>
    </>
  );
}