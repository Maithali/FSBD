// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract SumOFAll {
    function sum() public pure returns (uint256) {
        //    . Here is the code to add up all the numbers from 1 to 99
        uint256 addup = 0;

        for (uint256 i = 0; i < 100; i++) {
            // addup = addup + i;
            addup += i;
        }
        return addup;
    }
}
