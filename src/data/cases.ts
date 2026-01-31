// src/data/cases.ts

export interface CaseStudy {
  id: string;
  title: string;
  summary: string;     // 列表顯示的摘要
  contentHtml: string; // ✨ 新增：內頁顯示的完整 HTML 內容
  date: string;
  category: string;
  tags: string[];
  coverImage: string;
  relatedTreatments: string[];
  // SEO 欄位
  seoTitle?: string;
  seoDescription?: string;
}

// 模擬資料 (記得補上 contentHtml)
export const casesData: CaseStudy[] = [
  {
    id: 'case-knee-prp-01',
    title: '70歲退化性關節炎：PRP注射改善案例',
    summary: '患者膝蓋長期疼痛，經X光診斷為退化性關節炎。施打3次PRP後，疼痛指數顯著下降。',
    contentHtml: `
      <p>這裡放詳細的治療過程文字...</p>
      <h3>診斷過程</h3>
      <p>經X光拍攝發現內側關節間隙變窄...</p>
      <h3>治療方案</h3>
      <p>採用高濃度血小板血漿(PRP)注射...</p>
    `,
    date: '2024-01-15',
    category: 'PRP注射',
    tags: ['膝蓋疼痛', 'PRP', '免開刀'],
    coverImage: '/images/news/case-knee.jpg',
    relatedTreatments: ['prp-injection', 'regenerative-medicine']
  },
  // ... 其他案例
];

// ==========================================
// ✨ 新增這個 Helper 函式，內頁才抓得到資料
// ==========================================
export function getCaseById(id: string): CaseStudy | undefined {
  return casesData.find((post) => post.id === id);
}

// 這是之前寫給療程頁用的
export function getRelatedCases(slug: string, limit: number = 3): CaseStudy[] {
  const filtered = casesData.filter(c => c.relatedTreatments.includes(slug));
  return filtered.length === 0 ? casesData.slice(0, limit) : filtered.slice(0, limit);
}