import {
  Container,
  Box,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  SimpleGrid,
  Text,
  useRadioGroup,
  Image,
  HStack,
  VStack,
  Stack,
} from '@chakra-ui/react'
import { useState } from 'react'
import GoBackLink from 'components/atoms/GoBackLink'
import FormLegend from 'components/atoms/FormLegend'
import FormField from 'components/molecules/FormField'
import FieldSet from 'components/organisms/FieldSet'
import Radio from 'components/atoms/Radio'
const CheckoutPage = (): JSX.Element => {
  const [checkedOption, setCheckedOption] = useState('e-Money')
  const options = ['e-Money', 'Cash on Delivery']

  const handleChange = (value: string) => {
    setCheckedOption(value)
  }
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'Payment Details',
    defaultValue: 'e-Money',
    onChange: handleChange,
  })

  const group = getRootProps()

  return (
    <Container maxW="container.lg" px={6} as="main">
      <GoBackLink />
      <Box
        as="form"
        bg="white"
        borderRadius="0.5rem"
        px={{ base: '1.5rem', sm: '1.75rem', lg: '3rem' }}
        pt={{ base: '24px', sm: '1.875rem', lg: '3.625rem' }}
        pb={{ base: '2rem', lg: '3rem' }}
        mt={{ base: '1.5rem' }}
        // maxWidth="43.0625rem"
      >
        <Heading as="h1" fontSize={{ base: '1.75rem' }} mb={{ base: '2rem' }}>
          Checkout
        </Heading>
        <Box as="fieldset" mb="2rem">
          <FormLegend>Billing Details</FormLegend>
          <SimpleGrid
            gridTemplateColumns={{ base: '1fr', sm: '1fr 1fr' }}
            gridGap={{ base: '1rem', sm: '1rem' }}
          >
            <FormField label="Name" placeholder="Alexei Ward" />
            <FormField
              label="Email Address"
              type="email"
              placeholder="alexei@mail.com"
            />
            <FormField label="Phone Number" placeholder="+1 202-555-0136" />
          </SimpleGrid>
        </Box>
        <Box as="fieldset" mb="2rem">
          <FormLegend>Shipping Info</FormLegend>
          <SimpleGrid
            gridTemplateColumns={{ base: '1fr', sm: '1fr 1fr' }}
            gridTemplateAreas={{ sm: '"a a" "b c" "d ."' }}
            gridGap={{ base: '1em', sm: '1rem' }}
          >
            <Box gridArea={{ sm: 'a' }}>
              <FormField
                label="Your Address"
                placeholder="1137 Williams Avenue"
              />
            </Box>

            <Box gridArea={{ sm: 'b' }}>
              <FormField label="ZIP Code" type="email" placeholder="10001" />
            </Box>

            <Box gridArea={{ sm: 'c' }}>
              <FormField label="City" placeholder="New York" />
            </Box>
            <Box gridArea={{ sm: 'd' }}>
              <FormField label="Country" placeholder="United States" />
            </Box>
          </SimpleGrid>
        </Box>
        <Box
          as="fieldset"
          mb={{
            base: '2rem',
            sm: '0',
          }}
        >
          <FormLegend>Payment Details</FormLegend>
          <SimpleGrid
            gridTemplateColumns={{ base: '1fr', sm: '1fr 1fr' }}
            gridGap={{ base: '1rem' }}
          >
            <Text color="black" fontWeight="bold" fontSize="0.75rem" mb={2}>
              Payment Method
            </Text>
            <Box {...group}>
              {options.map(value => {
                const radio = getRadioProps({ value })
                return (
                  <Radio key={value} {...radio}>
                    {value}
                  </Radio>
                )
              })}
            </Box>
          </SimpleGrid>

          {checkedOption === options[0] ? (
            <SimpleGrid
              gridTemplateColumns={{ base: '1fr', sm: '1fr 1fr' }}
              gridGap={{ base: '1rem' }}
              mt={{ base: '1rem' }}
            >
              <FormField label="e-Money Number" placeholder="238521993" />
              <FormField label="e-Money PIN" placeholder="6891" />
            </SimpleGrid>
          ) : (
            <HStack align="center" spacing="2rem" mt="1.5rem">
              <Image src="/images/checkout/icon-cash-on-delivery.svg" />
              <Text>
                The ‘Cash on Delivery’ option enables you to pay in cash when
                our delivery courier arrives at your residence. Just make sure
                your address is correct so that your order will not be
                cancelled.
              </Text>
            </HStack>
          )}
        </Box>
      </Box>
    </Container>
  )
}

export default CheckoutPage
