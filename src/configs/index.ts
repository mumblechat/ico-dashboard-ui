import {
  createConfig,
  http,
  cookieStorage,
  createStorage
} from 'wagmi'


import { Address, type Chain } from 'viem'

export const ramestta = {
  id: 1370,
  name: 'Ramestta',
  nativeCurrency: { name: 'RAMA', symbol: 'RAMA', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://blockchain.ramestta.com'] },
  },
  blockExplorers: {
    default: { name: 'Ramascan', url: 'https://ramascan.com' },
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
      address: '0xE4fA850Bd3abBC63e07E688c27eF9a334992283d',
      blockCreated: 7334177,
    },
  },
} as const satisfies Chain

export const pingaksha = {
  id: 1377,
  name: 'Pingaksha Testnet',
  nativeCurrency: { name: 'RAMA', symbol: 'RAMA', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://testnet.ramestta.com'] },
  },
  blockExplorers: {
    default: { name: 'Ramascan', url: 'https://pingaksha.ramascan.com' },
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
      address: '0xE4fA850Bd3abBC63e07E688c27eF9a334992283d',
      blockCreated: 2451020,
    },
  },
} as const satisfies Chain

export const config = createConfig({
  chains: [ramestta,pingaksha],
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  transports: {
    [ramestta.id]: http('https://blockchain.ramestta.com'),
    [pingaksha.id]: http('https://testnet.ramestta.com')
  },
})

type MmctContractAddressesType= {
  ramestta: { 
    mmct_token: Address,
    mmct_ico: Address,
    mmct_referral: Address,
    mmct_staking: Address,
  },
  pingaksha: {
    mmct_token: Address,
    mmct_ico: Address,
    mmct_referral: Address,
    mmct_staking: Address,
  }
}

export const mmctContractAddresses: MmctContractAddressesType = {
  ramestta: { 
    mmct_token: "0x4b1853C1882ee5c50e5Cb3d7ff05334047AC66Bd",
    mmct_ico: "0x4DF1Aa05B49068bCE8dc00BFd8b2cA26aEd5101E",
    mmct_referral: "0xE0AD91DaBbD69F055463438E62ee3b73F5a0b626",
    mmct_staking: "0x06A4CD8EE1a8D99C62B06C607611AB924B6310a6",
  },
  pingaksha: {
    mmct_token: "0x0537786A0C92439E0F70A92EC0477A8465B7Dade",
    mmct_ico: "0xB8ba201630B39cB18A7874D17282E5FaC05c351A",
    mmct_referral: "0xD819FCfCE76FF8503fa095FcEd3ED316e8261BC1",
    mmct_staking: "0x70469a8DFcEc0c20824a61fDE866F8edc4D08639",
  }
}


export const formatTier = (tier: number): string => {
  if (tier === 5) {
    return 'Elite';
  } else if (tier === 4) {
    return 'Diamond';
  } else if (tier === 3) {
    return 'Platinum';
  } else if (tier === 2) {
    return 'Gold';
  } else if (tier === 1) {
    return 'Silver';
  } else  {
    return 'Starter';
  }
}
