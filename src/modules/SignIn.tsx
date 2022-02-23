import {
  Box,
  Input,
  Button,
  Text,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'
import { lazy, RefObject, Suspense, useRef, useState } from 'react'
import { keyGen } from './geyKen'
import QrCode from 'qrcode'
import dynamic from 'next/dynamic'
import { InputScan } from './InputScan'

export const SignIn = () => {
  const [privateKey, setPrivateKey] = useState('')

  const signIn = () => {
    console.log('signIn')
    localStorage.setItem('privateKey', privateKey)
  }

  return (
    <Box>
      <Text>Sign in</Text>

      <InputScan
        value={privateKey}
        placeholder={'Private key'}
        onChange={(value) => setPrivateKey(value)}
      />
      <Button onClick={signIn}>Sign in</Button>
    </Box>
  )
}
