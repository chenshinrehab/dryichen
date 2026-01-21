// src/app/sitemap.ts
import { MetadataRoute } from 'next'
import { newsList } from '@/data/news' // ✅ 修改：只導入輕量列表
import { treatmentsList } from '@/data/treatments'
import { diseaseCategoriesList } from '@/data/diseases'
import { weightLossPrograms } from '@/data/weightLoss'
import { facilitiesData } from '@/data/facilities'

// ✅ 新增：設定快取 24 小時 (單位：秒)
// 這會讓 Next.js 在伺服器端快取這份檔案，不用每次請求都重新運算
export const revalidate = 86400

const SITE_URL = 'https://www.dryichen.com.tw'

export default function sitemap(): MetadataRoute.Sitemap {
  
  // 設定一個基準時間 (例如今天)，用於靜態頁面
  // 因為有設定 revalidate，這個時間每 24 小時才會更新一次，不會影響效能
  const lastModifiedTime = new Date()

  // 1. 固定 頁面
  const staticRoutes = [
    '',
    '/about',
    '/about/doctors',
    '/about/clinic',
    '/about/news',
    '/treatments',
    '/diseases',
    '/weight-bone',
    '/booking',
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: lastModifiedTime,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // 2. 動態文章頁面 (News)
  // ✅ 修改：使用 newsList，且 post.date 已經修正為純日期格式，可直接轉換
  const newsRoutes = newsList.map((post) => ({
    url: `${SITE_URL}/about/news/${post.id}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // 3. 動態治療項目 (Treatments)
  const treatmentRoutes = treatmentsList.map((t) => ({
    url: `${SITE_URL}/treatments/${t.slug}`,
    lastModified: lastModifiedTime,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  // 4. 動態疾病衛教 (Diseases) - 包含分類與單頁
  const diseaseCategoryRoutes = diseaseCategoriesList.map((c) => ({
    url: `${SITE_URL}/diseases/${c.slug}`,
    lastModified: lastModifiedTime,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const diseaseDetailRoutes = diseaseCategoriesList.flatMap(c => 
    c.diseases.map(d => ({
        url: `${SITE_URL}/diseases/${c.slug}/${d.id}`,
        lastModified: lastModifiedTime,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }))
  )

  // 5. 減重與骨齡
  const weightRoutes = weightLossPrograms.map((p) => ({
    url: `${SITE_URL}/weight-bone/${p.slug}`,
    lastModified: lastModifiedTime,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  // 6. 診所設備
  const facilityRoutes = facilitiesData.map((f) => ({
    url: `${SITE_URL}/about/clinic/${f.id}`,
    lastModified: lastModifiedTime,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [
    ...staticRoutes,
    ...newsRoutes,
    ...treatmentRoutes,
    ...diseaseCategoryRoutes,
    ...diseaseDetailRoutes,
    ...weightRoutes,
    ...facilityRoutes,
  ]
}