import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // 記得將 baseUrl 改成您未來的正式網域
  const baseUrl = 'https://dryichen.vercel.app' 
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/treatments`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/weight-bone`, // 您的重點頁面
      lastModified: new Date(),
      changeFrequency: 'weekly', // 經常更新
      priority: 0.9,
    },
    {
      url: `${baseUrl}/diseases`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/booking`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]
}