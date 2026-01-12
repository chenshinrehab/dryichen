// src/app/sitemap.ts
import { MetadataRoute } from 'next'
import { newsData } from '@/data/news'
import { treatments } from '@/data/treatments'
import { diseaseCategories } from '@/data/diseases'
import { weightLossPrograms } from '@/data/weightLoss'
import { facilitiesData } from '@/data/facilities'

const SITE_URL = 'https://www.dryichen.com.tw'

export default function sitemap(): MetadataRoute.Sitemap {
  
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
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // 2. 動態文章頁面 (News)
  const newsRoutes = newsData.map((post) => ({
    url: `${SITE_URL}/about/news/${post.id}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // 3. 動態治療項目 (Treatments)
  const treatmentRoutes = treatments.map((t) => ({
    url: `${SITE_URL}/treatments/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9, // 治療項目很重要，權重設高一點
  }))

  // 4. 動態疾病衛教 (Diseases) - 包含分類與單頁
  const diseaseCategoryRoutes = diseaseCategories.map((c) => ({
    url: `${SITE_URL}/diseases/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const diseaseDetailRoutes = diseaseCategories.flatMap(c => 
    c.diseases.map(d => ({
        url: `${SITE_URL}/diseases/${c.slug}/${d.id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }))
  )

  // 5. 減重與骨齡
  const weightRoutes = weightLossPrograms.map((p) => ({
    url: `${SITE_URL}/weight-bone/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  // 6. 診所設備
  const facilityRoutes = facilitiesData.map((f) => ({
    url: `${SITE_URL}/about/clinic/${f.id}`,
    lastModified: new Date(),
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