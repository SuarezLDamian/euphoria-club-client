import { Box, Center, Flex, Heading, Grid, GridItem, Stack } from '@chakra-ui/react'
import TeamMember from '../team-member/TeamMember'

const TheTeam = () => {
    return (
        <Box style={{background: '#7B2CBF', padding: '3rem'}}>
            <Center>                
                <Heading as='h2' size='2xl' style={{color: 'white'}}>
                    The Team
                </Heading>
            </Center>
            
            <Center margin={'3rem'}>
                <Stack direction={['column', 'row']} spacing={'6rem'}>
                    <TeamMember name='John B' position='Co-Founder and Artist' avatar='/artist-avatar.png'/>
                    <TeamMember name='Damian S' position='Co-Founder and Developer' avatar='/developer-avatar.png'/>
                </Stack>
            </Center>

        </Box>
    )
}

export default TheTeam