'use client';

import React, { useState } from 'react';

// =====================================================================
// 台灣兒童生長常模數據庫 (Taiwan 2010 Growth Standards)
// 來源: Chen W & Chang MH. Pediatr Neonatol 2010
// 數據結構: Age: { mean: 身高中位數, sd: 標準差 }
// =====================================================================

type GrowthParams = { mean: number; sd: number };
type GrowthData = { [age: number]: GrowthParams };

// 男生身高常模 (2-18歲)
const DATA_BOY: GrowthData = {
  2: { mean: 87.8, sd: 3.2 },
  3: { mean: 96.1, sd: 3.7 },
  4: { mean: 103.3, sd: 4.1 },
  5: { mean: 110.0, sd: 4.5 },
  6: { mean: 116.0, sd: 4.9 },
  7: { mean: 121.7, sd: 5.3 },
  8: { mean: 127.3, sd: 5.7 },
  9: { mean: 132.6, sd: 6.1 },
  10: { mean: 137.8, sd: 6.5 },
  11: { mean: 143.5, sd: 7.1 }, // 青春期衝刺
  12: { mean: 149.8, sd: 7.8 },
  13: { mean: 157.5, sd: 8.2 }, // 生長高峰
  14: { mean: 164.5, sd: 7.8 },
  15: { mean: 169.5, sd: 6.8 },
  16: { mean: 172.0, sd: 6.0 },
  17: { mean: 173.0, sd: 5.6 },
  18: { mean: 173.5, sd: 5.5 }  // 成年預估值
};

// 女生身高常模 (2-18歲)
const DATA_GIRL: GrowthData = {
  2: { mean: 86.4, sd: 3.2 },
  3: { mean: 95.1, sd: 3.6 },
  4: { mean: 102.7, sd: 4.0 },
  5: { mean: 109.4, sd: 4.4 },
  6: { mean: 115.1, sd: 4.8 },
  7: { mean: 120.8, sd: 5.2 },
  8: { mean: 126.6, sd: 5.6 },
  9: { mean: 132.5, sd: 6.0 },
  10: { mean: 138.8, sd: 6.6 }, // 青春期較早
  11: { mean: 145.5, sd: 7.0 },
  12: { mean: 151.5, sd: 6.5 },
  13: { mean: 155.8, sd: 5.8 },
  14: { mean: 158.2, sd: 5.4 },
  15: { mean: 159.5, sd: 5.1 },
  16: { mean: 160.2, sd: 5.0 },
  17: { mean: 160.6, sd: 4.9 },
  18: { mean: 160.8, sd: 4.9 }  // 成年預估值
};

type Gender = 'boy' | 'girl';

export default function BoneAgeCalculator() {
  // 輸入狀態
  const [gender, setGender] = useState<Gender>('boy');
  const [height, setHeight] = useState<string>('');
  const [boneAge, setBoneAge] = useState<string>('');
  const [fatherHeight, setFatherHeight] = useState<string>('');
  const [motherHeight, setMotherHeight] = useState<string>('');

  // 計算結果狀態
  const [result, setResult] = useState<{
    targetHeight: number;
    targetMin: number;
    targetMax: number;
    predictedHeight: number;
    currentPercentile: number; // 目前骨齡對應的身高百分位
    positionInRange: number; // UI 顯示用
  } | null>(null);

  // 線性內插函式：取得特定年齡(小數點)的 Mean 與 SD
  const getInterpolatedParams = (age: number, data: GrowthData): GrowthParams => {
    const ages = Object.keys(data).map(Number).sort((a, b) => a - b);
    
    // 邊界處理
    if (age <= ages[0]) return data[ages[0]];
    if (age >= ages[ages.length - 1]) return data[ages[ages.length - 1]];

    // 找到區間 [lower, upper]
    let lower = ages[0];
    let upper = ages[ages.length - 1];
    
    for (let i = 0; i < ages.length - 1; i++) {
      if (age >= ages[i] && age <= ages[i+1]) {
        lower = ages[i];
        upper = ages[i+1];
        break;
      }
    }

    const ratio = (age - lower) / (upper - lower);
    const mean = data[lower].mean + (data[upper].mean - data[lower].mean) * ratio;
    const sd = data[lower].sd + (data[upper].sd - data[lower].sd) * ratio;

    return { mean, sd };
  };

  // Z-Score 轉 百分位 (近似值)
  const zScoreToPercentile = (z: number) => {
    if (z < -3) return 0.1;
    if (z > 3) return 99.9;
    return Math.round((1 / (1 + Math.exp(-1.7 * z))) * 100);
  };

  const calculate = () => {
    const h = parseFloat(height);
    const ba = parseFloat(boneAge);
    const fh = parseFloat(fatherHeight);
    const mh = parseFloat(motherHeight);

    if (!h || !ba || !fh || !mh) {
      alert('請填寫完整資訊以進行計算');
      return;
    }

    // 1. 計算遺傳身高 (Target Height)
    let targetH = 0;
    if (gender === 'boy') {
      targetH = (fh + mh + 12) / 2;
    } else {
      targetH = (fh + mh - 12) / 2;
    }

    // 2. 預測身高 (骨齡法)
    const db = gender === 'boy' ? DATA_BOY : DATA_GIRL;
    
    // A. 取得「骨齡」當下的常模數據 (內插法)
    const currentParams = getInterpolatedParams(ba, db);
    
    // B. 計算目前的 Z-Score (標準差分數) -> 這代表孩子在同骨齡人中的相對位置
    // Z = (目前身高 - 常模平均) / 常模標準差
    const zScore = (h - currentParams.mean) / currentParams.sd;

    // C. 取得「18歲」的常模數據
    const adultParams = db[18];

    // D. 預測成年身高 = 18歲平均 + (目前的 Z-Score * 18歲標準差)
    // 這裡運用了「軌跡現象」(Tracking)，假設孩子會沿著同一條生長曲線長大
    const predH = adultParams.mean + (zScore * adultParams.sd);

    // E. 計算百分位與 UI 位置
    const p = zScoreToPercentile(zScore);

    // 計算預測身高在遺傳區間的位置 (用於 UI 顯示)
    const min = targetH - 7.5;
    const max = targetH + 7.5;
    let pos = ((predH - min) / (max - min)) * 100;
    
    // UI 顯示限制 (避免跑到外面去)
    if (pos < 5) pos = 5;
    if (pos > 95) pos = 95;

    setResult({
      targetHeight: parseFloat(targetH.toFixed(1)),
      targetMin: parseFloat(min.toFixed(1)),
      targetMax: parseFloat(max.toFixed(1)),
      predictedHeight: parseFloat(predH.toFixed(1)),
      currentPercentile: p,
      positionInRange: pos
    });
  };

  return (
    <div className="max-w-5xl mx-auto p-6 md:p-10 bg-slate-800 rounded-3xl shadow-2xl border border-slate-700 my-10 font-sans text-slate-100">
      
      {/* 標題區 */}
      <div className="mb-10 border-l-8 border-[#22d3ee] pl-6 flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">
            骨齡與遺傳身高預測
          </h2>
          <p className="text-slate-400 text-lg">
            採用台灣最新兒童生長常模，透過骨齡大數據精準推算成年身高
          </p>
        </div>
        <div className="hidden md:block text-slate-500 text-xs text-right opacity-60">
            Based on Chen W & Chang MH<br/>Pediatr Neonatol 2010
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-10">
        
        {/* 左側：輸入面板 */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* 性別切換 */}
          <div className="bg-slate-700 p-2 rounded-2xl flex relative border border-slate-600">
            <button
              onClick={() => setGender('boy')}
              className={`flex-1 py-3 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                gender === 'boy'
                  ? 'bg-[#0ea5e9]/20 text-[#38bdf8] border-2 border-[#0ea5e9]/50 shadow-md scale-[1.02]'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-600 border-2 border-transparent'
              }`}
            >
              <span className="text-2xl">👦</span> 男孩
            </button>
            <button
              onClick={() => setGender('girl')}
              className={`flex-1 py-3 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                gender === 'girl'
                  ? 'bg-[#ec4899]/20 text-[#f472b6] border-2 border-[#ec4899]/50 shadow-md scale-[1.02]'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-600 border-2 border-transparent'
              }`}
            >
              <span className="text-2xl">👧</span> 女孩
            </button>
          </div>

          <div className="space-y-5">
            <h3 className="text-[#22d3ee] font-bold border-b border-slate-700 pb-2 mb-4">
              Step 1. 骨齡數據
            </h3>
            
            <div className="grid grid-cols-2 gap-5">
              <div className="group">
                <label className="block text-sm font-bold text-slate-300 mb-2 group-focus-within:text-[#22d3ee] transition-colors">目前身高 (cm)</label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="如: 145"
                  className="w-full p-4 rounded-xl bg-slate-700 border border-slate-600 focus:bg-slate-600 focus:ring-2 focus:ring-[#22d3ee] focus:border-transparent outline-none transition-all font-bold text-white text-lg"
                />
              </div>
              <div className="group">
                <label className="block text-sm font-bold text-slate-300 mb-2 group-focus-within:text-[#22d3ee] transition-colors">
                  骨齡 (歲)
                  <span className="text-xs font-normal text-slate-500 ml-1 block sm:inline">醫師判讀</span>
                </label>
                <input
                  type="number"
                  step="0.5"
                  value={boneAge}
                  onChange={(e) => setBoneAge(e.target.value)}
                  placeholder="如: 11.5"
                  className="w-full p-4 rounded-xl bg-slate-700 border border-slate-600 focus:bg-slate-600 focus:ring-2 focus:ring-[#22d3ee] focus:border-transparent outline-none transition-all font-bold text-white text-lg"
                />
              </div>
            </div>

            <h3 className="text-[#22d3ee] font-bold border-b border-slate-700 pb-2 pt-4 mb-4">
              Step 2. 父母身高
            </h3>

            <div className="grid grid-cols-2 gap-5">
              <div className="group">
                <label className="block text-sm font-bold text-slate-300 mb-2 group-focus-within:text-[#22d3ee] transition-colors">父親身高 (cm)</label>
                <input
                  type="number"
                  value={fatherHeight}
                  onChange={(e) => setFatherHeight(e.target.value)}
                  placeholder="如: 175"
                  className="w-full p-4 rounded-xl bg-slate-700 border border-slate-600 focus:bg-slate-600 focus:ring-2 focus:ring-[#22d3ee] focus:border-transparent outline-none transition-all font-bold text-white text-lg"
                />
              </div>
              <div className="group">
                <label className="block text-sm font-bold text-slate-300 mb-2 group-focus-within:text-[#22d3ee] transition-colors">母親身高 (cm)</label>
                <input
                  type="number"
                  value={motherHeight}
                  onChange={(e) => setMotherHeight(e.target.value)}
                  placeholder="如: 160"
                  className="w-full p-4 rounded-xl bg-slate-700 border border-slate-600 focus:bg-slate-600 focus:ring-2 focus:ring-[#22d3ee] focus:border-transparent outline-none transition-all font-bold text-white text-lg"
                />
              </div>
            </div>
          </div>

          <button
            onClick={calculate}
            className="w-full py-4 mt-4 bg-gradient-to-r from-[#0891b2] to-[#22d3ee] hover:from-[#0e7490] hover:to-[#0891b2] text-white font-bold rounded-2xl shadow-lg shadow-cyan-500/30 transform active:scale-[0.98] transition-all text-xl flex items-center justify-center gap-2"
          >
            <span>🚀</span> 開始分析預測
          </button>
        </div>

        {/* 右側：結果顯示區 */}
        <div className="lg:col-span-7">
          <div className="h-full bg-slate-800/50 rounded-3xl p-6 md:p-8 border border-slate-700 relative overflow-hidden flex flex-col justify-center">
            
            {!result ? (
              <div className="text-center text-slate-400 py-12 flex flex-col items-center">
                <div className="w-24 h-24 bg-slate-700 rounded-full flex items-center justify-center mb-6 shadow-sm border border-slate-600">
                  <span className="text-4xl opacity-50">🦴</span>
                </div>
                <h3 className="text-xl font-bold text-slate-300 mb-2">等待數據輸入</h3>
                <p className="max-w-xs mx-auto text-sm opacity-70">
                    系統將比對台灣常模資料庫，根據骨齡落點推算成年身高。
                </p>
              </div>
            ) : (
              <div className="space-y-8 animate-fadeIn z-10 relative">
                
                {/* 1. 主要數字卡片 */}
                <div className="bg-slate-700 rounded-2xl p-6 shadow-lg border-l-4 border-[#22d3ee] flex flex-col md:flex-row justify-between items-center gap-6">
                  <div>
                    <p className="text-slate-300 font-bold mb-1">骨齡法預測成年身高</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-6xl font-black text-[#22d3ee] tracking-tighter">
                        {result.predictedHeight}
                      </span>
                      <span className="text-2xl font-bold text-slate-400">cm</span>
                    </div>
                  </div>
                  <div className="bg-slate-800 rounded-xl p-4 text-center min-w-[140px] border border-slate-600">
                    <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">目前生長落點</p>
                    <div className="text-2xl font-bold text-white">PR {result.currentPercentile}</div>
                    <p className="text-[10px] text-slate-500">依骨齡 {boneAge} 歲常模</p>
                  </div>
                </div>

                {/* 2. 視覺化遺傳區間圖表 */}
                <div className="bg-slate-700 rounded-2xl p-6 shadow-sm border border-slate-600">
                  <div className="flex justify-between items-end mb-4">
                    <h4 className="font-bold text-slate-200">遺傳身高 vs 骨齡預測</h4>
                    <span className="text-sm font-medium text-[#22d3ee]">
                        遺傳區間: {result.targetMin} ~ {result.targetMax} cm
                    </span>
                  </div>
                  
                  {/* 圖表軌道 */}
                  <div className="relative h-12 bg-slate-800 rounded-full w-full mt-2 border border-slate-600 overflow-hidden">
                    {/* 遺傳範圍 (深綠色透明背景) */}
                    <div className="absolute top-0 bottom-0 left-[20%] right-[20%] bg-teal-900/50 border-x-2 border-teal-700/50 flex items-center justify-center">
                        <span className="text-xs font-bold text-teal-300 hidden md:block">遺傳潛力</span>
                    </div>
                    
                    {/* 遺傳中位數標記 */}
                    <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-slate-600 border-dashed border-l border-slate-500"></div>

                    {/* 預測落點指標 (動態位置) */}
                    <div 
                        className="absolute top-1/2 -translate-y-1/2 transition-all duration-1000 ease-out flex flex-col items-center z-20"
                        style={{ left: `${result.positionInRange}%` }}
                    >
                        <div className="w-4 h-4 bg-[#f59e0b] border-2 border-slate-800 rounded-full shadow-md z-10 relative">
                            <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                        </div>
                        <div className="mt-1 px-2 py-0.5 bg-[#f59e0b] text-white text-[10px] font-bold rounded-full whitespace-nowrap shadow-sm">
                            預測 {result.predictedHeight}
                        </div>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-slate-400 mt-2 font-medium px-2">
                    <span>偏低</span>
                    <span>遺傳中位數 {result.targetHeight}</span>
                    <span>偏高</span>
                  </div>
                </div>

                {/* 3. 醫師評估 */}
                <div className="bg-[#fffbeb] border-2 border-[#fbbf24] rounded-2xl p-6 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2)]">
                  <h4 className="text-[#b45309] font-bold text-lg mb-3 flex items-center">
                    <span className="bg-[#f59e0b] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2 shadow-sm">!</span>
                    醫師初步評估
                  </h4>
                  <div className="text-[#78350f] leading-relaxed font-medium space-y-2">
                    <p>根據父母身高計算，孩子的<strong>遺傳目標身高</strong>約為 <strong>{result.targetHeight} cm</strong>。</p>
                    
                    {result.predictedHeight < result.targetMin ? (
                      <p className="font-bold text-red-700 bg-red-100 p-3 rounded-xl border border-red-200">
                        ⚠️ <strong>生長落後警訊：</strong> 目前依骨齡推算的預測身高 ({result.predictedHeight} cm) 明顯低於遺傳潛力。這可能與營養吸收、生長激素不足或性早熟導致骨齡超前有關，建議務必回診評估。
                      </p>
                    ) : result.predictedHeight > result.targetMax ? (
                      <p className="font-bold text-green-800 bg-green-100 p-3 rounded-xl border border-green-200">
                        🎉 <strong>發育表現優異：</strong> 預測身高 ({result.predictedHeight} cm) 超越了遺傳預期！這顯示後天的營養、睡眠與運動發揮了極佳的效果，請繼續保持。
                      </p>
                    ) : (
                      <p className="font-bold text-[#0e7490] bg-cyan-100 p-3 rounded-xl border border-cyan-200">
                        ✅ <strong>發育狀況正常：</strong> 預測身高 ({result.predictedHeight} cm) 符合遺傳潛力範圍，表示生長軌道穩定。請持續定期追蹤骨齡，確保不脫軌。
                      </p>
                    )}
                  </div>
                </div>

                <p className="text-center text-xs text-slate-500">
                  * 預測結果基於統計學常模，實際身高仍受後天環境、青春期啟動時間等因素影響。
                </p>

              </div>
            )}
            
            {/* 背景裝飾 */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-cyan-900/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute top-10 -left-10 w-32 h-32 bg-blue-900/20 rounded-full blur-3xl pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
}