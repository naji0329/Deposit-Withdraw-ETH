require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

const testWallet = ['475fc9f6d57a7cde2cbe38d900d0c8c526826b63fbeb0e67d66e89b50aa145b4'];

const mnemonic = "";
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "mainnet",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    hardhat: {
    },
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/Y98YMqk5mLBKmR0xy-m91IsOxlcuIVNN/",
      chainId: 4,
      gasPrice: 20000000000,
      accounts: ['475fc9f6d57a7cde2cbe38d900d0c8c526826b63fbeb0e67d66e89b50aa145b4']
    },
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/Y98YMqk5mLBKmR0xy-m91IsOxlcuIVNN/",
      chainId: 3,
      gasPrice: 20000000000,
      accounts: testWallet
    },
    ethereummainnet: {
      url: "https://eth-mainnet.alchemyapi.io/v2/ceCjUJUuptARchZNQRB-8Fv-9dMXf4ni/",
      chainId: 1,
      gasPrice: 20000000000,
      accounts: testWallet
    },
    bsc_testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: testWallet
    },
    mainnet: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      gasPrice: 20000000000,
      accounts: testWallet
    }, 
    bsc_mainnet: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      gas: 2100000,
      gasPrice: 20000000000,
      accounts: testWallet
    }, 
    matictestnet: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/C3U5HLIr_fquQAKPyUvyYmhBbz7FIbuy",
      chainId: 80001,
      gasPrice: 20000000000,
      accounts: testWallet
    }, 
    fantomtestnet: {
      url: "https://rpc.testnet.fantom.network/",
      chainId: 4002, 
      gasPrice: 1000000000, 
      gas: 50000,
      accounts: testWallet
    }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://bscscan.com/
    // apiKey: "4R4PWC5XJU4KI7H4T3S3MJ8WMKT8NWJU2K",//bscscan
    // apiKey: "ERD4CBR4TE95MSZ43V98VJ2ISSMM4ZR2VX",//polygonscan
    // apiKey: '5U4M1GAVKJ14A856IDCVTU9833AYPBZ1YC' //ftmscan
    apiKey: "VH2CKUS6SV7VSCR2TFR5YU5PJPU33TQS1X", // Etherscan
  },
};
