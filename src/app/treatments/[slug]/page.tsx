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

// 定義共用的 Base URL 邏輯
const getBaseUrl = () => process.env.SITE_URL || 'https://chenshinrehab.github.io/dr-lin-rehab'

export async function generateStaticParams() {
  return treatments.map((treatment) => ({
    slug: treatment.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const treatment = getTreatmentBySlug(params.slug)
  
  if (!treatment) {
    return { title: '治療方式 not found' }
  }

  const baseUrl = getBaseUrl()
  const pageUrl = `${baseUrl}/treatments/${params.slug}`
  const imageUrl = treatment.imageUrl ? `${baseUrl}${treatment.imageUrl}` : undefined

  return {
    title: `${treatment.title} - 專業復健治療 | 宸新復健科診所`,
    description: treatment.description,
    // [SEO優化] 明確告訴爬蟲可以索引此頁面
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: pageUrl,
    },
    keywords: [
      '復健科', 
      '新竹復健', 
      treatment.title, 
      ...(treatment.applicableConditions || []),
      '物理治療',
      '運動治療',
      '非手術治療'
    ].slice(0, 10),
    openGraph: {
      title: treatment.title,
      description: treatment.description,
      url: pageUrl,
      type: 'article',
      locale: 'zh_TW',
      siteName: '宸新復健科診所',
      images: imageUrl ? [{ 
        url: imageUrl, 
        alt: treatment.title,
        width: 1200, // [SEO優化] 提供明確尺寸有助於社群預覽生成
        height: 630 
      }] : [],
      // [SEO優化] 加入發布與修改時間（若資料源有這些欄位）
      // publishedTime: treatment.publishedDate,
      // modifiedTime: treatment.updatedDate,
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
  const pageUrl = `${baseUrl}/treatments/${params.slug}`
  const imageUrl = treatment.imageUrl ? `${baseUrl}${treatment.imageUrl}` : undefined

  // [SEO優化] 1. 醫療程序 Schema
  const medicalProcedureSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: treatment.title,
    description: treatment.description,
    image: imageUrl,
    procedureType: {
      '@type': 'MedicalProcedureType',
      name: 'Non-surgical',
    },
    status: 'http://schema.org/Active', // 表示此治療目前有提供
    provider: {
      '@type': 'MedicalOrganization',
      name: '宸新復健科診所',
      url: baseUrl,
      logo: `${baseUrl}/logo.png`, // [建議] 若有 logo 圖檔請補上
      address: {
        '@type': 'PostalAddress',
        streetAddress: '光復路一段371號B1', // 補上詳細地址
        addressLocality: '東區',
        addressRegion: '新竹市',
        postalCode: '300',
        addressCountry: 'TW'
      },
      telephone: '+886-3-564-7999' // 補上電話
    },
    indication: treatment.applicableConditions?.map(condition => ({
      '@type': 'MedicalCondition',
      name: condition
    }))
  }

  // [SEO優化] 2. Breadcrumb (麵包屑) Schema - Google 非常重視這個
  // 這會讓搜尋結果顯示： 首頁 > 治療方式 > 增生療法
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
        name: '治療方式',
        item: `${baseUrl}/treatments`
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: treatment.title,
        item: pageUrl
      }
    ]
  }

  return (
    <>
      {/* 放入多個 JsonLd */}
      <JsonLd data={medicalProcedureSchema} />
      <JsonLd data={breadcrumbSchema} />

      <div className="min-h-screen flex flex-col">
        {/* Breadcrumbs 元件 (視覺用) */}
        <Breadcrumbs items={[
          { label: '首頁', href: '/' },
          { label: '治療方式', href: '/treatments' },
          { label: treatment.title },
        ]} />
        
        <main className="flex-grow py-12">
          <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 leading-tight">
                {treatment.title}
              </h1>
              {/* [SEO優化] 使用 header 標籤包裹 meta 資訊，增加語意 */}
              <div className="flex flex-wrap gap-2 mb-4">
                 {/* 可以在這裡放最後更新時間，增加信任度 */}
                 {/* <time className="text-sm text-gray-500">更新於：2024年1月</time> */}
              </div>
              <p className="text-xl text-gray-600 border-l-4 border-blue-500 pl-4 italic bg-gray-50 py-2 rounded-r">
                {treatment.description}
              </p>
            </header>

            {treatment.imageUrl && (
              <figure className="mb-10 rounded-xl overflow-hidden shadow-lg border border-gray-100">
                <OptimizedImage
                  src={treatment.imageUrl}
                  alt={`宸新復健科專業治療-${treatment.title}示意圖`}
                  width={1200}
                  height={600}
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                  priority={true}
                />
                {/* [SEO優化] 圖片說明 (Optional) */}
                <figcaption className="sr-only">{treatment.title} 治療示意圖</figcaption>
              </figure>
            )}
            
            {/* Features 區塊 */}
            {treatment.features && treatment.features.length > 0 && (
              <section aria-labelledby="features-heading" className="bg-blue-50 rounded-xl p-8 mb-10">
                <h2 id="features-heading" className="text-2xl font-bold mb-6 text-blue-800 flex items-center">
                  <span className="mr-2" aria-hidden="true">✨</span> 
                  {treatment.title}的治療特色
                </h2>
                <ul className="grid md:grid-cols-2 gap-4 list-none pl-0">
                  {treatment.features.map((feature, index) => (
                    <li key={index} className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-blue-100">
                      <span className="text-blue-600 mr-2 font-bold text-lg">✓</span>
                      <span className="text-gray-800 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
            
            {/* 主要內容區 */}
            {treatment.content && (
              <section className="prose prose-lg prose-blue max-w-none mb-10 text-gray-700">
                {/* 建議：後端資料若能確保安全，這是 OK 的。 */}
                <div dangerouslySetInnerHTML={{ __html: treatment.content }} />
              </section>
            )}
            
            {/* 適用症狀 */}
            {treatment.applicableConditions && treatment.applicableConditions.length > 0 && (
              <section aria-labelledby="conditions-heading" className="mb-12">
                <h2 id="conditions-heading" className="text-2xl font-bold mb-6 text-gray-900 border-b pb-2">
                  適用症狀與適應症
                </h2>
                <nav aria-label="相關症狀標籤" className="flex flex-wrap gap-3">
                  {treatment.applicableConditions.map((condition, index) => (
                    <Link 
                      href={`/diseases?q=${condition}`} 
                      key={index} 
                      className="group bg-gray-100 text-gray-700 px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm"
                      aria-label={`查看關於 ${condition} 的更多資訊`}
                    >
                      # {condition}
                    </Link>
                  ))}
                </nav>
              </section>
            )}

            {/* CTA */}
            <aside className="mt-12 border-t pt-8 text-center bg-gradient-to-b from-transparent to-blue-50 pb-8 rounded-b-xl">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                想了解 {treatment.title} 是否適合您？
              </h3>
              <p className="mb-6 text-gray-600 max-w-2xl mx-auto">
                每個人的狀況都不同，建議由專業醫師進行評估，為您制定最合適的復健計畫。
              </p>
              <div className="flex justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-200"
                >
                  立即預約諮詢
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </Link>
                {/* 增加第二個 CTA 選項 */}
                <Link 
                  href="/treatments" 
                  className="inline-flex items-center bg-white text-blue-600 border border-blue-200 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-sm"
                >
                  查看其他治療
                </Link>
              </div>
            </aside>

          </article>
        </main>
        <Footer />
      </div>
    </>
  )
}