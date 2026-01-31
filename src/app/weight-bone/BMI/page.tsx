// src/app/weight-bone/BMI/page.tsx
import WeightLossCalculator from '@/components/tools/WeightLossCalculator';
import { Metadata } from 'next';
import Link from 'next/link'; // 引入 Next.js 的 Link 組件以優化內部連結

// 1. 強化 Metadata：鎖定高流量關鍵字 (BMI, BMR, 減重)
export const metadata: Metadata = {
  title: 'BMI計算機 & BMR基礎代謝率檢測 | 醫師專業減重評估 | 新竹宸新復健科',
  description: '想減肥卻卡關？輸入身高體重，立即計算 BMI、體脂肪率與每日總熱量消耗 (TDEE/BMR)。由林羿辰醫師親自設計，協助新竹/竹北民眾制定科學的增肌減脂計畫。',
  keywords: ['BMI計算', 'BMR計算', '基礎代謝率', '減重門診', '增肌減脂', '體脂肪計算', '新竹減肥', '竹北復健科', '林羿辰', '瘦身'],
  alternates: {
    canonical: 'https://www.dryichen.com.tw/weight-bone/BMI',
  },
  openGraph: {
    title: '我的代謝正常嗎？BMI與基礎代謝率線上檢測',
    description: '別再盲目節食！透過醫學公式計算您的代謝優勢，獲得醫師的專屬減重建議。',
    url: 'https://www.dryichen.com.tw/weight-bone/BMI',
    siteName: '新竹宸新復健科診所',
    locale: 'zh_TW',
    type: 'website',
    // images: ['/og-bmi-calculator.jpg'], // 建議補上一張預覽圖
  },
};

export default function CalculatorPage() {
  // 2. 建構 SEO 結構化資料 (JSON-LD)
  // 標記為 MedicalWebPage，這是 YMYL 內容取得排名的關鍵
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": "https://www.dryichen.com.tw/weight-bone/BMI/#webpage",
        "url": "https://www.dryichen.com.tw/weight-bone/BMI",
        "name": "BMI與基礎代謝率(BMR)計算機",
        "description": "提供成人BMI數值計算、體位判定與基礎代謝率分析，作為體重管理之參考。",
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
          "audienceType": "People with Obesity",
          "healthCondition": {
            "@type": "MedicalCondition",
            "name": "Obesity"
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
                "name": "BMI代謝檢測",
                "item": "https://www.dryichen.com.tw/weight-bone/BMI"
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
          
          {/* 返回按鈕：使用 Link 組件提升 UX 與 SEO */}
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
          
          {/* WeightLossCalculator 元件內部我們已經將 h2 改為 h1 了，
            所以這裡直接引入即可，無需額外添加隱藏標題。
          */}
          <WeightLossCalculator />
        </div>
      </main>
    </div>
  );
}