import { Avatar, Text, Box, HStack, VStack } from '@chakra-ui/react'

interface memberProps {
    name?: string,
    position?: string
    avatar?: string
}

const TeamMember = (member: memberProps) => {

    return (
        <Box>
            <HStack>
                <Avatar size='2xl' src={member.avatar}/>
                <VStack>
                    <Text fontSize='2xl' style={{color: 'white'}}>{member.name}</Text>
                    <Text fontSize='lg' style={{color: 'white'}}>{member.position}</Text>
                </VStack>
            </HStack>
        </Box>
    )
}

export default TeamMember