import { Stack, Box, Heading, Image, Text, Flex } from '@chakra-ui/react'

import CategoryLink from 'components/molecules/CategoryLink'
import { links } from 'utils/links'

const CategoriesLinks = (): JSX.Element => {
  return (
    <Stack
      as="section"
      direction={['column', 'row']}
      spacing={['4rem', '0.625rem']}
      mt={['6rem', '10rem']}
    >
      {links.slice(1).map(link => (
        <CategoryLink {...link} key={link.id} />
      ))}
    </Stack>
  )
}

export default CategoriesLinks
