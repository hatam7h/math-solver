/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Ensure static files are properly referenced
  assetPrefix: '.',
  // Disable image optimization since we're using unoptimized images
  experimental: {
    images: {
      unoptimized: true,
    },
  },
};

export default nextConfig;
