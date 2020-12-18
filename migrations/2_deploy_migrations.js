

var Supplier = artifacts.require("./Supplier.sol");
var Customer = artifacts.require("./Customer.sol");

module.exports = function(deployer) {


    deployer.deploy(Supplier, {gas: 1000000}).then(function(){
      console.log('********* Supplier is deployed! *********');
    
      return deployer.deploy(Customer, {gas: 1000000}).then(function(){
        console.log('********* Customer is deployed! *********');
      });
    });
  };
  