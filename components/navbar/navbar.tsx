import { ReactNode } from 'react';
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
  Spacer,
  Container, 
  Image
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import ConnectionButton from '../connection-button/ConnectionButton';

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
      <Box minH={'4rem'} bg={useColorModeValue('#48137B', 'gray.900')} px={4}>
      <Container maxW={'8xl'}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
          <Image src='/logo.svg' alt='logo'/>
          </HStack>
          <Flex alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={8}
              display={{ base: 'none', md: 'flex' }}>
                <HStack
                  spacing={8}
                  marginRight={'2rem'}
                  display={{ base: 'none', md: 'flex' }}>
                  <Link href="#the-club"><a style={{color: 'white', fontWeight: 'bold'}}>The Club</a></Link>
                  <Link href="#the-team"><a style={{color: 'white', fontWeight: 'bold'}}>The Team</a></Link>
                  <Link href="#faq"><a style={{color: 'white', fontWeight: 'bold'}}>FAQ</a></Link>
                </HStack>
                <ConnectionButton />
            </HStack>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4} style={{color: 'white'}}>
              <Link href="#the-club"><a style={{color: 'white'}}>The Club</a></Link>
              <Link href="#the-team"><a style={{color: 'white'}}>The Team</a></Link>
              <Link href="#faq"><a style={{color: 'white'}}>FAQ</a></Link>
            </Stack>
              {/* <ConnectionButton /> */}
          </Box>
        ) : null}
        </Container>
      </Box>
    </>
  );
}

export default NavBar;