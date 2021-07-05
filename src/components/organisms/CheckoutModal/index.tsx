import {
  Modal,
  ModalOverlay,
  ModalContent,
  Heading,
  Text,
  Flex,
  Button,
  List,
  Box,
  Image,
  useBoolean,
} from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux'
import Link from 'next/link'

import { clearCart, cartItems } from 'store/CartSlice'
import { useModal } from 'store/ModalContextProvider'
import SummaryItem from 'components/molecules/SummaryItem/'
import useCartTotals from 'hooks/useCartTotals'

const CheckoutModal = (): JSX.Element => {
  const items = useSelector(cartItems)
  const { grandTotal } = useCartTotals()
  const [showMore, setShowMore] = useBoolean(false)
  const { isCheckoutModalOpen, onCheckoutModalClose } = useModal()
  const dispatch = useDispatch()

  const handleClick = () => {
    onCheckoutModalClose()
    dispatch(clearCart())
  }

  const onModalClose = () => {
    onCheckoutModalClose()
    dispatch(clearCart())
  }

  return (
    <Modal
      isOpen={isCheckoutModalOpen}
      onClose={onModalClose}
      preserveScrollBarGap={false}
      isCentered
    >
      <ModalOverlay px="1.5rem" />
      <ModalContent
        p={{ base: '2rem', md: '3rem' }}
        mx={{ base: '1.5rem', md: '2rem' }}
        maxWidth={{ sm: '25.6875rem', md: '33.75rem' }}
      >
        <Image
          src="/images/shared/desktop/icon-check-mark.svg"
          boxSize="4rem"
          aria-hidden="true"
          alt=""
          mb={{ base: '1.5rem' }}
        />
        <Heading
          textTransform="uppercase"
          lineHeight="1.125"
          fontSize={{ base: '1.5rem', sm: '2rem' }}
          mb={{ base: '1.125rem', md: '1.5rem' }}
        >
          Thank you{' '}
          <Box as="span" display="block">
            For your order
          </Box>
        </Heading>
        <Text mb={{ base: '1.375rem', md: '2rem' }}>
          You will receive an email confirmation shortly.
        </Text>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          borderRadius="0.5rem"
          overflowY="hidden"
          alignItems="stretch"
          mb={{ base: '1.5rem', md: '3rem' }}
        >
          <Box
            bg="gray"
            flexBasis="55%"
            flexGrow={1}
            display={items.length === 1 ? 'flex' : 'block'}
            alignItems="center"
          >
            <List
              as="ul"
              spacing="1.5rem"
              px="1.5rem"
              pt="1.5rem"
              pb={items.length === 1 ? '1.5rem' : '0'}
              width="100%"
            >
              {items.slice(0, showMore ? items.length : 1).map(item => (
                <SummaryItem item={item} key={item.id} />
              ))}
            </List>
            {items.length > 1 && (
              <Box textAlign="center" py="1rem">
                <Button
                  variant="link"
                  fontSize="0.75rem"
                  textTransform="initial"
                  fontWeight="bold"
                  onClick={setShowMore.toggle}
                >
                  {showMore
                    ? 'View less'
                    : `and ${items.length - 1} other item(s)`}
                </Button>
              </Box>
            )}
          </Box>

          <Flex
            bg="black"
            px={{ base: '1.5rem', md: '2rem' }}
            pt={{ base: '0.9375rem' }}
            py={{ base: '1.125rem', md: '2.625rem' }}
            flexBasis="45%"
            direction="column"
            justify={showMore ? 'flex-end' : 'center'}
          >
            <Text color="textLight" textTransform="uppercase" mb="0.5rem">
              Grand Total
            </Text>
            <Text color="white" fontWeight="bold">
              $ {grandTotal.toLocaleString()}
            </Text>
          </Flex>
        </Flex>
        <Link href="/" passHref>
          <Button as="a" cursor="pointer" onClick={handleClick}>
            Back to home
          </Button>
        </Link>
      </ModalContent>
    </Modal>
  )
}

export default CheckoutModal
