import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  // 記得將 baseUrl 改成您未來的正式網域
  const baseUrl = 'https://dryichen.vercel.app' 
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'], // 範例：不讓爬蟲抓 API 和後台
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}