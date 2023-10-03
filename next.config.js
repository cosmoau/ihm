/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
  async rewrites() {
    return [
      {
        source: "/openweathermap/:city*",
        destination: `https://api.openweathermap.org/data/2.5/weather?q=:city*&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_MAP_API_KEY}&units=metric`,
      },
    ];
  },
  // redirects
  async redirects() {
    return [
      {
        source: "/start",
        destination: "https://cosmogroup.io/start",
        permanent: true,
      },
      {
        source: "/team",
        destination: "https://cosmogroup.io/about",
        permanent: true,
      },
    ];
  },

  reactStrictMode: true,

  swcMinify: true,
};

module.exports = nextConfig;
