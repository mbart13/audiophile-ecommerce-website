import Head from 'next/head'
import fs from 'fs'

import CategoryTemplate from 'components/templates/Category'

const Categories = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Audiophile e-commerce website</title>
      </Head>
      <CategoryTemplate />
    </>
  )
}

export default Categories

export async function getStaticProps({ params }: { params: string }) {
  const data = JSON.parse(fs.readFileSync('../../../data.json', 'utf8'))
  console.log(process.cwd())
  console.log(data)
  return {
    props: {
      data,
    },
  }
}
