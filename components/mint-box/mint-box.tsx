import { Box, Image, Button, Text, Center, VStack, StackDivider } from "@chakra-ui/react";
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
  } from '@chakra-ui/react';

const MintBox = () => {
    return (
        <Box maxW='md' borderWidth='3px' borderRadius='lg' mt='2rem' style={{background: '#7B2CBF'}}>
            <VStack spacing={1}>
                <Center>
                    <Box padding={'2rem'}>
                        <Image src='/sample-image.png' alt='Sample Euphoria Club' style={{borderRadius: '0.5rem'}}/>
                    </Box>
                </Center>
                <Center>
                    <Text fontSize='lg' >0 / 4420</Text>
                </Center>
                <Center>
                    <Text fontSize='lg' >0.01 ETH</Text>
                </Center>
                <Box padding={'2rem'}>
                    <Text fontSize='md' >Enter quantity</Text>
                    <NumberInput defaultValue={1} min={1} max={10}>
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    <Center>
                        <Button size='lg' bg={'#5A189A'} mt='1rem'>
                            Mint
                        </Button>
                    </Center>
                </Box>
            </VStack>
        </Box>
    )
}

export default MintBox;