'use client'

import { useMemo, useRef, useState } from 'react'
import Link from '@/components/IntentLink'

interface SearchResult {
  title: string
  url: string
  type: string
  searchText: string
}

let cachedIndex: SearchResult[] | null = null
let indexRequest: Promise<SearchResult[]> | null = null

function loadSearchIndex() {
  if (cachedIndex) return Promise.resolve(cachedIndex)
  if (!indexRequest) {
    indexRequest = fetch('/search-index.json')
      .then((response) => {
        if (!response.ok) throw new Error('搜尋索引載入失敗')
        return response.json() as Promise<SearchResult[]>
      })
      .then((index) => {
        cachedIndex = index
        return index
      })
      .catch((error) => {
        indexRequest = null
        throw error
      })
  }
  return indexRequest
}

export default function FooterSearch({ lightMode = false }: { lightMode?: boolean }) {
  const [query, setQuery] = useState('')
  const [index, setIndex] = useState<SearchResult[]>(cachedIndex || [])
  const [isLoading, setIsLoading] = useState(false)
  const [loadFailed, setLoadFailed] = useState(false)
  const hasRequestedIndex = useRef(Boolean(cachedIndex))

  const ensureIndex = () => {
    if (hasRequestedIndex.current && (cachedIndex || isLoading)) return
    hasRequestedIndex.current = true
    setIsLoading(true)
    setLoadFailed(false)
    loadSearchIndex()
      .then(setIndex)
      .catch(() => {
        hasRequestedIndex.current = false
        setLoadFailed(true)
      })
      .finally(() => setIsLoading(false))
  }

  const normalizedQuery = query.trim().toLocaleLowerCase('zh-TW')
  const results = useMemo(
    () =>
      normalizedQuery
        ? index.filter((item) => item.searchText.includes(normalizedQuery)).slice(0, 5)
        : [],
    [index, normalizedQuery],
  )

  return (
    <div className="w-full">
      <h3 className={`text-lg font-bold mb-4 flex items-center ${lightMode ? 'text-slate-800' : 'text-white'}`}>
        <i className="fa-solid fa-magnifying-glass text-cyan-400 mr-2"></i> 站內搜尋
      </h3>

      <div className="relative">
        <input
          type="search"
          value={query}
          onFocus={ensureIndex}
          onChange={(event) => {
            ensureIndex()
            setQuery(event.target.value)
          }}
          placeholder="搜尋疾病、治療、停車位..."
          aria-label="站內搜尋"
          aria-busy={isLoading}
          className={`w-full border text-sm rounded-lg px-4 py-2 pl-10 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all ${
            lightMode
              ? 'bg-white border-slate-300 text-slate-800 placeholder:text-slate-400'
              : 'bg-slate-900/50 border-slate-600 text-slate-200 placeholder:text-slate-500'
          }`}
        />
        <i className="fa-solid fa-search absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm"></i>
      </div>

      {results.length > 0 && (
        <div className={`mt-2 border rounded-lg shadow-xl overflow-hidden animate-fade-in absolute z-50 w-full left-0 ${lightMode ? 'bg-white border-slate-200' : 'bg-slate-800 border-slate-700'}`}>
          {results.map((result) => (
            <Link
              key={result.url}
              href={result.url}
              onClick={() => setQuery('')}
              className={`block px-4 py-3 transition-colors border-b last:border-0 ${lightMode ? 'hover:bg-cyan-50 border-slate-100' : 'hover:bg-slate-700 border-slate-700/50'}`}
            >
              <div className="flex justify-between items-center">
                <span className={`${lightMode ? 'text-slate-700' : 'text-slate-200'} text-sm font-medium truncate flex-grow mr-2`}>
                  {result.title}
                </span>
                <span className="text-[10px] bg-cyan-900/40 text-cyan-300 px-2 py-0.5 rounded border border-cyan-500/20 whitespace-nowrap">
                  {result.type}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}

      {normalizedQuery && isLoading && <div className="mt-2 text-slate-500 text-sm px-1">正在載入搜尋資料…</div>}
      {normalizedQuery && !isLoading && !loadFailed && results.length === 0 && (
        <div className="mt-2 text-slate-500 text-sm px-1">沒有找到相關結果</div>
      )}
      {loadFailed && (
        <button type="button" onClick={ensureIndex} className="mt-2 text-cyan-500 text-sm px-1 hover:underline">
          搜尋資料載入失敗，點此重試
        </button>
      )}
    </div>
  )
}
