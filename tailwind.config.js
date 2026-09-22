/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        surface: "#151515",
        text: "#f5f5f5",
        muted: "#777777",
        accent: "#ff4ecd", // electric pink accent
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Playfair Display", "serif"],
      },
      boxShadow: {
        elevation: "0 2px 8px rgba(0,0,0,0.3)",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.text"),
            a: { color: theme("colors.accent") },
            h1: { color: theme("colors.text"), fontFamily: theme("fontFamily.display"), fontWeight: "700" },
            h2: { color: theme("colors.text"), fontFamily: theme("fontFamily.display"), fontWeight: "700" },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

