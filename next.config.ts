import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // This allows the build to complete even with the <img> tag warnings
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;