/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.example.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'fernandafamiliar.soy',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        port: ''
      }
    ],
    //domains: ['fernandafamiliar.soy', 'https://fernandafamiliar.soy/wp-json/wp/v2/posts/', 'randomuser.me']
  },
  env: {
    API_V2: process.env.API_V2,
  },
};

export default nextConfig;
