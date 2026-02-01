import GrowthNutritionCalculator from '@/components/tools/GrowthNutritionGuide';
import { Metadata } from 'next';

// 1. 豐富 Metadata：增加 OpenGraph (社群分享預覽) 與 關鍵字
export const metadata: Metadata = {
  title: '兒童長高營養指南 - 客製化飲食建議與食譜 | 新竹宸新復健科',
  description: '由林羿辰醫師親自設計的生長計算機。針對 1-18 歲兒童，依據衛福部 DRIs 提供蛋白質、鈣質精準攝取建議，並附上醫師推薦的長高食譜與轉骨營養知識。',
  keywords: ['兒童長高', '骨齡', '轉骨湯', '長高食譜', '兒童營養計算', '新竹復健科', '林羿辰醫師', '性早熟飲食'],
  openGraph: {
    title: '兒童長高吃什麼？林醫師的客製化營養指南',
    description: '輸入年齡與性別，立即獲得專屬的蛋白質與鈣質攝取目標，還有美味的長高食譜喔！',
    url: 'https://www.dryichen.com.tw/weight-bone/nutrition', // 請換成實際網址
    siteName: '新竹宸新復健科診所',
    locale: 'zh_TW',
    type: 'website',
    // images: [{ url: '/og-nutrition.webp', width: 1200, height: 630 }], // 建議加上一張預覽圖
  },
};

export default function NutritionPage() {
  // 2. 建構 SEO 結構化資料 (JSON-LD)
  // 這裡專注於「網頁本身」、「醫師權威」與「醫療機構」的連結
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": "https://www.dryichen.com.tw/weight-bone/nutrition/#webpage", // 請換成實際網址
        "name": "兒童長高營養指南 - 客製化飲食建議與食譜",
        "description": "林羿辰醫師針對兒童生長發育設計的營養計算工具與衛教指南。",
        "audience": {
          "@type": "Patient",
          "audienceType": "Parents",
          "healthCondition": {
            "@type": "MedicalCondition",
            "name": "Child Development"
          }
        },
        "author": {
          "@type": "Physician",
          "name": "林羿辰醫師",
          "jobTitle": "復健科醫師",
          "affiliation": {
            "@type": "MedicalOrganization",
            "name": "新竹宸新復健科診所",
            "url": "https://www.forcestar.com.tw/clinic/%E6%96%B0%E7%AB%B9%E7%AB%B9%E7%A7%91%E5%AE%B8%E6%96%B0%E5%BE%A9%E5%81%A5%E7%A7%91%E8%A8%BA%E6%89%80/c/jvAUv7dDKT/" // 或診所官網首頁
          }
        },
        "publisher": {
          "@type": "MedicalOrganization",
          "name": "新竹宸新復健科診所",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.dryichen.com.tw/icon.webp" // 請換成實際 Logo 網址
          }
        },
        "isPartOf": {
          "@type": "WebSite",
          "name": "新竹宸新復健科 - 減重與骨齡門診",
          "url": "https://www.dryichen.com.tw/"
        }
      },
      {
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
            "name": "長高營養指南",
            "item": "https://www.dryichen.com.tw/weight-bone/nutrition"
          }
        ]
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
          {/* 返回按鈕：增加 aria-label 輔助閱讀 */}
          <div className="max-w-4xl mx-auto mb-6">
            <a 
              href="/weight-bone" 
              className="text-cyan-400 hover:text-white flex items-center gap-2 w-fit transition-colors"
              aria-label="返回減重與骨齡門診頁面"
            >
              <i className="fa-solid fa-arrow-left" aria-hidden="true"></i> 返回減重與骨齡門診
            </a>
          </div>
          
          <GrowthNutritionCalculator />
        </div>
      </main>
    </div>
  );
}