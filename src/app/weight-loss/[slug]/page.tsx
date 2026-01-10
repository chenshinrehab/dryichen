import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import JsonLd from '@/components/JsonLd'
import { getWeightLossProgramBySlug, weightLossPrograms } from '@/data/weightLoss'

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return weightLossPrograms.map((program) => ({
    slug: program.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const program = getWeightLossProgramBySlug(params.slug)
  
  if (!program) {
    return {
      title: '減重與骨齡',
    }
  }

  return {
    title: `${program.title} - 減重與骨齡 | 宸新復健科診所`,
    description: program.description,
    keywords: ['減重', '骨齡評估', program.title].filter(Boolean),
    openGraph: {
      title: program.title,
      description: program.description,
      type: 'article',
    },
  }
}

export default function WeightLossDetailPage({ params }: PageProps) {
  const program = getWeightLossProgramBySlug(params.slug)

  if (!program) {
    notFound()
  }

  const medicalProcedureSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: program.title,
    description: program.description,
  }

  return (
    <>
      <JsonLd data={medicalProcedureSchema} />
      <div className="min-h-screen flex flex-col">
      <Breadcrumbs items={[
        { label: '首頁', href: '/' },
        { label: '減重與骨齡', href: '/weight-loss' },
        { label: program.title },
      ]} />
      <main className="flex-grow py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <h1 className="text-4xl font-bold mb-4">{program.title}</h1>
          <p className="text-xl text-gray-600 mb-8">{program.description}</p>
          
          {program.content && (
            <div className="prose max-w-none mb-8">
              <p className="text-gray-700 leading-relaxed">{program.content}</p>
            </div>
          )}
          
          {program.features && program.features.length > 0 && (
            <div className="bg-blue-50 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">特色</h2>
              <ul className="space-y-2">
                {program.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-2">▹</span>
                    <span>{feature}</span>
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
