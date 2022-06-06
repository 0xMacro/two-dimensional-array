// SPDX-License-Identifier: MIT

pragma solidity 0.8.2;

contract Storage {

    uint[] public x = [1, 2, 3];

    function f(uint[] calldata y) external {
        x = y;
        uint[] storage z = x;
        g(z);
        h(z);
    }

    function g(uint[] storage v) private {
        v[1] = v[2];
    } 

    function h(uint[] memory w) private {
        w[2] = w[0];
    }

}
