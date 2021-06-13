import { IconButton } from '@chakra-ui/react'
import Image from 'next/image'
import { useState } from 'react'

const MenuIcon = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <IconButton
      aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
      variant="unstyled"
      isRound={true}
      lineHeight={0}
      onClick={() => setIsMenuOpen(state => !state)}
      display={['block', null, null, 'none']}
      icon={
        isMenuOpen ? (
          <Image
            src="/images/shared/tablet/icon-close-menu.svg"
            width={16}
            height={15}
          ></Image>
        ) : (
          <Image
            src="/images/shared/tablet/icon-hamburger.svg"
            width={16}
            height={15}
          ></Image>
        )
      }
    ></IconButton>
  )
}

export default MenuIcon
