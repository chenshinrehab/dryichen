import { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import { weightLossPrograms } from '@/data/weightLoss'

export const metadata: Metadata = {
  title: '減重與骨齡 - 專業減重門診與兒童骨齡評估 | 宸新復健科診所',
  description: '專業減重門診服務，包括週纖達、猛健樂等減重項目，以及兒童骨齡評估服務，協助您達成健康減重目標。',
  keywords: ['減重', '骨齡評估', '週纖達', '猛健樂', '新竹減重'],
}

export default function WeightLossPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Breadcrumbs items={[
        { label: '首頁', href: '/' },
        { label: '減重與骨齡' },
      ]} />
      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">減重與骨齡</h1>
          <p className="text-xl text-gray-600 mb-12">
            專業減重門診服務，協助您達成健康減重目標，並提供兒童骨齡評估服務
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {weightLossPrograms.map((program) => (
              <Link
                key={program.slug}
                href={`/weight-loss/${program.slug}`}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <h2 className="text-2xl font-bold mb-4 text-gray-800">{program.title}</h2>
                <p className="text-gray-600 mb-4">{program.description}</p>
                {program.features && program.features.length > 0 && (
                  <div className="mb-4">
                    <h3 className="font-semibold mb-2 text-gray-700">特色：</h3>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      {program.features.map((feature, index) => (
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
