import React from 'react'
import { useDisclosure } from '@chakra-ui/react'

type ContextProps = {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

const initialState = {
  isOpen: false,
  onOpen: () => undefined,
  onClose: () => undefined,
}

export const ModalContext = React.createContext<ContextProps>(initialState)

const ModalContextProvider: React.FC = ({ children }): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <ModalContext.Provider value={{ isOpen, onOpen, onClose }}>
      {children}
    </ModalContext.Provider>
  )
}

export default ModalContextProvider
