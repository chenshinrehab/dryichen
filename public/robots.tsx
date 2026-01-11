import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://dryichen-4ze1.vercel.app' // ⚠️ 請確認這是您的正確網址

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // 如果有後台路徑不想被搜尋，寫在這裡
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}