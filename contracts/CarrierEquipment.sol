pragma solidity ^0.4.17;

contract CarrierEquipment {

    address public owner;
    string public identifier;
    string public description;
    uint public quantity;

    function CarrierEquipment() public {
        owner = msg.sender;
    }

    function set_identifier(string _val) public {
        require(msg.sender == owner);
        identifier = _val;
    }

    function set_description(string _val) public {
        require(msg.sender == owner);
        description = _val;
    }
    function set_quantity(uint _val) public {
        require(msg.sender == owner);
        quantity = _val;
    }

}