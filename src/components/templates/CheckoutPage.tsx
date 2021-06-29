import { Container, Stack } from '@chakra-ui/react'
import GoBackLink from 'components/atoms/GoBackLink'
import Summary from 'components/molecules/Summary'
import CheckoutForm from './../organisms/CheckoutForm/index'

const CheckoutPage = (): JSX.Element => {
  return (
    <Container maxW="container.lg" px={6} as="main">
      <GoBackLink />
      <Stack
        as="form"
        direction={{ base: 'column', lg: 'row' }}
        alignItems={{ lg: 'start' }}
        spacing={{ base: '2rem' }}
        mt={{ base: '1.5rem' }}
      >
        <CheckoutForm />
        <Summary />
      </Stack>
    </Container>
  )
}

export default CheckoutPage
