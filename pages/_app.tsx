import type { AppProps } from 'next/app'
import { getLibrary } from '../config/web3/index'
import { Web3ReactProvider } from '@web3-react/core'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '@fontsource/lexend/300.css'
import '@fontsource/open-sans/400.css'

declare global {
  interface Window { ethereum: any; }
}

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
