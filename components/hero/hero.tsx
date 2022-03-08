import { Box, Heading, Image, Center, Flex, VStack, Stack } from '@chakra-ui/react'
import MintBox from '../mint-box/mint-box'

const Hero = () => {

    return (
        <Box style={{background: '#5A189A', padding: '3rem'}}>
            <Stack direction={['column', 'row']} spacing={'4rem'}>
                <Center>
                    <MintBox/>
                </Center>
                <VStack alignItems={'center'}>
                    <Heading as='h1' size='2xl' style={{color: 'white'}}>
                        Welcome to Euphoria Club!
                    </Heading>

                    <Heading as='h2' size='lg' style={{color: 'white'}}>
                        Euphoria Club is a collection of 4,420 randomly 
                        generated NFTs minted on the Ethereum blockchain, 
                        inspired by the acclaimed Euphoria Series.
                    </Heading>
                </VStack>
            </Stack>
        </Box>
    )
}

export default Hero