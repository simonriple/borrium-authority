import { mergeThemeOverride } from '@chakra-ui/react'
import RequestHandler from '../../modules/RequestHandler'
import { Node } from '../../types/node'

var nodes: Node[] = []

const nodesHandler = new RequestHandler()

nodesHandler.get = (req, res) => {
  console.log('getting')
  res.status(200).json(nodes)
}

nodesHandler.post = (req, res) => {
  console.log('new node registering', req.body)
  const newNode: Node = { ...req.body, id: Math.floor(Math.random() * 9999) }
  nodes.push(newNode)
  res.status(200).json(newNode)
}

nodesHandler.put = (req, res) => {
  const nodeId = req.query.id[0]
  if (nodeId !== undefined) {
    console.log('Node update id', nodeId, ' node ', req.body)
    nodes.map((node) =>
      node.id.toString() === nodeId ? { ...req.body } : node
    )
    const updatedNode = nodes.find((node) => node.id.toString() === nodeId)
    console.log('Updated node: ', updatedNode)
    res.status(200).json(updatedNode)
  }
}

nodesHandler.delete = (req, res) => {
  const nodeId = req.query.id
  if (nodeId !== undefined) {
    nodes = nodes.filter((node) => node.id.toString() !== nodeId)
  }
  res.status(200).json({ success: true })
}

export default nodesHandler.handleRequest
