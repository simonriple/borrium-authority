import {
  Box,
  Select,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  Text,
} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Trade } from '../types/trade'
import { getKeyPair, keyGen } from './geyKen'
import { InputScan } from './InputScan'
import { Node } from '../types/node'
import sha256 from 'crypto-js/sha256'

const emptyTrade = {
  from: '',
  to: '',
  item: '',
  hash: '',
  signature: '',
}

export const Lend = () => {
  const [nodes, setNodes] = useState<Node[]>([])
  // const [selectedNodeUrl, setSelectedNodeUrl] = useState('')
  const [lend, setLend] = useState<Trade>(emptyTrade)

  const getNodes = () => {
    fetch('/api/nodes')
      .then((res) => res.json())
      .then((nodes) => setNodes(nodes))
  }

  useEffect(() => {
    getNodes()
  }, [])

  useEffect(() => {
    const keyPair = getKeyPair()
    if (keyPair) {
      setLendField('from', keyPair.getPublic().encode('hex', false) ?? '')
    }
  }, [])
  const setLendField = (field: string, value: string) =>
    setLend((lend: Trade) => ({ ...lend, [field]: value }))

  const sign = () => {
    const keyPair = getKeyPair()
    if (keyPair) {
      const hash = sha256(lend.from + lend.to + lend.item).toString()
      setLendField('hash', hash)
      const signature = keyPair.sign(hash, 'base64')
      console.log(signature.toDER('hex'))
      setLendField('signature', signature.toDER('hex'))
    }
  }

  const submit = () => {
    console.log('Submit')
    getNodes()
    let success = true
    nodes.map((node) => {
      fetch(`${node.url}/api/trades`, {
        method: 'post',
        body: JSON.stringify(lend),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((res) => {
          if (!res.status) {
            console.error('errror when posting lend')
            success = false
          }
        })
    })
    if (success) {
      // setLend(emptyTrade)
    }
  }

  return (
    <Box>
      <Text>Lend something to another profile</Text>
      {/* <Select
        placeholder='Select miner'
        onChange={(e) => setSelectedNodeUrl(e.target.value)}
        bg='white'
      >
        {nodes.map((node) => (
          <option value={node.url}>{node?.name}</option>
        ))}
      </Select> */}
      <Button onClick={getNodes}>Refresh nodes</Button>
      <InputScan
        value={lend.item}
        onChange={(value) => setLendField('item', value)}
        placeholder='Item'
      />

      <Input value={lend.from ?? ''} disabled placeholder='From' bg='white' />
      <InputScan
        value={lend.to ?? ''}
        onChange={(value) => setLendField('to', value)}
        placeholder='To'
      />
      <InputGroup>
        <Input
          value={lend.signature ?? ''}
          disabled
          placeholder='Signature'
          bg='white'
        />

        <InputRightElement width='8rem'>
          <Button width='100%' onClick={sign}>
            Sign
          </Button>
        </InputRightElement>
      </InputGroup>
      <Button onClick={submit}>Sumbit</Button>
    </Box>
  )
}
