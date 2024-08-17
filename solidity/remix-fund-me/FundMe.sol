// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import {AggregatorV3Interface} from "@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol";

contract FundMe {
    uint256 public minimumUsd = 5e18;

    function fund() public payable {
        // allow users to send $
        // have a minimum of $ sent
        // How do we send ETH to this contract?
        require(
            getConvertionRate(msg.value) >= minimumUsd,
            "Didn't send enough ETH"
        ); //if the condition is false, revert with the error message
    }

    function getPrice() public view returns (uint256) {
        // Address 0x694AA1769357215DE4FAC081bf1f309aDC325306
        //ABI
        AggregatorV3Interface priceFeed = AggregatorV3Interface(
            0x694AA1769357215DE4FAC081bf1f309aDC325306
        );
        (, int256 price, , , ) = priceFeed.latestRoundData();
        //Price of Eth in terms of USD
        // 2000.00000000
        return uint256(price * 1e10);
    }

    function getConvertionRate(
        uint256 ethAmount
    ) public view returns (uint256) {
        uint256 ethPrice = getPrice();
        uint256 ethAmountInUsd = (ethPrice * ethAmount) / 1e18;
    }

    function getVersion() public view returns (uint256) {
        return
            AggregatorV3Interface(0x694AA1769357215DE4FAC081bf1f309aDC325306)
                .version();
    }
}
