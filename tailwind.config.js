/** @type {import('tailwindcss').Config} */


export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"DM Serif Display"', 'serif']
      },
      backgroundImage: {
        'wave4': "url('/wave4.svg')",
        'wave22': "url('/wave22.svg')",
        'wave14': "url('/wave14.svg')",
      },
    },
  },
  variants: {},
  plugins: [
      ],
}

