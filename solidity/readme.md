# All Solidity Learning

## getting familar with solidity

![Example Contract](./output/eg1solidity.PNG)

[Example Contract](./ExampleContract.sol)

```javascript I'm A tab
console.log("Code Tab A");
```

```javascript I'm tab B
console.log("Code Tab B");
```

```solidity I'm tab B
contract ExampleContract {
    function getANumber() public pure returns (uint256) {
        uint256 x = 1;
        return x;
    }

    function getABoolean() public pure returns (bool) {
        bool y = true;
        return y;
    }

    function getAnAddress() public pure returns (address) {
        //Vitalik Buterin's address
        address z = 0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045;
        return z;
    }

    function getAnotherAddress() public pure returns (address) {
        // address of the USDC stablecoin
        address z2 = 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48;
        return z2;
    }
}

```

```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```
