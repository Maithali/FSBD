// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract MappingContract {
    mapping(uint256 => uint256) public myMapping;

    function setMapping(uint256 key, uint256 value) public {
        myMapping[key] = value;
    }

    function getValue(uint256 key) public view returns (uint256) {
        return myMapping[key];
    }

    //examples

    mapping(uint256 => uint256) public mapToUint;
    mapping(uint256 => address) public mapToAddress;
    mapping(uint256 => bool) public mapToBool;
}
