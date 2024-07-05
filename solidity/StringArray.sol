// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Example {
    function AddressArray(address[] calldata input)public  pure returns (address[] memory) {
        return input;
    }

    function StringArray(string[] calldata name) public  pure returns(string[] memory) {
        return name;
    }
}