import {
  Box,
  Heading,
  Text,
  Image,
  HStack,
  List,
  Button,
} from '@chakra-ui/react'

const data = [
  {
    id: 4,
    shortName: 'XX99 MK II',
    cartImage: '/images/cart/image-xx99-mark-two-headphones.jpg',
    price: 2999,
    quantity: 1,
  },
  {
    id: 3,
    shortName: 'XX59',
    cartImage: '/images/cart/image-xx59-headphones.jpg',
    price: 899,
    quantity: 2,
  },
  {
    id: 5,
    shortName: 'YX1',
    cartImage: '/images/cart/image-yx1-earphones.jpg',
    price: 599,
    quantity: 1,
  },
]

const Summary = (): JSX.Element => {
  return (
    <Box
      px={{ base: '1.5rem', sm: '2rem' }}
      py={{ base: '2rem' }}
      bg="white"
      flexGrow={{ lg: 1 }}
    >
      <Heading fontSize={{ base: '1.125rem' }} letterSpacing="0.0806rem">
        Summary
      </Heading>
      <List as="ul" spacing="1.5rem" mt="2rem">
        {data.map(item => (
          <HStack align="center" as="li" key={item.id} spacing="1.5rem">
            <Image src={item.cartImage} borderRadius="0.5rem" boxSize="4rem" />
            <Box width="100%">
              <HStack justify="space-between" width="100%">
                <Text
                  fontWeight="bold"
                  fontSize="0.9375rem"
                  color="black"
                  textTransform="uppercase"
                >
                  {item.shortName}
                </Text>
                <Text
                  fontWeight="bold"
                  fontSize="0.9375rem"
                  alignSelf="flex-start"
                >
                  x{item.quantity}
                </Text>
              </HStack>

              <Text fontWeight="bold" fontSize="0.875rem">
                $ {item.price.toLocaleString()}
              </Text>
            </Box>
          </HStack>
        ))}
      </List>
      <Box mt="2rem">
        <HStack justify="space-between">
          <Text textTransform="uppercase">Total</Text>
          <Text
            textTransform="uppercase"
            fontWeight="bold"
            fontSize="1.125rem"
            color="black"
          >
            $ 5,396
          </Text>
        </HStack>
        <HStack justify="space-between">
          <Text textTransform="uppercase">Shipping</Text>
          <Text
            textTransform="uppercase"
            fontWeight="bold"
            fontSize="1.125rem"
            color="black"
          >
            $ 50
          </Text>
        </HStack>
        <HStack justify="space-between">
          <Text textTransform="uppercase">VAT (Included)</Text>
          <Text
            textTransform="uppercase"
            fontWeight="bold"
            fontSize="1.125rem"
            color="black"
          >
            $ 1,079
          </Text>
        </HStack>
        <HStack justify="space-between" mt="1.5rem">
          <Text textTransform="uppercase">Grand Total</Text>
          <Text
            textTransform="uppercase"
            fontWeight="bold"
            fontSize="1.125rem"
            color="accent"
          >
            $ 5,446
          </Text>
        </HStack>
        <Button width="100%" mt="2rem">
          Continue & Pay
        </Button>
      </Box>
    </Box>
  )
}

export default Summary
