// import addresses from "../contracts/index"
// import NFT from '../contracts/ABIs/Superfood.json'
// import {ethers} from 'ethers'
// import Web3Modal from 'web3modal'
// import ERROR from '../utils/error'
// // Import the Moralis SDK
// import Moralis from 'moralis';
// import { Network, Alchemy } from "alchemy-sdk";
// import apis from "apis"
//import { useWalletClient } from "wagmi"
import { useEthersSigner } from "../utils/signer"
import { ethers } from "ethers"

const createContractCalls = () => {
  // const signer = ethersSigner
  // const loadProvider = async () => {
  //   try {
  //       // const web3Modal = new Web3Modal();
  //       // const connection = await web3Modal.connect();
  //       // const provider = new ethers.providers.Web3Provider(connection);
  //       return signer
  //   }
  //   catch (e) {
  //       console.log("loadProvider: ", e)
        
  //   }
  // }



  async function transferEther(signer , receiverAddress, amount) {
    try {
      // Connect to the Ethereum network using the ethers provider (e.g., Ethereum mainnet, Rinkeby, etc.)
       

       console.log("signer :>>",signer)
  
      // // Convert the amount to Wei (the smallest unit of Ether)
      const amountInWei = ethers.utils.parseEther(amount.toString());
  
      // Create a transaction object
      const transaction = {
        to: receiverAddress,
        value: amountInWei,
      };
  
      // Sign the transaction
      const signedTransaction = await signer.sendTransaction(transaction)
  
      // // Send the transaction
      // const transactionResponse = await signer.sendTransaction(signedTransaction);
  
      // console.log('Transaction hash:', transactionResponse.hash);
      // console.log('Transaction receipt:', await transactionResponse.wait());
    } catch (error) {
      console.error('Error transferring Ether:', error);
    }
  }

// // Function to retrieve NFTs owned from a specific smart contract
// async function getOwnedNFTs(account , chainId) {
//   try {
//     const settings = {
//         apiKey: process.env.REACT_APP_ALCHEMY_API, // Replace with your Alchemy API Key.
//         network: Network.ARB_GOERLI, // Replace with your network.
//       };
      
//       const alchemy = new Alchemy(settings);
//     let signer = await loadProvider()
//     const contract = new ethers.Contract(addresses[chainId].marketplace, NFT , signer)
//     const _balanceOf = await balanceOf(account , chainId)
//     let metadata = []
//     let response_data = []
//     for (let index = 0; index < _balanceOf; index++) {
       
//         const element = await contract.tokenOfOwnerByIndex(account,index);
//         let _data = {}
//         try {
//             const { data } = await apis.getNFTByTokenId(element.toString())
//             _data = data
//         } catch (error) {
//             console.error('Calls Error retrieving getNFTByTokenId:', error);
//         }
      
//         response_data.push(_data) 
//         console.log("mintedon ",_data)
//         // const mintedon = await apis.getNFTByTokenId(1)
//         // console.log(mintedon)
//         const response = await alchemy.nft.getNftMetadata(
//             addresses[chainId].marketplace,
//             element.toString()
//           );
//         metadata[index] = response
//     }
//     console.log("HERE META>>>>>>>>>",metadata)
//     const ownedNFTs = metadata.map((nft , key) => {
//         return {
//           id: nft?.tokenId,
//           image: nft?.media[0]?.gateway != undefined ? nft?.media[0]?.gateway : "https://i.pinimg.com/originals/14/d9/79/14d979fe2a2b99728b0e7b08967304bd.jpg",
//           description: nft?.description,
//           mintedAt : response_data[key]?.mintedAt,
//           minterAddress : response_data[key]?.minterAddress,
//         };
//       });
//       console.log("HERE >>>>>>>>>",ownedNFTs)
//       return ownedNFTs;
//   } catch (error) {
//     console.error('Calls Error retrieving NFTs:', error);
//     throw error;
//   }
// }



// const mint = async (data ,account, library , chainId) => {
//     try {
//     console.log("data" , data)  
//     let signer = await loadProvider()
//     let price =  (Number(await PRICE_PER_NFT(account,library,chainId)) * data?.quantity).toString()  
//     console.log((Number(await PRICE_PER_NFT(account,library,chainId)) * data?.quantity).toString())
//     console.log(price)

//     const contract = new ethers.Contract(addresses[chainId].marketplace, NFT , signer)
//     let _mint = await contract.mintNFT(account ,data?.quantity, {value:price})
//     let tx = await _mint.wait()
//     ERROR.log_message("Successfully minted")
//     return {retun : true , quantity : data?.quantity} 
//     } catch (error) {
//     console.log(erro
// const PRICE_PER_NFT = async (account,library , chainId) => {
//     try {
//     let signer = await loadProvider()
//     console.log("CHAINNNNNNNNNNN" , chainId)
//     const contract = new ethers.Contract(addresses[chainId]?.marketplace, NFT , signer)
//     let _PRICE_PER_NFT = await contract.getPrice(account)
//     // let tokenURI = await contract.tokenURI(1)
//     // console.log("URI",tokenURI);
//     return _PRICE_PER_NFT.toString()
//     } catch (error) {
//         console.log("PRICE_PER_NFT" , error)   
//     }
// }

// const getMaxMint = async (account,chainId) => {
//     try {
//     let signer = await loadProvider()
//     console.log("CHAINNNNNNNNNNN" , chainId)
//     const contract = new ethers.Contract(addresses[chainId]?.marketplace, NFT , signer)
//     let _PRICE_PER_NFT = await contract.getMaxMint(account)
//     // let tokenURI = await contract.tokenURI(1)
//     // console.log("URI",tokenURI);
//     return _PRICE_PER_NFT.toString()
//     } catch (error) {
//         console.log("PRICE_PER_NFT" , error)   
//     }
// }

// const totalSupply = async (library , chainId) => {
//     try {
//     let signer = await loadProvider()
//     const contract = new ethers.Contract(addresses[chainId].marketplace, NFT , signer)
//     let _totalSupply = await contract.MAX_SUPPLY()
//     return _totalSupply.toString()
//     } catch (error) {
//         console.log("totalSupply" , error)   
//     }
// }
// const tokenIds = async (library , chainId) => {
//     try {
//     let signer = await loadProvider()
//     const contract = new ethers.Contract(addresses[chainId].marketplace, NFT , signer)
//     let _tokenIds = await contract.totalSupply()
//     // let _token = await contract.tokenURI(1)
//     // console.log("METAAAAAAAA" , _token)
//     return _tokenIds.toString()
//     } catch (error) {
//         console.log("_tokenIds" , error)   
//     }
// }

// const balanceOf = async (account , chainId) => {
//     try {
//     let signer = await loadProvider()
//     const contract = new ethers.Contract(addresses[chainId].marketplace, NFT , signer)
//     let balance = await contract.balanceOf(account)
//     return Number(balance.toString())
//     } catch (error) {
//         console.log("_tokenIds" , error)   
//     }
// }

// const generateSignature = async (customerData) => {
//     try {
//     let signer = await loadProvider()
//     // Convert customerData to a string
//     const message = JSON.stringify(customerData);
//     /// Convert the message to bytes
//     const messageBytes = ethers.utils.toUtf8Bytes(message);

//     // Hash the message
//     const messageHash = ethers.utils.keccak256(messageBytes);
//     // Sign the message hash
//     const signature = await signer.signMessage(ethers.utils.arrayify(messageHash));
//     return signature;
//     } catch (error) {
//         console.error('Error generating signature:', error);
//         ERROR.catch_error({message:"'Signature generation failed'"}, 'Signature')   //"REQUEST REJECTED"
//     }
// }

// const rejectSignature = async (account,library) => {
//     if (account && library) {
//       try {
//        // await library.send('eth_sign', [account, '0x']);
//         // Rejecting the signature request by sending an empty message to the `eth_sign` method
//         library.provider.request({
//             method: 'eth_requestAccounts',
//             params: [
//               {
//                 eth_accounts: {},
//               },
//             ],
//           });
//       } catch (error) {
//         console.error('Error rejecting signature:', error);
//       }
//     }
//   };)
//     console.log(error.error.code == -32603)
//     if(error.error.code == -32603)
//      ERROR.catch_error({message:"Max tokens minted"}, 'mint')   //"REQUEST REJECTED"
//     else
//     ERROR.catch_error({message:"REQUEST REJECTED"}, 'mint')   //"REQUEST REJECTED"
//      return {retun : true }
//     }
// }





return {
    // mint,
    // tokenIds,
    // totalSupply,
    // PRICE_PER_NFT,
    // balanceOf,
    // getOwnedNFTs,
    // generateSignature,
    // rejectSignature,
    // getMaxMint,
    transferEther
}

}
const calls = createContractCalls();


export default calls;