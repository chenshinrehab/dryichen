// src/app/treatments/[slug]/page.tsx
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
// 引入剛剛修改好的資料檔
import { getTreatmentBySlug, getAllTreatmentSlugs } from '@/data/treatments'

interface PageProps {
  params: {
    slug: string
  }
}

// 1. 產生靜態路徑
export async function generateStaticParams() {
  return getAllTreatmentSlugs()
}

// 2. 產生 Metadata (SEO)
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const treatment = getTreatmentBySlug(params.slug)
  if (!treatment) return { title: '項目不存在' }

  return {
    title: `${treatment.title} - 新竹宸新復健科`,
    description: treatment.description,
  }
}

export default function TreatmentDetailPage({ params }: PageProps) {
  const treatment = getTreatmentBySlug(params.slug)

  if (!treatment) {
    notFound()
  }

  // ==========================================
  // ✨ 新增：自動生成 QR Code 邏輯
  // ==========================================
  
  // 1. 設定您的網站主網域
  const siteUrl = 'https://dryichen-4ze1.vercel.app'
  
  // 2. 組合成當前頁面的完整網址
  const currentPageUrl = `${siteUrl}/treatments/${params.slug}`
  
  // 3. 使用 API 生成 QR Code 圖片連結
  const qrCodeApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(currentPageUrl)}`

  // ==========================================

  // 3. 強化型 SEO 資料構造 (包含麵包屑 + 醫療程序資訊)
  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '首頁', item: `${siteUrl}/` },
      { '@type': 'ListItem', position: 2, name: '治療方式', item: `${siteUrl}/treatments` },
      { '@type': 'ListItem', position: 3, name: treatment.title, item: currentPageUrl },
    ],
  }

  const jsonLdProcedure = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: treatment.title,
    description: treatment.description,
    bodyLocation: '全身骨骼肌肉',
    procedureType: 'Non-surgical', // 非手術
  }

  return (
    <>
      {/* 放入兩組 SEO 資料 */}
      <JsonLd data={jsonLdBreadcrumb} />
      <JsonLd data={jsonLdProcedure} />
      
      {/* 整頁深色背景 */}
      <div className="min-h-screen flex flex-col bg-slate-900 text-slate-300">
        
        {/* 主要內容區塊 */}
        <main className="flex-grow py-8 md:py-12 fade-in relative z-10">
           <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

              {/* 返回按鈕 */}
              <Link href="/treatments" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-6 transition-colors group">
                 <i className="fa-solid fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i> 
                 返回治療列表
              </Link>
              
              {/* === 您指定的卡片設計 === */}
              <div className="bg-slate-800/80 backdrop-blur border border-slate-700 rounded-2xl overflow-hidden shadow-2xl p-4 md:p-8">
                  
                  {/* Header: 標題與 QR Code */}
                  <div className="mb-8 border-l-4 border-cyan-500 pl-4 bg-gradient-to-r from-slate-900/50 to-transparent py-4 rounded-r-xl flex items-center gap-6">
                      
                      {/* ✨✨✨ QR Code 區塊 ✨✨✨ 
                         hidden: 手機版預設隱藏
                         md:block: 電腦版(768px以上)顯示
                      */}
                      <div className="hidden md:block bg-white p-1 rounded-lg shrink-0 group relative">
                          <img 
                            className="w-20 h-20 object-contain" 
                            src={qrCodeApiUrl} 
                            alt={`掃描預約 ${treatment.title}`}
                          />
                          {/* 滑鼠移過去顯示提示文字 */}
                          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-max bg-slate-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                            掃描此頁面
                          </div>
                      </div>
                      
                      <div>
                          <h1 className="text-3xl md:text-4xl font-bold font-sans text-white mb-2">
                            {treatment.title}
                          </h1>
                          {treatment.subtitle && (
                            <h2 className="text-xl text-cyan-400 font-medium">
                              {treatment.subtitle}
                            </h2>
                          )}
                      </div>
                  </div>

                  {/* 內容說明區 (支援 HTML 格式) */}
                  {treatment.contentHtml ? (
                    <div 
                      className="text-slate-300 leading-relaxed text-lg mb-8 border-b border-slate-700 pb-6"
                      dangerouslySetInnerHTML={{ __html: treatment.contentHtml }}
                    />
                  ) : (
                    <p className="text-slate-300 leading-relaxed text-lg mb-8 border-b border-slate-700 pb-6">
                      {treatment.description}
                    </p>
                  )}

                  {/* 兩欄資訊區 (為什麼選擇我們 & 治療重點) */}
                  {(treatment.whyChooseUs || treatment.treatmentFocus) && (
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {/* 左：為什麼選擇宸新 */}
                        {treatment.whyChooseUs && (
                          <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700 h-full">
                              <h4 className="text-xl font-bold text-white mb-4 border-b border-slate-600 pb-2 flex items-center">
                                <i className="fa-solid fa-thumbs-up text-cyan-500 mr-2 text-base"></i>
                                為什麼選擇宸新
                              </h4>
                              <ul className="space-y-3 text-slate-300 list-disc list-inside">
                                  {treatment.whyChooseUs.map((item, idx) => (
                                    <li key={idx} dangerouslySetInnerHTML={{__html: item}}></li>
                                  ))}
                              </ul>
                          </div>
                        )}

                        {/* 右：治療重點 */}
                        {treatment.treatmentFocus && (
                          <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700 h-full">
                              <h4 className="text-xl font-bold text-white mb-4 border-b border-slate-600 pb-2 flex items-center">
                                <i className="fa-solid fa-crosshairs text-pink-500 mr-2 text-base"></i>
                                治療重點
                              </h4>
                              <ul className="space-y-3 text-slate-300 list-disc list-inside">
                                  {treatment.treatmentFocus.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                  ))}
                              </ul>
                          </div>
                        )}
                    </div>
                  )}

                  {/* 圖片展示區 */}
                  {treatment.images && treatment.images.length > 0 && (
                    <div className="space-y-8">
                      {treatment.images.map((img, idx) => (
                        <div key={idx} className="text-center group">
                           <div className="relative overflow-hidden rounded-lg shadow-lg inline-block w-full md:w-3/4">
                             <img 
                               src={img.src} 
                               alt={img.alt} 
                               className="w-full h-auto transform group-hover:scale-[1.02] transition-transform duration-500" 
                             />
                           </div>
                           <p className="text-sm text-slate-500 mt-2">{img.alt}</p>
                        </div>
                      ))}
                    </div>
                  )}

              </div>
           </div>
        </main>
      </div>
    </>
  )
}