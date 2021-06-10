import Head from 'next/head'
import { Button, Container } from '@chakra-ui/react'
import Header from 'components/organisms/Header'

const HomePage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Audiophile e-commerce website</title>
      </Head>
      <Header />
    </>
  )
}

export default HomePage
