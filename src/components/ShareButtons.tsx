// src/components/ShareButtons.tsx
'use client'

import { useState, useEffect } from 'react'

interface ShareButtonsProps {
  url: string
  title: string
}

export default function ShareButtons({ url, title }: ShareButtonsProps) {
  const [isCopied, setIsCopied] = useState(false)
  
  // ✨ 關鍵修正：確保網址是完整的 (包含 https://...)
  // 如果傳進來的 url 是 "/about"，我們會自動把它變成 "https://dryichen-4ze1.vercel.app/about"
  const getFullUrl = () => {
    // 您的正式網域
    const domain = 'https://dryichen-4ze1.vercel.app' 

    // 如果 url 已經包含 http，就直接用；否則補上 domain
    if (url.startsWith('http')) {
      return url
    }
    // 確保路徑開頭有斜線
    const path = url.startsWith('/') ? url : `/${url}`
    return `${domain}${path}`
  }

  const shareUrl = getFullUrl()

  // 1. 分享到 LINE (電腦手機皆可)
  const handleLineShare = () => {
    window.open(
      `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareUrl)}`,
      '_blank'
    )
  }

  // 2. 分享到 Facebook (電腦手機皆可)
  const handleFBShare = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      '_blank'
    )
  }

  // 3. 複製網址的共用函式
  const copyLinkToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (err) {
      console.error('複製失敗', err)
    }
  }

  // 4. 分享到 Messenger (智慧判斷)
  const handleMessengerShare = () => {
    // 檢查是否為行動裝置
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )

    if (isMobile) {
      // 手機版：嘗試喚醒 Messenger App
      // 注意：Messenger App 有時對連結格式很嚴格，使用 encodeURIComponent 是必要的
      window.location.href = `fb-messenger://share/?link=${encodeURIComponent(shareUrl)}`
    } else {
      // 電腦版：改為複製連結並提示
      copyLinkToClipboard()
      alert('Messenger 分享功能主要支援手機 App。\n\n已為您複製文章連結，您可以直接貼上對話框傳送給朋友！')
    }
  }

  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center mt-8">
      
      {/* LINE 分享 */}
      <button
        onClick={handleLineShare}
        className="w-full sm:w-auto px-6 py-3 bg-[#06C755] hover:bg-[#05b34c] text-white rounded-full transition-all font-bold shadow-lg hover:shadow-[#06C755]/30 flex items-center justify-center gap-2 transform hover:-translate-y-1"
      >
        <i className="fa-brands fa-line text-2xl"></i>
        分享到 LINE
      </button>

      {/* Messenger 分享 */}
      <button
        onClick={handleMessengerShare}
        className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-[#00B2FF] to-[#006AFF] hover:from-[#0099FF] hover:to-[#0055EE] text-white rounded-full transition-all font-bold shadow-lg hover:shadow-[#0099FF]/30 flex items-center justify-center gap-2 transform hover:-translate-y-1"
      >
        <i className="fa-brands fa-facebook-messenger text-2xl"></i>
        傳送給朋友
      </button>

      {/* FB 分享 */}
      <button
        onClick={handleFBShare}
        className="w-full sm:w-auto px-6 py-3 bg-[#1877F2] hover:bg-[#166fe5] text-white rounded-full transition-all font-bold shadow-lg hover:shadow-[#1877F2]/30 flex items-center justify-center gap-2 transform hover:-translate-y-1"
      >
        <i className="fa-brands fa-facebook text-2xl"></i>
        分享到 FB
      </button>

      {/* 複製連結 */}
      <button
        onClick={copyLinkToClipboard}
        className={`w-full sm:w-auto px-6 py-3 border-2 rounded-full transition-all font-bold flex items-center justify-center gap-2 transform hover:-translate-y-1 ${
          isCopied
            ? 'bg-slate-200 border-slate-200 text-slate-800'
            : 'border-slate-600 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]'
        }`}
      >
        {isCopied ? (
          <>
            <i className="fa-solid fa-check text-xl"></i> 已複製
          </>
        ) : (
          <>
            <i className="fa-solid fa-link text-xl"></i> 複製網址
          </>
        )}
      </button>
      
    </div>
  )
}