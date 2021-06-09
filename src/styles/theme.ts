import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    bg: '#fafafa',
    accent: '#d87d4a',
    accentHover: '#fbaf85',
    white: '#fff',
    black: '#000',
    text: 'rgba(0,0,0,0.5)',
  },
  fonts: {
    body: `'Manrope', sans-serif`,
  },
  breakpoints: ['43.75rem', '70rem'],
  sizes: {
    container: '69.375rem',
  },
  styles: {
    global: {
      body: {
        bg: 'bg',
        color: 'text',
      },
    },
  },
})

export default theme
