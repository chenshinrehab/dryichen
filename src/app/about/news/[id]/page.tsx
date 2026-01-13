// src/app/about/news/[id]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { newsData, getNewsById } from '@/data/news'
import ShareButtons from '@/components/ShareButtons'

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
  }
}

export default function NewsDetailPage({ params }: PageProps) {
  const post = getNewsById(params.id)
  if (!post) notFound()

  const siteUrl = 'https://www.dryichen.com.tw'
  const currentUrl = `${siteUrl}/about/news/${params.id}`
  const qrCodeApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(currentUrl)}`

  // 2. Schema
  const jsonLdArticle = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    image: [post.coverImage],
    datePublished: post.date,
    dateModified: post.date,
    author: { 
        '@type': 'Person', 
        name: '林羿辰醫師',
        url: `${siteUrl}/about/doctors`
    },
    publisher: { 
        '@type': 'MedicalClinic', 
        name: '宸新復健科診所',
        logo: {
            '@type': 'ImageObject',
            url: `${siteUrl}/logo.png`
        }
    },
    description: post.summary,
  }

  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '首頁', item: `${siteUrl}/` },
      { '@type': 'ListItem', position: 2, name: '最新內容', item: `${siteUrl}/about/news` },
      { '@type': 'ListItem', position: 3, name: post.title, item: currentUrl },
    ],
  }

  return (
    <>
      <JsonLd data={jsonLdArticle} />
      <JsonLd data={jsonLdBreadcrumb} />

      <div className="min-h-screen bg-slate-900 text-slate-300 pt-4 pb-12 fade-in">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* 麵包屑導航 */}
          <nav className="text-sm text-slate-500 mb-8 font-sans">
              <Link href="/about/news" className="hover:text-cyan-400 transition-colors">最新內容</Link>
              <span className="mx-2">/</span>
              <span className="text-cyan-500 truncate">{post.title}</span>
          </nav>

          <Link href="/about/news" className="inline-flex items-center text-cyan-400 mb-8 hover:text-cyan-300 transition-colors group">
              <i className="fa-solid fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i> 返回列表
          </Link>

          {/* 文章主體卡片 */}
          <div className="bg-slate-800/80 backdrop-blur border border-slate-700 rounded-2xl overflow-hidden shadow-2xl">
              
              {/* Header 區塊 */}
              <header className="p-6 md:p-10 border-b border-slate-700 bg-gradient-to-b from-slate-800 to-slate-900/50">
                  <div className="flex flex-col-reverse md:flex-row gap-6 justify-between items-start">
                      <div className="flex-grow">
                          <div className="flex flex-wrap gap-3 mb-4 text-sm">
                            <span className={`px-3 py-1 rounded-full font-bold border ${
                                post.category === '門診公告' ? 'bg-pink-500/10 text-pink-400 border-pink-500/30' : 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30'
                            }`}>
                                {post.category}
                            </span>
                            <span className="text-slate-400 flex items-center bg-slate-900/50 px-3 py-1 rounded-full border border-slate-700">
                                <i className="fa-regular fa-calendar mr-2"></i>{post.date}
                            </span>
                          </div>
                          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">{post.title}</h1>
                          <p className="text-lg text-slate-400 border-l-4 border-cyan-500 pl-4 italic">
                            {post.summary}
                          </p>
                      </div>

                      {/* QR Code */}
                      <div className="hidden md:block bg-white p-2 rounded-lg shrink-0 shadow-lg group relative cursor-pointer">
                          <img src={qrCodeApiUrl} alt="掃描分享文章" className="w-24 h-24 object-contain" />
                          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-max bg-slate-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                            掃描分享文章
                          </div>
                      </div>
                  </div>
              </header>

              {/* 封面圖 */}
              <div className="w-full h-64 md:h-96 relative">
                  <img src={post.coverImage} alt={post.title} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-30"></div>
              </div>

              {/* 文章內容 (Typography 優化重點) */}
              <div className="p-6 md:p-10">
                  <div 
                    className="prose prose-invert max-w-none 
                               
                               /* 手機版 (Default) 設定：字大、行高適中 */
                               prose-p:text-[19px] 
                               prose-p:leading-[1.8] 
                               prose-p:mb-8 
                               prose-p:tracking-wide
                               
                               /* 電腦版 (md) 設定：字稍小、行高寬鬆 */
                               md:prose-p:text-[17px] 
                               md:prose-p:leading-relaxed 
                               md:prose-p:mb-8

                               /* 標題設定 */
                               prose-headings:text-cyan-50 prose-headings:font-bold prose-headings:tracking-wide
                               prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-l-4 prose-h2:border-cyan-500 prose-h2:pl-4
                               prose-h3:text-xl prose-h3:text-cyan-400 prose-h3:mt-8 prose-h3:mb-4
                               
                               /* 連結與強調 */
                               prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:underline prose-a:font-bold
                               prose-strong:text-white prose-strong:font-bold
                               
                               /* 列表設定 */
                               prose-ul:list-disc prose-ul:pl-6 prose-li:text-slate-300 prose-li:mb-3 prose-li:text-[18px] md:prose-li:text-[17px]
                               
                               /* 圖片設定 */
                               prose-img:rounded-xl prose-img:shadow-lg prose-img:border prose-img:border-slate-700
                               "
                      dangerouslySetInnerHTML={{ __html: post.contentHtml }} 
                  />
              </div>

              {/* 底部 CTA 與分享 */}
              <div className="bg-slate-900/50 p-8 md:p-12 border-t border-slate-700 text-center">
                  <h3 className="text-white font-bold text-2xl mb-3">覺得這篇文章有幫助嗎？</h3>
                  <p className="text-slate-400 mb-6 text-lg">歡迎分享給親朋好友，讓更多人獲得正確的復健知識。</p>
                  
                  {/* 分享按鈕組件 */}
                  <ShareButtons url={currentUrl} title={post.title} />

                  {/* 看更多文章按鈕 */}
                  <div className="mt-12 pt-8 border-t border-slate-700/50">
                      <Link 
                        href="/about/news" 
                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-cyan-400 border-2 border-cyan-500/30 rounded-full hover:bg-cyan-500/10 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300 group"
                      >
                            看更多衛教文章 
                            <i className="fa-solid fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform"></i>
                      </Link>
                  </div>
              </div>

          </div>
        </article>
      </div>
    </>
  )
}