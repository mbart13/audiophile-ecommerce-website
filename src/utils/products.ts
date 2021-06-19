import fs from 'fs'
import path from 'path'

import { Product } from 'models/Product'
import { CategoryItem } from 'pages/[category]'

export const readData = (): Product[] => {
  const filePath = path.join(process.cwd(), 'src', 'data', 'products.json')
  const jsonData = fs.readFileSync(filePath, 'utf8')
  return JSON.parse(jsonData).products
}

export const getProductsByCategory = (category: string): CategoryItem[] => {
  const products = readData()

  return products
    .filter(product => product.category === category)
    .map(
      ({
        id,
        slug,
        name,
        description,
        new: isNew,
        category,
        categoryImage,
      }) => {
        return {
          id,
          slug,
          name,
          description,
          isNew,
          category,
          categoryImage,
        }
      }
    )
    .sort((a, b) => Number(b.isNew) - Number(a.isNew))
}
