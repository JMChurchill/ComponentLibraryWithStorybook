/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,jsx,tsx}'],
  theme: {
    extend: {
      textColor: {
        button: {
          base: 'var(--color-button-text)',
          inverted: 'var(--color-primary)',
          green: 'rgb(22, 163, 74)',
          red: 'rgb(185, 28, 28)',
          orange: 'rgb(249, 115, 22)',
        },
        skin: {
          primary: 'var(--color-primary)',
          base: 'var(--color-text-base)',
          secondary: 'var(--color-text-secondary)',
        },
      },
      backgroundColor: {
        skin: {
          primary: 'var(--color-primary)',
          'primary-transparent': 'var(--color-primary-transparent)',
          'primary-dark': 'var(--color-primary-dark)',
          'page-background': 'var(--color-page-background)',
          'page-forground': 'var(--color-page-forground)',
          'page-forground-hover': 'var(--color-page-forground-hover)',
          'page-forground-hover-hover':
            'var(--color-page-forground-hover-hover)',
        },
        button: {
          green: 'rgb(22, 163, 74)',
          red: 'rgb(185, 28, 28)',
          orange: 'rgb(249, 115, 22)',
        },
      },
      borderColor: {
        skin: {
          primary: 'var(--color-primary)',
          'page-background': 'var(--color-page-background)',
          background: 'var(--color-page-background)',
          forground: 'var(--color-page-forground)',
          text: 'var(--color-text-base)',
        },
        button: {
          green: 'rgb(22, 163, 74)',
          red: 'rgb(185, 28, 28)',
          orange: 'rgb(249, 115, 22)',
        },
      },
      outlineColor: {
        skin: {
          primary: 'var(--color-primary)',
        },
      },
      transitionDuration: {
        quick: '150ms',
        slow: '400ms',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
