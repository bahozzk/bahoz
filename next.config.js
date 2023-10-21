/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.com/user/537687740418883615',
        permanent: true,
      },
      {
        source: '/github',
        destination: 'https://github.com/MustqfaCan',
        permanent: true,
      },
      {
        source: '/instagram',
        destination: 'https://instagram.com/mustafacangoktas',
        permanent: true,
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/mustqfacan',
        permanent: true,
      },
      {
        source: '/youtube',
        destination: 'https://www.youtube.com/channel/UCK7S8aZBQjUh3anaEOYHy4A',
        permanent: true,
      },
      {
        source: '/caneria',
        destination: 'https://caneria.net',
        permanent: true,
      }
    ]
  }
}

module.exports = nextConfig
