/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ["m.media-mazon.com"],
  },
};

module.exports = nextConfig;
