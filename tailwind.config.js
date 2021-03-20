const colors = require('tailwindcss/colors')

module.exports = {
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: {
                    300: colors.purple[300],
                    500: colors.purple[500],
                    700: colors.purple[700],
                    800: colors.purple[800],
                    900: colors.purple[900],
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/typography')],
}
