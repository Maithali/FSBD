// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract StorageVariable {
    uint256 internal x; //storage variables. They keep their value after the transaction ends
    //modifier internal. This means other smart contracts cannot see the value.
    function setX(uint256 newValue) public {
        x = newValue; //set 25
    }

    function getX() public view returns (uint256) {
        return x; //get 25
    }
}
