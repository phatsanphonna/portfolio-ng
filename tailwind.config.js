/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  presets: [require('@spartan-ng/ui-core/hlm-tailwind-preset')],
  theme: {
    extend: {
      colors: {
        'wewak': {
          'default': '#d75c77',
          '50': '#fdf3f4',
          '100': '#fbe8eb',
          '200': '#f6d5da',
          '300': '#ea9daa',
          '400': '#e58799',
          '500': '#d75c77',
          '600': '#c13d60',
          '700': '#a22e4f',
          '800': '#882947',
          '900': '#752642',
          '950': '#411020',
        },
      }
    },
  },
  plugins: [],
}

