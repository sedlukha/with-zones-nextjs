/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/news",
  // experimental: {
  //   // Next.js will automatically prefix `basePath` to client side links which
  //   // is useful when all links are relative to the `basePath` of this
  //   // application. This option opts out of that behavior, which can be useful
  //   // if you want to link outside of your zone, such as linking to
  //   // "/" from "/blog" (the `basePath` for this application).
  //   manualClientBasePath: true,
  // },
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
};

module.exports = nextConfig;
