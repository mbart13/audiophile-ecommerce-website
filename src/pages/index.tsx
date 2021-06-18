import Head from 'next/head'

import HomePageTemplate from 'components/templates/HomePage'

const HomePage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Audiophile e-commerce website</title>
      </Head>
      <HomePageTemplate />
    </>
  )
}

export default HomePage
