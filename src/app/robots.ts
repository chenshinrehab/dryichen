// app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.SITE_URL || 'https://你的正式網域.com'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // 如果有後台或不想被搜尋的頁面
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}