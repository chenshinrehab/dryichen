// src/app/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
  title: '新竹宸新復健科診所 - 林羿辰醫師 | 專業復健治療、PRP注射、震波治療',
  description: '新竹宸新復健科診所，由台大醫師林羿辰院長提供專業復健治療服務，包括PRP注射、震波治療、一對一運動治療、減重門診、兒童骨齡評估等。',
  keywords: ['新竹復健科', 'PRP注射', '震波治療', '復健科診所', '林羿辰醫師', '新竹復健'],
  openGraph: {
    title: '新竹宸新復健科診所 - 林羿辰醫師',
    description: '專業復健治療服務，包括PRP注射、震波治療、一對一運動治療等',
    type: 'website',
    images: ['/images/clinic/logo.png'],
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
  image: '/images/clinic.png',
  medicalSpecialty: ['Physical Medicine and Rehabilitation', '復健醫學'],
  physician: {
    '@type': 'Physician',
    name: '林羿辰',
    jobTitle: '院長',
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: '國立台灣大學醫學系',
    },
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
      
      {/* 全頁背景設定：深色主題 
        這裡包含了導覽列、主內容、頁尾，確保整體風格一致
      */}
      <div className="min-h-screen flex flex-col bg-slate-900 text-slate-300 font-sans antialiased selection:bg-cyan-500/30">
        
        {/* 引入導覽列元件 (這裡已經包含了 Logo、社群按鈕與選單) */}
        <Navigation />

        <main className="flex-grow relative">
          
          {/* =========================================
              Section 1: 醫師介紹 (Hero Section) 
             ========================================= */}
          <section className="container mx-auto px-4 py-12 md:py-16 fade-in">
             <div className="max-w-5xl mx-auto">
                <div className="bg-slate-800/60 backdrop-blur border border-slate-700 rounded-2xl overflow-hidden shadow-2xl relative">
                   {/* 裝飾用的背景光暈 */}
                   <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                   
                   <div className="flex flex-col md:flex-row">
                      {/* 左側：醫師照片 */}
                      <div className="md:w-2/5 relative">
                         <div className="h-full w-full min-h-[400px] md:min-h-[500px] relative">
                            <img 
                              src="https://duk.tw/UXXvK3.jpg" 
                              alt="新竹復健科推薦-林羿辰醫師" 
                              className="absolute inset-0 w-full h-full object-cover object-top opacity-90 hover:opacity-100 transition-opacity duration-500" 
                            />
                            {/* 照片底部的漸層遮罩，讓文字好閱讀 */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent md:bg-gradient-to-r"></div>
                         </div>
                      </div>

                      {/* 右側：醫師文字介紹 */}
                      <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center relative z-10">
                         <h1 className="text-4xl font-bold font-sans text-white mb-2">
                           林羿辰 <span className="text-xl text-cyan-400">醫師</span>
                         </h1>
                         <p className="text-lg text-slate-300 mb-6 border-l-4 border-cyan-500 pl-4">
                           宸新復健科診所院長 | 運動教練醫師
                         </p>
                         
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
                <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-6 md:p-8 mb-12 shadow-lg backdrop-blur-sm">
                   <div className="flex flex-col lg:flex-row gap-8 items-stretch">
                      
                      {/* 左側：診所環境照片 */}
                      <div className="lg:w-5/12 flex-shrink-0">
                         <div className="h-full w-full min-h-[300px] rounded-lg overflow-hidden border border-slate-600 shadow-md relative group">
                            <img 
                              src="https://duk.tw/PLVLuz.png" 
                              alt="新竹市宸新復健科 - 提供X光、超音波檢查、PRP注射與體外震波治療" 
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                         </div>
                      </div>

                      {/* 右側：特色列表與聯絡資訊 */}
                      <div className="lg:w-7/12 flex flex-col">
                         <h3 className="text-3xl font-bold text-white mb-6 border-b border-slate-700 pb-4">新竹市宸新復健科</h3>

                         <div className="grid md:grid-cols-2 gap-6 mb-8">
                            {/* 特色項目 */}
                            <div>
                               <h4 className="text-lg font-bold text-cyan-400 mb-3 font-sans border-l-4 border-cyan-500 pl-3">診所特色項目</h4>
                               <ul className="space-y-2 text-slate-300 text-base">
                                  <li className="flex items-start"><span className="text-cyan-500 mr-2">▹</span>醫學中心級數位X光機</li>
                                  <li className="flex items-start"><span className="text-cyan-500 mr-2">▹</span>頂規高畫質超音波檢查</li>
                                  <li className="flex items-start"><span className="text-cyan-500 mr-2">▹</span>台大醫師團隊</li>
                               </ul>
                            </div>

                            {/* 特色治療 */}
                            <div>
                               <h4 className="text-lg font-bold text-cyan-400 mb-3 font-sans border-l-4 border-pink-500 pl-3">診所特色治療</h4>
                               <ul className="space-y-2 text-slate-300 text-base">
                                  <li className="flex items-start"><span className="text-pink-500 mr-2">▹</span>瑞士進口聚焦式震波</li>
                                  <li className="flex items-start"><span className="text-pink-500 mr-2">▹</span>PRP 高濃度血小板再生</li>
                                  <li className="flex items-start"><span className="text-pink-500 mr-2">▹</span>美國進口高能量雷射</li>
                                  <li className="flex items-start"><span className="text-pink-500 mr-2">▹</span>兒童早療 (PT/OT/ST)</li>
                                  <li className="flex items-start"><span className="text-pink-500 mr-2">▹</span>增生療法注射</li>
                               </ul>
                            </div>
                         </div>

                         {/* 底部聯絡區塊 */}
                         <div className="mt-auto bg-slate-900/40 p-5 rounded-lg border border-slate-700/50 hover:border-slate-600 transition-colors">
                            <div className="flex flex-col gap-4">
                               <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                  <div className="space-y-2">
                                     <div className="flex items-start gap-3 text-slate-200 font-medium">
                                        <i className="fa-solid fa-location-dot mt-1 text-cyan-400"></i>
                                        <p>300新竹市東區光復路一段371號B1 (竹科附近)</p>
                                     </div>
                                     <div className="flex items-center gap-3 text-slate-200 font-medium">
                                        <i className="fa-solid fa-phone text-cyan-400"></i>
                                        <p>(03) 564-7999</p>
                                     </div>
                                  </div>
                                  
                                  <a 
                                    href="https://goo.gl/maps/placeholder" 
                                    target="_blank" 
                                    className="flex-shrink-0 w-full sm:w-auto text-center px-5 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all font-medium text-sm whitespace-nowrap"
                                  >
                                     <i className="fa-solid fa-map-location-dot mr-1"></i> 開啟 Google 地圖
                                  </a>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </section>

          {/* =========================================
              Section 3: 快速導覽 (Visual Navigation)
             ========================================= */}
          <section className="border-t border-slate-800 bg-slate-900/50 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold font-sans text-white text-center mb-8 tracking-wide">
                    <span className="text-cyan-400">快速</span>導覽
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-2 max-w-6xl mx-auto">
                    
                    {/* 卡片 1: 治療方式 */}
                    <Link href="/treatments" className="group rounded-xl relative h-40 overflow-hidden shadow-lg border border-slate-700 hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all">
                        <img src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=800" alt="治療方式" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent flex items-end p-4">
                            <span className="text-white font-bold group-hover:text-cyan-400 transition-colors">治療方式</span>
                        </div>
                    </Link>

                    {/* 卡片 2: 減重與骨齡 */}
                    <Link href="/weight-bone" className="group rounded-xl relative h-40 overflow-hidden shadow-lg border border-slate-700 hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all">
                        <img src="https://duk.tw/R97hvw.jpg" alt="減重與骨齡" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent flex items-end p-4">
                            <span className="text-white font-bold group-hover:text-cyan-400 transition-colors">減重與骨齡</span>
                        </div>
                    </Link>

                     {/* 卡片 3: 預約看診 (使用 icon) */}
                     <Link href="/booking" className="group rounded-xl relative h-40 overflow-hidden shadow-lg border border-slate-700 hover:border-pink-500 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-all">
                        <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
                            <i className="fa-solid fa-calendar-check text-4xl text-slate-600 group-hover:text-pink-500 transition-colors duration-300"></i>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent flex items-end p-4">
                            <span className="text-white font-bold group-hover:text-pink-400 transition-colors">馬上預約</span>
                        </div>
                    </Link>

                    {/* 卡片 4: 疾病衛教 (使用 icon) */}
                    <Link href="/diseases" className="group rounded-xl relative h-40 overflow-hidden shadow-lg border border-slate-700 hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all">
                        <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
                            <i className="fa-solid fa-book-medical text-4xl text-slate-600 group-hover:text-cyan-500 transition-colors duration-300"></i>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent flex items-end p-4">
                            <span className="text-white font-bold group-hover:text-cyan-400 transition-colors">疾病衛教</span>
                        </div>
                    </Link>
                </div>
            </div>
          </section>

        </main>

        <Footer />
        
      </div>
    </>
  )
}