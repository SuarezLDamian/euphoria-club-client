import { Box, Heading, Image, Center } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/footer/footer'
import MintBox from '../components/mint-box/mint-box'
import NavBar from '../components/navbar/navbar'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Euphoria Club NFT</title>
        <meta name="Euphoria Club" content="Euphoria series inspired NFT collection" />
        <link rel="icon" href="/eth-favicon.ico" />
      </Head>
      <NavBar/>

      <Center>
        <Heading as='h1' size='2xl' colorScheme={'euphoria.100'}>
          Welcome to Euphoria Club!
        </Heading>
      </Center>
      <Center>
        <MintBox/>
      </Center>

      <Footer/>
    </>
  )
}

export default Home
