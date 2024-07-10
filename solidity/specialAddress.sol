// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract SpecialAddress {
    address public banker = 0x617F2E2fD72FD9D5503197092aC168c91465E7f2;

    mapping(address => uint256) public balances;

    function setSomeoneBalance(address owner, uint256 amount) public {
        if (msg.sender == banker) {
            balances[owner] = amount;
        }
    }

    function transferTokensBetweenAddresses(
        address sender,
        address receiver,
        uint256 amount
    ) public {
        if (msg.sender == banker) {
            balances[sender] -= amount;
            balances[receiver] += amount;
        }
    }
}
