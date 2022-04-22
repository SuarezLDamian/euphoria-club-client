import { Box, Center, Heading, Stack, Text, Divider } from '@chakra-ui/react'
import Carousel from '../carousel/Carousel'
import topwave from '/public/the-club-top-wave.svg'

const TheClub = () => {
    
    return (
        <Box style={{background: '#6F1EBD', padding: '6rem'}}>
            <Center>                
                <Heading as='h2' size='3xl' style={{color: 'white'}}>
                    The Club
                </Heading>
            </Center>
            <Center>
                <Stack spacing={'2rem'} marginTop='2rem' maxW={'6xl'}>
                    <Center>
                        <Carousel/>
                    </Center>
                    <Text fontSize='2xl' align='center' style={{color: 'white'}}>Don&apos;t miss the opportunity to become part of the community and to mint a new member of the Club!, or if you are one of those lucky ones, to mint an official Cast member with your official traits!</Text>
                    <Center height='2rem'>
                        <Divider borderWidth={'3px'} borderRadius={'xl'} orientation='vertical' />
                    </Center>
                    <Text fontSize='2xl' align='center' style={{color: 'white'}}>At Euphoria Club we are in favor of freedom, we want everyone to feel comfortable, it doesn&apos;t matter what&apos;s on the outside, but what&apos;s inside!</Text>
                    <Center height='2rem'>
                        <Divider borderWidth={'3px'} borderRadius={'xl'} orientation='vertical' />
                    </Center>
                    <Text fontSize='2xl' align='center' style={{color: 'white'}}>Be part of the Club and interact with your fellow Euphoric members!</Text>
                    <Center height='2rem'>
                        <Divider borderWidth={'3px'} borderRadius={'xl'} orientation='vertical' />
                    </Center>
                    <Text fontSize='2xl' align='center' style={{color: 'white'}}>Once the 3rd Season of the Series has started, all Euphoria Club NFT holders will be able to access to a free miniature of the N°2 collection.</Text>
                </Stack>
            </Center>            
        </Box>
    )
}

export default TheClub