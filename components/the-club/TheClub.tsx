import { Box, Center, Heading, Stack, Text, Divider } from '@chakra-ui/react'

const TheClub = () => {
    
    return (
        <Box style={{background: '#7B2CBF', padding: '3rem'}}>
            <Center>                
                <Heading as='h1' size='2xl' style={{color: 'white'}}>
                    The Club
                </Heading>
            </Center>
            <Center>
                <Stack spacing={12} margin={'4rem'}>                
                    <Text fontSize='2xl' style={{color: 'white'}}>Si eres fan de la famosa serie Euphoria como nosotros, no pierdas la oportunidad de formar parte de la comunidad y acuñar un nuevo integrante, o si eres de esas personas que tienen suerte, ¡Acuñar un integrante oficial del Cast con sus rasgos oficiales!</Text>
                    <Center height='2rem'>
                        <Divider orientation='vertical' />
                    </Center>
                    <Text fontSize='2xl' style={{color: 'white'}}>No existen dos personajes similares, cada uno cuenta con un conjunto de rasgos diferentes. Los Euphoria Club se generaron a partir de un contrato inteligente utilizando mas de 60 rasgos diferentes dibujados a mano. Los Euphoria Club se acuñan, almacenan y comercializan en la cadena de bloques de Ethereum.</Text>
                    <Center height='2rem'>
                        <Divider orientation='vertical' />
                    </Center>
                    <Text fontSize='2xl' style={{color: 'white'}}>En euphoria club odiamos la discriminación, queremos que todos se sientan cómodos. No importa raza, sexo, ni físico. Lo importante es tu esencia interior.</Text>
                    <Center height='2rem'>
                        <Divider orientation='vertical' />
                    </Center>
                    <Text fontSize='2xl' style={{color: 'white'}}>Una vez comenzada la 3er Temporada de la Serie, todos los que holdeen sus Euphoria Club NFT, podran acceder a un minteo gratuito de la coleccion N°2.</Text>
                </Stack>
            </Center>
            
        </Box>
    )
}

export default TheClub