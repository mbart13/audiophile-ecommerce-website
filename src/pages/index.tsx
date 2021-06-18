import Head from 'next/head'

import HomePageTemplate from 'components/templates/HomePage'
import CategoryTemplate from 'components/templates/Category'

const HomePage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Audiophile e-commerce website</title>
      </Head>
      {/* <HomePageTemplate /> */}
      <CategoryTemplate />
    </>
  )
}

export default HomePage
