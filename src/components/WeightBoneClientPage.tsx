'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ShareButtons from '@/components/ShareButtons';
import RichTextRenderer from '@/components/RichTextRenderer';

interface WeightBoneClientPageProps {
  program: any;
  slug: string;
  qrCodeApiUrl: string;
  currentPageUrl: string;
}

export default function WeightBoneClientPage({ program, slug, qrCodeApiUrl, currentPageUrl }: WeightBoneClientPageProps) {
  return (
    <>
      {/* 完整保留原本的所有自定義 CSS */}
      <style dangerouslySetInnerHTML={{__html: `
        .article-content strong { color: #22d3ee !important; font-weight: 700; }
        .article-content a { color: #ec4899 !important; font-weight: 600; text-decoration: none; border-bottom: 1px dashed #ec4899; transition: all 0.2s ease; }
        .article-content a:hover { color: #db2777 !important; border-bottom-style: solid; }
        .article-content h3 { font-size: 1.5rem; font-weight: 700; color: white; margin-top: 2.5rem; margin-bottom: 1.25rem; display: flex; align-items: center; }
        .article-content h3::before { content: ''; display: inline-block; width: 6px; height: 24px; background-color: #06b6d4; margin-right: 12px; border-radius: 2px; }
        .article-content img { max-width: 100%; height: auto; border-radius: 0.75rem; margin: 2rem auto; display: block; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3); border: 1px solid #475569; }
        @media (min-width: 768px) { .article-content img { max-width: 85%; } }
        .article-content ul { list-style-type: disc; padding-left: 1.5rem; margin-bottom: 1.5rem; color: #cbd5e1; }
        .article-content li { margin-bottom: 0.5rem; }
      `}} />

      <div className="min-h-screen flex flex-col bg-slate-900 text-slate-300">
        <main className="flex-grow pt-0 -mt-10 md:-mt-12 pb-12 fade-in relative z-10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

            <Link href="/weight-bone" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-6 transition-colors group">
              <i className="fa-solid fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i> 
              返回列表
            </Link>
            
            <div className="bg-slate-800/80 backdrop-blur border border-slate-700 rounded-2xl overflow-hidden shadow-2xl">
              <div className="p-4 md:p-10">

                {/* Header 區塊 */}
                <div className="mb-3 md:mb-6 border-l-4 border-cyan-500 pl-4 bg-gradient-to-r from-slate-900/80 to-transparent py-6 rounded-r-xl flex flex-col md:flex-row md:items-center gap-6">
                  <div className="hidden md:block bg-white p-2 rounded-lg shrink-0 group relative shadow-lg ring-2 ring-slate-700">
                    <Image width={96} height={96} className="object-contain" src={qrCodeApiUrl} alt={`掃描預約 ${program.title}`} priority />
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-max bg-slate-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-slate-600">
                      掃描帶走資訊
                    </div>
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-5xl font-bold font-sans text-white mb-3 tracking-wide leading-tight">{program.title}</h1>
                    {program.subtitle && <h2 className="text-xl text-cyan-400 font-medium tracking-wide">{program.subtitle}</h2>}
                  </div>
                </div>

                {/* 完整保留小工具按鈕與漸層樣式 */}
                <div className="mb-4 md:mb-8 flex flex-wrap gap-4">
                  {['mounjaro', 'Wegovy'].includes(slug) && (
                    <Link href="/weight-bone/BMI" className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full text-white font-bold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-1 transition-all duration-300">
                      <span className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      <i className="fa-solid fa-calculator text-lg group-hover:animate-pulse"></i>
                      <span>減重自我評估</span>
                      <i className="fa-solid fa-arrow-right text-sm ml-1 group-hover:translate-x-1 transition-transform"></i>
                    </Link>
                  )}

                  {['bone-age'].includes(slug) && (
                    <>
                      <Link href="/weight-bone/child" className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-teal-500 rounded-full text-white font-bold shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 hover:-translate-y-1 transition-all duration-300">
                        <span className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        <i className="fa-solid fa-chart-line text-lg group-hover:animate-pulse"></i>
                        <span>兒童生長曲線分析</span>
                      </Link>
                      <Link href="/weight-bone/calculator" className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full text-white font-bold shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:-translate-y-1 transition-all duration-300">
                        <span className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        <i className="fa-solid fa-x-ray text-lg group-hover:animate-pulse"></i>
                        <span>骨齡與遺傳身高預測</span>
                      </Link>
                      <Link href="/weight-bone/nutrition" className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-teal-500 rounded-full text-white font-bold shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 hover:-translate-y-1 transition-all duration-300">
                        <span className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        <i className="fa-solid fa-chart-line text-lg group-hover:animate-pulse"></i>
                        <span>兒童長高營養指南</span>
                      </Link>
                    </>
                  )}
                </div>

                {/* 特色與優點 */}
                {(program.whyChooseUs || program.programBenefits) && (
                  <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
                    {program.whyChooseUs && (
                      <div className="bg-slate-900/40 p-6 rounded-xl border border-slate-700/80 h-full hover:border-cyan-500/30 hover:bg-slate-900/60 transition-all duration-300">
                        <h4 className="text-xl font-bold text-cyan-400 mb-4 border-b border-slate-700 pb-2 flex items-center"><i className="fa-solid fa-star mr-3"></i> 我們的特色</h4>
                        <ul className="space-y-3 text-slate-300">
                          {program.whyChooseUs.map((item: string, idx: number) => (
                            <li key={idx} className="flex items-start"><span className="text-cyan-500 mr-2 mt-1.5 text-xs">●</span><span dangerouslySetInnerHTML={{__html: item}} className="leading-relaxed"></span></li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {program.programBenefits && (
                      <div className="bg-slate-900/40 p-6 rounded-xl border border-slate-700/80 h-full hover:border-pink-500/30 hover:bg-slate-900/60 transition-all duration-300">
                        <h4 className="text-xl font-bold text-pink-400 mb-4 border-b border-slate-700 pb-2 flex items-center"><i className={`${program.benefitsIconClass || 'fa-solid fa-thumbs-up'} mr-3`}></i> {program.benefitsTitle || '療程優點'}</h4>
                        <ul className="space-y-3 text-slate-300">
                          {program.programBenefits.map((item: string, idx: number) => (
                            <li key={idx} className="flex items-start"><span className="text-pink-500 mr-2 mt-1.5 text-xs">●</span><span className="leading-relaxed">{item}</span></li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {/* 主文內容 */}
                <div className="article-content text-slate-300 leading-relaxed text-lg mb-10 pb-8 border-b border-slate-700/50">
                  {program.contentHtml ? <RichTextRenderer content={program.contentHtml} /> : <p>{program.description}</p>}
                </div>

                {/* 展示圖片群 */}
                {program.images && program.images.length > 0 && (
                  <div className="space-y-8 mb-14">
                    {program.images.map((img: any, idx: number) => (
                      <div key={idx} className="text-center group">
                        <div className="relative overflow-hidden rounded-xl shadow-xl inline-block w-full md:w-[85%] border border-slate-700 bg-slate-900">
                          <Image 
                            src={img.src} alt={img.alt || program.title} width={1200} height={800}
                            className="w-full h-auto transform group-hover:scale-[1.02] transition-transform duration-700 block"
                            sizes="(max-width: 768px) 100vw, 85vw"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* 完整保留常見問答 (摺疊式) */}
                {program.qaList && program.qaList.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center"><i className="fa-regular fa-circle-question text-cyan-400 mr-3"></i> 常見問答</h3>
                    <div className="space-y-4">
                      {program.qaList.map((qa: any, idx: number) => (
                        <details key={idx} className="group bg-slate-900/30 rounded-xl border border-slate-700 overflow-hidden open:border-cyan-500/50 open:bg-slate-900/60 transition-all duration-300">
                          <summary className="flex items-start justify-between p-5 cursor-pointer list-none hover:bg-slate-800/50 transition-colors">
                            <h4 className="font-bold text-lg text-slate-200 flex items-start group-hover:text-cyan-300 transition-colors">
                              <span className="text-cyan-500 mr-3 font-black mt-0.5">Q{idx + 1}.</span>
                              <span className="leading-relaxed">{qa.question}</span>
                            </h4>
                            <span className="text-slate-500 group-hover:text-cyan-400 group-open:rotate-180 group-open:text-cyan-500 transition-all duration-300 ml-4 mt-1 shrink-0"><i className="fa-solid fa-chevron-down"></i></span>
                          </summary>
                          <div className="px-6 pb-6 pt-0 text-slate-300 leading-relaxed ml-0 md:ml-10">
                            <div className="border-l-2 border-slate-600 pl-4 py-1 text-base md:text-lg animate-in fade-in slide-in-from-top-2">{qa.answer}</div>
                          </div>
                        </details>
                      ))}
                    </div>
                  </div>
                )}
                
              </div>

              {/* 作者資訊 */}
              <div className="mt-0 pt-0 border-t border-slate-700/40 text-right pb-6 pr-6">
                <div className="inline-block text-slate-500 text-sm space-y-1">
                  <p><span className="mr-2">撰文者 :</span><span className="font-medium text-slate-400">復健專科 宸新復健科院長 林羿辰醫師</span></p>
                  <p><span className="mr-2">資料來源 :</span><span className="font-medium text-slate-400">減重與兒童醫學會</span></p>
                </div>
              </div>

              {/* 底部分享 */}
              <div className="bg-slate-900/80 p-8 md:p-12 border-t border-slate-700 text-center relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent blur-sm"></div>
                <h3 className="text-white font-bold text-2xl mb-3 relative z-10">覺得這篇文章有幫助嗎？</h3>
                <p className="text-slate-400 mb-8 text-lg relative z-10">歡迎分享給親朋好友，讓更多人獲得正確的復健知識。</p>
                <div className="relative z-10">
                  <ShareButtons url={currentPageUrl} title={program.title} />
                </div>
                <div className="mt-12 pt-8 border-t border-slate-700/50 relative z-10">
                  <Link href="/weight-bone" className="inline-flex items-center justify-center px-8 py-3.5 text-lg font-bold text-cyan-400 border border-cyan-500/30 rounded-full hover:bg-cyan-500/10 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300 group">
                    看更多相關資訊 <i className="fa-solid fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform"></i>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </main>
      </div>
    </>
  );
}