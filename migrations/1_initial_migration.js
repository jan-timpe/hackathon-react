var Migrations = artifacts.require("./Migrations.sol");
var Carrier = artifacts.require("./Carrier");
var CarrierContact = artifacts.require("./CarrierContact");
var CarrierDotInfo = artifacts.require("./CarrierDotInfo");
var CarrierEquipment = artifacts.require("./CarrierEquipment");
var Shipment = artifacts.require("./Shipment");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Carrier).then(() => {
    return deployer.deploy(Shipment, Carrier.address);
  });
  deployer.deploy(CarrierContact);
  deployer.deploy(CarrierDotInfo);
  deployer.deploy(CarrierEquipment);
  // deployer.deploy(Shipment, new Carrier());
};
