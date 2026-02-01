/** @type {import('next').NextConfig} */

// 定義安全性標頭
const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-XSS-Protection', value: '1; mode=block' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
  // ✨ 新增：權限策略 (進一步防止惡意腳本調用相機/麥克風等)
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()' }
];

const nextConfig = {
  // 1. 基本效能與安全性
  reactStrictMode: true,
  poweredByHeader: false,

  // 2. ✨ 影像優化設定 (大幅強化手機效能)
  images: {
    // 預設開啟 Vercel/Next 優化
    unoptimized: false, 
    // ✨ 優先使用 AVIF (比 WebP 小 20%)，不支援則退回 WebP
    formats: ['image/avif', 'image/webp'],
    // ✨ 設定快取時間 (秒)，讓瀏覽器跟 CDN 存久一點，減少伺服器負擔
    minimumCacheTTL: 60,
    // ✨ 針對不同裝置提供更精準的尺寸斷點
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // 3. ✨ 編譯器優化
  compiler: {
    // 在正式環境 (Production) 自動移除所有 console.log，減少 JS 體積
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // 4. 標頭設定
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml',
          },
          // ✨ 讓搜尋引擎知道 Sitemap 不需要頻繁快取
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, must-revalidate',
          },
        ],
      },
      // ✨ 針對靜態資源 (圖片/字體) 強制長快取
      {
        source: '/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
        ]
      }
    ]
  },

  // 5. 網址標準化
  trailingSlash: false,
};

module.exports = nextConfig;