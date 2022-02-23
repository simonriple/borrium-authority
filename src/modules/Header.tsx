import { Box, Container, Heading, HStack } from '@chakra-ui/react'
import Image from 'next/image'
import logo from '/public/borrium.svg'
export const Header = () => {
  return (
    <Container as='header' maxW={'container.xl'} height='100'>
      <HStack>
        <Box>
          <Image src={logo} alt='borrium logo' height={'100%'} width={'80%'} />
        </Box>
      </HStack>
    </Container>
  )
}
