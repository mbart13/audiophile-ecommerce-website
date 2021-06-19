import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next'

import CategoryTemplate from 'components/templates/Category'
import { ParsedUrlQuery } from 'querystring'
import { getProductsByCategory } from 'utils/products'

export type CategoryItem = {
  id: number
  slug: string
  name: string
  description: string
  isNew: boolean
  categoryImage: {
    mobile: string
    tablet: string
    desktop: string
  }
  category: string
}

const CategoryPage = ({
  products,
}: {
  products: CategoryItem[]
}): JSX.Element => {
  return (
    <>
      <Head>
        <title>Audiophile e-commerce website</title>
      </Head>
      <CategoryTemplate products={products} />
    </>
  )
}

export default CategoryPage

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: { category: 'headphones' },
      },
      {
        params: { category: 'speakers' },
      },
      {
        params: { category: 'earphones' },
      },
    ],
    fallback: false,
  }
}

interface Params extends ParsedUrlQuery {
  category: string
}

export const getStaticProps: GetStaticProps = async context => {
  const params = context.params as Params

  const products: CategoryItem[] = getProductsByCategory(params.category)

  return {
    props: {
      products,
    },
  }
}
