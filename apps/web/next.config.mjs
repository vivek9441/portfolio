/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@bjornmelin/ui"],
  experimental: {
    appDir: true,
    typedRoutes: true,
    optimizeCss: true,
    serverActions: true,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '*.bjornmelin.io' },
    ],
    formats: ['image/avif', 'image/webp'], // Optimized formats
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  compress: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
};

export default nextConfig;
