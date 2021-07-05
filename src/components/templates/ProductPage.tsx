import { Product } from 'models/Product'
import { Container } from '@chakra-ui/react'

import ProductDetails from 'components/organisms/ProductDetails'
import GoBackLink from 'components/atoms/GoBackLink'

const ProductPage: React.FC<{ product: Product }> = ({
  product,
}): JSX.Element => {
  return (
    <Container maxW="container.lg" px={6} as="main" id="main">
      <GoBackLink />
      <ProductDetails product={product} />
    </Container>
  )
}

export default ProductPage
