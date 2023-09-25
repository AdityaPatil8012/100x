/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['inter']
      },
      fontSize: { 
       48: ['48px'],
       40: ['40px'],
       31: ['31px'],
       26: ['26px'],
       24: ['24px'],
       20: ['20px'],
       19: ['19px'],
       17: ['17px'],
       16: ['16px'],
       15: ['15px'],
       14: ['14px'],
       13: ['13px'],
       12: ['12px'],
       10: ['10px'],
      },
      gap: {
        62: ['0.0625rem'],
      },
      width: {
        20.8: ['20.875rem'],
        32.2: ['32rem'],
        35: ['35.2rem'],
      },
      borderRadius: {
        radius: ['4.0625rem'],
        search: ['6249.9375rem']
      },
      colors: {
        safed: ['#F9F9F9'],
        kala: ['#000000'],
        twitter_blue: ['#1D9BF0'],
        twitter_blue_hover: ['#1871CA'],
        twitter_blue_disabled: ['#1D9BF0'],
        blue_wash: ['#75BEEF33'],
        button_stroke: ['#546A7A'],
        searchbar_fill: ['#212327'],
        card_fill: ['#16181C'],
        success: ['#00BE74'],
        error: ['#8B141A'], 
        neutal_50: ['#F9F9F9'],
        neutal_100: ['#F4F4F4'],
        neutal_200: ['#E4E4E4'],
        neutal_300: ['#D3D3D3'],
        neutal_400: ['#A2A2A2'],
        neutal_500: ['#737373'],
        neutal_600: ['#525252'],
        neutal_700: ['#404040'],
        neutal_800: ['#262626'],
        neutal_900: ['#171717'],
        neutal_950: ['#0A0A0A'],
      },
      boxShadow: {
        gol: ['0px 8px 16px 0px rgba(0, 0, 0, 0.25)'],
      },
      backdropBlur: {
        gul: ['23.668209075927734px'],
      }
    },
  },
  plugins: [],
}

