const Button = {
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
        bg: 'accentLight',
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
}

export default Button
