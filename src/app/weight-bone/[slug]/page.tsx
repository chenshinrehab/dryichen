// src/app/weight-bone/[slug]/page.tsx
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'

// ✨ 修正路徑：因為 [slug] 多了一層，所以要用三個 ../ 才能找到 data
import { getWeightLossProgramBySlug, getAllWeightLossProgramSlugs } from '@/data/weightLoss'

interface PageProps {
  params: {
    slug: string
  }
}

// 產生靜態路徑 (SEO)
export async function generateStaticParams() {
  const slugs = getAllWeightLossProgramSlugs()
  return slugs
}

// 產生 Metadata (SEO)
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const program = getWeightLossProgramBySlug(params.slug)
  if (!program) return { title: '項目不存在' }

  return {
    title: `${program.title} - 減重與骨齡 | 宸新復健科診所`,
    description: program.description,
  }
}

export default function WeightBoneDetailPage({ params }: PageProps) {
  const program = getWeightLossProgramBySlug(params.slug)

  if (!program) {
    notFound()
  }

  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: program.title,
    description: program.description,
  }

  return (
    <>
      <JsonLd data={jsonLdData} />
      
      {/* 黑色背景 */}
      <div className="min-h-screen flex flex-col bg-slate-900 text-slate-300">
        
        <main className="flex-grow py-12 md:py-16 fade-in">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* 返回按鈕 */}
            <Link href="/weight-bone" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors">
               <i className="fa-solid fa-arrow-left mr-2"></i> 返回列表
            </Link>

            {/* 標題 */}
            <h1 className="text-4xl font-bold mb-6 text-white border-b border-slate-700 pb-4">
                {program.title}
            </h1>
            
            {/* 描述 */}
            <p className="text-xl text-slate-400 mb-10 leading-relaxed">
                {program.description}
            </p>
            
            {/* 特色區塊 */}
            {program.features && program.features.length > 0 && (
              <div className="bg-slate-800/60 rounded-xl p-8 mb-10 border border-slate-700 shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center">
                    <i className="fa-solid fa-star mr-3"></i> 療程特色
                </h2>
                <ul className="grid md:grid-cols-2 gap-4">
                  {program.features.map((feature, index) => (
                    <li key={index} className="flex items-center bg-slate-900/50 p-3 rounded-lg border border-slate-700/50">
                      <i className="fa-solid fa-check text-green-400 mr-3"></i>
                      <span className="text-slate-200">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 詳細內容 */}
            {program.content && (
              <div className="prose prose-lg prose-invert max-w-none text-slate-300">
                <h3 className="text-2xl font-bold text-white mb-4">詳細說明</h3>
                <p className="leading-relaxed whitespace-pre-line bg-slate-800/30 p-6 rounded-xl border border-slate-700/30">
                    {program.content}
                </p>
              </div>
            )}
            
          </div>
        </main>
      </div>
    </>
  )
}