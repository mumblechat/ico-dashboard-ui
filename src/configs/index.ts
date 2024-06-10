import {
  createConfig,
  http,
  cookieStorage,
  createStorage
} from 'wagmi'


import { type Chain } from 'viem'

export const ramestta = {
  id: 1370,
  name: 'Ramestta',
  nativeCurrency: { name: 'RAMA', symbol: 'RAMA', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://blockchain.ramestta.com'] },
  },
  blockExplorers: {
    default: { name: 'Ramascan', url: 'https://ramascan.io' },
  },
  contracts: {
    // ensRegistry: {
    //   address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
    // },
    // ensUniversalResolver: {
    //   address: '0xE4Acdd618deED4e6d2f03b9bf62dc6118FC9A4da',
    //   blockCreated: 16773775,
    // },
    multicall3: {
      address: '0xE10f9f75E66365982E73849e911919599c3CF5bf',
      blockCreated: 5979200,
    },
  },
} as const satisfies Chain

export const config = createConfig({
  chains: [ramestta],
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  transports: {
    [ramestta.id]: http()
  },
})