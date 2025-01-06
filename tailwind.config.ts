import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        regular: ["var(--font-regular)", "sans-serif"],
        light: ["var(--font-light)", "sans-serif"],
        silk: ["var(--font-silk)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
