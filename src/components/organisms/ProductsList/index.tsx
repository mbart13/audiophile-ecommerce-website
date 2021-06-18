import { Box, Container, Heading, Text, Button, VStack } from '@chakra-ui/react'

import ProductItem from 'components/molecules/ProductItem'

const dummyData = [
  {
    slug: 'xx99-mark-two-headphones',
    name: 'XX99 Mark II Headphones',
    image: {
      mobile: '/images/category-headphones/mobile/image-xx99-mark-two.jpg',
      tablet: '/images/category-headphones/tablet/image-xx99-mark-two.jpg',
      desktop: '/images/category-headphones/desktop/image-xx99-mark-two.jpg',
    },
    category: 'headphones',
    new: true,
    description:
      'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
  },
  {
    slug: 'xx99-mark-one-headphones',
    name: 'XX99 Mark I Headphones',
    image: {
      mobile: '/images/category-headphones/mobile/image-xx99-mark-one.jpg',
      tablet: '/images/category-headphones/tablet/image-xx99-mark-one.jpg',
      desktop: '/images/category-headphones/desktop/image-xx99-mark-one.jpg',
    },
    category: 'headphones',
    new: false,
    description:
      'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
  },
  {
    slug: 'xx59-headphones',
    name: 'XX59 Headphones',
    image: {
      mobile: '/images/category-headphones/mobile/image-xx59.jpg',
      tablet: '/images/category-headphones/tablet/image-xx59.jpg',
      desktop: '/images/category-headphones/desktop/image-xx59.jpg',
    },
    category: 'headphones',
    new: false,
    description:
      'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
  },
]

const ProductsList = (): JSX.Element => {
  return (
    <VStack
      mt={{ base: '64px' }}
      spacing={{ base: '7.5rem' }}
      mb={{ base: '7.5rem' }}
    >
      {dummyData.map(product => (
        <ProductItem key={product.name} {...product} />
      ))}
    </VStack>
  )
}

export default ProductsList
