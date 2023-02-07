/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
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
