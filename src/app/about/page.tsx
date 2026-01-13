// src/app/about/page.tsx
import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'

// ==========================================
// 1. Meta 設定
// ==========================================
export const metadata: Metadata = {
  title: '關於我們 - 新竹復健科推薦 | 台大醫師林羿辰 | 竹科/關埔/光復路骨科診所',
  description: '新竹東區/竹科復健科首選。宸新復健科由台大林羿辰醫師主持，位於關埔重劃區(近Costco、光復路)。提供骨科痛症、運動傷害、兒童早療等全方位治療。附設專屬停車位，就醫方便。',
  keywords: [
    '新竹復健科', '新竹骨科', '台大醫師', '林羿辰',
    '新竹竹科', '新竹科學園區', '關埔重劃區', '光復路', '關新路', '新竹東區', 'Costco附近',
    '新竹復健推薦', '假日有開復健科', '好停車復健科'
  ],
}

// ==========================================
// 2. Schema 結構化資料
// ==========================================
const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  'name': '宸新復健科診所',
  'image': 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
  'medicalSpecialty': ['Physical Medicine and Rehabilitation', 'Orthopedics', 'Pediatrics'],
  'address': {
    '@type': 'PostalAddress',
    'addressLocality': '新竹市東區',
    'addressRegion': 'Hsinchu City',
    'addressCountry': 'TW',
    'streetAddress': '關新路與光復路交界'
  },
  'areaServed': [
    { '@type': 'Place', 'name': 'Hsinchu Science Park' },
    { '@type': 'AdministrativeArea', 'name': 'Hsinchu East District' },
    { '@type': 'AdministrativeArea', 'name': 'Guanpu' }
  ],
  'founder': {
    '@type': 'Person',
    'name': '林羿辰 醫師',
    'jobTitle': '院長',
    'alumniOf': 'National Taiwan University'
  },
  'openingHoursSpecification': [
    {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      'opens': '09:00',
      'closes': '21:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': 'Saturday',
      'opens': '09:00',
      'closes': '12:00'
    }
  ]
}

// 頁面選單資料
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
    id: 'clinic',
    title: '診所介紹',
    subtitle: 'Clinic Information',
    description: '舒適寬敞的復健空間，配備醫學中心等級的檢查與治療設備，提供高品質的醫療服務。',
    href: '/about/clinic',
    image: '/images/about/b.jpg',
    icon: 'fa-solid fa-hospital'
  },
  {
    id: 'doctors',
    title: '醫師介紹',
    subtitle: 'Our Physicians',
    description: '由台大訓練醫師團隊親自看診，結合骨科與復健科專業，提供全方位的疼痛治療方案。',
    href: '/about/doctors',
    image: '/images/about/a.jpg',
    icon: 'fa-solid fa-user-doctor'
  }
]

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutSchema} />

      <div className="min-h-screen bg-slate-900 text-slate-300">
      <main className="max-w-5xl mx-auto px-4 pt-4 pb-12 md:pt-8 md:pb-16 fade-in">
          
          {/* ============================================================
              ✨ 標題區塊 (置中版)
             ============================================================ */}
          <div className="flex items-center justify-center gap-3 mb-10">
              <span className="bg-cyan-500/20 text-cyan-400 p-3 rounded-lg border border-cyan-500/30">
                  <i className="fa-solid fa-address-card text-xl"></i>
              </span>
              <h1 className="text-3xl font-bold font-sans text-white">
                  關於我們 <span className="text-slate-500 text-lg font-normal ml-2">About Us</span>
              </h1>
          </div>

          {/* ============================================================
              ✨ SEO 導言區 (修正版)
              1. max-w-3xl + mx-auto: 設定固定寬度並置中，這是避免內容跳動的關鍵。
              2. border-l-4 在 details 上: 確保線條會隨內容延伸。
              3. text-left: 確保文字緊貼左側藍線。
             ============================================================ */}
          <div className="mb-12 max-w-3xl mx-auto">
                <details className="group border-l-4 border-cyan-500 pl-4">
                    {/* Summary: 永遠顯示的第一段 */}
                    {/* list-none 與 [&::-webkit-details-marker]:hidden 用來隱藏原生三角形，避免移位 */}
                    <summary className="list-none [&::-webkit-details-marker]:hidden text-lg text-slate-400 leading-relaxed outline-none cursor-pointer select-none text-left">
                        <span className="inline-block h-full">
                            我們是<strong className="text-cyan-400 font-normal">新竹推薦</strong>的首選復健專科診所。擁有<strong className="text-cyan-400 font-normal">醫學中心等級</strong>的醫療設備及醫療人員。
                            
                            {/* 展開提示文字 */}
                            <span className="group-open:hidden">
                                ... 
                                <span className="ml-1 text-sm text-cyan-500 hover:text-cyan-400 hover:underline underline-offset-4 font-semibold">
                                    了解更多 <i className="fa-solid fa-chevron-down text-xs"></i>
                                </span>
                            </span>
                        </span>
                    </summary>
                    
                    {/* 展開後的詳細內容 */}
                    <div className="mt-4 text-lg text-slate-400 leading-relaxed text-left animate-in fade-in slide-in-from-top-1 duration-300">
                        <p className="mb-4">
                            宸新復健科座落於繁華的<strong className="text-cyan-400 font-normal">新竹東區</strong>核心地帶，緊鄰<strong className="text-cyan-400 font-normal">新竹科學園區 (竹科)</strong> 與熱鬧的<strong className="text-cyan-400 font-normal">關埔重劃區</strong>。
                        </p>
                        <p className="mb-4">
                            診所位置交通極其便利，位於<strong className="text-cyan-400 font-normal">光復路</strong>與<strong className="text-cyan-400 font-normal">關新路</strong>交界處附近。無論您是住在關新社區的居民，或是下班後從竹科過來的工程師，甚至是剛逛完 <strong className="text-cyan-400 font-normal">Costco (好市多)</strong> 的民眾，都能輕鬆抵達。
                        </p>
                        <p>
                            為了解決新竹市區停車困難的問題，我們特別規劃了<strong className="text-cyan-400 font-normal">專屬停車位</strong>，讓您就醫復健不再為了找車位而煩惱。我們提供骨科疼痛、運動傷害、增生注射、高階儀器、兒童早療等全方位治療。
                        </p>
                    </div>
                </details>
          </div>

          {/* 卡片連結區塊 */}
          <div className="grid grid-cols-1 gap-8">
            {aboutSections.map((item) => (
              <Link 
                key={item.id} 
                href={item.href}
                className="group relative bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-500 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300 flex flex-col md:flex-row h-auto md:h-64 cursor-pointer"
              >
                {/* 圖片區塊 */}
                <div className="w-full md:w-2/5 relative h-48 md:h-full overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={`${item.title} - 宸新復健科 - 新竹推薦`}
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-900/90 to-transparent"></div>
                </div>
                
                {/* 文字內容區塊 */}
                <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-center relative">
                   <i className={`${item.icon} absolute right-4 bottom-4 text-8xl text-slate-800/50 -rotate-12 group-hover:text-cyan-900/30 transition-colors duration-500 pointer-events-none`}></i>
                   
                   <div className="relative z-10">
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors flex items-center">
                        {item.title}
                        <i className="fa-solid fa-arrow-right opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-2 transition-all ml-3 text-lg text-cyan-500"></i>
                      </h2>
                      <h3 className="text-sm font-tech text-cyan-500/80 mb-4 tracking-widest uppercase font-semibold">{item.subtitle}</h3>
                      <p className="text-slate-300 text-lg leading-relaxed">{item.description}</p>
                   </div>
                </div>
              </Link>
            ))}
          </div>

        </main>
      </div>
    </>
  )
}