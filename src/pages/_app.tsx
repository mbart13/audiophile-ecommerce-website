import { Global } from '@emotion/react'
import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Global styles={GlobalStyles} />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
