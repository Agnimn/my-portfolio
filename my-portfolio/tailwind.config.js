/** @type {import('tailwindcss').Config} */
import tailwinScrollbar from "tailwind-scrollbar";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        "great-vibes": ['"Great Vibes"', "cursive"], // Added this line
      },
    },
  },
  plugins: [tailwinScrollbar],
};
