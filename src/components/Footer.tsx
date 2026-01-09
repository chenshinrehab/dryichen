// src/components/Footer.tsx
'use client'

import React from 'react'
import Link from 'next/link' // 記得引入 Link

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8 mt-auto">
      <div className="container mx-auto px-4">

        {/* =========================================
            Part 1: 快速導覽 (從主頁搬過來的)
           ========================================= */}
        <div className="mb-12 border-b border-slate-800 pb-12">
            <h2 className="text-2xl font-bold font-sans text-white text-center mb-8 tracking-wide">
                <span className="text-cyan-400">快速</span>導覽
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-2 max-w-6xl mx-auto">
                
                {/* 卡片 1: 治療方式 */}
                <Link href="/treatments" className="group rounded-xl relative h-40 overflow-hidden shadow-lg border border-slate-700 hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all">
                    <img src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=800" alt="治療方式" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent flex items-end p-4">
                        <span className="text-white font-bold group-hover:text-cyan-400 transition-colors">治療方式</span>
                    </div>
                </Link>

                {/* 卡片 2: 減重與骨齡 */}
                <Link href="/weight-bone" className="group rounded-xl relative h-40 overflow-hidden shadow-lg border border-slate-700 hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all">
                    <img src="https://duk.tw/R97hvw.jpg" alt="減重與骨齡" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent flex items-end p-4">
                        <span className="text-white font-bold group-hover:text-cyan-400 transition-colors">減重與骨齡</span>
                    </div>
                </Link>

                 {/* 卡片 3: 預約看診 */}
                 <Link href="/booking" className="group rounded-xl relative h-40 overflow-hidden shadow-lg border border-slate-700 hover:border-pink-500 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-all">
                    <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
                        <i className="fa-solid fa-calendar-check text-4xl text-slate-600 group-hover:text-pink-500 transition-colors duration-300"></i>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent flex items-end p-4">
                        <span className="text-white font-bold group-hover:text-pink-400 transition-colors">馬上預約</span>
                    </div>
                </Link>

                {/* 卡片 4: 疾病衛教 */}
                <Link href="/diseases" className="group rounded-xl relative h-40 overflow-hidden shadow-lg border border-slate-700 hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all">
                    <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
                        <i className="fa-solid fa-book-medical text-4xl text-slate-600 group-hover:text-cyan-500 transition-colors duration-300"></i>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent flex items-end p-4">
                        <span className="text-white font-bold group-hover:text-cyan-400 transition-colors">疾病衛教</span>
                    </div>
                </Link>
            </div>
        </div>

        {/* =========================================
            Part 2: 原本的社群與聯絡資訊
           ========================================= */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          
          {/* 左側：社群按鈕 */}
          <div className="flex gap-3">
            <a 
              href="https://www.facebook.com/DrYiChen" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center text-lg hover:scale-110 transition-transform shadow-lg shadow-blue-500/30"
              title="Facebook"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a 
              href="https://www.instagram.com/dryichen/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center text-lg hover:scale-110 transition-transform shadow-lg shadow-pink-500/30"
              title="Instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a 
              href="https://www.threads.net/@dryichen" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center text-lg hover:scale-110 transition-transform shadow-lg shadow-white/30"
              title="Threads"
            >
              <i className="fa-brands fa-threads"></i>
            </a>
            <a 
              href="https://youtube.com/@dryichen" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#FF0000] text-white flex items-center justify-center text-lg hover:scale-110 transition-transform shadow-lg shadow-red-500/30"
              title="YouTube"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>

          {/* 右側：診所資訊 */}
          <div className="text-center md:text-right text-slate-300 space-y-2">
            <p className="flex items-center justify-center md:justify-end gap-2 group cursor-pointer">
              <i className="fa-solid fa-phone text-cyan-400 group-hover:animate-pulse"></i> 
              <span className="font-mono tracking-wide">(03) 564-7999</span>
            </p>
            <a 
              href="https://goo.gl/maps/placeholder" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center md:justify-end gap-2 hover:text-cyan-400 transition-colors"
            >
              <i className="fa-solid fa-location-dot text-cyan-400"></i>
              <span>300新竹市東區光復路一段371號B1</span>
            </a>
          </div>
        </div>

        {/* 分隔線 */}
        <div className="border-t border-slate-800 my-6"></div>

        {/* 下半部：版權宣告 */}
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