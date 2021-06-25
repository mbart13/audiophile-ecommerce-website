import { useRouter } from 'next/router'
import { Product } from 'models/Product'

import ProductDetails from 'components/organisms/ProductDetails'

import { Container, Button } from '@chakra-ui/react'
import BasicUsage from './../organisms/BasicUsage/BasicUsage'

const ProductPage: React.FC<{ product: Product }> = ({
  product,
}): JSX.Element => {
  const router = useRouter()

  return (
    <Container maxW="container.lg" px={6} as="main">
      <Button
        as="a"
        variant="link"
        onClick={() => router.back()}
        mt={{ base: '1rem', sm: '2rem', lg: '5rem' }}
        fontSize="0.9375rem"
        textTransform="capitalize"
      >
        Go back
      </Button>
      <ProductDetails product={product} />
      <BasicUsage />
    </Container>
  )
}

export default ProductPage
