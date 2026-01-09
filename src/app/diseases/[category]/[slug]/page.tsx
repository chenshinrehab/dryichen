import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import JsonLd from '@/components/JsonLd'
import OptimizedImage from '@/components/OptimizedImage'
import { getDiseaseBySlug, getCategoryBySlug, generateAllDiseaseParams } from '@/data/diseases'
import { renderContent } from '@/utils/content'

interface PageProps {
  params: {
    category: string
    slug: string
  }
}

// 定義共用的 Base URL 邏輯
const getBaseUrl = () => process.env.SITE_URL || 'https://chenshinrehab.github.io/dr-lin-rehab'

/**
 * 生成靜態路徑參數
 */
export async function generateStaticParams() {
  return generateAllDiseaseParams()
}

/**
 * 生成頁面元數據（SEO 核心優化區塊）
 */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const disease = getDiseaseBySlug(params.category, params.slug)
  const category = getCategoryBySlug(params.category)
  
  if (!disease || !category) {
    return { title: '疾病衛教 not found' }
  }

  const baseUrl = getBaseUrl()
  const pageUrl = `${baseUrl}/diseases/${params.category}/${params.slug}`
  const imageUrl = disease.imageUrl ? `${baseUrl}${disease.imageUrl}` : undefined

  return {
    title: `${disease.title} - ${category.title}復健衛教 | 宸新復健科診所`, // 優化標題：加入類別與診所名
    description: disease.seoDescription || disease.description, // 優先使用專門寫給 SEO 的描述
    // [SEO優化] 明確告訴爬蟲索引規則
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    // [SEO優化] Canonical Tag 避免重複內容
    alternates: {
      canonical: pageUrl,
    },
    keywords: [
      disease.title, 
      category.title, 
      '復健科', 
      '物理治療', 
      '新竹復健', 
      ...(disease.symptoms || []).slice(0, 3), // 將前幾個症狀加入關鍵字
      ...(disease.seoKeywords || [])
    ].join(', '),
    openGraph: {
      title: disease.title,
      description: disease.description,
      url: pageUrl,
      images: imageUrl ? [{ 
        url: imageUrl, 
        alt: `${disease.title}示意圖`,
        width: 1200,
        height: 630
      }] : [],
      type: 'article',
      locale: 'zh_TW',
      siteName: '宸新復健科診所',
    },
    twitter: {
      card: 'summary_large_image',
      title: disease.title,
      description: disease.description,
      images: imageUrl ? [imageUrl] : [],
    },
  }
}

export default function DiseaseDetailPage({ params }: PageProps) {
  const disease = getDiseaseBySlug(params.category, params.slug)
  const category = getCategoryBySlug(params.category)

  if (!disease || !category) {
    notFound()
  }

  const baseUrl = getBaseUrl()
  const pageUrl = `${baseUrl}/diseases/${params.category}/${params.slug}`
  const imageUrl = disease.imageUrl ? `${baseUrl}${disease.imageUrl}` : undefined

  // [SEO優化] 1. 醫療狀況 Schema
  const medicalConditionSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalCondition',
    name: disease.title,
    alternateName: disease.seoKeywords?.join(', '), // 別名
    description: disease.description,
    image: imageUrl,
    associatedAnatomy: {
      '@type': 'AnatomicalStructure',
      name: category.title // 例如：肩膀、膝蓋
    },
    possibleTreatment: disease.treatments?.map(treatment => ({
      '@type': 'MedicalTherapy',
      name: treatment,
    })),
    signOrSymptom: disease.symptoms?.map(symptom => ({
      '@type': 'MedicalSignOrSymptom',
      name: symptom,
    })),
    secondaryPrevention: '物理治療, 運動治療, 增生療法' // 一般復健科的預防措施
  }

  // [SEO優化] 2. 麵包屑 Schema (Google 搜尋結果會顯示路徑)
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: '首頁',
        item: baseUrl
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '疾病衛教',
        item: `${baseUrl}/diseases`
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: category.title,
        item: `${baseUrl}/diseases/${category.slug}`
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: disease.title,
        item: pageUrl
      }
    ]
  }

  return (
    <>
      <JsonLd data={medicalConditionSchema} />
      <JsonLd data={breadcrumbSchema} />

      <div className="min-h-screen flex flex-col">
        <Breadcrumbs items={[
          { label: '首頁', href: '/' },
          { label: '疾病衛教', href: '/diseases' },
          { label: category.title, href: `/diseases/${category.slug}` },
          { label: disease.title },
        ]} />

        <main className="flex-grow py-12">
          {/* 使用 article 標籤包裹主要內容，增強語意 */}
          <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header 區塊 */}
            <header className="mb-8 text-center md:text-left">
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mb-3">
                {category.title}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 leading-tight">
                {disease.title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
                {disease.description}
              </p>
            </header>

            {disease.imageUrl && (
              <figure className="mb-10 rounded-xl overflow-hidden shadow-lg border border-gray-100">
                <OptimizedImage
                  src={disease.imageUrl}
                  alt={`宸新復健科-${disease.title}症狀位置示意圖`} // 優化 alt 文字
                  width={1200}
                  height={600}
                  className="w-full h-auto object-cover transform hover:scale-[1.02] transition-transform duration-700"
                  priority={true}
                />
                <figcaption className="sr-only">{disease.title} 解剖位置示意圖</figcaption>
              </figure>
            )}
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* 左側主要內容佔 2/3 */}
              <div className="md:col-span-2">
                {disease.content && (
                  <section className="prose prose-lg prose-blue max-w-none mb-10 text-gray-700">
                    <div 
                      dangerouslySetInnerHTML={{ __html: renderContent(disease.content) }}
                    />
                  </section>
                )}

                {/* 症狀區塊 */}
                {disease.symptoms && disease.symptoms.length > 0 && (
                  <section className="bg-red-50 rounded-xl p-6 mb-8 border border-red-100">
                    <h2 className="text-2xl font-bold mb-4 flex items-center text-red-800">
                      <span className="mr-2">⚠️</span> 常見症狀
                    </h2>
                    <ul className="space-y-3">
                      {disease.symptoms.map((symptom, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-red-500 mr-3 mt-1 font-bold">●</span>
                          <span className="text-gray-800 font-medium">{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}
              </div>

              {/* 右側治療建議與 CTA 佔 1/3 (Desktop) */}
              <aside className="md:col-span-1 space-y-6">
                 {/* 治療建議卡片 */}
                {disease.treatments && disease.treatments.length > 0 && (
                  <section className="bg-green-50 rounded-xl p-6 border border-green-100 sticky top-24">
                    <h2 className="text-xl font-bold mb-4 flex items-center text-green-800">
                      <span className="mr-2">⚕️</span> 建議治療方式
                    </h2>
                    <ul className="space-y-3 mb-6">
                      {disease.treatments.map((treatment, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                          <span className="text-gray-800">{treatment}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* 內部連結 CTA */}
                    <div className="border-t border-green-200 pt-4">
                      <p className="text-sm text-green-800 mb-3">想了解更多治療細節？</p>
                      <Link 
                        href="/treatments" 
                        className="block w-full text-center bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors font-semibold text-sm"
                      >
                        查看治療項目總覽
                      </Link>
                    </div>
                  </section>
                )}

                {/* 預約 CTA */}
                <div className="bg-blue-600 rounded-xl p-6 text-white text-center shadow-lg">
                  <h3 className="font-bold text-lg mb-2">受 {disease.title} 困擾？</h3>
                  <p className="text-blue-100 text-sm mb-4">由專業醫師與治療師團隊為您評估。</p>
                  <Link 
                    href="/contact" 
                    className="inline-block w-full bg-white text-blue-600 font-bold py-2 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    立即預約諮詢
                  </Link>
                </div>
              </aside>
            </div>

          </article>
        </main>
        <Footer />
      </div>
    </>
  )
}