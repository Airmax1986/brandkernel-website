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
      colors: {
        'brand-orange': {
          DEFAULT: '#FD7C2D',
          light: '#FFDF95',
        },
        'brand-blue': '#96A0C8',
      }
    },
  },
  plugins: [],
};
export default config;
