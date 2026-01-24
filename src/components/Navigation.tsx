// src/components/Navigation.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image' // ✨ 引入 Image
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  // 判斷是否為當前頁面 (微調邏輯：確保首頁不被其他路徑誤判)
  const isActive = (path: string) => {
    if (path === '/') return pathname === '/'
    // 解決子路徑高亮問題 (例如 /about/news 也應該讓 /about 高亮)
    return pathname?.startsWith(path)
  }

  const navItems = [
    { name: '關於我們', path: '/about' },
    { name: '治療項目', path: '/treatments' },
    { name: '減重與骨齡', path: '/weight-bone' },
    { name: '疾病衛教', path: '/diseases' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700 shadow-lg shadow-cyan-900/20">
      <div className="container mx-auto px-3">
        
        {/* Logo 區塊 */}
        <div className="relative flex items-center justify-between py-2 md:py-3 border-b border-slate-800/50 min-h-[52px] md:min-h-[60px]">
          {/* ✨ 優化：加入 aria-label */}
          <Link href="/" className="flex items-center gap-2.5 group cursor-pointer md:absolute md:left-1/2 md:-translate-x-1/2 z-10" aria-label="宸新復健科首頁">
              {/* ✨ 優化：改用 Next.js Image */}
              <div className="relative w-10 h-10 md:w-14 md:h-14">
                  <Image 
                    src="/images/main/logo.png" 
                    alt="新竹宸新復健科診所 Logo" 
                    fill // 使用 fill 讓它填滿父容器，並配合 sizes 優化
                    sizes="(max-width: 768px) 40px, 56px"
                    className="rounded-full object-cover border-2 border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)] group-hover:shadow-[0_0_15px_rgba(34,211,238,0.8)] transition-all duration-300"
                  />
              </div>
              <div className="text-left">
                <div className="text-base md:text-2xl font-bold font-sans text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 leading-tight">
                  運動教練醫師-林羿辰
                </div>
                <p className="text-[10px] md:text-xs text-slate-400 tracking-wider leading-none mt-0.5">宸新復健科診所院長</p>
              </div>
          </Link>

          {/* 右側區塊：包含手機版預約按鈕 & 電腦版社群圖示 */}
          <div className="flex items-center gap-2 ml-auto z-20">
              
              {/* 手機版專用「預約」按鈕 */}
              <Link 
                href="/booking"
                className="sm:hidden flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full font-bold shadow-md text-sm active:scale-95 transition-transform"
              >
                 <i className="fa-solid fa-calendar-check"></i> 預約
              </Link>

              {/* 電腦版社群圖示 */}
              <div className="hidden sm:flex items-center gap-3">
                <Link href="/" title="回到首頁" 
                  className="w-10 h-10 rounded-full bg-slate-800 text-cyan-400 border border-cyan-400 flex items-center justify-center text-lg hover:bg-slate-700 transition-colors shadow-md">
                  <i className="fa-solid fa-house"></i>
                </Link>

                <a href="https://www.facebook.com/DrYiChen" target="_blank" rel="noopener noreferrer" 
                   className="w-10 h-10 rounded-full bg-[#1877F2] border border-[#1877F2] text-white flex items-center justify-center text-lg hover:scale-110 transition-transform shadow-md" aria-label="Facebook 粉絲專頁">
                   <i className="fa-brands fa-facebook-f"></i>
                </a>

                <a href="https://www.instagram.com/dryichen/" target="_blank" rel="noopener noreferrer" 
                   className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center text-lg border-none hover:scale-110 transition-transform shadow-md" aria-label="Instagram">
                   <i className="fa-brands fa-instagram"></i>
                </a>

                <a href="https://www.threads.net/@dryichen" target="_blank" rel="noopener noreferrer" 
                   className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center text-lg border-none hover:scale-110 transition-transform shadow-md" aria-label="Threads">
                   <i className="fa-brands fa-threads"></i>
                </a>

                <a href="https://youtube.com/@dryichen" target="_blank" rel="noopener noreferrer" 
                   className="w-10 h-10 rounded-full bg-[#FF0000] border border-[#FF0000] text-white flex items-center justify-center text-lg border-none hover:scale-110 transition-transform shadow-md" aria-label="YouTube 頻道">
                   <i className="fa-brands fa-youtube"></i>
                </a>
             </div>
          </div>
        </div>

        {/* 導覽選單 - 手機版瘦身優化 */}
        <nav className="w-full overflow-x-auto xl:overflow-visible py-1.5 md:py-2 text-center no-scrollbar">
           <ul className="flex w-full justify-between sm:justify-center sm:w-auto sm:inline-flex gap-0.5 md:gap-1 p-0.5 bg-slate-800/30 rounded-none md:rounded-full">
              {navItems.map((item) => (
                <li key={item.path} className="flex-1 sm:flex-none">
                   <Link 
                     href={item.path} 
                     className={`
                       px-1.5 py-1.5 text-sm 
                       md:px-4 md:py-2 md:text-base 
                       rounded-full font-medium transition-all block whitespace-nowrap
                       ${isActive(item.path) 
                         ? 'text-cyan-400 bg-slate-800 border-b-2 border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.3)]' 
                         : 'text-slate-300 hover:text-white hover:bg-slate-700 border-b-2 border-transparent'}
                     `}
                   >
                     {item.name}
                   </Link>
                </li>
              ))}
              
              {/* 電腦版顯示的預約按鈕 (手機版隱藏) */}
              <li className="hidden sm:block">
                  <Link 
                    href="/booking" 
                    className={`
                      px-3.5 py-1.5 md:px-4 md:py-2 rounded-full text-base font-medium transition-all ml-1 block
                      ${isActive('/booking') 
                        ? 'text-white bg-gradient-to-r from-pink-600 to-rose-600 shadow-[0_0_10px_rgba(236,72,153,0.5)]' 
                        : 'text-white bg-gradient-to-r from-pink-500 to-rose-500 hover:shadow-[0_0_10px_rgba(236,72,153,0.5)]'}
                    `}
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