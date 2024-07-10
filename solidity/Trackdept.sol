// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract TackDebt {
    mapping(address => mapping(address => uint256)) public amountOwed;

    function setAmountOwed(
        address borrower,
        address lender,
        uint256 amount
    ) public {
        amountOwed[lender][borrower] = amount;
    }
}
