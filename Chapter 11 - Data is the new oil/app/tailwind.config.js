/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      height: (theme) => ({
        'screen/2': '50vh',

        'screen*0.7': '70vh',

        'screen*0.75': '75vh',

        'screen*0.8': '80vh',

        'screen*0.9': '90vh',

        'screen/3': 'calc(100vh / 3)',

        'screen/4': 'calc(100vh / 4)',

        'screen/5': 'calc(100vh / 5)',
      }),
      width: (theme) => ({
        'screen/2': '50vw',

        'screen*0.7': '70vw',

        'screen*0.75': '75vw',

        'screen*0.8': '80vw',

        'screen*0.9': '90vw',

        'screen/3': 'calc(100vw / 3)',

        'screen/4': 'calc(100vw / 4)',

        'screen/5': 'calc(100vw / 5)',
      }),
    },
  },
  plugins: [],
};
