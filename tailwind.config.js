/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './{layout,sections,snippets}/**/*.liquid',
      './src/js/**/*.js',
      "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
      require('flowbite/plugin'),
  ],
}

