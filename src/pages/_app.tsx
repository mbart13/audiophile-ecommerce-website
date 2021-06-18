import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'

import theme from 'styles/theme'
import Header from 'components/organisms/Header'
import Footer from 'components/organisms/Footer'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  )
}
