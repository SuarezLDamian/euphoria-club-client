import { Box, Center, Flex, Heading, Grid, GridItem, Stack } from '@chakra-ui/react'
import TeamMember from '../team-member/TeamMember'

const TheTeam = () => {
    return (
        <Box style={{background: '#5A189A', padding: '6rem'}}>
            <Center>                
                <Heading as='h2' size='3xl' style={{color: 'white'}}>
                    The Team
                </Heading>
            </Center>
            
            <Center marginTop={'8rem'}>
                <Stack direction={['column', 'row']} spacing={'12rem'}>
                    <TeamMember name='John B' position='Co-Founder & Artist' avatar='/artist-avatar.png'/>
                    <TeamMember name='Damian S' position='Co-Founder & Developer' avatar='/developer-avatar.png'/>
                </Stack>
            </Center>
        </Box>
    )
}

export default TheTeam