pragma solidity ^0.4.17;


contract Shipment {

    address public owner;
    address public carrier;
    string[] public contents;
    address public truck;


    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    } 

    enum Status {
        Initiated,
        ReadyForPickup,
        Accepted,
        Dispatched,
        PickedUp,
        InTransit,
        ShipmentArrived,
        Complete
    }
    Status public status;

    function Shipment(address _carrier) public {
        owner = msg.sender;
        carrier = _carrier;
        status = Status.Initiated;
    }

    function addShipmentItem(string _item) public {
        require(msg.sender == owner);
        contents.push(_item);
    }


    function deployTruck(address _truck) public {
        require(msg.sender == carrier);
        truck = _truck;
        status = Status.Accepted;
    }

    function changeStatusToReadyForPickup() onlyOwner public {
        status = Status.ReadyForPickup;
    }

    function changeStatusToAccepted() onlyOwner public { 
        status = Status.Accepted;
    }

    function changeStatusToDispatched() onlyOwner public {
        status = Status.Dispatched;
    }

    function changeStatusToPickedUp() onlyOwner public {
        status = Status.PickedUp;
    }

    function changeStatusToInTransit() onlyOwner public {
        status = Status.InTransit;
    }

    function changeStatusToShipmentArrived() onlyOwner public {
        status = Status.ShipmentArrived;
    }

    function changeStatusToComplete() onlyOwner public {
        status = Status.Complete;
    }


}