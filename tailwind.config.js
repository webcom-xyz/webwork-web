const colors = require("tailwindcss/colors");
const { fontFamily } = require("tailwindcss/defaulttheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: colors.blue,
      },
      fontFamily: {
        "sans": ["Roboto", "sans-serif"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
