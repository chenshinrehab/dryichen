// src/app/about/news/[id]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { newsData, getNewsById } from '@/data/news'
import ShareButtons from '@/components/ShareButtons'

// 定義常數，方便未來修改
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.dryichen.com.tw'

interface PageProps { params: { id: string } }

export async function generateStaticParams() {
  return newsData.map((post) => ({ id: post.id }))
}

// 1. 動態 Meta
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getNewsById(params.id)
  if (!post) return { title: '文章不存在' }
  
  return {
    title: post.seoTitle || `${post.title} - 宸新復健科`,
    description: post.seoDescription || post.summary,
    keywords: post.keywords,
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.summary,
      url: `${SITE_URL}/about/news/${params.id}`,
      type: 'article',
      images: [
        {
            url: post.coverImage,
            width: 1200,
            height: 630,
            alt: post.title,
        }
      ]
    }
  }
}

export default function NewsDetailPage({ params }: PageProps) {
  const post = getNewsById(params.id)
  if (!post) notFound()

  const currentUrl = `${SITE_URL}/about/news/${params.id}`
  const qrCodeApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&bgcolor=ffffff&data=${encodeURIComponent(currentUrl)}`

  // 邏輯判斷：如果是「門診公告」或「診所活動」，用 NewsArticle
  const isAnnouncement = post.category === '門診公告' || post.category === '診所活動';

  // 2. Schema (根據類別切換結構)
  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': isAnnouncement ? 'NewsArticle' : 'MedicalWebPage',
    [isAnnouncement ? 'headline' : 'name']: post.title,
    image: [post.coverImage],
    datePublished: post.date,
    dateModified: post.date,
    author: { 
        '@type': 'Person', 
        name: '林羿辰醫師',
        url: `${SITE_URL}/about/doctors`
    },
    publisher: { 
        '@type': 'MedicalClinic', 
        name: '宸新復健科診所',
        logo: {
            '@type': 'ImageObject',
            url: `${SITE_URL}/logo.png`
        }
    },
    description: post.summary,
    ...(isAnnouncement ? {} : {
        lastReviewed: post.date,
        reviewedBy: {
            '@type': 'Physician',
            name: '林羿辰醫師'
        }
    })
  }

  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '首頁', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: '最新內容', item: `${SITE_URL}/about/news` },
      { '@type': 'ListItem', position: 3, name: post.title, item: currentUrl },
    ],
  }

  return (
    <>
      <JsonLd data={jsonLdData} />
      <JsonLd data={jsonLdBreadcrumb} />

      {/* 移植疾病頁面的 Style 區塊，確保排版樣式一致 */}
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
            display: block;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.15); /* shadow-xl */
            border: 1px solid #475569; /* border-slate-600 */
        }

        /* 電腦版圖片寬度調整 (變大) */
        @media (min-width: 768px) {
            .article-content img {
                max-width: 85%;
            }
        }

        /* 內容標題樣式 */
        .article-content h2 {
            font-size: 1.5rem;
            font-weight: 700;
            color: white;
            margin-top: 2.5rem;
            margin-bottom: 1.5rem;
            border-left: 4px solid #06b6d4; /* Cyan-500 */
            padding-left: 1rem;
        }

        .article-content h3 {
            font-size: 1.25rem;
            font-weight: 600;
            color: #67e8f9; /* Cyan-300 */
            margin-top: 2rem;
            margin-bottom: 1rem;
        }

        .article-content ul {
            list-style-type: disc;
            padding-left: 1.5rem;
            margin-bottom: 1.5rem;
        }

        .article-content li {
            margin-bottom: 0.5rem;
        }
      `}} />

      <div className="min-h-screen flex flex-col bg-slate-900 text-slate-300">
        <main className="flex-grow pt-4 pb-12 md:py-12 fade-in relative z-10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* 麵包屑/返回按鈕 */}
            <Link href="/about/news" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-6 transition-colors group">
                <i className="fa-solid fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i> 返回列表
            </Link>

            {/* 文章主體卡片 */}
            <div className="bg-slate-800/80 backdrop-blur border border-slate-700 rounded-2xl overflow-hidden shadow-2xl">
              
              <div className="p-4 md:p-10">

                  {/* Header 區塊：仿照疾病頁面樣式 */}
                  <div className="mb-10 border-l-4 border-cyan-500 pl-4 bg-gradient-to-r from-slate-900/80 to-transparent py-6 rounded-r-xl flex flex-col md:flex-row md:items-center gap-6">
                      
                      {/* QR Code (僅電腦版顯示) */}
                      <div className="hidden md:block bg-white p-2 rounded-lg shrink-0 group relative shadow-lg ring-2 ring-slate-700 cursor-pointer">
                          <img className="w-24 h-24 object-contain" src={qrCodeApiUrl} alt={`掃描閱讀 ${post.title}`} />
                          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-max bg-slate-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-slate-600">
                              掃描帶走文章
                          </div>
                      </div>

                      {/* 標題與 Metadata */}
                      <div className="flex-grow">
                          <h1 className="text-3xl md:text-5xl font-bold font-sans text-white mb-4 tracking-wide leading-tight">
                              {post.title}
                          </h1>
                          
                          <div className="flex flex-wrap items-center gap-3">
                              {/* 分類標籤 */}
                              <span className={`px-3 py-1 rounded-full text-sm font-bold border ${
                                post.category === '門診公告' 
                                ? 'bg-pink-500/10 text-pink-400 border-pink-500/30' 
                                : 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30'
                              }`}>
                                {post.category}
                              </span>

                              {/* 日期 */}
                              <span className="text-slate-400 text-sm flex items-center bg-slate-700/50 px-3 py-1 rounded-full border border-slate-600">
                                <i className="fa-regular fa-calendar mr-2"></i>{post.date}
                              </span>
                          </div>
                      </div>
                  </div>

                  {/* 封面圖：保留封面圖，但樣式調整為與 article-content 內的圖片一致 */}
                  {post.coverImage && (
                    <div className="w-full mb-10">
                        <img 
                          src={post.coverImage} 
                          alt={post.title} 
                          className="w-full h-auto md:max-w-[85%] mx-auto rounded-xl shadow-xl border border-slate-600 object-cover" 
                        />
                         <div className="md:max-w-[85%] mx-auto mt-4 p-4 bg-slate-900/40 rounded-lg border-l-4 border-cyan-500">
                             <p className="text-lg text-slate-300 italic">
                                 {post.summary}
                             </p>
                         </div>
                    </div>
                  )}

                  {/* 文章內容：使用 article-content 類別 */}
                  <div className="article-content text-slate-300 leading-relaxed text-lg pb-6">
                      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
                  </div>

              </div>

              {/* 底部分享區塊：仿照疾病頁面樣式 (含上方光暈) */}
              <div className="bg-slate-900/80 p-8 md:p-12 border-t border-slate-700 text-center relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent blur-sm"></div>
                
                <h3 className="text-white font-bold text-2xl mb-3 relative z-10">覺得這篇文章有幫助嗎？</h3>
                <p className="text-slate-400 mb-8 text-lg relative z-10">歡迎分享給親朋好友，讓更多人獲得正確的復健知識。</p>
                
                <div className="relative z-10">
                    <ShareButtons url={currentUrl} title={post.title} />
                </div>

                <div className="mt-12 pt-8 border-t border-slate-700/50 relative z-10">
                    <Link 
                      href="/about/news" 
                      className="inline-flex items-center justify-center px-8 py-3.5 text-lg font-bold text-cyan-400 border border-cyan-500/30 rounded-full hover:bg-cyan-500/10 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300 group"
                    >
                          看更多衛教文章 
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