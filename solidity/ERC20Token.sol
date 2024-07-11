// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

// contract ERC20Token {
//     mapping(address => uint256) public  balances; //gives amount of the address

//     function setSomeonesBalance(address owner, uint256 amount) public  {
//        balances[owner] = amount; // sets address and amount
//     }

//     function transferTokenBetweenAddresses(address sender, address receiver, uint256 amount) public  {
//         balances[sender] -= amount; //debit the amount
//         balances[receiver] += amount; //credit the amount
//     }

contract ERC20 {
    string public name;
    string public symbol;

    constructor(string memory _name, string memory _symbol) {
        name = _name;
        symbol = _symbol;
    }
}
