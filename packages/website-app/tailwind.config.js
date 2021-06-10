const colors = require('tailwindcss/colors')

module.exports = {
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './layouts/**/*.{js,ts,jsx,tsx}',
        './node_modules/\\@geislabs/**/dist/**/*.js',
    ],
    darkMode: false, // or 'media' or 'class'
    // mode: 'jit',
    theme: {
        extend: {
            colors: {
                primary: colors.orange,
                secondary: colors.green,
                // primary: colors.purple
            },
        },
        // typography: (theme) => ({
        //     pre: {
        //         color: theme('colors.grey.1000'),
        //         backgroundColor: theme('colors.grey.100'),
        //     },
        // }),
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/typography')],
}
