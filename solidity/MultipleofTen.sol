// SPDX-License-Identifier: MIT
pragma  solidity ^0.8.13;

    contract ExampleIfStatement {
        function isAMultipleOfTen(uint256 x) public  pure  returns (bool) {
            if (x % 10 == 0) {
                return  true;
            }
            else {
                return false;
            }
        }
    }