module.exports = {
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  purge: {
    content: ['./src/**/*.html', './src/**/*.svelte'],
    options: {
      safelist: [/data-theme$/]
    }
  },
  darkMode: false, // or 'media' or 'class'
  daisyui: {
    styled: true,
    // first one will be the default theme since there is no `data-theme` set in `app.html`
    // and `dark` theme is not in `themes` array. https://daisyui.com/docs/config
    themes: ['light', 'forest', 'emerald', 'synthwave'],
    rtl: false
  },
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  }
};
