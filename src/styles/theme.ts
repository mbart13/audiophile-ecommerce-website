import { extendTheme } from '@chakra-ui/react'

import Button from './components/button'

const theme = extendTheme({
  colors: {
    bg: '#fafafa',
    accent: '#d87d4a',
    accentLight: '#fbaf85',
    gray: '#f1f1f1',
    white: '#fff',
    black: '#191919',
    text: 'rgba(0,0,0,0.5)',
    textHero: 'rgba(255,255,255,0.5)',
    divider: 'rgba(255,255,255,0.1)',
  },
  fonts: {
    body: `'Manrope', sans-serif`,
  },
  sizes: {
    container: {
      lg: '69.375rem',
    },
  },
  components: {
    Button,
  },
  shadows: {
    outline: 'none',
  },
  styles: {
    global: {
      body: {
        bg: 'bg',
        color: 'black',
      },
      'h1, h2, h3': {
        textTransform: 'uppercase',
      },
    },
  },
})

export default theme
