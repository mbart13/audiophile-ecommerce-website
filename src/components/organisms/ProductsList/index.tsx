import { VStack } from '@chakra-ui/react'

import CategoryPageItem from 'components/molecules/CategoryPageItem'
import { Product } from 'models/Product'

const ProductsList: React.FC<{ products: Product[] }> = ({
  products,
}): JSX.Element => {
  return (
    <VStack
      mt={{ base: '4rem' }}
      spacing={{ base: '7.5rem' }}
      mb={{ base: '7.5rem' }}
    >
      {products.map(product => (
        <CategoryPageItem key={product.id} {...product} />
      ))}
    </VStack>
  )
}

export default ProductsList
