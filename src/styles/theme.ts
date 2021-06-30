import { extendTheme } from '@chakra-ui/react'

import Button from './components/button'
import Text from './components/text'
import Input from './components/input'

const theme = extendTheme({
  colors: {
    bg: '#fafafa',
    accent: '#d87d4a',
    accentLight: '#fbaf85',
    gray: '#f1f1f1',
    lightGray: '#d3d3d3',
    white: '#fff',
    black: '#191919',
    text: 'rgba(0,0,0,0.5)',
    textLight: 'rgba(255,255,255,0.5)',
    divider: 'rgba(255,255,255,0.1)',
    placeholder: 'rgba(0,0,0,.4)',
    inputBorder: '#CFCFCF',
    inputError: '#CD2C2C',
  },
  fonts: {
    heading: `'Manrope', sans-serif`,
    body: `'Manrope', sans-serif`,
  },
  sizes: {
    container: {
      lg: '72.375rem',
    },
  },
  components: {
    Button,
    Text,
    Input,
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
      ul: {
        listStyleType: 'none',
      },
      'a:focus, button:focus': {
        outline: '2px dashed red',
        outlineOffset: '4px',
      },
      'a:focus:not(:focus-visible), button:focus:not(:focus-visible)': {
        outline: 'none',
      },
    },
  },
})

export default theme
