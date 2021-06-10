import '../styles/global.css'
import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'

import theme from '../styles/theme'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
