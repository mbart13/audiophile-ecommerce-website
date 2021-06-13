import { HStack, Box } from '@chakra-ui/react'
import Link from 'next/link'

import { links } from 'utils/links'

const NavLinks = (): JSX.Element => {
  return (
    <HStack
      as="ul"
      display={['none', 'none', 'none', 'flex']}
      spacing={9}
      listStyleType="none"
    >
      {links.map(link => (
        <Box
          as="li"
          fontSize="sm"
          fontWeight="bold"
          _hover={{ color: 'accent' }}
          transition="color 0.2s linear"
          letterSpacing="2px"
          key={link.id}
          color="white"
          textTransform="uppercase"
        >
          <Link href={link.url}>{link.text}</Link>
        </Box>
      ))}
    </HStack>
  )
}

export default NavLinks
