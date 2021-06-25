import { IconButton } from '@chakra-ui/react'
import Image from 'next/image'
import { useContext } from 'react'
import { ModalContext } from 'store/ModalContextProvider'

const CartIcon = (): JSX.Element => {
  const { onOpen } = useContext(ModalContext)
  return (
    <IconButton
      aria-label="Show Cart"
      variant="unstyled"
      lineHeight={0}
      isRound={true}
      onClick={onOpen}
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
