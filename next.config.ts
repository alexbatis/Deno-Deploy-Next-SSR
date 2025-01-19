import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  productionBrowserSourceMaps: false, // Add this to disable source maps in production
  webpack: (config, { isServer, dev }) => {
    // Disable source maps in production
    if (!dev) {
      config.devtool = false;
    }
    return config;
  },
};

export default nextConfig;