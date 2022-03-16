import { ReactNode } from 'react';
import {
    Box,
    chakra,
    Container,
    Link,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
    Image
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
        target={'_blank'}
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
        bg={useColorModeValue('#480C83', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Image src='/logo.svg' alt='footer logo'/>
          <Text style={{color: 'white'}}>©2022 Euphoria Club NFT. All rights reserved.</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'https://twitter.com/euphorianftclub'}>
              <FaTwitter style={{color: 'white'}}/>
            </SocialButton>
            <SocialButton label={'Discord'} href={'https://discord.gg/pEmvhJ5e8H'}>
              <FaDiscord style={{color: 'white'}}/>
            </SocialButton>
            <SocialButton label={'Instagram'} href={'https://www.instagram.com/euphoriaclubnfts/'}>
              <FaInstagram style={{color: 'white'}}/>
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    );
  }

  export default Footer;