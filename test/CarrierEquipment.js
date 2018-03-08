var CarrierEquipment = artifacts.require('./CarrierEquipment');


contract('CarrierEquipment', (accts) => {

  it('should update identifier', () => {
    return CarrierEquipment.deployed().then( (instance) => {
      return instance.set_identifier('testme').then(() => {
        return instance.identifier();
      });
    }).then( (v) => {
      assert.equal(v.valueOf(), "testme", "identifier wasnt updated");
    });
  });


  it('should update description', () => {
    return CarrierEquipment.deployed().then( (instance) => {
      return instance.set_description('testme').then(() => {
        return instance.description();
      });
    }).then( (v) => {
      assert.equal(v.valueOf(), "testme", "description wasnt updated");
    });
  });


  it('should update quantity', () => {
    return CarrierEquipment.deployed().then( (instance) => {
      return instance.set_quantity(666).then(() => {
        return instance.quantity();
      });
    }).then( (v) => {
      assert.equal(v.valueOf(), 666, "quantity wasnt updated");
    });
  });


});