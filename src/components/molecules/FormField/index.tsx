import { Box, Input, FormLabel, FormControl } from '@chakra-ui/react'

const FormField = ({
  label,
  placeholder,
  type = 'text',
}: {
  label: string
  placeholder: string
  type?: string
}): JSX.Element => {
  return (
    <Box>
      <Box
        as="label"
        fontSize="0.75rem"
        fontWeight="bold"
        htmlFor={label}
        display="inline-block"
        mb={2}
      >
        {label}
      </Box>
      <Input
        type={type}
        placeholder={placeholder}
        border="1px solid"
        borderColor="inputBorder"
        id={label}
      />
    </Box>
  )
}

export default FormField
