// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

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
        {/* ✨ 修改這裡：將版本號改為 6.5.1 以支援 Thread 圖示 */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
        />
      </head>
      
      <body className={`${inter.className} bg-slate-900 text-slate-300 antialiased min-h-screen flex flex-col`}>
        {/* 1. 全站導覽列 (Navigation) */}
        <Navigation />
        
        {/* 2. 頁面內容 */}
        {children}
        
        {/* 3. 全站頁尾 (Footer) */}
        <Footer />
        
      </body>
    </html>
  )
}