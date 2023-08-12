/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container : {
      center: true,
      padding: '16px',
    },
    extend: {
      colors : {
        btname: '#292524',
        tz1:'#a8a29e',
        tz:'#d6d3d1',
        ssad: '#525252',
        poli: '#1f2937',
        primary: '#0284c7',
        secondary: '#64748b',
        dark: '#0f172a',
      },
      screens:{
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

