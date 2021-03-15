const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './src/components/**/*.vue',
    './src/layouts/**/*.vue',
    './src/pages/**/*.vue',
    './src/plugins/**/*.js',
    './nuxt.config.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          r: colors.red[500],
          y: colors.yellow[400],
          b: colors.lightBlue[400],
          DEFAULT: colors.red[500],
        },
      },
      fontFamily: {
        baloo: ['"Baloo 2"', 'cursive'],
      },
      zIndex: {
        '-3k': -3000,
        '-2k': -2000,
        '-1k': -1000,
        '1k': 1000,
        '2k': 2000,
        '3k': 3000,
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
