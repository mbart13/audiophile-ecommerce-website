import {
  Box,
  Stack,
  Heading,
  Text,
  List,
  ListItem,
  SimpleGrid,
} from '@chakra-ui/react'
import { IncludedItem } from 'models/Product'

type ProductFeaturesProps = {
  features: string | undefined
  includedItems: IncludedItem[] | undefined
}

const ProductFeatures: React.FC<ProductFeaturesProps> = ({
  features,
  includedItems,
}): JSX.Element => {
  return (
    <Stack
      mt={{ base: '5.5rem', sm: '7.5rem', lg: '10rem' }}
      spacing={{ base: '5.5rem', lg: '7.5rem' }}
      direction={{ base: 'column', lg: 'row' }}
    >
      <Box flexBasis={{ lg: '55%' }}>
        <Heading fontSize={{ base: '1.5rem', md: '2rem' }}>Features</Heading>
        <Text mt={{ base: '1.5rem' }} whiteSpace="pre-line">
          {features}
        </Text>
      </Box>
      <Stack
        direction={{ base: 'column', sm: 'row', lg: 'column' }}
        spacing={{ base: '1.5rem', sm: '6rem', md: '12rem', lg: '2rem' }}
      >
        <Heading fontSize={{ base: '1.5rem', md: '2rem' }}>In the Box</Heading>
        <List mt={{ base: '1.5rem' }}>
          {includedItems?.map(item => (
            <ListItem key={item.item} fontSize="0.9375rem" mb="0.5rem">
              <SimpleGrid gridTemplateColumns="2rem 1fr">
                <Box as="span" color="accent" fontWeight="bold">
                  {item.quantity}x
                </Box>
                <Box
                  as="span"
                  color="text"
                  textTransform="capitalize"
                  textAlign="left"
                >
                  {item.item}
                </Box>
              </SimpleGrid>
            </ListItem>
          ))}
        </List>
      </Stack>
    </Stack>
  )
}

export default ProductFeatures
