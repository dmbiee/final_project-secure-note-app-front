/** @type {import('tailwindcss').Config} */
export default {
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors: {
        p750: '#496ab8',
        p500: '#b7d3f0',
        p250: '#d2e1ef',
        s750: '#ac807f',
        s500: '#f0abaa',
        s250: '#ffd3d3',
        n750: '#404040',
        n500: '#d7d7d7',
        n250: '#f2f2f2',
        g333: '#333333'
      },
      fontFamily: {
      jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
    },
    },
  },
  plugins: [],
}

