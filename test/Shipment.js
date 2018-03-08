var Shipment = artifacts.require('./Shipment');


contract('Shipment', (accts) => {

  it('Testing Status: Accepted with Constructor', () => {
        return Shipment.deployed().then( (instance) => {
            return instance.status();
        }).then( (v) => {
          assert.equal(v.valueOf(), 0, "Status change to Initiated failed");
        });
  });

  it('Testing Status: ReadyForPickUp', () => {
    return Shipment.deployed().then( (instance) => {
      return instance.changeStatusToReadyForPickup().then(() => {
        return instance.status();
      });
    }).then( (v) => {
      assert.equal(v.valueOf(), 1, "Status change to ReadyForPickup failed");
    });
  });

  it('Testing Status: Accepted with function', () => {
    return Shipment.deployed().then( (instance) => {
      return instance.changeStatusToAccepted().then(() => {
        return instance.status();
      });
    }).then( (v) => {
      assert.equal(v.valueOf(), 2, "Status change to Accepted failed");
    });
  });

  it('Testing Status: Dispatched ', () => {
    return Shipment.deployed().then( (instance) => {
      return instance.changeStatusToDispatched().then(() => {
        return instance.status();
      });
    }).then( (v) => {
      assert.equal(v.valueOf(), 3, "Status change to Dispatched failed");
    });
  });

  it('Testing Status: PickedUp ', () => {
    return Shipment.deployed().then( (instance) => {
      return instance.changeStatusToPickedUp().then(() => {
        return instance.status();
      });
    }).then( (v) => {
      assert.equal(v.valueOf(), 4, "Status change to PickedUp failed");
    });
  });

  it('Testing Status: InTransit ', () => {
    return Shipment.deployed().then( (instance) => {
      return instance.changeStatusToInTransit().then(() => {
        return instance.status();
      });
    }).then( (v) => {
      assert.equal(v.valueOf(), 5, "Status change to InTransit failed");
    });
  });

  it('Testing Status: ShipmentArrived ', () => {
    return Shipment.deployed().then( (instance) => {
      return instance.changeStatusToShipmentArrived().then(() => {
        return instance.status();
      });
    }).then( (v) => {
      assert.equal(v.valueOf(), 6, "Status change to ShipmentArrived failed");
    });
  });

  it('Testing Status: Complete ', () => {
    return Shipment.deployed().then( (instance) => {
      return instance.changeStatusToComplete().then(() => {
        return instance.status();
      });
    }).then( (v) => {
      assert.equal(v.valueOf(), 7, "Status change to Complete failed");
    });
  });


});