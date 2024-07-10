// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract ExampleNestedMapping {
    mapping(uint256 => mapping(uint256 => uint256)) public nestedMapp;

    function setNestedMap(
        uint256 key1,
        uint256 key2,
        uint256 finalvalue
    ) public {
        nestedMapp[key1][key2] = finalvalue;
    }
}
