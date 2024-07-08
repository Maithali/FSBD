// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract StoargeArray {
    uint256[] public myArray;

    function setMyArray(uint256[] calldata newArray) public {
        myArray = newArray;
    }

    function addToArray(uint256 newItem) public {
        myArray.push(newItem);
    }

    function getLength() public view returns (uint256) {
        return myArray.length;
    }

    function getEntireArray() public view returns (uint256[] memory) {
        return myArray;
    }
}
