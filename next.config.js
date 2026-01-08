/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  // basePath: '/dryichen',  <-- 這行一定要刪掉或加雙斜線註解掉！
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;


