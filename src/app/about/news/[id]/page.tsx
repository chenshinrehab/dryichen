// src/app/about/news/[id]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image' 
import { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { newsList, getNewsById } from '@/data/news'
import ShareButtons from '@/components/ShareButtons'

// 定義常數，方便未來修改
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.dryichen.com.tw').trim()

interface PageProps { params: { id: string } }

export async function generateStaticParams() {
  return newsList.map((post) => ({ id: post.id }))
}

// 1. 動態 Meta (強化重點：加入精確座標與主題性 SEO)
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getNewsById(params.id)
  if (!post) return { title: '文章不存在' }
  
  const canonicalUrl = `${SITE_URL}/about/news/${params.id}`
   
  return {
    // 修正：確保標題不重複堆疊診所名稱
    title: post.seoTitle ? post.seoTitle : `${post.title} | 新竹宸新復健科`,
    description: post.seoDescription || post.summary,
    keywords: post.keywords,
    
    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.summary,
      url: canonicalUrl,
      type: 'article',
      siteName: '新竹宸新復健科診所',
      locale: 'zh_TW',
      authors: ['林羿辰醫師'],
       tags: ['復健科', '增生療法', 'PRP', '新竹復健科'],
      images: [
        {
            url: post.coverImage,
            width: 1200,
            height: 630,
            alt: post.title,
        }    ],

    },
    other: {
      'geo.position': '24.783331;121.017094',
      'geo.region': 'TW-Hsinchu', // 新竹區域標記
      'geo.placename': 'Zhubei',
    },

  }
}

export default function NewsDetailPage({ params }: PageProps) {
  const post = getNewsById(params.id)
  if (!post) notFound()

  const currentUrl = `${SITE_URL}/about/news/${params.id}`
  
  // 分類判斷
  const isAnnouncement = post.category === '門診公告' || post.category === '診所活動';
  // 定義重點強化的醫療專業內容類別
  const isMedicalContent = ['衛教文章', '醫學新知', '診間隨筆'].includes(post.category);

  // 2. Schema (根據類別切換結構，針對指定主題深度強化)
  const jsonLdData = {
    '@context': 'https://schema.org',
    // 若非公告，預設使用 MedicalWebPage 以提升專業權重
    '@type': isAnnouncement ? 'NewsArticle' : 'MedicalWebPage',
    '@id': `${currentUrl}#webpage`,
    url: currentUrl,
    [isAnnouncement ? 'headline' : 'name']: post.title,
    alternativeHeadline: post.seoTitle,
    image: [post.coverImage],
    datePublished: post.date,
    dateModified: post.date,
    articleSection: post.category,
    keywords: post.keywords,

    // 針對「衛教文章」、「醫學新知」、「診間隨筆」加入進階醫療標記
    ...(isMedicalContent ? {
        medicalSpecialty: {
            '@type': 'MedicalSpecialty',
            name: 'Physical Medicine and Rehabilitation', // 復健科
            alternateName: '復健科'
        },
        audience: {
            '@type': 'Patient',
            audienceType: 'public',
            geographicArea: {
                '@type': 'AdministrativeArea',
                name: 'Hsinchu City'
            }
        }
    } : {}),

    author: { 
        '@type': 'Person', 
        name: '林羿辰醫師',
        jobTitle: '院長',
        worksFor: {
            '@type': 'MedicalClinic',
            name: '宸新復健科診所'
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: '光復路一段371號B1',
          addressLocality: '新竹市',
          addressRegion: '東區',
          postalCode: '300',
          addressCountry: 'TW',
        },
        url: `${SITE_URL}/about/doctors`
    },
    publisher: { 
        '@type': 'MedicalClinic', 
        name: '宸新復健科診所',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '光復路一段371號B1',
          addressLocality: '新竹市',
          addressRegion: '東區',
          postalCode: '300',
          addressCountry: 'TW',
        },
        // 強化：發布者加入地理座標，提升 Local SEO
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 24.783331,
            longitude: 121.017094 
        },
        logo: {
            '@type': 'ImageObject',
            url: `${SITE_URL}/logo.webp`
        }
    },
    description: post.summary,
    // 針對非公告類文章 (含診間隨筆)，確保有最後審閱資訊
    ...(isAnnouncement ? {} : {
        lastReviewed: post.date,
        reviewedBy: {
            '@type': 'Physician',
            name: '林羿辰醫師',
            medicalSpecialty: 'Physical Medicine and Rehabilitation',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '光復路一段371號B1',
              addressLocality: '新竹市',
              addressRegion: '東區',
              postalCode: '300',
              addressCountry: 'TW',
            },
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

      <style dangerouslySetInnerHTML={{__html: `
        .article-content strong {
            color: #22d3ee !important;
            font-weight: 700;
        }
        .article-content a {
            color: #ec4899 !important;
            font-weight: 600;
            text-decoration: none;
            border-bottom: 1px dashed #ec4899;
            transition: all 0.2s ease;
            display: inline-flex;
            align-items: center;
            gap: 2px;
        }
        .article-content a:hover {
            color: #db2777 !important;
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
        .article-content img {
            max-width: 100%;
            height: auto;
            border-radius: 0.75rem;
            margin: 2rem auto;
            display: block;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.15);
            border: 1px solid #475569;
        }
        @media (min-width: 768px) {
            .article-content img {
                max-width: 85%;
            }
        }
        .article-content h2 {
            font-size: 1.5rem;
            font-weight: 700;
            color: white;
            margin-top: 2.5rem;
            margin-bottom: 1.5rem;
            border-left: 4px solid #06b6d4;
            padding-left: 1rem;
        }
        .article-content h3 {
            font-size: 1.25rem;
            font-weight: 600;
            color: #67e8f9;
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
        <main className="flex-grow pt-0 -mt-10 md:-mt-12 pb-12 fade-in relative z-10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              
            <Link href="/about/news" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-6 transition-colors group">
                <i className="fa-solid fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i> 返回列表
            </Link>

            <article className="bg-slate-800/80 backdrop-blur border border-slate-700 rounded-2xl overflow-hidden shadow-2xl">
                
              <div className="p-4 md:p-10">
                  <header className="mb-10 border-l-4 border-cyan-500 pl-4 bg-gradient-to-r from-slate-900/80 to-transparent py-6 rounded-r-xl flex flex-col md:flex-row md:items-center gap-6">
                      <div className="flex-grow">
                          <h1 className="text-3xl md:text-5xl font-bold font-sans text-white mb-4 tracking-wide leading-tight md:leading-[1.2]">
                              {post.title}
                          </h1>
                            
                          <div className="flex flex-wrap items-center gap-3">
                              <span className={`px-3 py-1 rounded-full text-sm font-bold border ${
                                post.category === '門診公告' 
                                ? 'bg-pink-500/10 text-pink-400 border-pink-500/30' 
                                : 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30'
                              }`}>
                                {post.category}
                              </span>

                              <span className="text-slate-300 text-sm flex items-center bg-slate-700/50 px-3 py-1 rounded-full border border-slate-600">
                                <i className="fa-regular fa-calendar mr-2"></i>{post.date}
                              </span>
                          </div>
                      </div>
                  </header>

                  <div className="article-content text-slate-300 leading-relaxed text-lg pb-6">
                      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
                  </div>
              </div>

              <footer className="mt-0">
                  <div className="text-right pb-4 pr-6">
                    <div className="inline-block text-slate-500 text-[11px] md:text-xs space-y-0.5">
                      <p><span className="mr-2">撰文者 :</span><span className="font-medium text-slate-400">復健專科 宸新復健科院長 林羿辰醫師</span></p>
                      <p><span className="mr-2">資料來源 :</span><span className="font-medium text-slate-400">Pubmed</span></p>
                    </div>
                  </div>

                  <div className="bg-slate-900/80 p-8 md:p-12 border-t border-slate-700 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent blur-sm"></div>
                      
                    <h2 className="text-white font-bold text-2xl mb-3 relative z-10">覺得這篇文章有幫助嗎？</h2>
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
              </footer>

            </article>
          </div>
        </main>
      </div>
    </>
  )
}