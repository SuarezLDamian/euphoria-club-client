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

// interface mintProps {
//     mintedQuantity?: number,
//     mintCost?: number
// }

const MintBox = (/*{mintedQuantity = 0, mintCost = 0.01 }: mintProps*/) => {

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

    window.ethereum = window.ethereum;

    const setInfuraConnection = useCallback( async () => {
        // if (stateContract === null) {
            console.log("Conexión con Infura")
            const provider = new ethers.providers.InfuraProvider("rinkeby");
            setStateProvider(provider);
            // console.log("Infura provider:", provider)
            let contract = new ethers.Contract(contractAddress, abi, provider);
            setStateContract(contract);
            // console.log("Contrato de infura:", contract)
        // }
    }, [])

    const setMetamaskConnection = useCallback( async () => {
        console.log("Conexión con MetaMask")
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        // console.log("Metamask provider:", provider)
        setStateProvider(provider);
        const signer = provider.getSigner()
        setStateSigner(signer);
        let contract = new ethers.Contract(contractAddress, abi, signer);
        setStateContract(contract);
        // console.log("Contrato de Metamask", contract)
    }, [])

    const updateEthers = useCallback( async () => {
        if(typeof(window) != 'undefined' && window.ethereum === undefined) { //si no está MetaMask instalado
            toast({
                title: 'Please Install MetaMask.',
                description: "You need a wallet to access web 3.0",
                status: 'error',
                duration: 30000,
                isClosable: true,
            })
        }
        else {
            console.log("Se actualiza ethers. Cuenta conectada:", active, ", window.ethereum es:", typeof(window.ethereum))
            if(typeof(window) != 'undefined' && window.ethereum != {}) {
                try {
                    console.log("Se setea conexión")
                    if (!active) {
                        setInfuraConnection()
                    }
                    else {
                        setMetamaskConnection()
                    }
                    // const provider = new ethers.providers.Web3Provider(window.ethereum)
                    // setStateProvider(provider);
                    // const signer = provider.getSigner()
                    // setStateSigner(signer);
                    // let contract = new ethers.Contract(contractAddress, abi, signer);
                    // setStateContract(contract);
                    // const mintedTokens = await contract.totalSupply();
                    // setMinted(mintedTokens.toNumber());
                    // console.log("Tokens minteados:", mintedTokens.toNumber())
                }
                catch {
                    toast({
                        title: 'Please Install MetaMask.',
                        description: "You need a wallet to access web 3.0",
                        status: 'error',
                        duration: 30000,
                        isClosable: true,
                    })
                }
            }
        }
    }, [toast, active, setInfuraConnection, setMetamaskConnection])

    const getValues = useCallback( async () => {
        // console.log("Se ejecuta getValues. Cuenta conectada:", active, ", Window es", typeof(window))

        // if (active) {
            // console.log("Entra en getValues")
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
        // }   
    }, [stateContract, stateProvider, account, toast])

    // If window.ethereum is not defined, then the user can't get contract values
    useEffect(() => {
        if ( typeof(window) === "undefined" || stateContract === null) {
            updateEthers()
        }
        else {
            getValues()
        }
    }, [stateContract, updateEthers, getValues, active])

    return (
        <Box padding={'2rem'} minW='xs' maxW='lg' maxH='33rem' borderWidth='3px' borderRadius='lg' style={{background: '#48137B'}}>
            <VStack spacing={1}>
                <Center>
                    <Image boxSize={'200px'} src='/mint-gif.gif' alt='Sample Euphoria Club' style={{borderRadius: '1rem'}}/>
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