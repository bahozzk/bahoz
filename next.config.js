/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.com/user/673849208154882078',
        permanent: true,
      },
      {
        source: '/github',
        destination: 'https://github.com/bahozzk',
        permanent: true,
      },
      {
        source: '/instagram',
        destination: 'https://instagram.com/bahozzx',
        permanent: true,
      },
      {
        source: '/x',
        destination: 'https://x.com/bahozzk',
        permanent: true,
      },
      {
        source: '/youtube',
        destination: 'https://www.youtube.com/@BahozK',
        permanent: true,
      }
    ]
  }
}

module.exports = nextConfig
