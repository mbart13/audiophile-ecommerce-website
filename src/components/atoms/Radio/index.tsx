import { Box, Center, useRadio, UseRadioProps } from '@chakra-ui/react'

const Radio: React.FC<UseRadioProps> = (props): JSX.Element => {
  const { getInputProps, getCheckboxProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <Box
      as="label"
      border="1px solid"
      borderColor="inputBorder"
      py="1rem"
      borderRadius="0.5rem"
      fontWeight="bold"
      fontSize="0.875rem"
      display="block"
      pl="3.25rem"
      position="relative"
      mb="1rem"
      cursor="pointer"
      sx={{
        'input:checked + div::after': {
          transform: 'scale(1)',
        },
        '&:focus-within': {
          borderColor: 'accent',
        },
      }}
    >
      <input {...input} />
      <Center
        {...checkbox}
        width="20px"
        height="20px"
        border="1px solid"
        borderColor="inputBorder"
        borderRadius="50%"
        position="absolute"
        left="1rem"
        _after={{
          content: "''",
          position: 'absolute',
          bg: 'accent',
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          transform: 'scale(0)',
          transition: 'transform 0.3s linear',
        }}
      ></Center>
      {props.children}
    </Box>
  )
}

export default Radio
