import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import JsonLd from '@/components/JsonLd'
// 注意：這裡引入路徑要確認與實際檔案名稱一致
import { getWeightLossProgramBySlug, weightLossPrograms } from '@/data/weightLoss'

// ✨ 1. 設定你的正式網域 (用於生成 Canonical Tag)
const SITE_URL = 'https://www.dryichen.com' // 請換成你購買的正式網域

interface PageProps {
  params: {
    slug: string
  }
}

// 產生靜態參數 (SSG)，這部分你寫得很棒，保持原樣
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

  // ✨ 2. 組合標準網址
  const canonicalUrl = `${SITE_URL}/weight-loss/${program.slug}`

  return {
    title: `${program.title} - 減重與骨齡 | 宸新復健科診所`,
    description: program.description,
    keywords: ['減重', '骨齡評估', program.title].filter(Boolean),
    // ✨ 3. 加入 Canonical Tag (告知 Google 這是正版頁面)
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: program.title,
      description: program.description,
      type: 'article',
      url: canonicalUrl, // OG 也建議加上 URL
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
    // 建議補上 image (若有的話)
  }

  return (
    <>
      <JsonLd data={medicalProcedureSchema} />
      <div className="min-h-screen flex flex-col">
      {/* ✨ 4. 確保麵包屑的路徑拼字與資料夾一致 (weight-loss) */}
      <Breadcrumbs items={[
        { label: '首頁', href: '/' },
        { label: '減重與骨齡', href: '/weight-loss' }, 
        { label: program.title },
      ]} />
      
      <main className="flex-grow py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <h1 className="text-4xl font-bold mb-4 text-gray-900">{program.title}</h1>
          <p className="text-xl text-gray-600 mb-8">{program.description}</p>
          
          {program.features && program.features.length > 0 && (
            <div className="bg-blue-50 rounded-lg p-6 mb-8 border border-blue-100">
              <h2 className="text-2xl font-bold mb-4 text-blue-800">特色</h2>
              <ul className="space-y-3">
                {program.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    {/* 微調樣式讓勾勾更明顯 */}
                    <span className="text-blue-600 mr-3 font-bold text-lg">▹</span>
                    <span className="text-gray-800">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {program.content && (
            <div className="prose prose-lg max-w-none text-gray-700">
               {/* 加上 whitespace-pre-line 確保換行能正確顯示 */}
              <p className="leading-relaxed whitespace-pre-line">{program.content}</p>
            </div>
          )}
          
        </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
