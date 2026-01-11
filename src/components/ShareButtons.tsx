// src/components/ShareButtons.tsx
'use client'

import { useState } from 'react'

interface ShareButtonsProps {
  url: string
  title: string
}

export default function ShareButtons({ url, title }: ShareButtonsProps) {
  const [isCopied, setIsCopied] = useState(false)

  // 1. 分享到 LINE (電腦手機皆可)
  const handleLineShare = () => {
    window.open(
      `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}`,
      '_blank'
    )
  }

  // 2. 分享到 Facebook (電腦手機皆可)
  const handleFBShare = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      '_blank'
    )
  }

  // 3. 複製網址的共用函式
  const copyLinkToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (err) {
      console.error('複製失敗', err)
    }
  }

  // 4. 分享到 Messenger (智慧判斷)
  const handleMessengerShare = () => {
    // 檢查是否為行動裝置 (手機/平板)
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )

    if (isMobile) {
      // 手機版：直接喚醒 Messenger App
      window.location.href = `fb-messenger://share/?link=${encodeURIComponent(url)}`
    } else {
      // 電腦版：因為 Meta 限制電腦版分享需 App ID，
      // 這裡改為「自動複製連結」並提示使用者貼上，體驗會比較順暢。
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

      {/* Messenger 分享 (藍色漸層) */}
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