
# mintED TOASTS Frontend POC

## About this project
<br/>

<p>
    The intention of this app is to build a basic frontend to support the creation and management of ERC1155-based NFTs.  These NFTs are distributed as tokens of appreciation (TOASTs) to the NFT contract manager. 
  </p>

  <p>
    The app will have the following components:
  </p>

* Viewer: User views the Toasts in their wallet
* Explorer: User views NFTs in any wallet/contract combo
* Creator: Admin creates and distributes Toasts

<p>
  This project is based the Alchemy NFT API, and is generally a fork of their repo <a href="https://github.com/alchemyplatform/Build-Your-NFT-Explorer/">here</a>
</p>

## Key Components
<br/>

* React: javascript framework for frontend development
* Tailwind: CSS framework
* Alchemy API:  library for obtaining NFT data
<br/>

## Installation

Follow these steps to setup this repo:

### Prerequisites

- Node >= 16.13.x
### Installation


1. Clone the repo
   ```sh
   git clone https://github.com/alchemyplatform/Build-Your-NFT-Explorer.git
   ```
2. Install the dependencies
   ```sh
   npm install
   ```
   
3. Create an account on [Alchemy.com](https://www.alchemy.com/)
4. Grab your Alchemy API Key
5. Update `const apiKey = "demo";` in `src/utils/fetchNFTs.js` with your Alchemy API Key
6. Run the application
  ```sh
  npm start
  ```
  
<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

1. Insert a wallet address in the input field to retrieve all Ethereum NFTs associated with that address
2. Insert the Smart contract address to retrieve owned NFTs by contract address

_For more examples, please refer to the [Documentation](https://docs.alchemy.com/alchemy/enhanced-apis/nft-api)_

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



## License

Distributed under the MIT License.

## Contact

 - [gotminted.xyz](https://www.gotminted.xyz)

 This repo was originally created by the team at Alchemy:

- [@VittoStack](https://twitter.com/VittoStack)
- [@thatguyintech](https://twitter.com/thatguyintech)





