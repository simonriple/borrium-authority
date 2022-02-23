import { ec as EC } from 'elliptic'

export const keyGen = new EC('secp256k1')

export const getKeyPair = () => {
  const privateKey = localStorage.getItem('privateKey')
  if (privateKey) {
    const keyPair = keyGen.keyFromPrivate(privateKey)
    return keyPair
  }
  return undefined
}
