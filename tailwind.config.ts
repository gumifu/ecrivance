import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#1e3a8a",
          "navy-hover": "#1e40af",
          "blue-50": "#eff6ff",
          "blue-200": "#bfdbfe"
        }
      },
      boxShadow: {
        card: "0 4px 24px rgba(30, 58, 138, 0.08)"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Sora", "Inter", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
