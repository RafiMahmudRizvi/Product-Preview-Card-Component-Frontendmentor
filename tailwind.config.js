/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./*.{html,js}"],
  prefix: "tw-",
  theme: {
    extend: {
      colors: {
        "cream-color": "hsl(30, 38%, 92%)",
        "dark-cyan": "hsl(158, 36%, 37%)",
        "dark-grayish-blue": "hsl(228, 12%, 48%)",
        "very-dark-blue": "hsl(212, 21%, 14%)",
        "white-color": "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
