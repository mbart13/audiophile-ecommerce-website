import { Container } from '@chakra-ui/react'

import Hero from 'components/organisms/Hero'
import CategoriesLinks from 'components/organisms/CategoriesLinks'
import MainGallery from 'components/organisms/MainGallery'
import BestGear from 'components/molecules/BestGear'

const HomePage = (): JSX.Element => {
  return (
    <>
      <Hero />
      <Container maxW="container.lg" px={6} as="main">
        <CategoriesLinks />
        <MainGallery />
        <BestGear />
      </Container>
    </>
  )
}

export default HomePage
