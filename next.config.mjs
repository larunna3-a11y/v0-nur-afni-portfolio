/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // Redirect old /work-with-me routes to /hire-me
      {
        source: '/work-with-me',
        destination: '/hire-me',
        permanent: true,
      },
      {
        source: '/work-with-me/consulting',
        destination: '/hire-me',
        permanent: true,
      },
      {
        source: '/work-with-me/marketing',
        destination: '/hire-me',
        permanent: true,
      },
      {
        source: '/work-with-me/builder',
        destination: '/hire-me',
        permanent: true,
      },
      {
        source: '/work-with-me/learning',
        destination: '/hire-me',
        permanent: true,
      },
      // Keep portfolio accessible via both old and new paths
      {
        source: '/case-studies',
        destination: '/portfolio',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
