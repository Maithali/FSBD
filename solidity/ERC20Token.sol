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
//}

contract ERC20 {
    string public name;
    string public symbol;

    mapping(address => uint256) public balanceOf;
    address public owner;
    uint256 public decimals;

    uint256 public totalSupply;

    constructor(
        string memory _name,
        string memory _symbol //uint8 decimals)
    ) {
        name = _name;

        symbol = _symbol;

        decimals = 18;

        owner = msg.sender;
    }

    function mint(address to, uint256 amount) public {
        require(msg.sender == owner, "only owner can create tokens");
        totalSupply += amount;
        balanceOf[owner] += amount;
    }

    function transfer(address to, uint256 amount) public {
        require(balanceOf[msg.sender] >= amount, "you aint rich enough");
        require(to != address(0), "cannot send to address zero");
        balanceOf[msg.sender] -= amount;
        balanceOf[to] += amount;
    }
}
