import { useState, useEffect, useCallback } from 'react';
import { Box, Image, Button, Text, Center, VStack, StackDivider, useToast } from "@chakra-ui/react";
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
const { abi } = require("../../contracts/EuphoriaClub.json");

interface mintProps {
    mintedQuantity?: number,
    mintCost?: number
}

let window: any;

const MintBox = ({mintedQuantity = 0, mintCost = 0.01 }: mintProps) => {

    const [ disabled, setDisabled ] = useState(true)

    // state de conexión
    const [stateProvider, setStateProvider] = useState(null)
    const [stateSigner, setStateSigner] = useState(null)
    const [stateContract, setStateContract] = useState(null)

    // state de datos
    const [minted, setMinted] = useState(0)
    const [price, setPrice] = useState("0")
    const [quantity, setQuantity] = useState(1)

    const toast = useToast()

    const handleChange = (value: any) => setQuantity(value)

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
        if(window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            setStateProvider(provider);
            const signer = provider.getSigner()
            setStateSigner(signer);
            let contract: any = new ethers.Contract(contractAddress, abi, signer);
            setStateContract(contract);
        }
        else {        
            toast({
                title: 'Please Install MetaMask.',
                description: "Can't connect to web3.",
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
        }
    }, [toast])
    

    const getValues = useCallback( async () => {
        console.log("Se ejecuta getValues")
        try {
            const mintedTokens = await stateContract.totalSupply();
            setMinted(mintedTokens.toNumber());
            console.log("La cantidad minteada es:", mintedTokens.toNumber())
            const priceContract = await stateContract.price();
            setPrice(ethers.utils.formatEther(priceContract));
            console.log("El precio es:", ethers.utils.formatEther(priceContract))
            if (account) {
                const balance = await stateProvider.getBalance(account)
                console.log("El balance de mi cuenta es:", ethers.utils.formatEther(balance))    
            }   
        }
        catch (error) {
            toast({
                title: 'Something went wrong.',
                description: "Check your wallet is connected.",
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
        }
    }, [stateContract, stateProvider, account, toast])


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