// src/data/cases.ts

export interface CaseStudy {
  id: string;
  title: string;
  summary: string;
  contentHtml: string;
  date: string;
  category: string;
  tags: string[];
  coverImage: string;
  relatedTreatments: string[]; 
  seoTitle?: string;
  seoDescription?: string;
}

export const casesData: CaseStudy[] = [
  {
    id: 'case-knee-prp-01',
    title: '70歲退化性關節炎：PRP注射改善案例',
    summary: '患者膝蓋長期疼痛，經X光診斷為退化性關節炎。施打3次PRP後，疼痛指數顯著下降。',
    contentHtml: `<p>詳細內容...</p>`,
    date: '2024-01-15',
    category: 'PRP注射',
    // 重點：這裡有 PRP Tag
    tags: ['KOA', 'PRP', '免開刀'], 
    coverImage: '/images/news/case-knee.jpg',
    // 這裡的 slug 與治療頁面的 'prp' 不一致，所以我們改用 tags 來對
    relatedTreatments: ['prp-injection', 'regenerative-medicine'] 
  },
  // ... 其他案例
];

export function getCaseById(id: string): CaseStudy | undefined {
  return casesData.find((post) => post.id === id);
}

/**
 * 修改後：根據 Tags 抓取相關案例
 * @param tags 治療項目的標籤 (例如 treatment.tags)
 * @param limit 顯示數量限制
 */
export function getRelatedCases(tags: string[] | undefined, limit: number = 3): CaseStudy[] {
  // 1. 如果治療項目沒有 tags，直接回傳空陣列 (不顯示)
  if (!tags || tags.length === 0) return [];

  // 2. 篩選邏輯：檢查案例的 tags 是否包含傳入的任一個 tag
  // 例如：治療有 'PRP'，案例也有 'PRP' -> 配對成功
  const filtered = casesData.filter(c => 
    c.tags && c.tags.some(caseTag => tags.includes(caseTag))
  );

  // 3. 回傳篩選結果 (若無配對則回傳空陣列，不自動補最新文章)
  return filtered.slice(0, limit);
}