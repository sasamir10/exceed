/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            colors: {
                ink: "#0b1117",
                panel: "#111a22",
                concrete: "#9aa3a8",
                safety: "#f7a51a",
            },
            fontFamily: {
                display: ["Barlow Condensed", "sans-serif"],
                sans: ["Inter", "sans-serif"],
            },
            boxShadow: { glow: "0 0 35px rgba(247,165,26,.16)" },
        },
    },
    plugins: [],
};
