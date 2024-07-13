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
    uint8 public decimals;

    uint256 public totalSupply;

    //owner -> spender -> allowance
    //this enables an owner to give allowance to multiple address
    mapping(address => mapping(address => uint256)) public allowance;

    constructor(
        string memory _name,
        string memory _symbol //,uint8 decimals)
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

    // function transfer(address to, uint256 amount) public  returns (bool){
    //     require(balanceOf[msg.sender] >= amount , "you aint rich enough");
    //     require(to != address(0),"cannot send to address zero");
    //     balanceOf[msg.sender] -= amount;
    //     balanceOf[to] += amount;

    //     return true;

    // }

    function transfer(address to, uint256 amount) public returns (bool) {
        return helperTransfer(msg.sender, to, amount);
    }

    function approve(address spender, uint256 amount) public returns (bool) {
        allowance[msg.sender][spender] = amount;
        return true;
    }

    // function transferFrom(address from, address to, uint256 amount) public  returns (bool) {
    //         require(balanceOf[from] >= amount , "not enough balance");
    //         require(to != address(0),"Cannot send to addres(0)");

    //         if (msg.sender != from) {
    //             require(allowance[from][msg.sender] >= amount,"not enough allowance");

    //             allowance[from][msg.sender] -= amount;
    //         }

    //         balanceOf[from] -= amount;
    //         balanceOf[to] += amount;

    //         return  true;
    // }

    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) public returns (bool) {
        if (msg.sender != from) {
            require(
                allowance[from][msg.sender] >= amount,
                "not enough allowance"
            );

            allowance[from][msg.sender] -= amount;
        }

        return helperTransfer(from, to, amount);
    }

    // it's very important for this function to be internal!
    function helperTransfer(
        address from,
        address to,
        uint256 amount
    ) internal returns (bool) {
        require(balanceOf[from] >= amount, "not enough money");
        require(to != address(0), "cannot send to address(0)");
        balanceOf[from] -= amount;
        balanceOf[to] += amount;

        return true;
    }
}
