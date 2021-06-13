import { HStack, Box, Heading, Image, Text } from '@chakra-ui/react'

const CategoryLink = ({
  text,
  img,
  url,
}: {
  text: string
  img?: string
  url: string
}): JSX.Element => {
  return (
    <Box
      bg="gray"
      textAlign="center"
      borderRadius="0.5rem"
      position="relative"
      pt="5.5rem"
      pb="1.375rem"
      flex="1"
    >
      <Image
        position="absolute"
        top="0"
        left="50%"
        transform="translate(-50%, -38%)"
        width="8.625rem"
        objectFit="cover"
        src={img}
      />
      <Heading as="h2" mb="1rem" fontSize="0.9375rem">
        {text}
      </Heading>
      <HStack
        spacing="0.8325rem"
        justifyContent="center"
        _hover={{
          color: 'accent',
          cursor: 'pointer',
        }}
      >
        <Text
          color="text"
          fontWeight="bold"
          fontSize="0.8125rem"
          textTransform="uppercase"
        >
          Shop
        </Text>
        <Image src="/images/shared/desktop/icon-arrow-right.svg" />
      </HStack>
    </Box>
  )
}

export default CategoryLink
