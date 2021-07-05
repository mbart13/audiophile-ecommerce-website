import React, { useState } from 'react'
import { Box, Heading, Text, Button, HStack, useToast } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'

import { Product } from 'models/Product'
import { addItemToCart } from 'store/CartSlice'
import ProductQuantity from 'components/atoms/ProductQuantity'

const ProductDescription = ({ product }: { product: Product }): JSX.Element => {
  const toast = useToast()
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(
      addItemToCart({
        id: product.id,
        shortName: product.shortName,
        cartImage: product.cartImage,
        price: product.price,
        quantity,
      })
    )
    toast({
      title: `Item '${product.name}' was added to cart`,
      status: 'success',
      duration: 4000,
      position: 'top-left',
      isClosable: true,
    })
  }

  const increment = () => {
    setQuantity(state => state + 1)
  }

  const decrement = () => {
    if (quantity <= 1) return
    setQuantity(state => state - 1)
  }

  return (
    <Box textAlign={{ base: 'left' }} flexBasis={{ sm: '60%', lg: '50%' }}>
      <Heading
        as="h2"
        textTransform="uppercase"
        fontSize={{ base: '1.75rem', lg: '2.5rem' }}
        letterSpacing="0.0625rem"
        mb={{ base: '1.5rem' }}
        maxWidth={{ base: '13ch' }}
      >
        {product.new && (
          <Box
            as="strong"
            display="block"
            textTransform="uppercase"
            color="accent"
            fontSize="0.875rem"
            letterSpacing="0.625rem"
            fontWeight="normal"
            mb={{ base: '1.5rem', sm: '1rem' }}
          >
            New Product
          </Box>
        )}
        {product.name}
      </Heading>
      <Text mb={{ base: '1.5rem' }} pr={{ lg: '2rem' }}>
        {product.description}
      </Text>
      <Text
        mt={{ base: '1.5rem' }}
        fontWeight="bold"
        fontSize="1.125rem"
        color="black"
      >
        $ {product?.price?.toLocaleString('en-US')}
      </Text>
      <HStack
        spacing={{ base: '1rem' }}
        mt={{ base: '2rem' }}
        alignItems={{ base: 'stretch' }}
      >
        <ProductQuantity
          quantity={quantity}
          increment={increment}
          decrement={decrement}
          width="7.5rem"
          height="3rem"
        />
        <Button onClick={addToCart}>Add to Cart</Button>
      </HStack>
    </Box>
  )
}

export default ProductDescription
