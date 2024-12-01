/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.com/users/673849208154882078',
        permanent: true,
      },
      {
        source: '/spotify',
        destination: 'https://open.spotify.com/user/31qumprympw55vvhea4gwud5htwa?si=_Cy8oIHpSleUar29fGUCEw',
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
