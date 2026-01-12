// src/app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // 如果有後台或不想被搜尋的頁面可加這
    },
    sitemap: 'https://www.dryichen.com.tw/sitemap.xml',
  }
}