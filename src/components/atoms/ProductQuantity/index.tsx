import { useState } from 'react'
import { Flex, Button as ChakraButton, Center } from '@chakra-ui/react'

const ProductQuantity = (): JSX.Element => {
  const [quantity, setQuantity] = useState(1)

  return (
    <Flex bg="gray" height="3rem" alignItems="center">
      <Button
        sign="-"
        handleClick={() => setQuantity(qty => (qty === 1 ? 1 : qty - 1))}
      />
      <Center
        fontSize="0.8125rem"
        fontWeight="bold"
        width="2.5rem"
        height="3rem"
      >
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
      width="2.5rem"
      height="3rem"
      color="text"
      fontSize="0.9375rem"
      fontWeight="bold"
      border="none"
      p="0"
      bg="transparent"
      _hover={{
        bg: 'transparent',
      }}
    >
      {sign}
    </ChakraButton>
  )
}

export default ProductQuantity
