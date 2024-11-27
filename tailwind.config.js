/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'ore-cloud-gray': '#d8d9d8',      // ore-banner
        'ore-stone-gray': '#a3a3a3',      // ore-banner-shadow
        'ore-obsidian-black': '#212021',  // ore-sidebar
        'ore-charcoal': '#2e2e2e',        // ore-control
        'ore-iron-gray': '#3c3c3c',       // ore-button
        'ore-steel-gray': '#4e4e4f',      // ore-button-hover
        'ore-pitch-black': '#070706',     // ore-border
        'ore-slate-purple': '#3b3a48'     // ore-font-color
      },

      fontFamily: {
        minecraft: [ 'Minecraft' ]
      },    
    },
  },
  plugins: [],
};
