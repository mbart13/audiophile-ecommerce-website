import { Box, Heading, Image, Text, Button, Stack } from '@chakra-ui/react'
import Link from 'next/link'

import FadeInOnScroll from 'components/organisms/FadeInOnScroll'

const ZX9Speaker = (): JSX.Element => {
  return (
    <FadeInOnScroll>
      <Stack
        textAlign={{ base: 'center', lg: 'left' }}
        direction={{ base: 'column', lg: 'row' }}
        spacing={{ lg: '8.625rem' }}
        px={{ base: '1.5rem', lg: 0 }}
        pt={{ base: '3.4375rem', lg: '6rem' }}
        pb={{ base: '3.4375rem', lg: 0 }}
        borderRadius="0.5rem"
        background="url(/images/home/desktop/pattern-circles.svg) no-repeat"
        backgroundSize="cover"
        backgroundPosition={{
          base: '50% -8.125rem',
          md: '50% -16.125rem',
          lg: '-15rem -9.125rem',
        }}
        backgroundColor="accent"
        overflow="hidden"
      >
        <picture>
          <source
            media="(min-width: 62em)"
            srcSet="/images/home/desktop/image-speaker-zx9.png"
          />
          <source
            media="(min-width: 30em)"
            srcSet="/images/home/tablet/image-speaker-zx9.png"
          />
          <Image
            width={['10.625rem', '12.3125rem', null, '25.625rem']}
            src="/images/home/mobile/image-speaker-zx9.png"
            objectFit="cover"
            mb={{ base: '2rem', lg: 0 }}
            ml={{ base: 'auto', lg: '7.3125rem' }}
            mr={['auto']}
            position="relative"
            top={{ lg: '.8rem' }}
            alt=""
          />
        </picture>
        <Box ml={{ lg: '8.625rem' }} marginInlineStart="0" pt={{ lg: '2rem' }}>
          <Heading
            as="h2"
            color="white"
            maxWidth={['10ch']}
            mx={{ base: 'auto', lg: 'unset' }}
            mb="1.5rem"
            fontSize={['2.25rem', '3.5rem']}
            letterSpacing={['0.0806em', '0.125em']}
            lineHeight="1"
          >
            ZX9 Speaker
          </Heading>
          <Text
            color="rgba(255,255,255, 0.75)"
            maxWidth={['30ch', '42ch', null, '38ch']}
            mx={{ base: 'auto', lg: 'unset' }}
            mb={{ base: '4.0625rem', lg: '2.5rem' }}
            fontSize="0.9375rem"
            fontWeight="thin"
            lineHeight="1.56"
          >
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </Text>
          <Link href="/speakers/zx9-speaker" passHref>
            <Button bg="black" _hover={{ bg: '#4C4C4C' }}>
              See Product
            </Button>
          </Link>
        </Box>
      </Stack>
    </FadeInOnScroll>
  )
}

export default ZX9Speaker
