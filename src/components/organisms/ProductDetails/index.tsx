import React, { useState } from 'react'
import {
  Box,
  Stack,
  Heading,
  Text,
  Button,
  Image,
  HStack,
  List,
  ListItem,
  SimpleGrid,
} from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import ProductQuantity from 'components/atoms/ProductQuantity'
import ProductGallery from 'components/molecules/ProductGallery/'
import CategoriesLinks from 'components/organisms/CategoriesLinks'
import BestGear from 'components/molecules/BestGear/index'
import OtherProducts from 'components/organisms/OtherProducts'
import { Product } from 'models/Product'
import { cartActions } from 'store/CartSlice'

const ProductDetails: React.FC<{ product: Product }> = ({
  product,
}): JSX.Element => {
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()
  const addToCart = () => {
    dispatch(
      cartActions.addItemToCart({
        id: product.id,
        shortName: product.shortName,
        cartImage: product.cartImage,
        price: product.price,
        quantity,
      })
    )
  }

  const increment = () => {
    setQuantity(state => state + 1)
  }

  const decrement = () => {
    setQuantity(state => state - 1)
  }

  return (
    <>
      <Stack
        mt={{ base: '1.5rem', lg: '3.5rem' }}
        spacing={{ base: '2rem', lg: '7.75rem' }}
        direction={{ base: 'column', sm: 'row' }}
        align={{ sm: 'center' }}
      >
        <Box flexBasis={{ base: '40%', lg: '50%' }}>
          <picture>
            <source
              media="(min-width: 62em)"
              srcSet={product?.image?.desktop}
            />
            <source media="(min-width: 30em)" srcSet={product?.image?.tablet} />
            <Image
              src={product?.image?.mobile}
              objectFit="cover"
              width="100%"
              borderRadius="0.5rem"
            />
          </picture>
        </Box>
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
            $ {product?.price?.toLocaleString()}
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
      </Stack>
      <Stack
        mt={{ base: '5.5rem', sm: '7.5rem', lg: '10rem' }}
        spacing={{ base: '5.5rem', lg: '7.5rem' }}
        direction={{ base: 'column', lg: 'row' }}
      >
        <Box flexBasis={{ lg: '55%' }}>
          <Heading fontSize={{ base: '1.5rem', md: '2rem' }}>Features</Heading>
          <Text mt={{ base: '1.5rem' }} whiteSpace="pre-line">
            {product.features}
          </Text>
        </Box>
        <Stack
          direction={{ base: 'column', sm: 'row', lg: 'column' }}
          spacing={{ base: '1.5rem', sm: '6rem', md: '12rem', lg: '2rem' }}
        >
          <Heading fontSize={{ base: '1.5rem', md: '2rem' }}>
            In the Box
          </Heading>
          <List mt={{ base: '1.5rem' }}>
            {product?.includes?.map(item => (
              <ListItem key={item.item} fontSize="0.9375rem" mb="0.5rem">
                <SimpleGrid gridTemplateColumns="2rem 1fr">
                  <Box as="span" color="accent" fontWeight="bold">
                    {item.quantity}x
                  </Box>
                  <Box
                    as="span"
                    color="text"
                    textTransform="capitalize"
                    textAlign="left"
                  >
                    {item.item}
                  </Box>
                </SimpleGrid>
              </ListItem>
            ))}
          </List>
        </Stack>
      </Stack>
      <ProductGallery {...product?.gallery} />
      <OtherProducts other={product.others} />
      <CategoriesLinks />
      <BestGear />
    </>
  )
}

export default ProductDetails
