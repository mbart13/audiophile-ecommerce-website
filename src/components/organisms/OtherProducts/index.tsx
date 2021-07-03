import { Box, Stack, Heading } from '@chakra-ui/react'
import ProductLink from 'components/molecules/ProductLink'

export type OtherProductsProps = {
  slug: string
  name: string
  image: { mobile: string; tablet: string; desktop: string }
}

const OtherProducts: React.FC<{ other: OtherProductsProps[] | undefined }> = ({
  other,
}): JSX.Element => {
  return (
    <Box
      mt={{ base: '7.5rem' }}
      textAlign={{ base: 'center' }}
      mb={{ base: '9.5rem', lg: '11.5rem' }}
    >
      <Heading fontSize={{ base: '1.5rem', md: '2rem' }}>
        You may also like
      </Heading>
      <Stack
        as="ul"
        mt={{ base: '2.5rem', sm: '3.5rem', lg: '4rem' }}
        spacing={{ base: '3.5rem', md: '1rem', lg: '1.875rem' }}
        direction={{ base: 'column', md: 'row' }}
      >
        {other?.map((product: OtherProductsProps) => (
          <ProductLink key={product.slug} {...product} />
        ))}
      </Stack>
    </Box>
  )
}

export default OtherProducts
