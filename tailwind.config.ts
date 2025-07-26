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
      // THE FIX: Font sizes updated to new specifications
      fontSize: {
        'header': '1rem',   // Updated to 1rem
        'hero': '3rem',     // Updated to 3rem
      },
      // Line height is no longer needed as a custom value
    },
  },
  plugins: [],
};
export default config;
