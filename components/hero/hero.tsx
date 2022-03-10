import { Box, Heading, Image, Center, Flex, VStack, Stack, Text } from '@chakra-ui/react'
import MintBox from '../mint-box/mint-box'

const Hero = () => {

    return (
        <Box style={{background: '#5A189A', padding: '6rem'}}>
            <Stack direction={['column', 'row']} spacing={'4rem'}>
                <Center>
                    <MintBox/>
                </Center>
                <VStack alignItems={'center'} spacing={'3rem'}>
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
        </Box>
    )
}

export default Hero