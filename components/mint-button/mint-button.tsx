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
    // var contract:any
    // var accounts:any
    // var web3:any
    var balance
    var available

    // require('dotenv').config();
    // const API_URL = process.env.API_URL;
    // const PUBLIC_KEY = process.env.PUBLIC_KEY;
    // const PRIVATE_KEY = process.env.PRIVATE_KEY;

    const [provider, setProvider] = useState(null)
    const [signer, setSigner] = useState(null)
    const [contract, setContract] = useState(null)

    const contractAddress = "0x2643E245Ab5D174B6e012D10c242FF2B309e746D";
    // const contractAddress = "0x81c587EB0fE773404c42c1d2666b5f557C470eED";
    // const API_KEY = "https://rinkeby.infura.io/v3/82f06f78e05c47f9a9cbeea55107aaff"
    const network = "rinkeby"

    const mintHandler = async () => {
      console.log("Se actualiza ethers")
      // let tempProvider: any = new ethers.providers.Web3Provider(window.ethereum);
      // let infuraProvider: any = new ethers.providers.InfuraProvider(network, API_KEY);
      // setProvider(infuraProvider);
      // console.log("el infuraProvider es:", infuraProvider)

      // const wallet = new ethers.Wallet(privateKey, infuraProvider);
      var wallet = ethers.Wallet.fromMnemonic(privateKey)
      // console.log('Monto de la wallet:', wallet.getBalance().then(balance => { console.log(balance.toString() )}))

      // var signer = provider.getSigner();
      const web3Provider = new ethers.providers.Web3Provider(window.ethereum)
      console.log("el web3Provider es:", web3Provider)
      var tempSigner = wallet.connect(web3Provider)

      // let tempSigner = infuraProvider.getSigner();
      setSigner(tempSigner);
      // console.log("el tempSigner es:", tempSigner)

      let tempContract: any = new ethers.Contract(contractAddress, abi, tempSigner);
      setContract(tempContract);

      const isPresaleActive = await tempContract.presaleActive();
      console.log("isPresaleActive:", isPresaleActive)


//       // console.log("el tempContract es:", tempContract)
//     }

//     // const infuraProvider = new ethers.providers.InfuraProvider(network, API_KEY);
// // const wallet = new ethers.Wallet(privateKey, infuraProvider);
// // const signer = wallet.connect(infuraProvider);

//     const mintHandler = async () => {
//       await updateEthers();
      console.log("el contract de useState es:", contract)
      console.log("el tempContract sigue siendo:", tempContract)
      
      console.log("el signer de useState es:", signer)
      // const contractWithSigner = contract.connect(signer);
      // console.log("el contractWithSigner es:", contractWithSigner)
      // const activePresale = await contract.setPresaleActive(true);
      // const isPresaleActive = await contract.presaleActive();
      let reserved = await tempContract.reserved();
      console.log("La cantidad reservada es:", reserved.toNumber())
      // console.log("Se activa la presale:", activePresale)
      console.log("La presale está activa?:", isPresaleActive)
      const tokenQuantity = quantity.quantity;
      console.log("Se intenta mintear en presale la cantidad:", tokenQuantity)
      const etherQuantity = tokenQuantity*0.01
      console.log("Por el valor en ether:", etherQuantity)
      const tx = await tempContract.mintPresale(tokenQuantity, { value: ethers.utils.parseEther(etherQuantity.toString()) })
      console.log("Transacción:", tx)
      await tx.wait()
      // reserved = await contract.reserved();
      // console.log("La cantidad reservada es:", reserved.toNumber())
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