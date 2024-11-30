/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'oreui-cloud-gray': '#d8d9d8',      // ore-banner
        'oreui-stone-gray': '#a3a3a3',      // ore-banner-shadow
        'oreui-obsidian-black': '#212021',  // ore-sidebar
        'oreui-charcoal': '#2e2e2e',        // ore-control
        'oreui-iron-gray': '#3c3c3c',       // ore-button
        'oreui-steel-gray': '#4e4e4f',      // ore-button-hover
        'oreui-pitch-black': '#070706',     // ore-border
        'oreui-slate-purple': '#3b3a48',    // ore-font-color
        'oreui-charcoal-darker': '#232425',  // ore-container
        'oreui-green': '#3C8527',
        'oreui-green-darker': '#34542B',
      },

      fontFamily: {
        minecraft: [ 'Minecraft' ]
      },    
    },
  },
  plugins: [],
};
