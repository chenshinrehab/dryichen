import React from 'react'
import Link from 'next/link'
import { newsData } from '@/data/news'

export const metadata = { 
  title: '最新內容 - 宸新復健科',
  description: '提供最新的門診公告、休診通知，以及專業的復健醫學衛教文章。'
}

export default function NewsListPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <Link href="/about" className="inline-flex items-center text-cyan-400 mb-8 hover:text-cyan-300 transition-colors group">
           <i className="fa-solid fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i> 返回關於我們
        </Link>
        <div className="mb-12 text-center">
            <h1 className="text-3xl font-bold text-white mb-2">最新內容</h1>
            <p className="text-slate-400">門診公告、衛教文章與醫學新知</p>
        </div>
        <div className="space-y-8">
          {newsData.map((item) => (
            <Link key={item.id} href={`/about/news/${item.id}`} className="block group bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-500 hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 h-48 md:h-auto relative overflow-hidden">
                  <img src={item.coverImage} alt={item.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="md:w-2/3 p-6 flex flex-col justify-center">
                   <div className="flex items-center gap-3 mb-3 text-sm">
                      <span className="bg-cyan-500/10 text-cyan-400 px-2 py-1 rounded">{item.category}</span>
                      <span className="text-slate-500"><i className="fa-regular fa-calendar mr-1"></i>{item.date}</span>
                   </div>
                   <h2 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{item.title}</h2>
                   <p className="text-slate-400 line-clamp-2">{item.summary}</p>
                   <div className="mt-4 text-cyan-500 text-sm font-medium group-hover:translate-x-1 transition-transform inline-flex items-center">
                      閱讀更多 <i className="fa-solid fa-arrow-right ml-1"></i>
                   </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}