// tailwind.config.ts
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
        'page-margin': '1.5625rem', // 25px
        'page-gutter': '1.5rem',    // 24px
      },
      // THE FIX: Adding precise font and line-height values
      fontSize: {
        'header': '1.5625rem', // 25px
        'hero': '4.0625rem',   // 65px
      },
      lineHeight: {
        'hero': '3.125rem',    // 50px
      }
    },
  },
  plugins: [],
};
export default config;
