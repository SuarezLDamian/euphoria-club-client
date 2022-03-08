import { useEffect, useCallback, useState } from 'react';
import { Button, useToast } from '@chakra-ui/react';
import { useWeb3React } from '@web3-react/core'
import { connector } from '../../config/web3/index'


const ConnectionButton = () => {

    const [ connecting, setConnecting ] = useState(false)
    const [ connected, setConnected ] = useState(false)

    const toast = useToast()
    
    const {
        activate,
        active,
        deactivate,
        account,
        chainId,
        error
    } = useWeb3React()

    const showSuccessToast = useCallback(() => {
        toast({
            title: 'Wallet connected.',
            description: "You are now ready to join the club!.",
            status: 'success',
            duration: 9000,
            isClosable: true,
        })
    }, [toast])

    const showErrorToast = useCallback (() => {
        toast({
            title: 'Something Happened.',
            description: "Try again.",
            status: 'error',
            duration: 9000,
            isClosable: true,
        })
    }, [toast])
    
    const connect = useCallback(() => {
        setConnecting(true)
        activate(connector)
        setConnected(true)
        localStorage.setItem('previouslyConnected', 'true')
    }, [activate])
    
    const disconnect = () => {
        deactivate()
        setConnecting(false)
        setConnected(false)
        localStorage.removeItem('previouslyConnected')
    }
    
    useEffect(() => {
    if (localStorage.getItem('previouslyConnected') === 'true')
        connect()
    }, [connect])

    // if (active) {
    //     showSuccessToast()
    // }

    // if (error) {
    //     showErrorToast()
    //     // setConnecting(false)
    // }

    return (        
        active 
        ? 
        <Button
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'euphoria.100'}
            onClick={disconnect}
            _hover={{
                bg: 'euphoria.200',
            }}>
            {account}
        </Button>
        : 
        <Button
            isLoading={connecting? true : false}
            loadingText='Connecting'
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'euphoria.100'}
            onClick={connect}
            _hover={{
                bg: 'euphoria.200',
            }}>
            Connect Wallet
        </Button>
    )
}

export default ConnectionButton