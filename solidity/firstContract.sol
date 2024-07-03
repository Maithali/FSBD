// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

// contract defination
contract genralStructure {
    // state variables
    int public stateIntVariable; //variable of  integer type
    string stateStringVariable; // variable of string type
    address personIdentifier; // variable of address type
    myStruct human; // variable of structure type
    bool constant hasIncome = true; //variable of contant nature

    //structure defination
    struct myStruct {
        string name; //variable  of type string
        uint myAge; // variable of unsigned interger  type
        bool isMarried; //variable of  boolean type
        uint[] bankAccountNumbers; //variable-dynaic array of unsigned integer
    }
    //modifier  declaration
    modifier onlyBy() {
        if (msg.sender == personIdentifier) {
            _;
        }
    }

    //event  declaration
    event ageRead(address, int);

    //enumeration declaration
    enum gender {
        male,
        female
    }

    //function  defination
    function getAge(
        address _personIdentifier
    ) external payable onlyBy returns (uint) {
        human = myStruct("Maithali", 20, true, new uint[](3)); // //using struct myStruct
        gender _gender = gender.male; //using enum
        ageRead(personIdentifier, stateIntVariable);
    }
    //
}
