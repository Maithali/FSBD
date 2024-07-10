// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

//This implementation has a flaw that anyone can invoke the public functions and send tokens between addresses willy-nilly, but we’ll fix that later.

contract ERC20Token {
    mapping(address => uint256) public balances; //gives amount of the address

    function setSomeonesBalance(address owner, uint256 amount) public {
        balances[owner] = amount; // sets address and amount
    }

    function transferTokenBetweenAddresses(
        address sender,
        address receiver,
        uint256 amount
    ) public {
        balances[sender] -= amount; //debit the amount
        balances[receiver] += amount; //credit the amount
    }
}
