// src/components/Footer.tsx
'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import FooterSearch from '@/components/FooterSearch'

export default function Footer() {
  const [visitCount, setVisitCount] = useState<string>('---,---')

  useEffect(() => {
    // =================================================================
    // 🔢 瀏覽人數計算邏輯 (時間基礎演算法)
    // =================================================================
    
    // 1. 設定起始值 (依照您的要求)
    const BASE_VIEWS = 125; 
    
    // 2. 設定每小時增加的人數 (依照您的要求)
    const VIEWS_PER_HOUR = 9;

    // 3. 設定一個固定的「錨點時間」
    // 設定為 2024-01-01，這樣現在看到的數字會累積到一個合理的量 (約 15~16萬)
    // 且因為時間只會前進，數字永遠只會增加，不會減少
    const ANCHOR_DATE = new Date('2024-01-01T00:00:00').getTime();

    const calculateViews = () => {
      const now = Date.now();
      const timeDiff = now - ANCHOR_DATE;
      // 將毫秒換算成「小時」
      const hoursPassed = timeDiff / (1000 * 60 * 60);
      
      // 公式：起始值 125 + (經過小時數 * 9)
      const currentViews = Math.floor(BASE_VIEWS + (hoursPassed * VIEWS_PER_HOUR));
      
      setVisitCount(currentViews.toLocaleString());
    };

    // 初始化執行
    calculateViews();

    // 每 10 秒更新一次 (雖然每小時才加9，但保持動態更新可以避免長時間停留數值不變)
    const intervalId = setInterval(calculateViews, 10000);

    return () => clearInterval(intervalId);
  }, [])

  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-10 pb-6 mt-auto">
      <div className="container mx-auto px-4">

        {/* =========================================
            Part 1: 快速導覽 (圖片區)
            ✨ SEO 修改：將 h2 改為 h4，避免干擾頁面主要標題結構
           ========================================= */}
        <div className="mb-8">
            <h4 className="text-2xl font-bold font-sans text-white text-center mb-6 tracking-wide">
                <span className="text-cyan-400">快速</span>導覽
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 px-2 max-w-6xl mx-auto">
                
                {/* 1. 關於我們 */}
                <Link href="/about" className="group rounded-xl relative h-28 md:h-36 overflow-hidden shadow-lg border border-slate-700 hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all">
                  <img src="/images/icons/a.jpg"  alt="關於我們" 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent flex items-end p-3">
                      <span className="text-white font-bold text-sm md:text-base group-hover:text-cyan-400 transition-colors">關於我們</span>
                  </div>
                </Link>

                {/* 2. 治療方式 */}
                <Link href="/treatments" className="group rounded-xl relative h-28 md:h-36 overflow-hidden shadow-lg border border-slate-700 hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all">
                  <img src="/images/icons/b.jpg"  alt="治療方式" 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent flex items-end p-3">
                        <span className="text-white font-bold text-sm md:text-base group-hover:text-cyan-400 transition-colors">治療方式</span>
                    </div>
                </Link>

                {/* 3. 減重與骨齡 */}
                <Link href="/weight-bone" className="group rounded-xl relative h-28 md:h-36 overflow-hidden shadow-lg border border-slate-700 hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all">
                  <img src="/images/icons/c.jpg"  alt="減重與骨齡" 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent flex items-end p-3">
                        <span className="text-white font-bold text-sm md:text-base group-hover:text-cyan-400 transition-colors">減重與骨齡</span>
                    </div>
                </Link>

                {/* 4. 疾病衛教 */}
                <Link href="/diseases" className="group rounded-xl relative h-28 md:h-36 overflow-hidden shadow-lg border border-slate-700 hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all">
                  <img src="/images/icons/d.jpg"  alt="疾病衛教" 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent flex items-end p-3">
                        <span className="text-white font-bold text-sm md:text-base group-hover:text-cyan-400 transition-colors">疾病衛教</span>
                    </div>
                </Link>
            </div>
        </div>

        {/* =========================================
            Part 2: 站內搜尋
           ========================================= */}
        <div className="max-w-3xl mx-auto mb-6 border-b border-slate-800 pb-6">
            <FooterSearch />
        </div>

        {/* =========================================
            Part 3: 社群、計數器、聯絡資訊
           ========================================= */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-6 mb-6">
          
          {/* 1. 左側：追蹤我們 + 社群按鈕 + 預約按鈕 */}
          <div className="w-full lg:w-auto">
            <h3 className="text-lg font-bold text-white mb-3 flex items-center h-[28px]">
                追蹤我們
            </h3>
            
            <div className="flex gap-3 items-center flex-wrap">
                <a href="https://www.facebook.com/DrYiChen" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#1877F2] text-white flex items-center justify-center text-base hover:scale-110 transition-transform shadow-lg shadow-blue-500/30" title="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/dryichen/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center text-base hover:scale-110 transition-transform shadow-lg shadow-pink-500/30" title="Instagram"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://www.threads.net/@dryichen" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center text-base hover:scale-110 transition-transform shadow-lg shadow-white/30" title="Threads"><i className="fa-brands fa-threads"></i></a>
                <a href="https://youtube.com/@dryichen" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#FF0000] text-white flex items-center justify-center text-base hover:scale-110 transition-transform shadow-lg shadow-red-500/30" title="YouTube"><i className="fa-brands fa-youtube"></i></a>
                
                {/* 獨立的預約按鈕 */}
                <Link href="/booking" className="px-4 py-1.5 rounded-full text-sm font-medium text-white bg-gradient-to-r from-pink-500 to-rose-500 hover:shadow-[0_0_10px_rgba(236,72,153,0.5)] transition-all flex items-center gap-1.5 ml-1">
                    <i className="fa-solid fa-calendar-check"></i> 馬上預約
                </Link>
            </div>
          </div>

          {/* 2. 中間：累計瀏覽 */}
          <div className="flex flex-col items-center justify-center w-full lg:w-auto my-4 lg:my-0">
             <div className="bg-slate-800/80 px-4 py-1.5 rounded-lg border border-slate-700/50 flex items-center gap-2 shadow-inner">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs text-slate-400">累計瀏覽:</span>
                <span className="font-mono text-cyan-400 font-bold tracking-widest text-base">
                    {visitCount}
                </span>
             </div>
          </div>

          {/* 3. 右側：診所資訊 
              ✨ SEO 修改：加入真實的 Google Maps 連結
          */}
          <div className="text-center lg:text-right text-slate-300 space-y-1.5 w-full lg:w-auto text-sm">
            <p className="flex items-center justify-center lg:justify-end gap-2 group cursor-pointer">
              <i className="fa-solid fa-phone text-cyan-400 group-hover:animate-pulse"></i> 
              <span className="font-mono tracking-wide">(03) 564-7999</span>
            </p>
            <a href="https://www.google.com/maps/search/?api=1&query=宸新復健科診所+新竹市東區光復路一段371號B1" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center lg:justify-end gap-2 hover:text-cyan-400 transition-colors">
              <i className="fa-solid fa-location-dot text-cyan-400"></i>
              <span>300新竹市東區光復路一段371號B1</span>
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 my-4"></div>

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