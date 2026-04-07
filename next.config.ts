import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      // Allow up to 20 MB uploads for gallery/news photos
      bodySizeLimit: "20mb",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wyliefordenton.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "www.crosstimbersgazette.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
