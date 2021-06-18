import Head from 'next/head'
import fs from 'fs'
import path from 'path'

import CategoryTemplate from 'components/templates/Category'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Product } from 'models/Product'
import { ParsedUrlQuery } from 'querystring'

export type CategoryItem = {
  id: number
  slug: string
  name: string
  description: string
  new: boolean
  categoryImage: {
    mobile: string
    tablet: string
    desktop: string
  }
  category: string
}

const Categories = ({
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

export default Categories

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
  console.log(params)
  const filePath = path.join(process.cwd(), 'src', 'data', 'products.json')
  const jsonData = fs.readFileSync(filePath, 'utf8')
  const data: { products: Product[] } = JSON.parse(jsonData)

  const filteredData: CategoryItem[] = data.products
    .filter((product: Product) => product.category === params.category)
    .map(product => {
      return {
        id: product.id,
        slug: product.slug,
        name: product.name,
        description: product.description,
        new: product.new,
        category: product.category,
        categoryImage: product.categoryImage,
      }
    })
    .sort((a, b) => Number(b.new) - Number(a.new))
  console.log(filteredData)

  return {
    props: {
      products: filteredData,
    },
  }
}
