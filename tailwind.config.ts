import type { Config } from 'tailwindcss'
import defaultColors from 'tailwindcss/colors'

const colors = {
  ...defaultColors,
  ...{
    primary: {
      50: '#D2FAF8',
      100: '#C0F8F5',
      200: '#9BF4EF',
      300: '#77F0EA',
      400: '#52ECE4',
      500: '#2DE8DE',
      600: '#16C7BE',
      700: '#10958D',
      800: '#0B625D',
      900: '#052F2D',
      950: '#021615',
    },
    secondary: {
      50: '#9CF4C4',
      100: '#8AF2B9',
      200: '#65EEA4',
      300: '#40E98E',
      400: '#1CE578',
      500: '#16C265',
      600: '#10904B',
      700: '#0B5D31',
      800: '#052B16',
    },
    alt: {
      300: '#FDFEE5',
      400: '#FBFCBD',
      500: '#F9FB96',
      600: '#F6F960',
      700: '#F3F72A',
      800: '#DCE009',
      900: '#A7AA06',
      950: '#8C8F05',
    },
    tertiary: {
      50: '#A8B3B6',
      100: '#9DA9AC',
      200: '#87969A',
      300: '#718286',
      400: '#5F6C70',
      500: '#4C575A',
      600: '#323A3C',
      700: '#191C1D',
    },
  },
}

const fonts = {
  headers: ['Montserrat', 'sans-serif'],
  body: ['Cabin', 'sans-serif'],
}

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './modules/**/*.{js,ts,jsx,tsx,mdx}',
    './styles/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: colors,
      fontFamily: fonts,
    },
  },
  plugins: [],
}
export default config
