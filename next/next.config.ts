import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // For now disable export to avoid favicon route error; can re-enable when needed for GH Pages
  // output: 'export',
  images: { unoptimized: true },
}

export default nextConfig
