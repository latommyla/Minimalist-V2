module.exports = {
  purge: {
    content: ['./public/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'robo': ['"Roboto"', 'sans-serif']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
