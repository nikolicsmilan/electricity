module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xl: "1200px", // Egyedi breakpoint 1200px
      },
    },
  },
  plugins: [
    require("tailwindcss-themer")({
      defaultTheme: {
        extend: {
          colors: {
            primary: "blue",
          },
          fontFamily: {
            sans: "ui-monospace",
          },
          fontSize: {
            xs: "0.563rem",
            sm: "0.75rem",
            base: "1rem",
            xl: "1.333rem",
            "2xl": "1.777rem",
            "3xl": "2.369rem",
            "4xl": "3.157rem",
            "5xl": "4.209rem",
          },
        },
      },
      themes: [
        {
          name: "light",
          extend: {
            colors: {
              primary: "#1E2A38", // Dark blue main color
              secondary: "#ECF0F1", // Light gray
              accent: "#D98E30", // Orange for CTA
              background: "#2C3E50", // Darker shade for background
              success: "#2ECC71", // Green highlight color
              text: "#BDC3C7", // Light gray for text
            },
            fontFamily: {
              robotoMono: ["Montserrat","Roboto Mono", "monospace"],
            },
          
            backgroundImage: {
            
              gradient:
                "linear-gradient(45deg, #082f49 1%, #075985 40%,  #cffafe 90% )",
              gradientreverse:
                "linear-gradient(225deg, #082f49 1%, #075985 40%,  #cffafe 90% )",
              mybackground: "url('../src/assets/images/background10.png')",
              mybackgroundmob: "url('../src/assets/images/background10_mob.png')",
            },
           
          },
        },
        {
          name: "dark",
          extend: {
            colors: {
              primary: "#a3e635",
              200: "#d9f99d",
              600: "#65a30d",
              950: "#1a2e05",
              success: "rgb(63, 178, 121)",
              info: "rgb(191, 191, 191)",
              dark: "rgb(0, 0, 0)",
              asidebg: "rgb(129, 171, 178)",
            },
            fontFamily: {
              robotoMono: ["Roboto Mono", "monospace"],
            },
            backgroundImage: {
              gradient:
                "linear-gradient(45deg, #1a2e05 1%, #3f6212 40%, #ecfccb 90%)",
              gradientreverse:
                "linear-gradient(225deg, #1a2e05 1%, #3f6212 40%, #ecfccb 90%)",
              mybackground: "url('../src/assets/images/desk.jpg')",
            },
            boxShadow: {
              green: "10px 0px 10px 3px rgba(144, 78, 82, 0.75)",
            },
          },
        },
      ],
    }),
  ],
};
