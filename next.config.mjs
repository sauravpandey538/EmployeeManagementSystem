/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["knex"],
  },
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
