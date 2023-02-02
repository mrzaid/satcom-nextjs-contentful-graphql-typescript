/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['images.ctfassets.net'],
    unoptimized: true
  },
  // env:{
  //   CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
  //   CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
  // }
}

module.exports = nextConfig
