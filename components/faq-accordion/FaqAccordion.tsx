import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Heading,
    Center
  } from '@chakra-ui/react'

const FaqAccordion = () => {

    return (
        <Box backgroundImage={'/faq-background.svg'} style={{padding: '6rem'}}>
            <Center>
                
            <Heading as='h2' size='2xl' style={{color: 'white', marginBottom: '3rem'}}>
                FAQ
            </Heading>
            </Center>

            <Accordion allowMultiple >
                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left' style={{color: 'white'}}>
                        1. WHAT IS EUPHORIA CLUB ?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel p={'2rem'} style={{color: 'white'}}>
                    Euphoria Clubbers are randomly generated, non-fungible tokens, also known as an &quot;NFT.&quot; There is 4420 different Euphoria Clubbers and each Character is completely unique. No two Euphoria Clubbers are the same. The Euphoria Clubbers were generated from a smart contract using over 150 different hand drawn traits. Euphoria Clubbers are minted, stored, and traded on the Ethereum blockchain.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left' style={{color: 'white'}}>
                        2. HOW DO I PURCHASE A CLUBBER ?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel p={'2rem'} style={{color: 'white'}}>
                    You can mint an Euphoria Clubber from this website or purchase it from our verified collection on the OpenSea marketplace.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left' style={{color: 'white'}}>
                        3. WHEN WILL EUPHORIA CLUBBERS LAUNCH ?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel p={'2rem'} style={{color: 'white'}}>
                    The launch date is tbd.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left' style={{color: 'white'}}>
                        4. HOW MANY EUPHORIA CLUBBERS EXIST ?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel p={'2rem'} style={{color: 'white'}}>
                    4,420 Euphoria Clubbers.
                    </AccordionPanel>
                </AccordionItem>
                
                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'style={{color: 'white'}}>
                        5. ARE SOME EUPHORIA CLUBBERS MORE RARE THAN OTHERS ?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel p={'2rem'} style={{color: 'white'}}>
                    Every Euphoria Clubber has unique traits/attributes, but some traits are more rare than others. For example, 396 Euphoria Clubbers have a Pink Background, but only 22 have Tears. You can see the traits for an Euphoria Clubber under &quot;properties&quot; on OpenSea.
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Box>
    )
}

export default FaqAccordion