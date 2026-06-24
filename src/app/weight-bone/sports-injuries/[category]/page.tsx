// src/app/weight-bone/sports-injuries/[category]/page.tsx
import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { sportsInjuriesData } from '@/data/sportsInjuries'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

// ✨ 核心修正：將 false 改為 true。允許 Next.js 動態處理 URL 編碼的合法路徑，徹底根治集體 404 誤殺問題
export const dynamicParams = true;

// 生成常用靜態路徑，讓 Vercel 預先編譯絕大多數分類網頁
export async function generateStaticParams() {
  return sportsInjuriesData.map((c) => ({
    category: c.category,
  }))
}

interface PageProps {
  params: Promise<{ category: string }>
}

// 1. 動態生成 Metadata，強化 SEO/GEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params
  
  // 💡 安全解碼機制：防止中文路徑因 URL 編碼（%E...）導致 find 找不到資料
  const decodedCategory = decodeURIComponent(category)
  const categoryData = sportsInjuriesData.find(c => c.category === decodedCategory || c.category === category)
  if (!categoryData) return {}

  const SITE_URL = 'https://www.dryichen.com.tw'
  const title = `${categoryData.title}復健與預防 - 專業運動醫學診斷 | 新竹宸新復健科`
  const description = `新竹宸新復健科針對${categoryData.title}提供專業傷害 analyses。包含${categoryData.injuries.slice(0, 3).map(i => i.title).join('、')}的治療方案，由運動醫學專家林羿辰醫師指導。`

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/weight-bone/sports-injuries/${category}`,
    },
    openGraph: {
      title,
      description,
      type: 'article',
    },
    other: {
      'geo.region': 'TW-HCH',
      'geo.placename': '新竹市',
    }
  }
}

export default async function SportsCategoryPage({ params }: PageProps) {
  const { category } = await params
  
  // 💡 安全解碼機制：確保頁面渲染時中文分類比對正常
  const decodedCategory = decodeURIComponent(category)
  const categoryData = sportsInjuriesData.find(c => c.category === decodedCategory || c.category === category)
  const SITE_URL = 'https://www.dryichen.com.tw'

  if (!categoryData) {
    notFound()
  }

  // 2. 構建 Schema.org 資料
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', position: 1, name: '首頁', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: '減重與骨齡門診', item: `${SITE_URL}/weight-bone` },
          { '@type': 'ListItem', position: 3, name: categoryData.title, item: `${SITE_URL}/weight-bone/sports-injuries/${category}` }
        ]
      },
      {
        '@type': 'CollectionPage',
        '@id': `${SITE_URL}/weight-bone/sports-injuries/${category}#webpage`,
        'name': `${categoryData.title}常見運動傷害導覽`,
        'description': `針對${categoryData.title}常見的臨床傷害如${categoryData.injuries.map(i => i.title).join('、')}，提供專業復健科醫師的診斷與治療建議。`,
        'mainEntity': {
          '@type': 'ItemList',
          'numberOfItems': categoryData.injuries.length,
          'itemListElement': categoryData.injuries.map((injury, index) => ({
            '@type': 'ListItem',
            'position': index + 1,
            'name': injury.title,
            'url': `${SITE_URL}/weight-bone/sports-injuries/${category}/${injury.slug}`
          }))
        },
        'author': {
          '@type': 'Physician',
          'name': '林羿辰 醫師',
          'url': `${SITE_URL}/about/doctors`
        }
      }
    ]
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-slate-300">
      {/* 注入 JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex-grow pt-0 -mt-10 md:-mt-12 pb-12 fade-in relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* 返回上一頁 */}
          <Link
            href="/weight-bone"
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
          >
            <FaArrowLeft className="mr-2" /> 返回特色門診首頁
          </Link>

          {/* 分類標題 */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">
              {categoryData.title} <span className="text-cyan-500 text-2xl ml-2"></span>
            </h1>
          </div>

          {/* 具體傷害項目列表 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categoryData.injuries.map((injury) => (
              <Link
                key={injury.slug}
                href={`/weight-bone/sports-injuries/${category}/${injury.slug}`}
                prefetch={false}
                className="group bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl overflow-hidden hover:bg-slate-800 hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="h-48 w-full relative overflow-hidden bg-slate-700">
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-slate-900/80 to-transparent z-10"></div>
                  
                  <img
                    src={injury.image}
                    alt={injury.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-100"
                    loading="lazy"
                  />
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 flex items-center transition-colors">
                    {injury.title}
                    <FaArrowRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all ml-2 text-sm text-cyan-500" />
                  </h2>
                  <p className="text-slate-300 mb-6 flex-grow line-clamp-2">
                    {injury.description}
                  </p>
                  <span className="text-cyan-500 text-sm font-semibold flex items-center">
                    深入了解治療方案 <FaArrowRight className="ml-1 text-xs" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}