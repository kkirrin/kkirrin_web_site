import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // For now disable export to avoid favicon route error; can re-enable when needed for GH Pages
  // output: 'export',
  images: { 
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  reactStrictMode: true,

}

export default nextConfig
