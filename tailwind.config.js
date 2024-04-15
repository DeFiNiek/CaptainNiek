const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        trueGray: colors.neutral,
        custom: { // Custom color key
          DEFAULT: '#dfaf8f', // Default shade for your custom color
          100: '#aa856f',
          // You can also add shades if needed, like so:
          // '100': '#...',
          // '200': '#...',
          // '300': '#...',
          // ...
        },
      },
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),  // For better form elements styling
    require('@tailwindcss/typography'),  // For rich text content styling
  ]
};
