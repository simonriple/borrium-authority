import { ReactChild, useEffect } from 'react'
import { useNodes } from './useNodes'
// import socketConn from './SocketConnection'
import { io } from 'socket.io-client'

export const SocketHandler = ({ children }: { children: ReactChild }) => {
  const { nodes, replaceNodes } = useNodes()
  useEffect(() => {
    const socket = io('/clients')
    socket.on('connect', () => {
      socket.emit('init')
      socket.on('nodes', (nodes) => {
        console.log(nodes)
        replaceNodes(nodes)
      })
    })
    socket.on('connection_error', (err) => console.log(err))
    return () => {
      socket.close()
    }
  }, [])
  return <>{children}</>
}
