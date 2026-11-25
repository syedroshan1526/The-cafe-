/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          950: '#0c0a09', // deepest espresso ground
          900: '#171210', // dark roasted beans
          850: '#211a16', // roasted wood
          800: '#2e241f', // dark timber
          700: '#4a3b32', // warm barista apron
          600: '#6b5446', // light roast
          500: '#8c6e5c', // caramel wash
          400: '#b08d75', // toasted hazelnut
          300: '#c89552', // signature amber crema
          200: '#dfb882', // golden foam swirl
          100: '#f0dfc8', // steamed milk tint
          50: '#faf7f2',  // porcelain cup white
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      }
    },
  },
  plugins: [],
}
