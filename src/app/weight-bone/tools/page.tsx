import React from 'react'
import type { Metadata } from 'next'
import WeightLossTools from '@/components/WeightLossTools'

export const metadata: Metadata = {
  title: '健康實用小工具導覽 | 新竹宸新復健科',
  description: '提供 BMI、兒童骨齡、生長與體重管理相關健康工具。',
  alternates: { canonical: 'https://www.dryichen.com.tw/weight-bone/tools' },
  openGraph: {
    title: '健康實用小工具導覽 | 新竹宸新復健科',
    description: '提供 BMI、兒童骨齡、生長與體重管理相關健康工具。',
    url: 'https://www.dryichen.com.tw/weight-bone/tools',
    type: 'website',
  },
}

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-slate-900 pt-24 pb-12">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-white text-center mb-8">健康實用小工具導覽</h1>
        {/* 這裡就會載入你原本的那四個小工具 */}
        <WeightLossTools /> 
      </div>
    </div>
  )
}
