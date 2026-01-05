import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import BottomNav from '@/components/BottomNav'

export const metadata: Metadata = {
  title: '新竹宸新復健科診所 - 林羿辰醫師',
  description: '新竹宸新復健科診所，提供專業復健治療、PRP注射、震波治療等服務',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <body className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-grow pb-16 md:pb-0">
          {children}
        </main>
        <BottomNav />
      </body>
    </html>
  )
}
