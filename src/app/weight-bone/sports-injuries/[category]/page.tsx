// src/app/weight-bone/sports-injuries/[category]/page.tsx
import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { sportsInjuriesData } from '@/data/sportsInjuries'
import { FaArrowLeft, FaArrowRight, FaCheck } from 'react-icons/fa'

export default function SportsCategoryPage({ params }: { params: { category: string } }) {
  // 找出對應的運動分類
  const categoryData = sportsInjuriesData.find(c => c.category === params.category)

  // 如果找不到分類，導向 404
  if (!categoryData) {
    notFound()
  }

  return (
      <div className="min-h-screen flex flex-col bg-slate-900 text-slate-300">
        <main className="flex-grow pt-0 -mt-10 md:-mt-12 pb-12 fade-in relative z-10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 返回上一頁 */}
        <Link 
          href="/weight-bone" 
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
        >
          <FaArrowLeft className="mr-2" /> 返回特色門診首頁
        </Link>

        {/* 分類標題 */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">{categoryData.title} </h1>
  
        </div>

        {/* 具體傷害項目列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categoryData.injuries.map((injury) => (
            <Link
              key={injury.slug}
              href={`/weight-bone/sports-injuries/${categoryData.category}/${injury.slug}`}
              className="group bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl overflow-hidden hover:bg-slate-800 hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="h-48 w-full relative overflow-hidden bg-slate-700">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10"></div>
                <img 
                  src={injury.image} 
                  alt={injury.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 flex items-center transition-colors">
                  {injury.title}
                  <FaArrowRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all ml-2 text-sm text-cyan-500" />
                </h2>
                <p className="text-slate-300 mb-6 flex-grow line-clamp-2">
                  {injury.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

          </div>
        </main>
      </div>
  )
}