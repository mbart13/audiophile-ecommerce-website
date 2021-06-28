import { Box, Text, HStack, Image } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'

import ProductQuantity from 'components/atoms/ProductQuantity'
import CartItemType from 'models/CartItem'
import { cartActions } from 'store/CartSlice'

const CartItem: React.FC<{ item: CartItemType }> = ({ item }): JSX.Element => {
  const dispatch = useDispatch()

  const increment = () => {
    dispatch(cartActions.increaseQuantity(item.id))
  }
  const decrement = () => {
    dispatch(cartActions.decreaseQuantity(item.id))
  }

  return (
    <HStack as="li" justify="space-between" align="center" listStyleType="none">
      <HStack align="center">
        <Image src={item.cartImage} borderRadius="0.5rem" boxSize="4rem" />
        <Box ml="1rem">
          <Text
            fontWeight="bold"
            fontSize="0.9375rem"
            color="black"
            textTransform="uppercase"
          >
            {item.shortName}
          </Text>
          <Text fontWeight="bold" fontSize="0.875rem">
            $ {item.price.toLocaleString()}
          </Text>
        </Box>
      </HStack>
      <ProductQuantity
        quantity={item.quantity}
        increment={increment}
        decrement={decrement}
        width="6rem"
        height="2rem"
      />
    </HStack>
  )
}

export default CartItem
