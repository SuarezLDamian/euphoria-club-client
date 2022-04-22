import { useState } from 'react'
import { Button, Text } from '@chakra-ui/react'
import Countdown from 'react-countdown';
import { ethers } from 'ethers'
const { abi } = require("../../contracts/EuphoriaClub.json");

const { API_KEY, privateKey } = require('../../secrets.json');


const MintButton = (quantity: any) => {

    const NETWORK_ID = 4
    var NFT_PRICE = null
    var PRESALE_PRICE = null
    var MAX_SUPPLY = null
    var MAX_PRESALE_SUPPLY = null

    // require('dotenv').config();
    // const API_URL = process.env.API_URL;
    // const PUBLIC_KEY = process.env.PUBLIC_KEY;
    // const PRIVATE_KEY = process.env.PRIVATE_KEY;

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
      console.log("Se actualiza ethers")
      // const wallet = ethers.Wallet.fromMnemonic(privateKey)

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
      const reserved = await contract.reserved();
      console.log("[mint-button]La cantidad reservada es:", reserved.toNumber())
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