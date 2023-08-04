import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, useWalletClient, WagmiConfig } from 'wagmi'
import { arbitrum, goerli, mainnet, polygon } from 'wagmi/chains'
//extra
import { Web3Button } from '@web3modal/react'
import { walletClientToSigner , useEthersSigner } from './utils/signer'
import { ethers } from 'ethers'
import calls from './apis/calls'

//end
const chains = [arbitrum, mainnet, polygon , goerli]
const projectId = process.env.REACT_APP_WALLETCONNECT_PROJECT_ID

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)

function App() {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <HomePage />
      </WagmiConfig>

      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  )
}

export default App


function HomePage() {
  const client = useEthersSigner()
  

  
  return <>
    <Web3Button />
    <button onClick={async ()=> await calls.transferEther(client,"0xBEf2c5A5365F167971FA484e6E1599fECD91f21b",0.000001)}>Transaction</button>
  </>
}