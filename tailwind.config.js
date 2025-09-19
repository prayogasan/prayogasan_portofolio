/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0d6efd",
        secondary: "#1e3a8a",
        accent: "#38bdf8",
        neutral: "#f8fafc",
        dark: "#0f172a",
      },
    },
  },
  plugins: [],
};
