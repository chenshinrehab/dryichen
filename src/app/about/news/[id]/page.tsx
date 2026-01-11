import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { newsData, getNewsById } from '@/data/news'

interface PageProps { params: { id: string } }

export async function generateStaticParams() {
  return newsData.map((post) => ({ id: post.id }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getNewsById(params.id)
  if (!post) return { title: '文章不存在' }
  return {
    title: `${post.title} - 宸新復健科`,
    description: post.summary,
    keywords: post.keywords,
  }
}

export default function NewsDetailPage({ params }: PageProps) {
  const post = getNewsById(params.id)
  if (!post) notFound()

  const jsonLdArticle = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    image: [post.coverImage],
    datePublished: post.date,
    author: { '@type': 'Person', name: '林羿辰醫師' },
    publisher: { '@type': 'Organization', name: '宸新復健科診所' },
    description: post.summary,
  }

  return (
    <>
      <JsonLd data={jsonLdArticle} />
      <div className="min-h-screen bg-slate-900 text-slate-300 py-12">
        <article className="max-w-3xl mx-auto px-4 fade-in">
          <Link href="/about/news" className="inline-flex items-center text-cyan-400 mb-8 hover:text-cyan-300 transition-colors group">
             <i className="fa-solid fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i> 返回列表
          </Link>
          <header className="mb-8 border-b border-slate-700 pb-8">
             <div className="flex gap-3 mb-4 text-sm">
                <span className="bg-cyan-500 text-slate-900 px-3 py-1 rounded-full font-bold">{post.category}</span>
                <span className="text-slate-400 flex items-center"><i className="fa-regular fa-calendar mr-2"></i>{post.date}</span>
             </div>
             <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">{post.title}</h1>
          </header>
          <div className="prose prose-invert prose-lg max-w-none text-slate-300 leading-relaxed prose-headings:text-cyan-50 prose-a:text-cyan-400 prose-strong:text-white" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        </article>
      </div>
    </>
  )
}