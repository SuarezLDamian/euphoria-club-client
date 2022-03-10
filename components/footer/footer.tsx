import { ReactNode } from 'react';
import Image from 'next/image'
import {
    Box,
    chakra,
    Container,
    Link,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
  import { FaInstagram, FaTwitter, FaDiscord } from 'react-icons/fa';
  import Logo from "/public/logo.svg"
  
  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  function Footer() {
    return (
      <Box
        bg={useColorModeValue('#7B2CBF', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Image src={Logo} alt='logo'/>
          <Text style={{color: 'white'}}>© 2022 made with ♥ by Korks Lab</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'https://twitter.com/euphorianftclub'}>
              <FaTwitter style={{color: 'white'}}/>
            </SocialButton>
            <SocialButton label={'Discord'} href={'https://twitter.com/euphorianftclub'}>
              <FaDiscord style={{color: 'white'}}/>
            </SocialButton>
            <SocialButton label={'Instagram'} href={'https://twitter.com/euphorianftclub'}>
              <FaInstagram style={{color: 'white'}}/>
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    );
  }

  export default Footer;