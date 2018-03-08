var CarrierContact = artifacts.require('./CarrierContact');


contract('CarrierContact', (accts) => {

  it('should update first name', () => {
    return CarrierContact.deployed().then( (instance) => {
      return instance.set_firstName('testme').then(() => {
        return instance.firstName();
      });
    }).then( (v) => {
      assert.equal(v.valueOf(), "testme", "first name wasnt updated");
    });
  });


  it('should update last name', () => {
    return CarrierContact.deployed().then( (instance) => {
      return instance.set_lastName('testme').then(() => {
        return instance.lastName()
      });
    }).then( (v) => {
      assert.equal(v.valueOf(), "testme", "last name wasnt updated");
    });
  });



  it('should update job title', () => {
    return CarrierContact.deployed().then( (instance) => {
      return instance.set_jobTitle('testme').then(() => {
        return instance.jobTitle();
      });
    }).then( (v) => {
      assert.equal(v.valueOf(), "testme", "job title wasnt updated");
    });
  });


  it('should update contact type', () => {
    return CarrierContact.deployed().then( (instance) => {
      return instance.set_contactType('testme').then(() => {
        return instance.contactType();
      });
    }).then( (v) => {
      assert.equal(v.valueOf(), "testme", "contact type wasnt updated");
    });
  });


  it('should update phone', () => {
    return CarrierContact.deployed().then( (instance) => {
      return instance.set_phone('testme').then(() => {
        return instance.phone();
      });
    }).then( (v) => {
      assert.equal(v.valueOf(), "testme", "phone wasnt updated");
    });
  });


  it('should update mobile phone', () => {
    return CarrierContact.deployed().then( (instance) => {
      return instance.set_mobilePhone('testme').then(() => {
        return instance.mobilePhone();
      });
    }).then( (v) => {
      assert.equal(v.valueOf(), "testme", "mobile phone wasnt updated");
    });
  });


  it('should update fax', () => {
    return CarrierContact.deployed().then( (instance) => {
      return instance.set_fax('testme').then(() => {
        return instance.fax();
      });
    }).then( (v) => {
      assert.equal(v.valueOf(), "testme", "fax wasnt updated");
    });
  });


  it('should update email', () => {
    return CarrierContact.deployed().then( (instance) => {
      return instance.set_email('testme').then(() => {
        return instance.email();
      });
    }).then( (v) => {
      assert.equal(v.valueOf(), "testme", "email wasnt updated");
    });
  });


});