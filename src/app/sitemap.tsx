// src/app/sitemap.ts
import { MetadataRoute } from 'next'
import { newsList } from '@/data/news' 
import { treatmentsList } from '@/data/treatments'
import { diseaseCategoriesList } from '@/data/diseases'
import { weightLossPrograms } from '@/data/weightLoss'
import { facilitiesData } from '@/data/facilities'

// 設定快取 24 小時 (單位：秒)
export const revalidate = 86400

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.dryichen.com.tw'

export default function sitemap(): MetadataRoute.Sitemap {
  
  // 基準時間：用於沒有設定 lastModified 的頁面 (預設為部署當下時間)
  const lastModifiedTime = new Date()

  // 1. 固定靜態頁面
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
  // 優先使用 lastModified，如果沒填則使用發布日期 (date)
  const newsRoutes = newsList.map((post) => {
    // 這裡使用 Type Assertion (as any) 是為了保險，
    // 以防您的 NewsMetadata 介面還沒更新 lastModified 欄位定義
    const modDate = (post as any).lastModified ? (post as any).lastModified : post.date;
    
    return {
      url: `${SITE_URL}/about/news/${post.id}`,
      lastModified: new Date(modDate),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }
  })

  // 3. 動態治療項目 (Treatments)
  const treatmentRoutes = treatmentsList.map((t) => {
    const modDate = (t as any).lastModified ? new Date((t as any).lastModified) : lastModifiedTime;
    
    return {
      url: `${SITE_URL}/treatments/${t.slug}`,
      lastModified: modDate,
      changeFrequency: 'weekly' as const, // 治療項目可能常更新，設為 weekly
      priority: 0.9,
    }
  })

  // 4. 動態疾病衛教 (Diseases)
  
  // 4-1. 分類頁面
  const diseaseCategoryRoutes = diseaseCategoriesList.map((c) => {
    // 雖然分類頁可能沒有 lastModified，但您可以視需要加上
    // 這裡預設使用部署時間，或您可以邏輯判斷(取該分類下最新文章的時間)
    return {
      url: `${SITE_URL}/diseases/${c.slug}`,
      lastModified: lastModifiedTime,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }
  })

  // 4-2. 疾病單頁
  const diseaseDetailRoutes = diseaseCategoriesList.flatMap(c => 
    c.diseases.map(d => {
        const modDate = (d as any).lastModified ? new Date((d as any).lastModified) : lastModifiedTime;
        
        // 注意：這裡使用 d.slug (建議) 或 d.id 需與您頁面路由一致
        // 假設您的路由是 [category]/[slug]
        return {
            url: `${SITE_URL}/diseases/${c.slug}/${d.slug}`,
            lastModified: modDate,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        }
    })
  )

  // 5. 減重與骨齡
  const weightRoutes = weightLossPrograms.map((p) => {
    const modDate = (p as any).lastModified ? new Date((p as any).lastModified) : lastModifiedTime;

    return {
      url: `${SITE_URL}/weight-bone/${p.slug}`,
      lastModified: modDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    }
  })

  // 6. 診所設備 (Facilities)
  // 您沒提到這個有加 lastModified，所以維持原狀 (使用當下時間)
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