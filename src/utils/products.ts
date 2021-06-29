import fs from 'fs'
import path from 'path'

import { Product } from 'models/Product'

export const readData = (): Product[] => {
  const filePath = path.join(process.cwd(), 'src', 'data', 'products.json')
  const jsonData = fs.readFileSync(filePath, 'utf8')
  return JSON.parse(jsonData).products
}

export const getProductsByCategory = (category: string): Product[] => {
  return readData()
    .filter(product => product.category === category)
    .map(product => {
      return {
        id: product.id,
        slug: product.slug,
        name: product.name,
        shortName: product.shortName,
        price: product.price,
        cartImage: product.cartImage,
        description: product.description,
        new: product.new,
        category: product.category,
        categoryImage: product.categoryImage,
      }
    })
    .sort((a, b) => Number(b.new) - Number(a.new))
}

export const getProductBySlug = (
  slug: string | string[] | undefined
): Product | undefined => {
  return readData().find(product => product.slug === slug)
}

export const getCategories = (): string[] => {
  const categories = readData().map(product => product.category)
  return Array.from(new Set(categories))
}

export const getProductsPaths = (): { category: string; slug: string }[] => {
  return readData().map(product => ({
    category: product.category,
    slug: product.slug,
  }))
}
