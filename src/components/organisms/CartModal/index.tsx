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
import { ModalContext } from 'store/ModalContextProvider'
import CartItem from 'components/molecules/CartItem'

const data = [
  {
    id: 4,
    shortName: 'XX99 MK II',
    cartImage: '/images/cart/image-xx99-mark-two-headphones.jpg',
    price: 2999,
  },
  {
    id: 3,
    shortName: 'XX59',
    cartImage: '/images/cart/image-xx59-headphones.jpg',
    price: 899,
  },
  {
    id: 4,
    shortName: 'YX1',
    cartImage: '/images/cart/image-yx1-earphones.jpg',
    price: 599,
  },
]

const CartModal = (): JSX.Element => {
  const { isOpen, onClose } = useContext(ModalContext)
  useEffect(() => {
    isOpen
      ? (document.body.style.overflowY = 'hidden')
      : (document.body.style.overflowY = 'initial')
  }, [isOpen])
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
            Cart (3)
          </Heading>
          <Button
            variant="link"
            fontSize="0.9375rem"
            textTransform="capitalize"
            m="0"
            textDecoration="underline"
            _hover={{
              color: 'accent',
            }}
          >
            Remove all
          </Button>
        </HStack>
        <List spacing="1.5rem" mb="2rem">
          {data.map(product => (
            <CartItem product={product} key={product.id} />
          ))}
        </List>
        <HStack justify="space-between" mb="1.5rem">
          <Text textTransform="uppercase">Total</Text>
          <Text fontSize=" 1.125rem" fontWeight="bold" color="black">
            $ 5,396
          </Text>
        </HStack>
        <Button>Checkout</Button>
      </ModalContent>
    </Modal>
  )
}

export default CartModal
