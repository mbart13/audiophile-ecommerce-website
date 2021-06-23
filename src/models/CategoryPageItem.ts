export interface CategoryPageItem {
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
