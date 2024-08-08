// SPDX-License-Identifier: MIT
pragma solidity 0.8.19; //use only version 0.8.19
//pragma solidity ^0.8.19 //uses the latest version
//pragma solidity >=0.8.19 <0.9.0 //use versions between 0.8.19 and 0.9.0

contract SimpleStorage {
    //variable definition
    //baisc types
    // bool hasFavoriteNumber = true; // the variable has FavoriteNumber` represents the value `true`
    // uint256 favoriteNumber = 88;
    // string favoriteNumberInText = "eighty-eight";
    // int256 favoriteInt = -88;
    // address myAddress = 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4;
    // bytes32 favoriteBytes32 = "cat";
    // bytes1 minBytes = "I am a fixed size byte array of 1 byte";
    // bytes32 maxBytes = "I am a fixed size byte array of 32 bytes";
    // bytes dynamicBytes = "I am a dynamic array, so you can manipulate my size";

    //uint256 favoriteNumber; //a function will update this variable

    uint256 favoriteNumber; // storage variable: it's stored in a section of the blockchain called "Storage"

    uint256[] list_of_favorite_numbers = [0, 78, 90];

    struct Person {
        uint256 my_favorite_number;
        string name;
    }

    Person public my_friend = Person(7, "Mait");
    /* equals to
    Person public my_friend = Person({
     favoriteNumber:7,
     name:'Mait'});
    */

    Person[] public list_of_people; // this is a dynamic array
    Person[3] public another_list_of_three_people; // this is a static array

    function add_person(string memory _name, uint256 _favorite_number) public {
        list_of_people.push(Person(_favorite_number, _name));
    }

    function store(uint256 _favoriteNumber) public {
        // the variable favorite number is updated with the value that is contained into the parameter `_favoriteNumber`
        favoriteNumber = _favoriteNumber;
    }

    function retrieve() public view returns (uint256) {
        return favoriteNumber;
    }
}
