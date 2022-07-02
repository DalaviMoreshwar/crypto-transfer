//
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/c00uQ-Dr4dY8IYhWIOcpXE5G8WHwgN75",
      accounts: [
        "44b7af90b85139c1bf03cfb03dbd5b50e3830b6b6203cb3f2a27fff2534ed972",
      ],
    },
  },
};
