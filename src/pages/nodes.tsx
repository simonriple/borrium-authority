import { Box } from '@chakra-ui/react'
import { Nodes as NodesComponent } from '../modules/Nodes'

const Nodes = () => {
  return (
    <Box
      borderWidth='1px'
      borderRadius='lg'
      bg='rgba(248, 248, 248,0.3)'
      backdropFilter={'blur(10px)'}
    >
      <NodesComponent />
    </Box>
  )
}

export default Nodes
