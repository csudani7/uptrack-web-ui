/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: {
          DEFAULT: "#ffffff",
          100: "#F9F9F9",
          150: "#F1F1F1",
          200: "#F4F4F7",
          250: "#F6F6F7",
        },
        black: {
          DEFAULT: "#4A4F56",
          100: "#74778B0D",
        },
        gray: {
          DEFAULT: "#F5F5F5",
          100: "#C4C4C4",
          150: "#74778B",
          200: "#EDEDEE",
        },
        smoky: {
          DEFAULT: "#544F72",
          100: "#8C87AB",
        },
        blue: {
          DEFAULT: "#170C5A",
          100: "#241A5F",
        },
        lightBlue: "#046DB3",
        red: {
          DEFAULT: "#EA5252",
        },
        success: {
          DEFAULT: "#1EC26A",
          100: "#008060",
          200: "#1EC26A",
        },
        red: {
          DEFAULT: "#EA5252",
        },
        error: "#FF0000",
      },
    },
  },
  plugins: [],
};
