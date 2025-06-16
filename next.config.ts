// next.config.ts
import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin();

// НЕ указываем тут блок i18n — это берёт на себя next-intl
const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Разрешаем Next.js подгружать файлы из Directus
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8055",
        // путь к вашим загруженным ассетам
        pathname: "/assets/**",
      },
    ],
  },

  // Если понадобятся дополнительные настройки — добавляйте ниже
  // например, rewrites, headers, experimental и т.д.
};

export default withNextIntl(nextConfig);
