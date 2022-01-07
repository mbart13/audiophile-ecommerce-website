import { Container } from '@chakra-ui/react'

import Hero from 'components/organisms/Hero'
import CategoriesLinks from 'components/organisms/CategoriesLinks'
import MainGallery from 'components/organisms/MainGallery'
import AnimatedBestGear from 'components/molecules/AnimatedBestGear'

const HomePage = (): JSX.Element => {
  return (
    <main id="main">
      <Hero />
      <Container maxW="container.lg" px={6}>
        <CategoriesLinks />
        <MainGallery />
        <AnimatedBestGear />
      </Container>
    </main>
  )
}

export default HomePage
