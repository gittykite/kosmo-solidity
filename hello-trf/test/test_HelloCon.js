var helloWorld = artifacts.require("HelloWorld");

contract("HelloWorld-2", function(accounts){

    before(async () => {
        this.hello = await helloWorld.deployed();
    });

    it("should be same as constructor arg", async() => {
        const greeting = await hello.say();
        assert.equal(greeting, "Hello, World!");
    });

});
