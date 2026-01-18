// src/components/ClinicHoursModal.tsx
'use client'

import { useState } from 'react'

export default function ClinicHoursModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* 1. 觸發按鈕 */}
      <button 
        onClick={() => setIsOpen(true)}
        className="px-6 py-2 border border-slate-600 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 rounded-full transition-colors text-sm font-bold cursor-pointer"
      >
        門診時間
      </button>

      {/* 2. 彈出視窗 (Modal) */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm overflow-y-auto fade-in" // 修改1: 改為 overflow-y-auto 允許捲動
          onClick={() => setIsOpen(false)}
        >
          {/* 修改2: 新增一個 min-h-full 的容器來負責置中與排列，確保長圖不會被切到 */}
          <div className="flex min-h-full items-center justify-center p-4 py-12"> 
            
            <div 
              className="relative max-w-4xl w-full flex justify-center"
              onClick={(e) => e.stopPropagation()} 
            >
              {/* 右上角關閉按鈕 (X) - 調整位置，確保不會跑出畫面外 */}
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute -top-10 right-0 md:-right-8 text-white hover:text-cyan-400 transition-colors z-10"
              >
                <i className="fa-solid fa-xmark text-4xl"></i>
              </button>

              {/* 門診表圖片 */}
              {/* 修改3: 移除 max-h 的嚴格限制，讓圖片可以依比例呈現，並保留 rounded 與 shadow */}
              <img 
                src="/images/doctor/a.jpg" 
                alt="宸新復健科門診時間表" 
                className="w-full h-auto object-contain rounded-lg shadow-2xl border border-slate-700 bg-slate-900"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}