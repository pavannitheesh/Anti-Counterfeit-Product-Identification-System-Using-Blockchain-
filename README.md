# 🛡️ Anti-Counterfeit Product Identification System Using Blockchain

An innovative blockchain-based system to combat counterfeit products by leveraging the transparency, security, and immutability of blockchain technology.

## 📌 Project Overview

The **Anti-Counterfeit Product Identification System** is designed to ensure product authenticity by recording product information on the blockchain. This allows consumers and businesses to verify the legitimacy of a product, reducing the circulation of counterfeit goods.

## 🔍 Features

- **Product Registration**: Register products on the blockchain to track authenticity.
- **Product Verification**: Verify product authenticity using unique product identifiers.
- **Transparency**: Open and secure blockchain network for public verification.
- **Security**: Immutability and cryptographic security ensure data integrity.

## 🧰 Tech Stack

- **Solidity**: Smart Contract development
- **Hardhat**: Ethereum development and testing framework
- **ReactJS**: Frontend 
- **Ethers.js**: Interaction with the Ethereum blockchain
- **Node.js**: JavaScript runtime environment
- **Blockchain**: Ethereum Virtual Machine (EVM)

## 📂 Project Structure

```
├── contracts/          # Solidity smart contracts
│    └── Identeefi.sol  # Main contract for product registration
├── scripts/            # Deployment and interaction scripts
│    └── deploy.js      # Script to deploy the smart contract
├── test/               # Contract tests
├── hardhat.config.js   # Hardhat configuration
└── package.json        # Project dependencies
```

## 🚀 Getting Started

### Prerequisites
Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18.x or v20.x recommended)
- [Hardhat](https://hardhat.org/)

### 1. Clone the Repository
```bash
git clone https://github.com/pavannitheesh/Anti-Counterfeit-Product-Identification-System-Using-Blockchain
cd anti-counterfeit-blockchain
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Compile the Smart Contract
```bash
npx hardhat compile
```

### 4. Run a Local Blockchain Node
```bash
npx hardhat node
```

### 5. Deploy the Contract
```bash
npx hardhat run scripts/deploy.js --network localhost
```

### 6. Verify Deployment
Check the console output for the deployed contract address.

## 🧪 Testing

To run the tests and verify contract functionality:

```bash
npx hardhat test
```

## 📜 Smart Contract (Identeefi.sol)

Basic structure of the `Identeefi` contract:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "hardhat/console.sol";

contract Identeefi {
    address public owner; 

    struct Product {
        string name;
        string serialNumber;
        string description;
        string brand;
        string image;
        mapping(uint => ProductHistory) history;
        uint historySize;
    }

    mapping(string => Product) products;
    mapping(uint => ProductHistory) history;    

    struct ProductHistory {
        uint id;
        string actor;
        string location;
        string timestamp;
        bool isSold;
    }

    function registerProduct(string memory _name, string memory _brand, string memory _serialNumber, string memory _description, string memory _image,  string memory _actor, string memory _location, string memory _timestamp) public {
        Product storage p = products[_serialNumber];

        p.name = _name;
        p.brand = _brand;
        p.serialNumber = _serialNumber;
        p.description = _description;
        p.image = _image;
        p.historySize = 0;

        addProductHistory(_serialNumber,_actor, _location, _timestamp, false);
    }

    function addProductHistory(string memory _serialNumber, string memory _actor, string memory _location, string memory _timestamp, bool _isSold) public {
        Product storage p = products[_serialNumber];
        p.historySize++;
        p.history[p.historySize] = ProductHistory(p.historySize, _actor, _location, _timestamp, _isSold);

        console.log("i1: %s", p.historySize);
        console.log("Product History added: %s", p.history[p.historySize].actor);
        console.log("Product : %s", p.name);
    }

    function getProduct(string memory _serialNumber) public view returns (string memory, string memory, string memory, string memory, string memory, ProductHistory[] memory) {
        ProductHistory[] memory pHistory = new ProductHistory[](products[_serialNumber].historySize);

        for (uint i = 0; i < products[_serialNumber].historySize ; i++) {
            pHistory[i] = products[_serialNumber].history[i+1];            

        }

        return (products[_serialNumber].serialNumber, products[_serialNumber].name, products[_serialNumber].brand,products[_serialNumber].description, products[_serialNumber].image, pHistory);
    }

}
    
```

## 📊 Example Deployment Output

```
Deploying contracts with account: 0xYourWalletAddress
Account balance: 10000000000000000000000
Identeefi address: 0xDeployedContractAddress
```

## 📌 Future Improvements

- Add NFT-based product tokens for enhanced tracking.
- Implement user authentication and product transfer.
- Integrate with front-end for user-friendly verification.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature-name`)
3. Commit changes (`git commit -m 'Add feature'`)
4. Push to the branch (`git push origin feature-name`)
5. Open a Pull Request



- **Your Name**
- GitHub: [pavannitheesh](https://github.com/pavannitheesh)
- Email: gpavannitheesh1@gmail.com
---

Made with ❤️ using Blockchain & Solidity.

