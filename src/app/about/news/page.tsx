// src/app/about/news/page.tsx
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
            <div className="mb-10">
                {/* ✨ 3. 返回按鈕動畫 */}
                <div className="animate-on-scroll">
                    <Link 
                      href="/about" 
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-2 transition-colors group text-sm font-medium"
                    >
                       <i className="fa-solid fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i> 
                       返回關於我們
                    </Link>
                </div>

                {/* ✨ 4. 標題動畫 */}
                <div className="border-b border-slate-700 pb-6 text-center animate-on-scroll delay-100">
                    <h1 className="text-3xl md:text-5xl font-bold font-sans text-white tracking-wide mb-3">
                        最新內容
                    </h1>
                </div>
            </div>

            {/* 文章列表 */}
            <div className="space-y-8">
              {newsList.map((item, index) => {
                // ✨ 5. 設定交錯延遲效果 (前 5 篇有明顯層次，後續滾動出現)
                const delays = ['delay-100', 'delay-200', 'delay-300', 'delay-500'];
                const delayClass = index < 4 ? delays[index] : 'delay-100';

                return (
                  <Link 
                    key={item.id} 
                    href={`/about/news/${item.id}`} 
                    className={`block group bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all duration-300 animate-on-scroll ${delayClass}`}
                  >
                    <div className="flex flex-col md:flex-row h-full">
                      {/* 圖片區 */}
                      <div className="md:w-1/3 h-56 md:h-auto relative overflow-hidden">
                        <img 
                          src={item.coverImage} 
                          alt={item.title} 
                          className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent md:bg-transparent"></div>
                      </div>
                      
                      {/* 文字區 */}
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
                          
                          <h2 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors leading-tight">
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
                )
              })}
            </div>

            {/* ✨ 6. SEO 導言區動畫 (加上較長延遲，在列表底部優雅出現) */}
            <div className="mb-12 max-w-3xl mx-auto mt-16 animate-on-scroll delay-500">
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
                  
                  <div className="mt-4 text-lg text-slate-400 leading-relaxed text-left">
                      <p className="mb-4">
                          除了行政公告外，林羿辰醫師團隊也會在此分享最新的復健醫學新知。內容涵蓋<strong className="text-cyan-400 font-normal">PRP增生療法</strong>的成功案例、<strong className="text-cyan-400 font-normal">兒童骨齡</strong>的生長評估知識，以及居家復健運動教學。
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