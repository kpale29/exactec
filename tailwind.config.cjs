/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#f3f3f3',
        'secondary-bg': '#fff',
        'primary-text': '#2f2f2f',
        'active-text': '#1B75BB',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'base', // only generate global styles
      strategy: 'class', // only generate classes
    }),
    require('tailwindcss-animated'),
  ],
};
