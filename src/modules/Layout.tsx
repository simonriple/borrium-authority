import { Container } from '@chakra-ui/react'
import { BackgroundImage } from './BackgroundImage'
import { Header } from './Header'

export const Layout = (props: any) => {
  const { children } = props
  return (
    <>
      <BackgroundImage />
      <Header />
      <Container as='main' maxW={'container.xl'}>
        {children}
      </Container>
    </>
  )
}
