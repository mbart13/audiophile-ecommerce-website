import { Button, Center } from '@chakra-ui/react'
import Image from 'next/image'
import { useContext } from 'react'
import { useSelector } from 'react-redux'

import { ModalContext } from 'store/ModalContextProvider'
import { totalQuantity } from 'store/CartSlice'

const CartIcon = (): JSX.Element => {
  const { onOpen } = useContext(ModalContext)
  const quantity = useSelector(totalQuantity)

  return (
    <Button
      position="relative"
      bg="transparent"
      border="none"
      p="0"
      onClick={onOpen}
      aria-label="Show Cart"
      _hover={{
        bg: 'transparent',
      }}
      fontWeight="normal"
    >
      <Image
        src="/images/shared/desktop/icon-cart.svg"
        width={23}
        height={20}
      ></Image>
      {!!quantity && (
        <Center
          as="span"
          p=".7rem"
          position="absolute"
          width="1rem"
          height="1rem"
          bg="accent"
          fontSize="0.8125rem"
          borderRadius="50%"
          color="white"
          top="-0.375rem"
          right="-0.9375rem"
        >
          {quantity}
        </Center>
      )}
    </Button>
  )
}

export default CartIcon
