import { Text as ChakraText } from '@chakra-ui/react'

type TextProps = {
  color?: string
  lineHeight?: string
  [x: string]: unknown
}
const Text: React.FC<TextProps> = ({
  children,
  color = 'text',
  lineHeight = '1.66',
  ...props
}): JSX.Element => {
  return (
    <ChakraText
      fontSize={{ base: '0.9375rem' }}
      color={color}
      lineHeight={lineHeight}
      {...props}
    >
      {children}
    </ChakraText>
  )
}

export default Text
