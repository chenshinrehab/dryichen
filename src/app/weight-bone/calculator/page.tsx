import BoneAgeCalculator from '@/components/tools/BoneAgeCalculator';
import { Metadata } from 'next';
import Link from 'next/link'; // 引入 Link 組件以優化內部導航 SEO

// 1. 設定精準且豐富的 Metadata
export const metadata: Metadata = {
  title: '骨齡與遺傳身高預測計算機 - 線上免費檢測 | 新竹宸新復健科 | 林羿辰醫師',
  description: '擔心孩子長不高？輸入骨齡與父母身高，透過台灣常模大數據，科學預測成年潛力身高。由林羿辰醫師設計，協助新竹/竹北家長判斷是否需醫療介入轉骨治療。',
  keywords: ['骨齡計算', '預測身高', '遺傳身高', '性早熟', '生長板', '兒童長高', '新竹轉骨', '竹北復健科', '林羿辰'],
  alternates: {
    canonical: 'https://www.dryichen.com.tw/weight-bone/calculator',
  },
  openGraph: {
    title: '我的孩子將來會多高？骨齡與身高預測計算機',
    description: '別錯過長高黃金期！輸入數據，立即獲得林醫師的專業分析與落點預測。',
    url: 'https://www.dryichen.com.tw/weight-bone/calculator',
    siteName: '新竹宸新復健科診所',
    locale: 'zh_TW',
    type: 'website',
    // images: ['/og-calculator.jpg'], // 建議補上一張預覽圖
  },
};

export default function CalculatorPage() {
  // 2. 建構 SEO 結構化資料 (JSON-LD)
  // 這裡標記為 "MedicalWebPage" 並連結到診所與醫師
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": "https://www.dryichen.com.tw/weight-bone/calculator/#webpage",
        "url": "https://www.dryichen.com.tw/weight-bone/calculator",
        "name": "骨齡與遺傳身高預測計算機",
        "description": "提供家長線上計算兒童骨齡對應之成年身高預測，並評估生長發育落點。",
        "author": {
          "@type": "Physician",
          "name": "林羿辰醫師",
          "url": "https://www.dryichen.com.tw/", // 若有醫師介紹頁可換成該頁
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
            "name": "Growth Disorders"
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
                "name": "骨齡預測計算機",
                "item": "https://www.dryichen.com.tw/weight-bone/calculator"
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
          
          {/* 返回按鈕：改用 Next.js Link 優化 SPA 體驗與 SEO */}
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
          

          <BoneAgeCalculator />
        </div>
      </main>
    </div>
  );
}