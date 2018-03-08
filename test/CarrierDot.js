var CarrierDotInfo = artifacts.require("./CarrierDotInfo");

contract('CarrierDotInfo', (accts) => {

  it('should update usDotNumber', () => {
    return CarrierDotInfo.deployed().then( (instance) => {
      return instance.setUsDotNumber("usDotNumber").then(()=> {
        return instance.usDotNumber()
      })
    }).then( (v) => {
      assert.equal(v.valueOf(), "usDotNumber", "set usDotNumber failed " );
    });
  });


  it('should update dbaName', () => {
    return CarrierDotInfo.deployed().then( (instance) => {
      return instance.setDbaName("dbaName").then(()=> {
        return instance.dbaName()
      })
    }).then( (v) => {
      assert.equal(v.valueOf(), "dbaName", "dbaName set failed " );
    });
  });

  it('should update legalName', () => {
    return CarrierDotInfo.deployed().then( (instance) => {
      return instance.setLegalName("legalName").then(()=> {
        return instance.legalName()
      })
    }).then( (v) => {
      assert.equal(v.valueOf(), "legalName", "legalName set failed " );
    });
  });

  it('should update streetAddress', () => {
    return CarrierDotInfo.deployed().then( (instance) => {
      return instance.setStreetAddress("streetAddress").then(()=> {
        return instance.streetAddress()
      })
    }).then( (v) => {
      assert.equal(v.valueOf(), "streetAddress", "set streetAddress failed " );
    });
  });

  it('should update streetPhone', () => {
    return CarrierDotInfo.deployed().then( (instance) => {
      return instance.setStreetPhone("streetPhone").then(()=> {
        return instance.streetPhone()
      })
    }).then( (v) => {
      assert.equal(v.valueOf(), "streetPhone", "set streetPhone failed " );
    });
  });

  it('should update mailingAddress', () => {
    return CarrierDotInfo.deployed().then( (instance) => {
      return instance.setMailingAddress("mailingAddress").then(()=> {
        return instance.mailingAddress()
      })
    }).then( (v) => {
      assert.equal(v.valueOf(), "mailingAddress", "set mailingAddress failed " );
    });
  });

  it('should update mailingPhone', () => {
    return CarrierDotInfo.deployed().then( (instance) => {
      return instance.setMailingPhone("mailingPhone").then(()=> {
        return instance.mailingPhone()
      })
    }).then( (v) => {
      assert.equal(v.valueOf(), "mailingPhone", "set mailingPhone failed " );
    });
  });

});
