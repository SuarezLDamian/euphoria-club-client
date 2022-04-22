import { useState, useEffect, useCallback } from 'react';
import { Box, Image, Button, Text, Center, VStack, StackDivider } from "@chakra-ui/react";
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
  } from '@chakra-ui/react';
import Countdown from 'react-countdown';
import MintButton from '../mint-button/mint-button'
import { useWeb3React } from '@web3-react/core'
import { ethers } from 'ethers'
const { API_KEY, privateKey } = require('../../secrets.json');

interface mintProps {
    mintedQuantity?: number,
    mintCost?: number
}

const MintBox = ({mintedQuantity = 0, mintCost = 0.01 }: mintProps) => {

    const [ disabled, setDisabled ] = useState(true)

    // state de conexión
    const [stateProvider, setStateProvider] = useState(null)
    const [stateSigner, setStateSigner] = useState(null)
    const [stateContract, setStateContract] = useState(null)

    // state de datos
    const [minted, setminted] = useState(0)
    const [price, setPrice] = useState("")
    const [quantity, setQuantity] = useState(1)

    const handleChange = (value: any) => setQuantity(value)

    const { abi } = require("../../contracts/EuphoriaClub.json");
    const contractAddress = "0x2643E245Ab5D174B6e012D10c242FF2B309e746D";
    const network = "rinkeby"

    const {
        activate,
        active,
        deactivate,
        account,
        chainId,
        error
    } = useWeb3React()

    const updateEthers = useCallback( async () => {
        console.log("Se actualiza ethers")
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        setStateSigner(signer);
        let contract: any = new ethers.Contract(contractAddress, abi, signer);
        setStateContract(contract);
      }, [abi])
    

      const getValues = useCallback( async () => {
        console.log("Se ejecuta getValues")
        const mintedTokens = await stateContract.totalSupply();
        setminted(mintedTokens.toNumber());
        console.log("La cantidad minteada es:", mintedTokens.toNumber())
        const priceContract = await stateContract.price();
        setPrice(ethers.utils.formatEther(priceContract));
        console.log("El precio es:", ethers.utils.formatEther(priceContract))        
      }, [stateContract])


      useEffect(() => {
        if (stateContract === null) {
            updateEthers()
        }
        else {
            getValues()
        }
    }, [stateContract, updateEthers, getValues])

    return (
        <Box padding={'2rem'} minW='xs' maxW='lg' maxH='33rem' borderWidth='3px' borderRadius='lg' style={{background: '#48137B'}}>
            <VStack spacing={1}>
                <Center>
                    <Image boxSize={'200px'} src='/mint-gif.gif' alt='Sample Euphoria Club' style={{borderRadius: '0.5rem'}}/>
                </Center>
                <VStack spacing={1} padding={'1rem'}>
                    <Text fontSize='lg' style={{color: 'white'}}>{minted} / 4420</Text> 
                    <Text fontSize='lg' style={{color: 'white'}}>{price} ETH</Text>
                </VStack>
                <Box >
                    <Text fontSize='md' style={{color: 'white'}}>Enter quantity</Text>
                    <NumberInput defaultValue={1} min={1} max={10} bg={'white'} style={{borderRadius: '0.5rem'}} onChange={handleChange}>
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    <Center>
                        <MintButton quantity={quantity}/>
                    </Center>
                </Box>
            </VStack>
        </Box>
    )
}

export default MintBox;