# kosmo-solidity
KOSMO Solidity lecture for developing ReactJS dApp

### 노드 환경 체크
$node -v  
$ npm config ls -l   

### Truffle 설치/갱신
$ npm install -g truffle  
$ npm update -g truffle  
$ truffle version  

### Truffle 시작
$ cd D:\blockchain\hello-trf  
$ truffle init  
$ truffle compile  
$ truffle migrate --network development  

* 오류나는 경우 $ npx truffle init  

### Truffle 단위테스트
$ truffle test  

### React 앱 생성
$ truffle create-react-app app_name  

 ---------------------------------------------------------------------
### Ganache 설치 (가상블록체인)
https://www.trufflesuite.com

### Ganache 실행
run Ganache  
Quick Start (reset & start)  

### Ganache 배포
+  Truffle Network 설정  
```
  networks: { 
    development: {  
     host: "127.0.0.1",     // Localhost (default: none)  
     port: 7545,            // Standard Ethereum port (default: none)  
     network_id: "5777",       // Any network (default: none)  
    },  
```

+ Migration Script 생성  
    ex) 2_hello_deploy.js

+ Migration Script 실행  
  $ truffle migrate --network development   
  *> 네트워크 비지정 시 첫번째 환경 default선택*

### Ganache 접속
+ Truffle 네트워크 목록  
  $ truffle networks  

+ Truffle 접속  
  $ truffle console --network development  

+ Truffle 컨트랙트 실행  
  $ hello = await HelloWorld.at("0x2eb252Da66D7176C6Ae804714223AFAbB3Df9c3E")  
  $ hello.address  
  $ hello.say()  
  $ tx =await hello.setGreeting("Hello there!")  
  $ hello.say() 

+ Truffle 내에서 Web3 참조  
  $ web3.version 
  $ accounts = await web3.eth.getAccounts()  
  $ accounts  

+ Truffle 컨트랙트 재실행  
 $ h = await HelloWorld.deployed()  
 $ h.address  
 $ h.say()  

### Ganache 테스트
+ Truffle 배포 실행  
  $ truffle migrate --reset  

+ Truffle 단위테스트  
 test_MyTest.js 작성  
```
var helloWorld= artifacts.require("HelloWorld");

contract("HelloWorld",function(accounts){

    it("should be same as constructor argument", function (){
        return helloWorld.deployed().then(function(instance){
            // check the result of say() => greeting
            return instance.say().then(function(greeting){
                assert.equal(gretting, "Hello, World!");
            })
        })
    });

    // same test as above 
    it("should be same as constructor argument", async function (){
        const hello = await helloWorld.deployed();
        const greeting = await hello.say();
        assert.equal(greeting, "Hello,World!");
    });

});
```
$ truffle test  

------------------------------------------------------------------------
### React 앱 설치
$ cd D:\blockchain  
$ npx create-react-app hello-react  

###  React 앱 실행
$ cd hello-react  
$ npm run start  

http://localhost:3000/

-------------------------------------------------------------------------
### 가나쉬 박스로 앱 생성
+ 리액트 박스  
$ npx truffle unbox react  
$ truffle develop  

+ 에러발생 시 python 설치 (관리자 모드 필요)  
$ npm install -g --production windows-build-tools --vs2015    

+ 앱 컴파일 &배포
$ truffle compile  
$ truffle migrate --network development  
$ cd ./client  
$ npm run start  
