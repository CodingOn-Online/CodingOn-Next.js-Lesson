/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d2iwdqgro8i2ew.cloudfront.net",
        port: "",
        pathname: "/codingon/**",
      },
    ],
  },
};

export default nextConfig;
