import { Flex, Container } from '@chakra-ui/react'
import Logo from 'components/atoms/Logo/Logo'

const Navbar = (): JSX.Element => {
  return (
    <Flex>
      {/* <MenuIcon /> */}
      <Logo />
      {/* <NavLinks />
      <CartIcon /> */}
    </Flex>
  )
}

export default Navbar
