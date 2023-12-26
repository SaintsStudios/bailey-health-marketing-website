import type { Config } from 'tailwindcss'
import defaultColors from 'tailwindcss/colors'

const colors = {
  ...defaultColors,
  ...{
    primary: {
      50: '#9AC4E2',
      100: '#8ABADD',
      200: '#6AA8D4',
      300: '#4B95CB',
      400: '#3581B8',
      500: '#28628C',
      600: '#1C4461',
      700: '#0F2535',
      800: '#03070A',
    },
    secondary: {
      100: '#FFF9F6',
      200: '#FEE1CE',
      300: '#FDC8A6',
      400: '#FCB07E',
      500: '#FB8E47',
      600: '#F96D10',
      700: '#CD5405',
      800: '#963E03',
      900: '#5F2702',
      950: '#441C02',
    },
    alt: {
      300: '#F1F3EE',
      400: '#DEE2D6',
      500: '#C4CBB5',
      600: '#A9B494',
      700: '#8F9C73',
      800: '#727E59',
      900: '#545D42',
      950: '#454D36',
    },
    tertiary: {
      300: '#FEFEFE',
      400: '#EBE9E9',
      500: '#D0CCCC',
    },
  },
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
    },
  },
  plugins: [],
}
export default config
