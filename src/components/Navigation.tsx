'use client'

import Link from 'next/link'
import Image from 'next/image' 
import { usePathname } from 'next/navigation'

import { 
  FaFacebookF, 
  FaInstagram, 
  FaYoutube, 
  FaCalendarCheck, 
  FaHome, 
  FaChevronDown, 
  FaCaretRight 
} from "react-icons/fa";
import { SiThreads } from "react-icons/si";

// 定義子選單結構
type SubItem = {
  name: string;
  path: string;
}

type NavItem = {
  name: string;
  path: string;
  subItems?: SubItem[];
}

export default function Navigation() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/'
    return pathname?.startsWith(path)
  }

  // ==========================================
  // 🟢 導覽列資料結構
  // ==========================================
  const navItems: NavItem[] = [
    { 
        name: '關於我們', 
        path: '/about',
        subItems: [
            { name: '最新文章與公告', path: '/about/news' },
            { name: '診所環境', path: '/about/clinic' },
            { name: '治療案例分享', path: '/about/cases' },
            { name: '醫師團隊', path: '/about/doctors' },
        ]
    },
    { 
        name: '治療項目', 
        path: '/treatments',
        subItems: [
            { name: 'PRP增生療法', path: '/treatments/prp' },
            { name: '聚焦式震波', path: '/treatments/shockwave' },
            { name: '徒手治療', path: '/treatments/manual' },
            { name: '高能量雷射治療', path: '/treatments/high-intensity-laser' },
            { name: '玻尿酸注射', path: '/treatments/hyaluronic-acid' },
            { name: '肩關節擴張術', path: '/treatments/shoulder-dilation' },
            { name: '超音波導引抽水', path: '/treatments/ultrasound-guided-aspiration' },
            { name: '超音波導引神經解套', path: '/treatments/nerve-hydrodissection' },
            { name: '類固醇注射', path: '/treatments/steroid-injection' },
            { name: '靜脈消炎止痛針', path: '/treatments/iv-pain-relief' },
        ]
    },
    { 
        name: '特色門診', 
        path: '/weight-bone',
        subItems: [
            { name: '猛健樂 (Mounjaro)', path: '/weight-bone/mounjaro' },
            { name: '兒童骨齡評估', path: '/weight-bone/bone-age' },
            { name: '網球運動傷害', path: '/weight-bone/sports-injuries/tennis' },
            { name: '籃球運動傷害', path: '/weight-bone/sports-injuries/basketball' },
            { name: '棒球運動傷害', path: '/weight-bone/sports-injuries/baseball' },
            { name: '重訓運動傷害', path: '/weight-bone/sports-injuries/weight-training' },
            { name: '跑步運動傷害', path: '/weight-bone/sports-injuries/running' },
            { name: '其他運動傷害', path: '/weight-bone/sports-injuries/other' },
        ]
    },
    { 
        name: '疾病衛教', 
        path: '/diseases',
        subItems: [
            { name: '總覽', path: '/diseases' },
            { name: '脊椎髖臀', path: '/diseases/spine-hip' },
            { name: '肩膀', path: '/diseases/shoulder' },
            { name: '手肘', path: '/diseases/elbow' },
            { name: '手部', path: '/diseases/hand' },
            { name: '膝蓋', path: '/diseases/knee' },
            { name: '足踝', path: '/diseases/ankle' },
        ]
    },
  ]

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700 shadow-lg shadow-cyan-900/20">
      <div className="container mx-auto px-3">
        
        {/* Logo 區塊 */}
        <div className="relative flex items-center justify-between py-2 md:py-3 border-b border-slate-800/50 min-h-[52px] md:min-h-[60px]">
          <Link href="/" className="flex items-center gap-2.5 group cursor-pointer md:absolute md:left-1/2 md:-translate-x-1/2 z-10" aria-label="宸新復健科首頁">
              <div className="relative w-10 h-10 md:w-14 md:h-14">
                  <Image 
                    src="/images/main/logo.webp" 
                    alt="新竹宸新復健科診所 Logo" 
                    fill 
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

          {/* 右側區塊 - 圖示已改為 React Icons */}
          <div className="flex items-center gap-2 ml-auto z-20">
              <Link 
                href="/booking"
                className="sm:hidden flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full font-bold shadow-md text-sm active:scale-95 transition-transform"
              >
                 <FaCalendarCheck size={14} /> 預約
              </Link>

              <div className="hidden sm:flex items-center gap-3">
                <Link href="/" title="回到首頁" 
                  className="w-10 h-10 rounded-full bg-slate-800 text-cyan-400 border border-cyan-400 flex items-center justify-center text-lg hover:bg-slate-700 transition-colors shadow-md">
                  <FaHome size={18} />
                </Link>
                <a href="https://www.facebook.com/DrYiChen" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#1877F2] border border-[#1877F2] text-white flex items-center justify-center text-lg hover:scale-110 transition-transform shadow-md">
                  <FaFacebookF size={18} />
                </a>
                <a href="https://www.instagram.com/dryichen/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center text-lg border-none hover:scale-110 transition-transform shadow-md">
                  <FaInstagram size={18} />
                </a>
                <a href="https://www.threads.net/@dryichen" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center text-lg border-none hover:scale-110 transition-transform shadow-md">
                  <SiThreads size={18} />
                </a>
                <a href="https://youtube.com/@dryichen" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#FF0000] border border-[#FF0000] text-white flex items-center justify-center text-lg border-none hover:scale-110 transition-transform shadow-md">
                  <FaYoutube size={18} />
                </a>
              </div>
          </div>
        </div>

        {/* 導覽選單 */}
        <nav className="w-full py-1.5 md:py-2 text-center relative">
           <ul className="flex w-full overflow-x-auto xl:overflow-visible justify-start md:justify-center gap-1 p-0.5 bg-slate-800/30 rounded-none md:rounded-full no-scrollbar px-2 md:px-0">
              
              {navItems.map((item) => (
                <li key={item.path} className="relative group shrink-0 flex-1 sm:flex-none">
                   
                   <div className="relative">
                       <Link 
                         href={item.path} 
                         className={`
                           px-1.5 py-1.5 text-sm 
                           md:px-4 md:py-2 md:text-base 
                           rounded-full font-medium transition-all block whitespace-nowrap flex items-center justify-center
                           ${isActive(item.path) 
                             ? 'text-cyan-400 bg-slate-800 border-b-2 border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.3)]' 
                             : 'text-slate-300 hover:text-white hover:bg-slate-700 border-b-2 border-transparent'}
                         `}
                       >
                         {item.name}
                         
                         {item.subItems && (
                            <span className="hidden md:block ml-1.5">
                                <FaChevronDown size={10} className="transition-transform duration-300 group-hover:rotate-180" />
                            </span>
                         )}
                       </Link>
                   </div>

                   {item.subItems && (
                     <div className="
                        hidden md:block
                        absolute left-1/2 -translate-x-1/2 mt-2 w-48 bg-slate-900 border border-slate-700 rounded-xl shadow-xl overflow-hidden z-50
                        transition-all duration-300 origin-top
                        opacity-0 invisible scale-95 group-hover:opacity-100 group-hover:visible group-hover:scale-100
                     ">
                        <div className="py-1">
                            {item.subItems.map((sub) => (
                                <Link 
                                    key={sub.path} 
                                    href={sub.path}
                                    className="block px-4 py-3 text-sm text-slate-300 hover:bg-slate-800 hover:text-cyan-400 text-left border-b border-slate-800 last:border-0"
                                >
                                    <FaCaretRight size={10} className="inline-block mr-2 text-slate-600" />
                                    {sub.name}
                                </Link>
                            ))}
                        </div>
                     </div>
                   )}
                </li>
              ))}
              
              {/* 電腦版預約按鈕 */}
              <li className="hidden sm:block shrink-0">
                  <Link 
                    href="/booking" 
                    className={`
                      px-3.5 py-1.5 md:px-4 md:py-2 rounded-full text-base font-medium transition-all ml-1 block flex items-center gap-1.5
                      ${isActive('/booking') 
                        ? 'text-white bg-gradient-to-r from-pink-600 to-rose-600 shadow-[0_0_10px_rgba(236,72,153,0.5)]' 
                        : 'text-white bg-gradient-to-r from-pink-500 to-rose-500 hover:shadow-[0_0_10px_rgba(236,72,153,0.5)]'}
                    `}
                  >
                    <FaCalendarCheck size={16} /> 預約
                  </Link>
              </li>
           </ul>
        </nav>
      </div>
    </header>
  )
}