/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "Inter", "Segoe UI", "Arial", "sans-serif"],
        display: ["Instrument Serif", "Georgia", "serif"],
      },
      colors: {
        primary: "#111827",
        accent: "#d6568c",
        beige: "#f6f0e8",
        cream: "#fffdf8",
        taupe: "#756b5f",
        card: "#fffdf8",
        border: "#dfd6ca",
        text: "#221f1a",
        glass: "rgba(255,253,248,0.78)",
        muted: "#6b7280",
      },
      boxShadow: {
        soft: "0 20px 60px rgba(26, 26, 26, 0.08)",
        glass: "0 24px 80px rgba(26, 26, 26, 0.1)",
        panel: "0 32px 80px rgba(20, 20, 20, 0.08)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
    },
  },
  plugins: [],
};
