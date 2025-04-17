/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
      },
      colors: {
        // Base backgrounds & text
        'bg-base': '#ffffff',           // pure white background
        'text-base': '#1a1a1a',         // very dark charcoal text
        'grayb': '#e5e5e5',      // light gray border

        // Luxury gold accent
        'gold-primary': '#bfa46f',      // warm gold for primary accents
        'gold-highlight': '#f5e1a4',    // soft champagne highlight

        // Deep anchor
        'charcoal-dark': '#2c2c2c',     // deep charcoal for strong contrast
      }
    },
  },
  plugins: [],
}

