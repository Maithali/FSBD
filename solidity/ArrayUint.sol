// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Example {
    function ArrayOfUint(
        uint256[] calldata input
    ) public pure returns (uint256[] memory) {
        return input;
    }
    function TryUint(
        uint256[] calldata values
    ) public pure returns (uint256[] memory) {
        return values;
    }

    function ReturnFirstElement(
        uint256[] calldata input
    ) public pure returns (uint256) {
        uint256 first = input[0];
        return first;
    }

    function SecondElement(
        uint256[] calldata value
    ) public pure returns (uint256) {
        uint256 second = value[1];
        return second;
    }
}
