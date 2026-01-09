// src/components/Footer.tsx
'use client'

import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-6 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
           {/* 社群連結可以放在這裡，或保留在各頁面內容中 */}
        </div>
        <p className="text-slate-500 text-xs leading-relaxed">
          © 2024 宸新復健科診所 林羿辰醫師. All Rights Reserved.<br />
          <span className="text-slate-600">本網站內容僅供衛教參考，不能取代專業醫師診斷。</span>
        </p>
      </div>
    </footer>
  )
}
