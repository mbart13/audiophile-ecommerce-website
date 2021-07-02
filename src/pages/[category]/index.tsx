import Head from 'next/head'
import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps } from 'next'

import CategoryTemplate from 'components/templates/CategoryPage'
import { getProductsByCategory, getCategories } from 'utils/products'
import Params from 'models/Params'
import { Product } from 'models/Product'

const CategoryPage = ({ products }: { products: Product[] }): JSX.Element => {
  const {
    query: { category },
  } = useRouter()
  return (
    <>
      <Head>
        <title>{`Audiophile shop - ${category}`}</title>
      </Head>
      <CategoryTemplate products={products} />
    </>
  )
}

export default CategoryPage

export const getStaticPaths: GetStaticPaths = async () => {
  const categories: string[] = getCategories()
  const paths = categories.map(category => ({ params: { category } }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async context => {
  const params = context.params as Params

  const products: Product[] = getProductsByCategory(params.category)

  return {
    props: {
      products,
    },
  }
}
