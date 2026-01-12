// src/components/ShareButtons.tsx
'use client'

import { useState, useEffect } from 'react'

interface ShareButtonsProps {
  url?: string 
  title: string
}

export default function ShareButtons({ url, title }: ShareButtonsProps) {
  const [isCopied, setIsCopied] = useState(false)
  const [shareUrl, setShareUrl] = useState('')

  // ⚠️ 請在此設定您的正式網址 (結尾不要加斜線)
  const SITE_DOMAIN = 'https://dryichen-4ze1.vercel.app'

  useEffect(() => {
    // 確保只在客戶端執行
    if (typeof window !== 'undefined') {
      
      let path = ''

      // 1. 如果父元件有傳入 url (例如 /treatments/prp)
      if (url) {
        // 如果傳入的是完整網址 (http開頭)，直接用
        if (url.startsWith('http')) {
          setShareUrl(url)
          return
        }
        // 如果是相對路徑，把它存起來
        path = url.startsWith('/') ? url : `/${url}`
      } 
      // 2. 如果沒傳入，自動抓取當前頁面的「路徑」 (pathname)
      else {
        path = window.location.pathname // 這裡只抓路徑，例如 /about，不抓 domain
      }

      // 3. 組合：正式網域 + 路徑
      // 這樣就算您在 localhost:3000 測試，分享出去的也會是 https://dryichen...
      setShareUrl(`${SITE_DOMAIN}${path}`)
    }
  }, [url])

  // 防止空網址渲染
  if (!shareUrl) return null

  // --- 分享功能實作 ---

  const handleLineShare = () => {
    window.open(
      `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareUrl)}`,
      '_blank'
    )
  }

  const handleFBShare = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      '_blank'
    )
  }

  const copyLinkToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (err) {
      console.error('複製失敗', err)
    }
  }

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