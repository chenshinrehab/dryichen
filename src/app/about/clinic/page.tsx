import React from 'react'
import Link from 'next/link'
import { facilitiesData } from '@/data/facilities'

export const metadata = { title: '診所資訊與設備 - 宸新復健科' }

export default function ClinicPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <Link href="/about" className="inline-flex items-center text-cyan-400 mb-8 hover:text-cyan-300 transition-colors group">
           <i className="fa-solid fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i> 返回關於我們
        </Link>
        <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">專業醫療設備</h1>
            <p className="text-xl text-slate-400">工欲善其事，必先利其器。我們引進醫學中心等級設備，提供最精準的診斷與治療。</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilitiesData.map((item) => (
            <Link key={item.id} href={`/about/clinic/${item.id}`} className="group bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all duration-300 flex flex-col">
               <div className="h-48 overflow-hidden relative">
                  <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
               </div>
               <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                  <p className="text-slate-400 line-clamp-3 mb-4 flex-grow">{item.description}</p>
                  <div className="text-right text-cyan-500 text-sm font-medium">了解更多 <i className="fa-solid fa-arrow-right ml-1"></i></div>
               </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}