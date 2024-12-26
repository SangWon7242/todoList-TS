import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  i18n: {
    locales: ["ko", "en"], // 지원할 로케일 목록
    defaultLocale: "ko", // 기본 로케일
  },
};

export default nextConfig;
