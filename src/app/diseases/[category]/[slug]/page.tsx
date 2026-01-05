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

/**
 * 生成静态路径参数（用于 GitHub Pages 静态导出）
 * 这个函数会自动遍历所有类别和疾病，生成所有可能的路径组合
 */
export async function generateStaticParams() {
  return generateAllDiseaseParams()
}

/**
 * 生成页面元数据（SEO）
 */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const disease = getDiseaseBySlug(params.category, params.slug)
  const category = getCategoryBySlug(params.category)
  
  if (!disease || !category) {
    return {
      title: '疾病衛教',
    }
  }

  return {
    title: `${disease.title} - ${category.title} | 宸新復健科診所`,
    description: disease.seoDescription || disease.description,
    keywords: disease.seoKeywords?.join(', ') || `${disease.title}, ${category.title}, 復健`,
    openGraph: {
      title: disease.title,
      description: disease.description,
      images: disease.imageUrl ? [disease.imageUrl] : [],
      type: 'article',
    },
  }
}

export default function DiseaseDetailPage({ params }: PageProps) {
  const disease = getDiseaseBySlug(params.category, params.slug)
  const category = getCategoryBySlug(params.category)

  if (!disease || !category) {
    notFound()
  }

  const baseUrl = process.env.SITE_URL || 'https://chenshinrehab.github.io/dr-lin-rehab'
  const imageUrl = disease.imageUrl ? `${baseUrl}${disease.imageUrl}` : undefined

  const medicalConditionSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalCondition',
    name: disease.title,
    description: disease.description,
    category: category.title,
    ...(imageUrl && { image: imageUrl }),
    signOrSymptom: disease.symptoms?.map(symptom => ({
      '@type': 'MedicalSignOrSymptom',
      name: symptom,
    })),
    possibleTreatment: disease.treatments?.map(treatment => ({
      '@type': 'MedicalTherapy',
      name: treatment,
    })),
  }

  return (
    <>
      <JsonLd data={medicalConditionSchema} />
      <div className="min-h-screen flex flex-col">
      <Breadcrumbs items={[
        { label: '首頁', href: '/' },
        { label: '疾病衛教', href: '/diseases' },
        { label: category.title, href: `/diseases/${category.slug}` },
        { label: disease.title },
      ]} />
      <main className="flex-grow py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {disease.imageUrl && (
            <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
              <OptimizedImage
                src={disease.imageUrl}
                alt={`${disease.title} - ${category.title}疾病示意圖`}
                width={1200}
                height={600}
                className="w-full h-64 md:h-96 object-cover"
                priority={true}
              />
            </div>
          )}
          
          <h1 className="text-4xl font-bold mb-4">{disease.title}</h1>
          <p className="text-xl text-gray-600 mb-8">{disease.description}</p>
          
          {disease.content && (
            <div className="prose max-w-none mb-8">
              <div 
                className="text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: renderContent(disease.content) }}
              />
            </div>
          )}
          
          {disease.symptoms && disease.symptoms.length > 0 && (
            <div className="bg-red-50 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">常見症狀</h2>
              <ul className="space-y-2">
                {disease.symptoms.map((symptom, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-600 mr-2">▹</span>
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {disease.treatments && disease.treatments.length > 0 && (
            <div className="bg-green-50 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">治療建議</h2>
              <ul className="space-y-2">
                {disease.treatments.map((treatment, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-600 mr-2">▹</span>
                    <span>{treatment}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
