import { Box, Stack, Heading, Text, Button, Image } from '@chakra-ui/react'
import { Product } from 'models/Product'
import Link from 'next/link'

const CategoryPageItem: React.FC<Product> = ({
  slug,
  name,
  category,
  description,
  new: isNew,
  categoryImage,
}): JSX.Element => {
  return (
    <Stack
      spacing={{ base: '2rem', lg: '0' }}
      direction={{ base: 'column' }}
      sx={{
        '@media screen and (min-width: 62em)': {
          '&:nth-of-type(odd) div:nth-of-type(1)': {
            marginRight: '7.8125rem',
          },
          '&:nth-of-type(even) div:nth-of-type(1)': {
            order: 1,
            marginLeft: '7.8125rem',
          },
          alignItems: 'center',
          flexDirection: 'row',
        },
      }}
    >
      <Box flexBasis={{ lg: '55%' }}>
        <picture>
          <source media="(min-width: 62em)" srcSet={categoryImage.desktop} />
          <source media="(min-width: 30em)" srcSet={categoryImage.tablet} />
          <Image
            src={categoryImage.mobile}
            objectFit="cover"
            width="100%"
            borderRadius="0.5rem"
            alt={name}
          />
        </picture>
      </Box>

      <Box textAlign={{ base: 'center', lg: 'left' }} flexBasis={{ lg: '45%' }}>
        <Heading
          as="h2"
          textTransform="uppercase"
          fontSize={{ base: '1.75rem' }}
          letterSpacing="0.0625rem"
          mb={{ base: '1.5rem' }}
          maxWidth={{ base: '13ch' }}
          mx={{ base: 'auto', lg: 'unset' }}
        >
          {isNew && (
            <Box
              as="strong"
              display="block"
              textTransform="uppercase"
              color="accent"
              fontSize="0.875rem"
              letterSpacing="0.625rem"
              fontWeight="normal"
              mb={{ base: '1.5rem', sm: '1rem' }}
            >
              New Product
            </Box>
          )}
          {name}
        </Heading>
        <Text
          mb={{ base: '1.5rem' }}
          px={{ sm: '2rem', md: '4rem', lg: 0 }}
          pr="1rem"
        >
          {description}
        </Text>
        <Link href={`/${category}/${slug}`} passHref>
          <Button as="a" cursor="pointer">
            See Product
          </Button>
        </Link>
      </Box>
    </Stack>
  )
}

export default CategoryPageItem
