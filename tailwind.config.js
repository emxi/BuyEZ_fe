/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#0a68ff',
            },
        },
    },
    plugins: ['prettier-plugin-tailwindcss'],
};
