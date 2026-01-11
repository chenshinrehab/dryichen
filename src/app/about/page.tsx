import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '關於我們 - 新竹宸新復健科',
  description: '診所介紹、醫師團隊與最新衛教資訊。',
}

const aboutSections = [
  {
    id: 'news',
    title: '最新內容',
    subtitle: 'Latest News',
    description: '掌握診所最新公告、門診異動、以及最新的復健醫學新知與衛教文章。',
    href: '/about/news',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800',
    icon: 'fa-solid fa-newspaper'
  },
  {
    id: 'doctors',
    title: '醫師介紹',
    subtitle: 'Our Physicians',
    description: '由台大訓練醫師團隊親自看診，結合骨科與復健科專業，提供全方位的疼痛治療方案。',
    href: '/about/doctors',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800',
    icon: 'fa-solid fa-user-doctor'
  },
  {
    id: 'clinic',
    title: '診所介紹',
    subtitle: 'Clinic Information',
    description: '舒適寬敞的復健空間，配備醫學中心等級的檢查與治療設備，提供高品質的醫療服務。',
    href: '/about/clinic',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
    icon: 'fa-solid fa-hospital'
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-300">
      <main className="max-w-5xl mx-auto px-4 py-12 md:py-16 fade-in">
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-wider">關於我們</h1>
            <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full"></div>
            <p className="mt-4 text-lg text-slate-400">專業、熱忱、全方位的復健醫療團隊</p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {aboutSections.map((item) => (
            <Link 
              key={item.id} 
              href={item.href}
              className="group relative bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-500 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300 flex flex-col md:flex-row h-auto md:h-64"
            >
              <div className="w-full md:w-2/5 relative h-48 md:h-full overflow-hidden">
                <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"/>
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-900/80 to-transparent"></div>
              </div>
              <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-center relative">
                 <i className={`${item.icon} absolute right-4 bottom-4 text-8xl text-slate-800/50 -rotate-12 group-hover:text-cyan-900/30 transition-colors duration-500 pointer-events-none`}></i>
                 <div className="relative z-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors flex items-center">
                      {item.title}
                      <i className="fa-solid fa-arrow-right opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-2 transition-all ml-3 text-lg"></i>
                    </h2>
                    <h3 className="text-sm font-tech text-cyan-500/80 mb-4 tracking-widest uppercase">{item.subtitle}</h3>
                    <p className="text-slate-300 text-lg leading-relaxed">{item.description}</p>
                 </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}