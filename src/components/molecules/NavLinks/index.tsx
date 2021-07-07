import { HStack, Box } from '@chakra-ui/react'
import React from 'react'
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
            <NavLink href={link.url} active={asPath === link.url}>
              <a>{link.text}</a>
            </NavLink>
          </Box>
        ))}
      </HStack>
    </Box>
  )
}

const NavLink: React.FC<{ href: string; active: boolean }> = ({
  href,
  active,
  children,
}): JSX.Element => {
  const child = React.Children.only(children)

  return (
    <Link href={href} passHref>
      {React.cloneElement(child as React.ReactElement, {
        'aria-current': active ? 'page' : null,
      })}
    </Link>
  )
}

export default NavLinks
