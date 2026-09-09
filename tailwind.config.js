/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yaho: {
          navy: {
            50: '#f0f4f8',
            100: '#d9e2ec',
            200: '#bcccdc',
            300: '#9fb3c8',
            400: '#829ab1',
            500: '#627d98',
            600: '#486581',
            700: '#334e68',
            800: '#243b53',
            900: '#102a43',
            950: '#0b1d30',
          },
          gold: {
            50: '#fbf8ed',
            100: '#f6efd1',
            200: '#eedda3',
            300: '#e5c66e',
            400: '#dcab3f',
            500: '#c59223',
            600: '#a3711a',
            700: '#835417',
          },
          warm: {
            50: '#faf8f5',
            100: '#f4f0ea',
            200: '#e8ded2',
            300: '#dacab7',
            400: '#c7b098',
          }
        }
      },
      fontFamily: {
        sans: ['"Noto Sans KR"', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
