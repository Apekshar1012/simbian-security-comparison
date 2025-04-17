/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config: any) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  experimental: {
    turbo: {
      loaders: {
        '.svg': ['@svgr/webpack'], // Example - check actual Turbopack API
      },
    },
  },
};

module.exports = nextConfig;