import { Box, Heading, Button, Image } from '@chakra-ui/react'
import { OtherProductsProps } from 'components/organisms/OtherProducts'
import Link from 'next/link'

const ProductLink: React.FC<OtherProductsProps> = ({
  slug,
  name,
  image,
}): JSX.Element => {
  return (
    <Box as="li">
      <Box as="picture">
        <source media="(min-width: 62em)" srcSet={image.desktop} />
        <source media="(min-width: 48em)" srcSet={image.tablet} />
        <Image
          src={image.mobile}
          objectFit="cover"
          width="100%"
          borderRadius="0.5rem"
          alt={name}
        />
      </Box>
      <Heading
        as="h3"
        fontSize={{ base: '1.5rem' }}
        mt={{ base: '2rem' }}
        letterSpacing="0.1069rem"
      >
        {name}
      </Heading>
      <Link href={`/${slug}`}>
        <Button as="a" cursor="pointer" mt={{ base: '32px' }}>
          See Product
        </Button>
      </Link>
    </Box>
  )
}

export default ProductLink
