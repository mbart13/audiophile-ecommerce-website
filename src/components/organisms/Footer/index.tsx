import { Box, Container, Text, Stack, SimpleGrid } from '@chakra-ui/react'

import Logo from 'components/atoms/Logo'
import FooterLinks from 'components/molecules/FooterLinks'
import SocialLinks from 'components/molecules/SocialLinks'

const Footer = (): JSX.Element => {
  return (
    <Box
      as="footer"
      mt={['7.5rem', '6rem', '12.5rem']}
      bg="black"
      textAlign={{ base: 'center', sm: 'left' }}
    >
      <Container
        pt={{ base: '3.25rem', sm: '3.75rem', lg: '4.6875rem' }}
        pb={['2rem']}
        maxW="container.lg"
        position="relative"
        px={6}
        _before={{
          content: '""',
          position: 'absolute',
          height: '0.25rem',
          width: '6.25rem',
          bg: 'accent',
          top: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          '@media screen and (min-width: 30em)': {
            transform: 'translateX(0)',
            left: '1.5rem',
          },
        }}
      >
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: '3rem', sm: '2rem' }}
          justify={{ lg: 'space-between' }}
        >
          <Logo />
          <FooterLinks />
        </Stack>
        <SimpleGrid
          templateColumns={{ sm: '50% 1fr' }}
          templateAreas={{ sm: '"a a""b c"', lg: '"a c""b c"' }}
          gap="3rem"
          mt="3rem"
        >
          <Text variant="darkBackground" gridArea={{ sm: 'a' }}>
            Audiophile is an all in one stop to fulfill your audio needs.
            We&apos;re a small team of music lovers and sound specialists who
            are devoted to helping you get the most out of personal audio. Come
            and visit our demo facility - we’re open 7 days a week.
          </Text>
          <Text variant="darkBackground" gridArea={{ sm: 'b' }}>
            Copyright 2021. All Rights Reserved
          </Text>
          <Box
            gridArea={{ sm: 'c' }}
            justifySelf={{ sm: 'end' }}
            alignSelf={{ md: 'center' }}
          >
            <SocialLinks />
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Footer
