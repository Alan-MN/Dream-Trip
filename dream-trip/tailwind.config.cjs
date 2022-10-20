/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize:{
      '2xl':32,
      xl:26,
      lg:24,
      md:20,
      sm:16,
      xs: 12,
    },
    colors:{

      transparent: 'transparent',
      
      black: '#121214',

      purple: {
        700: '#7E22CE',
        500: '#9143d4',
      },
      gray: {
        900: '#231F20',
        800: '#202024',
        400: '#7C7C8A',
        200: '#D4D4D8',
        100: '#FFFFFF',
      },
      
      
      
      
       
    },
    extend: {
      fontFamily:{
        sans: 'Ubuntu, sans-serif'
      }
    },
  },
  plugins: [],
}
