import { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import { treatments } from '@/data/treatments'

export const metadata: Metadata = {
  title: '治療方式 - 專業復健治療服務 | 宸新復健科診所',
  description: '專業的復健治療服務，包括PRP注射、震波治療、一對一運動治療等，結合醫學與運動科學，提供個人化的治療方案。',
  keywords: ['復健治療', 'PRP注射', '震波治療', '運動治療', '新竹復健'],
}

export default function TreatmentsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Breadcrumbs items={[
        { label: '首頁', href: '/' },
        { label: '治療方式' },
      ]} />
      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">治療方式</h1>
          <p className="text-xl text-gray-600 mb-12">
            專業的復健治療服務，結合醫學與運動科學，提供個人化的治療方案
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((treatment) => (
              <Link
                key={treatment.slug}
                href={`/treatments/${treatment.slug}`}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <h2 className="text-2xl font-bold mb-4 text-gray-800">{treatment.title}</h2>
                <p className="text-gray-600 mb-4">{treatment.description}</p>
                {treatment.applicableConditions && treatment.applicableConditions.length > 0 && (
                  <div className="mb-4">
                    <h3 className="font-semibold mb-2 text-gray-700">適用症狀：</h3>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      {treatment.applicableConditions.map((condition, index) => (
                        <li key={index}>{condition}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {treatment.features && treatment.features.length > 0 && (
                  <div className="mb-4">
                    <h3 className="font-semibold mb-2 text-gray-700">特色：</h3>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      {treatment.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
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
