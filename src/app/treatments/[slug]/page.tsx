import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { getTreatmentBySlug, getAllTreatmentSlugs } from '@/data/treatments'
import ArticleDetail, { ArticleData } from '@/components/ArticleDetail'

// 定義常數
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.dryichen.com.tw'

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return getAllTreatmentSlugs()
}

// 1. 動態 Meta 設定 (SEO 核心)
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const treatment = getTreatmentBySlug(params.slug)
  if (!treatment) return { title: '項目不存在' }

  const canonicalUrl = `${SITE_URL}/treatments/${params.slug}`

  return {
    title: treatment.seoTitle || `${treatment.title} - 新竹宸新復健科`,
    description: treatment.seoDescription || treatment.description,
    keywords: treatment.keywords || ['新竹復健', '骨科', treatment.title],
    alternates: {
        canonical: canonicalUrl,
    },
    openGraph: {
      title: treatment.title,
      description: treatment.seoDescription || treatment.description,
      url: canonicalUrl,
      type: 'article',
      images: treatment.images && treatment.images.length > 0 ? [treatment.images[0].src] : [],
    }
  }
}

export default function TreatmentDetailPage({ params }: PageProps) {
  const treatment = getTreatmentBySlug(params.slug)
  if (!treatment) notFound()

  // 網址設定
  const currentPageUrl = `${SITE_URL}/treatments/${params.slug}`

  // 轉換資料格式給 ArticleDetail
  const articleData: ArticleData = {
    title: treatment.title,
    subtitle: treatment.subtitle,
    description: treatment.description,
    contentHtml: treatment.contentHtml,
    images: treatment.images,
    youtubeVideoId: treatment.youtubeVideoId,
    whyChooseUs: treatment.whyChooseUs,
    treatmentFocus: treatment.treatmentFocus,
    qaList: treatment.qaList,
  }

  // 2. Schema (保留原本豐富的 Schema)
  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '首頁', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: '治療方式', item: `${SITE_URL}/treatments` },
      { '@type': 'ListItem', position: 3, name: treatment.title, item: currentPageUrl },
    ],
  }

  const jsonLdProcedure = {
    '@context': 'https://schema.org',
    '@type': 'TherapeuticProcedure',
    name: treatment.title,
    description: treatment.seoDescription || treatment.description,
    procedureType: 'Non-surgical',
    url: currentPageUrl,
    image: treatment.images && treatment.images.length > 0 
      ? treatment.images.map(img => img.src) 
      : undefined,
    medicalSpecialty: [
      { '@type': 'MedicalSpecialty', name: 'Physical Medicine and Rehabilitation' },
      { '@type': 'MedicalSpecialty', name: 'Orthopedics' }
    ],
    provider: {
      '@type': 'Physician',
      'name': '林羿辰 醫師',
      'url': `${SITE_URL}/about/doctors`
    },
    location: {
      '@type': 'MedicalClinic',
      'name': '宸新復健科診所'
    }
  }

  const jsonLdFAQ = treatment.qaList && treatment.qaList.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: treatment.qaList.map(qa => ({
      '@type': 'Question',
      name: qa.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: qa.answer
      }
    }))
  } : null;

  return (
    <>
      <JsonLd data={jsonLdBreadcrumb} />
      <JsonLd data={jsonLdProcedure} />
      {jsonLdFAQ && <JsonLd data={jsonLdFAQ} />}

      {/* 使用共用組件 */}
      <ArticleDetail 
        data={articleData} 
        backLink={{ href: '/treatments', label: '返回治療列表' }}
        currentUrl={currentPageUrl}
        layoutStyle="standard" 
      />
    </>
  )
}