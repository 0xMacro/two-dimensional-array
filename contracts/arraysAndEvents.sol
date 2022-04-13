// SPDX-License-Identifier: MIT

pragma solidity 0.8.2;

contract ArraysAndEvents {

    string[3] private v;
    string[] private w;
    string[][3] private x;

    struct Voter {
        uint weight;
        bool voted;
        address delegate;
        uint vote;
    }

    Voter[] private y;
    
    event MsgSent(address indexed sender, string message);
    event NoteAdded(string indexed summary, string detail);
}





