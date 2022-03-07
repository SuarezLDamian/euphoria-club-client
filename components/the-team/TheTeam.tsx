import { Box, Center, Flex, Heading, Grid, GridItem } from '@chakra-ui/react'
import TeamMember from '../team-member/TeamMember'

const TheTeam = () => {
    return (
        <Box style={{background: '#7B2CBF', padding: '3rem'}}>
            <Center>                
                <Heading as='h1' size='2xl' style={{color: 'white'}}>
                    The Team
                </Heading>
            </Center>
            
            <Center>
                <Grid templateColumns='repeat(6, 1fr)' gap={6}>
                    <TeamMember/>
                    <TeamMember/>
                </Grid>
            </Center>

        </Box>
    )
}

export default TheTeam