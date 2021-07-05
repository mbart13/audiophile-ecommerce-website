import {
  Modal,
  ModalOverlay,
  ModalContent,
  Heading,
  Text,
  HStack,
  Button,
  List,
  useToast,
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import { useModal } from 'store/ModalContextProvider'
import CartItem from 'components/molecules/CartItem'

import {
  cartItems,
  clearCart,
  totalAmount,
  totalQuantity,
} from 'store/CartSlice'

const CartModal = (): JSX.Element => {
  const items = useSelector(cartItems)
  const amount = useSelector(totalAmount)
  const quantity = useSelector(totalQuantity)
  const dispatch = useDispatch()
  const { isCartModalOpen, onCartModalClose } = useModal()
  const toast = useToast()

  const emptyCart = () => {
    dispatch(clearCart())
    toast({
      title: 'Cart is empty',
      status: 'success',
      duration: 4000,
      position: 'top-left',
      isClosable: true,
    })
  }

  return (
    <Modal
      isOpen={isCartModalOpen}
      onClose={onCartModalClose}
      preserveScrollBarGap={false}
    >
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
            onClick={emptyCart}
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
            $ {amount.toLocaleString('en-US')}
          </Text>
        </HStack>
        <Link href="/checkout" passHref>
          <Button as="a" cursor="pointer" onClick={onCartModalClose}>
            Checkout
          </Button>
        </Link>
      </ModalContent>
    </Modal>
  )
}

export default CartModal
