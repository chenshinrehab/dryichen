import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { newsData } from '@/data/news'

// 1. Meta 設定
export const metadata: Metadata = { 
  title: '最新內容 - 門診公告與復健衛教 | 新竹宸新復健科',
  description: '提供新竹宸新復健科最新的門診異動公告、休診通知，以及專業醫師撰寫的骨科復健、PRP注射、兒童骨齡等衛教文章。',
  keywords: ['新竹復健科公告', '門診時間', '復健衛教', '醫療新知']
}

export default function NewsListPage() {
  
  // 2. Schema: CollectionPage
  const jsonLdCollection = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: '宸新復健科最新消息',
    description: '門診公告與衛教文章彙整',
    url: 'https://www.dryichen.com.tw/about/news'
  }

  return (
    <>
      <JsonLd data={jsonLdCollection} />

      {/* ✨ 修改重點：上方留白再減少
          1. pt-1 -> pt-0 (手機版上方完全無內距)
          2. md:pt-8 -> md:pt-4 (電腦版上方內距減半)
      */}
      <div className="min-h-screen bg-slate-900 text-slate-300 pt-0 pb-12 md:pt-4 md:pb-16 fade-in">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
           
          {/* 返回按鈕 */}
          <Link href="/about" className="inline-flex items-center text-cyan-400 mb-8 hover:text-cyan-300 transition-colors group">
             <i className="fa-solid fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i> 返回關於我們
          </Link>

          {/* 標題區塊 */}
          <div className="text-center mb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-wider">最新內容</h1>
              <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full"></div>
          </div>

          {/* SEO 導言區 */}
          <div className="mb-12 max-w-3xl mx-auto">
              <details className="group border-l-4 border-cyan-500 pl-4">
                  {/* Summary */}
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
                  
                  {/* Content */}
                  <div className="mt-4 text-lg text-slate-400 leading-relaxed text-left animate-in fade-in slide-in-from-top-1 duration-300">
                      <p className="mb-4">
                          除了行政公告外，林羿辰醫師團隊也會在此分享最新的復健醫學新知。內容涵蓋<strong className="text-cyan-400 font-normal">PRP增生療法</strong>的成功案例、<strong className="text-cyan-400 font-normal">兒童骨齡</strong>的生長評估知識，以及居家復健運動教學。
                      </p>
                      <p>
                          希望透過淺顯易懂的衛教文章，幫助新竹民眾建立正確的疼痛管理觀念，遠離痠痛困擾。
                      </p>
                  </div>
              </details>
          </div>

          {/* 文章列表 */}
          <div className="space-y-8">
            {newsData.map((item) => (
              <Link 
                key={item.id} 
                href={`/about/news/${item.id}`} 
                className="block group bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all duration-300"
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
            ))}
          </div>

        </div>
      </div>
    </>
  )
}