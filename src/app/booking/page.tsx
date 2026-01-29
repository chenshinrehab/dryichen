// src/app/booking/page.tsx
import React from 'react'
import { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import ClinicHoursModal from '@/components/ClinicHoursModal'
// ✨ 1. 引入動畫組件
import ScrollAnimation from '@/components/ScrollAnimation'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.dryichen.com.tw'
const PAGE_PATH = '/booking'
const CANONICAL_URL = `${SITE_URL}${PAGE_PATH}`

export const metadata: Metadata = {
  title: '馬上預約 - 新竹網路掛號/APP預約/Line掛號 | 新竹宸新復健科',
  description: '新竹宸新復健科提供便利的數位掛號服務。支援免APP網頁直接掛號、Android/iOS App 下載預約，或加入 Line 官方帳號線上掛號。免排隊、即時查詢看診進度。',
  keywords: ['新竹掛號', '網路預約', '診所APP', 'Line掛號', '看診進度查詢', '新竹復健科預約', '宸新掛號', '林羿辰醫師掛號'],
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: '馬上預約 - 網路掛號/APP/Line | 新竹宸新復健科',
    description: '提供免APP網頁直接掛號、手機 App 下載與 Line 線上預約服務。',
    url: CANONICAL_URL,
    type: 'website',
  }
}

export default function BookingPage() {
  const currentUrl = CANONICAL_URL
  const webBookingUrl = 'https://reg.forcestar.com.tw/appointment/7/reserve'

  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '首頁', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: '馬上預約', item: currentUrl },
    ],
  }

  const jsonLdBooking = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': `${currentUrl}#webpage`,
        'url': currentUrl,
        'name': '宸新復健科預約掛號',
        'description': '提供網頁版直接掛號、Line 線上掛號與手機 App 預約看診服務。',
        'author': { '@type': 'MedicalOrganization', 'name': '新竹宸新復健科', 'url': SITE_URL },
        'potentialAction': {
          '@type': 'ReserveAction',
          'target': {
            '@type': 'EntryPoint',
            'urlTemplate': webBookingUrl,
            'actionPlatform': ['http://schema.org/DesktopWebPlatform', 'http://schema.org/MobileWebPlatform']
          },
          'result': { '@type': 'MedicalAppointment', 'name': '門診預約' }
        }
      },
      // App Schema 略
    ]
  }

  return (
    <>
      <JsonLd data={jsonLdBreadcrumb} />
      <JsonLd data={jsonLdBooking} />
      
      {/* ✨ 2. 放置動畫邏輯 */}
      <ScrollAnimation />

      <div className="flex-grow pt-0 -mt-10 md:-mt-12 pb-12 px-4 bg-slate-900 min-h-screen">
        <section id="booking" className="max-w-5xl mx-auto">
          
          {/* ✨ 3. 標題區動畫 */}
          <div className="flex flex-col items-center gap-4 mb-8 text-center animate-on-scroll">
            <div className="flex items-center gap-3">
                <span className="bg-pink-500/20 text-pink-400 p-3 rounded-lg border border-pink-500/30">
                  <i className="fa-solid fa-calendar-check text-xl"></i>
                </span>
                <h1 className="text-3xl md:text-4xl font-bold font-sans text-white">
                  馬上預約 <span className="text-slate-500 text-lg font-normal ml-2">Book Now</span>
                </h1>
            </div>
            
            <p className="text-slate-400 text-lg w-full max-w-2xl">
                為了節省您寶貴的等待時間，建議多加利用<strong className="text-cyan-400 font-normal">網路掛號</strong>、手機 App 或 Line 官方帳號進行預約。
            </p>

            <div className="mt-0">
               <ClinicHoursModal />
            </div>
          </div>

          {/* ✨ 4. 網路掛號 (主要轉換區) 動畫 - delay-100 */}
          <div className="mb-10 w-full transform transition-all animate-on-scroll delay-100">
             <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/50 rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-[0_0_30px_rgba(34,211,238,0.15)] group hover:-translate-y-1 transition-all duration-300">
                
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-70"></div>
                
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
                   <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                      <div className="w-20 h-20 bg-cyan-500/10 rounded-full flex items-center justify-center shrink-0 border border-cyan-500/20 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                         <i className="fa-solid fa-globe text-4xl text-cyan-400"></i>
                      </div>
                      <div>
                         <h3 className="text-2xl font-bold text-white mb-2 flex items-center justify-center md:justify-start gap-3">
                           網路掛號系統
                         </h3>
                         <p className="text-slate-400 text-lg">
                           免安裝 App，直接點擊即可進行預約。
                         </p>
                      </div>
                   </div>

                   <a 
                     href={webBookingUrl}
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="whitespace-nowrap px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-lg rounded-full font-bold shadow-lg hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all flex items-center gap-2 group-hover:scale-105"
                   >
                     <i className="fa-solid fa-arrow-pointer animate-pulse"></i> 
                     立即前往預約
                   </a>
                </div>
             </div>
          </div>


          {/* 既有的 3 欄式設計 (Line / iOS / Android) */}
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* ✨ 5. Line Block - delay-200 */}
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8 text-center hover:border-green-400/50 hover:shadow-[0_0_20px_rgba(74,222,128,0.2)] transition-all duration-300 group flex flex-col items-center animate-on-scroll delay-200">
              <div className="w-20 h-20 bg-green-400/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="fa-brands fa-line text-4xl text-green-400"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Line 官方帳號</h3>
              <p className="text-slate-400 text-sm mb-6">加入好友，一鍵預約</p>
              
              <div className="relative p-2 bg-white rounded-xl mb-6 shadow-lg group-hover:-translate-y-1 transition-transform">
                  <img 
                    src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://lin.ee/FHj3mIs" 
                    alt="Line 官方帳號 QR Code" 
                    className="w-32 h-32 object-contain" 
                  />
              </div>
              
              <a 
                href="https://lin.ee/FHj3mIs" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full py-3 bg-green-500 hover:bg-green-400 text-white rounded-xl transition-colors font-bold shadow-lg"
              >
                <i className="fa-solid fa-user-plus mr-2"></i> 加入好友
              </a>
            </div>

            {/* ✨ 6. iOS Block - delay-300 */}
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8 text-center hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300 group flex flex-col items-center animate-on-scroll delay-300">
              <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="fa-brands fa-apple text-4xl text-blue-500"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">iOS App</h3>
              <p className="text-slate-400 text-sm mb-6">iPhone 用戶專用</p>
              
              <div className="relative p-2 bg-white rounded-xl mb-6 shadow-lg group-hover:-translate-y-1 transition-transform">
                  <img 
                    src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://apple.co/2vZfRsH" 
                    alt="iOS App 下載 QR Code" 
                    className="w-32 h-32 object-contain" 
                  />
              </div>
              
              <a 
                href="https://apple.co/2vZfRsH" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-colors font-bold shadow-lg"
              >
                <i className="fa-solid fa-download mr-2"></i> 點擊下載
              </a>
            </div>

            {/* ✨ 7. Android Block - delay-500 */}
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8 text-center hover:border-green-500/50 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)] transition-all duration-300 group flex flex-col items-center animate-on-scroll delay-500">
              <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="fa-brands fa-android text-4xl text-green-500"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Android App</h3>
              <p className="text-slate-400 text-sm mb-6">安卓手機用戶專用</p>
              
              <div className="relative p-2 bg-white rounded-xl mb-6 shadow-lg group-hover:-translate-y-1 transition-transform">
                  <img 
                    src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=http://bit.ly/2Q8FdeK" 
                    alt="Android App 下載 QR Code" 
                    className="w-32 h-32 object-contain" 
                  />
              </div>
              
              <a 
                href="http://bit.ly/2Q8FdeK" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full py-3 bg-green-600 hover:bg-green-500 text-white rounded-xl transition-colors font-bold shadow-lg"
              >
                <i className="fa-solid fa-download mr-2"></i> 點擊下載
              </a>
            </div>

          </div>
        </section>
      </div>
    </>
  )
}