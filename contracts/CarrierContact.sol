pragma solidity ^0.4.17;


contract CarrierContact {

    address public managingContract;
    string public firstName;
    string public lastName;
    string public jobTitle;
    string public contactType;
    string public phone;
    string public mobilePhone;
    string public fax;
    string public email;


    function CarrierContact(
        string _firstName,
        string _lastName,
        string _jobTitle,
        string _contactType,
        string _phone
    ) public 
    {
        managingContract = msg.sender;
        firstName = _firstName;
        lastName = _lastName;
        jobTitle = _jobTitle;
        contactType = _contactType;
        phone = _phone;
    }

    function setEverything(string _firstName, string _lastName) public {
        require(msg.sender == managingContract);
        firstName = _firstName;
        lastName = _lastName;
    }

    function set_firstName(string _val) public {
        require(msg.sender == managingContract);
        firstName = _val;
    }

    function set_lastName(string _val) public {
        require(msg.sender == managingContract);
        lastName = _val;
    }

    function set_jobTitle(string _val) public {
        require(msg.sender == managingContract);
        jobTitle = _val;
    }

    function set_contactType(string _val) public {
        require(msg.sender == managingContract);
        contactType = _val;
    }


    function set_phone(string _val) public {
        require(msg.sender == managingContract);
        phone = _val;
    }

    function set_mobilePhone(string _val) public {
        require(msg.sender == managingContract);
        mobilePhone = _val;
    }

    function set_fax(string _val) public {
        require(msg.sender == managingContract);
        fax = _val;
    }

    function set_email(string _val) public {
        require(msg.sender == managingContract);
        email = _val;
    }

}