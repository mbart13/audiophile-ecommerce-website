import Image from 'next/image'
import Link from 'next/link'

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
    <Link href="/">
      <a>
        <Image
          src="/images/shared/desktop/logo.svg"
          height={25}
          width={144}
          alt="Audiophile logo"
        />
      </a>
    </Link>
  )
}

export default Logo
