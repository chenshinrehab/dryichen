// src/app/about/clinic/[id]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { facilitiesData, getFacilityById } from '@/data/facilities'
import ShareButtons from '@/components/ShareButtons'

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
    openGraph: {
      title: item.title,
      description: item.description,
      images: [item.imageUrl],
    }
  }
}

export default function FacilityDetailPage({ params }: PageProps) {
  const item = getFacilityById(params.id)
  if (!item) notFound()

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.dryichen.com.tw'
  const currentUrl = `${siteUrl}/about/clinic/${params.id}`

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
    mainEntity: {
        '@type': 'MedicalDevice',
        name: item.title,
        description: item.description,
        image: item.imageUrl,
    }
  }

  return (
    <>
      <JsonLd data={jsonLdDevice} />

      <style dangerouslySetInnerHTML={{__html: `
        /* 重點文字 (strong) - 青色 */
        .facility-content strong {
            color: #22d3ee !important; /* Cyan-400 */
            font-weight: 700;
        }

        /* 超連結 (a) - 桃紅色 */
        .facility-content a {
            color: #ec4899 !important; /* Pink-500 */
            font-weight: 600;
            text-decoration: none;
            border-bottom: 1px dashed #ec4899;
            transition: all 0.2s ease;
        }

        .facility-content a:hover {
            color: #db2777 !important; /* Pink-600 */
            border-bottom-style: solid;
        }

        /* 內容標題樣式 (H3) */
        .facility-content h3 {
            font-size: 1.5rem; /* text-2xl */
            font-weight: 700;
            color: white;
            margin-top: 2.5rem;
            margin-bottom: 1.25rem;
            display: flex;
            align-items: center;
        }
        
        .facility-content h3::before {
            content: '';
            display: inline-block;
            width: 6px;
            height: 24px;
            background-color: #06b6d4; /* Cyan-500 */
            margin-right: 12px;
            border-radius: 2px;
        }
        
        .facility-content h2 {
            font-size: 1.75rem;
            font-weight: 700;
            color: white;
            margin-top: 2.5rem;
            margin-bottom: 1.25rem;
            display: flex;
            align-items: center;
        }
        .facility-content h2::before {
            content: '';
            display: inline-block;
            width: 6px;
            height: 28px;
            background-color: #06b6d4;
            margin-right: 12px;
            border-radius: 2px;
        }

        /* 圖片寬度限制 */
        .facility-content img {
            max-width: 100%;
            height: auto;
            border-radius: 0.75rem;
            margin: 2rem auto;
            display: block;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
            border: 1px solid #475569;
        }

        @media (min-width: 768px) {
            .facility-content img {
                max-width: 85%;
            }
        }
        
        /* 列表樣式 */
        .facility-content ul {
            list-style-type: disc;
            padding-left: 1.5rem;
            margin-bottom: 1.5rem;
            color: #cbd5e1; /* slate-300 */
        }
        .facility-content li {
            margin-bottom: 0.5rem;
        }
        /* 註：移除了原本的 video/iframe CSS，改用下方專屬區塊處理，效果較好 */
      `}} />

      <div className="min-h-screen bg-slate-900 text-slate-300 pt-0 pb-12 md:pt-0 md:pb-16 fade-in">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* 返回按鈕 */}
          <Link href="/about/clinic" className="inline-flex items-center text-cyan-400 mt-0 mb-4 hover:text-cyan-300 transition-colors group">
              <i className="fa-solid fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i>
              返回設備列表
          </Link>

          <div className="bg-slate-800/80 backdrop-blur border border-slate-700 rounded-2xl overflow-hidden shadow-2xl">
              
             {/* Header 圖片區塊 */}
             <div className="relative h-64 md:h-96 w-full group">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                
                <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 tracking-wide shadow-black drop-shadow-md">{item.title}</h1>
                    <div className="flex flex-wrap gap-2">
                        {item.keywords.slice(0, 5).map((kw, i) => (
                            <span key={i} className="text-xs md:text-sm bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-500/30 backdrop-blur-md">
                                #{kw}
                            </span>
                        ))}
                    </div>
                </div>
             </div>

             <div className="p-6 md:p-12">
                 
                 {/* 內文區塊 */}
                 <div className="facility-content text-slate-300 leading-relaxed text-lg mb-10">
                    <div dangerouslySetInnerHTML={{ __html: item.contentHtml }} />
                 </div>

                 {/* ✨ 新增：YouTube 影片區塊 (參考治療方式格式) */}
                 {/* 請確保您的 facilitiesData 資料介面中有 youtubeVideoId 欄位 */}
                 {item.youtubeVideoId && (
                    <div className="mb-14 text-center">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
                            <i className="fa-brands fa-youtube text-red-500 mr-3 text-3xl"></i>
                            設備介紹影片
                        </h3>
                        <div className="w-full md:w-[85%] mx-auto">
                            <div className="relative w-full pb-[56.25%] rounded-xl overflow-hidden shadow-2xl border border-slate-700 group">
                                <iframe 
                                    src={`https://www.youtube.com/embed/${item.youtubeVideoId}`} 
                                    title={`${item.title} 介紹影片`}
                                    className="absolute top-0 left-0 w-full h-full" 
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                 )}

             </div>

             <div className="bg-slate-900/80 p-8 md:p-12 border-t border-slate-700 text-center relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent blur-sm"></div>
                
                <h3 className="text-white font-bold text-2xl mb-3 relative z-10">覺得這篇介紹有幫助嗎？</h3>
                <p className="text-slate-400 mb-8 text-lg relative z-10">歡迎分享給親朋好友，讓更多人了解我們的專業設備。</p>

                <div className="relative z-10 mb-10">
                   <ShareButtons url={currentUrl} title={item.title} />
                </div>

                 <div className="pt-8 border-t border-slate-700/50 w-full flex justify-center">
                     <Link 
                       href="/about/clinic" 
                       className="inline-flex items-center justify-center px-8 py-3.5 text-lg font-bold text-cyan-400 border border-cyan-500/30 rounded-full hover:bg-cyan-500/10 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300 group"
                     >
                           查看更多設備 
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