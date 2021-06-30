import { forwardRef } from 'react'
import { Box, Input, Text, Flex } from '@chakra-ui/react'

type FormFieldProps = {
  label: string
  placeholder: string
  type?: string
  gridArea?: { [key: string]: string }
  errors: { message: string } | undefined
  [prop: string]: unknown
}

const FormField = forwardRef<HTMLInputElement, FormFieldProps>((props, ref) => {
  const { label, placeholder, type = 'text', gridArea, ...other } = props

  let errorMessage
  if (props.errors) {
    errorMessage = props.errors.message
  }

  return (
    <Box gridArea={gridArea}>
      <Flex justify="space-between">
        <Box
          as="label"
          fontSize="0.75rem"
          fontWeight="bold"
          htmlFor={label}
          display="inline-block"
          mb={2}
          color={props['errors'] ? 'inputError' : 'black'}
        >
          {label}
        </Box>
        {props.errors && (
          <Text aria-live="polite" color="inputError" fontSize="0.75rem" mb={2}>
            {errorMessage}
          </Text>
        )}
      </Flex>
      <Input
        ref={ref}
        {...other}
        type={type}
        placeholder={placeholder}
        border="1px solid"
        borderColor={props['errors'] ? 'inputError' : 'inputBorder'}
        id={label}
      />
    </Box>
  )
})

FormField.displayName = 'FormField'

export default FormField
