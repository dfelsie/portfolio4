/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    animation: {
      "pop-in": "pop-in 0.7s ease-out",
    },
    keyframes: {
      "pop-in": {
        "0%": {
          transform: "scale(1) translateY(5rem)",
          opacity: 0,
        },
        "100%": {
          transform: "scale(1) translateY(0)",
          opacity: 1,
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
