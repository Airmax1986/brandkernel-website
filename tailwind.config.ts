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
        'page-margin': '1rem',
        'page-gutter': '1.5rem',
      },
      fontSize: {
        'header': '1rem',
        'hero': '2rem',
      },
      colors: {
        // Die neue, leuchtende blaue Farbe
        'brand-blue': '#4A4AFF',
      },
    },
  },
  plugins: [],
};
export default config;