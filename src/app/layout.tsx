import type { Metadata, Viewport } from 'next' // ✨ 新增 Viewport 型別
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false 

const inter = Inter({ subsets: ['latin'] })
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.dryichen.com.tw';

// 1. ✨ 獨立導出 Viewport：優化行動裝置體驗
export const viewport: Viewport = {
  themeColor: '#0f172a', // 對應 bg-slate-900，讓手機網址列色調統一
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5, // 允許縮放以利長輩閱讀診所資訊
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL), 
  title: {
    default: '新竹宸新復健科診所 - 骨科/復健/兒童早療推薦 | 林羿辰醫師',
    template: '%s | 新竹宸新復健科'
  },
  description: '新竹推薦復健科，由台大醫師林羿辰院長親自看診。提供高解析超音波導引PRP注射、聚焦式震波治療、徒手物理治療與兒童骨齡生長評估。',
  keywords: ['新竹復健科', '新竹骨科', '林羿辰醫師', 'PRP注射', '震波治療', '兒童早療', '骨齡評估'],

  // 2. ✨ 完善圖示設定 (Favicon & Apple Touch Icon)
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  openGraph: {
    type: 'website',
    locale: 'zh_TW',
    url: SITE_URL,
    siteName: '新竹宸新復健科診所',
    title: '新竹宸新復健科診所 - 骨科/復健/兒童早療推薦',
    description: '新竹復健科首選，台大醫師團隊，提供專業骨科疼痛治療與兒童發展評估。',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: '新竹宸新復健科診所' }],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: '新竹宸新復健科診所 - 林羿辰醫師',
    description: '專業 PRP 注射與兒童早療評估，台大醫師團隊親自看診。',
    images: ['/images/og-default.jpg'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // 3. ✨ 診所在地化結構化資料 (JSON-LD)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: '新竹宸新復健科診所',
    alternateName: 'Chenxin Rehabilitation Clinic',
    url: SITE_URL,
    logo: `${SITE_URL}/images/main/logo.png`, // 請確保有這張圖
    image: `${SITE_URL}/images/og-default.jpg`,
    description: '新竹推薦復健科，提供專業 PRP、震波治療與兒童早療評估。',
    address: {
      '@type': 'PostalAddress',
      addressLocality: '新竹市', // 根據實際地址修改
      addressRegion: 'TW',
      postalCode: '300',
      streetAddress: '光復路一段371號b1',
    },
    telephone: '+886-3-5647999', // 輸入診所電話
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '21:00',
      }
      // 依此類推...
    ],
  };

  return (
    <html lang="zh-TW" className="scroll-smooth"> {/* ✨ scroll-smooth 讓點擊錨點時滑動更平滑 */}
      <body className={`${inter.className} bg-slate-900 text-slate-300 antialiased min-h-screen flex flex-col`}>
        {/* ✨ 注入 JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        <Navigation />
        <main className="flex-grow pt-14 md:pt-20"> 
           {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}