const Text = {
  baseStyle: {
    fontWeight: 'normal',
    lineHeight: '1.66',
  },
  sizes: {
    regular: {
      fontSize: '0.9375rem',
    },
  },
  variants: {
    lightBackground: {
      color: 'text',
    },
    darkBackground: {
      color: 'textLight',
    },
  },
  defaultProps: {
    variant: 'lightBackground',
    size: 'regular',
  },
}

export default Text
