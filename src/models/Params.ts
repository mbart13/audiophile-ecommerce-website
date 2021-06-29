import { ParsedUrlQuery } from 'querystring'

interface Params extends ParsedUrlQuery {
  category: string
  slug: string
}

export default Params
