// src/app/about/doctors/page.tsx
import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import ClinicHoursModal from '@/components/ClinicHoursModal'

// 1. 定義常數 (移到 Component 外，讓 Metadata 也能使用)
const SITE_URL = 'https://www.dryichen.com.tw'
const PAGE_PATH = '/about/doctors'
const CANONICAL_URL = `${SITE_URL}${PAGE_PATH}`

export const metadata: Metadata = { 
  title: '林羿辰醫師介紹 - 台大雙專科院長 | 新竹復健科/骨科/運動傷害推薦',
  description: '新竹復健科推薦林羿辰醫師。台大醫學系畢業，具備復健專科與骨質疏鬆專科雙資格。專精超音波導引PRP注射、增生療法、兒童骨齡評估與各類運動傷害治療，是您值得信賴的骨科復健專家。',
  keywords: ['林羿辰', '新竹復健科醫師', '台大醫師', '新竹骨科推薦', '運動醫學', 'PRP注射', '增生療法', '超音波導引', '兒童骨齡'],
  // ★★★ 新增：標準網址設定 ★★★
  alternates: {
    canonical: CANONICAL_URL,
  },
  // 建議同步補上 OpenGraph URL
  openGraph: {
    title: '林羿辰醫師介紹 - 台大雙專科院長',
    description: '新竹復健科推薦林羿辰醫師。台大醫學系畢業，具備復健專科與骨質疏鬆專科雙資格。',
    url: CANONICAL_URL,
    type: 'profile',
    images: [`${SITE_URL}/images/doctor/c.jpg`],
  }
}

export default function DoctorsPage() {
  
  // 使用上方定義好的常數
  const currentUrl = CANONICAL_URL

  // 1. Schema: 麵包屑導航
  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '首頁', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: '關於我們', item: `${SITE_URL}/about` },
      { '@type': 'ListItem', position: 3, name: '醫師團隊', item: currentUrl },
    ],
  }

  // 2. Schema: MedicalWebPage + Physician
  const jsonLdPhysicianPage = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    '@id': `${currentUrl}#webpage`,
    name: '林羿辰醫師介紹',
    description: '台大雙專科院長林羿辰醫師詳細資歷與專長介紹。',
    url: currentUrl,
    author: {
        '@type': 'MedicalOrganization',
        name: '新竹宸新復健科',
        url: SITE_URL
    },
    mainEntity: {
      '@type': 'Physician',
      name: '林羿辰',
      jobTitle: '院長',
      image: `${SITE_URL}/images/main/a.jpg`, 
      telephone: '03-1234567', 
      url: currentUrl,
      worksFor: {
        '@type': 'MedicalClinic',
        name: '宸新復健科診所',
        url: SITE_URL
      },
      address: { 
        '@type': 'PostalAddress', 
        addressLocality: '新竹市', 
        addressRegion: 'Hsinchu City', 
        addressCountry: 'TW' 
      },
      alumni: { '@type': 'CollegeOrUniversity', name: '國立台灣大學醫學系' },
      medicalSpecialty: [
        { '@type': 'MedicalSpecialty', name: '復健科 (Physical Medicine and Rehabilitation)' },
        { '@type': 'MedicalSpecialty', name: '骨科復健 (Orthopedics)' },
        { '@type': 'MedicalSpecialty', name: '運動醫學 (Sports Medicine)' },
        { '@type': 'MedicalSpecialty', name: '疼痛治療 (Pain Management)' }
      ],
      description: '台大醫學系畢業，雙專科醫師(復健+骨鬆)。專長為超音波導引注射、PRP增生療法。'
    }
  }

  return (
    <>
      <JsonLd data={jsonLdBreadcrumb} />
      <JsonLd data={jsonLdPhysicianPage} />
      
      <div className="min-h-screen bg-slate-900 text-slate-300 pt-0 pb-12 md:pt-0 md:pb-16 fade-in">
        <div className="container mx-auto px-4 max-w-6xl">
          
          <Link href="/about" className="inline-flex items-center text-cyan-400 mb-8 hover:text-cyan-300 transition-colors group">
             <i className="fa-solid fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i> 返回關於我們
          </Link>

          <section className="fade-in">
                <div className="bg-slate-800/60 backdrop-blur border border-slate-700 rounded-2xl overflow-hidden shadow-2xl relative">
                   <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                   
                   <div className="flex flex-col lg:flex-row items-center">
                      
                      {/* 照片區域 */}
                      <div className="w-full lg:w-[40%] relative aspect-[9/16] shrink-0 bg-slate-800 self-start">
                          <img 
                            src="/images/doctor/c.jpg"
                            alt="新竹復健科推薦-林羿辰醫師-台大雙專科" 
                            className="absolute inset-0 w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-700" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-slate-900/30"></div>
                      </div>

                      {/* 文字區域 */}
                      <div className="w-full lg:w-[60%] p-8 flex flex-col justify-center relative z-10">
                          
                          <div className="mb-6">
                             <h1 className="text-4xl md:text-5xl font-bold font-sans text-white mb-3 tracking-wide leading-tight">
                                林羿辰 <span className="text-2xl text-cyan-400 font-medium ml-1 whitespace-nowrap">醫師</span>
                             </h1>
                             <p className="text-xl text-slate-300 border-l-4 border-cyan-500 pl-4 mb-2">
                               宸新復健科診所院長
                             </p>
                             <div className="flex flex-wrap gap-2 mt-3">
                                <span className="text-xs bg-cyan-900/50 text-cyan-300 px-2 py-1 rounded border border-cyan-700/50">台大醫學系</span>
                                <span className="text-xs bg-cyan-900/50 text-cyan-300 px-2 py-1 rounded border border-cyan-700/50">雙專科</span>
                                <span className="text-xs bg-cyan-900/30 text-cyan-300 px-2 py-1 rounded border border-cyan-700/50">教練醫師</span>
                             </div>
                          </div>

                          <div className="mb-8 text-slate-300 text-base lg:text-lg leading-relaxed space-y-4">
                             <p>
                                林羿辰醫師畢業於<strong className="text-cyan-400 font-normal">國立台灣大學醫學系</strong>，曾任職於<strong className="text-cyan-400 font-normal">馬偕紀念醫院</strong>。
                             </p>
                             <p>
                                林醫師具備<strong>復健專科</strong>與<strong>骨質疏鬆專科</strong>雙重資格，並持有<strong>美國運動學會 (ACE-CPT)</strong> 國際私人教練證照，是少數懂運動、會治療、能訓練的「教練醫師」。
                             </p>
                             <p>
                                專長於<strong>超音波導引注射</strong>（如 PRP、葡萄糖增生療法），能精準治療<strong>五十肩</strong>、<strong>網球肘</strong>、<strong>足底筋膜炎</strong>及各類<strong>運動傷害</strong>。同時致力於<strong>兒童生長發育</strong>評估，協助家長掌握孩子黃金長高期。
                             </p>
                          </div>

                          <div className="grid grid-cols-1 gap-6">
                            
                            <div>
                                <h3 className="text-sm font-bold text-pink-400 uppercase tracking-wider mb-3 border-b border-slate-700 pb-2 flex items-center">
                                    <i className="fa-solid fa-star mr-2"></i> 主治專長
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {['超音波導引注射', 'PRP 高濃度血小板', '增生療法', '五十肩擴張術', '神經解離術', '兒童骨齡評估', '運動傷害治療', '骨質疏鬆治療'].map((item, idx) => (
                                        <span key={idx} className="bg-slate-700/50 hover:bg-cyan-900/30 text-slate-200 hover:text-cyan-300 px-3 py-1.5 rounded-full text-sm transition-colors border border-slate-600 hover:border-cyan-500/50 cursor-default">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <h3 className="text-lg font-bold text-cyan-400 uppercase tracking-wider mb-3 border-b border-slate-700 pb-2 flex items-center">
                                        <i className="fa-solid fa-graduation-cap mr-2"></i> 學歷與資格
                                    </h3>
                                    <ul className="space-y-2 text-slate-300 text-base">
                                      <li className="flex items-start"><span className="text-cyan-500 mr-2 mt-1 text-xs">●</span>國立台灣大學醫學系 畢業</li>
                                      <li className="flex items-start"><span className="text-cyan-500 mr-2 mt-1 text-xs">●</span>中華民國復健科 專科醫師</li>
                                      <li className="flex items-start"><span className="text-cyan-500 mr-2 mt-1 text-xs">●</span>中華民國骨鬆學會 專科醫師</li>
                                      <li className="flex items-start"><span className="text-cyan-500 mr-2 mt-1 text-xs">●</span>ACE-CPT 美國私人教練證照</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-cyan-400 uppercase tracking-wider mb-3 border-b border-slate-700 pb-2 flex items-center">
                                        <i className="fa-solid fa-briefcase mr-2"></i> 專業經歷
                                    </h3>
                                    <ul className="space-y-2 text-slate-300 text-base">
                                      <li className="flex items-start"><span className="text-cyan-500 mr-2 mt-1 text-xs">●</span>新竹馬偕紀念醫院 主治醫師</li>
                                      <li className="flex items-start"><span className="text-cyan-500 mr-2 mt-1 text-xs">●</span>台灣增生療法醫學會會員</li>
                                      <li className="flex items-start"><span className="text-cyan-500 mr-2 mt-1 text-xs">●</span>台灣疼痛醫學會會員</li>
                                      <li className="flex items-start"><span className="text-cyan-500 mr-2 mt-1 text-xs">●</span>台灣大學網球校隊</li>
                                    </ul>
                                </div>
                            </div>

                          </div>
                          
                          <div className="mt-8 pt-5 border-t border-slate-700/50 flex flex-wrap gap-4">
                              <Link 
                                href="/treatments" 
                                className="px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full transition-all duration-300 font-bold flex items-center gap-2 group shadow-lg shadow-cyan-500/20 cursor-pointer"
                              >
                                  <i className="fa-solid fa-stethoscope text-xl group-hover:scale-110 transition-transform"></i>
                                  查看治療項目
                              </Link>
                              
                              <ClinicHoursModal />
                              
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