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
        palette: {
          "white": "#fff",
          "black": "#000",
          "primary": "#e04543",
          "secondary": "#d4b45d",
          "link": "#2669bb",
        },
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
