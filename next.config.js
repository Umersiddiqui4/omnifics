/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow common image hosting services
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '**',
        port: '',
        pathname: '/**',
      },
    ],
    // Alternative: Use unoptimized images (less secure but more flexible)
    unoptimized: true,
  },
}

module.exports = nextConfig
