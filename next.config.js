/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable static export for GitHub Pages
  output: 'export',
  // Set basePath conditionally:
  // - If BASE_PATH env var is set, use it
  // - If custom domain (not github.io), use empty string
  // - Otherwise use /themes-frontend for GitHub Pages subdirectory
  basePath: process.env.BASE_PATH !== undefined 
    ? process.env.BASE_PATH 
    : (process.env.NEXT_PUBLIC_SITE_URL && !process.env.NEXT_PUBLIC_SITE_URL.includes('github.io'))
      ? ''
      : (process.env.NODE_ENV === 'production' ? '/themes-frontend' : ''),
  // Set trailingSlash for GitHub Pages compatibility
  trailingSlash: true,
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  // Add empty turbopack config to silence the warning
  turbopack: {},
  webpack: (config, { isServer }) => {
    // Enable WASM support
    config.experiments = {
      ...config.experiments,
      asyncWebAssembly: true,
    };
    
    // Handle .wasm files
    config.module.rules.push({
      test: /\.wasm$/,
      type: 'asset/resource',
    });
    
    return config;
  },
}

module.exports = nextConfig

