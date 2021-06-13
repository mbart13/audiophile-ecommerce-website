import React from 'react'
import { useRouter } from 'next/router'

const Categories = (): JSX.Element => {
  const { query } = useRouter()

  return (
    <div>
      <h1>{query.category}</h1>
    </div>
  )
}

export default Categories
