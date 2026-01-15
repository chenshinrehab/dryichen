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

      {/* ✨ CSS 樣式修正：將重點色移出 media query 以支援手機版 */}
      <style dangerouslySetInnerHTML={{__html: `
        /* 手機版與全域設定 */
        .article-content p, .article-content li {
            font-size: 18px !important; 
            line-height: 1.625 !important;
            margin-bottom: 1.5rem !important;
            letter-spacing: 0px !important;
            color: #cbd5e1 !important; /* Slate-300 */
        }
        
        /* ✨ 修改 2：這裡設定重點色 (strong)，手機版現在也會變色了 */
        .article-content strong {
            color: #22d3ee !important; /* Cyan-400 */
            font-weight: 700 !important;
        }

        /* 電腦版 (寬度大於 768px) */
        @media (min-width: 768px) {
            .article-content p, .article-content li {
                font-size: 18px !important; /* 18px (text-lg) */
                line-height: 1.625 !important; /* relaxed */
                margin-bottom: 2rem !important;
                letter-spacing: 0.025em !important;
                color: #cbd5e1 !important;
            }
            .article-content h2 {
                font-size: 1.875rem !important; /* 30px */
                margin-top: 3rem !important;
                margin-bottom: 1.5rem !important;
                color: #ffffff !important;
            }
            .article-content h3 {
                font-size: 1.5rem !important; /* 24px */
                margin-top: 2.5rem !important;
                color: #22d3ee !important;
            }
        }
      `}} />

      <div className="min-h-screen bg-slate-900 text-slate-300 pt-4 pb-12 fade-in">
        <article className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8">
          
          <nav className="hidden text-sm text-slate-500 mb-8 font-sans px-1">
              <Link href="/about/news" className="hover:text-cyan-400 transition-colors">最新內容</Link>
              <span className="mx-2">/</span>
              <span className="text-cyan-500 truncate">{post.title}</span>
          </nav>

          <Link href="/about/news" className="inline-flex items-center text-cyan-400 mb-4 hover:text-cyan-300 transition-colors group px-1">
              <i className="fa-solid fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i> 返回列表
          </Link>

          <div className="bg-slate-800/80 backdrop-blur border border-slate-700 rounded-2xl overflow-hidden shadow-2xl">
              
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

                      <div className="hidden md:block bg-white p-2 rounded-lg shrink-0 shadow-lg group relative cursor-pointer">
                          <img src={qrCodeApiUrl} alt="掃描分享文章" className="w-24 h-24 object-contain" />
                          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-max bg-slate-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                            掃描分享文章
                          </div>
                      </div>
                  </div>
              </header>

              {/* ✨ 修改 1：已移除原本在這裡的封面圖片區塊 (div with img post.coverImage) */}

              {/* 文章內容區塊 */}
              <div className="p-5 md:p-10">
                  <div 
                    className="article-content prose prose-invert max-w-none 
                               
                               /* 標題設定 */
                               prose-headings:text-cyan-50 prose-headings:font-bold 
                               prose-h2:border-l-4 prose-h2:border-cyan-500 prose-h2:pl-4
                               
                               /* 連結與列表 */
                               prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:underline prose-a:font-bold
                               prose-ul:list-disc prose-ul:pl-5 
                               
                               /* 圖片設定 */
                               prose-img:rounded-xl prose-img:shadow-lg prose-img:border prose-img:border-slate-700 prose-img:w-full prose-img:my-10
                               "
                      dangerouslySetInnerHTML={{ __html: post.contentHtml }} 
                  />
              </div>

              <div className="bg-slate-900/50 p-8 md:p-12 border-t border-slate-700 text-center">
                  <h3 className="text-white font-bold text-2xl mb-3">覺得這篇文章有幫助嗎？</h3>
                  <p className="text-slate-400 mb-6 text-lg">歡迎分享給親朋好友，讓更多人獲得正確的復健知識。</p>
                  
                  <ShareButtons url={currentUrl} title={post.title} />

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