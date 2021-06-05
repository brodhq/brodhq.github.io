const colors = require('tailwindcss/colors')

module.exports = {
    // purge: [
    //     './node_modules/@geislabs/**/*.{js,ts,jsx,tsx}',
    //     './pages/**/*.{js,ts,jsx,tsx}',
    //     './components/**/*.{js,ts,jsx,tsx}',
    // ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: colors.orange,
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
