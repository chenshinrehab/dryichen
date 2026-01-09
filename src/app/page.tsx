// src/app/page.tsx
import { Metadata } from 'next'
import Link from 'next/link' // 1. 解決 Link 報錯
import Footer from '@/components/Footer' // 2. 解決 Footer 報錯
import Navigation from '@/components/Navigation' // 引入導覽列
import JsonLd from '@/components/JsonLd'

// 這裡保留你原本的 SEO 設定，這對網路爬蟲非常重要
export const metadata: Metadata = {
  title: '新竹宸新復健科診所 - 林羿辰醫師 | 專業復健治療、PRP注射、震波治療',
  description: '新竹宸新復健科診所，由台大醫師林羿辰院長提供專業復健治療服務，包括PRP注射、震波治療、一對一運動治療、減重門診、兒童骨齡評估等。',
  keywords: ['新竹復健科', 'PRP注射', '震波治療', '復健科診所', '林羿辰醫師', '新竹復健', '兒童骨齡', '增生療法'],
  openGraph: {
    title: '新竹宸新復健科診所 - 林羿辰醫師',
    description: '專業復健治療服務，包括PRP注射、震波治療、一對一運動治療等',
    type: 'website',
    images: ['/images/clinic/logo.png'], // 記得確認圖片路徑
  },
}

const medicalClinicSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  name: '宸新復健科診所',
  alternateName: '新竹宸新復健科診所',
  description: '新竹市專業復健科診所，提供PRP注射、震波治療、一對一運動治療等服務',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '光復路一段371號B1',
    addressLocality: '新竹市',
    addressRegion: '東區',
    postalCode: '300',
    addressCountry: 'TW',
  },
  telephone: '+886-3-564-7999',
  url: 'https://dryichen-4ze1.vercel.app/',
  image: '/images/clinic.png', // 記得確認圖片路徑
  medicalSpecialty: ['Physical Medicine and Rehabilitation', '復健醫學'],
  physician: {
    '@type': 'Physician',
    name: '林羿辰',
    jobTitle: '院長',
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: '國立台灣大學醫學系',
    },
    hasCredential: [
      '復健專科醫師',
      '骨鬆專科醫師',
      'ACE-CPT 美國運動學會國際私人教練認證',
    ],
  },
  areaServed: {
    '@type': 'City',
    name: '新竹市',
  },
}

export default function Home() {
  return (
    <>
      <JsonLd data={medicalClinicSchema} />
      
      <div className="min-h-screen flex flex-col bg-slate-900 text-slate-300">
        
        {/* 顯示導覽列 */}
        <Navigation />

        <main className="flex-grow">
          {/* Hero Section (關於我們的主要內容) */}
          <section className="container mx-auto px-4 py-8 animate-fade-in">
             <div className="max-w-5xl mx-auto">
                {/* 這裡放首頁的大圖和醫生介紹 (參考之前的 ClinicHome 代碼) */}
                <h1 className="text-4xl font-bold text-white mb-4">歡迎來到宸新復健科</h1>
                <p className="text-lg text-slate-300 mb-8">運動教練醫師 - 林羿辰</p>
                
                {/* 範例：使用 Link 跳轉到其他頁面 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Link href="/treatments" className="bg-slate-800 p-6 rounded-lg hover:border-cyan-400 border border-transparent transition-all">
                    <h2 className="text-xl font-bold text-cyan-400 mb-2">治療方式 &rarr;</h2>
                    <p>PRP、震波、徒手治療完整介紹</p>
                  </Link>

                  <Link href="/weight-bone" className="bg-slate-800 p-6 rounded-lg hover:border-cyan-400 border border-transparent transition-all">
                    <h2 className="text-xl font-bold text-cyan-400 mb-2">減重與骨齡 &rarr;</h2>
                    <p>兒童生長評估與科學減重</p>
                  </Link>

                  <Link href="/booking" className="bg-slate-800 p-6 rounded-lg hover:border-pink-500 border border-transparent transition-all">
                     <h2 className="text-xl font-bold text-pink-500 mb-2">馬上預約 &rarr;</h2>
                     <p>線上預約看診</p>
                  </Link>
                </div>
             </div>
          </section>
        </main>

        {/* 顯示頁尾 */}
        <Footer />
        
      </div>
    </>
  )
}