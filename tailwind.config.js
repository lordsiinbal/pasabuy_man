module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'sm': {'min': '300px', 'max': '767px'},
        'md': {'min': '768px', 'max': '1023px'},
        'lg': {'min': '1024px', 'max': '1279px'},
        'xl': {'min': '1280px', 'max': '1535px'},
        '2xl': {'min': '1536px'},
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '100':'38rem',
      },
      fontFamily: {
        nunito: ['Nunito'],
        raleway: ['Raleway']
      },
    },
  },
  variants: {
    display: ['responsive', 'group-hover', 'group-focus'],
    
    extend: {
      padding: ['hover'],
      textDecoration: ['focus-visible'],
      translate: ['motion-reduce'],
      justifySelf: ['hover', 'focus'],
      placeSelf: ['hover', 'focus'],
      alignContent: ['hover', 'focus'],
      scale: ['focus-within'],

    },
  },
  plugins: [],
}
