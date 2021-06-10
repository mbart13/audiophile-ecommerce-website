import { Box, Container } from '@chakra-ui/react'
import Navbar from 'components/molecules/Navbar'

const index = (): JSX.Element => {
  return (
    <Box as="header" bg={'black'}>
      <Container maxW="container.lg">
        <Navbar />
      </Container>
    </Box>
  )
}

export default index
