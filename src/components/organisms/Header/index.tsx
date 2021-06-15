import { Box, Container } from '@chakra-ui/react'

import Navbar from 'components/molecules/Navbar'

const Header = (): JSX.Element => {
  return (
    <Box
      as="header"
      bg="black"
      py={8}
      borderBottom={['1px', 'unset']}
      borderColor="divider"
    >
      <Container maxW="container.lg" px={6}>
        <Navbar />
      </Container>
    </Box>
  )
}

export default Header
