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
    title: `${item.title} - 診所設備介紹 | 新竹宸新復健科`,
    description: item.description,
    keywords: item.keywords,
  }
}

export default function FacilityDetailPage({ params }: PageProps) {
  const item = getFacilityById(params.id)
  if (!item) notFound()

  const siteUrl = 'https://www.dryichen.com.tw'
  const currentUrl = `${siteUrl}/about/clinic/${params.id}`

  // ✨ 修改處：改用 MedicalWebPage 包裹 MedicalDevice
  const jsonLdDevice = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    '@id': `${currentUrl}#webpage`,
    name: `${item.title} - 設備介紹`,
    description: item.description,
    url: currentUrl,
    author: {
        '@type': 'MedicalOrganization',
        name: '新竹宸新復健科',
        url: siteUrl
    },
    // 定義此頁面的主角是「醫療器材」
    mainEntity: {
        '@type': 'MedicalDevice',
        name: item.title,
        description: item.description,
        image: item.imageUrl,
        // 如果您的資料庫有廠商名稱，可以加在這裡，沒有的話可省略
        // manufacturer: { '@type': 'Organization', name: '品牌名稱' } 
    }
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
      <JsonLd data={jsonLdDevice} />
      <JsonLd data={jsonLdBreadcrumb} />

      {/* ✨ CSS 樣式修正 (保持原本您喜歡的設定) */}
      <style dangerouslySetInnerHTML={{__html: `
        /* 手機版與全域預設 */
        .facility-content p, .facility-content li {
            font-size: 18px !important; 
            line-height: 1.625 !important;
            margin-bottom: 1.5rem !important;
            letter-spacing: 0px !important;
            color: #cbd5e1 !important; /* Slate-300 */
        }

        /* 重點文字 (strong) - 青色 */
        .facility-content strong {
            color: #22d3ee !important; /* Cyan-400 */
            font-weight: 700 !important;
        }

        /* 圖片與影片預設設定 */
        .facility-content img, .facility-content video, .facility-content iframe {
            max-width: 100% !important;
            border-radius: 0.75rem !important;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3) !important;
            margin: 2rem auto !important;
            display: block !important;
            border: 1px solid #475569 !important;
        }

        /* ✨ 圖片高度自動 */
        .facility-content img {
            height: auto !important;
        }

        /* ✨ 影片強制設定 16:9 比例，解決高度太矮問題 */
        .facility-content video, .facility-content iframe {
            aspect-ratio: 16 / 9 !important;
            height: auto !important; /* 讓 aspect-ratio 控制高度 */
        }
        
        /* 電腦版 (寬度大於 768px) */
        @media (min-width: 768px) {
            .facility-content p, .facility-content li {
                font-size: 18px !important; 
                line-height: 1.625 !important; 
                margin-bottom: 2rem !important;
                letter-spacing: 0.025em !important;
                color: #cbd5e1 !important;
            }
            .facility-content h2 {
                font-size: 1.875rem !important; 
                margin-top: 3rem !important;
                margin-bottom: 1.5rem !important;
                color: #ffffff !important;
            }
            
            /* H3 設定：放大且顏色改為灰白色 */
            .facility-content h3 {
                font-size: 1.75rem !important;
                margin-top: 2.5rem !important;
                margin-bottom: 1.25rem !important;
                color: #cbd5e1 !important;
                font-weight: 700 !important;
            }

            /* 電腦版寬度調整 */
            
            /* 1. 圖片 (img)：限制為 85% */
            .facility-content img {
                width: 85% !important;
                max-width: 85% !important;
            }

            /* 2. 影片 (video, iframe)：維持 100% 滿版 (比例已由上方 aspect-ratio 控制) */
            .facility-content video, .facility-content iframe {
                width: 100% !important;
                max-width: 100% !important;
            }
        }
      `}} />

      <div className="min-h-screen bg-slate-900 text-slate-300 pt-4 pb-12 md:pt-8 md:pb-16 fade-in">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <nav className="hidden text-sm text-slate-500 mb-8 font-sans">
              <Link href="/about/clinic" className="hover:text-cyan-400 transition-colors">診所設備</Link>
              <span className="mx-2">/</span>
              <span className="text-cyan-500">{item.title}</span>
          </nav>

          <Link href="/about/clinic" className="inline-flex items-center text-cyan-400 mb-4 hover:text-cyan-300 transition-colors group">
              <i className="fa-solid fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i> 返回設備列表
          </Link>

          <div className="bg-slate-800/80 backdrop-blur border border-slate-700 rounded-2xl overflow-hidden shadow-2xl">
              
             <div className="relative h-64 md:h-96 w-full group">
                <img src={item.imageUrl} alt={item.title} className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                
                {/* 圖片文字區塊 */}
                <div className="absolute bottom-0 left-0 p-4 md:p-8 w-full bg-gradient-to-t from-slate-900/90 to-transparent">
                    {/* 標題 */}
                    <h1 className="text-2xl md:text-4xl font-bold text-white mb-0 md:mb-2">{item.title}</h1>
                    
                    {/* 小標籤：手機隱藏，電腦顯示 */}
                    <div className="hidden md:flex flex-wrap gap-2">
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
                   className="facility-content prose prose-invert max-w-none 
                              prose-headings:font-bold 
                              prose-h2:border-l-4 prose-h2:border-cyan-500 prose-h2:pl-4
                              "
                 >
                    <div dangerouslySetInnerHTML={{ __html: item.contentHtml }} />
                 </div>

                 <div className="mt-12 pt-10 border-t border-slate-700/50 w-full flex flex-col items-center gap-8">
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