import { useRouter } from 'next/router'
import { Box, Container, Heading } from '@chakra-ui/react'
import { useEffect } from 'react'

import ProductsList from 'components/organisms/ProductsList'
import CategoriesLinks from 'components/organisms/CategoriesLinks'
import BestGear from 'components/molecules/BestGear'
import { Product } from 'models/Product'
import { useDispatch } from 'react-redux'
import { closeNav } from 'store/UISlice'

const Category: React.FC<{ products: Product[] }> = ({
  products,
}): JSX.Element => {
  const { query } = useRouter()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(closeNav())
  }, [query, dispatch])

  return (
    <Box as="main" id="main">
      <Heading
        as="h1"
        bg="black"
        textTransform="uppercase"
        fontSize={['1.75rem', '2.5rem']}
        letterSpacing={['0.125rem', '0.0894rem']}
        pt={['2rem', '6.5625rem']}
        pb={['2rem', '6.0625rem']}
        color="white"
        textAlign="center"
      >
        {query.category}
      </Heading>
      <Container maxW="container.lg" px={6}>
        <ProductsList products={products} />
        <CategoriesLinks />
        <BestGear />
      </Container>
    </Box>
  )
}

export default Category
