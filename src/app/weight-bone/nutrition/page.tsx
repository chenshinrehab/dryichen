
import GrowthNutritionCalculator from '@/components/tools/GrowthNutritionGuide';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '兒童長高營養指南 - 客製化飲食建議與食譜 | 新竹宸新復健科',
  description: '林羿辰醫師親自設計，針對孩子的年齡性別，提供蛋白質、鈣質與維生素的精準攝取建議，並附上美味長高食譜。',
};

export default function NutritionPage() {
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
          
          <GrowthNutritionCalculator />
        </div>
      </main>
    </div>
  );
}