import { useState } from 'react'
import { Button, Text, useToast } from '@chakra-ui/react'
import Countdown from 'react-countdown';
import { useWeb3React } from '@web3-react/core'
import { ethers } from 'ethers'
const { abi } = require("../../contracts/EuphoriaClub.json");

const MintButton = (quantity: any) => {

    const {
        activate,
        active,
        deactivate,
        account,
        chainId,
        error
    } = useWeb3React()

    let window: any

    const toast = useToast()

    const [stateProvider, setStateProvider] = useState(null)
    const [stateSigner, setStateSigner] = useState(null)
    const [stateContract, setStateContract] = useState(null)

    const contractAddress = "0x2643E245Ab5D174B6e012D10c242FF2B309e746D";
    const network = "rinkeby"

    async function activepresale () {
      console.log("Se activa presale")
      const activePresale = await stateContract.setPresaleActive(true);
    }

    const mintHandler = async () => {
      if (account && typeof window !== 'undefined' && typeof window.ethereum != 'undefined') {
        try {
        // conexión
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        setStateProvider(provider);
        console.log("el provider es:", provider)
        await provider.send("eth_requestAccounts", []); // enviar pop-up en Metamask
        const signer = provider.getSigner()
        setStateSigner(signer);
        const contract: any = new ethers.Contract(contractAddress, abi, signer);
        setStateContract(contract);

        // validaciones de state
        console.log("el contract de useState es:", stateContract)
        console.log("el contract sigue siendo:", contract)
        console.log("el signer de useState es:", stateSigner)
        const isPresaleActive = await contract.presaleActive();
        console.log("[mint-button]La presale está activa?:", isPresaleActive)
        
        // transacción
        const tokenQuantity = quantity.quantity;
        console.log("Se intenta mintear en presale la cantidad:", tokenQuantity)
        const etherQuantity = tokenQuantity*0.01
        console.log("Por el valor en ether:", etherQuantity)
        const tx = await contract.mintPresale(tokenQuantity, { value: ethers.utils.parseEther(etherQuantity.toString()) })
        console.log("Transacción:", tx)
        await tx.wait()
        } 
        catch (error) {
          toast({
            title: 'Transaction cancelled.',
            description: "Please try again.",
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
        }
      }
    }

    // const [ disabled, setDisabled ] = useState(true)

  return (
    <Button
        // disabled={disabled? true : false} 
        onClick={mintHandler}
        size='lg' 
        bg={'#5A189A'} 
        mt='1rem' 
        isFullWidth={true} 
        style={{ fontSize: '30px',color: 'white'}}>
        {/* <Countdown date='2022-03-31T12:00:00' onComplete={() => setDisabled(false)}> */}
            <Text>MINT</Text>
        {/* </Countdown> */}
    </Button>
  )
}

export default MintButton