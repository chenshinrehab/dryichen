import { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import { diseaseCategories } from '@/data/diseases'

export const metadata: Metadata = {
  title: '疾病衛教 - 復健相關疾病介紹與治療建議 | 宸新復健科診所',
  description: '詳細的疾病介紹與治療建議，涵蓋脊椎、肩膀、手肘、手部、膝蓋、足踝等復健相關疾病，幫助您了解症狀與治療方式。',
  keywords: ['疾病衛教', '復健疾病', '症狀', '治療建議', '新竹復健'],
}

export default function DiseasesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Breadcrumbs items={[
        { label: '首頁', href: '/' },
        { label: '疾病衛教' },
      ]} />
      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">疾病衛教</h1>
          <p className="text-xl text-gray-600 mb-12">
            詳細的疾病介紹與治療建議，幫助您了解各種復健相關疾病
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {diseaseCategories.map((category) => (
              <Link
                key={category.slug}
                href={`/diseases/${category.slug}`}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <h2 className="text-2xl font-bold mb-2 text-gray-800">{category.title}</h2>
                {category.description && (
                  <p className="text-gray-600 mb-4">{category.description}</p>
                )}
                <p className="text-sm text-gray-500 mb-4">
                  共 {category.diseases.length} 種疾病
                </p>
                <span className="text-blue-600 font-semibold">查看疾病列表 →</span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
