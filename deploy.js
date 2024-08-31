// 311e8ca40c9a4e3ea42b8be40bfafb69
const HDWalletProvider = require('@truffle/hdwallet-provider');
const { Web3 } = require('web3');
const { interface, bytecode } = require("./compile");


const provider = new HDWalletProvider(
    "grit copper thank burden panther hood work border animal outer prosper stand",
    // remember to change this to your own phrase!
    "https://sepolia.infura.io/v3/311e8ca40c9a4e3ea42b8be40bfafb69"
    // remember to change this to your own endpoint!
  );
  const web3 = new Web3(provider);

  const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log("Attempting to deploy from account", accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
      .deploy({ data: bytecode, arguments: ["Hi there!"] })
      .send({ gas: "1000000", from: accounts[0] });

    console.log("Contract deployed to", result.options.address);
    provider.engine.stop();
  };
  deploy();