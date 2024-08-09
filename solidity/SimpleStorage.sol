// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18; //solidity version

contract SimpleStorage {
    //favoriteNumber gets initialized to 0 if no value is given
    uint256 myFavoriteNumber;//0

    //uint256[] listOfFavoriteNumbers;
    struct Person{
            string name;
            uint256 favoriteNumber;

    }

    //dynamic array
    Person[] public  listOfPeople; //[]

    //chelsea -> 232
    mapping(string => uint256) public  nameToFavoriteNumber;

    function store(uint256 _favoriteNumber)public  {
        myFavoriteNumber = _favoriteNumber;
    }

    //view, pure
    function retrieve() public view  returns (uint256) {
        return myFavoriteNumber;

    //calldata, memory,storage
    function addPerson(string memory _name, uint256 _favoriteNumber) public {
        listOfPeople.push( Person(_name,_favoriteNumber));
        nameToFavoriteNumber[_name] = _favoriteNumber;
    }
}