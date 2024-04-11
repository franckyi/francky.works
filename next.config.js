/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  skipTrailingSlashRedirect: true,
  images: {
    unoptimized: true,
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: process.env.API_HOSTNAME,
    //     port: "",
    //     pathname: "/wp-content/uploads/**",
    //   },
    // ],
  },
};

// export default nextConfig;
module.exports = nextConfig;
