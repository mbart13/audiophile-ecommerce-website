import { ParsedUrlQuery } from 'querystring'

interface Params extends ParsedUrlQuery {
  category: string
}

export default Params
