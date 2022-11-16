/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif",
      },

      backgroundImage: {
        app: "url(/app-bg.png)",
      },

      colors: {
        ignite: {
          500: "#129E57",
          600: "#108e4e ",
        },
        yellow: {
          500: "#F7DD43",
          700: "#E5CD3D",
        },
        red: {
          600: "#DB4437",
        },
        gray: {
          100: "#E1E1E6",
          200: "#C4C4CC",
          300: "#8D8D99",
          600: "#323238",
          700: "#2C2C32",
          800: "#202024",
          900: "#121214",
        },
      },
    },
  },
  plugins: [],
};
