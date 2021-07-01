import { HStack, Box } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { links } from 'utils/links'

const NavLinks = (): JSX.Element => {
  const { asPath } = useRouter()

  return (
    <Box as="nav" display={{ base: 'none', lg: 'block' }}>
      <HStack as="ul" display="flex" spacing={9} listStyleType="none">
        {links.map(link => (
          <Box
            as="li"
            fontSize="sm"
            fontWeight="bold"
            _hover={{ color: 'accent' }}
            transition="color 0.2s linear"
            letterSpacing="0.125em"
            key={link.id}
            color={asPath === link.url ? 'accent' : 'white'}
            textTransform="uppercase"
          >
            <Link href={link.url}>{link.text}</Link>
          </Box>
        ))}
      </HStack>
    </Box>
  )
}

export default NavLinks
