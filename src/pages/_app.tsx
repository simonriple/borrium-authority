import { ChakraProvider } from '@chakra-ui/react'

import { extendTheme } from '@chakra-ui/react'
import { AppProps } from 'next/app'

const brand = {
  colors: {
    green: '#347A75',
    grey: '#a8a8a6',
    black: '#0C0F0E',
    white: '#F8F8F8',
    orange: {
      500: '#db936a',
    },
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: 'black',
        color: 'white',
      },
      // styles for the `a`
      a: {
        color: 'teal.500',
        _hover: {
          textDecoration: 'underline',
        },
      }
    },
  },
}

const theme = extendTheme(brand)

const App = ({Component, pageProps}: AppProps) => {
    console.log("in app")
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    )
} 

export default App