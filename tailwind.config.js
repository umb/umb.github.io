const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Open Sans', 'sans-serif']
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: '#ffd400',
      blue: colors.blue
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
};
