import { useRouter } from 'next/router'
import { Box, Container, Heading } from '@chakra-ui/react'

import ProductsList from 'components/organisms/ProductsList'
import CategoriesLinks from 'components/organisms/CategoriesLinks'
import BestGear from 'components/molecules/BestGear'
import { CategoryItem } from 'pages/[category]'

const Category: React.FC<{ products: CategoryItem[] }> = ({
  products,
}): JSX.Element => {
  const { query } = useRouter()
  return (
    <Box as="main">
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
