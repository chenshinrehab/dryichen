// src/app/about/news/[id]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
// 假設您有這個 helper function，如果沒有請直接從 newsData import 並 find
import { newsData } from '@/data/news' 

interface PageProps {
  params: {
    id: string
  }
}

// 1. 產生靜態路徑
export async function generateStaticParams() {
  return newsData.map((item) => ({ id: item.id }))
}

// 2. SEO Meta 設定
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const item = newsData.find((n) => n.id === params.id)
  if (!item) return { title: '文章不存在' }

  return {
    title: `${item.title} - 最新消息 | 新竹宸新復健科`,
    description: item.summary,
    // 如果您資料裡有 keywords 欄位就用，沒有的話可以設預設值
    keywords: [item.category, '新竹復健科', '林羿辰醫師', item.title],
    openGraph: {
      title: item.title,
      description: item.summary,
      images: [item.coverImage],
      type: 'article',
      publishedTime: item.date,
    }
  }
}

export default function NewsDetailPage({ params }: PageProps) {
  const item = newsData.find((n) => n.id === params.id)
  if (!item) notFound()

  const siteUrl = 'https://www.dryichen.com.tw'
  const currentUrl = `${siteUrl}/about/news/${params.id}`

  // 1. 麵包屑 Schema
  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '首頁', item: `${siteUrl}/` },
      { '@type': 'ListItem', position: 2, name: '最新消息', item: `${siteUrl}/about/news` },
      { '@type': 'ListItem', position: 3, name: item.title, item: currentUrl },
    ],
  }

  // ✨ 2. 核心 Schema：動態判斷類型
  let jsonLdArticle;

  // 邏輯判斷：如果是「門診公告」或「行政類」，用 NewsArticle
  // 如果是「衛教文章」、「醫療新知」，用 MedicalWebPage
  const isAnnouncement = item.category === '門診公告' || item.category === '診所動態';

  if (isAnnouncement) {
    // A. 一般公告：使用 NewsArticle
    jsonLdArticle = {
      '@context': 'https://schema.org',
      '@type': 'NewsArticle',
      headline: item.title,
      image: [item.coverImage],
      datePublished: item.date,
      dateModified: item.date, // 如果有更新時間更好
      author: [{
          '@type': 'Organization',
          name: '新竹宸新復健科',
          url: siteUrl
      }]
    };
  } else {
    // B. 衛教文章：使用 MedicalWebPage (權重最高)
    jsonLdArticle = {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      '@id': `${currentUrl}#webpage`,
      name: item.title,
      description: item.summary,
      url: currentUrl,
      // 醫療專業認證欄位
      author: {
        '@type': 'MedicalOrganization',
        name: '新竹宸新復健科',
        url: siteUrl
      },
      reviewedBy: {
        '@type': 'Physician',
        name: '林羿辰院長'
      },
      lastReviewed: item.date, // 衛教文章需要標示時間
      // 定義這篇文章的主題是醫療知識
      mainEntity: {
        '@type': 'MedicalScholarlyArticle', // 或是 Article
        headline: item.title,
        image: item.coverImage,
        datePublished: item.date,
        author: { '@type': 'Physician', name: '林羿辰醫師' },
        publisher: { '@type': 'MedicalOrganization', name: '新竹宸新復健科', logo: { '@type': 'ImageObject', url: `${siteUrl}/logo.png` } }
      }
    };
  }

  return (
    <>
      <JsonLd data={jsonLdBreadcrumb} />
      <JsonLd data={jsonLdArticle} />

      {/* 內文樣式設定 (沿用您喜歡的風格) */}
      <style dangerouslySetInnerHTML={{__html: `
        .news-content p {
            margin-bottom: 1.5rem;
            line-height: 1.8;
            font-size: 1.125rem;
            color: #cbd5e1;
        }
        .news-content h2 {
            font-size: 1.75rem;
            font-weight: 700;
            color: white;
            margin-top: 2.5rem;
            margin-bottom: 1.25rem;
            border-left: 4px solid #06b6d4; /* cyan-500 */
            padding-left: 1rem;
        }
        .news-content h3 {
            font-size: 1.5rem;
            font-weight: 600;
            color: #22d3ee; /* cyan-400 */
            margin-top: 2rem;
            margin-bottom: 1rem;
        }
        .news-content strong {
            color: #22d3ee;
        }
        .news-content ul {
            list-style-type: disc;
            padding-left: 1.5rem;
            margin-bottom: 1.5rem;
            color: #cbd5e1;
        }
        .news-content img {
            border-radius: 0.75rem;
            margin: 2rem auto;
            max-width: 100%;
            height: auto;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
        }
        @media (min-width: 768px) {
            .news-content img { max-width: 85%; }
        }
      `}} />

      <div className="min-h-screen bg-slate-900 text-slate-300 pt-4 pb-12 md:pt-8 md:pb-16 fade-in">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* 導航列 */}
          <nav className="mb-8 flex items-center text-sm text-slate-500">
             <Link href="/about/news" className="hover:text-cyan-400 transition-colors">最新消息</Link>
             <i className="fa-solid fa-angle-right mx-2 text-xs"></i>
             <span className="text-cyan-500 truncate">{item.title}</span>
          </nav>

          <article className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl overflow-hidden shadow-2xl">
              
              {/* 文章封面圖 (如果有) */}
              {item.coverImage && (
                  <div className="relative h-64 md:h-96 w-full">
                      <img 
                        src={item.coverImage} 
                        alt={item.title} 
                        className="absolute inset-0 w-full h-full object-cover" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
                  </div>
              )}

              <div className="p-6 md:p-12 -mt-20 relative z-10">
                  
                  {/* 文章標頭資訊 */}
                  <div className="mb-8">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                          <span className={`px-3 py-1 rounded-full text-sm border font-medium ${
                              item.category === '門診公告' 
                              ? 'bg-pink-500/20 text-pink-400 border-pink-500/30' 
                              : 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30'
                          }`}>
                              {item.category}
                          </span>
                          <span className="text-slate-400 text-sm flex items-center">
                              <i className="fa-regular fa-calendar mr-2"></i>
                              {item.date}
                          </span>
                      </div>
                      
                      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                          {item.title}
                      </h1>
                  </div>

                  {/* 文章內容 */}
                  <div className="news-content">
                      {item.contentHtml ? (
                          <div dangerouslySetInnerHTML={{ __html: item.contentHtml }} />
                      ) : (
                          // 如果沒有 HTML 內容，顯示摘要或預設文字
                          <p>{item.summary}</p>
                      )}
                  </div>

                  {/* 底部導航 */}
                  <div className="mt-12 pt-8 border-t border-slate-700/50 flex justify-between items-center">
                      <Link href="/about/news" className="inline-flex items-center text-slate-400 hover:text-white transition-colors">
                          <i className="fa-solid fa-arrow-left mr-2"></i> 回列表
                      </Link>
                      
                      {/* 分享按鈕可放這裡 */}
                  </div>

              </div>
          </article>
          
        </div>
      </div>
    </>
  )
}