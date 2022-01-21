import { Container, Grid, Heading, Stack, HStack, Text, Box, GridItem } from "@chakra-ui/react";
import { Header } from "../modules/Header";
import { BackgroundImage } from "../modules/BackgroundImage";
import { Nodes } from "../modules/Nodes"
import illustration from '/public/illustration.svg';
import Image from 'next/image'

const Home = () => {
    return (
    <>
        <BackgroundImage/>
        <Header />
        <Container as='main' maxW={'container.xl'} >
            <Stack>
                <Box>
                <HStack>
                    <Box>
                        <Stack spacing={10}>
                            <Heading as='h1' size='4xl'>Borrium, next gen borrowing system</Heading>
                            <Text>A distributed system managing a blockchain for secure borrowing</Text>
                        </Stack>
                    </Box>
                    <Box>
                        <Image src={illustration} />
                    </Box>
                </HStack>
                </Box>
                <Box borderWidth='1px' borderRadius='lg' bg="rgba(248, 248, 248,0.3)" backdropFilter={"blur(10px)"}>
                    <Nodes />
                </Box>
            </Stack>
        </Container>
    </>)
}

export default Home;