// src/app/about/doctors/page.tsx
import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import ClinicHoursModal from '@/components/ClinicHoursModal'
// ✨ 1. 引入動畫組件
import ScrollAnimation from '@/components/ScrollAnimation'

const SITE_URL = 'https://www.dryichen.com.tw'
const PAGE_PATH = '/about/doctors'
const CANONICAL_URL = `${SITE_URL}${PAGE_PATH}`

export const metadata: Metadata = { 
  title: '林羿辰醫師介紹 - 台大雙專科院長 | 新竹復健科/骨科/運動傷害推薦',
  description: '新竹復健科推薦林羿辰醫師。台大醫學系畢業，具備復健專科與骨質疏鬆專科雙資格。專精超音波導引PRP注射、增生療法、兒童骨齡評估與各類運動傷害治療，是您值得信賴的骨科復健專家。',
  keywords: ['林羿辰', '新竹復健科醫師', '台大醫師', '新竹骨科推薦', '運動醫學', 'PRP注射', '增生療法', '超音波導引', '兒童骨齡'],
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: '林羿辰醫師介紹 - 台大雙專科院長',
    description: '新竹復健科推薦林羿辰醫師。台大醫學系畢業，具備復健專科與骨質疏鬆專科雙資格。',
    url: CANONICAL_URL,
    type: 'profile',
    images: [`${SITE_URL}/images/doctor/c.jpg`],
  }
}

export default function DoctorsPage() {
  const currentUrl = CANONICAL_URL

  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '首頁', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: '關於我們', item: `${SITE_URL}/about` },
      { '@type': 'ListItem', position: 3, name: '醫師團隊', item: currentUrl },
    ],
  }

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
      url: currentUrl,
      description: '台大醫學系畢業，具備復健科專科與骨鬆雙專科醫師資歷。',
      
      // ✨ 修正 1：補上電話 (解決「telephone」欄位未填)
      telephone: '+886-3-564-7999', 
      
      // ✨ 修正 2：補上價位區間 (解決「priceRange」欄位未填)
      // 建議與診所 layout.tsx 保持一致
      priceRange: '$$', 
      
      // ✨ 修正 3：補上地址 (解決「address」欄位未填)
      address: {
        '@type': 'PostalAddress',
        streetAddress: '東區光復路一段371號B1',
        addressLocality: '新竹市',
        addressRegion: 'TW',
        postalCode: '300'
      },
      worksFor: {
        '@type': 'MedicalClinic',
        name: '宸新復健科診所',
        url: SITE_URL,
        // 建議在 worksFor 裡也帶入地址，強化關聯
        address: {
          '@type': 'PostalAddress',
          streetAddress: '東區光復路一段371號B1',
          addressLocality: '新竹市',
          addressRegion: 'TW',
          postalCode: '300'
        }
      },
      // ✨ 2. 修正為 alumniOf (更符合 Schema 規範)
      alumniOf: { 
        '@type': 'CollegeOrUniversity', 
        name: '國立台灣大學醫學系' 
      },
      // ✨ 3. 優化專科描述
      medicalSpecialty: [
        'Physiotherapy', // 復健醫學標準關鍵字
        'SportsMedicine', // 運動醫學
        'Musculoskeletal' // 骨骼肌肉系統
      ],
      description: '台大醫學系畢業，具備復健科專科與骨鬆雙專科醫師資歷。'
    }
  }
  return (
    <>
      <JsonLd data={jsonLdBreadcrumb} />
      <JsonLd data={jsonLdPhysicianPage} />
      
      {/* ✨ 2. 放置動畫觸發器 */}
      <ScrollAnimation />
      
      <div className="min-h-screen bg-slate-900 text-slate-300 pt-0 -mt-10 md:-mt-12 pb-12">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* ✨ 3. 返回按鈕動畫 */}
          <div className="animate-on-scroll">
            <Link href="/about" className="inline-flex items-center text-cyan-400 mb-8 hover:text-cyan-300 transition-colors group">
               <i className="fa-solid fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i> 返回關於我們
            </Link>
          </div>

          <section>
                {/* ✨ 4. 整張醫師名片大區塊加上進場動畫 */}
                <div className="bg-slate-800/60 backdrop-blur border border-slate-700 rounded-2xl overflow-hidden shadow-2xl relative animate-on-scroll delay-100">
                   <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                   
                   <div className="flex flex-col lg:flex-row items-center">
                      
                      {/* 照片區域：增加稍微明顯的延遲 */}
                      <div className="w-full lg:w-[40%] relative aspect-[9/16] shrink-0 bg-slate-800 self-start animate-on-scroll delay-200">
                          <img 
                            src="/images/doctor/c.jpg"
                            alt="新竹復健科推薦-林羿辰醫師-台大雙專科" 
                            className="absolute inset-0 w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-700" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-slate-900/30"></div>
                      </div>

                      {/* 文字區域 */}
                      <div className="w-full lg:w-[60%] p-8 flex flex-col justify-center relative z-10 animate-on-scroll delay-300">
                          
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
                                林醫師具備<strong>復健專科</strong>與<strong>骨質疏鬆專科</strong>雙重資格，並持有<strong>美國運動學會 (ACE-CPT)</strong> 國際私人教練證照。
                             </p>
                             <p>
                                專長於<strong>超音波導引注射</strong>、<strong>增生療法</strong>、各類<strong>運動傷害</strong>及<strong>兒童生長發育</strong>評估。
                             </p>
                          </div>

                          <div className="grid grid-cols-1 gap-6">
                            <div>
                                <h3 className="text-sm font-bold text-pink-400 uppercase tracking-wider mb-3 border-b border-slate-700 pb-2 flex items-center">
                                    <i className="fa-solid fa-star mr-2"></i> 主治專長
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {['超音波導引注射', 'PRP 高濃度血小板', '增生療法', '兒童生長評估', '運動傷害治療', '骨質疏鬆'].map((item, idx) => (
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
                                      <li className="flex items-start"><span className="text-cyan-500 mr-2 mt-1 text-xs">●</span>台大醫學系畢業</li>
                                      <li className="flex items-start"><span className="text-cyan-500 mr-2 mt-1 text-xs">●</span>復健科專科醫師</li>
                                      <li className="flex items-start"><span className="text-cyan-500 mr-2 mt-1 text-xs">●</span>ACE-CPT 美國私人教練</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-cyan-400 uppercase tracking-wider mb-3 border-b border-slate-700 pb-2 flex items-center">
                                        <i className="fa-solid fa-briefcase mr-2"></i> 專業經歷
                                    </h3>
                                    <ul className="space-y-2 text-slate-300 text-base">
                                      <li className="flex items-start"><span className="text-cyan-500 mr-2 mt-1 text-xs">●</span>馬偕醫院主治醫師</li>
                                      <li className="flex items-start"><span className="text-cyan-500 mr-2 mt-1 text-xs">●</span>台灣增生療法醫學會</li>
                                      <li className="flex items-start"><span className="text-cyan-500 mr-2 mt-1 text-xs">●</span>台大網球校隊</li>
                                    </ul>
                                </div>
                            </div>
                          </div>
                          
                          {/* ✨ 按鈕區塊：最後滑入，吸引注意 */}
                          <div className="mt-8 pt-5 border-t border-slate-700/50 flex flex-wrap gap-4 animate-on-scroll delay-500">
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