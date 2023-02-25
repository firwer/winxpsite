/** @type {import('next').NextConfig} */

const nextjsDistDir = join("src", require("./src/next.config.js").distDir);

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

const nextjsServer = next({
  dev: isDev,
  conf: {
    distDir: nextjsDistDir,
    images: {
      domains: ["firebasestorage.googleapis.com"],
    },
  },
});
