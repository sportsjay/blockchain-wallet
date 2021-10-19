module.exports = {
  networks: {
    development: {
      host: "192.168.0.104",
      port: 8545,
      network_id: "*", // Match any network id
    },
  },
  contracts_directory: "./backend/contracts/",
  contracts_build_directory: "./backend/abis/",
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      evmVersion: "petersburg",
    },
  },
};
