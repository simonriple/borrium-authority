import Image from "next/image"
import background from '/public/background.svg'
import noise from '/public/noise.svg'
import { Box } from '@chakra-ui/react'

export const BackgroundImage = () => {
    return (
        <>
        <Box position={'absolute'} top={0} left={0} height='100vh' zIndex={-10} backdropFilter={"blur(100px)"}>
            <Box filter={"blur(50px)"}>
                <Image src={background}/>
            </Box>
        </Box>
        <Box position={'absolute'} top={0} left={0} height='100vh' width='100vw' zIndex={-5} opacity={0.1}>
            <Image src={noise} layout="fill"/>
        </Box>
        </>
    )
}