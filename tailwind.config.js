/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "starbucks-white1": "#f1f8f6",
        "starbucks-white2": "#f3f1e7",
        "starbucks-green": "#008248",
        "sb-darkgreen": "#1e3932",
        "sb-something": "#d4e9e2",
      },
    },
  },
  plugins: [],
};
