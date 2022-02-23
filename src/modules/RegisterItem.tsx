import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  useStyleConfig,
  Text,
} from '@chakra-ui/react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import QrCode from 'qrcode'
import lend from '../pages/lend'

export const RegisterItem = () => {
  const [itemId, setItemId] = useState('')
  const [qrUrl, setQrUrl] = useState('')

  const generateItemId = async () => {
    const newId = uuidv4()
    setItemId(newId)
    const qrUrl = await QrCode.toDataURL(newId)
    setQrUrl(qrUrl)
  }

  const submit = () => {
    console.log('submit new item')
  }
  return (
    <Box>
      <Text>Register a new item</Text>
      <InputGroup>
        <Input value={itemId} placeholder='Item' disabled bg='white' />
        <InputRightElement width='8rem'>
          <Button width='100%' onClick={generateItemId}>
            Generate id
          </Button>
        </InputRightElement>
      </InputGroup>
      {qrUrl && (
        <Box>
          <Text>
            Download and print this qr-code and attach it to your item
          </Text>
          <a href={qrUrl} download='Borrium-item-id.png'>
            <img src={qrUrl} alt='qr-code-item-id' />
          </a>
        </Box>
      )}
      <Button onClick={submit}>Submit new Item</Button>
    </Box>
  )
}
