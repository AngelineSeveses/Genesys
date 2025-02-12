const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customDark: '#292929',
        customBlack: '#000000',
      },
      fontFamily: {
        achivo: ['Achivo', 'serif'],
      },
      animation: {
        scroll: 'scroll 50s linear infinite', // Adjusted the speed for smoothness
      },
      keyframes: {
        scroll: {
          '0%': {
            transform: 'translateX(0)', // Start at position 0
          },
          '50%': {
            transform: 'translateX(-50%)', // Move halfway
          },
          '100%': {
            transform: 'translateX(-100%)', // Move fully to the left
          },
        },
      },
    },
  },
  plugins: [],
});
