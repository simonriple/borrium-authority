import { Box, Button, HStack, Text, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import { keyGen } from './geyKen'
import QrCode from 'qrcode'

export const SignUp = () => {
  const [qrPrivateKey, setQrPrivateKey] = useState('')
  const [qrPublicKey, setQrPublicKey] = useState('')

  const signUp = async () => {
    const keyPair = keyGen.genKeyPair()
    const privateKey = keyPair.getPrivate().toString('hex')
    const publicKey = keyPair.getPublic().encode('hex', false)
    console.log(privateKey, publicKey)
    localStorage.setItem('privateKey', privateKey)
    try {
      const urlPrivate = await QrCode.toDataURL(privateKey)
      const urlPublic = await QrCode.toDataURL(publicKey)
      setQrPrivateKey(urlPrivate)
      setQrPublicKey(urlPublic)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Box>
      <Text>Sign up</Text>
      <Button onClick={signUp}>Generate profile</Button>
      <HStack align={'normal'}>
        {qrPrivateKey && (
          <Box width={'50%'}>
            <Text>
              This is your private key. You have to download this qr code and
              never share it with anybody
            </Text>
            <a href={qrPrivateKey} download='Borrium-private-key.png'>
              <img src={qrPrivateKey} alt='qr-code-private-key' />
            </a>
          </Box>
        )}
        {qrPublicKey && (
          <Box width={'50%'}>
            <Text>
              This is your public key. You have to download this qr code.This
              should be used as a reference for your profile
            </Text>
            <a href={qrPublicKey} download='Borrium-public-key.png'>
              <img src={qrPublicKey} alt='qr-code-public-key' />
            </a>
          </Box>
        )}
      </HStack>
    </Box>
  )
}
