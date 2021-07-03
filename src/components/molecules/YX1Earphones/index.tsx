import { Box, Heading, Image, Button, SimpleGrid } from '@chakra-ui/react'
import Link from 'next/link'

import FadeInOnScroll from 'components/organisms/FadeInOnScroll'

const YX1Earphones = (): JSX.Element => {
  return (
    <SimpleGrid
      columns={[1, 2]}
      spacing={{ base: '1.5rem', sm: '0.75rem', lg: '1.875rem' }}
    >
      <FadeInOnScroll>
        <Box as="picture" height="100%">
          <source
            media="(min-width: 62em)"
            srcSet="/images/home/desktop/image-earphones-yx1.jpg"
          />
          <source
            media="(min-width: 30em)"
            srcSet="/images/home/tablet/image-earphones-yx1.jpg"
          />
          <Image
            src="/images/home/mobile/image-earphones-yx1.jpg"
            objectFit="cover"
            borderRadius="0.5rem"
            alt=""
          />
        </Box>
      </FadeInOnScroll>
      <FadeInOnScroll transition={{ ease: 'easeOut', duration: 1, delay: 0.5 }}>
        <Box
          bg="gray"
          height="100%"
          py={{ base: '2.5625rem', sm: 'unset' }}
          pl={{
            base: '1.5rem',
            sm: '2rem',
            md: '2.5625rem',
            lg: '5.9375rem',
          }}
          borderRadius="0.5rem"
          position="relative"
        >
          <Box
            position={{ sm: 'absolute' }}
            top="50%"
            transform={['translateY(0)', 'translateY(-50%)']}
            pr={{ sm: '1rem' }}
          >
            <Heading as="h2" mb="2rem" fontSize="1.75rem" color="black">
              YX1 Earphones
            </Heading>
            <Link href="/earphones/yx1-earphones" passHref>
              <Button variant="secondary">See Product</Button>
            </Link>
          </Box>
        </Box>
      </FadeInOnScroll>
    </SimpleGrid>
  )
}

export default YX1Earphones
