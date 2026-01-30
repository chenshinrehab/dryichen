import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { newsList } from '@/data/news'
// ✨ 1. 引入動畫組件
import ScrollAnimation from '@/components/ScrollAnimation'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.dryichen.com.tw'
const PAGE_PATH = '/about/news'
const CANONICAL_URL = `${SITE_URL}${PAGE_PATH}`

// ==========================================
// 1. Meta 設定 (完整保留)
// ==========================================
export const metadata: Metadata = { 
  title: '最新內容 - 門診公告與復健衛教 | 新竹宸新復健科',
  description: '提供新竹宸新復健科最新的門診異動公告、休診通知，以及專業醫師撰寫的骨科復健、PRP注射、兒童骨齡等衛教文章。',
  keywords: ['新竹復健科公告', '門診時間', '復健衛教', '醫療新知'],
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: '最新內容 - 門診公告與復健衛教 | 宸新復健科',
    description: '最新門診異動、休診公告與復健醫學衛教文章。',
    url: CANONICAL_URL,
    type: 'website',
  }
}

export default function NewsListPage() {
  const currentUrl = CANONICAL_URL

  // ==========================================
  // 2. Schema 結構化資料 (完整保留)
  // ==========================================
  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '首頁', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: '關於我們', item: `${SITE_URL}/about` },
      { '@type': 'ListItem', position: 3, name: '最新消息', item: currentUrl },
    ],
  }
    
  const jsonLdBlog = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${currentUrl}#blog`,
    name: '宸新復健科最新消息',
    description: '新竹宸新復健科門診異動公告與衛教文章發布專區',
    url: currentUrl,
    author: {
        '@type': 'MedicalOrganization',
        name: '新竹宸新復健科',
        url: SITE_URL
    },
    blogPost: newsList.map((item) => ({
        '@type': 'BlogPosting',
        headline: item.title,
        description: item.summary,
        url: `${currentUrl}/${item.id}`,
        datePublished: item.date,
        image: item.coverImage,
        author: {
            '@type': 'Organization',
            name: '宸新復健科'
        }
    }))
  }

  return (
    <>
      <JsonLd data={jsonLdBreadcrumb} />
      <JsonLd data={jsonLdBlog} />
      
      {/* ✨ 2. 放置動畫邏輯 */}
      <ScrollAnimation />

      <div className="min-h-screen flex flex-col bg-slate-900 text-slate-300">
        
        <main className="flex-grow pt-0 -mt-10 md:-mt-12 pb-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header 區塊 */}
            <div className="mb-10 text-center animate-on-scroll">
                {/* ✨ 3. 返回按鈕動畫 */}
                <div className="text-left mb-2">
                    <Link 
                      href="/about" 
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group text-sm font-medium"
                    >
                       <i className="fa-solid fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i> 
                       返回關於我們
                    </Link>
                </div>

                {/* ✨ 4. 標題動畫 - 依照範本同步滑入 */}
                <div className="border-b border-slate-700 pb-6">
                    <h1 className="text-3xl md:text-5xl font-bold font-sans text-white tracking-wide mb-3">
                        最新內容
                    </h1>
                </div>
            </div>

            {/* ✨ 5. 文章列表 Grid - 參考範本：由容器統一控制同步進場 (delay-100) */}
            <div className="space-y-8 animate-on-scroll delay-100">
              {newsList.map((item) => (
                <Link 
                  key={item.id} 
                  href={`/about/news/${item.id}`} 
                  // 移除單張卡片的動畫類別，改由上方容器統一進場
                  className="block group bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row h-full">
                    {/* 圖片區 (完整保留) */}
                    <div className="md:w-1/3 h-56 md:h-auto relative overflow-hidden">
                      <img 
                        src={item.coverImage} 
                        alt={item.title} 
                        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent md:bg-transparent"></div>
                    </div>
                    
                    {/* 文字區 (完整保留) */}
                    <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-3 text-sm">
                           <span className={`px-2 py-1 rounded border ${
                              item.category === '門診公告' ? 'bg-pink-500/10 text-pink-400 border-pink-500/30' : 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30'
                           }`}>
                              {item.category}
                           </span>
                           <span className="text-slate-500 flex items-center">
                              <i className="fa-regular fa-calendar mr-2"></i>{item.date}
                           </span>
                        </div>
                        
                        <h2 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors leading-relaxed">
                            {item.title}
                        </h2>
                        
                        <p className="text-slate-400 line-clamp-2 mb-4 leading-relaxed">
                            {item.summary}
                        </p>
                        
                        <div className="mt-auto text-cyan-500 text-sm font-bold group-hover:translate-x-1 transition-transform inline-flex items-center">
                            閱讀更多 <i className="fa-solid fa-arrow-right ml-2"></i>
                        </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* ✨ 6. SEO 導言區動畫 - 參考範本 (delay-300) */}
            <div className="mb-12 max-w-3xl mx-auto mt-16 animate-on-scroll delay-300">
              <details className="group border-l-4 border-cyan-500 pl-4">
                  <summary className="list-none [&::-webkit-details-marker]:hidden text-lg text-slate-400 leading-relaxed outline-none cursor-pointer select-none text-left">
                      <span className="inline-block h-full">
                        掌握<strong className="text-cyan-400 font-normal">新竹宸新復健科</strong>的第一手消息。我們定期更新門診異動、國定假日休診公告。
                        <span className="group-open:hidden">
                            ... 
                            <span className="ml-1 text-sm text-cyan-500 hover:text-cyan-400 hover:underline underline-offset-4 font-semibold">
                                了解更多 <i className="fa-solid fa-chevron-down text-xs"></i>
                            </span>
                        </span>
                      </span>
                  </summary>
                  
                  <div className="mt-4 text-lg text-slate-400 leading-relaxed text-left animate-in fade-in slide-in-from-top-1 duration-300">
                      <p className="mb-4">
                          除了行政公告外，林羿辰醫師團隊也會在此分享最新的復健醫學新知。內容涵蓋<strong className="text-cyan-400 font-normal">PRP增生療法</strong>的成功案例、<strong className="text-cyan-400 font-normal">兒童骨齡</strong>的生長評估知識。
                      </p>
                      <p>
                          希望透過淺顯易懂的衛教文章，幫助新竹民眾建立正確的疼痛管理觀念，遠離痠痛困擾。
                      </p>
                  </div>
              </details>
            </div>

          </div>
        </main>
      </div>
    </>
  )
}