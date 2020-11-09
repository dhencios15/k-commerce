module.exports = {
  important: true,
  purge: [
    'src/**/*.js',
    'src/**/*.jsx',
    'src/**/*.ts',
    'src/**/*.tsx',
    'public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        'hot-pink': '#fd2d78',
      },
      height: {
        'screen/2': '50vh',
        'screen/1.5': 'calc(100vh / 1.5)',
        'screen/3': 'calc(100vh / 3)',
        'screen/4': 'calc(100vh / 4)',
        'screen/5': 'calc(100vh / 5)',
      },
    },
  },
  variants: {
    zIndex: ['hover'],
  },
  plugins: [],
};
