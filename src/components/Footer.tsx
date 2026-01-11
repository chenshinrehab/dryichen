// src/components/Footer.tsx
'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import FooterSearch from '@/components/FooterSearch'

export default function Footer() {
  // 模擬瀏覽人次的狀態
  const [visitCount, setVisitCount] = useState<string>('---,---')

  useEffect(() => {
    // 這裡是一個模擬的邏輯：
    // 每次載入時，生成一個 85000 ~ 85999 之間的隨機數字，看起來像真的有人在瀏覽
    // 如果您之後有串接 Google Analytics 或後端 API，可以在這裡替換
    const baseCount = 85000
    const randomIncrement = Math.floor(Math.random() * 999)
    const total = baseCount + randomIncrement
    
    // 格式化數字 (加上逗號)
    setVisitCount(total.toLocaleString())
  }, [])

  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8 mt-auto">
      <div className="container mx-auto px-4">

        {/* =========================================
            Part 1: 快速導覽
           ========================================= */}
        <div className="mb-12 border-b border-slate-800 pb-12">
            <h2 className="text-2xl font-bold font-sans text-white text-center mb-8 tracking-wide">
                <span className="text-cyan-400">快速</span>導覽
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-2 max-w-6xl mx-auto">
                
                {/* 1. 關於我們 */}
                <Link href="/about" className="group rounded-xl relative h-40 overflow-hidden shadow-lg border border-slate-700 hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all">
                <img src="/images/icons/a.jpg"  alt="宸新復健科 林羿辰醫師" 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent flex items-end p-4">
                        <span className="text-white font-bold group-hover:text-cyan-400 transition-colors">關於我們</span>
                    </div>
                </Link>

                {/* 2. 治療方式 */}
                <Link href="/treatments" className="group rounded-xl relative h-40 overflow-hidden shadow-lg border border-slate-700 hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all">
                 <img src="/images/icons/b.jpg"  alt="宸新復健科 林羿辰醫師" 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent flex items-end p-4">
                        <span className="text-white font-bold group-hover:text-cyan-400 transition-colors">治療方式</span>
                    </div>
                </Link>

                {/* 3. 減重與骨齡 */}
                <Link href="/weight-bone" className="group rounded-xl relative h-40 overflow-hidden shadow-lg border border-slate-700 hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all">
                <img src="/images/icons/c.jpg"  alt="宸新復健科 林羿辰醫師" 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent flex items-end p-4">
                        <span className="text-white font-bold group-hover:text-cyan-400 transition-colors">減重與骨齡</span>
                    </div>
                </Link>

                {/* 4. 疾病衛教 */}
                <Link href="/diseases" className="group rounded-xl relative h-40 overflow-hidden shadow-lg border border-slate-700 hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all">
                <img src="/images/icons/d.jpg"  alt="宸新復健科 林羿辰醫師" 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent flex items-end p-4">
                        <span className="text-white font-bold group-hover:text-cyan-400 transition-colors">疾病衛教</span>
                    </div>
                </Link>
            </div>
        </div>

        {/* ✨ 3. 新增：站內搜尋 (放在中間) */}
          <div>
             <FooterSearch />
          </div>


        {/* =========================================
            Part 2: 社群、計數器、聯絡資訊
           ========================================= */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-8">
          
          {/* 1. 左側：追蹤我們 + 社群按鈕 + 預約按鈕 */}
          <div className="flex flex-col gap-3 w-full lg:w-auto items-center lg:items-start">
            {/* 新增：追蹤我們標題 */}
            <h3 className="text-sm font-bold text-slate-400 tracking-wider uppercase border-l-2 border-cyan-500 pl-2">
                追蹤我們 <span className="text-slate-600 text-xs font-normal normal-case">Follow Us</span>
            </h3>
            
            <div className="flex gap-3 items-center flex-wrap justify-center lg:justify-start">
                <a href="https://www.facebook.com/DrYiChen" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center text-lg hover:scale-110 transition-transform shadow-lg shadow-blue-500/30" title="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/dryichen/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center text-lg hover:scale-110 transition-transform shadow-lg shadow-pink-500/30" title="Instagram"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://www.threads.net/@dryichen" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center text-lg hover:scale-110 transition-transform shadow-lg shadow-white/30" title="Threads"><i className="fa-brands fa-threads"></i></a>
                <a href="https://youtube.com/@dryichen" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#FF0000] text-white flex items-center justify-center text-lg hover:scale-110 transition-transform shadow-lg shadow-red-500/30" title="YouTube"><i className="fa-brands fa-youtube"></i></a>
                
                {/* 獨立的預約按鈕 */}
                <Link href="/booking" className="px-4 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r from-pink-500 to-rose-500 hover:shadow-[0_0_10px_rgba(236,72,153,0.5)] transition-all flex items-center gap-1.5 ml-1">
                    <i className="fa-solid fa-calendar-check"></i> 馬上預約
                </Link>
            </div>
          </div>

          {/* 2. 中間：累計瀏覽 (新增區塊) */}
          <div className="flex flex-col items-center justify-center w-full lg:w-auto">
             <div className="bg-slate-800/80 px-4 py-2 rounded-lg border border-slate-700/50 flex items-center gap-2 shadow-inner">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs text-slate-400">累計瀏覽:</span>
                <span className="font-mono text-cyan-400 font-bold tracking-widest text-lg">
                    {visitCount}
                </span>
             </div>
          </div>

          {/* 3. 右側：診所資訊 */}
          <div className="text-center lg:text-right text-slate-300 space-y-2 w-full lg:w-auto">
            <p className="flex items-center justify-center lg:justify-end gap-2 group cursor-pointer">
              <i className="fa-solid fa-phone text-cyan-400 group-hover:animate-pulse"></i> 
              <span className="font-mono tracking-wide">(03) 564-7999</span>
            </p>
            <a href="https://goo.gl/maps/placeholder" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center lg:justify-end gap-2 hover:text-cyan-400 transition-colors">
              <i className="fa-solid fa-location-dot text-cyan-400"></i>
              <span>300新竹市東區光復路一段371號B1</span>
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 my-6"></div>

        <div className="text-center">
          <p className="text-slate-500 text-xs leading-relaxed">
            © {new Date().getFullYear()} 宸新復健科診所 林羿辰醫師. All Rights Reserved.<br />
            <span className="text-slate-600 block mt-1">本網站內容僅供衛教參考，不能取代專業醫師診斷。</span>
          </p>
        </div>

      </div>
    </footer>
  )
}