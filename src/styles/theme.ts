import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    bg: '#fafafa',
    accent: '#d87d4a',
    accentHover: '#fbaf85',
    gray: '#f1f1f1',
    white: '#fff',
    black: '#000',
    text: 'rgba(0,0,0,0.5)',
  },
  fonts: {
    body: `'Manrope', sans-serif`,
  },
  breakpoints: ['43.75rem', '70rem'],
  sizes: {
    container: {
      lg: '69.375rem',
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        borderRadius: 0,
      },
      sizes: {
        regular: {
          px: 8,
          py: 3.5,
          fontSize: '0.8125rem',
        },
      },
      variants: {
        primary: {
          bg: 'accent',
          color: 'white',
          _hover: {
            bg: 'accentHover',
          },
        },
        secondary: {
          bg: 'transparent',
          color: 'black',
          border: '1px solid black',
          _hover: {
            bg: 'black',
            color: 'white',
          },
        },
      },
      defaultProps: {
        variant: 'primary',
        size: 'regular',
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: 'bg',
        color: 'black',
      },
    },
  },
})

export default theme
