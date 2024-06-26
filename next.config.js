/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  // next 애플리ㅋ케이
  reactStrictMode: true,
  // env 내용 추가
  env: {
    BASE_URL: process.env.NEXT_PUBLIC_URL
  },
  ...(process.env.NEXT_PUBLIC_NODE_ENV === "prod" && {
    compiler: {
      removeConsole: {
        exclude: ["error", "warn"]
      }
    }
  })
}

module.exports = nextConfig
