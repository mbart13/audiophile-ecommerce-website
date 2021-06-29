import {
  Modal,
  ModalOverlay,
  ModalContent,
  Heading,
  Text,
  HStack,
  Button,
  List,
  useToast,
} from '@chakra-ui/react'
import { useModal } from 'store/ModalContextProvider'

const ConfirmationModal = (): JSX.Element => {
  const { isConfirmationModalOpen, onConfirmationModalClose } = useModal()
  return (
    <Modal
      isOpen={isConfirmationModalOpen}
      onClose={onConfirmationModalClose}
      preserveScrollBarGap={false}
    >
      <ModalOverlay px="1.5rem" />
      <ModalContent
        p="2rem"
        maxWidth="23.5625rem"
        mt={{ base: '7rem', sm: '8rem' }}
        mx={{ base: '1.5rem' }}
        position={{ base: 'relative', md: 'absolute' }}
        right={{ md: '10.3125rem' }}
      >
        <Text>Test</Text>
      </ModalContent>
    </Modal>
  )
}

export default ConfirmationModal
