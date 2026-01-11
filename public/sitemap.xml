import { MetadataRoute } from 'next'
import { getAllTreatmentSlugs } from '@/data/treatments'
import { getAllWeightLossProgramSlugs } from '@/data/weightLoss'
import { newsData } from '@/data/news'
import { facilitiesData } from '@/data/facilities'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dryichen-4ze1.vercel.app' // ⚠️ 請確認這是您的正確網址

  // 1. 靜態頁面
  const routes = [
    '',
    '/about',
    '/treatments',
    '/weight-bone',
    '/diseases',
    '/about/doctors',
    '/about/news',
    '/about/clinic',
    '/booking',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // 2. 動態頁面：治療項目
  const treatmentRoutes = getAllTreatmentSlugs().map((item) => ({
    url: `${baseUrl}/treatments/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // 3. 動態頁面：減重與骨齡
  const weightRoutes = getAllWeightLossProgramSlugs().map((item) => ({
    url: `${baseUrl}/weight-bone/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // 4. 動態頁面：最新消息
  const newsRoutes = newsData.map((item) => ({
    url: `${baseUrl}/about/news/${item.id}`,
    lastModified: new Date(item.date),
    changeFrequency: 'daily' as const,
    priority: 0.6,
  }))
  
  // 5. 動態頁面：診所設備
  const facilitiesRoutes = facilitiesData.map((item) => ({
    url: `${baseUrl}/about/clinic/${item.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...routes, ...treatmentRoutes, ...weightRoutes, ...newsRoutes, ...facilitiesRoutes]
}