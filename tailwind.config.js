const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      gray: colors.coolGray,
      blue: colors.cyan,
      red: colors.rose,
      pink: colors.fuchsia,
      green: colors.emerald,
    },
    fontFamily: {
      sans: ["kanit", "sans-serif"],
      mono: ["Consolas", "Menlo", "Fira Code", "Noto Sans Mono", "Monospaced"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
