/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "hotel-black": "#0a0a0a",
                "hotel-gold": "#cba258",
                "hotel-brown": "#544837",
                "hotel-cream": "#f5f5f5",
                "hotel-nav": "#8d703a",
                "hotel-green": "#25d366",
                "hotel-green-dark": "#075e54",
            },
            fontFamily: {
                serif: ["Merriweather", "serif"],
                sans: ["Poppins", "sans-serif"],
                handwriting: ["Great Vibes", "cursive"],
            },
        },
    },
    plugins: [],
};
