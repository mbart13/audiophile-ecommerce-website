import { HStack, Box, Heading, Image, Text } from '@chakra-ui/react'
import Link from 'next/link'

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
    <Link href={url}>
      <Box
        as="li"
        bg="gray"
        textAlign="center"
        borderRadius="0.5rem"
        position="relative"
        pt="5.5rem"
        pb="1.375rem"
        flex="1"
        cursor="pointer"
        sx={{
          '&:hover p': {
            color: 'accent',
          },
        }}
      >
        <a>
          <Image
            position="absolute"
            top="0"
            left="50%"
            transform="translate(-50%, -38%)"
            width="8.625rem"
            objectFit="cover"
            src={img}
          />
          <Heading
            as="h2"
            mb="1rem"
            fontSize={['0.9375rem', null, null, '1.125rem']}
            letterSpacing={['0.0669em', null, null, '0.0806em']}
          >
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
        </a>
      </Box>
    </Link>
  )
}

export default CategoryLink
