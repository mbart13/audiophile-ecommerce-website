import { Box, Container, Heading, Text, Button } from '@chakra-ui/react'
import Link from 'next/link'

const Hero = (): JSX.Element => {
  return (
    <Box
      position="relative"
      bg="black"
      zIndex="1"
      overflowY="hidden"
      pt={{ base: '6rem', sm: '8rem', lg: '10rem' }}
      pb="7rem"
      textAlign={{ base: 'center', lg: 'left' }}
      _after={{
        content: "''",
        position: 'absolute',
        background:
          "url('/images/home/mobile/image-hero.jpg') center/contain no-repeat",
        width: '100%',
        height: '116%',
        top: '-6rem',
        left: 0,
        zIndex: '-1',
        '@media screen and (min-width: 30em)': {
          background:
            "url('/images/home/tablet/image-hero.jpg') center/contain no-repeat",
        },
        '@media screen and (min-width: 62em)': {
          background:
            "url('/images/home/desktop/image-hero.jpg') center/contain no-repeat",
        },
      }}
    >
      <Container maxW="container.lg" px={6}>
        <Heading
          as="h1"
          fontSize={['2.25rem', '3.5rem']}
          color="white"
          maxWidth="15ch"
          mx={{ base: 'auto', lg: 0 }}
          mb={6}
          letterSpacing="0.0806rem"
          lineHeight="1.1"
        >
          <Box
            as="strong"
            color="textLight"
            textTransform="uppercase"
            mb={4}
            letterSpacing="0.625rem"
            display="block"
            fontSize="0.875rem"
          >
            New Product
          </Box>
          XX99 Mark II Headphones
        </Heading>
        <Text
          color="textLight"
          fontSize="0.9375rem"
          maxWidth="38ch"
          mx={{ base: 'auto', lg: 0 }}
          mb={10}
          lineHeight="1.7"
        >
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </Text>
        <Link href="/headphones/xx99-mark-two-headphones">
          <Button as="a" cursor="pointer">
            See Product
          </Button>
        </Link>
      </Container>
    </Box>
  )
}

export default Hero
