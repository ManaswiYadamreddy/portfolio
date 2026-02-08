// const withPWA = require('next-pwa');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  images: {
    domains: ['i.ibb.co'],
    // 🔴 IMPORTANT for next export + GitHub Pages
    unoptimized: true,
  },

  // 👉 Export as a static site (GitHub Pages friendly)
  output: 'export',

  // 👉 App will live at https://<username>.github.io/portfolio
  basePath: isProd ? '/portfolio' : '',
  assetPrefix: isProd ? '/portfolio/' : '',

  // 👉 Helps avoid some static routing issues (/page/ instead of /page)
  trailingSlash: true,

  reactStrictMode: false,
  swcMinify: true,

  typescript: {
    tsconfigPath: 'tsconfig.json',
  },

  // Optional but avoids ESLint version drama during build
  eslint: {
    ignoreDuringBuilds: true,
  },
};
