/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        fontSize: {
            xxs: "1rem",
            xs: "1.2rem",
            sm: "1.4rem",
            base: "1.6rem",
            md: "2.2rem",
            lg: "2.6rem",
            xl: "4.4rem",
            icons: "3.5rem",
            iconLg: "4rem",
        },
        lineHeight: {
            auto: "auto",
            xs: "1rem",
            sm: "1.4rem",
            base: "1.6rem",
            md: "2.2rem",
            lg: "2.4rem",
            xl: "4.4rem",
        },
        colors: {
            black: "#12252b",
            offBlack: "#384b52",
            blue: "#7eaecd",
            lightBlue: "#a1dcf0",
            offWhite: "#efefef",
            white: "#f9f9f9",
            cardBG: "rgba(18, 37, 43, 0.9)",
        },
        fontWeight: {
            light: 300,
            regular: 400,
            medium: 500,
            semiBold: 600,
            bold: 700,
        },
        extend: {
            screens: {
                tablet: "57.6rem",
                desktop: "87.5rem",
            },
            backgroundImage: {
                "hero-image-dark":
                    "linear-gradient(to bottom, rgba(56, 75, 82, .7), rgb(18, 37, 43) 90%), url('https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
                "hero-image-light":
                    "linear-gradient(to bottom, rgba(56, 75, 82, .5), rgb(239, 239, 239) 99%), url('https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
            },
        },
    },
    plugins: [],
};
