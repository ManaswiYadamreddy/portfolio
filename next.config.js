// next.config.js

module.exports = {
  images: {
    domains: ['i.ibb.co'],
    // You can keep this or remove it; not required for Vercel
    unoptimized: true,
  },


  trailingSlash: true,

  reactStrictMode: false,
  swcMinify: true,

  typescript: {
    tsconfigPath: 'tsconfig.json',
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
};
