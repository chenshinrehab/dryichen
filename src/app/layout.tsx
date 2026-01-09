// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css' // 確保您有這個全域樣式檔
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

// 設定字型 (Next.js 預設)
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '新竹宸新復健科診所 - 林羿辰醫師',
  description: '新竹推薦復健科，提供PRP注射、震波治療、徒手治療、兒童骨齡評估。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <head>
        {/* ✨ 關鍵修正：在這裡引入 FontAwesome，圖示才會出現 */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        />
      </head>
      
      {/* 全站共用樣式：深色背景、文字顏色、Flex 排版 */}
      <body className={`${inter.className} bg-slate-900 text-slate-300 antialiased min-h-screen flex flex-col`}>
        
        {/* 1. 導覽列：固定在最上方 */}
        <Navigation />
        
        {/* 2. 頁面內容：中間變動的區域 */}
        {children}
        
        {/* 3. 頁尾：固定在最下方 */}
        <Footer />
        
      </body>
    </html>
  )
}