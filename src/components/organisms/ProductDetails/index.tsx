import { Box, Stack, Image } from '@chakra-ui/react'
import ProductGallery from 'components/molecules/ProductGallery/'
import CategoriesLinks from 'components/organisms/CategoriesLinks'
import BestGear from 'components/molecules/BestGear/index'
import OtherProducts from 'components/organisms/OtherProducts'
import { Product } from 'models/Product'
import ProductFeatures from 'components/molecules/ProductFeatures'
import ProductDescription from 'components/molecules/ProductDescription'

const ProductDetails: React.FC<{ product: Product }> = ({
  product,
}): JSX.Element => {
  return (
    <>
      <Stack
        mt={{ base: '1.5rem', lg: '3.5rem' }}
        spacing={{ base: '2rem', lg: '7.75rem' }}
        direction={{ base: 'column', sm: 'row' }}
        align={{ sm: 'center' }}
      >
        <Box flexBasis={{ base: '40%', lg: '50%' }}>
          <picture>
            <source
              media="(min-width: 62em)"
              srcSet={product?.image?.desktop}
            />
            <source media="(min-width: 30em)" srcSet={product?.image?.tablet} />
            <Image
              src={product?.image?.mobile}
              objectFit="cover"
              width="100%"
              borderRadius="0.5rem"
              alt={product.name}
            />
          </picture>
        </Box>
        <ProductDescription product={product} />
      </Stack>
      <ProductFeatures
        features={product.features}
        includedItems={product.includedItems}
      />
      <ProductGallery {...product?.gallery} />
      <OtherProducts other={product.others} />
      <CategoriesLinks />
      <BestGear />
    </>
  )
}

export default ProductDetails
