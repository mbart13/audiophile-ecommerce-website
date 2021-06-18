import { VStack } from '@chakra-ui/react'

import ProductItem from 'components/molecules/ProductItem'
import { CategoryItem } from 'pages/[category]'

const ProductsList: React.FC<{ products: CategoryItem[] }> = ({
  products,
}): JSX.Element => {
  return (
    <VStack
      mt={{ base: '64px' }}
      spacing={{ base: '7.5rem' }}
      mb={{ base: '7.5rem' }}
    >
      {products.map(product => (
        <ProductItem key={product.name} {...product} />
      ))}
    </VStack>
  )
}

export default ProductsList
