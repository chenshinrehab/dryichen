import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { sportsInjuriesData } from '@/data/sportsInjuries'
import { getNewsById } from '@/data/news'
import JsonLd from '@/components/JsonLd'
import ShareButtons from '@/components/ShareButtons'

// 定義常數
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.dryichen.com.tw').trim()

interface PageProps { params: { category: string; slug: string } }

// 1. 動態 Meta 強化
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = getNewsById(params.slug)
  if (!article) return { title: '文章不存在' }

  const canonicalUrl = `${SITE_URL}/about/news/${params.slug}`
  
  return {
    title: article.seoTitle ? article.seoTitle : `${article.title} | 新竹宸新復健科`,
    authors: [{ name: '林羿辰醫師', url: SITE_URL }],
    publisher: '宸新復健科診所-林羿辰醫師',
    description: article.seoDescription || article.summary,
    keywords: article.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: article.seoTitle || article.title,
      description: article.seoDescription || article.summary,
      url: canonicalUrl,
      type: 'article',
      siteName: '新竹宸新復健科診所',
      locale: 'zh_TW',
      authors: ['林羿辰醫師'],
      tags: ['復健科', '運動傷害', '運動醫學', '新竹復健科'],
      images: article.coverImage ? [{
        url: article.coverImage,
        width: 1200,
        height: 630,
        alt: article.title,
      }] : [],
    },
    other: {
      'geo.position': '24.783331;121.017094',
      'geo.region': 'TW-Hsinchu',
      'geo.placename': 'Zhubei',
    },
  }
}

export default function SportsInjuryDetailPage({ params }: PageProps) {
  const categoryData = sportsInjuriesData.find(c => c.category === params.category)
  const article = getNewsById(params.slug)

  if (!categoryData || !article) {
    notFound()
  }

  const currentUrl = `${SITE_URL}/about/news/${params.slug}`
  const qrCodeApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(currentUrl)}`
  
  // 分類與樣式邏輯
  const isMedicalContent = ['衛教文章', '醫學新知', '診間隨筆'].includes(article.category);
  const categoryStyles: Record<string, string> = {
    '門診公告': 'bg-pink-500/10 text-pink-400 border-pink-500/30',
    '診所活動': 'bg-pink-500/10 text-pink-400 border-pink-500/30',
    '診間隨筆': 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    '衛教文章': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
    '醫學新知': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
  };
  const activeCategoryStyle = categoryStyles[article.category] || 'bg-slate-500/10 text-slate-400 border-slate-500/30';

  // Schema 資料
  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': ['MedicalWebPage', 'MedicalEntity'],
    '@id': `${currentUrl}#webpage`,
    'url': currentUrl,
    'name': article.title,
    'image': [article.coverImage || `${SITE_URL}/images/main/a.webp`],
    'description': article.summary,
    'articleSection': article.category,
    'dateModified': article.lastModified || article.date,
    'author': { 
      '@type': ['Person', 'Physician'], 
      'name': '林羿辰 醫師',
      'jobTitle': '院長',
      'url': `${SITE_URL}/about/doctors`,
      'worksFor': { '@type': 'MedicalClinic', 'name': '宸新復健科診所', 'url': SITE_URL }
    }
  };

  return (
    <>
      <JsonLd data={jsonLdData} />
      
      <style dangerouslySetInnerHTML={{__html: `
        .article-content strong { color: #22d3ee !important; font-weight: 700; }
        .article-content a:not(sup a):not([style*="text-underline-offset"]) {
            color: #ec4899 !important;
            font-weight: 600;
            text-decoration: none;
            border-bottom: 1px dashed #ec4899;
            transition: all 0.2s ease;
            display: inline-flex;
            align-items: center;
            gap: 2px;
        }
        .article-content a:not(sup a):not([style*="text-underline-offset"])::after { content: "↗"; font-size: 0.85em; margin-bottom: 2px; }
        .article-content a:not(sup a):not([style*="text-underline-offset"]):hover {
            color: #db2777 !important;
            border-bottom-style: solid;
            background-color: rgba(236, 72, 153, 0.15);
            padding: 0 4px; margin: 0 -4px; border-radius: 4px;
        }
        .article-content img {
            max-width: 100%; height: auto; border-radius: 0.75rem;
            margin: 2rem auto; display: block;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
            border: 1px solid #475569;
        }
        @media (min-width: 768px) { .article-content img { max-width: 85%; } }
        .article-content h2 {
            font-size: 1.5rem; font-weight: 700; color: white;
            margin-top: 2.5rem; margin-bottom: 1.5rem;
            border-left: 4px solid #06b6d4; padding-left: 1rem;
        }
        .article-content h3 { font-size: 1.25rem; font-weight: 600; color: #67e8f9; margin-top: 2rem; }
      `}} />

      <div className="min-h-screen flex flex-col bg-slate-900 text-slate-300">
        <main className="flex-grow pt-0 -mt-10 md:-mt-12 pb-12 fade-in relative z-10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* 返回按鈕與麵包屑 */}
            <Link 
              href={`/weight-bone/sports-injuries/${categoryData.category}`} 
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-6 transition-colors group"
            >
              <i className="fa-solid fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i> 
              返回 {categoryData.title} 列表
            </Link>

            <article className="bg-slate-800/80 backdrop-blur border border-slate-700 rounded-2xl overflow-hidden shadow-2xl">
              <div className="p-4 md:p-10">
                
                {/* 標題區塊 */}
                <header className="mb-10 border-l-4 border-cyan-500 pl-4 bg-gradient-to-r from-slate-900/80 to-transparent py-6 rounded-r-xl flex flex-col md:flex-row md:items-center gap-6">
                  {/* QR Code */}
                  <div className="hidden md:block bg-white p-2 rounded-lg shrink-0 group relative shadow-lg ring-2 ring-slate-700">
                    <img className="w-24 h-24 object-contain" src={qrCodeApiUrl} alt="QR Code" />
                  </div>

                  <div className="flex-grow w-full">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                      {article.title}
                    </h1>
                    <div className="flex flex-wrap items-center justify-between gap-3 w-full">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-bold border ${activeCategoryStyle}`}>
                          {article.category}
                        </span>
                        <span className="text-slate-400 text-sm">
                          撰文者：<Link href="/about/doctors" className="text-slate-300 hover:text-cyan-400 underline">林羿辰醫師</Link>
                        </span>
                      </div>
                      <span className="text-slate-300 text-sm flex items-center bg-slate-700/50 px-3 py-1 rounded-full border border-slate-600">
                        <i className="fa-regular fa-calendar mr-2"></i>最後更新：{article.lastModified || article.date}
                      </span>
                    </div>
                  </div>
                </header>

                {/* 文章內容 */}
                <div className="article-content text-slate-300 leading-relaxed text-lg pb-6">
                  <div dangerouslySetInnerHTML={{ __html: article.contentHtml }} />
                </div>
              </div>

              {/* 醫師資訊結語 - 樣式同步範本 */}
              <footer className="mt-0">
                <div className="px-4 md:px-10 mb-10">
                  <div className="bg-slate-800/40 backdrop-blur border border-slate-700 rounded-2xl p-6 md:p-8 shadow-lg relative overflow-hidden">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 relative z-10">
                      <div className="flex-grow text-center md:text-left">
                        <h3 className="text-xl font-bold text-white flex flex-col md:flex-row items-center gap-2">
                          本文由 <Link href="/about/doctors" className="text-cyan-400 hover:text-cyan-300 underline">林羿辰醫師</Link> 撰寫與醫學審閱
                          <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded-full border border-cyan-500/30">Verified Expert</span>
                        </h3>
                        <p className="text-sm text-slate-400 mt-1 font-medium">宸新復健科診所院長 / 復健科、骨鬆雙專科醫師</p>
                        <p className="text-slate-300 text-sm md:text-base leading-relaxed mt-4 mb-6">
                          現任宸新復健科診所院長。畢業於國立台灣大學醫學系，專精於精準超音波導引注射治療、增生療法與各類運動傷害。
                        </p>
                        <div className="pt-5 border-t border-slate-700/50">
                          <Link href="/about/doctors" className="text-cyan-400 hover:text-cyan-300 text-sm font-bold flex items-center justify-center md:justify-start group">
                            <i className="fa-solid fa-id-card-clip mr-2 text-lg"></i>
                            👉 查看更多醫師資歷、證照認證
                            <i className="fa-solid fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 分享區塊 */}
                <div className="bg-slate-900/80 p-8 md:p-12 border-t border-slate-700 text-center">
                  <h2 className="text-white font-bold text-2xl mb-3">覺得這篇文章有幫助嗎？</h2>
                  <p className="text-slate-400 mb-8 text-lg">歡迎分享給親朋好友，讓更多人獲得正確的復健知識。</p>
                  <ShareButtons url={currentUrl} title={article.title} />
                  <div className="mt-12">
                    <Link 
                      href="/about/news" 
                      className="inline-flex items-center px-8 py-3.5 text-lg font-bold text-cyan-400 border border-cyan-500/30 rounded-full hover:bg-cyan-500/10 transition-all group"
                    >
                      看更多衛教文章 
                      <i className="fa-solid fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform"></i>
                    </Link>
                  </div>
                </div>
              </footer>

              {/* 參考文獻 */}
              {article.referencesHtml && (
                <section className="px-6 md:px-10 pb-12">
                  <div className="bg-slate-900/50 border border-slate-700/50 rounded-2xl p-6 md:p-8">
                    <div className="flex items-center mb-6 border-b border-slate-700 pb-4">
                      <i className="fa-solid fa-book-bookmark text-cyan-400 text-xl mr-3"></i>
                      <span className="text-white font-bold">參考文獻</span>
                    </div>
                    <div className="references-content text-slate-400 text-sm md:text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: article.referencesHtml }} />
                  </div>
                </section>
              )}
            </article>
          </div>
        </main>
      </div>
    </>
  )
}