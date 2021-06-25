import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  Box,
  Heading,
  Text,
  HStack,
  Button,
  ListItem,
} from '@chakra-ui/react'
import Image from 'next/image'
import ProductQuantity from 'components/atoms/ProductQuantity'
type CartItemProps = {
  id: number
  shortName: string
  cartImage: string
  price: number
}

const CartItem: React.FC<{ product: CartItemProps }> = ({
  product,
}): JSX.Element => {
  return (
    <HStack as="li" justify="space-between" align="center" listStyleType="none">
      <HStack align="center">
        <Image src={product.cartImage} width={64} height={64} />
        <Box ml="1rem">
          <Text
            fontWeight="bold"
            fontSize="0.9375rem"
            color="black"
            textTransform="uppercase"
          >
            {product.shortName}
          </Text>
          <Text fontWeight="bold" fontSize="0.875rem">
            $ {product.price.toLocaleString()}
          </Text>
        </Box>
      </HStack>
      <ProductQuantity width="6rem" height="2rem" />
    </HStack>
  )
}

export default CartItem
