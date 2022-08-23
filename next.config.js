const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? '/pauloandrade.art/' : '',
  publicRuntimeConfig: {
    // Will be available on both server and client
    basePath: isProd ? '/pauloandrade.art/' : '/'
  },

}

module.exports = nextConfig
