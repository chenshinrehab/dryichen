// src/app/about/clinic/[id]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { facilitiesData, getFacilityById } from '@/data/facilities'

interface PageProps { params: { id: string } }

export async function generateStaticParams() {
  return facilitiesData.map((item) => ({ id: item.id }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const item = getFacilityById(params.id)
  if (!item) return { title: '設備介紹' }
  
  return {
    title: `${item.title} - 診所設備介紹 | 宸新復健科`,
    description: item.description,
    keywords: item.keywords,
  }
}

export default function FacilityDetailPage({ params }: PageProps) {
  const item = getFacilityById(params.id)
  if (!item) notFound()

  const siteUrl = 'https://www.dryichen.com.tw'
  const currentUrl = `${siteUrl}/about/clinic/${params.id}`

  const jsonLdProduct = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: item.title,
    description: item.description,
    image: item.imageUrl,
    brand: { '@type': 'Brand', name: 'Medical Equipment' }
  }

  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '首頁', item: `${siteUrl}/` },
      { '@type': 'ListItem', position: 2, name: '診所設備', item: `${siteUrl}/about/clinic` },
      { '@type': 'ListItem', position: 3, name: item.title, item: currentUrl },
    ],
  }

  return (
    <>
      <JsonLd data={jsonLdProduct} />
      <JsonLd data={jsonLdBreadcrumb} />

      {/* ✨ 修改重點：
          原為 py-12 (上下 48px)
          改為 pt-4 (上 16px) pb-12 (下 48px) md:pt-8 (電腦版上 32px)
      */}
      <div className="min-h-screen bg-slate-900 text-slate-300 pt-4 pb-12 md:pt-8 md:pb-16 fade-in">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <nav className="text-sm text-slate-500 mb-8 font-sans">
              <Link href="/about/clinic" className="hover:text-cyan-400 transition-colors">診所設備</Link>
              <span className="mx-2">/</span>
              <span className="text-cyan-500">{item.title}</span>
          </nav>

          <Link href="/about/clinic" className="inline-flex items-center text-cyan-400 mb-8 hover:text-cyan-300 transition-colors group">
             <i className="fa-solid fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i> 返回設備列表
          </Link>

          <div className="bg-slate-800/80 backdrop-blur border border-slate-700 rounded-2xl overflow-hidden shadow-2xl">
              
             <div className="relative h-64 md:h-96 w-full group">
                <img src={item.imageUrl} alt={item.title} className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                
                <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-slate-900/90 to-transparent">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{item.title}</h1>
                    <div className="flex flex-wrap gap-2">
                        {item.keywords.slice(0, 4).map((kw, i) => (
                            <span key={i} className="text-xs bg-cyan-900/60 text-cyan-300 px-2 py-1 rounded border border-cyan-700/50 backdrop-blur-sm">
                                #{kw}
                            </span>
                        ))}
                    </div>
                </div>
             </div>

             <div className="p-8 md:p-12">
                 <div 
                   className="prose prose-invert prose-lg max-w-none 
                              text-slate-300 leading-relaxed 
                              prose-strong:text-white prose-strong:font-bold
                              prose-p:mb-6"
                 >
                    <div dangerouslySetInnerHTML={{ __html: item.contentHtml }} />
                 </div>

                 <div className="mt-12 pt-10 border-t border-slate-700/50 w-full flex flex-col items-center gap-8">
                     
                     {/* 1. 圖片預留位子 */}
                     <div className="w-full">
                        {/* <img src="/images/your-future-image.jpg" className="w-full rounded-xl shadow-lg" alt="補充圖片" /> */}
                     </div>

                     {/* 2. 按鈕 */}
                     <Link 
                       href="/about/clinic" 
                       className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-cyan-400 border-2 border-cyan-500/30 rounded-full hover:bg-cyan-500/10 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300 group"
                     >
                          了解更多診所資訊 
                          <i className="fa-solid fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform"></i>
                     </Link>
                 </div>

             </div>
          </div>

        </div>
      </div>
    </>
  )
}