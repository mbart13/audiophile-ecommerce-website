import { Box, Text, Image, HStack } from '@chakra-ui/react'
import CartItem from 'models/CartItem'

const SummaryItem = ({ item }: { item: CartItem }): JSX.Element => {
  return (
    <HStack
      align="center"
      as="li"
      key={item.id}
      spacing="0.5rem"
      position="relative"
      width="100%"
      sx={{
        '&:last-child:not(:first-of-type)::after': {
          content: "''",
          position: 'absolute',
          width: '100%',
          height: '1px',
          left: 0,
          bottom: '-0.5rem',
          bg: 'rgba(0,0,0,.1)',
        },
      }}
    >
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
          <Text fontWeight="bold" fontSize="0.9375rem" alignSelf="flex-start">
            x{item.quantity}
          </Text>
        </HStack>
        <Text fontWeight="bold" fontSize="0.875rem">
          $ {item.price.toLocaleString('en-US')}
        </Text>
      </Box>
    </HStack>
  )
}

export default SummaryItem
