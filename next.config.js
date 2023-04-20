/** @type {import('next').NextConfig} */
const path = require('path')


const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  i18n: {
    locales: ['pt-BR','en-US'],
    defaultLocale: 'en-US',
  }
}

module.exports = nextConfig
