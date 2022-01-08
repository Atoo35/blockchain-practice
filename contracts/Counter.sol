// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Counter{
    uint public counter;
    constructor() public{
        counter = 0;
    }
    function increment() public{
        counter++;
    }
    function get() public view returns (uint){
        return counter;
    }
}