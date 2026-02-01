import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', 
})

// --- 安全處理網址 (防禦環境變數空白導致的報錯) ---
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.dryichen.com.tw').trim();

// --- 1. Viewport 配置 (Next.js 14.2+ 標準) ---
export const viewport: Viewport = {
  themeColor: '#0f172a', // 配合你的 bg-slate-900，讓手機網址列顏色統一
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

// --- 2. SEO Metadata 配置 ---
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: '新竹宸新復健科診所 - 骨科/復健/兒童早療推薦 | 林羿辰醫師',
    template: '%s | 新竹宸新復健科'
  },
  description: '新竹推薦復健科，由台大醫師林羿辰院長親自看診。提供高解析超音波導引PRP注射、聚焦式震波治療、徒手物理治療與兒童骨齡生長評估。',
  keywords: ['新竹復健科', '新竹骨科', '林羿辰醫師', 'PRP注射', '震波治療', '兒童早療', '新竹物理治療', '竹科復健推薦'],

  // Google Search Console 驗證
  verification: {
    google: null, // DNS 已驗證，此處留空安全
  },

  // 防止電話號碼在 iOS 上被強制變色或產生奇怪樣式
  formatDetection: {
    telephone: false,
  },

  alternates: {
    canonical: './',
  },

  // Open Graph (FB/LINE 分享)
  openGraph: {
    type: 'website',
    locale: 'zh_TW',
    url: SITE_URL,
    siteName: '新竹宸新復健科診所',
    title: '新竹宸新復健科診所 - 骨科/復健/兒童早療推薦',
    description: '新竹復健科首選，台大醫師團隊，提供專業骨科疼痛治療與兒童發展評估。',
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: '新竹宸新復健科診所 - 林羿辰醫師',
      },
    ],
  },
  
  // Twitter Card (Threads/X 分享大圖)
  twitter: {
    card: 'summary_large_image',
    title: '新竹宸新復健科診所 - 林羿辰醫師',
    description: '專業 PRP 注射、震波治療與兒童早療評估。',
    images: ['/images/og-default.jpg'],
  },

  // 標題列圖示 (Favicon)
  icons: {
    icon: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },

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
  // --- 3. JSON-LD 在地化結構化資料 (最專業的 SEO 強化) ---
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: '新竹宸新復健科診所',
    alternateName: 'Chenxin Rehabilitation Clinic',
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.ico`,
    image: `${SITE_URL}/images/og-default.jpg`,
    description: '新竹推薦復健科，提供專業 PRP、震波治療與兒童早療評估。',
    address: {
      '@type': 'PostalAddress',
      addressLocality: '新竹市', 
      addressRegion: 'TW',
      postalCode: '300',
      streetAddress: '東區光復路一段371號B1',
    },
    telephone: '+886-3-564-7999', 
    priceRange: '$$',
    openingHours: [
      'Mo,Tu,We,Th,Fr 08:00-21:00',
      'Sa 08:00-18:00'
    ], 
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '24.7833314', 
      longitude: '121.0170937'
    }
  };

  return (
    <html lang="zh-TW" className="scroll-smooth">
      <head>
        {/* JSON-LD 注入 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* 手機效能預連線 */}
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
        
        {/* ✨ 效能強化：FontAwesome 非同步載入 (解決 FCP 8.6秒問題) */}
        {/* 1. 先用 media="print" 騙過瀏覽器不阻塞渲染 */}
        {/* 2. 下載完後透過 onLoad 切換回 all 顯示圖示 */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
          media="print" 
          // @ts-expect-error: optimization trick
          onLoad="this.media='all'" 
        />
        {/* 3. 無腳本環境的備案 */}
        <noscript>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        </noscript>
        
        {/* 圖片渲染優化樣式 */}
        <style>{`
          img { content-visibility: auto; height: auto; }
        `}</style>
      </head>
      
      <body className={`${inter.className} bg-slate-900 text-slate-300 antialiased min-h-screen flex flex-col`}>
        <Navigation />
        <main className="flex-grow pt-14 md:pt-20">
           {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}