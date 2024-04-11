/** @type {import('next').NextConfig} */

import { config } from "dotenv";
config();

const nextConfig = {
  output: "export",
  skipTrailingSlashRedirect: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
