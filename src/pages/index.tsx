import Head from 'next/head'
import { Container } from '@chakra-ui/react'

import Header from 'components/organisms/Header'
import Hero from 'components/organisms/Hero'
import CategoriesLinks from 'components/organisms/CategoriesLinks'
import MainGallery from 'components/organisms/MainGallery'
import BestGear from 'components/molecules/BestGear'
import Footer from 'components/organisms/Footer'

const HomePage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Audiophile e-commerce website</title>
      </Head>
      <Header />
      <Hero />
      <Container maxW="container.lg" px={6} as="main">
        <CategoriesLinks />
        <MainGallery />
        <BestGear />
      </Container>
      <Footer />
    </>
  )
}

export default HomePage
