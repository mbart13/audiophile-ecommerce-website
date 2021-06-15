import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react'

const BestGear = (): JSX.Element => {
  return (
    <Stack
      direction={{ base: 'column', lg: 'row' }}
      spacing={{ base: '2.5rem', lg: 0 }}
      mt="7.5rem"
      textAlign={{ base: 'center', lg: 'left' }}
      alignItems={{ lg: 'center' }}
    >
      <Box as="picture" flex="1" order={{ lg: 1 }} ml={{ lg: '1.875rem' }}>
        <source
          media="(min-width: 62em)"
          srcSet="/images/shared/desktop/image-best-gear.jpg"
        />
        <source
          media="(min-width: 30em)"
          srcSet="/images/shared/tablet/image-best-gear.jpg"
        />
        <Image
          src="/images/shared/mobile/image-best-gear.jpg"
          objectFit="cover"
          borderRadius="0.5rem"
        />
      </Box>
      <Box flex="1" marginStart={{ lg: 0 }}>
        <Heading
          as="h2"
          textTransform="uppercase"
          sx={{ '& span': { color: 'accent' } }}
          mb={{ base: '2rem', sm: '2.5rem' }}
          letterSpacing="0.0894rem"
          maxWidth={{ base: '20ch', sm: '25ch', lg: '22ch' }}
          mx={{ base: 'auto', lg: 'unset' }}
          fontSize={{ base: '1.75rem' }}
        >
          Bringing you the <span>best</span> audio gear
        </Heading>
        <Text px={{ sm: '2rem', md: '6rem', lg: 0 }} pr={{ lg: '3rem' }}>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </Text>
      </Box>
    </Stack>
  )
}

export default BestGear
