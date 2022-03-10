import type { AppProps } from 'next/app'
import { getLibrary } from '../config/web3/index'
import { Web3ReactProvider } from '@web3-react/core'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme';
import '@fontsource/lexend/400.css'
import '@fontsource/open-sans/400.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Web3ReactProvider>
  )
}

export default MyApp
