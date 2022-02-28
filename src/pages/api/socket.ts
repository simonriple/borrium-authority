import { Server } from 'socket.io'
import type { NextApiRequest, NextApiResponse } from 'next'

const SocketHandler = (req: any, res: any) => {
  if (res.socket.server.io) {
    console.log('Socket already running')
  } else {
    console.log('Initializing socket')
    const io = new Server(res.socket.server)
    res.socket.server.io = io

    io.on('connection', (socket) => {
      console.log('socket connected', socket)
    })
  }
  res.end()
}

export default SocketHandler
