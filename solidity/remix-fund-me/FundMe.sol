// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract FundMe {
    // send funds into our contract

    function fund() public payable {
        // allow users to send $
        // have a minimum of $ sent
        // How do we send ETH to this contract?
        require(msg.value > 1 ether, "Didn't send enough ETH"); //if the condition is false, revert with the error message
    }

    // owner can withdraw funds
    /*function withdraw() public {}*/
}
