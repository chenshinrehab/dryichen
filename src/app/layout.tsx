// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

// 定義標準網域
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.dryichen.com.tw';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL), 

  // 1. 全站預設標題
  title: {
    default: '新竹宸新復健科診所 - 骨科/復健/兒童早療推薦 | 林羿辰醫師',
    template: '%s | 新竹宸新復健科'
  },
  
  description: '新竹推薦復健科，由台大醫師林羿辰院長親自看診。提供高解析超音波導引PRP注射、聚焦式震波治療、徒手物理治療與兒童骨齡生長評估。',
  
  // 2. 全站關鍵字
  keywords: ['新竹復健科', '新竹骨科', '林羿辰', 'PRP注射', '震波治療', '兒童早療', '竹科復健'],

  // 3. 全站預設 Canonical (安全網)
  alternates: {
    canonical: './',
  },

  // 4. 全站預設 Open Graph
  openGraph: {
    type: 'website',
    locale: 'zh_TW',
    url: SITE_URL,
    siteName: '新竹宸新復健科診所',
    title: '新竹宸新復健科診所 - 骨科/復健/兒童早療推薦',
    description: '新竹復健科首選，台大醫師團隊，提供最專業的骨科疼痛治療與兒童發展評估。',
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: '新竹宸新復健科診所',
      },
    ],
  },

  // 5. 爬蟲設定
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      {/* ✨ 修正：手動加回 <head> 區塊來載入 FontAwesome 
        這是確保圖示 (如 fa-solid, fa-brands) 能正常顯示最穩定的方法
      */}
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
        />
      </head>
      
      <body className={`${inter.className} bg-slate-900 text-slate-300 antialiased min-h-screen flex flex-col`}>
        {/* 1. 全站導覽列 (Navigation) */}
        <Navigation />
        
        {/* 2. 頁面內容 */}
        <main className="flex-grow pt-14 md:pt-20"> 
           {children}
        </main>
        
        {/* 3. 全站頁尾 (Footer) */}
        <Footer />
        
      </body>
    </html>
  )
}