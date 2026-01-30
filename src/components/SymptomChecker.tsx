'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { diseaseCategories } from '@/data/diseases';

// 定義回傳資料的型別
interface AIResult {
  recommendedIds: string[];
  externalSuggestions?: string[];
}

// 定義要存入 Storage 的資料結構
const STORAGE_KEY = 'ai_symptom_cache';

export default function SymptomChecker() {
  const [input, setInput] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AIResult | null>(null);
  
  const formRef = useRef<HTMLFormElement>(null);

  // ============================================================
  // 💾 新增功能 1：組件載入時，檢查有沒有「暫存結果」
  // ============================================================
  useEffect(() => {
    try {
        const cachedData = sessionStorage.getItem(STORAGE_KEY);
        if (cachedData) {
            const parsed = JSON.parse(cachedData);
            // 只有當暫存裡面真的有結果時，才恢復
            if (parsed.result && (parsed.result.recommendedIds.length > 0 || (parsed.result.externalSuggestions?.length || 0) > 0)) {
                setInput(parsed.input);
                setResult(parsed.result);
                setIsExpanded(true); // 自動展開看結果
            }
        }
    } catch (e) {
        console.error("讀取暫存失敗", e);
    }
  }, []);

  // 點擊外部自動收合
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (formRef.current && !formRef.current.contains(event.target as Node) && !input.trim()) {
        setIsExpanded(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [input]);

  const handleManualSubmit = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setResult(null);
    setIsExpanded(true); 

    try {
      const res = await fetch('/api/ai-triage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ symptom: input }),
      });
      if (!res.ok) throw new Error('API Error');
      const data = await res.json();
      
      setResult(data);

      // ============================================================
      // 💾 新增功能 2：成功拿到結果後，存入 SessionStorage
      // ============================================================
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify({
          input: input,
          result: data
      }));

    } catch (error) {
      setResult({ recommendedIds: [], externalSuggestions: ["伺服器忙線中，請稍後再試"] });
    } finally {
      setLoading(false);
    }
  };

  // 清除結果的函式
  const handleClear = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation(); // 防止觸發 form onClick
    setResult(null); 
    setInput(''); 
    setIsExpanded(false);
    
    // ============================================================
    // 💾 新增功能 3：使用者手動關閉時，清除暫存
    // ============================================================
    sessionStorage.removeItem(STORAGE_KEY);
  };

  // 1. 處理「有連結」的內部文章
  const getRecommendedItems = () => {
    if (!result?.recommendedIds) return [];
    const foundItems: any[] = [];

    result.recommendedIds.forEach(targetId => {
      for (const category of diseaseCategories) {
        const match = category.diseases?.find(d => d.id === targetId || d.slug === targetId);
        if (match) {
          foundItems.push({
            ...match,
            categorySlug: category.slug 
          });
          break;
        }
      }
    });
    return foundItems;
  };

  const internalCards = getRecommendedItems();
  const externalDiagnoses = result?.externalSuggestions || [];
  const hasAnyResult = internalCards.length > 0 || externalDiagnoses.length > 0;

  return (
    <div className="w-full max-w-3xl mx-auto transition-all duration-300">
      
  {/* 輸入區塊 */}
<form 
  ref={formRef}
  onClick={() => {
      setIsExpanded(true);
      const textarea = formRef.current?.querySelector('textarea');
      if (textarea) textarea.focus();
  }}
  onSubmit={(e) => {
      e.preventDefault(); 
      handleManualSubmit();
  }} 
  className={`relative group bg-slate-800 border-2 transition-all duration-300 ease-in-out
    ${isExpanded 
      ? 'rounded-2xl border-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.3)]' 
      : 'rounded-full border-cyan-400/70 shadow-[0_0_10px_rgba(34,211,238,0.2)] hover:border-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]'
    }`}
>
  {/* 修改處：移除了 opacity 的判斷，並加入了 drop-shadow 讓機器人更亮一點 */}
  <div className="absolute left-4 top-4 text-cyan-400 pointer-events-none z-10 drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]">
    <i className={`fa-solid ${loading ? 'fa-spinner fa-spin' : 'fa-robot'} text-xl`}></i>
  </div>

  <textarea
    value={input}
    onFocus={() => setIsExpanded(true)}
    onChange={(e) => setInput(e.target.value)}
    onKeyDown={(e) => {
      if (e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing) {
        e.preventDefault();
        if (!loading && input.trim()) {
          handleManualSubmit();
        }
      }
    }}
    placeholder={isExpanded ? "請清楚輸入症狀（例如：膝蓋內側疼痛，跑步時候加劇）..." : "AI 症狀分析 (點擊輸入)"}
    
    className={`w-full bg-transparent text-slate-200 placeholder-slate-400 focus:outline-none resize-none py-4 pl-12 leading-relaxed transition-all duration-300 relative z-0
      ${isExpanded 
          ? 'h-40 pr-4 pb-14 overflow-y-auto whitespace-pre-wrap'
          : 'h-14 pr-12 overflow-hidden whitespace-nowrap'
      }`}
  />

  <div className={`absolute right-2 z-20 transition-all duration-300 
      ${isExpanded ? 'bottom-3 right-3' : 'top-2'}`}
  >
      <button
      type="button" 
      onClick={(e) => {
          e.stopPropagation(); 
          handleManualSubmit(); 
      }}
      disabled={loading || !input.trim()}
      className={`bg-cyan-600 hover:bg-cyan-500 text-white font-medium transition-all flex items-center justify-center shadow-lg
          ${isExpanded ? 'px-6 py-2 rounded-lg text-sm' : 'w-10 h-10 rounded-full'}`}
      >
      {isExpanded ? (
        <>分析 <i className="fa-solid fa-paper-plane ml-2"></i></>
      ) : (
        <i className="fa-solid fa-magnifying-glass"></i>
      )}
      </button>
  </div>
</form>
      {/* 結果顯示區 */}
      {result && (
        <div className="mt-6 animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-6 relative">
             {/* 這裡改用 handleClear 來清除暫存 */}
             <button onClick={handleClear} className="absolute top-4 right-4 text-slate-500 hover:text-white">
                <i className="fa-solid fa-xmark"></i>
             </button>

            <div className="mb-6 border-b border-slate-700/50 pb-4">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3">
                    <h3 className="text-cyan-400 font-bold text-xl flex items-center shrink-0">
                        <i className="fa-solid fa-clipboard-check mr-2"></i>
                        AI初步診斷
                    </h3>
                    <div className="text-slate-400 text-sm font-normal bg-slate-900/40 px-3 py-1.5 rounded-lg border border-slate-700/50 inline-block w-fit">
                        (⚠️ 僅供參考，請務必由醫師親自評估。)
                    </div>
                </div>
            </div>

            {hasAnyResult ? (
                <div className="flex flex-col gap-3">
                    
                    {internalCards.map((item) => (
                    <Link 
                        key={item.id} 
                        href={`/diseases/${item.categorySlug}/${item.slug || item.id}`} 
                        className="flex items-center justify-between bg-slate-900/60 hover:bg-slate-700 p-5 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all group"
                    >
                        <div className="flex-grow min-w-0 mr-4">
                            <h4 className="text-slate-200 text-xl font-bold truncate group-hover:text-cyan-400 flex items-center">
                              <i className="fa-solid fa-file-medical text-slate-500 mr-3 group-hover:text-cyan-400 text-lg"></i>
                              {item.title}
                            </h4>
                        </div>
                        <div className="flex-shrink-0">
                            <span className="text-sm font-medium text-cyan-500 flex items-center bg-cyan-500/10 px-4 py-2 rounded-lg group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                              閱讀全文 <i className="fa-solid fa-arrow-right ml-2 text-xs"></i>
                            </span>
                        </div>
                    </Link>
                    ))}

                    {externalDiagnoses.map((diseaseName, index) => (
                        <div 
                            key={`ext-${index}`}
                            className="flex items-center justify-between bg-slate-800/40 p-5 rounded-xl border border-dashed border-slate-600 cursor-default"
                        >
                            <div className="flex-grow min-w-0">
                                <h4 className="text-slate-300 text-xl font-bold flex items-center">
                                  <i className="fa-solid fa-circle-exclamation text-amber-500/80 mr-3 text-lg"></i>
                                  {diseaseName}
                                  <span className="ml-3 text-xs text-slate-500 font-normal bg-slate-700/50 px-2 py-1 rounded">
                                    {diseaseName.includes('忙線') ? '請稍後' : '本站尚無文章'}
                                  </span>
                                </h4>
                            </div>
                        </div>
                    ))}

                </div>
            ) : (
                <div className="text-center py-4 text-slate-500">
                    <p>AI 暫時無法判定您的症狀，建議直接諮詢醫師。</p>
                </div>
            )}
            
          </div>
        </div>
      )}
    </div>
  );
}