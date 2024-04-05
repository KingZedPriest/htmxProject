/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      "2xl": '1536px',
    },
    extend: {},
  },
  plugins: [],
}

