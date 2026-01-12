// src/components/ShareButtons.tsx
'use client'

import { useState, useEffect } from 'react'

interface ShareButtonsProps {
  // 這裡把 url 變成可選的，因為我們會自動抓取
  url?: string 
  title: string
}

export default function ShareButtons({ url, title }: ShareButtonsProps) {
  const [isCopied, setIsCopied] = useState(false)
  const [shareUrl, setShareUrl] = useState('')

  // ✨ 關鍵修正：自動抓取瀏覽器當下的完整網址
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // 如果有傳入 url 就用傳入的 (需包含 https)，否則就自動抓取當前網址
      // 這樣可以保證網址絕對正確，不會少路徑
      if (url && url.startsWith('http')) {
        setShareUrl(url)
      } else {
        setShareUrl(window.location.href)
      }
    }
  }, [url])

  // 如果還沒抓到網址，先不要渲染按鈕，避免錯誤
  if (!shareUrl) return null

  // 1. 分享到 LINE
  const handleLineShare = () => {
    window.open(
      `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareUrl)}`,
      '_blank'
    )
  }

  // 2. 分享到 Facebook
  const handleFBShare = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      '_blank'
    )
  }

  // 3. 複製網址
  const copyLinkToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (err) {
      console.error('複製失敗', err)
    }
  }

  // 4. 分享到 Messenger
  const handleMessengerShare = () => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )

    if (isMobile) {
      window.location.href = `fb-messenger://share/?link=${encodeURIComponent(shareUrl)}`
    } else {
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