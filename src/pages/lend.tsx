import {
  Box,
  Button,
  Editable,
  EditableInput,
  EditablePreview,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Stack,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Lend } from '../modules/Lend'
import Paper from '../modules/Paper'
import { RegisterItem } from '../modules/RegisterItem'
import { SignIn } from '../modules/SignIn'

const LendPage = () => {
  const [signedIn, setSignedIn] = useState(false)
  useEffect(() => {
    const privateKey = localStorage.getItem('privateKey')
    if (privateKey) {
      setSignedIn(true)
    }
  }, [])

  return (
    <Paper>
      <HStack align={'normal'} spacing={10}>
        <Box width={'50%'}>
          <Lend />
        </Box>
        <Box width={'50%'}>
          <RegisterItem />
        </Box>
      </HStack>
    </Paper>
  )
}

export default LendPage
