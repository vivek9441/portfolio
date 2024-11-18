/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@bjornmelin/ui"], // Add shared UI package
  experimental: {
    typedRoutes: true,
    serverActions: true,
  },
};

export default nextConfig; 