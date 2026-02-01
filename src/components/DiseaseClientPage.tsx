'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ShareButtons from '@/components/ShareButtons';
import RichTextRenderer from '@/components/RichTextRenderer';

interface Props {
  disease: any;
  params: { category: string; slug: string };
  qrCodeApiUrl: string;
  currentPageUrl: string;
  matchedCases: any[];
}

export default function DiseaseClientPage({ disease, params, qrCodeApiUrl, currentPageUrl, matchedCases }: Props) {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .article-content strong { color: #22d3ee !important; font-weight: 700; }
        .article-content a { color: #ec4899 !important; font-weight: 600; text-decoration: none; border-bottom: 1px dashed #ec4899; }
        .article-content a:hover { color: #db2777 !important; border-bottom-style: solid; background: rgba(236, 72, 153, 0.15); }
        
        /* 確保 H2/H3 顏色為純白或亮青，不被 prose 變灰 */
        .article-content h2 { font-size: 1.5rem; font-weight: 700; color: white !important; margin-top: 2.5rem; margin-bottom: 1.5rem; border-left: 4px solid #06b6d4; padding-left: 1rem; }
        .article-content h3 { font-size: 1.25rem; font-weight: 600; color: #67e8f9 !important; margin-top: 2rem; margin-bottom: 1rem; }
        
        .article-content img { max-width: 100%; height: auto; border-radius: 0.75rem; margin: 2rem auto; display: block; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.3); border: 1px solid #475569; }
        @media (min-width: 768px) { .article-content img { max-width: 85%; } }
        
        .article-content ul { list-style-type: disc; padding-left: 1.5rem; margin-bottom: 1.5rem; color: #cbd5e1; }
        .article-content li { margin-bottom: 0.5rem; }
      `}} />

      <div className="min-h-screen flex flex-col bg-slate-900 text-slate-300">
        <main className="flex-grow pt-0 -mt-10 md:-mt-12 pb-12 relative z-10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href={`/diseases/${params.category}`} className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-6 transition-colors group">
              <i className="fa-solid fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i> 返回分類列表
            </Link>

            <div className="bg-slate-800/80 backdrop-blur border border-slate-700 rounded-2xl overflow-hidden shadow-2xl">
              <div className="p-4 md:p-10">
                <div className="mb-10 border-l-4 border-cyan-500 pl-4 bg-gradient-to-r from-slate-900/80 to-transparent py-6 rounded-r-xl flex flex-col md:flex-row md:items-center gap-6">
                  <div className="hidden md:block bg-white p-2 rounded-lg shrink-0 group relative shadow-lg ring-2 ring-slate-700">
                    <Image src={qrCodeApiUrl} alt="QR" width={96} height={96} className="object-contain" priority />
                  </div>
                  <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 tracking-wide">{disease.title}</h1>
                </div>

                {/* 症狀與治療建議 Grid */}
                <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
                  <div className="bg-slate-900/40 p-6 rounded-xl border border-slate-700/80">
                    <h4 className="text-xl font-bold text-pink-400 mb-4 border-b border-slate-700 pb-2 flex items-center"><i className="fa-solid fa-triangle-exclamation mr-3"></i> 常見症狀</h4>
                    <ul className="space-y-3">
                      {disease.symptoms.map((item: string, idx: number) => (
                        <li key={idx} className="flex items-start text-slate-300"><span className="text-pink-500 mr-2 mt-1.5 text-xs">●</span>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-slate-900/40 p-6 rounded-xl border border-slate-700/80">
                    <h4 className="text-xl font-bold text-cyan-400 mb-4 border-b border-slate-700 pb-2 flex items-center"><i className="fa-solid fa-user-doctor mr-3"></i> 治療建議</h4>
                    <ul className="space-y-3">
                      {disease.treatments.map((item: string, idx: number) => (
                        <li key={idx} className="flex items-start text-slate-300"><span className="text-cyan-500 mr-2 mt-1.5 text-xs">●</span><span dangerouslySetInnerHTML={{ __html: item }} /></li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 主文（含圖片） */}
                <div className="article-content text-slate-300 leading-relaxed text-lg mb-10 pb-8 border-b border-slate-700/50">
                  {disease.contentHtml ? <RichTextRenderer content={disease.contentHtml} /> : <p>{disease.description}</p>}
                </div>

                {/* 底部圖片展示區（修復消失的問題） */}
                {disease.images && disease.images.length > 0 && (
                  <div className="space-y-8 mb-14">
                    {disease.images.map((img: any, idx: number) => (
                      <div key={idx} className="text-center group">
                        <div className="relative overflow-hidden rounded-xl shadow-xl inline-block w-full md:w-[85%] border border-slate-700 bg-slate-900">
                          <Image src={img.src} alt={img.alt || disease.title} width={1200} height={800} className="w-full h-auto transform group-hover:scale-[1.02] transition-transform duration-700" sizes="(max-width: 768px) 100vw, 85vw" />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* 成功案例連結 */}
              {matchedCases.length > 0 && (
                <div className="px-4 md:p-10 pt-0">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center"><i className="fa-solid fa-file-medical text-cyan-400 mr-3"></i>相關治療案例</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {matchedCases.map(item => (
                      <Link key={item.id} href={`/about/cases/${item.id}`} className="bg-slate-900/50 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500 transition-all group">
                        <div className="relative h-40 w-full">
                          <Image src={item.coverImage} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform" />
                        </div>
                        <div className="p-3 text-sm font-bold text-slate-200">{item.title}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-slate-900/80 p-8 border-t border-slate-700 text-center">
                <ShareButtons url={currentPageUrl} title={disease.title} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}