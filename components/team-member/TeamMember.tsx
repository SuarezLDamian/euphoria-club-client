import { Avatar, position, VStack } from '@chakra-ui/react'

interface memberProps {
    avatar?: HTMLImageElement,
    name?: string,
    position?: string
}

const TeamMember = (member: memberProps) => {

    return (
        <>
            <Avatar />
            <VStack>
                <h1>Name</h1>
                <h2>Position</h2>
            </VStack>
        </>
    )
}

export default TeamMember