/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './{layout,sections,snippets}/**/*.liquid',
      './src/js/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

