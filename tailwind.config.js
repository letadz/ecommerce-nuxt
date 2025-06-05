/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      display: ["Poppins", "sans-serif"],
      body: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#6366f1",
        secondary: "#f3f4f6",
        destructive: "#ef4444",
        ring: "#6366f1",
        accent: "#f1f5f9",
        background: "#ffffff",
        input: "#d1d5db",
      },
    },
  },
  plugins: [],
};
