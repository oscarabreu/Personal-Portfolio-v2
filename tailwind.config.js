/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: { sm: "480px", md: "768px", lg: "976px", xl: "1440pd" },
      animation: {
        fadeIn: "fadeIn 1.5s",
        bounce:
          "bounce 0.5s alternate cubic-bezier(0.95, 0.05, 0.795, 0.035) infinite",
        slideUp: "slideUp 0.5s",
        slideUpEaseInOut: "slideUp 0.5s ease-in-out",
        slideUpCubiBezier: "slideUp 1s cubic-bezier(0.165, 0.84, 0.44, 1)",
      },
      animationDelay: {
        0: "0s",
        2: "0.2s",
        4: "0.4s",
        6: "0.6s",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideUp: {
          from: { transform: "translateY(100%)" },
          to: { transform: "translateY(0)" },
        },
        bounce: {
          from: { transform: "translateY(10px)" },
          to: { transform: "translateY(0)" },
        },
      },
      fontFamily: {
        body1: 'Lato',
        body2: 'Montserrat',
        body3: 'Open Sans',
        body4: 'Roboto',
      },      
      colors: {
        bgclr: '#09192a',
        bgclr2: '#14283e',
        bgclr3: '#112235',
        txtclr: '#c2c2dd', 
        txtclr2: '#dde0e7',
        txtclr3: '#dae9f7',
        hclr: '#fcdbb2',
        hclr2: '#fbcc92',
        hclr3: '#9fd8e5',
        
      },
      maxWidth: {
        '100': '100rem',
        '300': '300px',
        '450': '450px',

      },
      minWidth: {
        '140': '140px',
        '350': '350px',
        '300': '300px',
        '450': '450px',
      },

      width: {
        '5xl': '64rem',
      },

      minHeight: {
        '500': '500px',
        '350': '350px',
        '475': '475px',
        '450': '450px',
        '600': '600px',

      },
      maxHeight: {
        '350': '350px',
        '450': '450px',
        '600': '600px',
      },
      padding: {
        '1/10': '10vh',
      },
      fontSize: {
        'base-lg': '1.0rem',  // or whatever name you prefer
      },
      screens: {
        'max-sm': {'max': '639px'},
        'max-md': {'max': '767px'},
        'max-lg': {'max': '1023px'}
      },
    },
  },
  plugins: [],
}
