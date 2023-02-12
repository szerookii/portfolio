const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                "blue": "#1d4ed8",
                "green": "#4ade80",
                "gray": {
                    DEFAULT: "#888",
                    1: "#111"
                }
            },
            fontFamily: {
                "sans": ["Ubuntu", "sans-serif"]
            },
            animation: {
                'fadeOut': 'fadeOut 0.5s linear infinite'
            },
            keyframes: {
                fadeOut: {
                    '0%': {
                        opacity: '1'
                    },
                    '100%': {
                        opacity: '0'
                    },
                }
            }
        },
    },
    plugins: [],
}
