import { 
    createConfig, 
    http, 
    cookieStorage,
    createStorage 
  } from 'wagmi'
  import { polygon,polygonMumbai } from 'wagmi/chains'
  
  export const config = createConfig({
    chains: [polygon, polygonMumbai],
    ssr: true,
    storage: createStorage({  
      storage: cookieStorage, 
    }),  
    transports: {
      [polygon.id]: http(),
      [polygonMumbai.id]: http(),
    },
  })