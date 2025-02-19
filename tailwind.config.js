/** @type {import('tailwindcss').Config} */
module.exports = {
  // 다크모드 설정 ('media': 시스템 설정 기반, 'class': 수동 제어)
  darkMode: "class",

  // Tailwind CSS를 적용할 파일 경로 설정
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
};
