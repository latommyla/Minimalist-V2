module.exports = {
  purge: {
    content: ['./docs/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'robo': ['"Roboto"', 'sans-serif'],
        'zen': ['"Zen Kurenaido"', 'sans-serif']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
