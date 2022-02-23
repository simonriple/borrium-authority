import { Trade } from './trade'

export interface Block {
  hash: string
  trade: Trade | null
  difficulty: number
  nonce: number
  prevHash: string
}
