import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true, // emits out/projects/<slug>/index.html → clean nginx URLs
  images: { unoptimized: true }, // no image optimizer server in static export
};

export default nextConfig;
