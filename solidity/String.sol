// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Example {
    function echo(string calldata input) public pure returns (string memory) {
        return input;
    }

    function HelloWorld() public pure returns (string memory) {
        return "hello World!";
    }

    function UseArray(
        string calldata userName
    ) public pure returns (string memory) {
        return string.concat("Hi ", userName);
    }
}
