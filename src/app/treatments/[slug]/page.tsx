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

export async function generateStaticParams() {
  return treatments.map((treatment) => ({
    slug: treatment.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const treatment = getTreatmentBySlug(params.slug)
  
  if (!treatment) {
    return {
      title: '治療方式',
    }
  }

  return {
    title: `${treatment.title} - 治療方式 | 宸新復健科診所`,
    description: treatment.description,
    keywords: ['復健治療', treatment.title, 'PRP', '震波治療'].filter(Boolean),
    openGraph: {
      title: treatment.title,
      description: treatment.description,
      type: 'article',
      images: treatment.imageUrl ? [`${process.env.SITE_URL || 'https://chenshinrehab.github.io/dr-lin-rehab'}${treatment.imageUrl}`] : [],
    },
  }
}

export default function TreatmentDetailPage({ params }: PageProps) {
  const treatment = getTreatmentBySlug(params.slug)

  if (!treatment) {
    notFound()
  }

  const baseUrl = process.env.SITE_URL || 'https://chenshinrehab.github.io/dr-lin-rehab'
  const imageUrl = treatment.imageUrl ? `${baseUrl}${treatment.imageUrl}` : undefined

  const medicalProcedureSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: treatment.title,
    description: treatment.description,
    ...(imageUrl && { image: imageUrl }),
    procedureType: {
      '@type': 'MedicalProcedureType',
      name: treatment.title,
    },
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {treatment.imageUrl && (
            <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
              <OptimizedImage
                src={treatment.imageUrl}
                alt={`${treatment.title}治療示意圖`}
                width={1200}
                height={600}
                className="w-full h-64 md:h-96 object-cover"
                priority={true}
              />
            </div>
          )}
          
          <h1 className="text-4xl font-bold mb-4">{treatment.title}</h1>
          <p className="text-xl text-gray-600 mb-8">{treatment.description}</p>
          
          {treatment.content && (
            <div className="prose max-w-none mb-8">
              <p className="text-gray-700 leading-relaxed">{treatment.content}</p>
            </div>
          )}
          
          {treatment.features && treatment.features.length > 0 && (
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">特色</h2>
              <ul className="space-y-2">
                {treatment.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-2">▹</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {treatment.applicableConditions && treatment.applicableConditions.length > 0 && (
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">適用症狀</h2>
              <ul className="space-y-2">
                {treatment.applicableConditions.map((condition, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-gray-600 mr-2">▹</span>
                    <span>{condition}</span>
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
