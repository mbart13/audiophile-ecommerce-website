import {
  Modal,
  ModalOverlay,
  ModalContent,
  Heading,
  Text,
  HStack,
  Button,
  List,
} from '@chakra-ui/react'
import { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ModalContext } from 'store/ModalContextProvider'
import CartItem from 'components/molecules/CartItem'
import { cartItems, totalAmount, totalQuantity } from 'store/CartSlice'
import { cartActions } from 'store/CartSlice'

const CartModal = (): JSX.Element => {
  const items = useSelector(cartItems)
  const amount = useSelector(totalAmount)
  const quantity = useSelector(totalQuantity)
  const dispatch = useDispatch()
  const { isOpen, onClose } = useContext(ModalContext)

  useEffect(() => {
    isOpen
      ? (document.body.style.overflowY = 'hidden')
      : (document.body.style.overflowY = 'initial')
  }, [isOpen])

  const clearCart = () => {
    dispatch(cartActions.clearCart())
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay px="1.5rem" />
      <ModalContent
        p="2rem"
        maxWidth="23.5625rem"
        mt={{ base: '7rem', sm: '8rem' }}
        mx={{ base: '1.5rem' }}
        position={{ base: 'relative', md: 'absolute' }}
        right={{ md: '10.3125rem' }}
      >
        <HStack justify="space-between" mb="2rem">
          <Heading as="h3" fontSize="1.125rem" letterSpacing="0.0806rem">
            Cart ({quantity})
          </Heading>
          <Button
            variant="link"
            fontSize="0.9375rem"
            textTransform="capitalize"
            m="0"
            textDecoration="underline"
            onClick={clearCart}
            _hover={{
              color: 'accent',
            }}
          >
            Remove all
          </Button>
        </HStack>
        {!!items.length && (
          <List spacing="1.5rem" mb="2rem">
            {items.map(cartItem => (
              <CartItem item={cartItem} key={cartItem.id} />
            ))}
          </List>
        )}
        <HStack justify="space-between" mb="1.5rem">
          <Text textTransform="uppercase">Total</Text>
          <Text fontSize=" 1.125rem" fontWeight="bold" color="black">
            $ {amount.toLocaleString()}
          </Text>
        </HStack>
        <Button>Checkout</Button>
      </ModalContent>
    </Modal>
  )
}

export default CartModal
