// src/app/weight-bone/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import { weightLossPrograms } from '@/data/weightLoss'

// ==========================================
// 1. Meta 設定 (針對指定關鍵字優化)
// ==========================================
export const metadata: Metadata = {
  title: '新竹減重與骨齡門診 - 猛健樂/瘦瘦針/生長遲緩/性早熟評估 | 宸新復健科',
  description: '新竹宸新復健科提供專業體重管理與兒童生長發育評估。林羿辰醫師親自規劃猛健樂(Mounjaro)、週纖達(Ozempic)等瘦瘦針療程，並提供兒童骨齡X光檢查，針對性早熟與生長遲緩問題提供專業建議。',
  keywords: ['新竹減重', '新竹猛健樂', '瘦瘦針', '新竹照骨齡', '生長遲緩', '性早熟', '週纖達', '兒童長高'],
}

// ==========================================
// 2. Schema 結構化資料
// ==========================================
const weightBoneSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '首頁', item: 'https://dryichen-4ze1.vercel.app/' },
        { '@type': 'ListItem', position: 2, name: '減重與骨齡', item: 'https://dryichen-4ze1.vercel.app/weight-bone' },
      ],
    },
    // 醫療網頁標記
    {
      '@type': 'MedicalWebPage',
      'name': '減重與骨齡門診',
      'description': '提供新竹地區專業減重、瘦瘦針治療與兒童骨齡評估服務。',
      'lastReviewed': '2026-01-11',
      'reviewedBy': {
        '@type': 'Physician',
        'name': '林羿辰 醫師',
        'url': 'https://dryichen-4ze1.vercel.app/about/doctors'
      },
      'specialty': [
        { '@type': 'MedicalSpecialty', 'name': 'Weight Loss Management' },
        { '@type': 'MedicalSpecialty', 'name': 'Pediatric Growth Assessment' }
      ]
    }
  ]
}

export default function WeightLossPage() {
  return (
    <>
      <JsonLd data={weightBoneSchema} />

      <div className="min-h-screen flex flex-col bg-slate-900 text-slate-300">
        
        <main className="flex-grow py-12 md:py-16 fade-in">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* 標題區 */}
            <div className="flex items-center gap-3 mb-6 pl-2">
                <span className="bg-cyan-500/20 text-cyan-400 p-3 rounded-lg border border-cyan-500/30">
                    <i className="fa-solid fa-weight-scale text-xl"></i>
                </span>
                <h1 className="text-3xl font-bold font-sans text-white">
                    減重與骨齡門診 <span className="text-slate-500 text-lg font-normal ml-2">Weight & Bone</span>
                </h1>
            </div>

            {/* SEO 導言區 (原生 Details 收合設計) */}
            <div className="mb-10 pl-2 max-w-4xl">
                <details className="group">
                    {/* Summary: 永遠顯示的第一段 */}
                    <summary className="list-none text-lg text-slate-400 leading-relaxed outline-none cursor-pointer select-none">
                        <span className="inline-block border-l-4 border-cyan-500 pl-4 h-full">
                           宸新復健科位於<strong className="text-cyan-400 font-normal">新竹科學園區</strong>附近，由林羿辰醫師親自主持。
                           
                           {/* 展開提示文字 */}
                           <span className="group-open:hidden">
                               ... 
                               <span className="ml-1 text-sm text-cyan-500 hover:text-cyan-400 hover:underline underline-offset-4 font-semibold">
                                 了解更多 <i className="fa-solid fa-chevron-down text-xs"></i>
                               </span>
                           </span>
                        </span>
                    </summary>
                    
                    {/* 展開後的詳細內容 (SEO 關鍵字寶庫) */}
                    <div className="mt-2 text-lg text-slate-400 leading-relaxed pl-5 animate-in fade-in slide-in-from-top-1 duration-300">
                        <p className="mb-4">
                            我們提供科學化的<strong className="text-cyan-400 font-normal">新竹減重</strong>療程，引進雙重腸泌素<strong className="text-cyan-400 font-normal">猛健樂 (Mounjaro)</strong> 與常見的<strong className="text-cyan-400 font-normal">瘦瘦針</strong> (週纖達)，協助您有效控制體重。
                        </p>
                        <p>
                            針對兒童發育，我們提供專業的<strong className="text-cyan-400 font-normal">新竹照骨齡</strong> X光檢查，精準評估<strong className="text-cyan-400 font-normal">生長遲緩</strong>與<strong className="text-cyan-400 font-normal">性早熟</strong>風險，把握孩子黃金成長期。
                        </p>
                    </div>
                </details>
            </div>
            
            {/* 卡片列表 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {weightLossPrograms.map((program) => (
                <Link
                  key={program.slug}
                  href={`/weight-bone/${program.slug}`}
                  // 套用統一的卡片樣式：半透明背景 + 霓虹邊框 + 懸浮上移
                  className="bg-slate-800/50 backdrop-blur border border-slate-700 p-6 rounded-xl hover:border-cyan-500/50 transition-all hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] group hover:-translate-y-1 cursor-pointer flex flex-col"
                >
                  <h2 className="text-xl font-bold text-cyan-400 mb-3 group-hover:text-cyan-300 transition-colors">
                    {program.title}
                  </h2>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed flex-grow">
                    {program.description}
                  </p>
                  
                  {/* 特色標籤 */}
                  {program.features && program.features.length > 0 && (
                    <div className="bg-slate-900/50 p-3 rounded border-l-2 border-green-500 mt-auto">
                      <h3 className="font-semibold text-slate-200 mb-1 text-sm">特色：</h3>
                      <ul className="text-sm text-slate-400 space-y-1">
                        {program.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-start">
                             <span className="text-green-500 mr-2 text-xs">●</span> {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-4 text-right">
                      <span className="text-xs text-cyan-500 group-hover:underline decoration-cyan-500/50 underline-offset-4">
                        了解更多 →
                      </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* 3. 醫師的話 / 治療理念 (E-E-A-T 強化) */}
            <div className="bg-slate-800/80 rounded-2xl p-8 border border-slate-700 relative overflow-hidden">
                {/* 裝飾背景 */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-full bg-slate-700 flex items-center justify-center border-2 border-cyan-500/50">
                             <i className="fa-solid fa-user-doctor text-3xl text-cyan-400"></i>
                        </div>
                    </div>
                    
                    <div className="flex-grow">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            醫師治療理念與叮嚀
                        </h3>
                        <div className="space-y-4 text-slate-300 leading-relaxed">
                            <p>
                                體重控制不僅僅是為了外觀，更是為了長遠的健康。市面上的減重藥物（如<span className="text-cyan-400">瘦瘦針、猛健樂</span>）雖然效果顯著，但它們屬於<strong>醫療處方藥品</strong>，必須在專業醫師的評估下使用，以避免副作用並確保療效。
                            </p>
                            <p>
                                同樣地，兒童的生長發育只有一次。透過<span className="text-cyan-400">骨齡檢測</span>，我們能客觀判斷孩子的生長潛力。無論是性早熟的治療或生長遲緩的介入，都需要精準的醫療判斷，而非盲目補充營養品。
                            </p>
                        </div>
                        
                        <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg flex gap-3">
                            <i className="fa-solid fa-triangle-exclamation text-yellow-500 mt-1"></i>
                            <p className="text-sm text-yellow-200/80">
                                <strong>特別提醒：</strong>所有醫療行為皆有個別差異，治療效果因人而異。請務必親自蒞臨診所，由醫師進行完整評估與診斷。
                            </p>
                        </div>
                    </div>
                </div>
            </div>

          </div>
        </main>
      </div>
    </>
  )
}