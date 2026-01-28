// src/components/weight-bone/WeightLossTools.tsx
'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

export default function WeightLossTools() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // 點擊外部關閉選單
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const tools = [
    {
      href: '/weight-bone/BMI',
      label: '減重自我評估',
      icon: 'fa-calculator',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      href: '/weight-bone/child',
      label: '兒童生長曲線分析',
      icon: 'fa-chart-line', // 建議換成圖表 icon，若無可改回 fa-calculator
      color: 'from-cyan-600 to-teal-500'
    },
    {
      href: '/weight-bone/calculator',
      label: '骨齡與遺傳身高預測',
      icon: 'fa-x-ray', // 建議換成 X光或骨頭 icon，若無可改回 fa-calculator
      color: 'from-blue-500 to-indigo-600'
    }
  ]

  return (
    <div className="w-full mt-6">
      
      {/* =======================
          電腦版：橫向排列
          ======================= */}
      <div className="hidden md:flex flex-wrap gap-4">
        {tools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className={`group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${tool.color} rounded-full text-white font-bold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-1 transition-all duration-300`}
          >
            <span className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <i className={`fa-solid ${tool.icon} text-lg group-hover:animate-pulse`}></i>
            <span>{tool.label}</span>
            <i className="fa-solid fa-arrow-right text-sm ml-1 group-hover:translate-x-1 transition-transform"></i>
          </Link>
        ))}
      </div>

      {/* =======================
          手機版：下拉選單
          ======================= */}
      <div className="md:hidden relative z-50" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-6 py-4 bg-slate-800 border border-slate-700 rounded-xl text-white font-bold shadow-lg active:bg-slate-700 transition-colors"
        >
          <div className="flex items-center gap-3">
            <i className="fa-solid fa-toolbox text-cyan-400"></i>
            <span>實用小工具 (點擊展開)</span>
          </div>
          <i className={`fa-solid fa-chevron-down transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}></i>
        </button>

        {/* 下拉內容 */}
        <div
          className={`absolute top-full left-0 w-full mt-2 bg-slate-800 border border-slate-700 rounded-xl shadow-2xl overflow-hidden transition-all duration-300 origin-top ${
            isOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible'
          }`}
        >
          <div className="flex flex-col p-2 gap-2">
            {tools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                onClick={() => setIsOpen(false)} // 點擊後關閉選單
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-700 transition-colors text-slate-200 hover:text-cyan-400"
              >
                <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${tool.color} flex items-center justify-center text-white text-xs`}>
                  <i className={`fa-solid ${tool.icon}`}></i>
                </div>
                <span className="font-medium">{tool.label}</span>
                <i className="fa-solid fa-chevron-right ml-auto text-xs opacity-50"></i>
              </Link>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}