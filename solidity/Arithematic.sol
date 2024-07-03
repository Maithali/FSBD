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

    //  Subtracting, multiplying, and dividing
    function sub(uint256 n1, uint216 n2) public pure returns (uint256) {
        uint256 minus = n1 - n2;
        return minus;
    }

    function multi(uint256 v1, uint256 v2) public pure returns (uint256) {
        uint256 mul = v1 * v2;
        return mul;
    }

    function div(uint256 dno1, uint256 dno2) public pure returns (uint256) {
        uint256 divi = dno1 / dno2;
        return divi;
    }
}
