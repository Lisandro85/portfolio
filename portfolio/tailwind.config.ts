import type { Config } from "tailwindcss";
import textShadowPlugin from "tailwindcss-textshadow";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      textShadow: {
        glow: "0 0 8px rgba(82, 182, 154, 0.8), 0 0 15px rgba(82, 182, 154, 0.5)",
      },
    },
  },
  plugins: [textShadowPlugin],
};

export default config;
