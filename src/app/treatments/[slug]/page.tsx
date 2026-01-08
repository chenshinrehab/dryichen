import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import JsonLd from '@/components/JsonLd'
import OptimizedImage from '@/components/OptimizedImage'
import { getTreatmentBySlug, treatments } from '@/data/treatments'

interface PageProps {
  params: {
    slug: string
  }
}

// 定義共用的 Base URL 邏輯，避免重複
const getBaseUrl = () => process.env.SITE_URL || 'https://chenshinrehab.github.io/dr-lin-rehab'

export async function generateStaticParams() {
  return treatments.map((treatment) => ({
    slug: treatment.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const treatment = getTreatmentBySlug(params.slug)
  
  if (!treatment) {
    return { title: '治療方式' }
  }

  const baseUrl = getBaseUrl()
  const pageUrl = `${baseUrl}/treatments/${params.slug}`
  const imageUrl = treatment.imageUrl ? `${baseUrl}${treatment.imageUrl}` : undefined

  return {
    title: `${treatment.title} - 專業復健治療 | 宸新復健科診所`, // 優化標題，加入「專業」字眼
    description: treatment.description,
    // 加入 canonical 標籤，這對 SEO 至關重要，防止重複內容
    alternates: {
      canonical: pageUrl,
    },
    keywords: [
      '復健科', 
      '新竹復健', // 加入地區關鍵字 (Local SEO)
      treatment.title, 
      ...(treatment.applicableConditions || []), // 將適用症狀也加入關鍵字
      '物理治療'
    ].slice(0, 10), // 限制數量避免堆疊
    openGraph: {
      title: treatment.title,
      description: treatment.description,
      url: pageUrl,
      type: 'article',
      locale: 'zh_TW',
      siteName: '宸新復健科診所',
      images: imageUrl ? [{ url: imageUrl, alt: treatment.title }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: treatment.title,
      description: treatment.description,
      images: imageUrl ? [imageUrl] : [],
    },
  }
}

export default function TreatmentDetailPage({ params }: PageProps) {
  const treatment = getTreatmentBySlug(params.slug)

  if (!treatment) {
    notFound()
  }

  const baseUrl = getBaseUrl()
  const imageUrl = treatment.imageUrl ? `${baseUrl}${treatment.imageUrl}` : undefined

  // 強化版 Schema.org 資料
  const medicalProcedureSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure', // 或 'TherapeuticProcedure'
    name: treatment.title,
    description: treatment.description,
    ...(imageUrl && { image: imageUrl }),
    procedureType: {
      '@type': 'MedicalProcedureType',
      name: 'Non-surgical', // 大部分復健是非手術，可依情況調整
    },
    // 新增：提供者資訊 (強化 Local SEO)
    provider: {
      '@type': 'MedicalOrganization',
      name: '宸新復健科診所',
      url: baseUrl,
      address: {
        '@type': 'PostalAddress',
        addressLocality: '新竹市', // 請填寫實際行政區
        addressRegion: '新竹市',
        addressCountry: 'TW'
      }
    },
    // 新增：適應症
    indication: treatment.applicableConditions?.map(condition => ({
      '@type': 'MedicalCondition',
      name: condition
    }))
  }

  return (
    <>
      <JsonLd data={medicalProcedureSchema} />
      <div className="min-h-screen flex flex-col">
        <Breadcrumbs items={[
          { label: '首頁', href: '/' },
          { label: '治療方式', href: '/treatments' },
          { label: treatment.title },
        ]} />
        
        <main className="flex-grow py-12">
          {/* 使用 semantic HTML article 標籤包裹主要內容 */}
          <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* 標題區塊 */}
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                {treatment.title}
              </h1>
              <p className="text-xl text-gray-600 border-l-4 border-blue-500 pl-4 italic">
                {treatment.description}
              </p>
            </header>

            {treatment.imageUrl && (
              <div className="mb-10 rounded-xl overflow-hidden shadow-lg border border-gray-100">
                <OptimizedImage
                  src={treatment.imageUrl}
                  alt={`宸新復健科-${treatment.title}治療示意圖`} // Alt文字包含品牌名
                  width={1200}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority={true}
                />
              </div>
            )}
            
            {/* 特色區塊 - 視覺化強調 */}
            {treatment.features && treatment.features.length > 0 && (
              <section className="bg-blue-50 rounded-xl p-8 mb-10 transform hover:scale-[1.01] transition-transform duration-300">
                <h2 className="text-2xl font-bold mb-6 text-blue-800 flex items-center">
                  <span className="mr-2">✨</span> 治療特色
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {treatment.features.map((feature, index) => (
                    <div key={index} className="flex items-start bg-white p-3 rounded-lg shadow-sm">
                      <span className="text-blue-600 mr-2 font-bold">✓</span>
                      <span className="text-gray-800">{feature}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}
            
            {/* 主要內容 */}
            {treatment.content && (
              <section className="prose prose-lg prose-blue max-w-none mb-10 text-gray-700">
                <div dangerouslySetInnerHTML={{ __html: treatment.content }} />
                {/* 註：如果 content 是純文字，請保留原本的 p 標籤寫法。如果是 HTML 字串則用 dangerouslySetInnerHTML */}
              </section>
            )}
            
            {/* 適用症狀 - 使用 Tag 樣式增強可讀性 */}
            {treatment.applicableConditions && treatment.applicableConditions.length > 0 && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  適用症狀
                </h2>
                <div className="flex flex-wrap gap-3">
                  {treatment.applicableConditions.map((condition, index) => (
                    <Link 
                      href={`/diseases?q=${condition}`} // 如果有搜尋功能，連過去更好
                      key={index} 
                      className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors cursor-default"
                    >
                      {condition}
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Call to Action (CTA) - 增加互動與轉換 */}
            <div className="mt-12 border-t pt-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">需要專業的{treatment.title}諮詢？</h3>
              <p className="mb-6 text-gray-600">我們的醫療團隊為您量身打造復健計畫</p>
              <Link 
                href="/contact" 
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                立即預約諮詢
              </Link>
            </div>

          </article>
        </main>
        <Footer />
      </div>
    </>
  )
}