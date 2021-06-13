import Head from 'next/head'
import { Button, Container } from '@chakra-ui/react'
import Header from 'components/organisms/Header'
import Hero from 'components/organisms/Hero'

const HomePage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Audiophile e-commerce website</title>
      </Head>
      <Header />
      <Hero />
    </>
  )
}

export default HomePage
