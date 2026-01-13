// src/app/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'

// ==========================================
// 1. Meta 設定 (個人醫師品牌優化版)
// ==========================================

const siteUrl = 'https://www.dryichen.com.tw'; 

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: '林羿辰醫師 - 運動教練醫師 | 新竹宸新復健科診所院長',
    template: '%s | 林羿辰醫師'
  },
  description: '台大醫院林羿辰醫師官方網站。現任新竹宸新復健科診所院長，擁有健身教練證照的復健科醫師。專長：高解析超音波導引PRP注射、增生療法、震波治療、兒童骨齡評估與減重門診。',
  keywords: [
    '林羿辰醫師', '林羿辰', '運動教練醫師', '新竹復健科醫師推薦',
    '新竹復健科', '宸新復健科', 'PRP注射', '震波治療', '兒童骨齡', '減重門診',
    '新竹科學園區', '關埔重劃區'
  ],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: '林羿辰醫師 - 運動教練醫師 | 專業復健治療',
    description: '台大醫師林羿辰，結合醫學與運動訓練，提供最專業的骨科復健與疼痛治療。',
    type: 'profile',
    url: '/',
    siteName: '林羿辰醫師',
    images: [
      {
        url: '/images/main/a.jpg',
        width: 1200,
        height: 630,
        alt: '林羿辰醫師',
      },
    ],
    locale: 'zh_TW',
  },
}

// ==========================================
// 2. Schema 結構化資料
// ==========================================
const medicalClinicSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  name: '宸新復健科診所 - 林羿辰醫師',
  alternateName: '林羿辰醫師診所',
  description: '由台大醫師林羿辰院長親自看診，提供PRP注射、震波治療、一對一運動治療等服務。',
  image: 'https://duk.tw/PLVLuz.png',
  logo: 'https://dryichen-4ze1.vercel.app/images/logo.png',
  url: siteUrl,
  telephone: '+886-3-564-7999',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '光復路一段371號B1',
    addressLocality: '新竹市',
    addressRegion: '東區',
    postalCode: '300',
    addressCountry: 'TW',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '24.783935', 
    longitude: '121.015243'
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '21:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '12:00' }
  ],
  medicalSpecialty: ['Physical Medicine and Rehabilitation', 'Orthopedics', 'Pediatrics'],
  physician: {
    '@type': 'Physician',
    name: '林羿辰',
    jobTitle: '院長',
    alumniOf: { '@type': 'EducationalOrganization', name: '國立台灣大學醫學系' },
  },
  areaServed: [
    { '@type': 'City', name: '新竹市' },
    { '@type': 'Place', name: '新竹科學園區' }
  ]
}

export default function Home() {
  return (
    <>
      <JsonLd data={medicalClinicSchema} />
      
      {/* 全頁背景設定：深色主題 */}
      <div className="min-h-screen flex flex-col bg-slate-900 text-slate-300 font-sans antialiased selection:bg-cyan-500/30">
        
        <main className="flex-grow relative">
          
          {/* ============================================================
             ✨ 最新內容速報欄位 (News Ticker)
            ============================================================ */}
          <section className="container mx-auto px-4 mb-4 md:mb-0 relative z-20 mt-4 md:mt-6">
             <div className="max-w-5xl mx-auto bg-slate-800/80 backdrop-blur border-l-4 border-pink-500 rounded-r-lg shadow-lg p-3 md:p-4 flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 hover:bg-slate-800 transition-colors">
               
               {/* 標籤 */}
               <div className="bg-pink-500/10 text-pink-400 px-3 py-1 rounded-full text-sm font-bold flex items-center shrink-0 border border-pink-500/20">
                  <i className="fa-solid fa-bell mr-2 animate-swing"></i>
                  最新消息
               </div>

               {/* 內容連結 */}
               <div className="flex-grow">
                  <Link href="/about/news" className="text-slate-200 hover:text-cyan-400 transition-colors line-clamp-1 text-sm md:text-base font-medium">
                     📢 <span className="text-yellow-400 font-bold mr-1">HOT!</span> 門診異動公告：本週六早診正常看診，歡迎預約 PRP 增生治療評估。
                  </Link>
               </div>

               {/* 更多按鈕 */}
               <Link href="/about/news" className="text-sm text-slate-400 hover:text-white shrink-0 hidden md:flex items-center group">
                  查看更多 <i className="fa-solid fa-chevron-right text-xs ml-1 group-hover:translate-x-1 transition-transform"></i>
               </Link>
             </div>
          </section>


          {/* =========================================
             Section 1: 醫師介紹 (Hero Section) 
             ========================================= */}
          <section className="container mx-auto px-4 pt-8 pb-12 md:pt-6 md:pb-16 fade-in">
             <div className="max-w-5xl mx-auto">
                <div className="bg-slate-800/60 backdrop-blur border border-slate-700 rounded-2xl overflow-hidden shadow-2xl relative group">
                   {/* 裝飾用的背景光暈 */}
                   <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                   
                   <div className="flex flex-col md:flex-row">
                      {/* 左側：醫師照片 */}
                      <div className="md:w-2/5 relative">
                         <div className="h-full w-full min-h-[400px] md:min-h-[500px] relative overflow-hidden">
                            <img 
                              src="/images/main/a.jpg"
                              alt="新竹復健科推薦-林羿辰醫師-台大雙專科院長" 
                              width="800"
                              height="1000"
                              className="absolute inset-0 w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                            />
                            {/* 照片底部的漸層遮罩 */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent md:bg-gradient-to-r"></div>
                         </div>
                      </div>

                      {/* 右側：醫師文字介紹 */}
                      <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center relative z-10">
                         
                         <h1 className="text-4xl md:text-5xl font-bold font-sans text-white mb-2 tracking-wide">
                           林羿辰 <span className="text-cyan-400">醫師</span>
                         </h1>

                         <p className="text-xl text-slate-300 mb-6 font-medium">
                           運動教練醫師 | 骨科復健專家
                         </p>
                         
                         <h2 className="text-xl md:text-2xl text-cyan-400 font-medium mb-8 border-l-4 border-cyan-500 pl-4 flex items-center">
                           <i className="fa-solid fa-hospital mr-2 text-base opacity-80"></i>
                           宸新復健科診所 <span className="text-sm text-slate-400 ml-2 font-normal">院長</span>
                         </h2>
                         
                         <div className="space-y-8">
                           {/* 學歷區塊 */}
                           <div>
                              <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-3 border-b border-slate-700 pb-1 inline-block">
                                <i className="fa-solid fa-graduation-cap mr-2"></i>學歷與資格
                              </h3>
                              <ul className="space-y-2 text-slate-300">
                                 <li className="flex items-start"><span className="text-cyan-500 mr-2">▹</span>國立台灣大學醫學系</li>
                                 <li className="flex items-start"><span className="text-cyan-500 mr-2">▹</span>雙專科醫師 (復健專科 + 骨鬆專科)</li>
                                 <li className="flex items-start"><span className="text-cyan-500 mr-2">▹</span>ACE-CPT 美國運動學會國際私人教練認證</li>
                              </ul>
                           </div>
                           
                           {/* 經歷區塊 */}
                           <div>
                              <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-3 border-b border-slate-700 pb-1 inline-block">
                                <i className="fa-solid fa-briefcase mr-2"></i>經歷
                              </h3>
                              <ul className="space-y-2 text-slate-300">
                                 <li className="flex items-start"><span className="text-cyan-500 mr-2">▹</span>新竹馬偕紀念醫院 主治醫師</li>
                                 <li className="flex items-start"><span className="text-cyan-500 mr-2">▹</span>台灣增生療法醫學會 (TAPRM) 會員</li>
                                 <li className="flex items-start"><span className="text-cyan-500 mr-2">▹</span>台灣大學網球校隊</li>
                              </ul>
                           </div>
                         </div>

                         {/* 醫師介紹 CTA */}
                         <div className="mt-8 pt-6 border-t border-slate-700/50">
                            <Link href="/about/doctors" className="inline-flex items-center text-cyan-400 font-bold hover:text-white transition-colors group/link">
                               了解完整醫師資歷 
                               <i className="fa-solid fa-arrow-right ml-2 group-hover/link:translate-x-1 transition-transform"></i>
                            </Link>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </section>

          {/* =========================================
             Section 2: 診所資訊 (Clinic Info)
             ========================================= */}
          <section className="container mx-auto px-4 pb-16">
             <div className="max-w-6xl mx-auto w-full">
                {/* 標題 */}
                <div className="flex items-center gap-3 mb-8">
                   <span className="bg-cyan-500/20 text-cyan-400 p-3 rounded-lg border border-cyan-500/30">
                     <i className="fa-solid fa-hospital text-xl"></i>
                   </span>
                   <h2 className="text-3xl font-bold font-sans text-white">
                     診所資訊 <span className="text-slate-500 text-lg font-normal ml-2">Clinic Info</span>
                   </h2>
                </div>

                {/* 內容卡片 */}
                <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-6 md:p-8 mb-12 shadow-lg backdrop-blur-sm hover:border-cyan-500/30 transition-colors">
                   <div className="flex flex-col lg:flex-row gap-8 items-stretch">
                      
                      {/* 左側：診所環境照片 */}
                      <div className="lg:w-5/12 flex-shrink-0">
                         <div className="h-full w-full min-h-[300px] rounded-lg overflow-hidden border border-slate-600 shadow-md relative group">
                            <img 
                              src="/images/main/b.jpg"
                              alt="新竹宸新復健科診所外觀 - 位於光復路近竹科與Costco" 
                              width="800"
                              height="600"
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                            
                            {/* 圖片上的標籤 */}
                            <div className="absolute bottom-4 left-4 flex gap-2">
                                <span className="text-xs bg-black/60 text-white px-2 py-1 rounded backdrop-blur">
                                    <i className="fa-solid fa-square-parking mr-1 text-yellow-400"></i>專屬停車位
                                </span>
                                <span className="text-xs bg-black/60 text-white px-2 py-1 rounded backdrop-blur">
                                    <i className="fa-solid fa-wheelchair mr-1 text-blue-400"></i>無障礙空間
                                </span>
                            </div>
                         </div>
                      </div>

                      {/* 右側：特色列表與聯絡資訊 */}
                      <div className="lg:w-7/12 flex flex-col">
                         <h3 className="text-3xl font-bold text-white mb-6 border-b border-slate-700 pb-4 flex items-center justify-between">
                            新竹市宸新復健科
                            <Link href="/about/clinic" className="text-sm text-cyan-500 font-normal hover:underline decoration-cyan-500/50 underline-offset-4">
                                查看設備介紹 <i className="fa-solid fa-arrow-right text-xs"></i>
                            </Link>
                         </h3>

                         <div className="grid md:grid-cols-2 gap-6 mb-8">
                           {/* 特色項目 */}
                           <div>
                              <h4 className="text-lg font-bold text-cyan-400 mb-3 font-sans border-l-4 border-cyan-500 pl-3">診所特色項目</h4>
                              <ul className="space-y-2 text-slate-300 text-base">
                                 <li className="flex items-start"><span className="text-cyan-500 mr-2">▹</span>醫學中心級數位X光機</li>
                                 <li className="flex items-start"><span className="text-cyan-500 mr-2">▹</span>頂規高畫質超音波檢查</li>
                                 <li className="flex items-start"><span className="text-cyan-500 mr-2">▹</span>台大醫師團隊親自看診</li>
                              </ul>
                           </div>

                           {/* 特色治療 */}
                           <div>
                              <h4 className="text-lg font-bold text-pink-400 mb-3 font-sans border-l-4 border-pink-500 pl-3">診所特色治療</h4>
                              <ul className="space-y-2 text-slate-300 text-base">
                                 <li className="flex items-start"><span className="text-pink-500 mr-2">▹</span>瑞士進口聚焦式震波</li>
                                 <li className="flex items-start"><span className="text-pink-500 mr-2">▹</span>PRP 高濃度血小板再生</li>
                                 <li className="flex items-start"><span className="text-pink-500 mr-2">▹</span>兒童早療 (PT/OT/ST)</li>
                                 <li className="flex items-start"><span className="text-pink-500 mr-2">▹</span>增生療法注射</li>
                              </ul>
                           </div>
                         </div>

                         {/* 底部聯絡區塊 */}
                         <div className="mt-auto bg-slate-900/40 p-5 rounded-lg border border-slate-700/50 hover:border-slate-600 transition-colors">
                            <div className="flex flex-col gap-4">
                               <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                  {/* 地址與電話 */}
                                  <div className="space-y-2">
                                     <div className="flex items-start gap-3 text-slate-200 font-medium">
                                        <i className="fa-solid fa-location-dot mt-1 text-cyan-400"></i>
                                        <p>300新竹市東區光復路一段371號B1 (近竹科/關新路)</p>
                                     </div>
                                     <div className="flex items-center gap-3 text-slate-200 font-medium">
                                        <i className="fa-solid fa-phone text-cyan-400"></i>
                                        <p>(03) 564-7999</p>
                                     </div>
                                  </div>
                                  
                                  {/* 按鈕群組區塊：包含 診所網頁 & Google 地圖 */}
                                  <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                                    
                                    {/* 1. 診所網頁 (Primary - Gradient) */}
                                    <a 
                                      href="https://www.forcestar.com.tw/clinic/%E6%96%B0%E7%AB%B9%E7%AB%B9%E7%A7%91%E5%AE%B8%E6%96%B0%E5%BE%A9%E5%81%A5%E7%A7%91%E8%A8%BA%E6%89%80/c/jvAUv7dDKT"
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      className="text-center px-5 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all font-medium text-sm whitespace-nowrap group"
                                    >
                                       <i className="fa-solid fa-globe mr-2 group-hover:scale-110 transition-transform"></i> 診所網頁
                                    </a>

                                    {/* 2. Google 地圖 (Secondary - Slate) */}
                                    <a 
                                      href="https://maps.app.goo.gl/dSe9zVPgnNV7m3jo9" 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      className="text-center px-5 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg hover:shadow-lg transition-all font-medium text-sm whitespace-nowrap group border border-slate-600"
                                    >
                                       <i className="fa-solid fa-map-location-dot mr-1 text-cyan-400"></i> 開啟 Google 地圖
                                    </a>

                                  </div>

                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </section>

        </main>
      </div>
    </>
  )
}