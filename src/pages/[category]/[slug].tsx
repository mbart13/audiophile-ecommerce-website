import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'

import { getProductsPaths, getProductBySlug } from 'utils/products'
import Params from 'models/Params'
import { Product } from 'models/Product'
import ProductPageTemplate from 'components/templates/ProductPage'

const ProductPage: React.FC<{ product: Product }> = ({
  product,
}): JSX.Element => {
  return (
    <>
      <Head>
        <title>{`Audiophile shop - ${product.name}`}</title>
      </Head>
      <ProductPageTemplate product={product} />
    </>
  )
}

export default ProductPage

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getProductsPaths().map(path => ({
    params: { category: path.category, slug: path.slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async context => {
  const params = context.params as Params

  const product: Product | undefined = getProductBySlug(params.slug)

  return {
    props: {
      product,
    },
  }
}
