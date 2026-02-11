// src/app/about/cases/[id]/page.tsx

import React from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import ShareButtons from '@/components/ShareButtons'
// 匯入案例資料與組件
import { casesData, getCaseById } from '@/data/cases'
import RelatedCases from '@/components/RelatedCases' 

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.dryichen.com.tw').trim()

interface PageProps { params: { id: string } }

// 產生靜態路徑 (確保這步沒錯，Next.js 才知道有哪些頁面)
export async function generateStaticParams() {
  return casesData.map((post) => ({ id: post.id }))
}

// 1. Meta 設定 (優化：解決 Title 重複、加入 Geo 標籤)
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getCaseById(params.id)
  if (!post) return { title: '案例不存在' }
  
  // 修正：不在此處加診所名後綴，交給 layout.tsx 的 title.template 處理
  const pageTitle = post.seoTitle ? post.seoTitle : post.title
  const canonicalUrl = `${SITE_URL}/about/cases/${params.id}`
   
  return {
    title: `${post.title} | 新竹宸新復健科`,
    description: post.seoDescription || post.summary,
    keywords: post.tags,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.summary,
      url: canonicalUrl,
      type: 'article',
      siteName: '新竹宸新復健科診所',
      images: [
        {
            url: post.coverImage,
            width: 1200,
            height: 630,
            alt: post.title,
        }
      ]
    },
    // 加入在地化 Geo 標記
    other: {
      'geo.region': 'TW-HCH',
      'geo.placename': '新竹市',
    }
  }
}

export default function CaseDetailPage({ params }: PageProps) {
  const post = getCaseById(params.id)
  
  // 如果 ID 對不上，回傳 404
  if (!post) notFound()

  const currentUrl = `${SITE_URL}/about/cases/${params.id}`

  // 篩選出「其他相關案例」 (排除當前這一篇)
  const otherCases = casesData.filter(c => c.id !== post.id).slice(0, 3);

  // 2. Schema (優化：使用完整 Logo 網址)
  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalScholarlyArticle',
    'genre': 'Case Report',
    '@id': `${currentUrl}#case-study`,
    url: currentUrl,
    headline: post.title,
    image: [post.coverImage],
    datePublished: post.date,
    dateModified: post.date,
    author: { 
        '@type': 'Person', 
        name: '林羿辰醫師',
        url: `${SITE_URL}/about/doctors`
    },
    publisher: { 
        '@type': 'MedicalOrganization', 
        name: '新竹宸新復健科診所',
        telephone: '+886-3-564-7999',
        priceRange: '$$', 
        address: {
          '@type': 'PostalAddress',
          streetAddress: '光復路一段371號B1',
          addressLocality: '新竹市',
          addressRegion: '東區',
          postalCode: '300',
          addressCountry: 'TW',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '24.7833314', 
          longitude: '121.0170937'
        },
        logo: {
            '@type': 'ImageObject',
            url: `${SITE_URL}/logo.webp`
        }
    },
    description: post.summary,
    about: {
        '@type': 'MedicalCondition',
        name: post.tags && post.tags.length > 0 ? post.tags[0] : '慢性疼痛'
    }
  }

  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '首頁', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: '治療案例', item: `${SITE_URL}/about/news` },
      { '@type': 'ListItem', position: 3, name: post.title, item: currentUrl },
    ],
  }

  return (
    <>
      <JsonLd data={jsonLdData} />
      <JsonLd data={jsonLdBreadcrumb} />

      <style dangerouslySetInnerHTML={{__html: `
        .article-content strong { color: #22d3ee !important; font-weight: 700; }
        .article-content a { color: #ec4899 !important; font-weight: 600; text-decoration: none; border-bottom: 1px dashed #ec4899; transition: all 0.2s ease; }
        .article-content a:hover { background-color: rgba(236, 72, 153, 0.15); border-bottom-style: solid; }
        .article-content img { max-width: 100%; height: auto; border-radius: 0.75rem; margin: 1.5rem auto; display: block; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3); border: 1px solid #334155; }
        @media (min-width: 768px) { .article-content img { max-width: 85%; } }
        .article-content h2 { font-size: 1.5rem; font-weight: 700; color: white; margin: 2rem 0 1rem; padding-left: 1rem; border-left: 4px solid #06b6d4; }
        .article-content h3 { font-size: 1.25rem; font-weight: 600; color: #67e8f9; margin: 1.5rem 0 0.75rem; }
        .article-content ul { list-style-type: disc; padding-left: 1.5rem; margin-bottom: 1rem; color: #cbd5e1; }
        .article-content li { margin-bottom: 0.4rem; }
        .article-content p { margin-bottom: 1rem; }
      `}} />

      <div className="min-h-screen flex flex-col bg-slate-900 text-slate-300">
        <main className="flex-grow pt-0 -mt-10 md:-mt-12 pb-12 relative z-10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              
            <nav className="mb-4 pt-4 flex items-center justify-between">
                <Link href="/about/news" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group text-sm font-medium">
                    <i className="fa-solid fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i> 
                    返回所有案例
                </Link>
            </nav>

            <article className="bg-slate-800/80 backdrop-blur border border-slate-700 rounded-2xl overflow-hidden shadow-2xl">
              
              {/* 內容 Padding */}
              <div className="p-5 md:p-12 pb-2">
                  
                  {/* Header */}
                  <header className="mb-8 border-b border-slate-700/50 pb-6">
                      <div className="flex-grow">
                          <div className="flex flex-wrap items-center gap-3 mb-4">
                              <span className="px-3 py-1 rounded-full text-xs font-bold border tracking-wider uppercase bg-cyan-500/10 text-cyan-400 border-cyan-500/30">
                                {post.category}
                              </span>
                              <span className="text-slate-500 text-xs flex items-center">
                                <i className="fa-regular fa-calendar mr-2"></i>{post.date}
                              </span>
                          </div>

                          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold font-sans text-white mb-4 lg:mb-6 leading-tight lg:leading-snug">
                              {post.title}
                          </h1>

                          <div className="bg-slate-900/50 rounded-xl p-4 md:p-4 border-l-4 border-cyan-500">
                              <div className="flex items-start gap-3">
                                <i className="fa-solid fa-user-doctor text-cyan-500 mt-1"></i>
                                <p className="text-lg text-slate-300 italic m-0">
                                  {post.summary}
                                </p>
                              </div>
                          </div>
                      </div>
                  </header>

                  {/* 內容區 */}
                  <div className="article-content text-slate-300 leading-relaxed text-lg mb-6">
                      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
                  </div>
                  
                  {/* 醫療免責聲明 */}
                  <div className="mb-4 bg-slate-900/40 border border-slate-700 rounded-lg p-4 text-sm text-slate-500">
                      <div className="flex items-start gap-3">
                        <i className="fa-solid fa-circle-exclamation text-slate-400 mt-0.5"></i>
                        <p className="m-0 text-left">
                            <strong>醫療免責聲明：</strong> 本網站所分享之案例僅作為衛教知識分享，每位患者的身體狀況、病症嚴重程度與復原能力皆不同，實際治療成效因人而異。
                        </p>
                      </div>
                  </div>

                  {/* 相關案例 */}
                  {otherCases.length > 0 && (
                     <div className="mb-0 pt-0">
                        <RelatedCases cases={otherCases} />
                     </div>
                  )}

                  {/* 撰文者資訊 */}
                  <div className="text-right mt-0 pb-4 pr-2">
                    <div className="inline-block text-slate-500 text-[11px] md:text-xs space-y-0.5">
                      <p><span className="mr-2">撰文者 :</span><span className="font-medium text-slate-400">復健專科 宸新復健科院長 林羿辰醫師</span></p>
                      <p><span className="mr-2">資料來源 :</span><span className="font-medium text-slate-400">宸新復健科診所內部案例</span></p>
                    </div>
                  </div>

              </div>

              {/* ✨ 底部分享區塊 (優化：H2 層級應用) */}
              <footer className="bg-slate-900/80 p-8 md:p-12 border-t border-slate-700 text-center relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent blur-sm"></div>
                 
                <h2 className="text-white font-bold text-2xl mb-3 relative z-10">覺得這篇文章有幫助嗎？</h2>
                <p className="text-slate-400 mb-8 text-lg relative z-10">歡迎分享給親朋好友，讓更多人獲得正確的復健知識。</p>
                 
                <div className="relative z-10">
                    <ShareButtons url={currentUrl} title={post.title} />
                </div>
              </footer>

            </article>

            {/* 查看更多連結 */}
            <div className="mt-8 text-center">
                <Link href="/about/news" className="text-slate-500 hover:text-cyan-400 text-sm font-medium transition-colors">
                    查看更多項目 <i className="fa-solid fa-arrow-right ml-2"></i>
                </Link>
            </div>

          </div>
       </main>
      </div>
    </>
  )
}