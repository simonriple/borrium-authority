import { Box, HStack } from '@chakra-ui/react'
import Paper from '../modules/Paper'
import { SignIn } from '../modules/SignIn'
import { SignUp } from '../modules/SignUp'

const SignInPage = () => {
  return (
    <Paper>
      <HStack align={'normal'} spacing={5}>
        <Box width={'50%'}>
          <SignIn />
        </Box>
        <Box width={'50%'}>
          <SignUp />
        </Box>
      </HStack>
    </Paper>
  )
}

export default SignInPage
