const windmill = require('@windmill/react-ui/config');

module.exports = windmill({
  purge: [
    'src/**/*.js',
    'src/**/*.jsx',
    'src/**/*.ts',
    'src/**/*.tsx',
    'public/**/*.html',
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
});
