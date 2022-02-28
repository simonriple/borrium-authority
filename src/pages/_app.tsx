import { ChakraProvider } from '@chakra-ui/react'

import { extendTheme } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { Layout } from '../modules/Layout'
import { io } from 'socket.io-client'
import { useEffect } from 'react'
import { NodesProvider } from '../modules/useNodes'
import { SocketHandler } from '../modules/SocketHandler'

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
        // color: 'white',
      },
      // styles for the `a`
      a: {
        color: 'teal.500',
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
  },
}

const theme = extendTheme(brand)

const App = ({ Component, pageProps }: AppProps) => {
  console.log('in app')

  return (
    <NodesProvider>
      <SocketHandler>
        <ChakraProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </SocketHandler>
    </NodesProvider>
  )
}

export default App
