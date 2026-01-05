/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/dryichen', // 配合您的 GitHub Repo 名稱
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // 禁用一些可能导致问题的功能
  distDir: 'out',
}

module.exports = nextConfig
