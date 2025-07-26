import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        // 25px / 16 = 1.5625rem
        'page-margin': '1.5625rem',
        // 24px / 16 = 1.5rem (for the grid gutter)
        'page-gutter': '1.5rem',
      },
    },
  },
  plugins: [],
};
export default config;
