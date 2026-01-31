// src/app/weight-bone/child/page.tsx (確認路徑是否與網址對應)
import GrowthAnalysisMRI from '@/components/tools/GrowthAnalysisMRI';
import { Metadata } from 'next';
import Link from 'next/link'; // 引入 Next.js 的 Link 組件

// 1. 豐富 Metadata：針對「生長曲線」與「發育評估」設定關鍵字
export const metadata: Metadata = {
  title: '兒童生長曲線評估儀 - 檢查身高體重百分位 | 新竹宸新復健科 | 林羿辰醫師',
  description: '孩子太矮還是太胖？輸入身高體重，透過台灣最新兒童常模，立即計算生長百分位(PR值)。由林羿辰醫師設計，協助新竹/竹北家長篩檢生長遲緩或性早熟風險。',
  keywords: ['兒童生長曲線', '身高百分位', '生長遲緩', '性早熟', '兒童肥胖', '新竹轉骨', '竹北復健科', '林羿辰', '生長激素'],
  alternates: {
    canonical: 'https://www.dryichen.com.tw/weight-bone/child', // 鎖定正確網址，避免重複內容扣分
  },
  openGraph: {
    title: '我的孩子發育正常嗎？兒童生長曲線線上檢測',
    description: '別讓孩子輸在起跑點！輸入數據，立即獲得醫師專業的落點分析與建議。',
    url: 'https://www.dryichen.com.tw/weight-bone/child',
    siteName: '新竹宸新復健科診所',
    locale: 'zh_TW',
    type: 'website',
    // images: ['/og-growth-curve.jpg'], // 建議補上一張預覽圖
  },
};

export default function GrowthAnalysisPage() {
  // 2. 建構 SEO 結構化資料 (JSON-LD)
  // 標記為 MedicalWebPage，增加專業信任度
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": "https://www.dryichen.com.tw/weight-bone/child/#webpage",
        "url": "https://www.dryichen.com.tw/weight-bone/child",
        "name": "兒童生長曲線評估儀 - 身高體重百分位計算",
        "description": "線上計算兒童生長百分位，評估發育落點是否符合台灣常模標準。",
        "author": {
          "@type": "Physician",
          "name": "林羿辰醫師",
          "url": "https://www.dryichen.com.tw/",
          "affiliation": {
            "@type": "MedicalOrganization",
            "name": "新竹宸新復健科診所",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Zhubei City",
              "addressRegion": "Hsinchu County",
              "addressCountry": "TW"
            }
          }
        },
        "audience": {
          "@type": "Patient",
          "audienceType": "Parents",
          "healthCondition": {
            "@type": "MedicalCondition",
            "name": "Child Development"
          }
        },
        "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "首頁",
                "item": "https://www.dryichen.com.tw/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "減重與骨齡門診",
                "item": "https://www.dryichen.com.tw/weight-bone"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "生長曲線評估",
                "item": "https://www.dryichen.com.tw/weight-bone/child"
            }
            ]
        }
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-slate-300">
      
      {/* 3. 注入 JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex-grow pt-0 -mt-10 md:-mt-12 pb-12 fade-in relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* 返回按鈕：改用 Link 提升效能 */}
          <div className="max-w-4xl mx-auto mb-6">
            <Link 
              href="/weight-bone" 
              className="text-cyan-400 hover:text-white flex items-center gap-2 w-fit transition-colors group"
              aria-label="返回減重與骨齡門診總覽"
            >
              <i className="fa-solid fa-arrow-left transition-transform group-hover:-translate-x-1"></i> 
              <span>返回減重與骨齡門診</span>
            </Link>
          </div>
          
          {/* 注意：上一輪我們已經將 GrowthAnalysisMRI 元件內部的 H2 改為 H1 了。
            所以這裡不需要額外加入 H1，直接引入元件即可，
            這樣頁面結構會保持乾淨的單一 H1 架構。
          */}
          <GrowthAnalysisMRI />
        </div>
      </main>
    </div>
  );
}