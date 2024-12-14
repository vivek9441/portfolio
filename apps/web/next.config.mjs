/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@bjornmelin/ui"],
  experimental: {
    typedRoutes: true,
    optimizeCss: true,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '*.bjornmelin.io' },
    ],
    formats: ['image/avif', 'image/webp'],
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
