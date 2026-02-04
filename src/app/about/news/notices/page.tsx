import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { newsList } from '@/data/news'
import ScrollAnimation from '@/components/ScrollAnimation'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.dryichen.com.tw'
const PAGE_PATH = '/about/news/notices'
const CANONICAL_URL = `${SITE_URL}${PAGE_PATH}`

// 過濾門診公告
const noticesList = newsList.filter(item => item.category === '門診公告');

export const metadata: Metadata = { 
  title: '門診異動公告 - 休診與代診通知 | 新竹宸新復健科',
  description: '查詢新竹宸新復健科最新的門診異動、國定假日休診公告、醫師代診資訊，掌握看診動態。',
  keywords: ['門診時間', '休診公告', '復健科門診', '新竹復健科公告'],
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: '門診異動公告 | 宸新復健科',
    description: '即時更新的門診時間異動與休診資訊。',
    url: CANONICAL_URL,
    type: 'website',
  }
}

export default function NoticesPage() {
  const currentUrl = CANONICAL_URL

  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '首頁', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: '最新消息', item: `${SITE_URL}/about/news` },
      { '@type': 'ListItem', position: 3, name: '門診公告', item: currentUrl },
    ],
  }

  const jsonLdBlog = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${currentUrl}#notices`,
    name: '宸新復健科門診異動公告',
    description: '新竹宸新復健科最新的休診與公告資訊',
    url: currentUrl,
    author: { '@type': 'MedicalOrganization', name: '新竹宸新復健科', url: SITE_URL },
    blogPost: noticesList.map((item) => ({
        '@type': 'BlogPosting',
        headline: item.title,
        description: item.summary,
        url: `${SITE_URL}/about/news/${item.id}`,
        datePublished: item.date,
        image: item.coverImage,
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
            
            <div className="mb-10 animate-on-scroll">
                <div className="text-left mb-4">
                    <Link href="/about/news" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group text-sm font-medium">
                        <i className="fa-solid fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i> 
                        返回衛教文章
                    </Link>
                </div>

                <div className="border-b border-slate-700 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h1 className="text-3xl md:text-5xl font-bold font-sans text-white tracking-wide mb-2">
                            門診異動公告
                        </h1>
                        <p className="text-pink-400">休診、代診與重要行政通知</p>
                    </div>

                    {/* 超醒目青色切換按鈕 */}
                    <Link 
                        href="/about/news" 
                        className="group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-cyan-600 rounded-xl hover:bg-cyan-500 hover:scale-105 shadow-[0_0_20px_rgba(8,145,178,0.4)] hover:shadow-[0_0_30px_rgba(8,145,178,0.6)]"
                    >
                        <span className="mr-3 text-lg"><i className="fa-solid fa-book-medical"></i></span>
                        <div className="flex flex-col items-start leading-tight">
                            <span className="text-base">切換至衛教文章</span>
                        </div>
                        <i className="fa-solid fa-arrow-right ml-4 group-hover:translate-x-1 transition-transform"></i>
                        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
                    </Link>
                </div>
            </div>

            <div className="space-y-8 animate-on-scroll delay-100">
              {noticesList.map((item) => (
                <Link key={item.id} href={`/about/news/${item.id}`} className="block group bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl overflow-hidden hover:border-pink-500 hover:shadow-[0_0_15px_rgba(236,72,153,0.2)] transition-all duration-300">
                  <div className="flex flex-col md:flex-row h-full">
                    <div className="md:w-1/3 h-56 md:h-auto relative overflow-hidden">
                      <img src={item.coverImage} alt={item.title} className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-3 text-sm">
                           <span className="px-2 py-1 rounded border bg-pink-500/10 text-pink-400 border-pink-500/30">{item.category}</span>
                           <span className="text-slate-500 flex items-center"><i className="fa-regular fa-calendar mr-2"></i>{item.date}</span>
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-pink-400 transition-colors leading-relaxed">{item.title}</h2>
                        <p className="text-slate-400 line-clamp-2 mb-4 leading-relaxed">{item.summary}</p>
                        <div className="mt-auto text-pink-500 text-sm font-bold group-hover:translate-x-1 transition-transform inline-flex items-center">
                            查看詳情 <i className="fa-solid fa-arrow-right ml-2"></i>
                        </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  )
}