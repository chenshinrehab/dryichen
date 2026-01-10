// src/app/weight-bone/[slug]/page.tsx
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
// 引入剛剛修改好的資料檔
import { getWeightLossProgramBySlug, getAllWeightLossProgramSlugs } from '@/data/weightLoss'

interface PageProps {
  params: {
    slug: string
  }
}

// 1. 產生靜態路徑
export async function generateStaticParams() {
  return getAllWeightLossProgramSlugs()
}

// 2. 產生 Metadata (SEO)
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const program = getWeightLossProgramBySlug(params.slug)
  if (!program) return { title: '項目不存在' }

  return {
    title: `${program.title} - 新竹減重與骨齡門診`,
    description: program.description,
  }
}

export default function WeightBoneDetailPage({ params }: PageProps) {
  const program = getWeightLossProgramBySlug(params.slug)

  if (!program) {
    notFound()
  }

  // ==========================================
  // 自動生成 QR Code 邏輯
  // ==========================================
  const siteUrl = 'https://dryichen-4ze1.vercel.app'
  const currentPageUrl = `${siteUrl}/weight-bone/${params.slug}`
  const qrCodeApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(currentPageUrl)}`
  // ==========================================

  // 3. 強化型 SEO 資料構造
  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '首頁', item: `${siteUrl}/` },
      { '@type': 'ListItem', position: 2, name: '減重與骨齡', item: `${siteUrl}/weight-bone` },
      { '@type': 'ListItem', position: 3, name: program.title, item: currentPageUrl },
    ],
  }

  const jsonLdProduct = {
    '@context': 'https://schema.org',
    '@type': 'Product', // 減重療程可以用 Product 或 MedicalProcedure，這裡用 Product 比較適合有價格的項目
    name: program.title,
    description: program.description,
    image: program.images && program.images.length > 0 ? program.images[0].src : undefined,
  }

  return (
    <>
      <JsonLd data={jsonLdBreadcrumb} />
      <JsonLd data={jsonLdProduct} />
      
      {/* 整頁深色背景 */}
      <div className="min-h-screen flex flex-col bg-slate-900 text-slate-300">
        
        {/* 主要內容區塊 */}
        <main className="flex-grow py-8 md:py-12 fade-in relative z-10">
           <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

              {/* 返回按鈕 */}
              <Link href="/weight-bone" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-6 transition-colors group">
                 <i className="fa-solid fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i> 
                 返回列表
              </Link>
              
              {/* === 卡片設計 === */}
              <div className="bg-slate-800/80 backdrop-blur border border-slate-700 rounded-2xl overflow-hidden shadow-2xl p-4 md:p-8">
                  
                  {/* Header: 標題與 QR Code */}
                  <div className="mb-8 border-l-4 border-cyan-500 pl-4 bg-gradient-to-r from-slate-900/50 to-transparent py-4 rounded-r-xl flex items-center gap-6">
                      
                      {/* QR Code: 手機隱藏 (hidden), 電腦顯示 (md:block) */}
                      <div className="hidden md:block bg-white p-1 rounded-lg shrink-0 group relative">
                          <img 
                            className="w-20 h-20 object-contain" 
                            src={qrCodeApiUrl} 
                            alt={`掃描預約 ${program.title}`}
                          />
                          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-max bg-slate-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                            掃描此頁面
                          </div>
                      </div>
                      
                      <div>
                          <h1 className="text-3xl md:text-4xl font-bold font-sans text-white mb-2">
                            {program.title}
                          </h1>
                          {program.subtitle && (
                            <h2 className="text-xl text-cyan-400 font-medium">
                              {program.subtitle}
                            </h2>
                          )}
                      </div>
                  </div>

                  {/* 內容說明區 (支援 HTML) */}
                  {program.contentHtml ? (
                    <div 
                      className="text-slate-300 leading-relaxed text-lg mb-8 border-b border-slate-700 pb-6"
                      dangerouslySetInnerHTML={{ __html: program.contentHtml }}
                    />
                  ) : (
                    <p className="text-slate-300 leading-relaxed text-lg mb-8 border-b border-slate-700 pb-6">
                      {program.description}
                    </p>
                  )}

                  {/* 兩欄資訊區 (我們的特色 & 療程優點) */}
                  {(program.whyChooseUs || program.programBenefits) && (
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {/* 左：我們的特色 */}
                        {program.whyChooseUs && (
                          <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700 h-full">
                              <h4 className="text-xl font-bold text-white mb-4 border-b border-slate-600 pb-2 flex items-center">
                                <i className="fa-solid fa-star text-cyan-500 mr-2 text-base"></i>
                                我們的特色
                              </h4>
                              <ul className="space-y-3 text-slate-300 list-disc list-inside">
                                  {program.whyChooseUs.map((item, idx) => (
                                    <li key={idx} dangerouslySetInnerHTML={{__html: item}}></li>
                                  ))}
                              </ul>
                          </div>
                        )}

                        {/* 右：療程優點 */}
                        {program.programBenefits && (
                          <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700 h-full">
                              <h4 className="text-xl font-bold text-white mb-4 border-b border-slate-600 pb-2 flex items-center">
                                {/* 邏輯：如果有設定 benefitsIconClass 就用設定的，否則用預設的粉紅色讚 
                                */}
                                <i className={`${program.benefitsIconClass || 'fa-solid fa-thumbs-up text-pink-500'} mr-2 text-base`}></i>
                                
                                {/* 邏輯：如果有設定 benefitsTitle 就用設定的，否則顯示 "療程優點" 
                                */}
                                {program.benefitsTitle || '療程優點'}
                              </h4>
                              
                              <ul className="space-y-3 text-slate-300 list-disc list-inside">
                                  {program.programBenefits.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                  ))}
                              </ul>
                          </div>
                        )}
                    </div>
                  )}

                  {/* 圖片展示區 (無文字版，保留 alt SEO) */}
                  {program.images && program.images.length > 0 && (
                    <div className="space-y-8">
                      {program.images.map((img, idx) => (
                        <div key={idx} className="text-center group">
                           <div className="relative overflow-hidden rounded-lg shadow-lg inline-block w-full md:w-3/4">
                             <img 
                               src={img.src} 
                               alt={img.alt} 
                               className="w-full h-auto transform group-hover:scale-[1.02] transition-transform duration-500" 
                             />
                           </div>
                           {/* 這裡不顯示 <p> 文字，畫面更乾淨 */}
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