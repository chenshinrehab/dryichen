// src/app/weight-bone/calculator/page.tsx
import GrowthAnalysisMRI from '@/components/tools/GrowthAnalysisMRI';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '兒童生長曲線評估儀 - 線上免費檢測 | 新竹宸新復健科',
  description: '線上兒童生長發育評估，輸入身高體重，對照台灣最新生長曲線常模，精準分析孩子是否生長遲緩或過早發育，並提供醫師專業建議。',
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
        
        <GrowthAnalysisMRI />
      </div>
      </main>
    </div>
  );
}