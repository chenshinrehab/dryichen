/** @type {import('next').NextConfig} */

// 定義安全性標頭
const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-XSS-Protection', value: '1; mode=block' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
];

const nextConfig = {
  // 1. 基本效能與安全性
  reactStrictMode: true,      // 開啟嚴格模式，提升穩定性
  poweredByHeader: false,    // 隱藏 Next.js 技術特徵

  // 2. 影像優化設定
  images: {
    // 如果未來照片變多，且部署在 Vercel，建議將此設為 (或刪除) 以開啟自動優化
    unoptimized: false , 
  },

  // 3. 標頭設定 (安全性 + Sitemap)
  async headers() {
    return [
      {
        // 將安全性標頭應用於全站網頁
        source: '/:path*',
        headers: securityHeaders,
      },
      {
        // 專對 Sitemap 的標頭鎖定
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml',
          },
        ],
      },
    ]
  },

  // 4. 網址標準化
  trailingSlash: false,

  // 5. 其他優化 (選用)
  // 如果你有使用外部 API 或特定網址跳轉，可以在這裡設定 redirects
};

module.exports = nextConfig;