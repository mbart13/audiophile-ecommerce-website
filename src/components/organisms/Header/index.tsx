import { Box } from '@chakra-ui/react'

import Navbar from 'components/molecules/Navbar'
import MobileNav from 'components/molecules/MobileNav'
import SkipLink from 'components/atoms/SkipLink'

const Header = (): JSX.Element => {
  return (
    <Box
      as="header"
      bg="black"
      py={8}
      borderBottom={['1px', 'unset']}
      borderColor="divider"
    >
      <SkipLink />
      <Navbar />
      <MobileNav />
    </Box>
  )
}

export default Header
