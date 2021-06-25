import { useState } from 'react'
import { Flex, Button as ChakraButton, Center } from '@chakra-ui/react'

const ProductQuantity = ({
  width,
  height,
}: {
  width: string
  height: string
}): JSX.Element => {
  const [quantity, setQuantity] = useState(1)

  return (
    <Flex bg="gray" alignItems="center" width={width} height={height}>
      <Button
        sign="-"
        handleClick={() => setQuantity(qty => (qty === 1 ? 1 : qty - 1))}
      />
      <Center fontSize="0.8125rem" fontWeight="bold" width="20%">
        {quantity}
      </Center>
      <Button sign="+" handleClick={() => setQuantity(qty => qty + 1)} />
    </Flex>
  )
}

const Button = ({
  sign,
  handleClick,
}: {
  sign: string
  handleClick: () => void
}): JSX.Element => {
  return (
    <ChakraButton
      onClick={handleClick}
      width="40%"
      height="100%"
      color="text"
      fontSize="0.9375rem"
      fontWeight="bold"
      border="none"
      p="0"
      bg="transparent"
      _hover={{
        bg: 'lightGray',
        color: 'accent',
      }}
    >
      {sign}
    </ChakraButton>
  )
}

export default ProductQuantity
