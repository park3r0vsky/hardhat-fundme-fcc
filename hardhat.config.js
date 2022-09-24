require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()
require("hardhat-deploy")

const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || "0"
const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL || "0"
const PRIVATE_KEY = process.env.PRIVATE_KEY || "0x00"
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "0"

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    //solidity: "0.8.17",
    solidity: {
        compilers: [{ version: "0.8.17" }, { version: "0.6.6" }],
    },
    defaultNetwork: "hardhat",
    networks: {
        goerli: {
            url: GOERLI_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 5,
            blockConfirmations: 6,
        },
    },
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
    namedAccounts: {
        deployer: {
            default: 0, // here this will by default take the first account as deployer
            1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
        },
    },
    gasReporter: {
        enabled: true,
        outputFile: "gas-report.txt",
        noColors: true,
        currency: "USD",
        coinmarketcap: COINMARKETCAP_API_KEY,
        token: "ETH",
    },
    mocha: {
        timeout: 100000,
    },
}
