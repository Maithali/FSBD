// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Example {
    //     function AddressArray(address[] calldata input)public  pure returns (address[] memory) {
    //         return input;
    //     }

    //     function StringArray(string[] calldata name) public  pure returns(string[] memory) {
    //         return name;
    //     }

    //     function BooleanArray(bool[] calldata value) public  pure  returns (bool[] memory) {
    //         return value;
    //     }

    //   function IntergerArray(uint256[] calldata no)public pure  returns (uint256[] memory) {
    //       return  no;
    //     }

    function echo(string calldata input) public pure returns (string memory) {
        return input;
    }
}
