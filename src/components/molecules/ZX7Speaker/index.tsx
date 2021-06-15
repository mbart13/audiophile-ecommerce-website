import { Box, Heading, Image, Button } from '@chakra-ui/react'

const ZX7Speaker = (): JSX.Element => {
  return (
    <Box borderRadius="0.5rem" overflow="hidden" position="relative">
      <picture>
        <source
          media="(min-width: 62em)"
          srcSet="/images/home/desktop/image-speaker-zx7.jpg"
        />
        <source
          media="(min-width: 30em)"
          srcSet="/images/home/tablet/image-speaker-zx7.jpg"
        />
        <Image
          src="/images/home/mobile/image-speaker-zx7.jpg"
          objectFit="cover"
          width="100%"
        />
      </picture>
      <Box
        position="absolute"
        top="50%"
        left={{ base: '1.5rem', sm: '3.875rem', lg: '5.9375rem' }}
        transform="translateY(-50%)"
      >
        <Heading mb="2rem" fontSize="1.75rem" color="black">
          ZX7 Speaker
        </Heading>
        <Button variant="secondary">See Product</Button>
      </Box>
    </Box>
  )
}

export default ZX7Speaker
