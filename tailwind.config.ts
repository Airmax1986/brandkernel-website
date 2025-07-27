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
        // THE FIX: Margin exakt auf 1rem gesetzt
        'page-margin': '1rem',
        'page-gutter': '1.5rem',
      },
      fontSize: {
        'header': '1rem',
        'hero': '5rem',
      },
    },
  },
  plugins: [],
};
export default config;
