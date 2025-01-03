/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'bjornmelin.io',
            }
        ]
    },
    trailingSlash: true,
};

export default nextConfig;