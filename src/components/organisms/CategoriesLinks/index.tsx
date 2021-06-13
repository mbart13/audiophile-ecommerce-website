import { Stack } from '@chakra-ui/react'

import CategoryLink from 'components/molecules/CategoryLink'
import { links } from 'utils/links'

const CategoriesLinks = (): JSX.Element => {
  return (
    <Stack
      as="ul"
      direction={['column', 'row']}
      spacing={['4rem', '0.625rem', null, '1.875rem']}
      mt={['5.75rem', '9.25rem', '12.5rem']}
    >
      {links.slice(1).map(link => (
        <CategoryLink {...link} key={link.id} />
      ))}
    </Stack>
  )
}

export default CategoriesLinks
