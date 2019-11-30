var helloWorld = artifacts.require("HelloWorld");
var helloThere = artifacts.require("HelloThere");

contract("HelloWorld",function(accounts){

    it("should be same as constructor argument1", function (){
        return helloWorld.deployed().then(function(instance){
            // check the result of say() => greeting
            return instance.say().then(function(greeting){
                assert.equal(greeting, "Hello, World!");
            })
        })
    });

    // same test as above 
    it("should be same as constructor argument2", async function (){
        const hello = await helloWorld.deployed();
        const greeting = await hello.say();
        assert.equal(greeting, "Hello, World!");
    });

});

contract("HelloThere",function(accounts){

    it("should be same as constructor argument3", function (){
        return helloThere.deployed().then(function(instance){
            // check the result of say() => greeting
            return instance.say().then(function(greeting){
                assert.equal(greeting, "Hello, there!");
            })
        })
    });

    // same test as above 
    it("should be same as constructor argument4", async function (){
        const helloT = await helloThere.deployed();
        const greetingT = await helloT.say();
        console.log(greetingT);
        assert.equal(greetingT, "Hello, there!");
    });

});
