import { ReactNode } from 'react';
import { Box, Heading, Center, VStack, Stack, Text, Container } from '@chakra-ui/react'
import { FaInstagram, FaTwitter, FaDiscord } from 'react-icons/fa';
import { motion } from 'framer-motion';
import MintBox from '../mint-box/mint-box'
import SocialButton from '../social-button/SocialButton'
import Background from "/public/hero-background.svg"
import Image from 'next/image';

const Hero = () => {

    return (
        <>
        {/* <Image src={'/hero-backgroundd.svg'} alt='hero-background' layout='fill'></Image> */}
            <Box backgroundImage={'/hero-background.svg'} style={{ padding: '6rem'}}>
                <Container maxW={'6xl'}>
                    <Stack direction={['column', 'row']} spacing={'4rem'}>
                        <Center>
                            <MintBox/>
                        </Center>
                        <VStack spacing={'3rem'}>
                            <Heading as={motion.h1} size='4xl' style={{color: 'white'}}
                            animate={{
                                y: [200, 0],
                            }}>
                                WELCOME TO EUPHORIA CLUB!
                            </Heading>

                            <Text as={motion.h2} fontSize='3xl' style={{color: 'white'}}
                            animate={{
                                y: [200, 0],
                            }}>
                                Euphoria Club is a collection of 4,420 randomly 
                                generated NFTs minted on the Ethereum blockchain, 
                                inspired by the acclaimed Euphoria Series.
                            </Text>
                        </VStack>
                    </Stack>
                    <Center>            
                        <Stack marginTop={'4rem'} direction={'row'} spacing={6}>
                            <SocialButton label={'Twitter'} href={'https://twitter.com/euphorianftclub'}>
                                <FaTwitter style={{color: 'white'}}/>
                            </SocialButton>
                            <SocialButton label={'Discord'} href={'https://discord.gg/pEmvhJ5e8H'}>
                                <FaDiscord style={{color: 'white'}}/>
                            </SocialButton>
                            <SocialButton label={'Instagram'} href={'https://www.instagram.com/euphoriaclubnfts/'}>
                                <FaInstagram style={{color: 'white'}}/>
                            </SocialButton>
                        </Stack>
                    </Center>
                </Container>
            </Box>
        </>
    )
}

export default Hero