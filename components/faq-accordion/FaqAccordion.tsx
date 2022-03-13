import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Heading,
    Center, 
    Container,
    Text
  } from '@chakra-ui/react'
import Image from 'next/image'

const FaqAccordion = () => {

    return (
        <Box backgroundImage={'/faq-background.svg'} style={{padding: '6rem'}}>
            {/* <Image src={'/faq-background.svg'} alt='hero-background'></Image> */}
            <Container maxW={'6xl'}>
            <Center>
                
            <Heading as='h2' size='2xl' style={{color: 'white', marginBottom: '3rem'}}>
                FAQ
            </Heading>
            </Center>

            <Accordion allowMultiple >
                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left' p={'1rem'} style={{color: 'white'}}>
                            <Text fontSize='xl' style={{color: 'white'}}>
                                1. WHAT IS EUPHORIA CLUB ?
                            </Text>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel p={'2rem'} style={{color: 'white'}}>
                        <Text fontSize='lg' style={{color: 'white'}}>
                        Euphoria Clubbers are randomly generated, non-fungible tokens, also known as an &quot;NFT.&quot; There is 4420 different Euphoria Clubbers and each Character is completely unique. No two Euphoria Clubbers are the same. The Euphoria Clubbers were generated from a smart contract using over 150 different hand drawn traits. Euphoria Clubbers are minted, stored, and traded on the Ethereum blockchain.
                        </Text>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left' p={'1rem'} style={{color: 'white'}}>
                            <Text fontSize='xl' style={{color: 'white'}}>
                            2. HOW DO I PURCHASE A CLUBBER ?
                            </Text>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel p={'2rem'} style={{color: 'white'}}>
                        <Text fontSize='lg' style={{color: 'white'}}>
                            You can mint an Euphoria Clubber from this website or purchase it from our verified collection on the OpenSea marketplace.
                        </Text>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left' p={'1rem'} style={{color: 'white'}}>
                            <Text fontSize='xl' style={{color: 'white'}}>
                            3. WHEN WILL EUPHORIA CLUBBERS LAUNCH ?
                            </Text>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel p={'2rem'} style={{color: 'white'}}>
                        <Text fontSize='lg' style={{color: 'white'}}>
                            The launch date is tbd.
                        </Text>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left' p={'1rem'} style={{color: 'white'}}>
                            <Text fontSize='xl' style={{color: 'white'}}>
                                4. HOW MANY EUPHORIA CLUBBERS EXIST ?
                            </Text>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel p={'2rem'} style={{color: 'white'}}>
                        <Text fontSize='lg' style={{color: 'white'}}>
                            4,420 Euphoria Clubbers.
                        </Text>
                    </AccordionPanel>
                </AccordionItem>
                
                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left' p={'1rem'} style={{color: 'white'}}>
                            <Text fontSize='xl' style={{color: 'white'}}>
                                5. ARE SOME EUPHORIA CLUBBERS MORE RARE THAN OTHERS ?
                            </Text>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel p={'2rem'} style={{color: 'white'}}>
                        <Text fontSize='lg' style={{color: 'white'}}>
                        Every Euphoria Clubber has unique traits/attributes, but some traits are more rare than others. For example, 396 Euphoria Clubbers have a Pink Background, but only 22 have Tears. You can see the traits for an Euphoria Clubber under &quot;properties&quot; on OpenSea.
                        </Text>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
            </Container>
        </Box>
    )
}

export default FaqAccordion