/**@type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "es", "it"],
    defaultLocale: "en",
    localeDetection: true,
  },
};

module.exports = nextConfig;
