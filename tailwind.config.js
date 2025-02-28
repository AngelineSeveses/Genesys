const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customDark: '#292929',
        customGray: '#141414',
        customBorder: '#3e3e3e',
        bodyText: '#7b7b7b',
        customBlack: '#000000',
      },
      fontFamily: {
        achivo: ['Achivo', 'serif'],
      },
     animation: {
        // scroll: 'scroll 40s linear infinite',
      },
      keyframes: {
        // scroll: {
        //   "0%": { transform: "translateX(0)" },
        //   "100%": { transform: "translateX(-100%)" }, // Moves fully left to loop seamlessly
        // },
      },
    },
  },
  plugins: [],
});
