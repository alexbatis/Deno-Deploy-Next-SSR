import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  productionBrowserSourceMaps: false,
  images: {
    domains: ['assets.chucknorris.host'], // Allow images from the Chuck Norris API
  },

};

export default nextConfig;

