/** @type {import('next').NextConfig} */
const path = require('path')


const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  i18n: {
    locales: ['en-US','pt-BR'],
    defaultLocale: 'en-US',
  }
}

module.exports = nextConfig
