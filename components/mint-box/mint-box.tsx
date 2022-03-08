import { Box, Image, Button, Text, Center, VStack, StackDivider } from "@chakra-ui/react";
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
  } from '@chakra-ui/react';

interface mintProps {
    mintedQuantity?: number,
    mintCost?: number
}

const MintBox = ({mintedQuantity = 3, mintCost = 0.01 }: mintProps) => {
    return (
        <Box padding={'2rem'} minW='xs' maxW='lg' maxH='33rem' borderWidth='3px' borderRadius='lg' style={{background: '#7B2CBF'}}>
            <VStack spacing={1}>
                <Center>
                    <Image boxSize={'200px'} src='/mint-gif.gif' alt='Sample Euphoria Club' style={{borderRadius: '0.5rem'}}/>
                </Center>
                <VStack spacing={1} padding={'1rem'}>
                    <Text fontSize='lg' style={{color: 'white'}}>{mintedQuantity} / 4420</Text> 
                    <Text fontSize='lg' style={{color: 'white'}}>{mintCost} ETH</Text>
                </VStack>
                <Box >
                    <Text fontSize='md' style={{color: 'white'}}>Enter quantity</Text>
                    <NumberInput defaultValue={1} min={1} max={10}>
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    <Center>
                        <Button size='lg' bg={'#5A189A'} mt='1rem' isFullWidth={true} style={{color: 'white'}}>
                            Mint
                        </Button>
                    </Center>
                </Box>
            </VStack>
        </Box>
    )
}

export default MintBox;