import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Metadata } from 'next'
import { facilitiesData, getFacilityById } from '@/data/facilities'

export async function generateStaticParams() {
  return facilitiesData.map((item) => ({ id: item.id }))
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const item = getFacilityById(params.id)
  if (!item) return { title: '設備介紹' }
  return {
    title: `${item.title} - 診所設備介紹`,
    description: item.description,
    keywords: item.keywords, // 這裡會讀取我們剛剛在 data 層設定的關鍵字
  }
}

export default function FacilityDetailPage({ params }: { params: { id: string } }) {
  const item = getFacilityById(params.id)
  if (!item) notFound()

  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 py-12">
      <div className="max-w-4xl mx-auto px-4 fade-in">
        <Link href="/about/clinic" className="inline-flex items-center text-cyan-400 mb-8 hover:text-cyan-300 transition-colors group">
           <i className="fa-solid fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i> 返回設備列表
        </Link>
        <div className="bg-slate-800/80 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl">
           <div className="relative h-64 md:h-96 w-full">
              <img src={item.imageUrl} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
           </div>
           <div className="p-8">
               <div className="flex items-center gap-4 mb-6">
                  <h1 className="text-3xl font-bold text-white border-l-4 border-cyan-500 pl-4">{item.title}</h1>
               </div>
               <div className="prose prose-invert prose-lg max-w-none text-slate-300 leading-relaxed">
                  {/* 使用 dangerouslySetInnerHTML 來解析我們在 data 裡寫的 HTML */}
                  <div dangerouslySetInnerHTML={{ __html: item.contentHtml }} />
               </div>
           </div>
        </div>
      </div>
    </div>
  )
}