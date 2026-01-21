// src/components/FooterSearch.tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
// 確保導入的是我們剛剛建立的輕量版 List
import { treatmentsList } from '@/data/treatments'
import { diseaseCategoriesList } from '@/data/diseases'
import { newsList } from '@/data/news'

// 定義搜尋結果介面
interface SearchResult {
  title: string
  url: string
  type: string // '治療' | '疾病' | '文章'
}

export default function FooterSearch() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])

  // 當使用者輸入時執行搜尋
  useEffect(() => {
    if (query.trim() === '') {
      setResults([])
      return
    }

    const lowerQuery = query.toLowerCase()
    const newResults: SearchResult[] = []

    // 1. 搜尋治療項目 (改用 treatmentsList)
    treatmentsList.forEach(t => {
      // 確保欄位存在再進行比對
      const matchTitle = t.title?.includes(query)
      const matchDesc = t.description?.includes(query)
      const matchSlug = t.slug?.includes(lowerQuery)
      
      if (matchTitle || matchDesc || matchSlug) {
        newResults.push({ title: t.title, url: `/treatments/${t.slug}`, type: '治療' })
      }
    })

    // 2. 搜尋疾病衛教 (改用 diseaseCategoriesList)
    diseaseCategoriesList.forEach(cat => {
      cat.diseases.forEach(d => {
        // 使用 (d as any) 避免 TypeScript 檢查 Metadata 介面時若無 seoKeywords 欄位會報錯
        // 這樣即使您的 interface 沒更新，這裡也能正常運作
        const keywords = (d as any).seoKeywords as string[] | undefined;
        
        const matchTitle = d.title.includes(query);
        const matchKeywords = keywords?.some(k => k.includes(query));

        if (matchTitle || matchKeywords) {
          // 建議網址改用 slug，若 id 與 slug 相同則沒差
          newResults.push({ title: d.title, url: `/diseases/${cat.slug}/${d.slug}`, type: '疾病' })
        }
      })
    })

    // 3. 搜尋最新文章 (改用 newsList)
    newsList.forEach(n => {
      if (n.title.includes(query) || n.summary.includes(query)) {
        newResults.push({ title: n.title, url: `/about/news/${n.id}`, type: '文章' })
      }
    })

    // 取前 5 筆結果以免版面太長
    setResults(newResults.slice(0, 5))
  }, [query])

  return (
    <div className="w-full">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center">
            <i className="fa-solid fa-magnifying-glass text-cyan-400 mr-2"></i> 站內搜尋
        </h3>
        
        <div className="relative">
            <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="搜尋疾病、治療 (如: 膝蓋)" 
                className="w-full bg-slate-900/50 border border-slate-600 text-slate-200 text-sm rounded-lg px-4 py-2 pl-10 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-600"
            />
            <i className="fa-solid fa-search absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm"></i>
        </div>

        {/* 搜尋結果列表 */}
        {results.length > 0 && (
            <div className="mt-2 bg-slate-800 border border-slate-700 rounded-lg shadow-xl overflow-hidden animate-fade-in absolute z-50 w-full">
                {results.map((res, idx) => (
                    <Link 
                        key={idx} 
                        href={res.url} 
                        // 點擊後清空搜尋，避免選單擋住頁面
                        onClick={() => setQuery('')}
                        className="block px-4 py-2 hover:bg-slate-700 transition-colors border-b border-slate-700/50 last:border-0"
                    >
                        <div className="flex justify-between items-center">
                            <span className="text-slate-200 text-sm font-medium truncate flex-grow mr-2">{res.title}</span>
                            <span className="text-xs bg-cyan-900/50 text-cyan-400 px-1.5 py-0.5 rounded border border-cyan-800 whitespace-nowrap">
                                {res.type}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        )}
        
        {query && results.length === 0 && (
            <div className="mt-2 text-slate-500 text-sm px-1">
                沒有找到相關結果
            </div>
        )}
    </div>
  )
}