import { useRouter } from 'next/router'
import { Box, Container, Heading, Text, Button } from '@chakra-ui/react'

import ProductsList from 'components/organisms/ProductsList'
import CategoriesLinks from 'components/organisms/CategoriesLinks'
import BestGear from 'components/molecules/BestGear'

const Category = (): JSX.Element => {
  const { query } = useRouter()

  return (
    <Box as="main">
      <Heading
        bg="black"
        textTransform="uppercase"
        fontSize={['1.75rem', '2.5rem']}
        letterSpacing={['0.125rem', '0.0894rem']}
        pt={['2rem', '6.5625rem']}
        pb={['2rem', '6.0625rem']}
        color="white"
        textAlign="center"
      >
        Headphones
      </Heading>
      <Container maxW="container.lg" px={6}>
        <ProductsList />
        <CategoriesLinks />
        <BestGear />
      </Container>
    </Box>
  )
}

export default Category
