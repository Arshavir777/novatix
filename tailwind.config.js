/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [],
  theme: {
    extend: {
      colors: {
        primary: "#7716ff",
        secondary: "#1E40AF",
        accent: "#60A5FA",
        dark: "rgb(16 24 39)",
        light: "#F8FAFC",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
