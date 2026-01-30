// src/components/weight-bone/GrowthNutritionCalculator.tsx
'use client';

import React, { useState } from 'react';

// =====================================================================
// 資料庫：DRIs 第八版 & 食譜
// =====================================================================

const nutrientData: Record<string, any> = {
  '1-3': {
    protein: { boy: '20g', girl: '20g' },
    calcium: { boy: '500mg', girl: '500mg' },
    vitaminD: { boy: '10µg', girl: '10µg' },
    zinc: { boy: '5.5mg', girl: '5.5mg' },
    magnesium: { boy: '80mg', girl: '80mg' },
    vitaminK: { boy: '30µg', girl: '30µg' },
    folate: { boy: '170µg', girl: '170µg' }
  },
  '4-6': {
    protein: { boy: '30g', girl: '30g' },
    calcium: { boy: '600mg', girl: '600mg' },
    vitaminD: { boy: '10µg', girl: '10µg' },
    zinc: { boy: '8mg', girl: '7mg' },
    magnesium: { boy: '120mg', girl: '120mg' },
    vitaminK: { boy: '55µg', girl: '55µg' },
    folate: { boy: '200µg', girl: '200µg' }
  },
  '7-9': {
    protein: { boy: '40g', girl: '40g' },
    calcium: { boy: '800mg', girl: '800mg' },
    vitaminD: { boy: '10µg', girl: '10µg' },
    zinc: { boy: '10mg', girl: '8mg' },
    magnesium: { boy: '170mg', girl: '170mg' },
    vitaminK: { boy: '60µg', girl: '60µg' },
    folate: { boy: '250µg', girl: '250µg' }
  },
  '10-12': {
    protein: { boy: '55g', girl: '50g' },
    calcium: { boy: '1000mg', girl: '1000mg' },
    vitaminD: { boy: '10µg', girl: '10µg' },
    zinc: { boy: '13mg', girl: '10mg' },
    magnesium: { boy: '230mg', girl: '230mg' },
    vitaminK: { boy: '80µg', girl: '70µg' },
    folate: { boy: '300µg', girl: '300µg' }
  },
  '13-15': {
    protein: { boy: '70g', girl: '60g' },
    calcium: { boy: '1200mg', girl: '1000mg' },
    vitaminD: { boy: '10µg', girl: '10µg' },
    zinc: { boy: '15mg', girl: '12mg' },
    magnesium: { boy: '350mg', girl: '320mg' },
    vitaminK: { boy: '110µg', girl: '90µg' },
    folate: { boy: '400µg', girl: '400µg' }
  },
  '16-18': {
    protein: { boy: '75g', girl: '55g' },
    calcium: { boy: '1200mg', girl: '1000mg' },
    vitaminD: { boy: '10µg', girl: '10µg' },
    zinc: { boy: '15mg', girl: '12mg' },
    magnesium: { boy: '360mg', girl: '320mg' },
    vitaminK: { boy: '120µg', girl: '90µg' },
    folate: { boy: '400µg', girl: '400µg' }
  }
};

const recipes = [
  { category: 'protein', title: '藜麥鮮蔬蒸雞肉', description: '藜麥含完全蛋白質，搭配雞胸肉與多彩蔬菜，提供長高所需的精胺酸與纖維。', ingredients: ['雞胸肉丁 150g', '熟藜麥 2大匙', '玉米筍/紅蘿蔔丁', '少許鹽麴'], steps: '雞肉用鹽麴抓醃，拌入藜麥與蔬菜丁，放入電鍋蒸熟即可。' },
  { category: 'protein', title: '牛肉菠菜厚蛋燒', description: '牛肉富含鐵與鋅，菠菜提供葉酸，蛋是優質蛋白，適合早餐或點心。', ingredients: ['雞蛋 3顆', '牛絞肉 50g', '菠菜碎 少許', '牛奶 20ml'], steps: '牛絞肉炒香。蛋液混合牛奶與菠菜，倒入鍋中半凝固時撒上牛肉捲起。' },
  { category: 'calcium', title: '高鈣黑豆芝麻漿', description: '植物性鈣質的冠軍組合，香氣濃郁，適合乳糖不耐的孩子。', ingredients: ['熟黑豆 1杯', '黑芝麻粉 2大匙', '無糖豆漿 200ml'], steps: '將所有材料放入果汁機打勻，可視喜好微加熱。' },
  { category: 'calcium', title: '小魚乾海帶芽味噌湯', description: '經典日式家常湯，小魚乾與豆腐雙重補鈣，海帶芽補充碘。', ingredients: ['小魚乾 1把', '嫩豆腐 1盒', '乾燥海帶芽', '味噌'], steps: '水滾後放入小魚乾熬湯，加入豆腐與海帶芽，熄火前溶入味噌。' },
  { category: 'auxiliary', title: '鮮蝦腰果快炒 (鋅)', description: '蝦仁與腰果都是鋅的良好來源，能促進食慾與生長激素運作。', ingredients: ['蝦仁 10隻', '無調味腰果 1把', '甜豆莢', '蒜片'], steps: '爆香蒜片，放入蝦仁與甜豆莢快炒，起鍋前拌入腰果。' },
  { category: 'auxiliary', title: '芭樂奇異果優格飲 (C)', description: '高維生素C水果組合，幫助膠原蛋白合成，鞏固骨骼結構。', ingredients: ['芭樂 半顆', '奇異果 1顆', '無糖優格 1杯', '蜂蜜'], steps: '水果切塊，與優格一同攪打，富含益生菌與維生素C。' },
  { category: 'auxiliary', title: '南瓜鴻喜菇燉飯 (A/D)', description: '菇類含維生素D，南瓜富含維生素A，守護骨骼與視力。', ingredients: ['南瓜泥', '鴻喜菇', '雞腿肉', '白飯', '牛奶'], steps: '炒香雞肉與菇類，加入南瓜泥與牛奶燉煮，拌入米飯收汁。' },
  { category: 'protein', title: '毛豆鮭魚飯糰', description: '鮭魚Omega-3抗發炎，毛豆是植物蛋白之王，適合活動後補充。', ingredients: ['熟鮭魚碎', '燙熟毛豆仁', '海苔酥', '白飯'], steps: '將所有食材拌勻，捏成圓形或三角形飯糰。' }
];

export default function GrowthNutritionCalculator() {
  // 輸入狀態
  const [age, setAge] = useState<string>('');
  const [gender, setGender] = useState<'boy' | 'girl'>('boy');
  const [conditions, setConditions] = useState({ isPicky: false, isVegetarian: false, isAllergic: false, isHighActivity: false });
  const [allergyText, setAllergyText] = useState('');
  const [recipeFilter, setRecipeFilter] = useState('all');
  
  // 結果狀態
  const [result, setResult] = useState<any>(null);

  const getAgeRange = (val: number) => {
    if (val >= 1 && val <= 3) return '1-3';
    if (val >= 4 && val <= 6) return '4-6';
    if (val >= 7 && val <= 9) return '7-9';
    if (val >= 10 && val <= 12) return '10-12';
    if (val >= 13 && val <= 15) return '13-15';
    if (val >= 16 && val <= 18) return '16-18';
    return '10-12';
  };

  const handleGenerate = () => {
    const ageNum = parseInt(age);
    if (!ageNum || ageNum < 1 || ageNum > 18) {
      alert('請輸入 1-18 歲之間的年齡');
      return;
    }
    const range = getAgeRange(ageNum);
    setResult({ age: ageNum, gender, rec: nutrientData[range], conditions, allergyText });
  };

  const filteredRecipes = recipeFilter === 'all' ? recipes : recipes.filter(r => r.category === recipeFilter);

  return (
<div className="space-y-6">
  
  {/* Header */}
  <header className="text-center mb-6 pt-0">
    <h1 className="leading-tight">
      <span className="text-xl md:text-2xl font-bold text-slate-400 tracking-wider">打造孩子的身高優勢</span><br />
      <span className="text-3xl md:text-4xl font-extrabold text-orange-500 mt-1 inline-block">
        客製化成長營養藍圖
      </span>
    </h1>
  </header>

      {/* 1. 輸入區塊 */}
      <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-orange-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-300 to-orange-500"></div>
        <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
          <span className="bg-orange-100 text-orange-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">1</span>
          建立孩子的基本檔案
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-600 mb-2">孩子的年齡 (1-18歲)</label>
              <input type="number" value={age} onChange={(e) => setAge(e.target.value)} min="1" max="18"
                     className="w-full rounded-xl border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 py-3 px-4 bg-gray-50 text-lg outline-none border text-slate-800"
                     placeholder="例如：10" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-600 mb-2">生理性別</label>
              <div className="flex gap-4">
                <button onClick={() => setGender('boy')} className={`flex-1 py-3 rounded-xl border font-bold transition-all ${gender === 'boy' ? 'bg-blue-50 border-blue-400 text-blue-600' : 'bg-gray-50 border-gray-200 text-gray-400'}`}>👦 男孩</button>
                <button onClick={() => setGender('girl')} className={`flex-1 py-3 rounded-xl border font-bold transition-all ${gender === 'girl' ? 'bg-pink-50 border-pink-400 text-pink-600' : 'bg-gray-50 border-gray-200 text-gray-400'}`}>👧 女孩</button>
              </div>
            </div>
          </div>

          <div>
            <h3 className="block text-sm font-bold text-gray-600 mb-3">飲食習慣與特殊狀況</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { key: 'isPicky', label: '挑食 / 食慾差' }, { key: 'isVegetarian', label: '素食主義' },
                { key: 'isAllergic', label: '食物過敏' }, { key: 'isHighActivity', label: '高活動量' }
              ].map((item: any) => (
                <label key={item.key} className={`flex items-center p-3 border rounded-xl cursor-pointer transition-colors ${conditions[item.key as keyof typeof conditions] ? 'bg-orange-50 border-orange-300' : 'border-gray-200 hover:bg-gray-50'}`}>
                  <input type="checkbox" checked={conditions[item.key as keyof typeof conditions]} onChange={(e) => setConditions({...conditions, [item.key]: e.target.checked})} className="h-5 w-5 text-orange-600 rounded focus:ring-orange-500 border-gray-300" />
                  <span className="ml-3 text-gray-700 font-medium">{item.label}</span>
                </label>
              ))}
            </div>
            {conditions.isAllergic && (
              <input type="text" value={allergyText} onChange={(e) => setAllergyText(e.target.value)}
                     className="mt-4 block w-full rounded-lg border border-orange-200 shadow-sm focus:border-orange-500 py-2 px-3 bg-orange-50 outline-none text-sm text-slate-800"
                     placeholder="請備註過敏原，如：蝦蟹、花生..." />
            )}
          </div>
        </div>

        <div className="mt-8 text-center">
          <button onClick={handleGenerate} className="w-full sm:w-auto inline-flex justify-center items-center rounded-full bg-gradient-to-r from-orange-500 to-red-500 py-3 px-12 text-lg font-bold text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <span className="mr-2">✨</span> 生成專屬營養建議
          </button>
        </div>
      </div>

      {/* 2. 運算結果區 (Conditional) */}
      {result && (
        <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg border border-orange-200 animate-fadeIn scroll-mt-20">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              <span className="text-orange-600">{result.age}歲 {result.gender === 'boy' ? '男孩' : '女孩'}</span> 的專屬營養建議
            </h2>
            <p className="text-gray-500 mt-2">數值根據國健署 DRIs 第八版量身計算</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-orange-50/40 rounded-2xl p-6 border border-orange-100">
              <h3 className="text-lg font-bold text-orange-800 mb-4 flex items-center">
                <span className="bg-orange-200 p-1 rounded mr-2">📊</span> 每日核心營養
              </h3>
              <div className="space-y-3">
                {[ { l: '蛋白質', v: result.rec.protein[result.gender] }, { l: '鈣質', v: result.rec.calcium[result.gender] }, { l: '維生素 D', v: result.rec.vitaminD[result.gender] } ].map((i, idx) => (
                  <div key={idx} className="flex justify-between border-b border-orange-200 pb-2 last:border-0"><span className="text-gray-700">{i.l}</span><span className="font-bold text-orange-700">{i.v}</span></div>
                ))}
              </div>
            </div>
            <div className="bg-blue-50/40 rounded-2xl p-6 border border-blue-100">
              <h3 className="text-lg font-bold text-slate-700 mb-4 flex items-center">
                <span className="bg-slate-200 p-1 rounded mr-2">💊</span> 關鍵微量元素
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[ { l: '鋅', v: result.rec.zinc[result.gender] }, { l: '鎂', v: result.rec.magnesium[result.gender] }, { l: '維生素 K', v: result.rec.vitaminK[result.gender] }, { l: '葉酸', v: result.rec.folate[result.gender] } ].map((i, idx) => (
                  <div key={idx}><span className="text-gray-500 text-xs block">{i.l}</span><div className="font-bold text-slate-700">{i.v}</div></div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-8">
            <h4 className="text-xl font-bold text-gray-800 mb-4 border-l-4 border-orange-500 pl-3">推薦一日飲食範例</h4>
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 space-y-3 text-sm sm:text-base">
              <div className="flex flex-col sm:flex-row"><span className="font-bold text-orange-600 w-20 shrink-0">早餐</span><span className="text-gray-700">全麥吐司夾起司蛋 + 無糖豆漿或鮮奶 + 小番茄</span></div>
              <div className="flex flex-col sm:flex-row"><span className="font-bold text-orange-600 w-20 shrink-0">午餐</span><span className="text-gray-700">雜糧飯 + 清蒸鱸魚 + 蒜炒深綠色蔬菜 + 蛤蜊湯</span></div>
              <div className="flex flex-col sm:flex-row"><span className="font-bold text-orange-600 w-20 shrink-0">點心</span><span className="text-gray-700">希臘優格淋蜂蜜 + 一小把堅果 (核桃/腰果)</span></div>
              <div className="flex flex-col sm:flex-row"><span className="font-bold text-orange-600 w-20 shrink-0">晚餐</span><span className="text-gray-700">糙米飯 + 蔥爆牛肉 + 毛豆炒豆干 + 季節水果</span></div>
            </div>
            
            {(result.conditions.isPicky || result.conditions.isVegetarian || result.conditions.isAllergic || result.conditions.isHighActivity) && (
              <div className="mt-6 bg-orange-50 border border-orange-200 rounded-xl p-5">
                <h5 className="font-bold text-orange-800 mb-3">💡 林醫師的個人化叮嚀</h5>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  {result.conditions.isPicky && <li>🎯 <b>針對挑食：</b>試著將蔬菜切碎混入漢堡排或煎蛋中，增加色彩吸引力。</li>}
                  {result.conditions.isVegetarian && <li>🌱 <b>素食提醒：</b>請多攝取深綠色蔬菜、豆類製品，並搭配富含維生素C的水果幫助鐵吸收。</li>}
                  {result.conditions.isAllergic && <li>⚠️ <b>過敏注意：</b>已記錄避開「{result.allergyText || '過敏原'}」。建議尋找替代營養源（如黑芝麻補鈣）。</li>}
                  {result.conditions.isHighActivity && <li>⚡ <b>高活動量：</b>運動後30分鐘內補充碳水+蛋白質（如香蕉+豆漿），修補肌肉。</li>}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 3. 衛教資訊 (Education Section) */}
      <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-orange-100">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center border-b border-gray-100 pb-4">
          <span className="bg-orange-100 text-orange-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">2</span>
          解密長高的營養密碼
        </h2>
        <div className="space-y-6">
          <details className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm open:shadow-md transition-all duration-300 open:border-orange-300">
            <summary className="flex justify-between items-center p-5 cursor-pointer list-none bg-gray-50 group-open:bg-orange-50 transition-colors">
              <span className="text-lg font-bold text-gray-700 group-open:text-orange-800 flex items-center"><span className="text-2xl mr-3">🏗️</span> 長高黃金金三角：生長的基礎建材</span>
              <span className="bg-white rounded-full p-1 shadow-sm text-gray-400 group-open:text-orange-500 group-open:rotate-180 transition-transform duration-300">▼</span>
            </summary>
            <div className="p-6 border-t border-gray-100 group-open:border-orange-200 text-gray-600 leading-relaxed">
              <p className="mb-4">如果不給磚塊和水泥，房子是蓋不高的。孩子的身高也是一樣，這三種營養素是絕對不能缺少的基礎。</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="p-4 bg-orange-50/50 rounded-lg border border-orange-100"><h5 className="font-bold text-orange-700 mb-2">1. 蛋白質 (Protein)</h5><p className="text-sm text-gray-600 mb-2">不僅是肌肉原料，其中的<strong>精胺酸</strong>更刺激生長激素分泌。</p><p className="text-xs font-semibold text-orange-600 bg-orange-100 inline-block px-2 py-1 rounded">推薦：蛋、雞胸肉、鮮魚</p></div>
                <div className="p-4 bg-orange-50/50 rounded-lg border border-orange-100"><h5 className="font-bold text-orange-700 mb-2">2. 鈣質 (Calcium)</h5><p className="text-sm text-gray-600 mb-2">骨骼的硬度來源。若鈣質不足，骨骼就像空心磚。</p><p className="text-xs font-semibold text-orange-600 bg-orange-100 inline-block px-2 py-1 rounded">推薦：牛奶、黑芝麻、板豆腐</p></div>
                <div className="p-4 bg-orange-50/50 rounded-lg border border-orange-100"><h5 className="font-bold text-orange-700 mb-2">3. 維生素 D</h5><p className="text-sm text-gray-600 mb-2">鈣質的搬運工。沒有它，吃再多鈣也會流失。</p><p className="text-xs font-semibold text-orange-600 bg-orange-100 inline-block px-2 py-1 rounded">推薦：曬太陽、乾香菇、鮭魚</p></div>
              </div>
            </div>
          </details>
          <details className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm open:shadow-md transition-all duration-300 open:border-orange-300">
            <summary className="flex justify-between items-center p-5 cursor-pointer list-none bg-gray-50 group-open:bg-orange-50 transition-colors">
              <span className="text-lg font-bold text-gray-700 group-open:text-orange-800 flex items-center"><span className="text-2xl mr-3">🚀</span> 成長加速器：不可或缺的輔助隊友</span>
              <span className="bg-white rounded-full p-1 shadow-sm text-gray-400 group-open:text-orange-500 group-open:rotate-180 transition-transform duration-300">▼</span>
            </summary>
            <div className="p-6 border-t border-gray-100 group-open:border-orange-200 text-gray-600">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ul className="space-y-3">
                  <li className="flex items-start"><span className="text-orange-500 mr-2">●</span><div><strong className="text-gray-800">鋅 (Zinc)：</strong> <span className="text-sm">細胞分裂催化劑。缺鋅會導致食慾不振、生長停滯。</span></div></li>
                  <li className="flex items-start"><span className="text-orange-500 mr-2">●</span><div><strong className="text-gray-800">鎂 (Magnesium)：</strong> <span className="text-sm">放鬆肌肉與神經，幫助深層睡眠（生長激素分泌關鍵）。</span></div></li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start"><span className="text-orange-500 mr-2">●</span><div><strong className="text-gray-800">維生素 K2：</strong> <span className="text-sm">骨骼導航員。引導鈣質沈積到骨頭而非血管。</span></div></li>
                  <li className="flex items-start"><span className="text-orange-500 mr-2">●</span><div><strong className="text-gray-800">維生素 C：</strong> <span className="text-sm">膠原蛋白助手，讓骨骼與肌腱更有韌性。</span></div></li>
                </ul>
              </div>
            </div>
          </details>
        </div>
      </div>

      {/* 4. 食譜資料庫區塊 */}
      <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-orange-100">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
          <span className="bg-orange-100 text-orange-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">3</span>
          長高食譜資料庫
        </h2>
        <div className="flex flex-wrap gap-3 mb-8">
          {[ { id: 'all', label: '全部食譜' }, { id: 'protein', label: '💪 優質蛋白' }, { id: 'calcium', label: '🥛 高鈣強骨' }, { id: 'auxiliary', label: '🥗 營養神隊友' } ].map(tab => (
            <button key={tab.id} onClick={() => setRecipeFilter(tab.id)} className={`py-2 px-5 rounded-full text-sm font-bold transition-all ${recipeFilter === tab.id ? 'bg-orange-600 text-white shadow-md' : 'bg-orange-100 text-orange-700 hover:bg-orange-200'}`}>{tab.label}</button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.length > 0 ? filteredRecipes.map((recipe, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-orange-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-lg font-bold text-gray-800">{recipe.title}</h4>
                <span className={`text-xs font-bold px-2 py-1 rounded-md ${recipe.category === 'protein' ? 'bg-red-100 text-red-600' : recipe.category === 'calcium' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'}`}>
                  {recipe.category === 'protein' ? '優質蛋白' : recipe.category === 'calcium' ? '高鈣' : '輔助營養'}
                </span>
              </div>
              <p className="text-sm text-gray-500 mb-4 flex-grow">{recipe.description}</p>
              <div className="bg-gray-50 rounded-xl p-3 mb-3">
                <p className="text-xs font-bold text-gray-400 uppercase mb-1">食材</p>
                <p className="text-sm text-gray-700 font-medium">{recipe.ingredients.join('、')}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase mb-1">作法</p>
                <p className="text-sm text-gray-600 leading-snug">{recipe.steps}</p>
              </div>
            </div>
          )) : <div className="col-span-full text-center text-gray-400 py-10">目前尚無此分類食譜</div>}
        </div>
      </div>
    </div>
  );
}