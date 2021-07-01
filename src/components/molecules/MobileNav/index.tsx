import { Box, Stack } from '@chakra-ui/react'
import { useSelector } from 'react-redux'

import { isNavOpen } from 'store/UISlice'
import CategoryLink from 'components/molecules/CategoryLink'
import { links } from 'utils/links'

const MobileNav = (): JSX.Element => {
  const navOpen = useSelector(isNavOpen)
  return (
    <Box
      as="nav"
      position="absolute"
      width="100%"
      top="5.625rem"
      bg="white"
      px="1.5rem"
      pb="2rem"
      visibility={navOpen ? 'visible' : 'hidden'}
      opacity={navOpen ? '1' : '0'}
      transform={navOpen ? 'translate(0)' : 'translateY(-100%)'}
      transition="transform .5s ease-in-out, opacity .5s ease-in-out"
      zIndex="modal"
      display={{ base: 'block', lg: 'none' }}
      borderBottomRadius="0.5rem"
    >
      <Stack
        as="ul"
        direction={{ base: 'column', sm: 'row' }}
        spacing={['4rem', '.6rem']}
        mt={['5.75rem']}
      >
        {links.slice(1).map(link => (
          <CategoryLink {...link} key={link.id} />
        ))}
      </Stack>
    </Box>
  )
}

export default MobileNav
