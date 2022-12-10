//* const { fontFamily } = require('tailwindcss/defaultTheme'); /*/

/** @type { import('tailwindcss').Config } */

tailwindConfig = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./styles/**/*.css"
    ],
    theme: {
        extend: {
            colors: {
                'clr-text-primary': '#121514',
                'clr-text-red': '#e83349',
                'clr-bg-primary': '#fcf8ee',
                'clr-bg-secondary': '#face67'
            },
            fontFamily: {
                // quiche: ['Quichesans', 'cursive'],
                // satoshi: ['Satoshi', 'sans-serif'],
            },
            fontSize: {
                '10xl': ['10rem', { lineHeight: '1' }],
            },
            screens: {
                '2xl': '1537px',
            }
        },
    },
    plugins: [],
}

module.exports = tailwindConfig;