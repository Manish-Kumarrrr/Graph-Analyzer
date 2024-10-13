/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        wedgewood: {
          50: "#f2f9f9",
          100: "#ddeff0",
          200: "#bfe0e2",
          300: "#92cace",
          400: "#5faab1",
          500: "#438e96",
          600: "#0062E1",
          700: "#356169",
          800: "#007dff",
          900: "#2d464c",
          950: "#1a2c32",
        },

        node: "#0000ff",
        edge: "#000000",
        visited: "#FFFF00",
        selected: "green",
        path: "#FFFF00",
      },
    },
  },
  plugins: [],
};
