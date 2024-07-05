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

    function LengthOfAnArray(
        uint256[] calldata value
    ) public pure returns (uint256) {
        uint256 len = value.length;
        return len;
    }

    function LoopInArray(
        uint256[] calldata value
    ) public pure returns (uint256) {
        uint256 product = 1;

        for (uint256 i = 0; i < value.length; i++) {
            product *= value[i];
        }
        return product;
    }

    function productOfarray(
        uint256[] calldata myArray
    ) public pure returns (uint256) {
        uint256 product = 1;
        for (uint256 i = 0; i < myArray.length; i++) {
            product *= myArray[i];
        }

        return product;
    }

    function LastElementOfArray(
        uint256[] calldata numbers
    ) public pure returns (uint) {
        uint256 lastElement = numbers.length - 1;
        return lastElement;
    }
}
