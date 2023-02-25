/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.pdf$/i,
      type: "asset/source",
    });

    return config;
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  images: {
    domains: ["img.shields.io", "pohwp.dev", "www.pohwp.dev"],
  },
};
