const mix = require('laravel-mix');
const tailwind = require('mix-tailwindcss');

mix.sass('src/scss/main.scss', 'assets/').tailwind('tailwind.config.js');
mix.js('src/ts/main.ts', 'assets/');