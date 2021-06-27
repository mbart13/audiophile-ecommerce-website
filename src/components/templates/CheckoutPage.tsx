import { Container } from '@chakra-ui/react'

import GoBackLink from 'components/atoms/GoBackLink'

const CheckoutPage = (): JSX.Element => {
  return (
    <Container maxW="container.lg" px={6} as="main">
      <GoBackLink />
      <h1>Checkout</h1>
    </Container>
  )
}

export default CheckoutPage
