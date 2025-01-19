/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  productionBrowserSourceMaps: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.chucknorris.host',
      },
    ],
  },
  // Add fetch configuration
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;