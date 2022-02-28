import {
  createContext,
  PropsWithChildren,
  ReactChild,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react'
import socketConn from './SocketConnection'

interface NodeContextValue {
  nodes: string[]
  replaceNodes: (nodes: string[]) => void
}
const NodeContext = createContext<NodeContextValue | null>(null)
// export const useNodes = () => {}
// const nodeReducer = (state:NodeContextValue, action: ) => {
//   switch (action.type) {
//     case 'REPLACE_NODES': {
//       return { nodes: action.nodes }
//     }
//   }
// }

export const NodesProvider = ({ children }: { children: ReactChild }) => {
  const [nodes, setNodes] = useState<string[]>([])
  return (
    <NodeContext.Provider
      value={{ nodes: nodes, replaceNodes: (nodes) => setNodes(nodes) }}
    >
      {children}
    </NodeContext.Provider>
  )
}

export const useNodes = () => {
  const context = useContext(NodeContext)
  if (context === null) {
    throw new Error('Context is null')
  }
  return context
}
