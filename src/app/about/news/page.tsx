// src/app/about/news/page.tsx
import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { newsList } from '@/data/news'
import ScrollAnimation from '@/components/ScrollAnimation'

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.dryichen.com.tw').trim()
const PAGE_PATH = '/about/news'
const CANONICAL_URL = `${SITE_URL}${PAGE_PATH}`

// 過濾衛教文章 (排除門診公告類別)
const articlesList = newsList.filter(item => item.category !== '門診公告');

// ==========================================
// 1. Meta 設定 (優化 Title 並加入 Geo 標籤)
// ==========================================
export const metadata: Metadata = { 
  // 修正：僅提供頁面標題，由 layout.tsx 模板附加診所名稱
  title: '復健衛教文章 - 最新醫療新知',
  description: '提供新竹宸新復健科最新的復健醫學衛教文章，包含 PRP 增生療法、骨骼肌肉超音波、兒童骨齡與生長評估等專業知識。',
  keywords: ['復健衛教', 'PRP注射', '兒童骨齡', '新竹復健科', '疼痛管理', '宸新復健科'],
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: '復健衛教文章 | 新竹宸新復健科',
    description: '深入淺出的復健醫學與疼痛管理知識分享。',
    url: CANONICAL_URL,
    type: 'website',
    siteName: '新竹宸新復健科診所',
  },
  // 加入在地化 Geo 標記
  other: {
    'geo.region': 'TW-HCH',
    'geo.placename': '新竹市',
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
      { '@type': 'ListItem', position: 3, name: '最新衛教文章', item: currentUrl },
    ],
  }
    
  const jsonLdBlog = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${currentUrl}#blog`,
    name: '宸新復健科復健衛教專區',
    description: '專業醫師撰寫的復健醫學與疼痛管理衛教文章',
    url: currentUrl,
    publisher: {
        '@type': 'MedicalClinic',
        name: '新竹宸新復健科診所',
        logo: {
            '@type': 'ImageObject',
            url: `${SITE_URL}/logo.webp`
        }
    },
    author: {
        '@type': 'MedicalOrganization',
        name: '新竹宸新復健科',
        url: SITE_URL
    },
    blogPost: articlesList.map((item) => ({
        '@type': 'BlogPosting',
        headline: item.title,
        description: item.summary,
        url: `${SITE_URL}/about/news/${item.id}`,
        datePublished: item.date,
        image: item.coverImage,
        author: { '@type': 'Person', name: '林羿辰醫師' }
    }))
  }

  return (
    <>
      <JsonLd data={jsonLdBreadcrumb} />
      <JsonLd data={jsonLdBlog} />
      <ScrollAnimation />

      <div className="min-h-screen flex flex-col bg-slate-900 text-slate-300">
        <main className="flex-grow pt-0 -mt-10 md:-mt-12 pb-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header 區塊 */}
            <div className="mb-10 animate-on-scroll">
                <div className="text-left mb-4">
                    <Link href="/about" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group text-sm font-medium">
                        <i className="fa-solid fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i> 
                        返回關於我們
                    </Link>
                </div>

                <div className="border-b border-slate-700 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h1 className="text-3xl md:text-5xl font-bold font-sans text-white tracking-wide mb-2">
                            最新衛教文章
                        </h1>
                        <p className="text-slate-400">專業醫師團隊撰寫的復健醫學新知</p>
                    </div>

                    {/* 超醒目粉紅切換按鈕 */}
                    <Link 
                        href="/about/news/notices" 
                        className="group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-pink-600 rounded-xl hover:bg-pink-500 hover:scale-105 shadow-[0_0_20px_rgba(219,39,119,0.4)] hover:shadow-[0_0_30px_rgba(219,39,119,0.6)]"
                    >
                        <span className="mr-3 text-lg"><i className="fa-solid fa-calendar-check"></i></span>
                        <div className="flex flex-col items-start leading-tight">
                            <span className="text-base">切換至門診公告</span>
                        </div>
                        <i className="fa-solid fa-arrow-right ml-4 group-hover:translate-x-1 transition-transform"></i>
                        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
                    </Link>
                </div>
            </div>

            {/* 文章列表 */}
            <div className="space-y-8 animate-on-scroll delay-100">
              {articlesList.map((item) => (
                <Link key={item.id} href={`/about/news/${item.id}`} className="block group bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all duration-300">
                  <div className="flex flex-col md:flex-row h-full">
                    <div className="md:w-1/3 h-56 md:h-auto relative overflow-hidden">
                      {/* 優化 Alt：包含診所與文章標題關鍵字 */}
                      <img 
                        src={item.coverImage} 
                        alt={`新竹宸新復健科衛教文章：${item.title}`} 
                        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                      />
                    </div>
                    <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-3 text-sm">
                            <span className="px-2 py-1 rounded border bg-cyan-500/10 text-cyan-400 border-cyan-500/30">{item.category}</span>
                            <span className="text-slate-500 flex items-center"><i className="fa-regular fa-calendar mr-2"></i>{item.date}</span>
                        </div>
                        {/* H2 正確應用於列表標題 */}
                        <h2 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors leading-relaxed">
                            {item.title}
                        </h2>
                        <p className="text-slate-400 line-clamp-2 mb-4 leading-relaxed">{item.summary}</p>
                        <div className="mt-auto text-cyan-500 text-sm font-bold group-hover:translate-x-1 transition-transform inline-flex items-center">
                            閱讀更多 <i className="fa-solid fa-arrow-right ml-2"></i>
                        </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mb-12 max-w-3xl mx-auto mt-16 animate-on-scroll delay-300 text-center text-slate-400 text-sm">
                <p>想要掌握休診動態？請點擊上方按鈕前往「<Link href="/about/news/notices" className="text-pink-400 underline underline-offset-4">門診異動公告</Link>」。</p>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}