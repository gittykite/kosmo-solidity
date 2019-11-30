var helloWorld = artifacts.require("HelloWorld");
var helloThere = artifacts.require("HelloThere");

module.exports = function(deployer,network){
    //console.log(network);
    deployer.deploy(helloWorld, "Hello,World!");
    deployer.deploy(helloThere);
}
