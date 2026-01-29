// src/app/weight-bone/BMI/page.tsx
import WeightLossCalculator from '@/components/tools/WeightLossCalculator';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '減重自我評估計算機 - 線上免費檢測 | 新竹宸新復健科',
  description: '輸入身高體重，快速計算BMI、體脂肪與基礎代謝率，獲得醫師專業減重建議。',
};

export default function CalculatorPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-slate-300">
    <main className="flex-grow pt-0 -mt-10 md:-mt-12 pb-12 fade-in relative z-10">
       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 返回按鈕 */}
        <div className="max-w-4xl mx-auto mb-6">
            <a href="/weight-bone" className="text-cyan-400 hover:text-white flex items-center gap-2 w-fit transition-colors">
                <i className="fa-solid fa-arrow-left"></i> 返回減重與骨齡門診
            </a>
        </div>
        
        <WeightLossCalculator />
      </div>
      </main>
    </div>
  );
}