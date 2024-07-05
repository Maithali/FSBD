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
}
