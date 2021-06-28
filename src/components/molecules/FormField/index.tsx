import { Box, Input } from '@chakra-ui/react'

type FormFieldProps = {
  label: string
  placeholder: string
  type?: string
  [prop: string]: unknown
}

const FormField: React.FC<FormFieldProps> = (props): JSX.Element => {
  const { label, placeholder, type = 'text', ...other } = props
  return (
    <Box {...other}>
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
