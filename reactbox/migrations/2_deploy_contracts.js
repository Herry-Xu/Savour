var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var MyContract = artifacts.require("./MyContract.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(MyContract);
};
