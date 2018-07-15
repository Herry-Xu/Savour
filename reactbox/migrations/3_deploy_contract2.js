var MyContract = artifacts.require("./LocalEthereumEscrows.sol");

module.exports = function(deployer) {
  deployer.deploy(MyContract);
};
