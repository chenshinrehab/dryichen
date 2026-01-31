// src/data/cases.ts

export interface CaseStudy {
  id: string;
  title: string;
  summary: string;     // 列表顯示的摘要
  contentHtml: string; // 內頁顯示的完整 HTML 內容
  date: string;
  category: string;
  tags: string[];
  coverImage: string;
  relatedTreatments: string[]; // 對應療程的 slug，例如 ['prp-injection']
  // SEO 欄位
  seoTitle?: string;
  seoDescription?: string;
}

// 模擬資料 (請確保相關療程 ID 與 treatments 內的 slug 一致)
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
  // 您可以在此處新增更多案例
];

/**
 * 根據 ID 抓取單一案例資料
 */
export function getCaseById(id: string): CaseStudy | undefined {
  return casesData.find((post) => post.id === id);
}

/**
 * 根據療程 slug 抓取相關成功案例
 * @param slug 療程的識別碼 (例如 treatment.slug)
 * @param limit 顯示數量限制
 */
export function getRelatedCases(slug: string | undefined, limit: number = 3): CaseStudy[] {
  // 如果沒有傳入 slug，直接回傳前幾筆案例
  if (!slug) return casesData.slice(0, limit);

  // 篩選出 relatedTreatments 陣列中包含該 slug 的案例
  const filtered = casesData.filter(c => 
    c.relatedTreatments && c.relatedTreatments.includes(slug)
  );

  // 如果找不到相關案例，回傳前幾筆預設資料，避免頁面出現大空白
  if (filtered.length === 0) {
    return casesData.slice(0, limit);
  }

  return filtered.slice(0, limit);
}