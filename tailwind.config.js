import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', ...defaultTheme.fontFamily.sans],
            },
            fontSize: {
                // Golden Ratio Typography Scale (Base: 1rem = 16px, Ratio: 1.618)
                'gr-xs': ['0.618rem', { lineHeight: '1.5' }], // ~10px
                'gr-base': ['1rem', { lineHeight: '1.618' }], // 16px
                'gr-md': ['1.272rem', { lineHeight: '1.5' }], // ~20.3px (Square root of GR)
                'gr-lg': ['1.618rem', { lineHeight: '1.4' }], // ~26px
                'gr-xl': ['2.618rem', { lineHeight: '1.2' }], // ~42px
                'gr-2xl': ['4.236rem', { lineHeight: '1.1' }], // ~68px
                'gr-3xl': ['6.854rem', { lineHeight: '1' }], // ~110px
            },
            colors: {
                navyra: {
                    50: '#f0f5ff',
                    100: '#e3edff',
                    200: '#cdddff',
                    300: '#a8c6ff',
                    400: '#80a8ff',
                    500: '#5a82ff',
                    600: '#385ce6',
                    700: '#2b44cc',
                    800: '#2639a6',
                    900: '#243482',
                    950: '#151d4d',
                    DEFAULT: '#2b44cc', // Primary corporate blue
                    dark: '#151d4d',    // Deep navy for text/backgrounds
                }
            }
        },
    },

    plugins: [forms],
};
