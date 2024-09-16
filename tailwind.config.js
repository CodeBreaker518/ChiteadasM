/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./App.{js,jsx.ts.tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./navigation/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./utils/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFFC00",
        secondary: "#ccc900",
        background: "#262626",
      },
    },
  },
  plugins: [],
};
