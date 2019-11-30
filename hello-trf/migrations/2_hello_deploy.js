var helloWorld = artifacts.require("HelloWorld");

module.exports = function(deployer,network){
    //console.log(network);
    deployer.deploy(helloWorld, "Hello,World!");
}