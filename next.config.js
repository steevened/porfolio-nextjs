/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'firebasestorage.googleapis.com',
      'cyqtguozedjeviymoius.supabase.co',
    ],
  },
};

module.exports = nextConfig;
