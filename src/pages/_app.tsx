import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import store from 'store'
import theme from 'styles/theme'
import Header from 'components/organisms/Header'
import Footer from 'components/organisms/Footer'
import ModalContextProvider from 'store/ModalContextProvider'
import CartModal from 'components/organisms/CartModal'
import ConfirmationModal from 'components/organisms/ConfirmationModal'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Provider store={store}>
        <ModalContextProvider>
          <Header />
          <Component {...pageProps} />
          <Footer />
          <CartModal />
          <ConfirmationModal />
        </ModalContextProvider>
      </Provider>
    </ChakraProvider>
  )
}
