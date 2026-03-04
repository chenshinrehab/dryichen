// src/app/treatments/[slug]/page.tsx
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { getTreatmentBySlug, getAllTreatmentSlugs } from '@/data/treatments'
import ArticleDetail, { ArticleData } from '@/components/ArticleDetail'

// 1. 匯入資料抓取功能
import { getRelatedCases } from '@/data/cases'         // 抓取案例資料

// 定義常數
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.dryichen.com.tw').trim()

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return getAllTreatmentSlugs()
}

// 動態 Meta 設定 (SEO)
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const treatment = getTreatmentBySlug(params.slug)
  if (!treatment) return { title: '項目不存在' }

  const canonicalUrl = `${SITE_URL}/treatments/${params.slug}`

  return {
    // 修正：移除後綴診所名，避免與 layout.tsx 模板疊加
    title: treatment.seoTitle || `${treatment.title}  `, 
    authors: [{ name: '林羿辰醫師', url: SITE_URL }],
    publisher: '宸新復健科診所-林羿辰醫師',
    description: treatment.seoDescription || treatment.description,
    keywords: treatment.keywords || ['新竹復健', '骨科', treatment.title, '宸新復健科'],
    alternates: {
        canonical: canonicalUrl,
    },
    openGraph: {
      title: treatment.title ,
      description: treatment.seoDescription || treatment.description,
      url: canonicalUrl,
      type: 'article',
      siteName: '新竹宸新復健科診所',
      images: treatment.images && treatment.images.length > 0 ? [treatment.images[0].src] : [],
    },
    // 加入在地化 Geo 標記
    other: {
      'geo.region': 'TW-HCH',
      'geo.placename': '新竹市',
    }
  }
}

export default function TreatmentDetailPage({ params }: PageProps) {
  const treatment = getTreatmentBySlug(params.slug)
  if (!treatment) notFound()

  // 網址設定
  const currentPageUrl = `${SITE_URL}/treatments/${params.slug}`

  // --- 資料獲取區 ---

  // A. 抓取「成功案例」 (根據 Tags)
  const matchedCases = getRelatedCases(treatment.tags);

  // ------------------

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
    keywords: treatment.keywords, 
  }

  // Schema (JSON-LD)
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
    '@type': 'MedicalWebPage',
    'name': treatment.title,
    'headline': treatment.seoTitle,
    'description': treatment.seoDescription || treatment.description,
    'url': currentPageUrl,
    'datePublished': '2026-01-25',
    'dateModified': treatment.lastModified || '2026-02-22',
    'image': treatment.images && treatment.images.length > 0 
      ? treatment.images.map(img => img.src.startsWith('http') ? img.src : `${SITE_URL}${img.src}`) 
      : [`${SITE_URL}/images/main/a.webp`],

    // ✨ 修正 1：移除 WebPage 頂層無效的 medicalSpecialty
    // 將原本想表達的專業資訊移至 about 或 knowsAbout，保留 SEO 權重
    'about': [
      { '@type': 'MedicalSpecialty', 'name': 'Physical Medicine and Rehabilitation' },
      { '@type': 'MedicalSpecialty', 'name': 'Orthopedics' },
      { '@type': 'MedicalSpecialty', 'name': 'Sports Medicine' },
      { '@type': 'MedicalSpecialty', 'name': 'Pediatric' }
    ],


    // 4. 作者區塊：保留醫師雙重宣告
    'author': {
      '@type': ['Person', 'Physician'],
      'name': '林羿辰 醫師',
      'jobTitle': '宸新復健科診所 院長',
      'url': `${SITE_URL}/about/doctors`,
      'image': `${SITE_URL}/images/main/a.webp`,
      'alumniOf': { 
        '@type': 'EducationalOrganization', 
        'name': '國立台灣大學醫學系' 
      },
      'knowsAbout': [
        'Orthopaedic', 
        'Sports Medicine', 
        'Pain Management',
        'Physical Medicine and Rehabilitation',
        'Pediatric Rehabilitation'
      ],
      // ✨ 修正 2：medicalSpecialty 放在醫師實體內是合法的
      'medicalSpecialty': [
        'https://schema.org/Physiotherapy', 
        'https://schema.org/Orthopedic', 
        'https://schema.org/Pediatric'
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
    },

    // 5. 提供者區塊
    'provider': {
      '@type': ['Person', 'Physician'],
      'name': '林羿辰 醫師',
      'url': `${SITE_URL}/about/doctors`,
      'jobTitle': '院長',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '光復路一段371號B1',
        'addressLocality': '新竹市',
        'addressRegion': '東區',
        'postalCode': '300',
        'addressCountry': 'TW',
      },
      'sameAs': [
        'https://ma.mohw.gov.tw/Accessibility/DOCSearch/DOCBasicData?DOC_SEQ=2bJQOvvE5EX3U6eK7eSvhw%253D%253D',
        'https://www.pmr.org.tw/associator/associator-all.asp?w/',
        'https://www.toa1997.org.tw/orthopedist/?n=%E6%9E%97%E7%BE%BF%E8%BE%B0&h=&c=&a='
      ]
    },

    // 6. 地點資訊
    'contentLocation': {
      '@type': 'MedicalClinic',
      'name': '宸新復健科診所',
      'alternateName': 'Chenshin Rehabilitation Clinic',
      'url': SITE_URL,
      'logo': {
        '@type': 'ImageObject',
        'url': `${SITE_URL}/logo.webp`
      },
      'address': { 
         '@type': 'PostalAddress',
         'streetAddress': '光復路一段371號B1',
         'addressLocality': '東區',
         'addressRegion': '新竹市',
         'addressCountry': 'TW',
         'postalCode': '300'
      },
      'telephone': '+886-3-5647999',
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

    // 7. 核心實體
    'mainEntity': {
      '@type': 'TherapeuticProcedure',
      'name': treatment.title,
      'description': treatment.seoDescription || treatment.description,
      'procedureType': 'http://schema.org/NoninvasiveProcedure',
      'howPerformed': "Ultrasound-guided injection (超音波導引注射)",
      
      // ✨ 修正 3：bodyLocation 報錯處理
      // 根據 Schema.org 定義，bodyLocation 期望的是 Text 或 AnatomicalStructure 的 URL。
      // 為了保留原本內容並通過驗證，我們使用字串陣列，這在實務上最能解決 Google 報錯問題。
      'bodyLocation': [
        "Knee (膝蓋)",
        "Shoulder (肩膀)",
        "Elbow (手肘)",
        "Ankle (足踝)"
      ],
      // 原本詳細的 AnatomicalStructure 資訊移至 relevantSpecialty 或相關屬性中保留
      'relevantSpecialty': {
        '@type': 'MedicalSpecialty',
        'name': 'Musculoskeletal Medicine'
      }
    }
  };

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

      <ArticleDetail 
        data={articleData} 
        backLink={{ href: '/treatments', label: '返回治療列表' }}
        currentUrl={currentPageUrl}
        layoutStyle="standard" 
        relatedCases={matchedCases}
      />
    </>
  )
}