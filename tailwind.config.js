/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./public/*"],
  theme: {
    extend: {
      colors: {
        whitesmoke: {
          "100": "#f8fafb",
          "200": "#f6f6f6",
          "300": "#f4f6f6",
          "400": "#efefef",
          "500": "#efeeeb",
          "600": "rgba(235, 235, 235, 0.4)",
        },
        black: "#000",
        gainsboro: "#e0e0e0",
        gray: {
          "100": "#949494",
          "200": "#7d7d7d",
          "300": "#0c0c0d",
        },
        midnightblue: {
          "100": "#1a2b88",
          "200": "#071148",
        },
        white: "#fff",
        lavender: "#d9def1",
        mediumblue: "#3d37f1",
        red: {
          "100": "#ff0000",
          "200": "rgba(255, 0, 0, 0.1)",
        },
        aliceblue: "#eceef6",
        ghostwhite: "#f2f1ff",
      },
      spacing: {},
      fontFamily: {
        "product-sans": "'Product Sans'",
      },
      borderRadius: {
        "31xl": "50px",
        xl: "20px",
        "smi-2": "12.2px",
      },
    },
    fontSize: {
      lg: "18px",
      lgi: "19px",
      xs: "12px",
      base: "16px",
      "9xl": "28px",
      sm: "14px",
      "3xl-4": "22.4px",
      inherit: "inherit",
    },
  },
  plugins: [],
}

