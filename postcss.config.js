/** @type {import('postcss').Postcss} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {}, // Changed from 'tailwindcss: {}'
    autoprefixer: {},
  },
};

export default config;