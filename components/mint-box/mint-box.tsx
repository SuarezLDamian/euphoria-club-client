import { useState, useEffect } from 'react';
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
import { ethers } from 'ethers'
const { API_KEY, privateKey } = require('../../secrets.json');

interface mintProps {
    mintedQuantity?: number,
    mintCost?: number
}

const MintBox = ({mintedQuantity = 0, mintCost = 0.01 }: mintProps) => {

    const [ disabled, setDisabled ] = useState(true)
    const [provider, setProvider] = useState(null)
    const [signer, setSigner] = useState(null)
    const [contract, setContract] = useState(null)
    const [minted, setminted] = useState(0)
    const [price, setPrice] = useState("")
    const [quantity, setQuantity] = useState(0)

    const handleChange = (value: any) => setQuantity(value)

    const { abi } = require("../../contracts/EuphoriaClub.json");
    const contractAddress = "0x2643E245Ab5D174B6e012D10c242FF2B309e746D";
    const network = "rinkeby"

    // useEffect(() => {
    //     // updateEthers()
    // }, [contract, price])

    useEffect(() => {
        if (contract === null) {
            updateEthers()
        }
        else {
            getValues()
        }
    }, [contract])

    const updateEthers = () => {
        console.log("Se actualiza ethers")
        const web3Provider = new ethers.providers.Web3Provider(window.ethereum)
        var wallet = ethers.Wallet.fromMnemonic(privateKey)
        console.log("el web3Provider es:", web3Provider)
        var tempSigner = wallet.connect(web3Provider)
  
        setSigner(tempSigner);
        console.log("el tempSigner es:", tempSigner)
  
        let tempContract: any = new ethers.Contract(contractAddress, abi, tempSigner);
        setContract(tempContract);
  
        console.log("el tempContract es:", tempContract)
      }

      const getValues = async () => {
        // updateEthers();
        console.log("el contract de useState es:", contract)
        console.log("el signer de useState es:", signer)
        let mintedTokens = await contract.totalSupply();
        setminted(mintedTokens.toNumber());
        console.log("La cantidad minteada es:", mintedTokens.toNumber())
        let priceContract = await contract.price();
        setPrice(ethers.utils.formatEther(priceContract));
        console.log("El precio es:", ethers.utils.formatEther(priceContract))        
      }

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