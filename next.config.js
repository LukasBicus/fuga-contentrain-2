/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'attendio-library.attendio.online',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
