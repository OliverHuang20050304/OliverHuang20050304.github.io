import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/oliver20050304.github.io",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
