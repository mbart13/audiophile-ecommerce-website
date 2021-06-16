import { Box, Container, Text, Stack } from '@chakra-ui/react'

import Logo from 'components/atoms/Logo'
import FooterLinks from 'components/molecules/FooterLinks'
import SocialLinks from 'components/molecules/SocialLinks'

const Footer = (): JSX.Element => {
  return (
    <Box
      mt={['7.5rem', '6rem', '12.5rem']}
      bg="black"
      textAlign={{ base: 'center', sm: 'left' }}
      pt={{ base: '3.25rem', sm: '3.75rem', lg: '4.6875rem' }}
      pb={['2rem']}
    >
      <Container maxW="container.lg" px={6}>
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          spacing={{ base: '3rem', sm: '2rem' }}
          justify={{ lg: 'space-between' }}
        >
          <Logo />
          <FooterLinks />
        </Stack>

        <Text variant="darkBackground">
          Audiophile is an all in one stop to fulfill your audio needs.
          We&apos;re a small team of music lovers and sound specialists who are
          devoted to helping you get the most out of personal audio. Come and
          visit our demo facility - we’re open 7 days a week.
        </Text>
        <Text variant="darkBackground">
          Copyright 2021. All Rights Reserved
        </Text>
        <SocialLinks />
      </Container>
    </Box>
  )
}

export default Footer
