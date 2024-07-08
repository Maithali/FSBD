// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract NestArray {
    function containsAThree(
        uint256[][] calldata nestedArray
    ) public pure returns (bool) {
        for (uint256 i = 0; i < nestedArray.length; i++) {
            for (uint256 j = 0; j < nestedArray[0].length; j++) {
                if (nestedArray[i][j] == 3) {
                    return true;
                }
            }
        }
        return false;
    } // [[1,2],[3,4]]true
    //[[65,78],[33,63]]

    function getRow(
        uint256[][] calldata nestedArray
    ) public pure returns (uint256[] memory) {
        return nestedArray[0]; //[[16,09],[19,97],[45,87]]]
    }

    //fixedSize
    function fixedSize(
        uint256[2][3] calldata nestedfixed
    ) public pure returns (uint256) {
        return nestedfixed[2][1]; //[[1,2],[3,4],[5,6]]
    }
}
