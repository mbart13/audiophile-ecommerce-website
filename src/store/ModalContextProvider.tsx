import { createContext, useEffect, useContext, Context } from 'react'
import { useDisclosure } from '@chakra-ui/react'

type ContextProps = {
  isCartModalOpen: boolean
  onCartModalOpen: () => void
  onCartModalClose: () => void
  isConfirmationModalOpen: boolean
  onConfirmationModalOpen: () => void
  onConfirmationModalClose: () => void
}

const initialState = {
  isCartModalOpen: false,
  onCartModalOpen: () => undefined,
  onCartModalClose: () => undefined,
  isConfirmationModalOpen: false,
  onConfirmationModalOpen: () => undefined,
  onConfirmationModalClose: () => undefined,
}

const ModalContext = createContext<ContextProps>(initialState)

export const useModal = (): ContextProps => {
  return useContext(ModalContext)
}

const ModalContextProvider: React.FC = ({ children }): JSX.Element => {
  const {
    isOpen: isCartModalOpen,
    onOpen: onCartModalOpen,
    onClose: onCartModalClose,
  } = useDisclosure()

  const {
    isOpen: isConfirmationModalOpen,
    onOpen: onConfirmationModalOpen,
    onClose: onConfirmationModalClose,
  } = useDisclosure()

  useEffect(() => {
    isCartModalOpen || isConfirmationModalOpen
      ? (document.body.style.overflowY = 'hidden')
      : (document.body.style.overflowY = 'initial')
  }, [isCartModalOpen, isConfirmationModalOpen])

  return (
    <ModalContext.Provider
      value={{
        isCartModalOpen,
        onCartModalOpen,
        onCartModalClose,
        isConfirmationModalOpen,
        onConfirmationModalOpen,
        onConfirmationModalClose,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export default ModalContextProvider
