import { Box, FormControl } from '@chakra-ui/react'

const FieldSet: React.FC = ({ children }): JSX.Element => {
  return (
    <Box
      as="fieldset"
      mb="2rem"
      display="grid"
      gridTemplateColumns={{ base: '1fr', sm: '1fr 1fr' }}
      gridGap={{ base: '1.5rem', sm: '1rem' }}
    >
      {children}
    </Box>
  )
}

export default FieldSet
