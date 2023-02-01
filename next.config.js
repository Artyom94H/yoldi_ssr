/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['antd'],
  serverRuntimeConfig: {
    apiUrl: process.env.API_URL, // Pass
    clientUrl: process.env.CLIENT_URL, // Pass
  },
  publicRuntimeConfig: {
    apiUrl: process.env.API_URL, // Pass
    clientUrl: process.env.CLIENT_URL, // Pass
  },
  compiler: {
    styledComponents: true,
  }
};

module.exports = nextConfig;
