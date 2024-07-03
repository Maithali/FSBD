contract Learing {
    function add() public pure returns (uint256) {
        uint256 sum = 10 + 5;
        return sum;
    }

    function addAnother() public pure returns (uint256) {
        uint256 x = 1;
        uint256 y = 2;
        uint256 anotherSum = x + y;
        return anotherSum;
    }

    function self(
        uint256 input1,
        uint256 input2
    ) public pure returns (uint256) {
        uint256 selfadd = input1 + input2;
        return selfadd;
    }

    function exp(uint256 no1, uint256 no2) public pure returns (uint256) {
        uint256 exp1 = no1 ** no2;
        return exp1;
    }

    function remain() public pure returns (uint256) {
        uint256 remainder = 10 % 4;
        return remainder;
    }
}
