module.exports = {
  content: [
    './src/**/*.{njk,md,html,js}',
    './src/_includes/**/*.{njk,md,html}'
  ],
  theme: {
    // Define responsive breakpoints only
    screens: {
      sm: '640px', // small screens
      md: '768px', // medium screens
      lg: '1024px', // large screens
      xl: '1280px', // extra large screens
    }
  },
  plugins: [],
};
