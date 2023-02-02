/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    fontLoaders: [
      {
        loader: '@next/font/local', src: [
          {
            path: './src/pages/fonts/Gotham-Black.woff2',
            weight: '400',
            style: 'normal',
          }
        ], options: {}
      }
    ]
  },
}

module.exports = nextConfig
