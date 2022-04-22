import { Box, Heading, Image, Center, Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import FaqAccordion from '../components/faq-accordion/FaqAccordion'
import Footer from '../components/footer/footer'
import MintBox from '../components/mint-box/mint-box'
import NavBar from '../components/navbar/navbar'
import Hero from '../components/hero/hero'
import TheClub from '../components/the-club/TheClub'
import TheTeam from '../components/the-team/TheTeam'
import useMounted from '../hooks/usemounted'

const Home: NextPage = () => {
  const mounted = useMounted()

  return (
    mounted &&
    <>
      <Head>
        <title>Euphoria Club | NFT Collection</title>
        <meta name="Euphoria Club" content="Euphoria series inspired NFT collection" />
        <link rel="icon" href="/eth-favicon.ico" />
      </Head>

      <Box minW='40rem'>
        <NavBar/>

        <Hero/>

        <div id="the-club"></div>
        <TheClub/>

        <div id="the-team"></div>
        <TheTeam/>

        <div id="faq"></div>
        <FaqAccordion/>

        <Footer/>
      </Box>
    </>
  )
}

export default Home
