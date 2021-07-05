import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  useRadioGroup,
  Image,
  HStack,
  Stack,
} from '@chakra-ui/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import FormLegend from 'components/atoms/FormLegend'
import FormField from 'components/molecules/FormField'
import Radio from 'components/atoms/Radio'
import Summary from 'components/molecules/Summary'
import { useModal } from 'store/ModalContextProvider'

type Inputs = {
  name: string
  emailAddress: string
  phoneNumber: string
  address: string
  ZIPCode: string
  city: string
  country: string
  eMoneyNumber: number
  eMoneyPin: number
}

const CheckoutForm = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ mode: 'onBlur' })
  const { onCheckoutModalOpen } = useModal()
  const options = ['e-Money', 'Cash on Delivery']
  const [checkedOption, setCheckedOption] = useState(options[0])
  const [isDisabled, setIsDisabled] = useState(false)

  const handleChange = (value: string) => {
    setCheckedOption(value)
  }

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'Payment Details',
    defaultValue: 'e-Money',
    onChange: handleChange,
  })

  const group = getRootProps()

  const mySubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (isDisabled) return
    handleSubmit(() => {
      onCheckoutModalOpen()
    })(e)
  }

  return (
    <Stack
      as="form"
      noValidate
      onSubmit={mySubmit}
      direction={{ base: 'column', lg: 'row' }}
      alignItems={{ lg: 'start' }}
      spacing={{ base: '2rem' }}
      mt={{ base: '1.5rem' }}
    >
      <Box
        bg="white"
        borderRadius="0.5rem"
        px={{ base: '1.5rem', sm: '1.75rem', lg: '3rem' }}
        pt={{ base: '1.5rem', sm: '1.875rem', lg: '3.625rem' }}
        pb={{ base: '2rem', lg: '3rem' }}
        maxWidth={{ lg: '45.625rem' }}
        flex={{ lg: '1 1 65%' }}
      >
        <Heading as="h1" fontSize={{ base: '1.75rem' }} mb={{ base: '2rem' }}>
          Checkout
        </Heading>
        <Box as="fieldset" mb="2rem">
          <FormLegend>Billing Details</FormLegend>
          <SimpleGrid
            gridTemplateColumns={{ base: '1fr', sm: '1fr 1fr' }}
            gridGap={{ base: '1rem' }}
          >
            <FormField
              {...register('name', {
                required: 'Field cannot be empty',
                pattern: {
                  value: /^[^<>%$#^*]*$/,
                  message: 'Wrong format',
                },
              })}
              aria-invalid={errors.name ? 'true' : 'false'}
              errors={errors.name}
              label="Name"
              placeholder="Alexei Ward"
            />
            <FormField
              {...register('emailAddress', {
                required: 'Field cannot be empty',
                pattern: {
                  value: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/,
                  message: 'Wrong format',
                },
              })}
              aria-invalid={errors.emailAddress ? 'true' : 'false'}
              errors={errors.emailAddress}
              label="Email Address"
              type="email"
              placeholder="alexei@mail.com"
            />
            <FormField
              {...register('phoneNumber', {
                required: 'Field cannot be empty',
              })}
              aria-invalid={errors.phoneNumber ? 'true' : 'false'}
              errors={errors.phoneNumber}
              label="Phone Number"
              placeholder="+1 202-555-0136"
            />
          </SimpleGrid>
        </Box>
        <Box as="fieldset" mb="2rem">
          <FormLegend>Shipping Info</FormLegend>
          <SimpleGrid
            gridTemplateColumns={{ base: '1fr', sm: '1fr 1fr' }}
            gridTemplateAreas={{ sm: '"a a" "b c" "d ."' }}
            gridGap={{ base: '1em', sm: '1rem' }}
          >
            <FormField
              {...register('address', {
                required: 'Field cannot be empty',
              })}
              aria-invalid={errors.address ? 'true' : 'false'}
              errors={errors.address}
              gridArea={{ sm: 'a' }}
              label="Your Address"
              placeholder="1137 Williams Avenue"
            />
            <FormField
              {...register('ZIPCode', {
                required: 'Field cannot be empty',
                pattern: {
                  value: /^[0-9]{5}(?:-[0-9]{4})?$/,
                  message: 'Wrong format',
                },
              })}
              aria-invalid={errors.ZIPCode ? 'true' : 'false'}
              errors={errors.ZIPCode}
              label="ZIP Code"
              type="email"
              placeholder="10001"
              gridArea={{ sm: 'b' }}
            />
            <FormField
              {...register('city', {
                required: 'Field cannot be empty',
              })}
              aria-invalid={errors.city ? 'true' : 'false'}
              errors={errors.city}
              label="City"
              placeholder="New York"
              gridArea={{ sm: 'c' }}
            />
            <FormField
              {...register('country', {
                required: 'Field cannot be empty',
              })}
              aria-invalid={errors.country ? 'true' : 'false'}
              errors={errors.country}
              label="Country"
              placeholder="United States"
              gridArea={{ sm: 'd' }}
            />
          </SimpleGrid>
        </Box>
        <Box as="fieldset">
          <FormLegend>Payment Details</FormLegend>
          <SimpleGrid
            gridTemplateColumns={{ base: '1fr', sm: '1fr 1fr' }}
            gridGap={{ sm: '1rem' }}
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
              <FormField
                {...register('eMoneyNumber', {
                  required: 'Field cannot be empty',
                  pattern: {
                    value: /^[0-9]{9}$/,
                    message: 'Wrong format',
                  },
                })}
                aria-invalid={errors.eMoneyNumber ? 'true' : 'false'}
                errors={errors.eMoneyNumber}
                label="e-Money Number"
                placeholder="238521993"
                type="number"
              />
              <FormField
                {...register('eMoneyPin', {
                  required: 'Field cannot be empty',
                  pattern: {
                    value: /^[0-9]{4}$/,
                    message: 'Wrong format',
                  },
                })}
                aria-invalid={errors.eMoneyPin ? 'true' : 'false'}
                errors={errors.eMoneyPin}
                label="e-Money PIN"
                placeholder="6891"
                type="number"
              />
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
      <Summary isDisabled={isDisabled} setIsDisabled={setIsDisabled} />
    </Stack>
  )
}

export default CheckoutForm
