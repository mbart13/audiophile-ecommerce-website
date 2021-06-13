import Head from 'next/head'
import { Button, Container } from '@chakra-ui/react'
import Header from 'components/organisms/Header'
import Hero from 'components/organisms/Hero'
import CategoriesLinks from 'components/organisms/CategoriesLinks'

const HomePage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Audiophile e-commerce website</title>
      </Head>
      <Header />
      <Container maxW="container.lg" px={6} as="main">
        <Hero />
        <CategoriesLinks />
      </Container>
    </>
  )
}

export default HomePage
