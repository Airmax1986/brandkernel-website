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
        // Der Seitenrand wird exakt auf 1.5rem gesetzt
        'page-margin': '1.5rem',
        'page-gutter': '1.5rem',
      },
      fontSize: {
        'header': '1rem',
        'hero': '2rem',
      },
      colors: {
        'brand-blue': '#4A4AFF',
      },
    },
  },
  plugins: [],
};
export default config;