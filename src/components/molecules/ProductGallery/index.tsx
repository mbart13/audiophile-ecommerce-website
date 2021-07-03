import { SimpleGrid, Image, Box } from '@chakra-ui/react'
import { CategoryImage } from 'models/Product'

type ProductGalleryProps = {
  first?: CategoryImage | undefined
  second?: CategoryImage | undefined
  third?: CategoryImage | undefined
}

const ProductGallery: React.FC<ProductGalleryProps> = ({
  first,
  second,
  third,
}): JSX.Element => {
  return (
    <SimpleGrid
      gridTemplateColumns={{
        base: '1fr',
        sm: '40% 1fr',
      }}
      templateAreas={{ sm: '"a c" "b c"' }}
      mt={{ base: '5.5rem', sm: '7.5rem', lg: '10rem' }}
      gap={{ base: '1.25rem' }}
    >
      <Box as="picture" gridArea={{ sm: 'a' }}>
        <source media="(min-width: 62em)" srcSet={first?.desktop} />
        <source media="(min-width: 30em)" srcSet={first?.tablet} />
        <Image
          src={first?.mobile}
          objectFit="cover"
          width="100%"
          borderRadius="0.5rem"
          height="100%"
          alt=""
        />
      </Box>
      <Box as="picture" gridArea={{ sm: 'b' }}>
        <source media="(min-width: 62em)" srcSet={second?.desktop} />
        <source media="(min-width: 30em)" srcSet={second?.tablet} />
        <Image
          src={second?.mobile}
          objectFit="cover"
          width="100%"
          borderRadius="0.5rem"
          height="100%"
        />
      </Box>
      <Box as="picture" gridArea={{ sm: 'c' }}>
        <source media="(min-width: 62em)" srcSet={third?.desktop} />
        <source media="(min-width: 30em)" srcSet={third?.tablet} />
        <Image
          src={third?.mobile}
          objectFit="cover"
          width="100%"
          borderRadius="0.5rem"
          height="100%"
        />
      </Box>
    </SimpleGrid>
  )
}

export default ProductGallery
