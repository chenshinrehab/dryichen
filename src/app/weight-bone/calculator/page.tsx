// src/app/weight-bone/calculator/page.tsx
import BoneAgeCalculator from '@/components/tools/BoneAgeCalculator';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '骨齡與遺傳身高預測計算機 - 線上免費檢測 | 新竹宸新復健科',
  description: '輸入孩子的骨齡與父母身高，透過醫學公式科學預測成年後的潛力身高。協助家長判斷生長發育狀況，是否需要進一步醫療介入。',
};

export default function CalculatorPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-slate-300">
    <main className="flex-grow pt-0 pb-12 md:pt-0 md:pb-12 fade-in relative z-10">
       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 返回按鈕 */}
        <div className="max-w-4xl mx-auto mb-6">
            <a href="/weight-bone" className="text-cyan-400 hover:text-white flex items-center gap-2 w-fit transition-colors">
                <i className="fa-solid fa-arrow-left"></i> 返回減重與骨齡門診
            </a>
        </div>
        
        <BoneAgeCalculator />
      </div>
      </main>
    </div>
  );
}