var helloWorld= artifacts.require("HelloWorld");

contract("HelloWorld",function(accounts){

    it("should be same as constructor argument", function (){
        return helloWorld.deployed().then(function(instance){
            // check the result of say() => greeting
            return instance.say().then(function(greeting){
                assert.equal(greeting, "Hello, World!");
            })
        })
    });

    // same test as above 
    it("should be same as constructor argument", async function (){
        const hello = await helloWorld.deployed();
        const greeting = await hello.say();
        assert.equal(greeting, "Hello, World!");
    });

});
