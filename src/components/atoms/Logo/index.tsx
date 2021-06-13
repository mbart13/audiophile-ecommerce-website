import Image from 'next/image'
import Link from 'next/link'
import { Box } from '@chakra-ui/react'

// const StyledLink = styled.a`
//   @media (min-width: ${breakpoints.tablet}) {
//     margin-right: auto;
//   }

//   @media (min-width: ${breakpoints.desktop}) {
//     margin-right: 0;
//   }
// `

const Logo = (): JSX.Element => {
  return (
    <Box
      mr={[null, 'auto', null, 0]}
      lineHeight="0"
      ml={[0, '2.625rem', null, 0]}
    >
      <Link href="/">
        <a>
          <Image
            src="/images/shared/desktop/logo.svg"
            height={25}
            width={144}
            alt="Audiophile logo - Home"
          />
        </a>
      </Link>
    </Box>
  )
}

export default Logo
