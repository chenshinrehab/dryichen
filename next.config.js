/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',  // <--- 請務必註解掉或是直接刪除這一行
  images: {
    unoptimized: true,
  },
  // 如果未來有其他設定，加在這裡
};

module.exports = nextConfig;