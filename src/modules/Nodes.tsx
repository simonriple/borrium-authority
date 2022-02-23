import { Box, Button, Circle, HStack, Stack, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Block } from '../types/block'
import { Node as NodeType } from '../types/node'

export const Nodes = () => {
  const [nodes, setNodes] = useState<NodeType[]>([])

  const getNodes = () => {
    fetch('/api/nodes')
      .then((res) => res.json())
      .then((nodes) => setNodes(nodes))
  }
  useEffect(() => {
    getNodes()
  }, [])

  return (
    <Stack margin={5}>
      <Button onClick={getNodes}>Refresh</Button>
      <HStack>
        {nodes?.map((node) => (
          <Node node={node} />
        ))}
      </HStack>
    </Stack>
  )
}

export const Node = ({ node }: { node: NodeType }) => {
  const [blocks, setBlocks] = useState<Block[]>([])

  const getBlocks = () => {
    fetch(`${node.url}/api/blocks`)
      .then((res) => res.json())
      .then((nodes) => setBlocks(nodes))
  }

  useEffect(() => {
    const interval = setInterval(() => getBlocks(), 10000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Box>
      <HStack>
        <Link href={node.url}>
          <Circle size='10' bg='green' />
        </Link>
        <Text>{node.name}</Text>
      </HStack>
      <Box>
        {blocks?.map((block) => (
          <Box borderWidth='1px' borderRadius='lg'>
            <Text>
              <pre>{JSON.stringify(block, null, 4)}</pre>
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
