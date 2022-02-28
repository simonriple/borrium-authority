const express = require('express')
const next = require('next')
const { Server } = require('socket.io')
const http = require('http')

const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV != 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()
  const httpServer = http.createServer(server)

  console.log('Initializing socket')
  const io = new Server(httpServer, {
    cors: {
      origin: '*',
    },
  })

  io.of('/nodes').on('connection', (socket) => {
    console.log('new node connected', socket.handshake.query)
    socket.join('nodes')
    // nodes.push(socket.clients)
    // socket.broadcast.emit('nodes', io.)
    socket.on('disconnecting', () => console.log('node disconnecting'))
  })

  io.of('/clients').on('connection', (socket) => {
    console.log('new client connected')
    socket.join('clients')
    socket.on('init', () => {
      console.log('socket wants init data')
      socket.emit('nodes', ['dkjhd', 'djkh'])
    })
    socket.on('disconnecting', () => console.log('client disconnecting'))
  })
  server.all('*', (req, res) => {
    handle(req, res)
  })

  httpServer.listen(port, (err) => {
    if (err) throw err
    console.log(
      `> Running server in ${
        dev ? 'development' : 'production'
      } mode on http://localhost:${port}`
    )
  })
})
