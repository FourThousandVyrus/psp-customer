/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@links/ui', '@links/utils', '@links/types'],
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
}

module.exports = nextConfig
