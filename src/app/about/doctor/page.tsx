import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = { 
  title: '林羿辰醫師介紹 - 宸新復健科院長',
  description: '台大醫學系畢業，雙專科醫師(復健+骨鬆)。專長為超音波導引注射、PRP增生療法、運動傷害治療。',
  keywords: ['林羿辰', '新竹復健科醫師', '台大醫師', '運動醫學', 'PRP']
}

export default function DoctorsPage() {
  const jsonLdPhysician = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: '林羿辰',
    jobTitle: '院長',
    image: 'https://duk.tw/UXXvK3.jpg',
    telephone: '03-1234567', 
    url: 'https://dryichen-4ze1.vercel.app/about/doctors',
    address: { '@type': 'PostalAddress', addressLocality: '新竹市', addressCountry: 'TW' },
    alumni: { '@type': 'CollegeOrUniversity', name: '國立台灣大學醫學系' },
    medicalSpecialty: ['Physical Medicine and Rehabilitation', 'Sports Medicine']
  }

  return (
    <>
      <JsonLd data={jsonLdPhysician} />
      <div className="min-h-screen bg-slate-900 text-slate-300 py-12">
        <div className="container mx-auto px-4">
          <Link href="/about" className="inline-flex items-center text-cyan-400 mb-8 hover:text-cyan-300 transition-colors ml-4 md:ml-0 group">
             <i className="fa-solid fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i> 返回關於我們
          </Link>
          <section className="fade-in">
               <div className="max-w-5xl mx-auto">
                  <div className="bg-slate-800/60 backdrop-blur border border-slate-700 rounded-2xl overflow-hidden shadow-2xl relative">
                     <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                     <div className="flex flex-col md:flex-row">
                        <div className="md:w-2/5 relative">
                           <div className="h-full w-full min-h-[400px] md:min-h-[500px] relative">
                              <img src="https://duk.tw/UXXvK3.jpg" alt="新竹復健科推薦-林羿辰醫師" className="absolute inset-0 w-full h-full object-cover object-top opacity-90 hover:opacity-100 transition-opacity duration-500" />
                              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent md:bg-gradient-to-r"></div>
                           </div>
                        </div>
                        <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center relative z-10">
                           <h1 className="text-4xl font-bold font-sans text-white mb-2">林羿辰 <span className="text-xl text-cyan-400">醫師</span></h1>
                           <p className="text-lg text-slate-300 mb-6 border-l-4 border-cyan-500 pl-4">宸新復健科診所院長 | 運動教練醫師</p>
                           <div className="space-y-8">
                              <div>
                                 <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-3 border-b border-slate-700 pb-1 inline-block"><i className="fa-solid fa-graduation-cap mr-2"></i>學歷與資格</h3>
                                 <ul className="space-y-2 text-slate-300">
                                    <li className="flex items-start"><span className="text-cyan-500 mr-2">▹</span>國立台灣大學醫學系</li>
                                    <li className="flex items-start"><span className="text-cyan-500 mr-2">▹</span>雙專科醫師 (復健專科 + 骨鬆專科)</li>
                                    <li className="flex items-start"><span className="text-cyan-500 mr-2">▹</span>ACE-CPT 美國運動學會國際私人教練認證</li>
                                 </ul>
                              </div>
                              <div>
                                 <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-3 border-b border-slate-700 pb-1 inline-block"><i className="fa-solid fa-briefcase mr-2"></i>經歷</h3>
                                 <ul className="space-y-2 text-slate-300">
                                    <li className="flex items-start"><span className="text-cyan-500 mr-2">▹</span>馬偕紀念醫院 主治醫師</li>
                                    <li className="flex items-start"><span className="text-cyan-500 mr-2">▹</span>台灣復健醫學會 會員</li>
                                    <li className="flex items-start"><span className="text-cyan-500 mr-2">▹</span>台灣增生療法醫學會 會員</li>
                                    <li className="flex items-start"><span className="text-cyan-500 mr-2">▹</span>台灣大學網球校隊</li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
          </section>
        </div>
      </div>
    </>
  )
}