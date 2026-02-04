import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.dryichen.com.tw').trim();

export const viewport: Viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: '新竹宸新復健科診所 - 骨科/復健/兒童早療推薦 | 林羿辰醫師',
    template: '%s | 新竹宸新復健科'
  },
  description: '新竹推薦復健科，由台大醫師林羿辰院長親自看診。提供高解析超音波導引PRP注射、聚焦式震波治療、徒手物理治療與兒童骨齡生長評估。',
  keywords: ['新竹復健科', '新竹骨科', '林羿辰醫師', 'PRP注射', '震波治療', '兒童早療', '新竹物理治療', '竹科復健推薦'],
  verification: {
    google: null, 
  },
  formatDetection: {
    telephone: false,
  },
  alternates: {
    canonical: './',
  },
  openGraph: {
    type: 'website',
    locale: 'zh_TW',
    url: SITE_URL,
    siteName: '新竹宸新復健科診所',
    title: '新竹宸新復健科診所 - 骨科/復健/兒童早療推薦',
    description: '新竹推薦復健科，由台大醫師林羿辰院長親自看診。提供高解析超音波導引PRP注射、聚焦式震波治療與兒童早療評估。',
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: '新竹宸新復健科診所 - 林羿辰醫師',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '新竹宸新復健科診所 - 林羿辰醫師',
    description: '專業 PRP 注射、震波治療與兒童早療評估。',
    images: ['/images/og-default.jpg'],
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.youtube-nocookie.com" />
        
        <link 
          id="font-awesome-css"
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
          media="print"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var link = document.getElementById('font-awesome-css');
                if (link) {
                  link.addEventListener('load', function() { this.media = 'all'; });
                }
              })();
            `,
          }}
        />

        <noscript>
          <link 
            rel="stylesheet" 
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
          />
        </noscript>
        
        <style>{`
          img { height: auto; }
          h1 { font-size: 2.25rem; }
          section h1, article h1, nav h1, aside h1 { font-size: 2.25rem; }
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