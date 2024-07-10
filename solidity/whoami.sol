// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract MsgSender {
    function whoami() public view returns (address) {
        address sender = msg.sender;
        return sender;
    }
}
