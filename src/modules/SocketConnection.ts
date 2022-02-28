import { io } from 'socket.io-client'

let socketConn = io('/clients')
socketConn.on('connect_error', (e) => console.log('error', e))
export default socketConn
