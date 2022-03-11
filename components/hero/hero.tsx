import { ReactNode } from 'react';
import { Box, chakra, Heading, Image, Center, Flex, VStack, Stack, Text, VisuallyHidden, useColorModeValue } from '@chakra-ui/react'
import { FaInstagram, FaTwitter, FaDiscord } from 'react-icons/fa';
import Background from "/public/hero-background.svg"
import MintBox from '../mint-box/mint-box'

const Hero = () => {

    return (
        <Box backgroundImage={'/hero-background.svg'} style={{padding: '6rem'}}>
            <Stack direction={['column', 'row']} spacing={'4rem'}>
                <Center>
                    <MintBox/>
                </Center>
                <VStack spacing={'3rem'}>
                    <Heading as='h1' size='4xl' style={{color: 'white'}}>
                        WELCOME TO EUPHORIA CLUB!
                    </Heading>

                    <Text fontSize='3xl' style={{color: 'white'}}>
                        Euphoria Club is a collection of 4,420 randomly 
                        generated NFTs minted on the Ethereum blockchain, 
                        inspired by the acclaimed Euphoria Series.
                    </Text>
                </VStack>
            </Stack>
            <Center>            
                <Stack direction={'row'} spacing={6}>
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
        </Box>
    )
}

const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };

export default Hero