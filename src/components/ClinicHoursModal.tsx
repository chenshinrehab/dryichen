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
          className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm overflow-y-auto fade-in"
          onClick={() => setIsOpen(false)}
        >
          {/* 修改 1: 
            - 移除 `items-start` 和 `md:items-center`。
            - 改用預設的 Flex 行為 (stretch) 搭配子層的 margin 來控制。
            - 保留 py-12 確保上下有留白。
          */}
          <div className="flex min-h-full justify-center p-4 py-12 text-center"> 
            
            <div 
              // 修改 2: 新增 `my-auto`
              //這會讓它在空間足夠時「垂直置中」，空間不夠時「靠上對齊」且不切頭。
              className="relative max-w-4xl w-full flex justify-center my-auto"
              onClick={(e) => e.stopPropagation()} 
            >
              {/* 右上角關閉按鈕 (X) */}
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute -top-10 right-0 md:-right-8 text-white hover:text-cyan-400 transition-colors z-10 p-2"
              >
                <i className="fa-solid fa-xmark text-4xl"></i>
              </button>

              {/* 門診表圖片 */}
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