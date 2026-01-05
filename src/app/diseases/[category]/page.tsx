import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import OptimizedImage from '@/components/OptimizedImage'
import { getCategoryBySlug, generateAllCategoryParams } from '@/data/diseases'

interface PageProps {
  params: {
    category: string
  }
}

/**
 * 生成静态路径参数（用于 GitHub Pages 静态导出）
 */
export async function generateStaticParams() {
  return generateAllCategoryParams()
}

/**
 * 生成页面元数据（SEO）
 */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const category = getCategoryBySlug(params.category)
  
  if (!category) {
    return {
      title: '疾病衛教',
    }
  }

  return {
    title: `${category.title} - 疾病衛教 | 宸新復健科診所`,
    description: category.seoDescription || category.description || `${category.title}相關疾病介紹與治療建議`,
    keywords: category.seoKeywords?.join(', '),
  }
}

export default function DiseaseCategoryPage({ params }: PageProps) {
  const category = getCategoryBySlug(params.category)

  if (!category) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Breadcrumbs items={[
        { label: '首頁', href: '/' },
        { label: '疾病衛教', href: '/diseases' },
        { label: category.title },
      ]} />
      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <h1 className="text-4xl font-bold mb-4">{category.title}</h1>
          {category.description && (
            <p className="text-xl text-gray-600 mb-12">{category.description}</p>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {category.diseases.map((disease) => (
              <Link
                key={disease.id}
                href={`/diseases/${category.slug}/${disease.id}`}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                {disease.imageUrl && (
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <OptimizedImage
                      src={disease.imageUrl}
                      alt={`${disease.title}示意圖`}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                )}
                <h2 className="text-2xl font-bold mb-4 text-gray-800">{disease.title}</h2>
                <p className="text-gray-600 mb-4">{disease.description}</p>
                {disease.symptoms && disease.symptoms.length > 0 && (
                  <div className="mb-4">
                    <h3 className="font-semibold mb-2 text-gray-700">常見症狀：</h3>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      {disease.symptoms.slice(0, 3).map((symptom, index) => (
                        <li key={index}>{symptom}</li>
                      ))}
                      {disease.symptoms.length > 3 && (
                        <li className="text-gray-500">...</li>
                      )}
                    </ul>
                  </div>
                )}
                <span className="text-blue-600 font-semibold">了解更多 →</span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
