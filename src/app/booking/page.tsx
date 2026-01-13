// src/app/booking/page.tsx
import React from 'react'
import { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'

// ==========================================
// 1. Meta 設定 (強化預約意圖)
// ==========================================
export const metadata: Metadata = {
  title: '馬上預約 - 新竹網路掛號/APP預約/Line掛號 | 宸新復健科',
  description: '新竹宸新復健科提供便利的數位掛號服務。支援 Android/iOS App 下載預約，或加入 Line 官方帳號線上掛號。免排隊、即時查詢看診進度，就醫更輕鬆。',
  keywords: ['新竹掛號', '網路預約', '診所APP', 'Line掛號', '看診進度查詢', '新竹復健科預約', '宸新掛號', '林羿辰醫師掛號'],
}

export default function BookingPage() {
  
  // ==========================================
  // 2. Schema 結構化資料 (行動應用程式 + 預約動作)
  // ==========================================
  const jsonLdBooking = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        'name': '預約掛號頁面',
        'description': '提供多種數位預約管道。',
        'potentialAction': {
          '@type': 'ReserveAction',
          'target': 'https://lin.ee/FHj3mIs',
          'name': 'Line 線上預約'
        }
      },
      {
        '@type': 'MobileApplication',
        'name': '宸新復健科 App (Android)',
        'operatingSystem': 'Android',
        'applicationCategory': 'MedicalApplication',
        'installUrl': 'http://bit.ly/2Q8FdeK'
      },
      {
        '@type': 'MobileApplication',
        'name': '宸新復健科 App (iOS)',
        'operatingSystem': 'iOS',
        'applicationCategory': 'MedicalApplication',
        'installUrl': 'https://apple.co/2vZfRsH'
      }
    ]
  }

  return (
    <>
      <JsonLd data={jsonLdBooking} />

      {/* ✨ 修改重點：
          原為 py-16 (上下 64px)
          改為 pt-4 (上 16px) pb-16 (下 64px) md:pt-8 (電腦版上 32px)
      */}
      <div className="flex-grow pt-4 pb-16 md:pt-8 px-4 bg-slate-900 min-h-screen">
        <section id="booking" className="fade-in max-w-5xl mx-auto">
          
          {/* 標題區 */}
          <div className="flex flex-col items-center gap-4 mb-12 text-center">
            <div className="flex items-center gap-3">
                <span className="bg-pink-500/20 text-pink-400 p-3 rounded-lg border border-pink-500/30">
                  <i className="fa-solid fa-calendar-check text-xl"></i>
                </span>
                <h1 className="text-3xl md:text-4xl font-bold font-sans text-white">
                  馬上預約 <span className="text-slate-500 text-lg font-normal ml-2">Book Now</span>
                </h1>
            </div>
            
            <p className="text-slate-400 text-lg w-full">
                為了節省您寶貴的等待時間，建議多加利用<strong className="text-cyan-400 font-normal">手機 App</strong> 或 <strong className="text-green-400 font-normal">Line 官方帳號</strong>進行預約掛號與查詢看診進度。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            

{/* Line Block */}
<div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8 text-center hover:border-green-400/50 hover:shadow-[0_0_20px_rgba(74,222,128,0.2)] transition-all duration-300 group flex flex-col items-center relative overflow-hidden">
              
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

           {/* iOS Block */}
           <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8 text-center hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300 group flex flex-col items-center">
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


            {/* Android Block */}
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8 text-center hover:border-green-500/50 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)] transition-all duration-300 group flex flex-col items-center">
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