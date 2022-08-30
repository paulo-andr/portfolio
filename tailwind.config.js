module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      flaticon: ['Flaticon', 'ui-sans-serif'],
      abril: ['AbrilFatface', 'ui-sans-serif'],
    },
    extend: {
      colors: {
        green: '#21EDC6',
        red: '#EC5B56',
        'dark-green': '#244740',
        'dark-red': '#F34708',
        'input': '#050505',
        'input-gray': '#303030'
      },
      lineHeight: {
        'almost-none': '1.15',
      },
      fontSize: {
        none: '0rem',
        'desktop-big': '4rem',
      },
    },
  },
  plugins: [],
}
