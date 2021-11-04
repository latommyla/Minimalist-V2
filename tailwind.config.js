module.exports = {
  purge: {
    content: ['./docs/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'robo': ['"Roboto"', 'sans-serif'],
        'zen': ['"Zen Kurenaido"', 'sans-serif'],
        'monst': ['"Montserrat"', 'sans-serif'],
        'bebas': ['"Bebas Neue"', 'cursive']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
