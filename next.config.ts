import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ["en", "ru"], // Доступные локали
    defaultLocale: "ru", // Локаль по умолчанию
  },
};

export default nextConfig;
