'use client';

import React, { useState } from 'react';

// =====================================================================
// 資料庫：DRIs 第八版 & 食譜
// =====================================================================

// ... (nutrientData 維持不變，省略以節省空間) ...
const nutrientData: Record<string, any> = {
  '1-3': { protein: { boy: '20g', girl: '20g' }, calcium: { boy: '500mg', girl: '500mg' }, vitaminD: { boy: '10µg', girl: '10µg' }, zinc: { boy: '5.5mg', girl: '5.5mg' }, magnesium: { boy: '80mg', girl: '80mg' }, vitaminK: { boy: '30µg', girl: '30µg' }, folate: { boy: '170µg', girl: '170µg' } },
  '4-6': { protein: { boy: '30g', girl: '30g' }, calcium: { boy: '600mg', girl: '600mg' }, vitaminD: { boy: '10µg', girl: '10µg' }, zinc: { boy: '8mg', girl: '7mg' }, magnesium: { boy: '120mg', girl: '120mg' }, vitaminK: { boy: '55µg', girl: '55µg' }, folate: { boy: '200µg', girl: '200µg' } },
  '7-9': { protein: { boy: '40g', girl: '40g' }, calcium: { boy: '800mg', girl: '800mg' }, vitaminD: { boy: '10µg', girl: '10µg' }, zinc: { boy: '10mg', girl: '8mg' }, magnesium: { boy: '170mg', girl: '170mg' }, vitaminK: { boy: '60µg', girl: '60µg' }, folate: { boy: '250µg', girl: '250µg' } },
  '10-12': { protein: { boy: '55g', girl: '50g' }, calcium: { boy: '1000mg', girl: '1000mg' }, vitaminD: { boy: '10µg', girl: '10µg' }, zinc: { boy: '13mg', girl: '10mg' }, magnesium: { boy: '230mg', girl: '230mg' }, vitaminK: { boy: '80µg', girl: '70µg' }, folate: { boy: '300µg', girl: '300µg' } },
  '13-15': { protein: { boy: '70g', girl: '60g' }, calcium: { boy: '1200mg', girl: '1000mg' }, vitaminD: { boy: '10µg', girl: '10µg' }, zinc: { boy: '15mg', girl: '12mg' }, magnesium: { boy: '350mg', girl: '320mg' }, vitaminK: { boy: '110µg', girl: '90µg' }, folate: { boy: '400µg', girl: '400µg' } },
  '16-18': { protein: { boy: '75g', girl: '55g' }, calcium: { boy: '1200mg', girl: '1000mg' }, vitaminD: { boy: '10µg', girl: '10µg' }, zinc: { boy: '15mg', girl: '12mg' }, magnesium: { boy: '360mg', girl: '320mg' }, vitaminK: { boy: '120µg', girl: '90µg' }, folate: { boy: '400µg', girl: '400µg' } }
};

// === SEO 建議：為了讓食譜 Schema 完整，建議未來補上 image 欄位 (圖片網址) ===
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

  // === SEO 修改：生成結構化資料 (JSON-LD) ===
  const generateStructuredData = () => {
    // 1. FAQ Schema (針對衛教區塊)
    const faqSchema = {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "蛋白質對兒童長高有什麼幫助？", "acceptedAnswer": { "@type": "Answer", "text": "蛋白質是生長激素分泌的關鍵，就像蓋房子的磚塊，缺乏蛋白質會直接影響生長速度。" } },
        { "@type": "Question", "name": "鈣質攝取多少才夠？", "acceptedAnswer": { "@type": "Answer", "text": "鈣質是骨骼硬度的來源。根據國健署 DRIs，不同年齡層需求不同，例如 10-12 歲兒童每日建議攝取 1000mg。" } },
        { "@type": "Question", "name": "為什麼要補充鋅和鎂？", "acceptedAnswer": { "@type": "Answer", "text": "鋅是細胞分裂與蛋白質合成的催化劑；鎂則能幫助放鬆肌肉與神經，引導深層睡眠，這正是生長激素分泌的高峰期。" } }
      ]
    };

    // 2. Recipe Schema (針對食譜區塊)
    // 注意：Google 建議食譜要有圖片 (image)，若目前無圖，Search Console 可能會出現黃色警告，但不影響索引。
    const recipeSchemas = recipes.map(r => ({
      "@type": "Recipe",
      "name": r.title,
      "description": r.description,
      "author": { "@type": "Person", "name": "林醫師" },
      "recipeCategory": r.category === 'protein' ? '高蛋白料理' : '兒童成長料理',
      "recipeIngredient": r.ingredients,
      "recipeInstructions": [{ "@type": "HowToStep", "text": r.steps }],
      // "image": "https://your-domain.com/path-to-image.webp" // 建議補上
    }));

    // 3. WebApplication Schema (針對計算機功能)
    const appSchema = {
      "@type": "WebApplication",
      "name": "兒童生長營養計算機",
      "applicationCategory": "HealthApplication",
      "operatingSystem": "Web",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "TWD" },
      "featureList": "依據衛福部 DRIs 計算每日營養需求, 兒童生長食譜推薦"
    };

    return JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [faqSchema, ...recipeSchemas, appSchema]
    });
  };
  // ============================================

  return (
    // SEO 修改：將外層 div 改為 article 或 section，增加語意
    <article className="space-y-8 max-w-5xl mx-auto">
      
      {/* SEO 修改：注入 JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: generateStructuredData() }} />

      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#fffbeb]  pb-2 px-4">
          兒童客製成長營養藍圖
        </h1>
        {/* SEO 修改：增加簡短描述，讓搜尋引擎抓取關鍵字 */}
        <p className="text-[#fcd34d] mt-2 text-lg font-medium opacity-90 hidden md:block">
          結合醫師專業建議與國健署 DRIs 數據，為您的孩子計算蛋白質、鈣質需求，並提供專屬長高食譜。
        </p>
      </header>

      {/* 1. 輸入區塊 */}
      {/* SEO 修改：使用 section 標籤 */}
      <section aria-label="基本資料輸入" className="bg-[#fffbeb] border-2 border-[#fbbf24] rounded-2xl p-6 md:p-8 shadow-lg">
        <h2 className="text-xl md:text-2xl font-bold text-[#b45309] border-b-2 border-[#fcd34d] pb-3 mb-6 flex items-center">
          <span className="bg-[#f59e0b] text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm flex-shrink-0">1</span>
          建立孩子的基本檔案
        </h2>

        {/* ... (輸入欄位程式碼維持不變) ... */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label htmlFor="child-age" className="block text-base font-bold text-[#92400e] mb-2 ml-1">孩子的年齡 (1-18歲)</label>
              <input 
                id="child-age" /* SEO 修改：加入 id 以對應 label */
                type="number" 
                value={age} 
                onChange={(e) => setAge(e.target.value)} 
                min="1" 
                max="18"
                className="w-full rounded-xl border-2 border-[#fbbf24] focus:border-[#b45309] focus:ring-2 focus:ring-[#fcd34d] py-3.5 px-4 bg-white text-lg text-[#78350f] placeholder-amber-200 shadow-sm outline-none transition-all"
                placeholder="例如：10" 
              />
            </div>

            <div>
              <span className="block text-base font-bold text-[#92400e] mb-2 ml-1">生理性別</span>
              <div className="flex gap-4" role="group" aria-label="性別選擇">
                 {/* ... (按鈕程式碼維持不變) ... */}
                 <button onClick={() => setGender('boy')} className={`flex-1 py-3.5 rounded-xl border-2 font-bold shadow-sm transition-all ${gender === 'boy' ? 'bg-[#fcd34d] border-[#b45309] text-[#78350f] ring-2 ring-[#fcd34d]' : 'bg-white border-[#fbbf24] text-amber-500 hover:bg-amber-50'}`}>👦 男孩</button>
                 <button onClick={() => setGender('girl')} className={`flex-1 py-3.5 rounded-xl border-2 font-bold shadow-sm transition-all ${gender === 'girl' ? 'bg-[#fcd34d] border-[#b45309] text-[#78350f] ring-2 ring-[#fcd34d]' : 'bg-white border-[#fbbf24] text-amber-500 hover:bg-amber-50'}`}>👧 女孩</button>
              </div>
            </div>
          </div>

          <div>
            <h3 className="block text-base font-bold text-[#92400e] mb-3">飲食習慣與特殊狀況</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { key: 'isPicky', label: '愛挑食' }, 
                { key: 'isAllergic', label: '食物過敏' }, { key: 'isHighActivity', label: '高活動量' }
              ].map((item: any) => (
                <label key={item.key} className={`flex items-center p-3 border-2 rounded-xl cursor-pointer transition-all ${conditions[item.key as keyof typeof conditions] ? 'bg-[#fff7ed] border-[#b45309] text-[#78350f]' : 'bg-white border-transparent hover:border-[#fcd34d] text-[#92400e]/70'}`}>
                  <input type="checkbox" checked={conditions[item.key as keyof typeof conditions]} onChange={(e) => setConditions({...conditions, [item.key]: e.target.checked})} className="h-5 w-5 text-[#b45309] rounded focus:ring-[#b45309] border-[#fcd34d]" />
                  <span className="ml-2 font-medium">{item.label}</span>
                </label>
              ))}
            </div>
            {conditions.isAllergic && (
              <input type="text" value={allergyText} onChange={(e) => setAllergyText(e.target.value)}
                     className="mt-3 block w-full rounded-lg border-2 border-[#fcd34d] py-2 px-3 bg-white text-[#78350f] placeholder-amber-300 outline-none focus:border-[#b45309]"
                     placeholder="請備註過敏原，如：蝦蟹、花生..." aria-label="過敏原輸入" />
            )}
          </div>
        </div>

        <div className="mt-8 text-center">
          <button onClick={handleGenerate} className="w-full sm:w-auto inline-flex justify-center items-center rounded-full bg-[#b45309] text-[#fffbeb] py-3 px-12 text-lg font-bold shadow-md hover:bg-[#92400e] hover:shadow-lg transition-all duration-300">
            <span className="mr-2">✨</span> 生成專屬營養建議
          </button>
        </div>
      </section>

      {/* 2. 運算結果區 */}
      {result && (
        <section aria-label="運算結果" className="bg-white border-2 border-[#e2e8f0] rounded-2xl p-6 md:p-8 shadow-lg scroll-mt-24 animate-fadeIn">
           {/* ... (結果區塊程式碼維持不變，僅需確認標題層級 h2/h3 正確) ... */}
           <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0e7490]">
              <span className="text-[#0891b2] border-b-2 border-[#0891b2] pb-1">{result.age}歲 {result.gender === 'boy' ? '男孩' : '女孩'}</span> 的專屬營養建議
            </h2>
            <p className="text-[#64748b] mt-2 text-sm">數值根據國健署 DRIs 第八版量身計算</p>
          </div>
          {/* ... (中間顯示數據的 div 維持不變) ... */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* 左側：每日核心營養 */}
            <div className="bg-[#f0f9ff] p-5 border-l-4 border-[#0891b2] rounded-r-lg">
              <h3 className="text-lg font-bold text-[#0e7490] mb-4 flex items-center">📊 每日核心營養</h3>
              <div className="space-y-3">
                {[ { l: '蛋白質', v: result.rec.protein[result.gender] }, { l: '鈣質', v: result.rec.calcium[result.gender] }, { l: '維生素 D', v: result.rec.vitaminD[result.gender] } ].map((i, idx) => (
                  <div key={idx} className="flex justify-between border-b border-[#cffafe] pb-2 last:border-0">
                    <span className="text-[#334155] font-medium">{i.l}</span><span className="font-bold text-[#0e7490]">{i.v}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* 右側：關鍵微量元素 */}
            <div className="bg-[#f0f9ff] p-5 border-l-4 border-[#0891b2] rounded-r-lg">
              <h3 className="text-lg font-bold text-[#0e7490] mb-4 flex items-center">💊 關鍵微量元素</h3>
              <div className="grid grid-cols-2 gap-4">
                {[ { l: '鋅', v: result.rec.zinc[result.gender] }, { l: '鎂', v: result.rec.magnesium[result.gender] }, { l: '維生素 K', v: result.rec.vitaminK[result.gender] }, { l: '葉酸', v: result.rec.folate[result.gender] } ].map((i, idx) => (
                  <div key={idx}><span className="text-[#64748b] text-xs block mb-1">{i.l}</span><div className="font-bold text-[#155e75] text-lg">{i.v}</div></div>
                ))}
              </div>
            </div>
          </div>
          {/* ... (一日飲食範例與叮嚀維持不變) ... */}
          <div className="mt-8">
             <h4 className="text-xl font-bold text-[#b45309] mb-4 flex items-center"><span className="bg-[#f59e0b] text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 text-sm">!</span>醫師推薦一日飲食範例</h4>
             <div className="bg-[#fffbeb] border border-[#fcd34d] rounded-xl p-5 space-y-4 text-[#78350f]">
               <div className="flex flex-col sm:flex-row border-b border-[#fcd34d]/30 pb-3 last:border-0 last:pb-0"><span className="font-bold text-[#b45309] w-20 shrink-0">早餐</span><span>全麥吐司夾起司蛋 + 無糖豆漿或鮮奶 + 小番茄</span></div>
               <div className="flex flex-col sm:flex-row border-b border-[#fcd34d]/30 pb-3 last:border-0 last:pb-0"><span className="font-bold text-[#b45309] w-20 shrink-0">午餐</span><span>雜糧飯 + 清蒸鱸魚 + 蒜炒深綠色蔬菜 + 蛤蜊湯</span></div>
               <div className="flex flex-col sm:flex-row border-b border-[#fcd34d]/30 pb-3 last:border-0 last:pb-0"><span className="font-bold text-[#b45309] w-20 shrink-0">點心</span><span>希臘優格淋蜂蜜 + 一小把堅果 (核桃/腰果)</span></div>
               <div className="flex flex-col sm:flex-row border-b border-[#fcd34d]/30 pb-3 last:border-0 last:pb-0"><span className="font-bold text-[#b45309] w-20 shrink-0">晚餐</span><span>糙米飯 + 蔥爆牛肉 + 毛豆炒豆干 + 季節水果</span></div>
             </div>
             {(result.conditions.isPicky || result.conditions.isAllergic || result.conditions.isHighActivity) && (
              <div className="mt-6 bg-[#f0f9ff] border-l-4 border-[#0891b2] p-4 rounded-r-lg">
                <h5 className="font-bold text-[#0e7490] mb-2 flex items-center">💡 林醫師的個人化叮嚀</h5>
                <ul className="space-y-2 text-sm text-[#334155]">
                  {result.conditions.isPicky && <li className="flex items-start"><span className="text-[#0891b2] mr-2">●</span><span><b>針對挑食：</b>試著將蔬菜切碎混入漢堡排或煎蛋中，增加色彩吸引力。</span></li>}
                   {result.conditions.isAllergic && <li className="flex items-start"><span className="text-[#0891b2] mr-2">●</span><span><b>過敏注意：</b>已記錄避開「{result.allergyText || '過敏原'}」。建議尋找替代營養源（如黑芝麻補鈣）。</span></li>}
                  {result.conditions.isHighActivity && <li className="flex items-start"><span className="text-[#0891b2] mr-2">●</span><span><b>高活動量：</b>運動後30分鐘內補充碳水+蛋白質（如香蕉+豆漿），修補肌肉。</span></li>}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 3. 衛教資訊 */}
      {/* SEO 修改：使用 section 標籤 */}
      <section aria-label="長高營養知識" className="bg-[#fffbeb] border-2 border-[#fbbf24] rounded-2xl p-6 md:p-8 shadow-lg">
        {/* ... (衛教內容維持不變) ... */}
        <h2 className="text-xl md:text-2xl font-bold text-[#b45309] border-b-2 border-[#fcd34d] pb-3 mb-6 flex items-center">
          <span className="bg-[#f59e0b] text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm flex-shrink-0">2</span>
          解密長高的營養密碼
        </h2>
        
        <div className="space-y-6">
          <div className="flex items-start">
             <span className="bg-[#f59e0b] text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">1</span>
             <div className="text-[#92400e]">
                <strong className="text-[#b45309] text-lg block mb-1">長高黃金金三角：生長的基礎建材</strong>
                <p className="mb-3 text-[#78350f]">如果不給磚塊和水泥，房子是蓋不高的。這三種營養素是絕對不能缺少的基礎。</p>
                {/* SEO 修改：使用 ul/li 列表標籤強化結構 */}
                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 list-none p-0">
                    <li className="bg-white p-3 rounded-lg border border-[#fcd34d]"><strong className="text-[#dc2626] block">蛋白質</strong><span className="text-sm text-gray-600">刺激生長激素分泌</span></li>
                    <li className="bg-white p-3 rounded-lg border border-[#fcd34d]"><strong className="text-[#dc2626] block">鈣質</strong><span className="text-sm text-gray-600">骨骼硬度來源</span></li>
                    <li className="bg-white p-3 rounded-lg border border-[#fcd34d]"><strong className="text-[#dc2626] block">維生素 D</strong><span className="text-sm text-gray-600">鈣質的搬運工</span></li>
                </ul>
             </div>
          </div>

        <div className="flex items-start border-t border-[#fcd34d]/50 pt-6">
           <span className="bg-[#f59e0b] text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">2</span>
           <div className="text-[#92400e] w-full">
               <strong className="text-[#0891b2] text-lg block mb-1">成長加速器：不可或缺的輔助隊友</strong>
               <ul className="list-none space-y-5 mt-3">
                   {/* ... (維持原本的 li 結構，無需變動，內容已經很好了) ... */}
                   <li className="flex items-start"><span className="w-1.5 h-1.5 bg-[#0891b2] rounded-full mr-2 mt-2.5 flex-shrink-0"></span><div className="text-[#78350f]"><strong>鋅 - 生長發育的點火器：</strong><p className="mb-1">催化細胞分裂與蛋白質合成的關鍵角色...</p><span className="text-sm text-[#9a3412] inline-block bg-[#ffedd5] px-2 py-0.5 rounded border border-[#fed7aa]">推薦食物：蛤蜊、牡蠣、紅肉(牛肉)、腰果</span></div></li>
                   <li className="flex items-start"><span className="w-1.5 h-1.5 bg-[#0891b2] rounded-full mr-2 mt-2.5 flex-shrink-0"></span><div className="text-[#78350f]"><strong>鎂 - 深層睡眠的守門員：</strong><p className="mb-1">負責放鬆緊繃的神經與肌肉...</p><span className="text-sm text-[#9a3412] inline-block bg-[#ffedd5] px-2 py-0.5 rounded border border-[#fed7aa]">推薦食物：菠菜、香蕉、杏仁、南瓜子</span></div></li>
                   <li className="flex items-start"><span className="w-1.5 h-1.5 bg-[#0891b2] rounded-full mr-2 mt-2.5 flex-shrink-0"></span><div className="text-[#78350f]"><strong>魚油 (Omega-3) - 體內環境的抗炎盾：</strong><p className="mb-1">幫助身體建立低發炎的穩定環境...</p><span className="text-sm text-[#9a3412] inline-block bg-[#ffedd5] px-2 py-0.5 rounded border border-[#fed7aa]">推薦食物：鮭魚、秋刀魚、鯖魚、核桃</span></div></li>
                   <li className="flex items-start"><span className="w-1.5 h-1.5 bg-[#0891b2] rounded-full mr-2 mt-2.5 flex-shrink-0"></span><div className="text-[#78350f]"><strong>維生素 A - 骨骼架構的雕塑家：</strong><p className="mb-1">負責調節骨細胞的代謝平衡...</p><span className="text-sm text-[#9a3412] inline-block bg-[#ffedd5] px-2 py-0.5 rounded border border-[#fed7aa]">推薦食物：蛋黃、奶類製品、胡蘿蔔、地瓜</span></div></li>
                   <li className="flex items-start"><span className="w-1.5 h-1.5 bg-[#0891b2] rounded-full mr-2 mt-2.5 flex-shrink-0"></span><div className="text-[#78350f]"><strong>維生素 K2 - 骨質建設的領航員：</strong><p className="mb-1">扮演類似導航的角色...</p><span className="text-sm text-[#9a3412] inline-block bg-[#ffedd5] px-2 py-0.5 rounded border border-[#fed7aa]">推薦食物：綠花椰、菠菜、深綠色蔬菜(芥藍、羽衣甘藍)</span></div></li>
                   <li className="flex items-start"><span className="w-1.5 h-1.5 bg-[#0891b2] rounded-full mr-2 mt-2.5 flex-shrink-0"></span><div className="text-[#78350f]"><strong>葉酸 - 細胞分裂的原動力：</strong><p className="mb-1">製造 DNA 的基礎原料...</p><span className="text-sm text-[#9a3412] inline-block bg-[#ffedd5] px-2 py-0.5 rounded border border-[#fed7aa]">推薦食物：柑橘類、豆類、菠菜、蘆筍</span></div></li>
               </ul>
           </div>
       </div>
        </div>
      </section>

      {/* 4. 食譜資料庫區塊 */}
      {/* SEO 修改：使用 section 標籤 */}
      <section aria-label="長高食譜" className="bg-[#fffbeb] border-2 border-[#fbbf24] rounded-2xl p-6 md:p-8 shadow-lg">
        <h2 className="text-xl md:text-2xl font-bold text-[#b45309] border-b-2 border-[#fcd34d] pb-3 mb-6 flex items-center">
          <span className="bg-[#f59e0b] text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm flex-shrink-0">3</span>
          長高食譜資料庫
        </h2>

        {/* 篩選標籤 */}
        <div className="flex flex-wrap gap-3 mb-8" role="tablist">
          {/* ... (按鈕維持不變，建議加 role="tab") ... */}
          {[ { id: 'all', label: '全部食譜' }, { id: 'protein', label: '💪 優質蛋白' }, { id: 'calcium', label: '🥛 高鈣強骨' }, { id: 'auxiliary', label: '🥗 營養神隊友' } ].map(tab => (
            <button key={tab.id} onClick={() => setRecipeFilter(tab.id)} role="tab" aria-selected={recipeFilter === tab.id} className={`py-2 px-5 rounded-full text-sm font-bold transition-all border-2 ${recipeFilter === tab.id ? 'bg-[#b45309] text-white border-[#b45309] shadow-md' : 'bg-white text-[#92400e] border-[#fcd34d] hover:bg-amber-50'}`}>
              {tab.label}
            </button>
          ))}
        </div>

        {/* 食譜卡片網格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.length > 0 ? filteredRecipes.map((recipe, idx) => (
            // SEO 修改：使用 article 包覆單一食譜
            <article key={idx} className="bg-white rounded-2xl p-6 border-2 border-[#fcd34d]/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
              <div className="flex justify-between items-start mb-3">
                {/* 使用 h3 當作食譜標題 */}
                <h3 className="text-lg font-bold text-[#b45309] leading-tight">{recipe.title}</h3>
                <span className={`text-xs font-bold px-2 py-1 rounded-md flex-shrink-0 ml-2 ${recipe.category === 'protein' ? 'bg-red-50 text-red-600 border border-red-200' : recipe.category === 'calcium' ? 'bg-blue-50 text-blue-600 border border-blue-200' : 'bg-green-50 text-green-600 border border-green-200'}`}>
                  {recipe.category === 'protein' ? '優質蛋白' : recipe.category === 'calcium' ? '高鈣強骨' : '輔助營養'}
                </span>
              </div>
              
              <p className="text-sm text-[#78350f] mb-4 flex-grow italic">
                {recipe.description}
              </p>

              <div className="space-y-3 border-t border-amber-100 pt-4 mt-auto">
                <div>
                  <p className="text-xs font-bold text-[#b45309] uppercase mb-1 flex items-center">
                    <span className="w-1 h-3 bg-[#f59e0b] mr-1.5 rounded-full"></span>食材準備
                  </p>
                  <p className="text-sm text-gray-700 font-medium leading-relaxed">
                    {recipe.ingredients.join('、')}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#b45309] uppercase mb-1 flex items-center">
                    <span className="w-1 h-3 bg-[#f59e0b] mr-1.5 rounded-full"></span>烹調步驟
                  </p>
                  <p className="text-sm text-gray-600 leading-snug">
                    {recipe.steps}
                  </p>
                </div>
              </div>
            </article>
          )) : (
            <div className="col-span-full text-center text-[#92400e]/50 py-10 bg-white/50 rounded-xl border-2 border-dashed border-[#fcd34d]">
              目前尚無此分類食譜，醫護團隊持續更新中
            </div>
          )}
        </div>
      </section>
    </article>
  );
}