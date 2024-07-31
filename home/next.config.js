const { BLOG_URL, NEWS_URL } = process.env;

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/blog",
        destination: `${BLOG_URL}/blog`,
      },
      {
        source: "/blog/:path+",
        destination: `${BLOG_URL}/blog/:path+`,
      },
      {
        source: "/news",
        destination: `${NEWS_URL}/blog`,
      },
      {
        source: "/news/:path+",
        destination: `${NEWS_URL}/news/:path+`,
      },
    ];
  },
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
};

module.exports = nextConfig;
