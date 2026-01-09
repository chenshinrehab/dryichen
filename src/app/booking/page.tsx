// src/app/booking/page.tsx
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '馬上預約 - 新竹宸新復健科診所',
  description: '提供 Android App, iOS App 與 Line 官方帳號預約服務。',
}

export default function BookingPage() {
  return (
    <div className="flex-grow py-16 px-4">
      {/* 參照您提供的 HTML 結構 */}
      <section id="booking" className="fade-in">
        <div className="flex items-center gap-3 mb-8 justify-center">
          <span className="bg-pink-500/20 text-pink-400 p-3 rounded-lg border border-pink-500/30">
            <i className="fa-solid fa-calendar-check text-xl"></i>
          </span>
          <h2 className="text-3xl font-bold font-sans text-white">
            馬上預約 <span className="text-slate-500 text-lg font-normal">Book Now</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          
          {/* Android Block */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 text-center hover:border-green-500/50 transition-all group">
            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/20">
              <i className="fa-brands fa-android text-3xl text-green-500"></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Android 下載</h3>
            <p className="text-slate-400 text-sm mb-4">安卓手機用戶請點此</p>
            <img 
              src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=http://bit.ly/2Q8FdeK" 
              alt="Android QR Code" 
              className="w-40 h-40 mx-auto mb-4 rounded-lg bg-white p-2" 
            />
            {/* 外部連結使用 <a> */}
            <a 
              href="http://bit.ly/2Q8FdeK" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg transition-colors text-sm"
            >
              點擊下載 App
            </a>
          </div>

          {/* iOS Block */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 text-center hover:border-blue-500/50 transition-all group">
            <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/20">
              <i className="fa-brands fa-apple text-3xl text-blue-500"></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">iOS 下載</h3>
            <p className="text-slate-400 text-sm mb-4">iPhone 用戶請點此</p>
            <img 
              src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://apple.co/2vZfRsH" 
              alt="iOS QR Code" 
              className="w-40 h-40 mx-auto mb-4 rounded-lg bg-white p-2" 
            />
            {/* 外部連結使用 <a> */}
            <a 
              href="https://apple.co/2vZfRsH" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors text-sm"
            >
              點擊下載 App
            </a>
          </div>

          {/* Line Block */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 text-center hover:border-green-400/50 transition-all group">
            <div className="w-16 h-16 bg-green-400/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-400/20">
              <i className="fa-brands fa-line text-3xl text-green-400"></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Line 預約</h3>
            <p className="text-slate-400 text-sm mb-4">加入官方 Line 好友</p>
            <img 
              src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://lin.ee/FHj3mIs" 
              alt="Line QR Code" 
              className="w-40 h-40 mx-auto mb-4 rounded-lg bg-white p-2" 
            />
            {/* 外部連結使用 <a> */}
            <a 
              href="https://lin.ee/FHj3mIs" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block px-4 py-2 bg-green-500 hover:bg-green-400 text-white rounded-lg transition-colors text-sm"
            >
              加入好友預約
            </a>
          </div>

        </div>
      </section>
    </div>
  )
}