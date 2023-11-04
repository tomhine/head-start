const mix = require('laravel-mix');
const tailwind = require('mix-tailwindcss');

require('laravel-mix-polyfill');

mix.sass('src/scss/main.scss', 'assets/').tailwind('tailwind.config.js');
mix.js('src/js/main.js', 'assets/').polyfill();