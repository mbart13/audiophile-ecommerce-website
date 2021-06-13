import { Box, Container, Heading, Text, Button, Image } from '@chakra-ui/react'

const Hero = (): JSX.Element => {
  return (
    <Box
      pt={['6rem', '8rem', null, '10rem']}
      pb="7rem"
      textAlign={['center', null, null, 'left']}
    >
      <Image
        srcSet="/images/home/mobile/image-hero.jpg 300w,
        /images/home/tablet/image-hero.jpg 1000w,
        /images/home/desktop/image-hero.jpg 1440w"
        objectFit="cover"
        position="absolute"
        top="0"
        left="0"
        height={['37.5rem', '45.5625rem']}
        width="100%"
        zIndex="-100"
      />
      <Text
        color="textHero"
        textTransform="uppercase"
        mb={4}
        letterSpacing="0.625rem"
      >
        New Product
      </Text>
      <Heading
        as="h1"
        fontSize={['2.25rem', '3.5rem']}
        color="white"
        maxWidth="15ch"
        mx={['auto', null, null, 0]}
        mb={6}
        letterSpacing="0.0806rem"
        lineHeight="1.1"
      >
        XX99 Mark II Headphones
      </Heading>
      <Text
        color="textHero"
        fontSize="0.9375rem"
        maxWidth="38ch"
        mx={['auto', null, null, 0]}
        mb={10}
        lineHeight="1.7"
      >
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </Text>
      <Button>See Product</Button>
    </Box>
  )
}

export default Hero
