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
          navy: "#002395",
          "navy-hover": "#001a70",
          "blue-50": "#eff6ff",
          "blue-200": "#bfdbfe"
        }
      },
      boxShadow: {
        card: "0 4px 24px rgba(0, 35, 149, 0.08)"
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
