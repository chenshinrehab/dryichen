// src/components/Navigation.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  // 判斷連結是否為當前頁面，用來顯示高亮樣式
  // 如果是首頁 '/', 只有完全匹配時才高亮
  // 其他頁面只要開頭匹配即可 (例如 /treatments/detail 也算在 /treatments)
  const isActive = (path: string) => {
    if (path === '/') return pathname === '/'
    return pathname.startsWith(path)
  }

  // 您指定的 5 個選項
  const navItems = [
    { name: '關於我們', path: '/' }, // 對應原本的 switchTab('about')
    { name: '治療方式', path: '/treatments' },
    { name: '減重與骨齡', path: '/weight-loss' },
    { name: '疾病衛教', path: '/diseases' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700 shadow-lg shadow-cyan-900/20">
      <div className="container mx-auto px-3">
        
        {/* --- 上半部：Logo、標題、社群按鈕 --- */}
        <div className="relative flex items-center justify-between py-2 md:py-3 border-b border-slate-800/50 min-h-[52px] md:min-h-[60px]">
          
          {/* 1. 左側/中間 Logo 區塊 (點擊回首頁) */}
          <Link href="/" className="flex items-center gap-2.5 group cursor-pointer md:absolute md:left-1/2 md:-translate-x-1/2 z-10">
             {/* 圖片連結請確認是否正確，如果不顯示請檢查網址 */}
             <img 
               src="https://duk.tw/iHBaCj.png" 
               alt="新竹宸新復健科診所 Logo" 
               className="w-10 h-10 md:w-14 md:h-14 rounded-full object-cover border-2 border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)] group-hover:shadow-[0_0_15px_rgba(34,211,238,0.8)] transition-all duration-300"
             />
             <div className="text-left">
               <h1 className="text-base md:text-2xl font-bold font-sans text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 leading-tight">
                 運動教練醫師-林羿辰
               </h1>
               <p className="text-[10px] md:text-xs text-slate-400 tracking-wider leading-none mt-0.5">
                 宸新復健科診所院長
               </p>
             </div>
          </Link>

          {/* 2. 右側 社群按鈕區塊 (手機版隱藏，桌機版顯示) */}
          <div className="flex items-center gap-2 ml-auto z-20">
             <div className="hidden sm:flex items-center gap-2">
                <Link href="/" title="回到首頁" className="w-8 h-8 rounded-full bg-slate-800 text-cyan-400 border border-cyan-400 flex items-center justify-center text-xs hover:bg-slate-700 transition-colors">
                   <i className="fa-solid fa-house"></i>
                </Link>
                <a href="https://www.facebook.com/DrYiChen" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#1877F2] border border-[#1877F2] text-white flex items-center justify-center text-xs hover:scale-110 transition-transform"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/dryichen/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center text-xs border-none hover:scale-110 transition-transform"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://www.threads.net/@dryichen" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center text-xs border-none hover:scale-110 transition-transform"><i className="fa-brands fa-threads"></i></a>
                <a href="https://youtube.com/@dryichen" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#FF0000] border border-[#FF0000] text-white flex items-center justify-center text-xs border-none hover:scale-110 transition-transform"><i className="fa-brands fa-youtube"></i></a>
             </div>
          </div>
        </div>

        {/* --- 下半部：導覽列選項 (Tab) --- */}
        <nav className="w-full overflow-x-auto xl:overflow-visible py-1.5 md:py-2 text-center no-scrollbar">
           <ul className="inline-flex justify-center min-w-max gap-1 p-0.5 bg-slate-800/30 rounded-none md:rounded-full">
              {navItems.map((item) => (
                <li key={item.path}>
                   <Link 
                     href={item.path}
                     className={`px-3.5 py-1.5 md:px-3 md:py-2 rounded-full text-sm font-medium transition-all block ${
                       isActive(item.path)
                         ? 'text-cyan-400 active' // 這裡保留 active class 讓原本的 css 運作
                         : 'text-slate-300 hover:text-white hover:bg-slate-700'
                     }`}
                   >
                     {item.name}
                   </Link>
                </li>
              ))}
              
              {/* 預約按鈕 (獨立樣式) */}
              <li>
                 <Link 
                   href="/booking"
                   className={`px-3.5 py-1.5 md:px-3 md:py-2 rounded-full text-sm font-medium transition-all ml-1 block ${
                      isActive('/booking')
                        ? 'text-white bg-gradient-to-r from-pink-600 to-rose-600 shadow-[0_0_10px_rgba(236,72,153,0.5)]'
                        : 'text-white bg-gradient-to-r from-pink-500 to-rose-500 hover:shadow-[0_0_10px_rgba(236,72,153,0.5)]'
                   }`}
                 >
                   <i className="fa-solid fa-calendar-check mr-1"></i> 預約
                 </Link>
              </li>
           </ul>
        </nav>

      </div>
    </header>
  )
}