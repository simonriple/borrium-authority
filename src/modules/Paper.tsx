import { Box } from '@chakra-ui/react'

const Paper = (props: any) => {
  return (
    <Box
      borderWidth='1px'
      borderRadius='lg'
      bg='rgba(248, 248, 248,0.3)'
      backdropFilter={'blur(10px)'}
      padding={10}
    >
      {props.children}
    </Box>
  )
}

export default Paper
