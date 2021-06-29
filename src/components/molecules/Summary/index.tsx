import {
  Box,
  Heading,
  Text,
  Image,
  HStack,
  List,
  Button,
} from '@chakra-ui/react'
import { useSelector } from 'react-redux'

import { cartItems, totalAmount } from 'store/CartSlice'
import { SHIPPING_FEE, TAX_RATE } from 'constants/fees'
import SummaryLine from 'components/molecules/SummaryLine'

const Summary = (): JSX.Element => {
  const items = useSelector(cartItems)
  const cartTotal = useSelector(totalAmount)
  const tax = TAX_RATE * cartTotal
  const grandTotal = cartTotal + tax + SHIPPING_FEE

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
      {items.length > 0 ? (
        <List as="ul" spacing="1.5rem" mt="2rem">
          {items.map(item => (
            <HStack align="center" as="li" key={item.id} spacing="1.5rem">
              <Image
                src={item.cartImage}
                borderRadius="0.5rem"
                boxSize="4rem"
              />
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
      ) : (
        <Text textAlign="center" mt="1.5rem" fontWeight="bold">
          No Items in cart
        </Text>
      )}

      <Box mt="2rem">
        <SummaryLine name="total" amount={cartTotal.toLocaleString()} />
        <SummaryLine name="shipping" amount={SHIPPING_FEE.toLocaleString()} />
        <SummaryLine name="vat (included)" amount={tax.toLocaleString()} />
        <SummaryLine
          name="Grand Total"
          amount={grandTotal.toLocaleString()}
          mt="1.5rem"
          grandTotal
        />
        <Button type="submit" width="100%" mt="2rem" isDisabled={!items.length}>
          Continue & Pay
        </Button>
      </Box>
    </Box>
  )
}

export default Summary
