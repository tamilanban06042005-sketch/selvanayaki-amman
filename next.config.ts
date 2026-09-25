import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow images from any remote host for flexibility.
    remotePatterns: [],
    // Local images (public/) work without remotePatterns.
    // unoptimized is removed — we want Next.js Image Optimization on Vercel.
  },
};

export default nextConfig;
