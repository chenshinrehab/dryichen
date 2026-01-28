'use client';

import React, { useState, useMemo } from 'react';

// =====================================================================
// 台灣兒童生長曲線數據庫 (Taiwan 2010 Growth Charts Approximation)
// 參考來源: Chen W & Chang MH. Pediatr Neonatol 2010
// 數據結構: 年齡(歲): [3rd, 15th, 50th, 85th, 97th]
// =====================================================================

type GrowthTable = { [age: number]: number[] };

// 簡化的數據採樣點 (0, 0.5, 1, ... 18歲)
// 數值經人工校正以符合台灣 2010 曲線趨勢
const DATA_BOY_HEIGHT: GrowthTable = {
  0: [46.3, 47.9, 49.9, 51.8, 53.4],
  1: [71.3, 73.4, 75.7, 78.1, 79.8],
  2: [81.8, 84.8, 87.8, 90.9, 93.2],
  3: [89.7, 92.9, 96.1, 99.4, 102.3],
  5: [102.5, 106.2, 110.0, 113.8, 117.2],
  7: [114.6, 118.0, 121.7, 125.4, 129.5],
  10: [129.0, 133.5, 137.8, 142.5, 147.5],
  12: [139.0, 144.0, 149.0, 155.0, 161.0], // 進入青春期
  15: [158.0, 163.5, 169.0, 174.0, 179.0],
  18: [162.0, 166.0, 172.0, 177.0, 182.0]  // 台灣男生18歲中位數約172
};

const DATA_GIRL_HEIGHT: GrowthTable = {
  0: [45.6, 47.3, 49.1, 51.0, 52.7],
  1: [69.0, 71.3, 74.0, 76.6, 78.6],
  2: [80.3, 83.2, 86.4, 89.6, 92.2],
  3: [88.5, 91.8, 95.1, 98.6, 101.4],
  5: [101.8, 105.5, 109.4, 113.4, 116.8],
  7: [113.8, 117.2, 120.8, 124.6, 128.5],
  10: [129.2, 133.8, 138.6, 143.8, 148.5],
  12: [141.5, 146.0, 151.0, 156.0, 160.5],
  15: [150.0, 154.5, 159.5, 164.0, 167.5],
  18: [151.0, 155.0, 160.0, 165.0, 169.0] // 台灣女生18歲中位數約160
};

const DATA_BOY_WEIGHT: GrowthTable = {
  0: [2.5, 2.9, 3.3, 3.9, 4.4],
  1: [7.8, 8.6, 9.6, 10.8, 11.8],
  2: [9.8, 10.9, 12.2, 13.7, 15.0],
  3: [11.5, 12.8, 14.3, 16.2, 17.8],
  5: [14.6, 16.2, 18.3, 21.0, 24.2],
  7: [18.5, 20.5, 22.9, 27.0, 32.5],
  10: [25.0, 28.0, 32.0, 40.0, 50.0], // 體重變異大
  12: [31.0, 35.0, 41.0, 52.0, 65.0],
  15: [42.0, 48.0, 56.0, 68.0, 80.0],
  18: [50.0, 55.0, 63.0, 75.0, 88.0]
};

const DATA_GIRL_WEIGHT: GrowthTable = {
  0: [2.4, 2.8, 3.2, 3.7, 4.2],
  1: [7.1, 7.9, 8.9, 10.1, 11.0],
  2: [9.2, 10.2, 11.5, 13.1, 14.5],
  3: [11.0, 12.2, 13.9, 15.8, 17.5],
  5: [14.0, 15.6, 18.2, 21.2, 24.5],
  7: [17.5, 19.8, 22.4, 26.5, 31.0],
  10: [24.0, 27.0, 32.0, 40.0, 48.0],
  12: [32.0, 36.0, 42.0, 50.0, 60.0],
  15: [40.0, 45.0, 52.0, 60.0, 70.0],
  18: [42.0, 46.0, 54.0, 63.0, 72.0]
};

type Gender = 'boy' | 'girl';

export default function GrowthAnalysisMRI() {
  const [gender, setGender] = useState<Gender>('boy');
  const [ageYear, setAgeYear] = useState<string>('');
  const [ageMonth, setAgeMonth] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');

  // 線性插值函數 (取得該年齡的準確百分位數值)
  const interpolate = (age: number, table: GrowthTable, percentileIndex: number) => {
    const ages = Object.keys(table).map(Number).sort((a, b) => a - b);
    if (age <= ages[0]) return table[ages[0]][percentileIndex];
    if (age >= ages[ages.length - 1]) return table[ages[ages.length - 1]][percentileIndex];

    // 找到區間 [lower, upper]
    let lower = ages[0], upper = ages[ages.length - 1];
    for (let i = 0; i < ages.length - 1; i++) {
      if (age >= ages[i] && age <= ages[i+1]) {
        lower = ages[i];
        upper = ages[i+1];
        break;
      }
    }

    const ratio = (age - lower) / (upper - lower);
    const valLower = table[lower][percentileIndex];
    const valUpper = table[upper][percentileIndex];
    return valLower + (valUpper - valLower) * ratio;
  };

  // 計算結果
  const result = useMemo(() => {
    const y = parseFloat(ageYear);
    const m = parseFloat(ageMonth || '0');
    const h = parseFloat(height);
    const w = parseFloat(weight);
    
    if (!y && y !== 0) return null;
    if (!h || !w) return null;

    const totalAge = y + m / 12;
    const hTable = gender === 'boy' ? DATA_BOY_HEIGHT : DATA_GIRL_HEIGHT;
    const wTable = gender === 'boy' ? DATA_BOY_WEIGHT : DATA_GIRL_WEIGHT;

    // 取得該年齡的 5 個百分位數值 (3, 15, 50, 85, 97)
    const hPoints = [0,1,2,3,4].map(i => interpolate(totalAge, hTable, i));
    const wPoints = [0,1,2,3,4].map(i => interpolate(totalAge, wTable, i));

    // 估算目前百分位 (簡易線性)
    const getPercentile = (val: number, points: number[]) => {
      if (val < points[0]) return 1; // <3rd
      if (val > points[4]) return 99; // >97th
      // 區間判斷
      const ranges = [3, 15, 50, 85, 97];
      for (let i = 0; i < 4; i++) {
        if (val >= points[i] && val <= points[i+1]) {
          const ratio = (val - points[i]) / (points[i+1] - points[i]);
          return ranges[i] + (ranges[i+1] - ranges[i]) * ratio;
        }
      }
      return 50;
    };

    return {
      age: totalAge,
      hPercentile: Math.round(getPercentile(h, hPoints)),
      wPercentile: Math.round(getPercentile(w, wPoints)),
      hRange: hPoints, // [3rd, 15th, 50th, 85th, 97th]
      wRange: wPoints
    };
  }, [ageYear, ageMonth, height, weight, gender]);

  // SVG 曲線繪製函數
  const renderCurve = (type: 'h' | 'w', currentVal: number, range: number[], percentile: number) => {
    // 繪圖參數
    const width = 280;
    const height = 120;
    const padding = 20;
    // Y軸範圍: 稍微擴大 3rd 和 97th
    const minVal = range[0] * 0.9;
    const maxVal = range[4] * 1.1;
    const scaleY = (val: number) => height - padding - ((val - minVal) / (maxVal - minVal)) * (height - 2 * padding);

    // 生成曲線路徑
    
    // 實際上有意義的是「落點」
    // 我們畫五條橫線代表 97, 85, 50, 15, 3
    const lines = [97, 85, 50, 15, 3].map((p, i) => {
      const val = range[4-i]; 
      const y = scaleY(val);
      return (
        <g key={i}>
           <line x1="40" y1={y} x2={width} y2={y} stroke="#334155" strokeWidth="1" strokeDasharray="4 4" />
           <text x="0" y={y+4} fontSize="10" fill="#64748b" textAnchor="start">{p}th</text>
        </g>
      );
    });

    // 孩子的落點
    const cx = width * 0.7; // 固定 X 位置
    const cy = scaleY(currentVal);
    
    return (
      <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`}>
        {lines}
        {/* 連線到Y軸的指示線 */}
        <line x1="40" y1={cy} x2={cx} y2={cy} stroke="#22d3ee" strokeWidth="1" opacity="0.5" />
        {/* 落點 */}
        <circle cx={cx} cy={cy} r="6" fill="#facc15" stroke="white" strokeWidth="2" />
        <text x={cx} y={cy - 12} fontSize="12" fontWeight="bold" fill="#facc15" textAnchor="middle">
          {currentVal} {type==='h'?'cm':'kg'}
        </text>
        {/* 趨勢箭頭 (裝飾) */}
        <path d={`M${40},${scaleY(range[2])} Q${width/2},${scaleY(range[2])} ${width},${scaleY(range[2])}`} stroke="#0ea5e9" strokeWidth="2" fill="none" opacity="0.3" />
      </svg>
    );
  };

  return (
    <div className="max-w-5xl mx-auto p-6 md:p-10 bg-slate-800 rounded-3xl shadow-2xl border border-slate-700 my-10 font-sans text-slate-100">
      
      {/* 標題區 */}
      <div className="mb-10 border-l-8 border-[#22d3ee] pl-6 flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">
            兒童生長發育評估儀
          </h2>
          <p className="text-slate-400 text-lg">
            對照台灣兒童生長曲線 (2010版)，精準定位生長落點
          </p>
        </div>
        <div className="hidden md:block text-slate-500 text-xs text-right opacity-60">
            Based on Chen W & Chang MH<br/>Pediatr Neonatol 2010
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-10">
        
        {/* 左側：控制台 */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* 性別開關 */}
          <div className="bg-slate-700 p-1.5 rounded-2xl flex relative border border-slate-600">
            <button
              onClick={() => setGender('boy')}
              className={`flex-1 py-3 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                gender === 'boy'
                  ? 'bg-[#0ea5e9]/20 text-[#38bdf8] border border-[#0ea5e9]/50 shadow-[0_0_15px_rgba(14,165,233,0.3)]'
                  : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              <span>👦</span> 男孩
            </button>
            <button
              onClick={() => setGender('girl')}
              className={`flex-1 py-3 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                gender === 'girl'
                  ? 'bg-[#ec4899]/20 text-[#f472b6] border border-[#ec4899]/50 shadow-[0_0_15px_rgba(236,72,153,0.3)]'
                  : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              <span>👧</span> 女孩
            </button>
          </div>

          <div className="bg-slate-700/50 p-6 rounded-2xl border border-slate-600 space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="group">
                <label className="text-xs font-bold text-slate-400 mb-2 block uppercase">年齡 (歲)</label>
                <input
                  type="number"
                  value={ageYear}
                  onChange={(e) => setAgeYear(e.target.value)}
                  placeholder="8"
                  className="w-full p-3 rounded-xl bg-slate-800 border border-slate-600 focus:ring-2 focus:ring-[#22d3ee] focus:border-transparent outline-none text-white font-bold text-lg text-center"
                />
              </div>
              <div className="group">
                <label className="text-xs font-bold text-slate-400 mb-2 block uppercase">月份</label>
                <input
                  type="number"
                  value={ageMonth}
                  onChange={(e) => setAgeMonth(e.target.value)}
                  placeholder="0"
                  max="11"
                  className="w-full p-3 rounded-xl bg-slate-800 border border-slate-600 focus:ring-2 focus:ring-[#22d3ee] focus:border-transparent outline-none text-white font-bold text-lg text-center"
                />
              </div>
            </div>

            <div className="border-t border-slate-600 pt-4 space-y-4">
                <div className="group">
                    <label className="text-xs font-bold text-slate-400 mb-2 block uppercase">身高 (cm)</label>
                    <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="125"
                    className="w-full p-3 rounded-xl bg-slate-800 border border-slate-600 focus:ring-2 focus:ring-[#22d3ee] focus:border-transparent outline-none text-white font-bold text-lg text-center"
                    />
                </div>
                <div className="group">
                    <label className="text-xs font-bold text-slate-400 mb-2 block uppercase">體重 (kg)</label>
                    <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="25"
                    className="w-full p-3 rounded-xl bg-slate-800 border border-slate-600 focus:ring-2 focus:ring-[#22d3ee] focus:border-transparent outline-none text-white font-bold text-lg text-center"
                    />
                </div>
            </div>
          </div>
        </div>

        {/* 右側：分析儀表板 */}
        <div className="lg:col-span-8">
          <div className="h-full bg-slate-900/80 rounded-3xl p-6 md:p-8 border border-slate-700 relative overflow-hidden flex flex-col justify-center">
            
            {!result ? (
              <div className="text-center text-slate-500 py-12">
                <div className="w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center mb-6 mx-auto border border-slate-700 animate-pulse">
                  <span className="text-4xl opacity-50">📊</span>
                </div>
                <p className="text-lg font-medium">等待數據輸入...</p>
                <p className="text-sm opacity-60 mt-2 max-w-xs mx-auto">請在左側輸入孩子的生長數據，系統將自動比對台灣常模資料庫。</p>
              </div>
            ) : (
              <div className="space-y-6 animate-fadeIn z-10 relative">
                
                {/* 1. 身高分析區塊 */}
                <div className="bg-slate-800 rounded-2xl p-5 border border-slate-600 shadow-lg relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                        <span className="text-6xl">📏</span>
                    </div>
                    
                    <div className="flex justify-between items-end mb-4 relative z-10">
                        <div>
                            <h3 className="text-[#22d3ee] font-bold text-lg flex items-center gap-2">
                                身高百分位
                                <span className="text-xs text-slate-400 font-normal px-2 py-0.5 bg-slate-700 rounded-full">
                                    PR {result.hPercentile}
                                </span>
                            </h3>
                            <p className="text-white text-3xl font-black tracking-tight mt-1">
                                {height} <span className="text-lg font-medium text-slate-500">cm</span>
                            </p>
                        </div>
                        <div className="text-right">
                             <p className="text-xs text-slate-400 mb-1">同齡正常範圍 (3~97th)</p>
                             <p className="text-sm font-bold text-white">{result.hRange[0].toFixed(1)} ~ {result.hRange[4].toFixed(1)} cm</p>
                        </div>
                    </div>
                    
                    {/* SVG 曲線圖 */}
                    <div className="bg-slate-900/50 rounded-lg border border-slate-700/50 p-2">
                        {renderCurve('h', parseFloat(height), result.hRange, result.hPercentile)}
                    </div>
                </div>

                {/* 2. 體重分析區塊 */}
                <div className="bg-slate-800 rounded-2xl p-5 border border-slate-600 shadow-lg relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                        <span className="text-6xl">⚖️</span>
                    </div>

                    <div className="flex justify-between items-end mb-4 relative z-10">
                        <div>
                            <h3 className="text-[#f472b6] font-bold text-lg flex items-center gap-2">
                                體重百分位
                                <span className="text-xs text-slate-400 font-normal px-2 py-0.5 bg-slate-700 rounded-full">
                                    PR {result.wPercentile}
                                </span>
                            </h3>
                            <p className="text-white text-3xl font-black tracking-tight mt-1">
                                {weight} <span className="text-lg font-medium text-slate-500">kg</span>
                            </p>
                        </div>
                        <div className="text-right">
                             <p className="text-xs text-slate-400 mb-1">同齡正常範圍 (3~97th)</p>
                             <p className="text-sm font-bold text-white">{result.wRange[0].toFixed(1)} ~ {result.wRange[4].toFixed(1)} kg</p>
                        </div>
                    </div>

                    {/* SVG 曲線圖 */}
                    <div className="bg-slate-900/50 rounded-lg border border-slate-700/50 p-2">
                         {renderCurve('w', parseFloat(weight), result.wRange, result.wPercentile)}
                    </div>
                </div>

                {/* 3. 醫師建議 (亮色區塊) */}
                <div className="bg-[#fffbeb] border-2 border-[#fbbf24] rounded-2xl p-5 shadow-lg relative">
                    <h4 className="text-[#b45309] font-bold text-lg mb-2 flex items-center">
                        <span className="bg-[#f59e0b] text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 shadow-sm">!</span>
                        醫師專業評估
                    </h4>
                    <div className="text-[#78350f] text-sm leading-relaxed font-medium space-y-2">
                        {result.hPercentile < 3 ? (
                            <p>⚠️ <strong>生長遲緩警訊：</strong> 身高低於第 3 百分位。強烈建議至<strong>兒童內分泌科</strong>安排骨齡與生長激素檢查。</p>
                        ) : result.hPercentile < 15 ? (
                            <p>📉 <strong>身高偏矮：</strong> 雖然在正常範圍內，但屬於後段班。建議加強跳躍運動與睡眠管理（22:00前入睡）。</p>
                        ) : result.hPercentile > 97 ? (
                            <p>🚀 <strong>生長超前：</strong> 身高非常高，需注意是否伴隨<strong>性早熟</strong>徵兆（如過早發育），以免生長板提早閉合。</p>
                        ) : (
                            <p>✅ <strong>發育狀況良好：</strong> 身高符合該年齡層標準，請繼續維持良好的生活作息。</p>
                        )}
                        
                        {result.wPercentile > 85 && (
                             <p className="border-t border-orange-200 pt-2 mt-2">
                                🍔 <strong>體重注意：</strong> 體重百分位較高 (&gt;85th)。過重可能導致<strong>骨齡超前</strong>，進而壓縮未來的長高空間，建議減少甜食攝取。
                             </p>
                        )}
                    </div>
                </div>

              </div>
            )}
            
            {/* 裝飾光暈 */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#22d3ee]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0ea5e9]/10 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}