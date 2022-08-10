module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./public/**/*.{html,js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  safelist: [],
  theme: {
    extend: {
      colors: {
        dark: "#0D0A15",
      },
    },
    screens: {
      "xs": "380px",
      "sm": "500px",
      "md": "768px",
      "lg": "1118px"
    },
    backgroundImage: {
      // "clouds": "url('/src/assets/clouds.png')"
    },
    fontFamily: {
      // poppins: ["Poppins", "sans-serif"]
    },
  },
  plugins: [],
};
