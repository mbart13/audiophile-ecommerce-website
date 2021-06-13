import { IconButton } from '@chakra-ui/react'
import Image from 'next/image'

const CartIcon = (): JSX.Element => {
  return (
    <IconButton
      aria-label="Show Cart"
      variant="unstyled"
      lineHeight={0}
      isRound={true}
    >
      <Image
        src="/images/shared/desktop/icon-cart.svg"
        width={23}
        height={20}
      ></Image>
    </IconButton>
  )
}

export default CartIcon
