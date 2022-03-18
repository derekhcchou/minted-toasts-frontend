import { useState } from 'react';
import NftCard from '../components/nftcard';
import Wallet from '../components/wallet';
import {fetchNFTs} from '../utils/fetchNFTs';

const Viewer = () => {

    const walletAddress = "0x534D4e82EA7eCA7F62c3fdf6D39A541be95Bf951";
    //const [walletAddress, setOwner] = useState("")

    const contractAddress = "0xa4A04947869D8201da08e5d9abfF0c5bA78689C5"; //process.env.REACT_APP_CONTRACT_ADDRESS;
    //const contractAddress = configData.CONTRACT_ADDRESSES.TOAST_POLYGON_MAINNET;  //toasts polygon address
    const [NFTs, setNFTs] = useState("")

    console.log("Contract Address: ", contractAddress);

    return (
        <div>
            <header className=' py-24  mb-12 w-full   alchemy'>
                <div className='flex-grow flex justify-end mr-12 mb-12'>
                </div>
                <div className='flex flex-col items-center mb-12'>
                    <div className='mb-16 text-white text-center'>
                        <h1 className='text-5xl  font-bold font-body mb-2'>
                            Toast Viewer
                        </h1>
                        <p>Display your Toasts by connecting your wallet </p>
                    </div>

                    <div className='flex flex-col items-center justify-center mb-4 w-2/6 gap-y-2' >
                        {         
                            <Wallet></Wallet>
                        }
                    </div>
                    <div className='w-2/6 flex justify-center'>
                    <button className='py-3 bg-white rounded-sm w-full hover:bg-slate-100' onClick={() => {fetchNFTs(walletAddress, contractAddress, setNFTs)}}>Display My Toasts</button>
                    </div>
                </div>
            </header>

            <section className='flex flex-wrap justify-center'>
                {
                    NFTs ? NFTs.map(NFT => {
                        
                        return (
                           <NftCard key={NFT.value.id + NFT.value.contractAddress} image={NFT.value.image} id={NFT.value.id} title={NFT.value.title} description={NFT.value.description} address={NFT.value.contractAddress} attributes={NFT.value.attributes}></NftCard>
                        )
                    }) : <div>No NFTs found</div>
                }
            </section>
        </div>
    )
}


export default Viewer