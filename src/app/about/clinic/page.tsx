// src/app/about/clinic/page.tsx
import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { facilitiesData } from '@/data/facilities'
import JsonLd from '@/components/JsonLd'

// 1. Meta 設定
export const metadata: Metadata = { 
  title: '診所環境與設備介紹 - 數位X光/超音波/骨科復健區 | 宸新復健科',
  description: '新竹宸新復健科擁有醫學中心等級設備。包含數位X光、高解析超音波、瑞士聚焦式震波、兒童早療教室、獨立徒手治療室及專屬停車場，提供最優質的就醫環境。',
  keywords: ['新竹復健科設備', 'X光檢查', '超音波檢查', 'PRP設備', '兒童早療', '骨科復健', '停車方便']
}

export default function ClinicPage() {
  
  // 2. Schema: MedicalClinic
  const jsonLdClinic = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: '宸新復健科診所',
    image: 'https://dryichen-4ze1.vercel.app/images/clinic-cover.jpg',
    description: '提供全方位骨科復健與兒童發展評估的專業診所。',
    address: { '@type': 'PostalAddress', addressLocality: '新竹市' },
     amenityFeature: facilitiesData.map(f => ({
       '@type': 'LocationFeatureSpecification',
       name: f.title,
       value: true
    }))
  }

  return (
    <>
      <JsonLd data={jsonLdClinic} />

      <div className="min-h-screen bg-slate-900 text-slate-300 py-12 md:py-16 fade-in">
        
        {/* ✨ 修正重點：改為 max-w-7xl (與疾病頁面統一寬度) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Link href="/about" className="inline-flex items-center text-cyan-400 mb-8 hover:text-cyan-300 transition-colors group">
             <i className="fa-solid fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i> 返回關於我們
          </Link>

          <div className="mb-12 text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-wider">專業醫療設備與環境</h1>
              <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full mb-4"></div>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                工欲善其事，必先利其器。我們引進醫學中心等級的檢查與治療設備，並打造寬敞舒適的復健空間，致力於提供最精準的診斷與最有效的治療。
              </p>
          </div>

          {/* ✨ 修正重點：grid-cols-1 md:grid-cols-2 lg:grid-cols-3 (確保與疾病頁面完全一致的 RWD 切分) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilitiesData.map((item) => (
              <Link 
                key={item.id} 
                href={`/about/clinic/${item.id}`} 
                className="group bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-500 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300 flex flex-col"
              >
                 {/* ✨ 修正重點：h-48 (統一高度) */}
                 <div className="h-48 overflow-hidden relative bg-slate-800">
                    <img 
                      src={item.imageUrl} 
                      alt={item.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                 </div>
                 
                 <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors flex items-center justify-between">
                       {item.title}
                       <i className="fa-solid fa-angle-right opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all text-sm"></i>
                    </h3>
                    
                    <p className="text-slate-400 line-clamp-2 mb-4 flex-grow text-sm leading-relaxed">
                       {item.description}
                    </p>
                    
                    <div className="text-right mt-auto">
                       <span className="text-cyan-400 font-semibold text-sm group-hover:underline decoration-cyan-400/50 underline-offset-4">
                         了解更多 <i className="fa-solid fa-arrow-right ml-1 text-xs"></i>
                       </span>
                    </div>
                 </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </>
  )
}