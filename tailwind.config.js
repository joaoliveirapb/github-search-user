/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          500: '#0079FF',
          600: '#4B6A9B',
          700: '#1E2A47',
          950: '#141D2F',
        },
        slate: {
          100: '#FEFEFE',
          300: '#F6F8FF',
        },
      },
    },
  },
  plugins: [],
}
