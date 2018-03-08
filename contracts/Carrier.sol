pragma solidity ^0.4.17;
import "./CarrierContact.sol";
import "./CarrierDotInfo.sol";
import "./CarrierEquipment.sol";

contract Carrier {

    address public owner;
    address public dot_information;
    address[] public contacts;
    address[] public equipment;

    function Carrier() public {
        owner = msg.sender;
    }

    function addContact(
        string _firstName,
        string _lastName,
        string _jobTitle,
        string _contactType,
        string _phone
    ) public
    {
        require(msg.sender == owner);
        contacts.push(new CarrierContact(
            _firstName,
            _lastName,
            _jobTitle,
            _contactType,
            _phone
        ));
    }

    function getContacts() public view returns (address[]) {
        return contacts;
    }

    function addDotInformation(CarrierDotInfo _info) public {
        require(msg.sender == owner);
        dot_information = _info;
    }

    function addCarrierEquipment(CarrierEquipment _equip) public {
        require(msg.sender == owner);
        equipment.push(_equip);
    }

}