pragma solidity ^0.5.11;
// pragma solidity >=0.4.22 <0.6.0;

contract HelloWorld {

    // state variable
    string public greeting;

    constructor(string memory _greeting) public{
        greeting = _greeting;
    }

    function setGreeting(string memory _greeting) public {
        greeting = _greeting;
    }

    // view function
    function say() public view returns(string memory){
        return greeting;
    }
}

contract HelloThere{

    string public greeting = "Hello, there!";

    function say() public view returns(string memory){
        return greeting;
    }
}
