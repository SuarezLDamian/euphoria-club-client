import { ReactNode, useEffect, useCallback, useState } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useWeb3React } from '@web3-react/core'
import { connector } from '../../config/web3/index'
import ConnectionButton from '../connection-button/ConnectionButton';

const Links = ['Twitter', 'Discord', 'Opensea'];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('#7B2CBF', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box style={{color: 'white'}}>EUPHORIA CLUB NFT</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {/* {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))} */}
                {/* <NavLink href='twitter.com/elonmusk'>Hola</NavLink> */}
                <a href='https://twitter.com/euphorianftclub' target='_blank' rel='noreferrer' style={{color: 'white'}}>The Club</a>
                <a href='https://twitter.com/euphorianftclub' target='_blank' rel='noreferrer' style={{color: 'white'}}>The Team</a>
                <a href='https://twitter.com/euphorianftclub' target='_blank' rel='noreferrer' style={{color: 'white'}}>FAQ</a>
                {/* <NavLink >{link}</NavLink>
                <NavLink >{link}</NavLink> */}

            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <ConnectionButton />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

export default NavBar;