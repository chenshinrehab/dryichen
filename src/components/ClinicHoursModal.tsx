// src/components/ClinicHoursModal.tsx
'use client'

import { useState } from 'react'

export default function ClinicHoursModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* 1. 觸發按鈕 (樣式保持跟原本一樣) */}
      <button 
        onClick={() => setIsOpen(true)}
        className="px-6 py-2 border border-slate-600 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 rounded-full transition-colors text-sm font-bold cursor-pointer"
      >
        門診時間
      </button>

      {/* 2. 彈出視窗 (Modal) */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 fade-in"
          onClick={() => setIsOpen(false)} // 點擊背景也能關閉
        >
          {/* 圖片容器 */}
          <div 
            className="relative max-w-4xl w-full max-h-[90vh] flex justify-center"
            onClick={(e) => e.stopPropagation()} // 點擊圖片本身不關閉
          >
            {/* 右上角關閉按鈕 (X) */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute -top-10 right-0 md:-right-10 text-white hover:text-cyan-400 transition-colors"
            >
              <i className="fa-solid fa-xmark text-4xl"></i>
            </button>

            {/* 門診表圖片 */}
            <img 
              src="/images/doctor/a.jpg" 
              alt="宸新復健科門診時間表" 
              className="w-auto h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl border border-slate-700"
            />
          </div>
        </div>
      )}
    </>
  )
}