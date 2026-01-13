import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { diseaseCategories } from '@/data/diseases'
import JsonLd from '@/components/JsonLd'

// 定義 Props 型別
interface PageProps {
  params: {
    category: string
  }
}

// 1. 動態產生 Metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const category = diseaseCategories.find((c) => c.slug === params.category)
   
  if (!category) {
    return {
      title: '找不到分類 | 宸新復健科',
    }
  }

  return {
    title: `${category.title} - 症狀與治療介紹 | 宸新復健科`,
    description: category.description,
    keywords: [`${category.title}`, '新竹骨科', '新竹復健', ...category.diseases.map(d => d.title)],
  }
}

// 2. 靜態路徑生成 (SSG)
export async function generateStaticParams() {
  return diseaseCategories.map((category) => ({
    category: category.slug,
  }))
}

export default function DiseaseCategoryPage({ params }: PageProps) {
  const category = diseaseCategories.find((c) => c.slug === params.category)

  if (!category) {
    notFound()
  }

  // Schema: MedicalWebPage
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: category.title,
    description: category.description,
    url: `https://www.dryichen.com.tw/diseases/${category.slug}`,
    mainEntity: {
        '@type': 'ItemList',
        itemListElement: category.diseases.map((disease, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: disease.title,
            url: `https://www.dryichen.com.tw/diseases/${category.slug}/${disease.slug}`
        }))
    }
  }

  return (
    <>
      <JsonLd data={jsonLd} />

      <div className="min-h-screen flex flex-col bg-slate-900 text-slate-300">
        
        <main className="flex-grow pt-4 pb-12 md:pt-8 md:pb-16 fade-in">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* --- 修改重點：更新返回按鈕樣式 --- */}
            {/* 這裡 href 指向 /diseases (總覽)，因為本頁面已經是分類頁了 */}
            <div>
              <Link 
                href="/diseases" 
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-6 transition-colors group"
              >
                 <i className="fa-solid fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i> 
                 返回部位列表
              </Link>
            </div>

            {/* 標題區塊 */}
            <div className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-bold font-sans text-white mb-3 tracking-wider">
                    {category.title}
                </h1>
                
                {/* 裝飾線 */}
                <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full mb-2"></div>

                {/* 隱藏 SEO 導言 */}
                <p className="hidden text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                   {category.description}
                </p>
            </div>

            {/* 疾病卡片列表 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {category.diseases.map((disease) => (
                <Link
                  key={disease.slug}
                  href={`/diseases/${category.slug}/${disease.slug}`}
                  className="group bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all duration-300 flex flex-col"
                >
                  {/* 1. 圖片區塊 */}
                  <div className="h-48 overflow-hidden relative bg-slate-800">
                    {disease.images && disease.images.length > 0 ? (
                        <img 
                          src={disease.images[0].src} 
                          alt={disease.images[0].alt || disease.title}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                    ) : (
                        <img 
                          src={category.image} 
                          alt={category.title}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 opacity-60 grayscale group-hover:grayscale-0"
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                  </div>

                  {/* 2. 文字區塊 */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-3">
                        <h2 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                            {disease.title}
                        </h2>
                    </div>
                    
                    <p className="text-slate-400 mb-4 line-clamp-2 flex-grow text-sm leading-relaxed">
                      {disease.description}
                    </p>

                    {/* 症狀標籤 */}
                    {disease.symptoms && disease.symptoms.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                            {disease.symptoms.slice(0, 3).map((symptom, idx) => (
                                <span key={idx} className="text-xs bg-slate-900 text-slate-300 px-2 py-1 rounded border border-slate-700">
                                    {symptom}
                                </span>
                            ))}
                        </div>
                    )}
                    
                    <div className="mt-auto text-right">
                          <span className="text-cyan-400 font-semibold text-sm group-hover:underline decoration-cyan-400/50 underline-offset-4">
                           了解詳細治療 <i className="fa-solid fa-arrow-right ml-1 text-xs"></i>
                          </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* 底部按鈕 - 保留作為頁尾輔助導航 */}
            <div className="text-center">
                <Link href="/diseases" className="inline-flex items-center px-6 py-3 border border-slate-600 rounded-full text-slate-300 hover:text-white hover:border-cyan-500 hover:bg-slate-800 transition-all group">
                    <i className="fa-solid fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i>
                    返回疾病衛教總覽
                </Link>
            </div>

          </div>
        </main>
      </div>
    </>
  )
}