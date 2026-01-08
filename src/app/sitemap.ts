// app/sitemap.ts
import { MetadataRoute } from 'next'
import { treatments } from '@/data/treatments' // 引用你的資料來源

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.SITE_URL || 'https://你的正式網域.com'

  // 1. 定義靜態頁面
  const staticRoutes = [
    '',
    '/treatments',
    '/weight-loss',
    '/diseases',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // 2. 定義動態頁面 (治療項目)
  const treatmentRoutes = treatments.map((treatment) => ({
    url: `${baseUrl}/treatments/${treatment.slug}`,
    lastModified: new Date(), // 如果你的資料有更新時間欄位，請用那個欄位
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...treatmentRoutes]
}