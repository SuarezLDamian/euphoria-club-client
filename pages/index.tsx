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

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Euphoria Club NFT</title>
        <meta name="Euphoria Club" content="Euphoria series inspired NFT collection" />
        <link rel="icon" href="/eth-favicon.ico" />
      </Head>

      <NavBar/>

      <Hero/>

      <TheClub/>

      <TheTeam/>

      <FaqAccordion/>

      <Footer/>
    </>
  )
}

export default Home
