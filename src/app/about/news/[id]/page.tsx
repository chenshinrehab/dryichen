// src/app/about/news/[id]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image' 
import { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { newsList, getNewsById } from '@/data/news'
import ShareButtons from '@/components/ShareButtons'

// 定義常數，方便未來修改
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.dryichen.com.tw').trim()

interface PageProps { params: { id: string } }

export async function generateStaticParams() {
  return newsList.map((post) => ({ id: post.id }))
}

// 1. 動態 Meta (強化重點：加入精確座標與主題性 SEO)
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getNewsById(params.id)
  if (!post) return { title: '文章不存在' }
  
  const canonicalUrl = `${SITE_URL}/about/news/${params.id}`
   
  return {
    // 修正：確保標題不重複堆疊診所名稱
    title: post.seoTitle ? post.seoTitle : `${post.title} | 新竹宸新復健科`,
    authors: [{ name: '林羿辰醫師', url: SITE_URL }],
    publisher: '宸新復健科診所-林羿辰醫師',
    description: post.seoDescription || post.summary,
    keywords: post.keywords,
    
    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.summary,
      url: canonicalUrl,
      type: 'article',
      siteName: '新竹宸新復健科診所',
      locale: 'zh_TW',
      authors: ['林羿辰醫師'],
       tags: ['復健科', '增生療法', 'PRP', '新竹復健科'],
      images: [
        {
            url: post.coverImage,
            width: 1200,
            height: 630,
            alt: post.title,
        }    ],

    },
    other: {
      'geo.position': '24.783331;121.017094',
      'geo.region': 'TW-Hsinchu', // 新竹區域標記
      'geo.placename': 'Zhubei',
    },

  }
}

export default function NewsDetailPage({ params }: PageProps) {
  const post = getNewsById(params.id)
  if (!post) notFound()

  const currentUrl = `${SITE_URL}/about/news/${params.id}`
  // 自動生成該頁面專屬的 QR Code 網址
  const qrCodeApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(currentUrl)}`
  
  // 分類判斷
  const isAnnouncement = post.category === '門診公告' || post.category === '診所活動';
  // 定義重點強化的醫療專業內容類別
  const isMedicalContent = ['衛教文章', '醫學新知', '診間隨筆'].includes(post.category);

  // ✨ 新增：定義不同類別對應的 Tailwind 顏色 class
const categoryStyles: Record<string, string> = {
  '門診公告': 'bg-pink-500/10 text-pink-400 border-pink-500/30',
  '診所活動': 'bg-pink-500/10 text-pink-400 border-pink-500/30',
  '診間隨筆': 'bg-amber-500/10 text-amber-400 border-amber-500/30', // ✨ 設定為橘/琥珀色
  '衛教文章': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
  '醫學新知': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
};

// ✨ 設定預設顏色（如果分類不在名單內）
const activeCategoryStyle = categoryStyles[post.category] || 'bg-slate-500/10 text-slate-400 border-slate-500/30';

 // 2. Schema (根據類別切換結構，針對指定主題深度強化)
 const jsonLdData = {
  '@context': 'https://schema.org',
  // ✨ 修正 1：使用雙重宣告，確保 MedicalWebPage 也能合法攜帶醫療專業屬性
  '@type': isAnnouncement ? 'NewsArticle' : ['MedicalWebPage', 'MedicalEntity'],
  '@id': `${currentUrl}#webpage`,
  'url': currentUrl,
  [isAnnouncement ? 'headline' : 'name']: post.title,
  'alternativeHeadline': post.seoTitle,
  'image': [post.coverImage || `${SITE_URL}/images/main/a.webp`],
  'description': post.summary,
  
  // ✨ 修正 2：如果外層是 NewsArticle，則支援 articleSection；如果是 WebPage，則維持保留
  'articleSection': post.category,
  'keywords': post.keywords,

  // 時效性：保留原始日期
  'datePublished': '2026-01-25',
  'dateModified':  post.date || '2026-02-25',

  // 1. 醫療專業性標記 (EEAT 強化)
  ...(isMedicalContent ? {
    // 透過雙重宣告 @type，這裡的 medicalSpecialty 現在是合法的
    'medicalSpecialty': [
      { '@type': 'MedicalSpecialty', 'name': 'Physical Medicine and Rehabilitation', 'alternateName': '復健科' },
      { '@type': 'MedicalSpecialty', 'name': 'Sports Medicine', 'alternateName': '運動醫學' }
    ],
    'audience': {
      '@type': 'MedicalAudience',
      'audienceType': 'Patients',
      'geographicArea': {
        '@type': 'AdministrativeArea',
        'name': 'Hsinchu City'
      }
    }
  } : {}),

  // 2. 作者區塊：✨ 修正 3：使用雙重宣告 ['Person', 'Physician']，徹底解決 jobTitle/alumniOf/worksFor 報錯
  'author': { 
    '@type': ['Person', 'Physician'], 
    'name': '林羿辰 醫師',
    'jobTitle': '院長',
    'url': `${SITE_URL}/about/doctors`,
    'image': `${SITE_URL}/images/main/a.webp`,
    // 學歷與隸屬機構 (現在在 Person 類型下完全合法)
    'alumniOf': {
      '@type': 'EducationalOrganization',
      'name': '國立台灣大學醫學系'
    },
    'worksFor': {
      '@type': 'MedicalClinic',
      'name': '宸新復健科診所',
      'url': SITE_URL
    },
    'sameAs': [
      'https://ma.mohw.gov.tw/Accessibility/DOCSearch/DOCBasicData?DOC_SEQ=2bJQOvvE5EX3U6eK7eSvhw%253D%253D',
      'https://www.pmr.org.tw/associator/associator-all.asp?w/',
      'https://www.toa1997.org.tw/orthopedist/?n=%E6%9E%97%E7%BE%BF%E8%BE%B0&h=&c=&a='
    ],
    'hasCredential': [
      {
        '@type': 'EducationalOccupationalCredential',
        'name': '醫事人員執業資格',
        'credentialCategory': '醫師證書',
        'url': 'https://ma.mohw.gov.tw/Accessibility/DOCSearch/DOCBasicData?DOC_SEQ=2bJQOvvE5EX3U6eK7eSvhw%253D%253D',
        'recognizedBy': { '@type': 'Organization', 'name': '中華民國衛生福利部' }
      },
      {
        '@type': 'EducationalOccupationalCredential',
        'name': '復健科專科醫師資格',
        'credentialCategory': '復健科專科醫師證書',
        'url': 'https://www.pmr.org.tw/associator/associator-all.asp?w/',
        'recognizedBy': { '@type': 'Organization', 'name': '台灣復健醫學會' }
      },
      {
        '@type': 'EducationalOccupationalCredential',
        'name': '骨質疏鬆症學會專科醫師資格',
        'credentialCategory': '骨質疏鬆症學會專科醫師證書',
        'url': 'https://www.toa1997.org.tw/orthopedist/?n=%E6%9E%97%E7%BE%BF%E8%BE%B0&h=&c=&a=',
        'recognizedBy': { '@type': 'Organization', 'name': '中華民國骨質疏鬆症學會' }
      }
    ],
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '光復路一段371號B1',
      'addressLocality': '新竹市',
      'addressRegion': '東區',
      'postalCode': '300',
      'addressCountry': 'TW'
    }
  },

  // 3. 發佈者
  'publisher': { 
    '@type': 'MedicalClinic', 
    'name': '宸新復健科診所',
    'url': SITE_URL,
    'telephone': '+886-3-5647999',
    'logo': {
      '@type': 'ImageObject',
      'url': `${SITE_URL}/logo.webp`
    },
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '光復路一段371號B1',
      'addressLocality': '新竹市',
      'addressRegion': '東區',
      'postalCode': '300',
      'addressCountry': 'TW'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '24.7833314', 
      'longitude': '121.0170937'
    },
    'areaServed': [
      { "@type": "City", "name": "新竹市" },
      { "@type": "City", "name": "竹北市" },
      { "@type": "Place", "name": "新竹科學園區" },
      { "@type": "AdministrativeArea", "name": "新竹縣" }
    ]
  },

  // 4. 審閱資訊：✨ 修正 4：同樣將 reviewedBy 改為雙重宣告 ['Person', 'Physician']
  ...(isAnnouncement ? {} : {
    'lastReviewed': post.date,
    'reviewedBy': {
      '@type': ['Person', 'Physician'],
      'name': '林羿辰 醫師',
      'url': `${SITE_URL}/about/doctors`,
      'medicalSpecialty': [
        { '@type': 'MedicalSpecialty', 'name': 'Physical Medicine and Rehabilitation' }
      ],
      'sameAs': [
        'https://ma.mohw.gov.tw/Accessibility/DOCSearch/DOCBasicData?DOC_SEQ=2bJQOvvE5EX3U6eK7eSvhw%253D%253D',
        'https://www.pmr.org.tw/associator/associator-all.asp?w/',
        'https://www.toa1997.org.tw/orthopedist/?n=%E6%9E%97%E7%BE%BF%E8%BE%B0&h=&c=&a='
      ],
      'hasCredential': [
        {
          '@type': 'EducationalOccupationalCredential',
          'name': '醫事人員執業資格',
          'credentialCategory': '醫師證書',
          'url': 'https://ma.mohw.gov.tw/Accessibility/DOCSearch/DOCBasicData?DOC_SEQ=2bJQOvvE5EX3U6eK7eSvhw%253D%253D',
          'recognizedBy': { '@type': 'Organization', 'name': '中華民國衛生福利部' }
        },
        {
          '@type': 'EducationalOccupationalCredential',
          'name': '復健科專科醫師資格',
          'credentialCategory': '復健科專科醫師證書',
          'url': 'https://www.pmr.org.tw/associator/associator-all.asp?w/',
          'recognizedBy': { '@type': 'Organization', 'name': '台灣復健醫學會' }
        },
        {
          '@type': 'EducationalOccupationalCredential',
          'name': '骨質疏鬆症學會專科醫師資格',
          'credentialCategory': '骨質疏鬆症學會專科醫師證書',
          'url': 'https://www.toa1997.org.tw/orthopedist/?n=%E6%9E%97%E7%BE%BF%E8%BE%B0&h=&c=&a=',
          'recognizedBy': { '@type': 'Organization', 'name': '中華民國骨質疏鬆症學會' }
        }
      ]
    }
  })
};
  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '首頁', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: '最新內容', item: `${SITE_URL}/about/news` },
      { '@type': 'ListItem', position: 3, name: post.title, item: currentUrl },
    ],
  }

  return (
    <>
      <JsonLd data={jsonLdData} />
      <JsonLd data={jsonLdBreadcrumb} />

      <style dangerouslySetInnerHTML={{__html: `
        .article-content strong {
            color: #22d3ee !important;
            font-weight: 700;
        }

        /* -----------------------------------------------------------
            ✨ 關鍵修正區塊：處理連結與排除參考文獻
            ----------------------------------------------------------- */
            
        /* 1. 先定義基礎樣式，但使用 :not 排除掉 sup(上標) 與帶有特定偏移 style 的連結 */
        .article-content a:not(sup a):not([style*="text-underline-offset"]) {
            color: #ec4899 !important;
            font-weight: 600;
            text-decoration: none;
            border-bottom: 1px dashed #ec4899;
            transition: all 0.2s ease;
            display: inline-flex;
            align-items: center;
            gap: 2px;
        }

        /* 2. 只給「非參考文獻」的連結加上 ↗ 符號 */
        .article-content a:not(sup a):not([style*="text-underline-offset"])::after {
            content: "↗";
            font-size: 0.85em;
            font-weight: bold;
            margin-bottom: 2px;
        }

        /* 3. Hover 效果也只針對一般連結 */
        .article-content a:not(sup a):not([style*="text-underline-offset"]):hover {
            color: #db2777 !important;
            border-bottom-style: solid;
            background-color: rgba(236, 72, 153, 0.15);
            padding: 0 4px;
            margin: 0 -4px;
            border-radius: 4px;
        }

        /* 4. ✨ 徹底清除參考文獻中的粉紅橫線與箭頭 (包含 [2] 等 sup a) */
        .article-content sup a,
        .article-content ol a,
        .article-content a[style*="text-underline-offset"],
        .references-content a {
            border-bottom: none !important; /* 移除橫線 */
            display: inline !important;    /* 防止 flex 產生的對齊問題 */
            color: #ec4899 !important;      /* 回歸藍色/粉紅視需求 */
            background: transparent !important;
            padding: 0 !important;
            margin: 0 !important;
        }

        /* 5. 確保參考文獻連結後絕對不會出現 ↗ 符號 */
        .article-content sup a::after,
        .article-content ol a::after,
        .article-content a[style*="text-underline-offset"]::after,
        .references-content a::after {
            content: "" !important;
            display: none !important;
        }

        /* ----------------------------------------------------------- */

        .article-content img {
            max-width: 100%;
            height: auto;
            border-radius: 0.75rem;
            margin: 2rem auto;
            display: block;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.15);
            border: 1px solid #475569;
        }
        @media (min-width: 768px) {
            .article-content img {
                max-width: 85%;
            }
        }
        .article-content h2 {
            font-size: 1.5rem;
            font-weight: 700;
            color: white;
            margin-top: 2.5rem;
            margin-bottom: 1.5rem;
            border-left: 4px solid #06b6d4;
            padding-left: 1rem;
        }
        .article-content h3 {
            font-size: 1.25rem;
            font-weight: 600;
            color: #67e8f9;
            margin-top: 2rem;
            margin-bottom: 1rem;
        }
        .article-content ul {
            list-style-type: disc;
            padding-left: 1.5rem;
            margin-bottom: 1.5rem;
        }
        .article-content li {
            margin-bottom: 0.5rem;
        }
      `}} />

      <div className="min-h-screen flex flex-col bg-slate-900 text-slate-300">
        <main className="flex-grow pt-0 -mt-10 md:-mt-12 pb-12 fade-in relative z-10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              
            <Link href="/about/news" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-6 transition-colors group">
                <i className="fa-solid fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i> 返回列表
            </Link>

            <article className="bg-slate-800/80 backdrop-blur border border-slate-700 rounded-2xl overflow-hidden shadow-2xl">
                
              <div className="p-4 md:p-10">
              <header className="mb-10 border-l-4 border-cyan-500 pl-4 bg-gradient-to-r from-slate-900/80 to-transparent py-6 rounded-r-xl flex flex-col md:flex-row md:items-center gap-6">
  
  {/* 加入的 QR Code 區塊 */}
  <div className="hidden md:block bg-white p-2 rounded-lg shrink-0 group relative shadow-lg ring-2 ring-slate-700">
    <img className="w-24 h-24 object-contain" src={qrCodeApiUrl} alt={`掃描閱讀 ${post.title}`} />
    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-max bg-slate-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-slate-600">
      掃描帶走文章
    </div>
  </div>

  <div className="flex-grow w-full">
    <h1 className="text-3xl md:text-5xl font-bold font-sans text-white mb-4 tracking-wide leading-tight md:leading-[1.2]">
      {post.title}
    </h1>
      
    <div className="flex flex-wrap items-center justify-between gap-3 w-full">
      
<div className="flex flex-wrap items-center gap-3">
  <span className={`px-3 py-1 rounded-full text-sm font-bold border ${activeCategoryStyle}`}>
    {post.category}
  </span>
        
        <span className="text-slate-400 text-sm flex items-center">
          撰文者：
          <Link 
            href="/about/doctors" 
            className="text-slate-300 hover:text-cyan-400 underline underline-offset-4 decoration-slate-600 transition-colors"
          >
            林羿辰醫師
          </Link>
        </span>
      </div>

      <span className="text-slate-300 text-sm flex items-center bg-slate-700/50 px-3 py-1 rounded-full border border-slate-600">
        <i className="fa-regular fa-calendar mr-2"></i>最後更新日期：{post.date}
      </span>

    </div>
  </div>
</header>

                  <div className="article-content text-slate-300 leading-relaxed text-lg pb-6">
                      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
                  </div>

              </div>

              <footer className="mt-0">
                <div className="mt-0 mb-10 px-4 md:px-10">
                    <div className="bg-slate-800/40 backdrop-blur border border-slate-700 rounded-2xl p-6 md:p-8 shadow-lg relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                      
                      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 relative z-10">
                        <div className="flex-grow text-center md:text-left">
                          <div className="mb-2">
                          <h3 className="text-xl font-bold text-white flex flex-col md:flex-row items-center gap-2">
                            本文由 
                            <Link 
                              href="/about/doctors"
                              className="text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer underline underline-offset-4 decoration-cyan-900/50 hover:decoration-cyan-400"
                            >
                              林羿辰醫師
                            </Link> 
                            撰寫與醫學審閱
                            <span className="hidden md:inline-block text-[10px] bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded-full border border-cyan-500/30 font-normal uppercase tracking-wider">
                              Verified Expert
                            </span>
                          </h3>
                            <p className="text-sm text-slate-400 mt-1 font-medium">宸新復健科診所院長 / 復健科專科醫師</p>
                          </div>
                          
                          <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
                            現任宸新復健科診所院長。畢業於國立台灣大學醫學系，擁有復健科、骨質疏鬆雙專科醫師資歷，專精於精準超音波導引注射治療、增生療法與各類運動傷害。林醫師具備豐富臨床經驗，致力於將醫學實證應用於病患康復。
                          </p>

                          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-5 border-t border-slate-700/50">
                            <Link 
                              href="/about/doctors" 
                              className="text-cyan-400 hover:text-cyan-300 text-sm font-bold flex items-center group transition-colors cursor-pointer"
                            >
                              <i className="fa-solid fa-id-card-clip mr-2 text-lg"></i>
                              <span className="border-b border-cyan-500/30 group-hover:border-cyan-300">👉 查看更多醫師資歷、證照認證與學術論文</span>
                              <i className="fa-solid fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                            </Link>
                            
                            <div className="flex flex-col items-end gap-1 text-[10px] md:text-xs text-slate-500">
                              <div className="flex items-center gap-3">
                                <span className="flex items-center"><i className="fa-solid fa-check-double mr-1 text-cyan-500/70"></i> 專家審閱完成</span>
                                <span className="flex items-center"><i className="fa-solid fa-database mr-1 text-cyan-500/70"></i> 來源：醫學實證與專科臨床</span>
                              </div>
                              <div className="text-gray-500">
                                最後更新日期：
                                {post.date ? (
                                  <time dateTime={post.date} itemProp="dateModified">
                                    {post.date}
                                  </time>
                                ) : (
                                  "2026-02-22"
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>

                <div className="bg-slate-900/80 p-8 md:p-12 border-t border-slate-700 text-center relative overflow-hidden">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent blur-sm"></div>
                    
                  <h2 className="text-white font-bold text-2xl mb-3 relative z-10">覺得這篇文章有幫助嗎？</h2>
                  <p className="text-slate-400 mb-8 text-lg relative z-10">歡迎分享給親朋好友，讓更多人獲得正確的復健知識。</p>
                    
                  <div className="relative z-10">
                      <ShareButtons url={currentUrl} title={post.title} />
                  </div>

                  <div className="mt-12 pt-8 border-t border-slate-700/50 relative z-10">
                      <Link 
                        href="/about/news" 
                        className="inline-flex items-center justify-center px-8 py-3.5 text-lg font-bold text-cyan-400 border border-cyan-500/30 rounded-full hover:bg-cyan-500/10 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300 group"
                      >
                            看更多衛教文章 
                            <i className="fa-solid fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform"></i>
                      </Link>
                  </div>
                </div>
              </footer>

              {/* ✨ 更新：將參考文獻移回文章最底部 (footer 之後)，移除框中框，並延續上方的背景色與滿版 padding */}
              {post.referencesHtml && (
                <section className="bg-slate-900/80 px-4 md:px-12 pb-12 text-left">
                  <div className="border-t border-slate-700/50 pt-8">
                    <div className="flex items-center mb-4 pb-3">
                      <i className="fa-solid fa-book-bookmark text-cyan-400 text-lg mr-2"></i>
                      <span className="text-slate-300 text-sm font-bold">參考文獻</span>
                    </div>
                    
                    <div 
                      className="references-content w-full text-slate-400 text-sm md:text-base leading-relaxed break-all"
                      dangerouslySetInnerHTML={{ __html: post.referencesHtml }} 
                    />
                    
                    <div className="mt-5 pt-3 border-t border-slate-700/30 flex items-center gap-2">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-500/50 animate-pulse"></span>
                      <p className="text-[9px] text-slate-500 uppercase tracking-tighter font-medium leading-tight">
                        Evidence-Based Medicine Research & Clinical Guidelines
                      </p>
                    </div>
                  </div>
                </section>
              )}

            </article>
          </div>
        </main>
      </div>
    </>
  )
}